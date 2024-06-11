const express = require("express");
const ordenUseCase = require("../useCases/orden.usecase");
const router = express.Router();

router.post("/", async (request,response)=>{
    try{
        const createOrden = await ordenUseCase.createOrden(ordenData);
        response.json({
            success: true,
            data: {createOrden},
        });
            

        

    }catch(error){
        response.status(error.status || 500);
        response.json({
            sucess: false,
            error: error.message
        });
    }
});

module.exports = router;