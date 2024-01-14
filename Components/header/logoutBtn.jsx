import React from 'react'
import authentication from '../../appwrite/auth_service'
import { logout } from '../../store/authslice'
import { useDispatch } from 'react-redux'

function LogoutBtn() {
const dispatch = useDispatch();
const logouthandler = () =>{
    authentication.logout()
    .then(()=>{
        dispatch(logout())
    })
}
  return (
    <div>
      <button
      onClick={logouthandler}
      className='inline-block px6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      >Logout</button>

    </div>
  )
}

export default LogoutBtn
