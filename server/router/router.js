import express from 'express';
const router=express.Router();


router.get("/",(req,res)=>{
    res.send("hellow surya");
})
 
router.get("/dyo", (req,res)=>{
    res.send("Hellow DYO")
   } )

   router.post("/signup", async (req,res)=>{
    try{
        const { firstName, lastName, email, phone,password } = req.body;
        console.log("First Name:", firstName);
        console.log("last Name:", lastName);
        console.log("email:", email);
        console.log("phone:", phone);
        console.log("............",req.body);


        res.status(200).json({ message: 'Signup successful' });


    }catch(error){
        console.error('Error during signup:', error);
        res.status(500).json({ error: 'Signup failed' });
    }
    
   })
   router.post("/login", async (req,res)=>{
    try{
        const {  email, password } = req.body;
        
        console.log("email:", email);
        
        console.log("............",req.body);


        res.status(200).json({ message: 'login successful' });


    }catch(error){
        console.error('Error during signup:', error);
        res.status(500).json({ error: 'Signup failed' });
    }
    
   })

export default router;