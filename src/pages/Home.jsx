import React from 'react'
import { useState, useEffect } from 'react'
import { Navigation } from '../components/Navigation'
import BackgroundVideo from '../components/BackgroundVideo'
import { About } from '../components/about'
import { Services } from '../components/services'
import { Gallery } from '../components/gallery'
import { Testimonials } from '../components/testimonials'
import { Team } from '../components/Team'
import { Contact } from '../components/contact'
import JsonData from '../data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})
export default function Home() {
    const [landingPageData, setLandingPageData] = useState({})
    useEffect(() => {
        setLandingPageData(JsonData)
    }, [])
    return (
        <div>
            <Navigation />
            <BackgroundVideo />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Gallery />
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
        </div>
    )
}
