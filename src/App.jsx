import { useState, useEffect } from 'react'
import axios from 'axios'
import bookLogo from './assets/books.png'
import {Routes, Route, Link, useLocation} from 'react-router-dom'
import Navigations from "./components/Navigations"
import Books from './components/Books'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
import SuccessRegi from './components/SuccessRegi'
import Homepage from './components/Homepage'
import SingleBook from './components/SingleBook'
import LibraryForm from './components/LibraryForm'
import About from './components/About'


function App() {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState({})
  const [books, setBooks] = useState([])

  const location = useLocation()
  const {pathname} = location
  
 




  useEffect(() =>{
    const fetchBooks = async() => {
      const {data} = await axios.get('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
      setBooks(data.books)
      
    }
    fetchBooks() 
  },[])

  const create = async (newSearch) => {
    const {data} = await axios.post ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books', newSearch)
    console.log(response)
  }


  useEffect(() => {
    const attemptLogin = async() => {
      const loggedInToken = window.localStorage.getItem('token')
      

      if(loggedInToken){
        const response = await axios.get('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${loggedInToken}`
          }
        })

        setUser(response.data)
      }else{
        
        throw 'no token'
      }

    }
    
    attemptLogin()
  },[token])

 
  return (
    <>
    <h1><img id='logo-image' src={bookLogo}/><Link to='/'>Library App</Link></h1>
    <Navigations user={user}/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/successReg' element={<SuccessRegi />}/>
      <Route path='/books' element={<Books books={books}/>}/>
      <Route path='/books/:id' element={<SingleBook books={books}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login setUser={setUser} setToken={setToken}/>}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/account' element={<Account user={user} setUser={setUser} setToken={setToken}/>}/>
    </Routes>

      
    </>
  )
}

export default App
