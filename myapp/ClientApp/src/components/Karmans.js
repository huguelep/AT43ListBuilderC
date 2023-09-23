import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KarmanArmy from '../static/images/Karmans.jpg';
import Libra from '../static/images/Karmans/Libra.jpg';
import Nova from '../static/images/Karmans/Nova.jpg';
import Flux from '../static/images/Karmans/Flux.jpg';
import Arceo from '../static/images/Karmans/Arceo.jpg';
import '../static/css/page.css';

function Karmans() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Image src={KarmanArmy} alt="Karman Army" className="centered" roundedCircle fluid/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Title>Karmans</Card.Title>
                            <Card.Text>
                                <br></br>
                                <p>The Karmans - wise warriors on a quest for freedom and peace - have decided to march into battle as war spreads
                                through the universe. They have analyzed the path taken by the cosmos and have seen its future...</p>
                                <p>In AT-43, the universe is on a path to war and chaos. The Karmans have chosen to 
                                fulfill their faith: to guide the other races towards victory and wisdom</p>
                                <ul>
                                    <li>Soldier unit (&#9733;) !</li>
                                    <li>Soldier unit (&#9733;&#9733;&#9733;)</li>
                                    <li>Soldier unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733;)</li>
                                    <li>Soldier unit (&#9733;&#9733;&#9733;) or Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
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
                                <Image src={Libra} alt="Libra" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>Libra</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                Libra platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>Libra advantage:</b> At the end of his unit's activation, each medic can bring back into the game a soldier of his unit who was eliminated.</p>
                                <p><b>Libra disadvantage:</b> All Karman units must include an officer.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Infantry unit (&#9733;) !</li>
                                    <li>Infantry unit (&#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Soldier unit (&#9733;&#9733;&#9733;) or Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
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
                                <Image src={Nova} alt="Research & Destruction" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>Nova</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                Nova platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>Nova advantage:</b> Each time your opponent spends leadership points, you can spend an equal number to cancel the effect he wishes to activate.</p>
                                <p><b>Nova disadvantage:</b> The choice of who goes first is always left to the opponent. When there are several Nova companies, the players need to agree on who begins.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Infantry unit (&#9733;) !</li>
                                    <li>Infantry unit (&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733;&#9733;&#9733;) or Vehicle unit (&#9733;&#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733;&#9733;)</li>
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
                                <Image src={Flux} alt="Flux" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>Flux</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                Flux platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>Flux advantage:</b> Flux armored fighting vehicles can control objectives.</p>
                                <p><b>Flux disadvantage:</b> After company building, your highest ranking officer must be the officer of an armored fighting vehicle unity.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Infantry unit (&#9733;&#9733;&#9733;) !</li>
                                    <li>Infantry unit (&#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;) or Vehicle unit (&#9733; / &#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;)</li>
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
                                <Image src={Arceo} alt="Arceo" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>Arceo</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                Arceo platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>Arceo advantage:</b> Armored Fighting Vehicle units may be given the Take Cover! combat drill like infantry.</p>
                                <p><b>Arceo disadvantage:</b> The maximum number of fighters in Type 1 and Type 2 Infantry units is reduced by 1, with no change to the AP value.
                                However, the player may pay the cost of an extra fighter to reach the original number.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Infantry unit (&#9733;) !</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;) or Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;)</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Karmans;