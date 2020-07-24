import React, { useState, useEffect } from "react";
import Nav from '../components/Navbar'
import Carousel from '../components/Carousel'
import Flex from '../components/Flex/index.js'
// import Footer from "../components/Footer1";


// const windowWidth = window.innerWidth;
function Home() {
    const [isMobile, setIsMobile] = useState();
    useEffect(()=>{
        function handleResize(){
            setIsMobile(window.innerWidth < 650)
        }
        console.log(window.innerWidth)
       window.addEventListener('resize', handleResize)
       return ()=>window.removeEventListener('resize', handleResize)
       
    })
 
    return (
        <div>
            <Nav/>
            {isMobile ? 
            (<Flex/>) : (<Carousel/>)}
            <div style={{backgroundColor:"yellow"}}>
            {/* <Footer /> */}
            </div>
            
        </div>
    )
}


export default Home;