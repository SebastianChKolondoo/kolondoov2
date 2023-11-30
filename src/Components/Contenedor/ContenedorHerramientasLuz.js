import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import { getPriceLightService } from '../../services/ApiServices';
import { BsArrowUp, BsArrowDown } from "react-icons/bs";


export default function ContenedorHerramientasLuz({ promedio }) {

    const [infoPrice, setInfoPrice] = useState([]);
    const [infoPriceFilter, setInfoPriceFilter] = useState([]);
    const [infoHoraUp, setInfoHoraUp] = useState(null)
    const [infoValueUp, setInfoValueUp] = useState(null)
    const [infoHoraDown, setInfoHoraDown] = useState(null)
    const [infoValueDown, setInfoValueDown] = useState(null)

    const fechaActual = new Date();
    const horaActual = new Date()
    function getDate(data) {
        data = new Date(data)
        return data?.getHours()
    }

    useEffect(() => {
        const fetchTarifasLuz = async () => {
            try {
                const response = await getPriceLightService();
                setInfoPrice(response)
                setInfoPriceFilter(response)
            } catch (error) {
                console.error("Error al obtener oferta extra:", error);
            }
        };
        fetchTarifasLuz();
    }, [])

    useEffect(() => {
        infoPriceFilter.sort((a, b) => a.value - b.value)
    }, [infoPrice])
    
    useEffect(() => {
        const item = infoPriceFilter[0];
        let fecha2 = item?.datetime?.split('T');
        if(fecha2 !== undefined){
            setInfoHoraUp(parseInt(fecha2[1].split(':')[0]))
            setInfoValueUp(Math.round(infoPriceFilter[0]?.value))
        }
    }, [infoPriceFilter])
    
    useEffect(() => {
        const item = infoPriceFilter[23];
        let fecha2 = item?.datetime?.split('T');
        if(fecha2 !== undefined){
            setInfoHoraDown(parseInt(fecha2[1].split(':')[0]))
            setInfoValueDown(Math.round(infoPriceFilter[23]?.value))
        }
    }, [infoValueUp])

    return (
        <Container>
            <Row className='d-flex justify-content-center text-center'>
                <Col xs={12} md={3} className='mx-auto'>
                    <Card className='tarjeta tarjeta-herramienta-luz'>
                        <Card.Title className='px-5'>
                            Precio de la luz ahora mismo
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>
                                <h2 className='color-primary font-heavy'>0.{Math.round(infoPrice[fechaActual?.getHours()]?.value)}</h2>
                                <h6>{`${fechaActual.getDate()}/${fechaActual.getMonth()}/${fechaActual.getFullYear()}`}</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={3} className='mx-auto'>
                    <Card className='tarjeta tarjeta-herramienta-luz'>
                        <Card.Title className='px-5'>
                            Precio medio de la luz hoy
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>
                                <h2 className='color-primary font-heavy'>{Math.round(promedio) / 1000}</h2>
                                <small>€/kWh (Precio sin impuestos)</small>
                                <h6>{`${fechaActual.getDate()}/${fechaActual.getMonth()}/${fechaActual.getFullYear()}`}</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={3} className='mx-auto'>
                    <Card className='tarjeta tarjeta-herramienta-luz'>
                        <Card.Title className='px-5'>
                            Precio de la luz más barato
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>
                                <h2 className='color-primary font-heavy'>{infoHoraUp}h</h2>
                                <small>&nbsp;</small>
                                <h5 className='color-green'><BsArrowDown />0.{infoValueUp} €/kWh</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={3} className='mx-auto'>
                    <Card className='tarjeta tarjeta-herramienta-luz'>
                        <Card.Title className='px-5'>
                            Precio de la luz más caro
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>
                            <h2 className='color-primary font-heavy'>{infoHoraDown}h</h2>
                                <small>&nbsp;</small>
                                <h5 className='color-red'><BsArrowUp />0.{infoValueDown} €/kWh</h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}