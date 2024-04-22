
import { FaGithub } from "react-icons/fa"
 import { NavLink } from 'react-router-dom';
import React from "react"
import {Container, Heading, Text,Button} from "@chakra-ui/react"



function Navbar() {
    return (
        <>
       
       <div className="navbar">
            <FaGithub className="github-icon"/>
            <h1>Bravo's GitHub.</h1>
        </div>
  
               
        </>
    )
}

export default Navbar
