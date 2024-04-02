const express = require('express');
const router = express.Router();
const UserList = require('../models/UsersList');

//POST
router.post('/',async(req,res)=>{
    const createUser= new UserList({
        
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact
    });
    try{
        const saveUser = await createUser.save();
        res.send(saveUser);
    }catch(error){
        res.status(400).send(error)
    }
})

//GET
router.get('/',async(req,res)=>{
    try{
        const getUser = await UserList.find();
        res.send(getUser);
    }catch(error){
        res.status(400).send(error)
    }
})

//PUT
router.put('/:id', async(res, req)=>{
    try{
        const updateUser = await UserList.findByIdAndUpdate(req.params.id, req.body, {
            new : true, //return the updated document instead of the original one 
        });
        res.send(updateUser);
    }catch(error){
        res.status(400).send(error)
    }
})

//DELETE
router.delete('/:id', async(req, res)=>{
    try{
        const removeUser = await UserList.findByIdAndRemove(req.params.id);
        res.send(removeUser);
    }catch(error){
        res.status(400).send(error)
    }
})

module.exports = router