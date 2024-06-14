import { Navigate } from "react-router-dom";

function ProtectedRoutes({Component}){

    const user = JSON.parse(localStorage.getItem("user"))
return (

    user ? Component : <Navigate to="/login"/>
)

}

export default ProtectedRoutes;