import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { BsFillTelephoneFill, BsXCircle, BsFillTelephoneOutboundFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { postLead } from '../../services/ApiServices'
import { useTranslation } from 'react-i18next';


export default function FormLead({ idPlan, landing }) {
    const { t } = useTranslation();

    const [checkInAsesoria, setCheckInAsesoria] = useState(true);
    const [checkInComercial, setCheckInComercial] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState(null);
    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);


    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
    const [isSend, setIsSend] = useState(false);
    const [isError, setIsError] = useState(false);
    let navigate = useNavigate();

    const handlePhoneNumberChange = (e) => {
        const inputPhoneNumber = e.target.value;
        setPhoneNumber(inputPhoneNumber);
        const phoneNumberRegex = /^[6-9]\d{8}$/
        const isValid = phoneNumberRegex.test(inputPhoneNumber);
        setIsValidPhoneNumber(isValid);
    };

    const [textButton, setTextButton] = useState('LLÁMAME AHORA')

    async function subscripcion(e) {
        e.preventDefault();
        setIsError(null)
        
        try {
            const response = await postLead(idPlan, phoneNumber, landing);
            console.log(response)
            //console.log('Respuesta de la API después de enviar datos:', response.data);
            //setTextButton('Suscripcion exitosa')
            //setIsSend(true)
            //setPhoneNumber('+34')
            //setIsValidPhoneNumber(false)
            //setTimeout(() =>{
                //navigate(`/thank${landing}/${idPlan}`)
                //}, 3000)
            } catch (error) {
                console.error('Error al enviar datos:', error);
                setIsError(error)
        }
    }

    return (
        <Card className='tarjeta-lead'>
            <Card.Header className="text-center">{t('Oferta disponible')}</Card.Header>
            {!isSend ? <Card.Body>
                <Card.Text className='text-center text-primary'>
                    Déjanos tu teléfono y <b>te llamamos gratis</b>
                </Card.Text>
                <Card.Text>
                    <Form onSubmit={subscripcion}>
                        <div className='mx-2'>
                            <div className="input-group">
                                <span className="input-group-text"><BsFillTelephoneFill /></span>
                                <Form.Control
                                    className={'form-control no-radius'}
                                    placeholder={t('Introduce tu teléfono')}
                                    aria-label={t('Introduce tu teléfono')}
                                    type={'phone'}
                                    onChange={handlePhoneNumberChange}
                                    value={phoneNumber}
                                    isSuccess={isValidPhoneNumber}
                                />
                            </div>
                            {(!isValidPhoneNumber && phoneNumber?.length > 4) && <div className="text-danger mt-3"><BsXCircle />&nbsp;El número de teléfono ingresado no es valido</div>}
                            <div className='my-3'>
                                <Form.Switch
                                    className='input-check mt-2'
                                    type='switch'
                                    checked={checkInAsesoria}
                                    label={'Acepto que Vuskoo me asesore telefónicamente sobre el producto y servicio elegido de acuerdo con su Política de Privacidad'}
                                    onChange={() => setCheckInAsesoria(!checkInAsesoria)}
                                />
                            </div>
                            <div className='my-3'>
                                <Form.Switch
                                    className='input-check mt-2'
                                    type='switch'
                                    checked={checkInComercial}
                                    label={'Acepto recibir comunicaciones comerciales de Vuskoo. Más información en Política de Privacidad'}
                                    onChange={() => setCheckInComercial(!checkInComercial)}
                                />
                            </div>
                            {isError !== null &&
                                <div className='my-3'>
                                    <span className='color-red'>La información es incorrecta</span>
                                </div>
                            }
                            <div className='text-center m-4'>
                                <Button
                                    btnStatus={(checkInAsesoria && isValidPhoneNumber) ? false : true}
                                    type="submit"
                                >
                                    {textButton}
                                </Button>
                            </div>
                        </div>
                    </Form>
                </Card.Text>
            </Card.Body> :
                <Card>
                    <Card.Body className='text-center'>
                        <h2><BsFillTelephoneOutboundFill /></h2>
                        <h5>Tu información se ha enviado con exito</h5>
                        <p>Gracias por permitirnos ayudarte!</p>
                    </Card.Body>
                </Card>
            }
        </Card >
    )
}




