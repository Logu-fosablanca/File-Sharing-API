const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const File = require('../models/file')
const { v4 : uuidv4 }= require('uuid');


//We Are Using this Software Library called mutler to Upload the files into the data base 
let storage = multer.diskStorage({
    //Finding the Destination
    destination: (req, file, cb) => cb(null, 'uploads/'),
    //File Name for the Program
    filename: (req, file, cb) => {
        const uniquename =`${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniquename);
    },

});

let upload = multer({
    storage,
    limit: { fileSize: 100000 * 100 },//maximum Size of 10MB
}).single('myfile');


router.post('/', (req, res) => {    
    //Store File
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).send({ error: err.message });
        }
        // Validate Request
        if (!req.file) {
            return res.json({ error: " All Fields Are required " });
        }

      
    //Store into DB        
        //Data From the multer Storage Library
    const file = new File({
        filename: req.file.filename,
        uuid: uuidv4(),
        path: req.file.path,
        size : req.file.size

    });

    const response = await file.save();
    return res.json({file:`${process.env.APP_BASE_URL}/files/${response.uuid}`});
    //HTTP Local Host 
    });
    //Response and link
});

module.exports = router;