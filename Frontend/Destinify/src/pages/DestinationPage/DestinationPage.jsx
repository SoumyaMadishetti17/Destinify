import React, { useEffect } from 'react'
import "./DestinationPage.css"
import { useSelector } from 'react-redux'

const DestinationPage = () => {
    const userState = useSelector((state) => {
        debugger
        return state.rest.items[0]
    })

    useEffect(() => {
        console.log(userState)
    }, [])
    return (
        <>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleRide" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-w/2d/a0/63/cf/caption.jpg" className="d-block w-100" alt="Image 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/a0/63/d1/caption.jpg" className="d-block w-100" alt="Image 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-w/2d/a0/63/cc/caption.jpg" className="d-block w-100" alt="Image 3" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-w/2d/a0/63/cd/caption.jpg" className="d-block w-100" alt="Image 4" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-w/2d/a0/63/d2/caption.jpg" className="d-block w-100" alt="Image 5" />
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

            <div className="firstone">
                <h2>{userState.country}</h2>
                <p>{userState.cities[0].cities[0].description}</p>
            </div>

            <div className="container">
                <div className="headings">
                    <h3>Essential {userState.country}</h3>
                    <h4>Pick a category to filter your recs</h4>
                </div>


                {userState.cities.map((ele) => (
                    <>
                        {ele.cities.map((el) => (
                            <>
                                <h3>{el.name}</h3>
                                <h4>{el.description}</h4>
                                <div className="section">
                                    {el.attractions.map((attraction) => (

                                        <div className="item">
                                            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/d9/0e/f0/gardens-by-the-bay.jpg?w=400&h=-1&s=1" alt="" />
                                            <h3 >{attraction}</h3>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ))}
                    </>
                ))}

            </div>

        </>
    )
}

export default DestinationPage