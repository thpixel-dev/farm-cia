import React from 'react'
import '../App.css'
function Body() {
 
    return (
      <>
 <div className="welcome">
        <h1>Bem-vindo à Nova Farmácia!</h1>
        <p>Estamos empolgados em anunciar que nossa farmácia mudou de direção e agora está sob nova administração!</p>
      </div>

      <div className="inauguration">
        <h2>Inauguração da Nova Marca</h2>
        <p>Venha nos visitar e conhecer nossa nova identidade! Estamos prontos para oferecer os melhores produtos e serviços para você e sua família.</p>
        <h3>Data da Inauguração:</h3>
        <p><strong>Data: 15 de Novembro de 2023</strong></p>
        <p><strong>Horário: 9h às 18h</strong></p>
        <p>Teremos promoções especiais, brindes e muitas surpresas para você!</p>
      </div>

      <div className="location">
        <h2>Localização:</h2>
        <p>Estamos localizados na Rua da Farmácia, 123 - Centro</p>
      </div>

      <div className="celebration">
        <p>Não perca a chance de celebrar conosco essa nova fase!</p>
      </div>
      </>
    );
  }
  
  export default Body;