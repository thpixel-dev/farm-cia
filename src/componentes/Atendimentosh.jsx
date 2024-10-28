import React from 'react'
import { useState } from 'react';
import '../App.css'
function Atendimentosh() {
  // Estate para os contadores das senhas
  const [contadorNormal, setContadorNormal] = useState(1)
  const [contadorPreferencial, setContadorPreferencial] = useState(1)
 
  // Estate para as filas
  const [filaNormal, setFilaNormal] = useState([])
  const [filaPreferencial, setFilaPreferencial] = useState([])
 
 
  const gerarSenhaNormal = () => {
    const novaSenha = { numero: contadorNormal, tipo: 'Normal' }
    setFilaNormal([...filaNormal, novaSenha])
    setContadorNormal(contadorNormal + 1)
  };
 
 
  const gerarSenhaPreferencial = () => {
    const novaSenha = { numero: contadorPreferencial, tipo: 'Preferencial' }
    setFilaPreferencial([...filaPreferencial, novaSenha])
    setContadorPreferencial(contadorPreferencial + 1)
  };
 
  const atender = () => {
    if (filaPreferencial.length > 0) {
      setFilaPreferencial(filaPreferencial.slice(1))
    } else if (filaNormal.length > 0) {
      setFilaNormal(filaNormal.slice(1))
    } else {
      alert('Não tem ninguém na fila. Vá descansar!')
  }
  }
     return (
     <div>
       <div className='gerenciamento_de_senha'>
         <h2>Gerenciamento de Senha</h2>
         <button onClick={gerarSenhaNormal}>Gerar Senha Normal</button>
         <button onClick={gerarSenhaPreferencial}>Gerar Senha Preferencial</button>
         <button onClick={atender}>Atender</button>
       </div>
       <div className='bloco_senhas'>
        <h3>Senhas Normais</h3>
        <ul>
          {filaNormal.map((senha, index) => (
            <li key={index}>Senha {senha.numero} - {senha.tipo}</li>
          ))}
        </ul>
        <h3>Senhas Preferenciais</h3>
        <ul>
          {filaPreferencial.map((senha, index) => (
            <li key={index}>Senha {senha.numero} - {senha.tipo}</li>
          ))}
        </ul>
      </div>
     </div>
   )
 }
export default Atendimentosh