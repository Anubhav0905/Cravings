const mongoose = require('mongoose')
const mongoURI = "mongodb://Cravings:Pitaji@905@cluster0.klt2j.mongodb.net/CravingDB?retryWrites=true&w=majority&appName=Cluster0"


const connectToMongo = async () => {
    try {
        await mongoose.connect("mongodb+srv://AnubhavShukla:Cravings123@cravingdb.agknl.mongodb.net/?retryWrites=true&w=majority&appName=CravingDB")
  
        console.log('Connected successfully');
        const fetched_data = await mongoose.connection.db.collection("food_items");
        let fooddata = await fetched_data.find({}).toArray()
          global.food_items = fooddata;

        const fetched_data2 = await mongoose.connection.db.collection("food_category");
        let foodcategory = await fetched_data2.find({}).toArray()
          global.food_category = foodcategory;

    }
    catch(error) {
        console.log(error.message)
    }
  }

module.exports = connectToMongo;