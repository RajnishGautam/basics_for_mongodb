//ExpressJS>Mongooseexpress1.js
const mongoose=require('mongoose');
const insert=async()=>{
    await mongoose.connect("mongodb://localhost:27017/SureTrust2");
    const userSchema=new mongoose.Schema({
        Name:String,
        Age:Number
        });
        const User=mongoose.model('User',userSchema);
        const user=new User({Name:'XYZ',Age:20,Hobbies:'GYM'});
        var a=await user.save();
        console.log(a);
}
insert();   