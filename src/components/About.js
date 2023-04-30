import React from 'react';
import Popup from 'reactjs-popup';
import { FaCookieBite } from 'react-icons/fa';
import './About.css';
import info from '../images/info.png'
import github from '../images/github.png'


const About = () => {
  return (
    <div className="info-ico">
      <Popup
        trigger={
          <span ><FaCookieBite /></span>
        }
        modal
        nested
      >
        {close => (
          <div className="modal-about">
            <button className="close-about" onClick={close}>
              &times;
            </button>
            <div className="header-about"> Cookies </div>
            <div className="content-cookies">
              <div>
                <div><p>Le informamos que esta página Web utiliza cookies para analizar la navegación de los usuarios.</p>
                  <p>Las cookies son archivos que se instalan en el equipo desde el que accede a nuestra Web con las finalidades que se
                    describen a continuación.</p>
                  <p>La aplicación utilizada para obtener y analizar la información de la navegación es: Google Analytics: puede obtener
                    más información de la misma aquí: www.google.com/analytics</p>
                  <p>Esta aplicación ha sido desarrollada por Google, la misma nos presta el servicio de análisis y estadísticas de la
                    audiencia de nuestra página. Esta empresa puede utilizar estos datos para mejorar sus propios servicios y para
                    ofrecer servicios a otras empresas. Puedes conocer esos otros usos desde el enlace indicado arriba.</p>
                  <p>Esta herramienta no obtiene datos de los nombres o apellidos de los usuarios ni de la dirección postal desde donde se
                    conectan. La información obtenida está relacionada por ejemplo con el número de páginas visitadas, el idioma, red
                    social en la que se publican nuestras noticias y comentarios, la población a la que está asignada la dirección IP
                    desde la que acceden los usuarios, el número de usuarios que nos visitan, la frecuencia y reincidencia de las
                    visitas, la duración de visita, el navegador utilizado, el operador o tipo de dispositivo desde el que se realiza la
                    visita.</p>
                  <p>Esta información la utilizamos para mejorar nuestra página, detectar nuevas necesidades y apreciar las mejoras a
                    introducir con el fin de prestar un mejor servicio a los usuarios que hacen uso de la misma.</p>
                  <p>Para permitir, conocer, bloquear o eliminar las cookies instaladas en su equipo puede hacerlo mediante la
                    configuración de las opciones del navegador instalado en su ordenador o dispositivo.</p>
                  <p>Por ejemplo, puede encontrar información sobre cómo hacerlo en el caso que use como navegador uno de los siguientes:
                  </p>
                  <ul>
                    <li> Firefox desde <a target="_blank" rel="noopener noreferrer" href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we?esab=a&amp;s=cookies&amp;r=6&amp;as=s">aquí</a>
                    </li>
                    <li>Chrome desde <a target="_blank" rel="noopener noreferrer" href="https://support.google.com/chrome/answer/95647?hl=es"> aquí</a></li>
                    <li>Explorer desde <a target="_blank" rel="noopener noreferrer" href="http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9">aquí</a>
                    </li>
                    <li>Safari desde <a target="_blank" rel="noopener noreferrer" href="http://support.apple.com/kb/ht1677?viewlocale=es_ES"> aquí</a></li>
                    <li>Opera desde <a target="_blank" rel="noopener noreferrer" href="http://help.opera.com/Windows/11.50/es-ES/cookies.html">aquí</a></li>
                  </ul>

                  <p>A continuación se detallan las cookies utilizadas en <a href="https://supermasbarato.es">www.supermasbarato.es</a></p>
                  <div className='cookies-table'>
                    <table>
                      <tbody>
                        <tr><td><b>Nombre: </b>disclaimercookie</td> </tr>
                        <tr><td><b>Funcionalidad: </b>Aceptación del consentimiento</td> </tr>
                        <tr><td><b>Origen: </b>supermasbarato</td> </tr>
                        <tr><td><b>Validez: </b>150 días</td> </tr>
                        <tr><td><b>Tipología: </b>Técnica / Necesarias</td> </tr>              
                      </tbody></table>
                  </div>
                  <div className='cookies-table'>
                    <table>
                      <tbody>
                        <tr><td><b>Nombre: </b>_ga</td> </tr>
                        <tr><td><b>Funcionalidad: </b>Contar y realizar un seguimiento de las páginas vistas</td> </tr>
                        <tr><td><b>Origen: </b>Analytics</td> </tr>
                        <tr><td><b>Validez: </b>1 año</td> </tr>
                        <tr><td><b>Tipología: </b>Estadísticas</td> </tr>
                      </tbody></table>
                  </div>

                  <p>Si desea más información sobre las cookies y su funcionamiento en general puede consultar la <a target="_blank" rel="noopener noreferrer" href="http://www.agpd.es/portalwebAGPD/canaldocumentacion/publicaciones/common/Guias/Guia_Cookies.pdf"> Guía de
                    Utilización de Cookies</a> publicada por la Agencia Española de Protección de Datos.</p></div></div>
            </div>
          </div>
        )}
      </Popup>

      <Popup
        trigger={
          <span><img height="100px" width="100px" src={info} alt="Info"></img></span>
        }
        modal
        nested
      >
        {close => (
          <div className="modal-about">
            <button className="close-about" onClick={close}>
              &times;
            </button>
            <div className="header-about"> INFO </div>
            <div className="content-about">
              {' '}
              <p>Esta aplicación web ha sido creada sin ánimo de lucro.</p>
              <p>Su código fuente se encuentra publicado en github:</p>
              <div><a href="https://github.com/ivanmritx" target="_blank" rel="noopener noreferrer"><img className="github-ico" height="360px" width="360px" src={github} alt="github"></img></a></div>
              <p>Frontend: v0.0.5</p>
              <p>Backend:  v0.0.1</p>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default About;