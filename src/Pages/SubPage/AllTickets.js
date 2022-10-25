import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";


const AllTickets = () => {
    const [tickets, setTickets] = useState([])
    const history = useNavigate();

    useEffect(() => {
    //   getAuth()
      getTicket()
    }, [])

    const Token = JSON.parse(sessionStorage.getItem("token"))
   
    const getTicket = async()=> {
        const response = await axios.get('http://localhost:3001/ticket/all',{
            headers : {
                'Authorization' : `bearer ${Token}` 
            }
            
        })
        console.log(response.data.data)
        setTickets([response.data.data])
    
    }


  return (
    <div>
      <div>
        <table  className="table">
            <thead className="thead-dark">
                <tr>
                    <th>No</th>
                    <th>Type Ticket</th>
                    <th>Creator</th>
                    <th>Status</th>
                    <th>creator</th>
                </tr>
            </thead>
            <tbody>
             {tickets.map((tickets, index) => (
                <tr key={tickets.data[+1]}>
                    <td>{index +1}</td>
                    <td>{tickets.data.ticket_type}</td>
                    <td>{tickets.data.created_by}</td>
                    <td>{tickets.data.status}</td>
                    <td>{tickets.data.created_by}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllTickets
