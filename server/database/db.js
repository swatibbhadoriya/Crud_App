import mongoose from "mongoose";


const Connection = async(username, password) => {

    const URL = `mongodb://${username}:${password}@ac-y2xkrtd-shard-00-00.jhxztte.mongodb.net:27017,ac-y2xkrtd-shard-00-01.jhxztte.mongodb.net:27017,ac-y2xkrtd-shard-00-02.jhxztte.mongodb.net:27017/CRUD-APP?ssl=true&replicaSet=atlas-kkk1j5-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true})
        console.log('Database connected successfully');
    } catch (error){
        console.log('Error while connecting with the databse', error);
    }
}

export default Connection;