import React from "react";
import MainBody from "../../components/home/Body";
import Contact from "../../components/home/Contact";
import Header from "../../components/home/Header";

const HomePage = () =>{
    return (
        <div className="text-gray-900 bg-gray-100 font-body">
        <Header />
        <MainBody />
        <Contact />
    </div>
    )
}

export default HomePage;