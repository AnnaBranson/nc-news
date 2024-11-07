import { useState, useEffect  } from "react"
import { getUsers } from "../../api"


export default function LoggedInUser( { setUser } ) {
    const [users, setUsers]=useState([])

    useEffect(()=>{
        getUsers()
        .then((response)=>{
            
            setUsers(response.data.users)
        })
    }, [])

    const user = users[0]
    
    
    useEffect(() => {
        if (user) {
            setUser(user);  
        }
    }, [user, setUser]);
    return null
}