import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import ItemTarifaServicio from '../Items/ItemTarifaServicio'
import ItemTarifaLuz from '../Items/ItemTarifaLuz'
import ItemTarifaDescripcion from '../Items/ItemTarifaDescripcion'
import { isMobile } from 'react-device-detect';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';


export default function TarjetaTarifaLeadEnergia({ data, TarifaCard }) {
    const [tarifa, setTarifa] = useState(null)
    const {
        luz_precio_potencia_punta,
        luz_precio_potencia_valle,
        luz_precio_energia_punta,
        luz_precio_energia_llano,
        luz_precio_energia_valle,
        luz_precio_energia_24h,
        logo,
        id,
        parrilla_bloque_1,
        parrilla_bloque_2,
        parrilla_bloque_3,
        parrilla_bloque_4,
        precio,
        landingLead,
        promocion, } = data


    return (
        <Card className='tarjeta my-2'>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text className=''>
                    <Row>
                        {TarifaCard && <Col xs={12}>
                            <div className='tarjeta-tarifa-item-title'>
                                <img src={logo} alt={logo} />
                                {((promocion !== null && promocion !== '') && isMobile === false) && <span className='mx-4 align-middle'><b>Promoción: </b>{promocion}</span>}
                                {(isMobile === true) && <Link className='btn btn-primary btn-primary-small' to={`${landingLead}${id}`}><BsArrowRight /></Link>}
                            </div>
                        </Col>}
                        <Col md={9}>
                            <Row>
                                <Col md={6} xs={6}>
                                    <h6>Potencia</h6>
                                    <Row className='d-flex'>
                                        <ItemTarifaLuz title={'Valle'} value={data.luz_precio_potencia_valle} extension={'€/kW'} />
                                        <ItemTarifaLuz title={'Punta'} value={data.luz_precio_potencia_punta} extension={'€/kW'} />
                                    </Row>
                                </Col>
                                <Col md={6} xs={6}>
                                    <h6>Energía</h6>
                                    {parseInt(luz_precio_energia_24h) !== 0 ?
                                        <Row className='d-flex'>
                                            <ItemTarifaLuz title={'Valle'} value={data.luz_precio_energia_punta} extension={'€/kWh'} />
                                            <ItemTarifaLuz title={'LLano'} value={data.luz_precio_energia_llano} extension={'€/kWh'} />
                                            <ItemTarifaLuz title={'Punta'} value={data.luz_precio_energia_punta} extension={'€/kWh'} />
                                        </Row>
                                        :
                                        <Row className='d-flex'>
                                            <ItemTarifaLuz title={'24h'} value={data.luz_precio_energia_24h} extension={'€/kWh'} />
                                        </Row>
                                    }
                                </Col>
                                <Col md={12} className='d-flex vertical-items'>
                                    <ItemTarifaDescripcion text={parrilla_bloque_1} />
                                    <ItemTarifaDescripcion text={parrilla_bloque_2} />
                                </Col>
                                <Col md={12} className='d-flex vertical-items'>
                                    <ItemTarifaDescripcion text={parrilla_bloque_3} />
                                    <ItemTarifaDescripcion text={parrilla_bloque_4} />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <Row>
                                <ItemTarifaServicio cant={precio} service={''} design={"small"} money={'€'} />
                                {!isMobile && TarifaCard && (
                                    <Col md={2} style={isMobile ? { order: 3 } : { order: 3 }}>
                                        <Link className='btn btn-primary' to={`${landingLead}${id}`}>{`Comprar`}</Link>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                    </Row>
                    <Col className='tarjeta-footer-small mt-2'>Períodos: <b>Valle</b> 00:00h-08:00h // <b>Llano</b> 8-10h. 14-18h y 22-00h // <b>Punta</b> 10-14h y 18-22h*</Col>
                </Card.Text>
            </Card.Body>

        </Card>
    )
}