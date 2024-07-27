//ExpressJS>insertmanyexpress2.js

const connectdb1=require('./connection');
const insert=async()=>{
    const db=await connectdb1();  
    // const result=await db.insertOne({Name:'Nitish',Age:21,Hobbies:'Boxing'});
    const result=await db.insertMany(
        [{Name:'XYZ',Age:18,Hobbies:'Gaming'},
        {Name:'ABC',Age:20,Favouritecolour:'Blue'},
        // {Name:'Tejaswani',Age:18,Favouritecolour:'Pink'},
        // {Name:'Bhanu',Age:20,Hobbies:'Coding'}
    ]);
    if(result.acknowledged)
        console.log('Data inserted successfully');
}
insert();