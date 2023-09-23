import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UNAArmy from '../static/images/UNA.jpg';
import CentCom from '../static/images/UNA/CentCom.jpg';
import MInd from '../static/images/UNA/MInd.jpg';
import Union from '../static/images/UNA/Union.jpg';
import Morningstar from '../static/images/UNA/Morningstar.jpg';
import '../static/css/page.css';

function UNA() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Image src={UNAArmy} alt="UNA Army" className="centered" roundedCircle fluid/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Title>United Nations of Ava (U.N.A.)</Card.Title>
                            <Card.Text>
                                <br></br>
                                <p>The United Nations of Ava are leading humanity on the road to progress, success and prosperity. 
                                The U.N.A. have merged to become one powerful political entity in the fratricidal struggle against the 
                                Red Block dictatorship.</p>
                                <p>Their unity has been forged in the fire of the morphos invasion and has been
                                quenched in the freezing depths of space, where the invader is assembling its deadly machines.</p>
                                <ul>
                                    <li>Soldier unit (&#9733; / &#9733;&#9733;) !</li>
                                    <li>Soldier unit (&#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Soldier unit (&#9733;&#9733;) or Support unit (&#9733; / &#9733;&#9733;)</li>
                                    <li>Soldier unit (&#9733;&#9733;&#9733;) or Armored Fighting Vehicle unit (&#9733;)</li>
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
                                <Image src={CentCom} alt="CentCom" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>CentCom (Central Command)</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                CentCom platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>CentCom advantage:</b> During the company building, each unit can change a standard fighter into a sergeant for free.</p>
                                <p><b>CentCom disadvantage:</b> A unit without an officer must make a Morale test at each one of its activations.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Infantry unit (&#9733;&#9733;) !</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Soldier unit (&#9733;&#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733;)</li>
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
                                <Image src={MInd} alt="MInd" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>M.Ind (Military-Industrial Complex)</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                M.Ind platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>M.Ind advantage:</b> Every armored fighting vehicle of the company gets the “Repair” ability. At the beginning or at the end of its unit’s activation it can repair a friendly
                                armored fighting vehicle within 2.5 cm, including itself. The repaired armored fighting vehicle recovers 1 SP in a location picked by the player. The chosen location may be
                                a piece of equipment previously destroyed.</p>
                                <p><b>M.Ind disadvantage:</b> The company is defeated if all its armored fighting vehicles are destroyed.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;) !</li>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Soldier unit (&#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;)</li>
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
                                <Image src={Union} alt="Union" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>Union</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                Union platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>Union advantage:</b> All infantry units get the ability “Nerves of steel”. The fighters of these units never need to roll Morale tests.</p>
                                <p><b>Union disadvantage:</b> Each combat drill costs 2 LP.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Soldier unit (&#9733;) !</li>
                                    <li>Infantry unit (&#9733; / &#9733;&#9733;)</li>
                                    <li>Soldier unit (&#9733; / &#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Armored Fighting Vehicle unit (&#9733;)</li>
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
                                <Image src={Morningstar} alt="Morningstar" className="centered" fluid/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="test">
                        <Card.Body>
                            <Card.Text>
                                <h5><b>Morningstar</b></h5>
                                <br></br>
                                <p>The player can choose any platoon pattern to build his company, but he can only choose one at a time. Only
                                Morningstar platoon patterns benefit from the advantage and disadvantage below.</p>
                                <p><b>Morningstar advantage:</b> Morningstar officers can become either mechanics or medics during company 
                                building if he doesn't already have this ability. All the officers of the same company must choose the same speciality.</p>
                                <ul>
                                    <li><b>Mechanic:</b> The mechanic has the “Repair” ability. At the beginning or at the end of his unit's activation he can 
                                    repair a friendly armored fighting vehicle within 2.5 cm of him. The armored fighting vehicle recovers 1 SP in a location 
                                    chosen by the player. Destroyed parts may be repaired.</li>
                                    <li><b>Medic:</b> The medic has the “First aid” ability. Once per round he can save a member of his unit. The player announces the 
                                    use of this ability by shouting “Medic!” right after the fighter is eliminated. A medic cannot save himself. A medic who 
                                    has taken damage points cannot use his ability for this salvo.</li>
                                </ul>
                                <p><b>Morningstar disadvantage:</b> Morningstar companies cannot include officers beyond Rank 3 (Lieutenant). Heroes are an exception to this rule.</p>
                                <p><b>Platoon Pattern:</b></p>
                                <ul>
                                    <li>Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;) !</li>
                                    <li>Infantry unit or Combat Strider unit (&#9733;&#9733;)</li>
                                    <li>Infantry unit or Armored Fighting Vehicle unit (&#9733; / &#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733;&#9733; / &#9733;&#9733;&#9733;)</li>
                                    <li>Infantry unit (&#9733;&#9733;&#9733;)</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default UNA;