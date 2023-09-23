import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TheriansArmy from '../static/images/Therians.jpg';
import Cyphers from '../static/images/Therians/Cyphers.jpg';
import Warriors from '../static/images/Therians/Warriors.jpg';
import WebStriders from '../static/images/Therians/WebStriders.jpg';
import HBabel from '../static/images/Therians/HBabel.jpg';
import '../static/css/page.css';

function Therians() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Image src={TheriansArmy} alt="Therians Army" className="centered" roundedCircle fluid/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Title>Therians</Card.Title>
                            <Card.Text>
                                <br></br>
                                <p>The Therians are the almighty craftsmen of a better universe, a universe organized and bent to their will. They have 
                                dedicated themselves to an extraordinary mission: each star, each planet must be transformed, remodeled.</p>
                                <p>The Therians' abilities are infinite and their technology is all-powerful. All the resources in the universe could only 
                                offer a very temporary resistance against their will.</p>
                                <ul>
                                    <li>Soldier unit (&#9733;&#9733;) !</li>
                                    <li>Soldier unit (&#9733;&#9733;)</li>
                                    <li>Soldier unit (&#9733;&#9733; / &#9733;&#9733;&#9733;) or Support unit (&#9733;&#9733;)</li>
                                    <li>Soldier unit (&#9733;&#9733;&#9733;) or Strider unit (&#9733;) or Vehicle unit (&#9733;)</li>
                                    <li>Strider unit (&#9733;&#9733; / &#9733;&#9733;&#9733;) or Vehicle (&#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
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
                                <Image src={Cyphers} alt="Cyphers" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>Cyphers</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                Cyphers platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>Cyphers advantage:</b> Every overseer has access to all the infantry and armored fighting vehicle routines no matter his category.</p>
                                <p><b>Cyphers disadvantage:</b> The player may not wager LP before the Authority test.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;) !</li>
                                    <li>Armored Fighting Vehicle unit (&#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Soldier unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733;&#9733;)</li>
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
                                <Image src={Warriors} alt="Warriors" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>Warriors</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                Warriors platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>Warriors advantage:</b> Each unit can change a standard fighter into an overseer alpha for free.</p>
                                <p><b>Warriors disadvantage:</b> A unit of fighters equipped with mêlée weapons must always engage an opposing unit if the movement mode chosen allows it to.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Infantry unit (&#9733;&#9733;) !</li>
                                    <li>Infantry unit (&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733;)</li>
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
                                <Image src={WebStriders} alt="WebStriders" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>Web Striders</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                Web Striders platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>Web Striders advantage:</b> Each routine costs 1 LP less than usual. A routine will always cost at least 1 LP.</p>
                                <p><b>Web Striders disadvantage:</b> The fighters of this army lose their “Nerves of steel” ability. Consider them to have Morale 8.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Infantry unit (&#9733;&#9733;&#9733;) !</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733;)</li>
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
                                <Image src={HBabel} alt="HBabel" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>H/Babel</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                H/Babel platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>H/Babel advantage:</b> H/Babel overseers benefit from the hero rules.</p>
                                <p><b>H/Babel disadvantage:</b> Activating H/Babel units without an overseer or a relay costs 2 LP.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Infantry unit (&#9733;&#9733;&#9733;) !</li>
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

export default Therians;