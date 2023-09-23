import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RedBlokArmy from '../static/images/RedBlok.jpg';
import ARC from '../static/images/RedBlok/ARC.jpg';
import Frontline from '../static/images/RedBlok/Frontline.jpg';
import Supra from '../static/images/RedBlok/Supra.jpg';
import GenCol from '../static/images/RedBlok/GenCol.jpg';
import '../static/css/page.css';

function RedBlok() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Image src={RedBlokArmy} alt="RedBlok Army" className="centered" roundedCircle fluid/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Title>Red Blok</Card.Title>
                            <Card.Text>
                                <br></br>
                                <p>Faced with the reactionary forces of interstellar decadence, only one alternative exists to put mankind back on the path to
                                bliss: the Red Blok. The Red Blok revolution is the first step towards justice, equality and brotherhood. The long march of
                                the Red Blok started more than 50 years ago and nothing has been able to stop it, neither the insane stubbornness of the
                                U.N.A. nor the ravages of the Morphos.</p>
                                <ul>
                                    <li>Soldier unit (&#9733;) !</li>
                                    <li>Soldier unit (&#9733;)</li>
                                    <li>Soldier unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Soldier unit (&#9733;&#9733;)</li>
                                    <li>Strider (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;) or Vehicle (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)
                                        or Soldier unit (&#9733;&#9733;&#9733;)</li>
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
                                <Image src={ARC} alt="ARC" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>The ARC (Army of Revolutionary Collectives)</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                The ARC platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>The ARC advantage:</b> The maximum number of fighters in ARC infantry units is increased by one (this additional fighter is not free:
                                his cost in A.P. is added as usual to that of the unit; this rule only applies to units with an extra fighter cost in their ”Cost of a unit” table).</p>
                                <p><b>The ARC disadvantage:</b> The units may be issued only one combat drill at a time.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Infantry unit (&#9733;) !</li>
                                    <li>Infantry unit (&#9733;)</li>
                                    <li>Soldier unit (&#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;) or Soldier unit (&#9733;&#9733;&#9733;)</li>
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
                                <Image src={Frontline} alt="Frontline" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>Frontline (Local Collective of Ava)</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                Frontline platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>Frontline advantage:</b> Your armored vehicles can control objectives.</p>
                                <p><b>Frontline disadvantage:</b> The company is defeated if all its armored fighting vehicles are destroyed.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;&#9733;) !</li>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;&#9733;)</li>
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
                                <Image src={Supra} alt="Supra" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>Supra (Supreme Collective)</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                Supra platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>Supra advantage:</b> The Authority test is rolled with two dice instead of one. The player picks the better of the two results.</p>
                                <p><b>Supra disadvantage:</b> A disorganized unit is eliminated immediately.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Infantry unit (&#9733;&#9733;) !</li>
                                    <li>Infantry unit (&#9733;&#9733;)</li>
                                    <li>Soldier unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Soldier unit (&#9733; / &#9733;&#9733;)</li>
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
                                <Image src={GenCol} alt="GenCol" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>GenCol (Genetic Engineering Sub-collective)</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                GenCol platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>GenCol advantage:</b> A Gencol company may include several copies of the same hero even in different units; 
                                The company may ignore the limitation on officers concerning heroes.</p>
                                <p><b>GenCol disadvantage:</b> GenCol units without an officer are immediately eliminated as soon as the player does not spend LP to activate it.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Infantry unit (&#9733;&#9733;) !</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit or Infantry unit (&#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
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

export default RedBlok;