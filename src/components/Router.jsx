import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import { useEffect, useContext } from "react";
import { AdventureContext } from "../context/state";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Home from "../pages/Home";
import PostBlog from "../pages/PostBlog";
import AllBlog from "../pages/AllBlog";
import Travels from "../pages/Travels";
import Addblog from "../pages/AddBlog";
import Dashboard from "../pages/Dashboard";
import AllAgencies from "./AllAgencies";
import PrivateRoutes from "../utils/ProtectedRoute"




function Router() {
  
  const {currentUser, setCurrentUser} = useContext(AdventureContext)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    user && setCurrentUser(user);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/addblog"
          element={
            <Layout>
              <Addblog />
            </Layout>
          }
        />

        <Route
          path="/allblogs"
          element={
            <Layout>
              <AllBlog />
            </Layout>
          }
        />

<Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="postblog"
          element={
            <Layout>
              <PrivateRoutes Component = {PostBlog} />
            </Layout>
          }
        />

<Route
          path="/travels"
          element={
            <Layout>
              <Travels />
            </Layout>
          }
        />


<Route
          path="/allagencies"
          element={
            <Layout>
              <AllAgencies />
            </Layout>
          }
        />
      </Routes>

      
    </BrowserRouter>
  );
}
export default Router;
