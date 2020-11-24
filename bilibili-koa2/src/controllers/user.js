async function listUsers(ctx) {
    ctx.body = 'ListUsers controller';
}

async function showUserDetail(ctx) {
    ctx.body = `ShowUserDetail controller with ID = ${ctx.params.id}`;
}

async function updateUser(ctx) {
    ctx.body = `UpdateUser controller with ID = ${ctx.params.id}`;
}

async function deleteUser(ctx) {
    ctx.body = `DeleteUser controller with ID = ${ctx.params.id}`;
}


module.exports = {
    listUsers,
    showUserDetail,
    updateUser,
    deleteUser
}
