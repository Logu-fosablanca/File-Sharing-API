const router = require('express').Router();
const { response } = require('express');
const File = require('../models/file')

router.get('/:uuid', async (req,res)=>{
    try{
        const file = await File.findOne({ uuid: req.params.uuid });
        
        if(!file){
            return res.render('download', { error: "Link has been Expired" });
        }
        return res.render('download',{
            uuid: file.uuid,
            fileName : file.filename ,
            fileSize: file.size,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`,
         
        })
    }
    catch(err){
        return res.render('download',{error: "Something Went Wrong"});

    }
    

})

//This Page is to Discover the Download URL 
module.exports = router