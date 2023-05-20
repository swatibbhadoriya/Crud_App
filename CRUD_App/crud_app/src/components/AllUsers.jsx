import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow,styled,Button } from "@mui/material"
import {Link} from 'react-router-dom';
import { getUsers,deleteUser } from "../service/api";

const StyledTable=styled(Table)`
width:90%;
margin:50px auto 0 auto;

`
const Thead=styled(TableRow)`
background:#000000;
&>th{
    color:#fff;
    font-size:20px;

}
`
const Tbody=styled(TableRow)`
%>td{
    font-size:20px;
}
`
const AllUsers = () =>{
    const[users, setUsers]= useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async() => {
        let response = await getUsers();
        setUsers(response.data);
    }
    const deleteUserDetails=async(id)=>{
        await deleteUser(id);
        getAllUsers();
    }
    
    return(
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map(users => (
                        <Tbody>
                            <TableCell>{users._id}</TableCell>
                            <TableCell>{users.name}</TableCell>
                            <TableCell>{users.username}</TableCell>
                            <TableCell>{users.email}</TableCell>
                            <TableCell>{users.phone}</TableCell>
                            <TableCell>{users.city}</TableCell>
                    <TableCell>
                        <Button variant="contained" style={{marginRight:"10px"}} component={Link} to={`/edit/${users._id}`}>
                            Edit
                        </Button>
                        <Button variant="contained" color="secondary" onClick={()=>deleteUserDetails(users._id)}>
                           Delete
                        </Button>
                    </TableCell>

                        </Tbody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;