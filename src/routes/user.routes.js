const express = require("express");
const userUseCase = require("../useCases/users.usecase");
const auth = require("../middlewares/auth.middleware");
const router = express.Router();


//get /users
router.get("/", auth, async(request, response)=>{
    try{

        const users = await userUseCase.getAll();
        response.json({
            sucess: true,
            data:{users},
        });
    }catch(error){
      response.status(error.status || 500);
      response.json({
        sucess:false,
        error: error.message,
      });
    }
});

//post /users
router.post("/", async (request,response)=>{
    try{

        const userCreated = await userUseCase.create(request.body);
        response.json({
            sucess: true,
            data:{user: userCreated},
        });
    }catch(error){
      response.status(error.status || 500);
      response.json({
        sucess:false,
        error: error.message,
      });
    }
});

//get /users/:id
router.get("/:id", auth, async (request, response)=>{
    try{
        const id = request.params.id;
        const user = await userUseCase.getById(id);
        response.json({
            sucess:true,
            data:{user},
        });
    }catch(error){
      response.status(error.status || 500);
      response.json({
        sucess:false,
        error: error.message,
      });
    }
});

//delete /users/:id
router.delete("/:id", auth, async (request,response)=>{
 try{
    const {id}=request.params;
    const userDeleted = await userUseCase.deleteById(id);
    response.json({
        sucess:true,
        data:{user: userDeleted},
    });
 }catch(error){
      response.status(error.status || 500);
      response.json({
        sucess:false,
        error: error.message,
      });
    }
});

//path /users/:id
router.patch("/:id", auth, async (request,response)=>{
    try{
        const {id}=request.params;
        const userUpdate = await userUseCase.updateById(id, request.body);
     response.json({
        sucess:true,
        data: {user: userUpdate},
     });
    }catch(error){
      response.status(error.status || 500);
      response.json({
        sucess:false,
        error: error.message,
      });
    }
});

module.exports = router;