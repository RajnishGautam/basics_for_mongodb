//ExpressJS>updatemanyexpress2.js
const connectdb=require('./connection');
const update=async()=>{
    let d=await connectdb();
    let data=await d.updateMany({$or:
        [{Name:'ABC'},{$set:{Age:50}},//entries to update
        {Name:'XYZ'},{$set:{Age:40}}]//entries to update
        });
    console.warn("Data Updated");
}
update();