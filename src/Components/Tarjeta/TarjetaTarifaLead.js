import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ItemTarjetaTarifaLead from '../Items/ItemTarjetaTarifaLead';
import ItemTarifaServicio from '../Items/ItemTarifaServicio';
import { isMobile } from 'react-device-detect';

export default function TarjetaTarifaLead({ data, service }) {
    const [serviceOne, setServiceOne] = useState(
        service.toLowerCase() === 'movil' ? 'datos' : ''
    );
    const [serviceTwo, setServiceTwo] = useState('al mes');

    const {
        parrilla_bloque_1,
        meses_permanencia,
        precio,
        moneda,
    } = data;

    return (
        <Card className='tarjeta tarjeta-tarifa p-4'>
            <Row className='d-flex flex-column flex-md-row'>
                <Col md={6} style={isMobile ? { order: 2 } : { order: 1 }}>
                    <div className='tarjeta-tarifa-item-lead'>{'Duración del contrato'}: <b>{meses_permanencia === 0 ? 'Sin contrato' : meses_permanencia}</b></div>
                    <ItemTarjetaTarifaLead title={'Roaming'} word={'roaming'} data={data} />
                    <ItemTarjetaTarifaLead title={'Llamadas'} word={'llamadas'} data={data} />
                    <ItemTarjetaTarifaLead title={'Cobertura'} word={'5G!'} data={data} />
                </Col>
                <Col xs={12} md={6} style={isMobile ? { order: 1 } : { order: 2 }}>
                    <Row>
                        <ItemTarifaServicio cant={parrilla_bloque_1} service={serviceOne} />
                        <ItemTarifaServicio cant={precio} service={serviceTwo} money={moneda} />
                    </Row>
                </Col>
            </Row>
        </Card>
    );
}