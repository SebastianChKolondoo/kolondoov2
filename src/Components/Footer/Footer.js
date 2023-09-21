import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Footer(props) {
    return (
        <footer className="page-footer bg-dark pt-5">
            <Container>
                <Row>
                    <Col sm={3}>
                        <img src='/img/logoReverse.png' />
                        <ul>
                            <li>Calle Barquillo, 8</li>
                            <li>28004 Madrid - España</li>
                            <li>hola@kolondoo.com</li>
                        </ul>
                    </Col>
                    <Col sm={3}>
                        <h5>Redes sociales</h5>
                        <ul>
                            <li><a href="#">Linkedin</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </Col>
                    <Col sm={3}>
                        <h5>Tarifas</h5>
                        <ul>
                            <li><a href="#">Tarifas</a></li>
                            <li><a href="#">Sólo fibra</a></li>
                            <li><a href="#">Tarifa móvil</a></li>
                            <li><a href="#">Fibra+móvil+TV</a></li>
                            <li><a href="#">Fibra+móvil</a></li>
                            <li><a href="#">Luz</a></li>
                        </ul>
                    </Col>
                    <Col sm={3}>
                        <h5>kolondoo.com</h5>
                        <ul>
                            <li><a href="#">Kolondoo.com</a></li>
                            <li><a href="#">Quiénes somos</a></li>
                            <li><a href="#">Contacta</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-white">
                <p>COPYRIGHT © 2021 KOLONDOO. TODOS LOS DERECHOS RESERVADOS | POLÍTICA DE PRIVACIDAD | AVISO LEGAL | POLÍTICA DE COOKIES | MAPA WEB</p>
            </div>
        </footer>
    );
}

export default Footer;