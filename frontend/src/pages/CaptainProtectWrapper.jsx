import React, {  useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainProtectWrapper = ({children}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const{captain, setCaptain} = useContext(CaptainDataContext)
    const[isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(!token){
            navigate('/captain-login')
        }
    }, [token])

    axios.get(`${import.meta.env.VITE_API_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            const data = response.data
            setCaptain(data.captain)
            setIsLoading(false)
        }
    }).catch((error) => {
        setIsLoading(false)
        localStorage.removeItem('token')
        navigate('/captain-login')
    }) 
    if(isLoading){
        return <div>Loading...</div>
    }
    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectWrapper



