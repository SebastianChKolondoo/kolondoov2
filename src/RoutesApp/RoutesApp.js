import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Pages/Home';
import ComparadorMovil from '../Pages/ComparadorMovil';
import Lead from '../Pages/Lead';
import ComparadorLuz from '../Pages/ComparadorLuz';
import ComparadorFibra from '../Pages/ComparadorFibra';
import ThankPage from '../Pages/ThankPage';
import ComparadorGas from '../Pages/ComparadorGas';
import ComparadorLuzGas from '../Pages/ComparadorLuzGas';
import ComparadorFibraMovil from '../Pages/ComparadorFibraMovil';
import ComparadorFibraMovilTv from '../Pages/ComparadorFibraMovilTv';
import ComparadorStreaming from '../Pages/ComparadorStreaming';
import QuienesSomos from '../Pages/QuienesSomos';
import Contactenos from '../Pages/Contactenos';
import HerramientaLuz from '../Pages/HerramientaLuz';
import HerramientaTest from '../Pages/HerramientaTest';
import RaizTelefonia from '../Pages/RaizTelefonia';
import RaizEnergia from '../Pages/RaizEnergia';
import RaizStreaming from '../Pages/RaizStreaming';
import PoliticaPrivacidad from '../Pages/PoliticaPrivacidad';
import Blog from '../Pages/Blog';
import BlogItem from '../Pages/BlogItem';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
               { <Route
                    path="/"
                    element={<Navigate to="/es" exact />}
                />}

                <Route path="/:lang" element={<Home />} />

                <Route path="/:lang/internet-telefonia" element={<RaizTelefonia />} />
                <Route path="/:lang/energia" element={<RaizEnergia />} />
                <Route path="/:lang/television-streaming" element={<RaizStreaming />} />

                <Route path="/:lang/internet-telefonia/comparador-movil" element={<ComparadorMovil />} />
                <Route path="/:lang/internet-telefonia/comparador-movil/:id" element={<Lead />} />
                <Route path="/:lang/thank/internet-telefonia/comparador-movil/:id" element={<ThankPage />} />

                <Route path="/:lang/internet-telefonia/comparador-fibra" element={<ComparadorFibra />} />
                <Route path="/:lang/internet-telefonia/comparador-fibra/:id" element={<Lead />} />
                <Route path="/:lang/thank/internet-telefonia/comparador-fibra/:id" element={<ThankPage />} />

                <Route path="/:lang/energia/comparador-tarifas-luz" element={<ComparadorLuz />} />
                <Route path="/:lang/energia/comparador-tarifas-luz/:id" element={<Lead />} />
                <Route path="/:lang/thank/energia/comparador-tarifas-luz/:id" element={<ThankPage />} />

                <Route path="/:lang/energia/comparador-tarifas-gas" element={<ComparadorGas />} />
                <Route path="/:lang/energia/comparador-tarifas-gas/:id" element={<Lead />} />
                <Route path="/:lang/thank/energia/comparador-tarifas-gas/:id" element={<ThankPage />} />

                <Route path="/:lang/energia/comparador-tarifas-luz-y-gas" element={<ComparadorLuzGas />} />
                <Route path="/:lang/energia/comparador-tarifas-luz-y-gas/:id" element={<Lead />} />
                <Route path="/:lang/thank/energia/comparador-tarifas-luz-y-gas/:id" element={<ThankPage />} />

                <Route path="/:lang/internet-telefonia/comparador-tarifas-fibra-y-movil" element={<ComparadorFibraMovil />} />
                <Route path="/:lang/internet-telefonia/comparador-tarifas-fibra-y-movil/:id" element={<Lead />} />
                <Route path="/:lang/thank/internet-telefonia/comparador-tarifas-fibra-y-movil/:id" element={<ThankPage />} />

                <Route path="/:lang/internet-telefonia/comparador-fibra-movil-tv" element={<ComparadorFibraMovilTv />} />
                <Route path="/:lang/internet-telefonia/comparador-fibra-movil-tv/:id" element={<Lead />} />
                <Route path="/:lang/thank/internet-telefonia/comparador-fibra-movil-tv/:id" element={<ThankPage />} />

                <Route path="/:lang/internet-telefonia/telefono_con_contrato" element={<ComparadorFibraMovilTv />} />
                <Route path="/:lang/internet-telefonia/telefono_con_contrato/:id" element={<Lead />} />
                <Route path="/:lang/thank/internet-telefonia/telefono_con_contrato/:id" element={<ThankPage />} />

                <Route path="/:lang/television-streaming/comparador-de-television" element={<ComparadorStreaming />} />
                <Route path="/:lang/television-streaming/comparador-plataformas-streaming" element={<ComparadorStreaming />} />

                <Route path="/:lang/quienes-somos" element={<QuienesSomos />} />

                <Route path="/:lang/herramientas/precio-de-la-luz-hoy" element={<HerramientaLuz />} />
                <Route path="/:lang/herramientas/test-de-velocidad" element={<HerramientaTest />} />

                <Route path="/:lang/contactanos" element={<Contactenos />} />
                <Route path="/:lang/politica-privacidad" element={<PoliticaPrivacidad />} />

                <Route path="/:lang/blog" element={<Blog />} />
                {/* <Route path="/:lang/blog/:id" element={<Blog />} /> */}
                <Route path="/:lang/blog/:id" element={<BlogItem />} />
                {/* <Route path="/:lang/noticia/:id" element={<BlogItem />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;