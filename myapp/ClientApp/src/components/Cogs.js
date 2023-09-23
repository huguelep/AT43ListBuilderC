import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CogsArmy from '../static/images/Cogs.jpg';
import Avolution from '../static/images/Cogs/Avolution.jpg';
import Cnaps from '../static/images/Cogs/Cnaps.jpg';
import Gnocrat from '../static/images/Cogs/Gnocrat.jpg';
import Tregulator from '../static/images/Cogs/Tregulator.jpg';
import '../static/css/page.css';

function Cogs() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Image src={CogsArmy} alt="Cogs Army" className="centered" roundedCircle fluid/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Title>The Cogs</Card.Title>
                            <Card.Text>
                                <br></br>
                                <p>The Cogs… Their forces are composed of millions of ships and billions of armored fighting vehicles. The soldiers produced 
                                    on the assembly lines of their cloning factories are too numerous to be counted. Their goal is simple: to reach the
                                    pinnacle of the evolutionary chain and become the most successful life form in the universe. Only the combined power 
                                    of the Karmans and Therians has been able to keep this warmongering culture in check.</p>
                                <ul>
                                    <li>Infantry unit (&#9733;) !</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;&#9733;) or Armored Fighting Vehicle unit (&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;&#9733;)</li>
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
                                <Image src={Avolution} alt="Avolution" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>A-volution</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                A-volution platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>A-volution advantage:</b> The maximum number of each armored fighting vehicle unit is increased by one.
                                This additional armored fighting vehicle is free. Only units who have a maximum number value benefit from this
                                advantage</p>
                                <p><b>A-volution disadvantage:</b> The standard number of   each unit of armored fighting vehicles is increased by
                                one. This additional required armored fighting vehicle's cost is that of an extra fighter of the same type.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;&#9733;) !</li>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733;) or Infantry unit (&#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;)</li>
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
                                <Image src={Cnaps} alt="Cnaps" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>C-naps</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                C-naps platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>C-naps advantage:</b> At any time, the C-naps player can spend 1 LP to earn 50 RP. </p>
                                <p><b>C-naps disadvantage:</b> At any moment, an enemy company that has fewer VP can buy VP from the C-naps
                                company. The buyer spends 100 RP and gains 1 VP, and the C-naps company gains 50 RP and loses 1 VP.
                                This loss of VP by C-naps is unavoidable.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Infantry unit (&#9733;&#9733;&#9733;) !</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733;)</li>
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
                                <Image src={Gnocrat} alt="Gnocrat" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>G-nocrat</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                G-nocrat platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>G-nocrat advantage:</b> Every G-nocrat infantry unit leader has the “First Aid” ability. Once per round he can
                                save a member of his unit. The player announces the use of this ability by shouting “Automedication!” right after the fighter is 
                                eliminated. A leader cannot save himself. A leader who has taken damage points cannot use his ability for this salvo. 
                                A Hero leader who already has this ability can use this ability a second time.</p>
                                <p><b>G-nocrat disadvantage:</b> : Any disorganized unit is immediately eliminated.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Infantry unit (&#9733;) !</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
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
                                <Image src={Tregulator} alt="Tregulator" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>T-regulator</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                T-regulator platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>T-regulator advantage:</b> All T-regulator units may choose rush movement and still shoot.</p>
                                <p><b>T-regulator disadvantage:</b> If the T-regulator player loses the Authority Test, the T-regulator player plays his activation sequence at random.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Armored Fighting Vehicle unit (&#9733;) !</li>
                                    <li>Armored Fighting Vehicle unit (&#9733;)</li>
                                    <li>Infantry unit (&#9733;&#9733;&#9733;) or Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Cogs;