const sessionIdToUserMap=new Map();

function setUser(sessionId,user) {
    const data=sessionIdToUserMap.set(sessionId,user)
    console.log(data.keys())
    return data.keys()
}
function getUser(sessionId) {
    if (!sessionIdToUserMap.has(sessionId)) {
        console.log("Session ID not found:", sessionId);
        return null;
    }
    console.log("User found:", sessionIdToUserMap.get(sessionId));
    return sessionIdToUserMap.get(sessionId);
}
export {setUser,getUser}