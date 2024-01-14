import { useState , useEffect} from 'react'
import {useDispatch} from 'react-redux'
import authentication from '../appwrite/auth_service';
import { login,logout } from '../store/authslice';


import { Footer, Header } from '../Components/index';
import { Outlet } from 'react-router-dom';

function App() {
const dispatch = useDispatch();
const[loading , setloading] = useState(true);

useEffect(()=>{
  
    authentication.getaccount()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData})) 
      }else{
        dispatch(logout());
      }
    })
    .finally(()=>{
    setloading(false);
    })

    
  
},[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block '>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
