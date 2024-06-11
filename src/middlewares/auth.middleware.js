const createError = require("http-errors");
const userUseCase = require("../useCases/users.usecase");


const jwt = require("../lib/jwt");

async function auth(request,response, next){
    try{
        const token = request.headers.authorization;

        if(!token){
            throw createHttpError(401, "JWT is required");
        }

        jwt.verify(token);

        const user = await userUseCase.getById(payload.id);

        request.user = user;

    }catch(error){
        response.status(401);
        response.json({
            sucess:false,
            error: error.message,
        }); 
    }
}

module.exports = auth;