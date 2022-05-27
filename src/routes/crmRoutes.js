import { addNewContact,getContacts,getContactById,updateContact,deleteContact} from "../Controllers/crmController.js"
const routes=(app)=>{
    app.route('/contact')
    .get((req,res,next)=>{
        console.log(`url:${req.originalUrl}`)
        console.log(`Request Type:${req.method}`)
        next()
    },getContacts)
    .post(addNewContact)
    app.route('/contact/:contactID')
    .get(getContactById)
    .put(updateContact)
    .delete(deleteContact)
}
export default routes;