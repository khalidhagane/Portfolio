const asyncHandler = require('express-async-handler');
const FormationSchema = require('../Models/CertifModel');

// method : get
// url : /api/certif/getallcertif
// access : certif
// get all certif
const getAllCertif = asyncHandler(async (req, res) => {
    try{
        await FormationSchema.findAll()
        res
        .status(200).send({data})
        .console.log({data})
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

// method : get
// url : /api/certif/getOneCertif
// access : certif
// get one certif
const getOneCertif = asyncHandler(async (req, res) => {
    const id = req.params.id
    try{
         await FormationSchema.findOne({where:{id}})
        res.status(200).send(data)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

// method : post
// url : /api/certif/addCertif
// access : certif
// add certif
 const addCertif = asyncHandler(async (req, res) => {
    const { title, _id, date,  } = req.body
    try{
            await FormationSchema.create({
            title: title,
            _id: _id,
            date: date,
        })
        res.status(200).json(
            console.log(data)
        )
        }catch(error){
            res.status(400)
            console.log(error)
            throw new Error(error)
        }
 })

 // method : update
// url : /api/certif/updateCertif
// access : certif
// update certif
 const updateCertif = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    const { title, _id, date } = req.body
    if(FormationSchema){
        try {
            await FormationSchema.updateOne({
            title:title,
            _id:_id,
            date:date,
            },{where:{id}})
            res.status(200).send({message:"update Certif success"})
        } catch (error) {
            res.status(400)
            throw new Error(error)
        }
    }else{
        res.status(400)
        throw new Error("Please add a text field")
    }
})

// method : delete
// url : /api/certif/deletecertif
// access : certif
// delete certif
const deleteCertif = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    try {
         await FormationSchema.destroy({where:{id}})
        res.status(200).send({message:"delete formation success"})
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

module.exports  = {addCertif,getAllCertif,updateCertif,deleteCertif,getOneCertif}
