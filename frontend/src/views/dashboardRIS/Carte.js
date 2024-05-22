import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function Carte({ src ,nom,elements,weakness }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card boxShado= "5"
      style={{
        border: "2px solid rgba(255, 255, 255, 0.40)",
        borderRadius: "20px",
        paddingTop: "4%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: '17rem',
        height: "27rem",
        background: "linear-gradient(142deg, #628ECB 16.08%, #566C9D 89.41%)",
        transition: "transform 0.3s",
        transform: isHovered ? "rotateY(180deg) scale(1.05)" : "rotateY(0deg) scale(1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <>
        
          <Card.Img
            variant="bottom"
            className="img-fluid"
            src={src}
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              marginBottom: '50px', // Ajout de la marge inférieure
            }}
          />
          <Card.Title style={{ fontSize: "30px", color:"white" }}><span>{nom}</span></Card.Title>
          <Card.Text style={{ textAlign: "center", lineHeight: "2" , color:"white"}}>
           Nom: {elements}<br />
          Email: {weakness}
          </Card.Text>
          
        </>
      ) : (
        
        <Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          { <>
          <h3 style={{marginBottom: '50px',  textAlign: 'left', transform: 'rotateY(180deg)' , color:"white"}}>Patient inormation</h3>
          <div style={{  transform: 'rotateY(180deg)', color:"white"}}>
          <p><strong>Nom:</strong> Selim</p>
      <p><strong>Prénom:</strong> Dridi</p>
      <p><strong>Mail:</strong> dridiharry98@gmail.com</p>
      <p><strong>Date de naissance:</strong> 05/09/2001</p>
      <p><strong>Age:</strong> 23</p>
      <p><strong>Date RDV:</strong> 25/04/2024</p>
      <p><strong>Heure RDV:</strong> 11h</p>
    </div>
          
        </>}
        </Card.Body>
      )}
    </Card>
  );
}

export default Carte;
