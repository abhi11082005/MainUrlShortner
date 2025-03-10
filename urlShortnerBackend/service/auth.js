const sessionIdToUserMap=new Map();

function setUser(sessionId,user) {
    return sessionIdToUserMap.set(sessionId,user)
}
function getUser(sessionId) {
    console.log(sessionIdToUserMap.get(sessionId))
    return sessionIdToUserMap.get(sessionId);

}
export {setUser,getUser}