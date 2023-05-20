import axios from 'axios';

const URL = 'http://localhost:8002';
export const addUser = async (data) =>{
    try{
        return await axios.post(`${URL}/add`, data);
    }catch(error) {
        console.log('Error while adding user ', error);
    }
}

export const getUsers = async () => {
    try{
        return await axios.get(`${URL}/userList`);
    } catch (error) {
        console.log('Error while calling getUsers Api ', error);
    }
}

export const getUser =async(id)=>{
    try{
return await axios.get(`${URL}/${id}`);
    }
    catch(error){
        console.log(`Error While calling getUser Api`,error)
    }
}
export const editUser = async (user,id) =>{
    try{
        return await axios.put(`${URL}/${id}`, user);
    }catch(error) {
        console.log('Error while edituser api ', error);
    }
}
export const deleteUser = async (id) =>{
    try{
        return await axios.delete(`${URL}/${id}`);
    }catch(error) {
        console.log('Error while deleteuser api ', error);
    }
}
