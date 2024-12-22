import React, { useEffect } from 'react'
import "./DestinationPage.css"
import { useSelector } from 'react-redux'
import DestinationCard from '../../components/DestinationCard/DestinationCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const DestinationPage = () => {
    const userState = useSelector((state) => {
        debugger
        return state.rest.items[0];
    })

    useEffect(() => {
        console.log("data", userState)
    }, [])
    return (
        <>
            {/* <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br />
             */}

            <Navbar />


            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className='carouselBox'></div>
                    
                    <div className="carouselBoxContent">
                        <h1>{userState.country}</h1>
                    </div>
                    
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1519955266818-0231b63402bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Image 4" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://plus.unsplash.com/premium_photo-1661885523029-fc960a2bb4f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Image 5" />
                    </div>
                    <div className="carousel-item ">
                        <img src="https://plus.unsplash.com/premium_photo-1661962542692-4fe7a4ad6b54?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Image 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?q=80&w=1614&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Image 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Image 3" />
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

           

            <div className="container">
                <div className="headings">
                    <h3>Packages</h3>
                    
                </div>

                <div className='destinationCardBox'>
                    {userState.cities.map((ele) => (
                        <DestinationCard destination={ele} />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default DestinationPage