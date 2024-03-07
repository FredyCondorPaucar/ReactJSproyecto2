import React from 'react';
import { Link } from 'react-router-dom';
import {ListadoTrabajo} from './ListadoTrabajo';

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>Fredy Condor</strong> y soy desarrollador web en Peru, y ofresco mis servicios de <strong>programacion</strong> y <strong>desarrollo</strong> en todo tipo de proyectos web.
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicacion web, tener más visibilidad y relevancia en internet. <Link to="/contacto">Contacta conmigo.</Link> 
      </h2>

      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>

        <ListadoTrabajo limite="2"/>
      </section>
    </div>
  )
}
