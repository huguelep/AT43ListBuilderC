import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import AT43Logo from '../static/images/AT-43.jpg';

function About() {
    return (
        <Container fluid>
            <Card className="test">
                <Card.Body>
                    <Card.Text>
                        <Image src={AT43Logo} alt="AT43Logo" className="centered" fluid/>
                        <p>About</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
};

export default About;