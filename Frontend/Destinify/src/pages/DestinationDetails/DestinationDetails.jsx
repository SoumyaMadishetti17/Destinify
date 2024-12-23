import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaMoneyBill, FaCalendarAlt, FaPlane } from "react-icons/fa";
import "./DestinationDetails.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Swal from 'sweetalert2'

const DestinationDetails = ({ destination }) => {
    if (!destination) {
        return <div>Loading destination details...</div>;
    }

    const { city, country, description, budget, travelWay, preferredDate, imageUrl } = destination;

    const [newBudget, setBudget] = useState()
    const [persons, setPersons] = useState(1)
    const [days, setDays] = useState(2)

    const calcBudget = (e) => {
        let temp = 0
        temp = budget * persons + budget * days;
        setBudget(temp)
    }

    useEffect(() => {
        setBudget(budget * persons + budget * days)
    }, [])

    useEffect(() => {
        calcBudget()
    }, [days, persons])

    const fireAlert = () => {
        Swal.fire({
            title: 'Booking Confirmed',
            html: `
                <p> Details regarding bookings are mailed to you. </p>
            `,


            icon: 'success'
        }
        )
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="destination-details">
                <div className="destination-header">
                    <img src={imageUrl} alt={`${city}, ${country}`} className="destination-image" />
                    <div className="destination-header-info">
                        <h1>{city}, {country}</h1>
                        <p><FaMapMarkerAlt /> {country}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-9">
                        <div className="destination-info">
                            <h2>About {city}</h2>
                            <p>{description}</p>

                            <div className="destination-meta" style={{ flexWrap: "wrap",justifyContent: 'start' }}>
                                <div className="meta-item">
                                    <p>No of Persons:</p> <input type="text" class="form-control" name='persons' placeholder="min 1 person" onChange={(e) => { setPersons(e.target.value); calcBudget() }}></input>
                                </div>
                                <div className="meta-item">
                                    <p>No of Days:</p> <input type="text" class="form-control" placeholder="min 2 days" name='days' onChange={(e) => { setDays(e.target.value); calcBudget() }}></input>
                                </div>
                            </div>

                            <div className="destination-meta" style={{ flexWrap: "wrap",justifyContent:'space-between' }}>

                                <div className="meta-item">
                                    <FaMoneyBill /> <span>Budget:</span> Rs: {newBudget}
                                </div>
                                <div className="meta-item">
                                    <FaCalendarAlt /> <span>Preferred Date:</span> {new Date(preferredDate).toLocaleDateString()}
                                </div>
                                {/* <div className="meta-item">
                                    <FaPlane /> <span>Travel Way:</span> {travelWay}
                                </div> */}
                            </div>

                            <div className="destination-meta" style={{ flexWrap: "wrap",justifyContent:"start" }}>
                            <div className="meta-item">
                                    <FaPlane /> <span>Travel Way:</span> {travelWay}
                                </div>
                            </div>
                            
                            <div className="destination-meta" style={{ flexWrap: "wrap",justifyContent: 'center' }}>
                                <button onClick={fireAlert}>Book Now</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-3">
                    <iframe width="100%" height="350" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default DestinationDetails;
