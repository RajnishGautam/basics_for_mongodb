//ExpressJS>deletemanyexpress.js
const connectdb = require('./connection');

const deleteManyData = async () => {
  let data = await connectdb();
  let result = await data.deleteMany({ $or:
     [{ Name: 'XYZ' },//entries to delete
     { Name: 'ABC' }] //entries to delete
    });
  console.warn("Data deleted successfully", result);
}

deleteManyData();