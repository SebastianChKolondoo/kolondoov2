import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import FormSuscripcion from '../Components/Forms/FormSuscripcion';
import ContenedorProductosMovil from '../Components/Contenedor/ContenedorProductosMovil';

function ComparadorMovil() {
    return (
        <div>
            <Header breadCrumb></Header>
            <Banner
                title={'Comparador de Tarifas Móvil'}
                subtitle='¡Te ayudamos a encontrar la tarifa móvil que mejor se adapte a ti!'
                image={'/img/internet-telefonia/banner_movil.png'}
            >
                {/* <FormSuscripcion
                    text={'Introduce tu código postal'}
                    button={'Buscar Ofertas'}
                    politicy
                /> */}
            </Banner>
            <ContenedorProductosMovil>
            </ContenedorProductosMovil>
            <Footer></Footer>
        </div>
    );
}

export default ComparadorMovil;