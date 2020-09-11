
function structureUserInfo(role) {
    return function (name) {
        return {
            role: role,
            name: name
        }
    }
}
let userInfo = structureUserInfo('Admin')('John')
console.log(userInfo);