import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModules.js";
const Contact =mongoose.model('Contact',ContactSchema)

export const addNewContact=(req,res)=>{
    let newContact=new Contact(req.body)
    newContact.save((err,contact)=>{
        if(err){
            res.send(err)
        }
        res.json(contact)
    })
}
//get all
export const getContacts=(req,res)=>{
    
    Contact.find({},(err,contact)=>{
        if(err){
            res.send(err)
        }
        res.json(contact)
    })
}
//get by id
export const getContactById=(req,res)=>{
    Contact.findById(req.params.contactID,(err,contact)=>{
        if(err){
            res.send(err)
        }
        res.json(contact)
    })
}
//update
export const updateContact=(req,res)=>{
    Contact.findByIdAndUpdate({_id:req.params.contactID},req.body,{new: true,useFindAndModify:false},(err,contact)=>{
        if(err){
            res.send(err)
        }
        res.json(contact)
    })
}
//delete
export const deleteContact=(req,res)=>{
    Contact.remove({_id:req.params.contactID},(err,contact)=>{
        if(err){
            res.send(err)
        }
        res.json({messsage:"successfully deleted contact"})
    })
}
