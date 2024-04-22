
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button} from  "@chakra-ui/react";
import { FaRegStar, FaRegEye, FaCodeBranch } from 'react-icons/fa';
import { TbGitFork } from 'react-icons/tb';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom"

function RepoDetails() {

  const { id } = useParams()
  const [details, setDetails] = useState({})
  const [branch, setBranch] = useState({})
  const [deployment, setDeployment] = useState({})
 
  useEffect(() => {
    fetch(`https://api.github.com/repos/Bravothegreat/${id}`)
    .then((response) => (response.json()))
    .then((data) => {
      setDetails(data)
    })
  }, []) 

  useEffect(() => {
    fetch(`https://api.github.com/repos/Bravothegreat/${id}/branches`)
    .then((response) => (response.json()))
    .then((data) => {
      setBranch(data)
    })
  }, []) 

  useEffect(() => {
    fetch(`https://api.github.com/repos/Bravothegreat/${id}/deployments`)
    .then((response) => (response.json()))
    .then((data) => {
      setDeployment(data)
    })
  }, []) 
       
      
  return (
    <div id="repodetail">
        <div className="repodetail-card">
            <h2 className="repo-name">{details.name}</h2>
            <div className="repo-mini-details">
              <p><FaRegStar className="icons" /> Stars: {details.stargazers_count}</p>
              <p><FaRegEye className="icons" /> Watch: {details.watchers}</p>
              <p><TbGitFork className="icons" /> Forks: {details.forks}</p>
              <p><FaCodeBranch className="icons" /> Branches: {branch.length}</p>
            </div>
            <p>Main Language: {details.language === null ? "none": details.language}</p>
            <p>Live site: {deployment.length === 0 ? `none` : <a href={`https://Bravothegreat.github.io/${details.name}`}>Bravothegreat.github.io/{details.name}</a>}</p>
            <p><a href={`https://github.com/${details.full_name}`} target="_blank" rel="noopener noreferrer">View on Github</a></p>
        </div>


        <div className="bottom-navv">
          <p>
            Go to{" "}
            <NavLink to="/about">
              <b>Text error page</b>
            </NavLink>
          </p>
          <p>
          Go to{" "}
            <NavLink to="/">
              <b>Home</b>
            </NavLink>
          </p>
        </div>

    </div>
  )


    function datezone (dateTime) {
      const date = new Date(dateTime)
      return date.toLocaleString('en-NG')
    }

}

export default RepoDetails

