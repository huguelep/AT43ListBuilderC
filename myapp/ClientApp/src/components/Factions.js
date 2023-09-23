import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {Card} from 'react-bootstrap';
import '../static/css/grid.css';
import UNAArmy from '../static/images/UNA.jpg';
import TheriansArmy from '../static/images/Therians.jpg';
import RedBlokArmy from '../static/images/RedBlok.jpg';
import KarmanArmy from '../static/images/Karmans.jpg';
import CogsArmy from '../static/images/Cogs.jpg';
import ONIArmy from '../static/images/ONI.jpg';

function Factions() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/faction/')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
    .catch((err) => {
      console.log(err.message);
    })
  }, []);

  const navigate = useNavigate();
  const handleClick = (index) => {
    navigate('/Units', {factionId: index})
  };

  const factionImg = [UNAArmy, TheriansArmy, RedBlokArmy, KarmanArmy, CogsArmy, ONIArmy];

  const renderCard = (card, index) => {
    return (
      <div onClick={() => handleClick(index)}>
      <Card className="box" key={index}>
        <div className="titleCard">
          <Card.Img variant="top" src={factionImg[index]}/>
        </div>
        <div>
          <Card.Body>
            <Card.Title>{card.faction_name}</Card.Title>
          </Card.Body>
        </div>
      </Card>
      </div>
    )
  }
  
  return(
    <div className="grid">{posts.map(renderCard)}</div>
  );
};

export default Factions;