import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children , authentication =true}) {
    const navigate = useNavigate();
    const [loader , setloader] = useState(true)
    const authstatus = useSelector(state => state.auth.status)
    useEffect(() =>{
  if(authentication && authstatus !== authentication){
    navigate("/login")
  }else if(authentication && authstatus !== authentication){
    navigate("/")
  }
  setloader(false);

    }, [navigate , authentication, authstatus])

  return loader? <h1>Loading.....</h1> : <> {children} </>
}


