//ExpressJS>deleteoneexpress1.js
const connectdb=require('./connection');
//es is known as ECMAScript 
const deletedata=async ()=>{
    let data=await connectdb();
    let result=await data.deleteOne({Name :'d'});
    console.warn("Data deleted successfully",result);
}
deletedata();