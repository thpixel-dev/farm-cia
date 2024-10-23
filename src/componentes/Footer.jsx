import React from 'react';
import '../App.css';

function Footer() {
    return (
        <footer>
            <div className="footer-wrapper"> 
                <div className="footer-container">
                    <div className="footer-info">
                        <h3>Farmácia</h3>
                        <p>Endereço: Rua das Flores, 123 - Centro</p>
                        <p>Telefone: (11) 1234-5678</p>
                        <p>Email: contato@farmaciasaude.com.br</p>
                    </div>
                    <div className="footer-links">
                        <h3>Links Úteis</h3>
                        <ul>
                            <li><a href="#">Sobre Nós</a></li>
                            <li><a href="#">Produtos</a></li>
                            <li><a href="#">Contato</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-crypt">
                    <h1>&copy; 2024 Farmácia.Todos os direitos reservados.</h1>
                </div>
            </div>
        </footer>
    );
}

export default Footer;