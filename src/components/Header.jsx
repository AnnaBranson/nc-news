import NavBar from "./NavBar.jsx";
import  UserContext  from "../contexts/UserContext"
import { useContext } from "react"
import LoggedInUser from "./Loggedin.jsx";


export default function Header(){
    
    const { user, setUser } = useContext(UserContext)
    

return (
    <>
    <h1>Welcome To NC News </h1>
    <p>You are Logged in as {user.username}</p>
    <LoggedInUser setUser = {setUser}/>
    <NavBar></NavBar>
    </>
)

}
