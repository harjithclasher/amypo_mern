import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Comments = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/comments";
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios .get(API_URL).then((res) => setComments(res.data.slice(0,30)));
  }, []);

  const [name , setName] = useState("")
  const [body , setBody] = useState("")
  const [email , setEmail ] = useState("")

  const addComment = ()=>
  {
    axios.post(API_URL ,
        {name,body, email}
    ).then(res => setComments([...comments,res.data]))
    setBody("")
    setEmail("")
    setName("")
  }
  return (
    <div>
      <h3>Comments List</h3>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Body</td>
          </tr>
        </thead>
        <tbody>
           
                {comments.map((c)=>
                {
                    return(
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td>{c.body}</td>

                        </tr>

                    )
                })}
            
        </tbody>

        <tfoot>
            <tr>
                <td>

                </td>
                <td>
                    <input className="form-control" placeholder="enter name" value={name} onChange = {(e)=>setName(e.target.value)}/>
                </td>
                <td>
                    <input className="form-control" placeholder="enter email" value={email} onChange = {(e)=>setEmail(e.target.value)}/>
                </td>
                <td>
                    <input className="form-control" placeholder="enter body" value={body} onChange = {(e)=>setBody(e.target.value)}/>
                </td>

                <td>
                    
                    <Button onClick = {addComment}>Add</Button>
                </td>
            </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Comments;
