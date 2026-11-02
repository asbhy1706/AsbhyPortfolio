import React ,{useEffect,useState} from 'react'
 
function Fetch() {
    const[values,setValue]= useState([]);
    const [newName,setNewName]=useState('');
    const [newEmail,setNewEmail]= useState('');
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setValue(data))
      .catch((error) => console.log(error,"some error"))},[])
       function add(){
        const name=newName;
        const email=newEmail;
        if (name&&email){
            fetch('https://jsonplaceholder.typicode.com/users',
            {
                method:'POST',
                body:JSON.stringify({name,email}),
                headers:{
                    "Content-Type":"application/json;charset=UTF-8"
                },
            },
          )
        .then((res)=>res.json())
        .then(data1=>{setValue([...values,data1])})
        }
       }
    
    function handleChange(id,value){
      setValue(prev=>prev.map(user=>user.id===id?{...user,email:value}:user));
    }
    function updateEmail (id){
            const userEmail= values.find(element=>element.id===id);
            console.log('updating user:',userEmail);
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
              {
                method:'PUT',
                body:JSON.stringify(userEmail),
                headers:{
                  "Content-Type":"application/json;Charset=UTF-8"
                }
              }
            ).then((res)=>res.json())
            .then(data1=>{
              console.log('updated users:',data1)
            }).catch(error=>console.log(error));
          }
          function deleteUser(id){
          fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
            {
              method:'DELETE',
            }
          ).then(()=>{setValue(elements=>elements.filter(element=>element.id!==id))})
          .catch(error=>console.log(error));
        }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {values.map((element)=>(<tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td><input type="text" value={element.email} onChange={e=>handleChange(element.id,e.target.value)}></input></td>
            <td>
              <button onClick={()=>updateEmail(element.id)}>Update</button>
              <button onClick={()=>deleteUser(element.id)}>Delete</button>
            </td>
          </tr>))}
          <tr>
            <td>
            </td>
            <td><input type='text' value={newName} onChange={(e)=>setNewName(e.target.value)}/></td>
             <td><input type='text' value={newEmail} onChange={(e)=>setNewEmail(e.target.value)}/></td>
             <td><button onClick={add}>Add</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Fetch