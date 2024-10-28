import { useState } from 'react';
import '../App.css';

function Camisas() {
  const [mensagem, setMensagem] = useState('');

  const handleClick = () => {
    setMensagem('parabens voce ganhou sua camisa ');
  };

  return (
    <> 
      <div className='camisas'>
        <h1>ajude a nos divulgar pegando camisas gratis</h1>
        <img src="./public/imagens/farmarciacamisetas.png" alt="Camisas da farmácia" className="img"/>
        {mensagem && <p>{mensagem}</p>} 
        <button onClick={handleClick}>aperte aqui e ganhe a camisa</button>
      </div>
    </>
  );
}

export default Camisas;