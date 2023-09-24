import { useNavigate } from "react-router-dom";
import {Card} from 'react-bootstrap';
import UNAArmy from '../static/images/UNA.jpg';
import TheriansArmy from '../static/images/Therians.jpg';
import RedBlokArmy from '../static/images/RedBlok.jpg';
import KarmanArmy from '../static/images/Karmans.jpg';
import CogsArmy from '../static/images/Cogs.jpg';
import ONIArmy from '../static/images/ONI.jpg';
import '../static/css/grid.css';

function Home() {

  const Factions = [['UNA', UNAArmy], ['Therians', TheriansArmy], ['RedBlok', RedBlokArmy], ['Karmans', KarmanArmy], ['Cogs', CogsArmy], ['ONI', ONIArmy]];
  
  const navigate = useNavigate();
  const handleClick = (FactionName) => {
    navigate('/' + FactionName)
  };

  const renderCard = (Faction) => {
    return (
      <div onClick={() => handleClick(Faction[0])}>
      <Card className="box" key={Faction[0]}>
        <div className="titleCard">
          <Card.Img variant="top" src={Faction[1]}/>
        </div>
        <div>
          <Card.Body>
            <Card.Title>{Faction[0]}</Card.Title>
          </Card.Body>
        </div>
      </Card>
      </div>
    )
  }
  
  return(
    <div className="grid">{Factions.map(renderCard)}</div>
  );
};

export default Home;