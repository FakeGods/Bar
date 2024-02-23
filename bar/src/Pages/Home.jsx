import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";



function Home () {
    return (
        <>
        < Navbar/>
        < About/>
        < Projects/>
        < Contact/>
        < Footer/>
        </>
    )
}
export default Home;