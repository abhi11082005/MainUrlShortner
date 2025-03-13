import { getUser } from "../service/auth.js";

async function authMiddleware(req, res, next) {
    try {
        const userId = req.cookies?.userLogin;
        console.log(userId)
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized: No user ID found", redirect: "/login" });
        }

        const user = await getUser(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found", redirect: "/login" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in authMiddleware:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export default authMiddleware;
