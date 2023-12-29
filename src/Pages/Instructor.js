import { React } from 'react'
import { Banner } from '../components/Banner'

export const Instructor = () => {
    return (
        <main className='headerheight'>
            <Banner additionalClasses="about-banner">
                <div className="content">
                    <h1>Instructor</h1>
                    <p>Nurturing expertise, craftsmanship, and innovation to empower individuals and sculpt a promising future.</p>
                </div>
            </Banner>
        </main>
    )
}