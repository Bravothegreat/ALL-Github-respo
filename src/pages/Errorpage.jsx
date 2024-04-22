
import { Link, useLocation } from "react-router-dom"
import React from "react"

function ErrorMessage() {
       
   const location = useLocation();

    return (
        <div className="error-alert">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
             <p className="error-status">
                Error {location.state ? location.state.status : 'Erro 404'} 
             </p>
             <p className="erro-message">
                {location.state ? location.state.message : 'Page not found'}
             </p>
            <p>Go to <Link to="/"><b>Home page</b></Link></p>
        </div>
    )
}

  export default ErrorMessage;





