import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ONIArmy from '../static/images/ONI.jpg';
import MercForce from '../static/images/ONI/MercForce.jpg';
import RandD from '../static/images/ONI/R&D.jpg';
import VSWAT from '../static/images/ONI/VSWAT.jpg';
import '../static/css/page.css';

function ONI() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Image src={ONIArmy} alt="ONI Army" className="centered" roundedCircle fluid/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Title>Okamura Non-Aligned Industries (O.N.I.)</Card.Title>
                            <Card.Text>
                                <br></br>
                                <p>ONI is a galactic corporation whose profits soar into the billions each year, mainly from exploitation of the majority of the
                                civilized worlds. It is also a huge family, a network of contractors, entrepreneurs, and companies throughout the galaxy.</p>
                                <p>ONI has an army of professional soldiers ready to do anything to defend its interests and its clientele. Some of their
                                professionals continue to fight, even after their demise: ONI has discovered the secret of immortality and deploys entire
                                companies made up of zombies equipped with high-tech weapons. With ONI, even death provides an opportunity for long-term profitability!</p>
                                <ul>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;) !</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733;&#9733;&#9733;) or Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <Image src={MercForce} alt="MercForce" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>MercForce</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                MercForce platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>MercForce advantage:</b> Victory is only a matter of cost! A MercForce company gains double the amount of R.P. as normal.</p>
                                <p><b>MercForce disadvantage:</b> Mercenaries have a wallet where others have a heart. A MercForce company earns one
                                less V.P. (to a minimum of one) each time it gains any V.P.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Infantry unit (NO ZOMBIES) (&#9733;&#9733;) !</li>
                                    <li>Infantry unit (NO ZOMBIES) (&#9733;&#9733;) or Armored Fighting Vehicle unit (&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <Image src={RandD} alt="Research & Destruction" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>Research and Destruction</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                R & D platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>R & D advantage:</b> R & D develops weapons beyond any known human standard. Weapons of R & D’s Armored
                                Fighting Vehicles can continue to shoot even if their S.P. is zero (normally, having zero S.P. indicates the weapon was destroyed and can no longer be used). </p>
                                <p><b>R & D disadvantage:</b> Once per turn, each opponent can force the R & D player to re-roll one damage test. All of
                                the dice for the current test are re-rolled, and the new dice results replace the old dice results. Experimental weapons sometimes have unexpected effects! </p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;) !</li>
                                    <li>Infantry unit (ZOMBIE) (&#9733;&#9733;&#9733;) or Armored Fighting Vehicle unit (&#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733;&#9733; / &#9733;&#9733;&#9733;) or Armored Fighting Vehicle unit (&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;) or Armored Fighting Vehicle unit (&#9733;)</li>
                                    <li>Infantry unit (&#9733;) or Armored Fighting Vehicle unit (&#9733;&#9733;)</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <Image src={VSWAT} alt="V-SWAT" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>V-SWAT</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                V-SWAT platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>V-SWAT advantage:</b> V-SWAT acts quickly and decisively. The units of a V-SWAT company cannot be designated as targets of “Overwatch!” fire.</p>
                                <p><b>V-SWAT disadvantage:</b> It is necessary to act quickly or the advantage of surprise will be lost. A V-SWAT company loses the game if during any Control Phase (starting
                                with the fourth Control Phase) it has fewer V.P. than the opposing army. If the game consists of more than two
                                players, the V-SWAT company retreats from the battlefield and its units are removed from play</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Infantry unit (ZOMBIE) (&#9733;&#9733; / &#9733;&#9733;&#9733;) !</li>
                                    <li>Infantry unit (&#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (ZOMBIE) (&#9733; / &#9733;&#9733;)</li>
                                    <li>Infantry unit or Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;)</li>
                                    <li>Infantry unit or Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;&#9733;)</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ONI;