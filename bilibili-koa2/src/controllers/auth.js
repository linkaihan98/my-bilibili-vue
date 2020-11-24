async function login(ctx, next) {
    ctx.body = 'Login controller';
}

async function register(ctx, next) {
    ctx.body = 'Register controller';
}

module.exports = {
    login,
    register
}
