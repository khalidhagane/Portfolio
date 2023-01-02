const asyncHandler = require('express-async-handler');
const ProjetSchema = require('../Models/ProjetModel');

// method : get
// url : /api/projet/getallprojet
// access : projet
// get all projet
const getAllProjet = asyncHandler(async (req, res) => {
    try{
        await ProjetSchema.findAll()
        res
        .status(200).send({data})
        .console.log({data})
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

// method : get
// url : /api/projet/getOneprojet
// access : projet
// get one projet
const getOneProjet = asyncHandler(async (req, res) => {
    const id = req.params.id
    try{
         await ProjetSchema.findOne({where:{id}})
        res.status(200).send(data)
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

// method : post
// url : /api/projet/addprojet
// access : projet
// add projet
 const addProjet = asyncHandler(async (req, res) => {
    const { title, description, technologe, github, dimo } = req.body

    const img = [];
        await req.files.forEach((filePath) => {
        const path = filePath.path.split("\\")
        const imgPath = "/" + path[1] + "/" + path[2];
        img.push(imgPath);
        });
        console.log("iamge",img)

    try{
            await ProjetSchema.create({
            title:title,
            description:description,
            technologe:technologe,
            github:github,
            dimo:dimo,
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
// url : /api/projet/updateprojet
// access : projet
// update projet
 const updateProjet = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    const { title, description, technologe, github, dimo } = req.body
    if(ProjetSchema){
        try {
            await ProjetSchema.updateOne({
                title:title,
                description:description,
                technologe:technologe,
                github:github,
                dimo:dimo,
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
// url : /api/projet/deleteprojet
// access : projet
// delete projet
const deleteProjet = asyncHandler( async(req,res)=>{
    const id =  req.params.id;
    try {
         await ProjetSchema.destroy({where:{id}})
        res.status(200).send({message:"delete formation success"})
    } catch (error) {
        res.status(400)
        throw new Error(error)
    }
})

module.exports  = {addProjet,getAllProjet,updateProjet,deleteProjet,getOneProjet}
