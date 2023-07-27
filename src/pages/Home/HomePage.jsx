import React from 'react'
import "../../assets/css/Scroll.css"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import About from '../../components/Home/About'
import HeroSection from '../../components/Home/HeroSection'
import ProjectExperience from '../../components/Home/ProjectExperience'
function HomePage() {
  return (
    <div >
        <Header/>
        <HeroSection/>
        <About/>
        <ProjectExperience/>
        <Footer/>
    </div>
  )
}

export default HomePage