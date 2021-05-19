import React from 'react';
import Cards from './Cards';

const Inicio = () => {
    return (
        <div className="App-header">
            <h2 className="text-center" >Aprende la lengua mixe</h2>
            
            <div  className="abs-text" >
            <p className="Texto" >Bienvenidos a esta página donde encotrarás materiales digitales didácticos para aprender la
             lengua Mixe variante de la comunidad de Tamazulapam del Espiritu Santo Mixe Oaxaca, zona alta.</p>
             <p className="Texto" >Les presentamos una Aplicación movil para android la cual es una app didáctica 
             y cuenta con un traductor de palabras, lo pueden descargar
             dandole click abajo.</p>

            </div>
            <div className="row">
            <div className="col">
             <Cards
            imagen="/images/interfaz.png"
             />
          
        </div>
        <div className="col" >
          <Cards
            imagen="/images/trad.png"
            
          />
        </div>
       
        </div>
        </div>
    )
}

export default Inicio
