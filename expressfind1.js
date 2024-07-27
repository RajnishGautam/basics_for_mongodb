//ExpressJS>expressfind1.js

const connectdb=require('./connection');
const find1=async()=>{
    const data=await connectdb();
    let r=await data.find().toArray();
    console.log(r);
}
find1();
