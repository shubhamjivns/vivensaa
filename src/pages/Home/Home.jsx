import React from 'react'
import HomeSlider from '../../components/Homeslider'
import HomeCatSlider from '../../components/catslider'
import HomeCategories from '../../components/Header/All.jsx'
import AboutSection from '../../components/AboutSection/AboutSection.jsx'
import Testimonials from '../../components/Testimonal/Testimonal.jsx'
import Footer from '../../components/Footer/Footer.jsx'

function Home() {
    return (
        <>
            <HomeSlider />
            <HomeCategories />
            <HomeCatSlider />
            <AboutSection />
            <Testimonials />
            <Footer />





        </>
    )
}

export default Home