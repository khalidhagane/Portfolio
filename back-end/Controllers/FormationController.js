const asyncHandler = require('express-async-handler');
const FormationSchema = require('../Models/FormationModel');

// method : get
// url : /api/formation/getallformation
// access : formation
// get all formation
const getAllFormation = asyncHandler(async (req, res) => {
    try{
       const data = await FormationSchema.findAll()
        res
        .status(200).send({data})
        .console.log({data})
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

// method : get
// url : /api/formation/getOneFormation
// access : formation
// get one formation
const getOneFormation = asyncHandler(async (req, res) => {
    const id = req.params.id
console.log('iddd',id);
    try{
        
         const data = await FormationSchema.findOne({_id:id})
         console.log('dataaaaaaaaaa',data);
        // res.status(200).send(data)
       
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

// method : post
// url : /api/formation/addformation
// access : formation
// add formation
 const addFormation = asyncHandler(async (req, res) => {
    const { title, date1, date2, campo } = req.body
    try{
           const data =  await FormationSchema.create({
            title: title,
            date1: date1,
            date2: date2,
            campo: campo,
        })
        res.status(200).json(
            console.log('datatttttt',data)
        )
        }catch(error){
            res.status(400)
            console.log(error)
            throw new Error(error)
        }
 })

 // method : update
// url : /api/formation/updateFormation
// access : formation
// update Formation
 const updateFormation = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    const { title, date1, date2, campo } = req.body
    if(FormationSchema){
        try {
            await FormationSchema.updateOne({
            title:title,
            date1:date1,
            date2:date2,
            campo:campo,
            },{where:{id}})
            res.status(200).send({message:"update formation success"})
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
// url : /api/formation/deleteFormation
// access : formation
// delete Formation
const deleteFormation = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    try {
         await FormationSchema.destroy({where:{id}})
        res.status(200).send({message:"delete formation success"})
    } catch (error) {
        console.log(error)
        res.status(400)
        throw new Error(error)
    }
})

module.exports  = {addFormation,getAllFormation,updateFormation,deleteFormation,getOneFormation}
