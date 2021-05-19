import React from 'react';

const Cards = (props) => {
    //Extraemos toda las propiedades
    const {imagen, titulo, texto} = props

    return (
        <div className="card" style={{width: "15rem", border:'0px solid red', position:"relative", background: "inherit"}}>
             
            <img src={imagen} className="img-thumbnail" />
            
        </div>
    )
}

export default Cards;