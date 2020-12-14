import React, {useState} from 'react'
import Contact from '../components/Footer';
import HeroSection from '../components/HeroSection';
import {InfoSection} from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Traditional from '../components/Traditional';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Services />
            <Traditional />
            <Contact />
        </>
    )
}

export default Home
