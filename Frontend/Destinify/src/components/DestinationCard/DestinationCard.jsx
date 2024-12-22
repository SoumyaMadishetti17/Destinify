import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./DestinationCard.css";
import { useNavigate } from "react-router-dom";

const DestinationCard = ({ destination }) => {
  const { index,city, budget, description, attractions, destinationType ,season } = destination;

  const attractionString = attractions.join(', ');
  const destinationTypeString = destinationType.join(', ');
  const navigate = useNavigate()
  const handelClick = (index) => {
    navigate('/destinationDetails')
  } 

  return (
    <div className="destination-card" key={index}>
      <h2 className="destination-title">
        <FaMapMarkerAlt className="icon" /> {city}
      </h2>
      
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Package:</strong> {attractionString}
      </p>
      <p>
        <strong>Best Season to Visit:</strong> {season}
    </p>
    <p>
        <strong>Destination Type:</strong> {destinationTypeString}
      </p>
      <p>
        <strong>Budget/Person:</strong> {budget}
      </p>
      <button className="btn btn-primary" onClick={()=>{handelClick(index)}}>Book Now</button>
    </div>
  );
};

export default DestinationCard;
