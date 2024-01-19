import React from 'react'
import { Link } from 'react-router-dom'
import {useLocation} from 'react-router-dom'

const BreadCrumbs = () => {
    const {pathname}  = useLocation()
    const pathnames = pathname.split('/').filter((x)=> x)   
    
  let breadCrumbPath = ''
    
    

  return (
    <>
    <Link to='/'>Home</Link>/
    {
        pathnames.map((name, index)=>{
                breadCrumbPath += `/${name}` 
                return <span key={index}>{name}</span>
        })
    }

    </>
  
  )
}

export default BreadCrumbs