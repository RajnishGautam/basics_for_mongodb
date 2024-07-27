//ExpressJS>updateoneexpress1.js
const connectdb=require('./connection');
const update=async()=>{
    let d=await connectdb();
    let data=await d.updateOne({
        Name:'Nitish'},{$set:{Age:20}}
    );
    console.warn("Data Updated");
}
update();