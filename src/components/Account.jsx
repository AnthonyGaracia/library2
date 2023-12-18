
import { useNavigate } from "react-router-dom"


const Account = ({user, setUser, setToken }) => {
    const navigate = useNavigate()
    
    const logout = () => {
        window.localStorage.removeItem('token');
        setToken(null)
        setUser({})
        navigate('/')
    }
    if(!user.books){
        return null
    }
    
    return(
        <div>
            <h1>Account</h1>
            <button onClick={() => {logout()}}>Logout</button>
            <hr/>
            <h2>Email: {user.email}</h2>
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-fXBsTHoBc2xLSDR901qs5uArpIu67FCM2Z5j7vObVT3g8HYDgoOUa2l3CK6fe0FbWA&usqp=CAU"
            alt="dancing book"
            />
            
            
           
        </div>
    )
}

export default Account