import React,{useState,useEffect}from 'react'
import axios from 'axios'
 function JServer(){
  const [users,setUsers]=useState([]);
  const [name,setName]=useState("");
  const[age,setAge]=useState("");
  const[editId,setEditId]=useState(null);
   
  const API="http://localhost:3000/users";
  const fetchUsers=async()=>{
      axios.get(API)
      .then(response=>setUsers(response.data))
  }
  useEffect(()=>{
    fetchUsers();},[]);
  const handleSubmit=async(e)=>{
        e.preventDefault();
    if(editId){
        await axios.put(`${API}/${editId}`,{name,age})
        setEditId(null);
    }   
   else{
    await axios.post(`${API}`,{name,age})
   }
   setName('');
   setAge('');
   fetchUsers();
}
const handleEdit=(user)=>{
    setName(user.name);
    setAge(user.age);
    setEditId(user.id);
}
const handleDelete=async(id)=>{
    await axios.delete(`${API}/${id}`,fetchUsers())
}
  return (
    <div className='text-center'>
    <div>
        <h2 className='text-4xl p-3'>Form</h2>
        <form key={users.id} className='p-3 gap-2'>
            <input type='text' placeholder='Name' value={name} 
             onChange={(e)=>setName(e.target.value)} className='border m-2'></input>
            <input type='number' placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)}className='border m-2'></input>
            <button onClick={handleSubmit}className='text-white border bg-purple-400 hover:bg-purple-700 ..'>{editId?'UPDATE':'ADD'}</button>
        </form>
        <ol type='A' className='ms-10 '>
        {users.map((element)=>(
            <li key={element.id}><span className='border m-2'>{element.name}-{element.age}</span>
            <button onClick={(e)=>handleEdit(element)} className=' text-white border bg-purple-400 hover:bg-purple-700  m-2 ms-15'>Edit</button>
            <button onClick={(e)=>handleDelete(element.id)} className='text-white border bg-purple-300 hover:bg-purple-700  m-2 '>Delete</button>
          </li>
            ))} 
        </ol>
    </div>
    </div>
  )
}

export default JServer