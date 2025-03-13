const sessionIdToUserMap=new Map();

function setUser(sessionId,user) {
    const data=sessionIdToUserMap.set(sessionId,user)
    console.log(data.keys())
    return data.keys()
}
function getUser(sessionId) {
    console.log(sessionIdToUserMap.get(sessionId))
    return sessionIdToUserMap.get(sessionId);

}
export {setUser,getUser}