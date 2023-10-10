import axios from "axios";
import { useEffect, useState } from "react"

export default function Todos(){
    const [todos, setTodos]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
            setTodos(res.data)
        })
    },[])
    return(
        <div>
            {
                todos.map((x)=>{
                    return <p key={x.id}>{x.title}</p>
                })
            }
        </div>
    )

}