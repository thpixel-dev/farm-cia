import React from 'react'
import '../App.css'
import { CiMedicalCross } from "react-icons/ci";
import Camisas from './camisas';
import Atendimento from './Atendimentosh'
function Body() {
 
    return (
      <>
 <div className="bemvindo">
        <h1>Bem-vindo à Nova Farmácia!</h1>
        <p>Estamos empolgados em anunciar que nossa farmácia mudou de direção e agora está sob nova administração!</p>
        <CiMedicalCross />
      </div>

      <div className="inaguraçao">
          <h1>venha nos apoiar</h1>
          <p>venha dia 28/07/2024 para nossa inaguraçao</p>
      </div>

      <div className="localizaçao">
        <h2>Localização:</h2>
        <p>Estamos localizados na Rua da Farmácia, 123 - Centro</p>
      </div>
     <Camisas/>
     <Atendimento/>
      </>
    );
  }
  
  export default Body;