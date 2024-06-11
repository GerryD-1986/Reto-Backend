const express = require("express");
const albumUsecase = require("../useCases/album.usecase");


const router = express.Router();

router.post("/", async (request,response)=>{
    try{
        const createAlbum = await albumUsecase.createAlbum(albumData);
        response.json({
            success: true,
            data: {createAlbum},
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