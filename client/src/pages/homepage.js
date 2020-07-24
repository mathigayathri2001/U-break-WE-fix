import React, { useState, useEffect } from "react";
import Nav from '../components/Navbar'
import Carousel from '../components/Carousel'
import Flex from '../components/Flex/index.js'
import Welcome from '../components/Welcome'




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
            <Welcome/>
            {isMobile ? 
            (<Flex/>) : (<Carousel/>)}
            <div style={{backgroundColor:"yellow"}}>
            </div>
            
        </div>
    )
}

export default Home;