import { useState } from 'react'; 
import '../App.css';

function Footer() {
    return (
        <>
        <div className="rodape">
        <div className="footer">
            <p>Copyright © 2024</p>
        </div>
        <div className="redessociais">
            <a id='letrasrodape' href="https://www.instagram.com/fenix_idev2/" >
                <img id='iconrodape' 
                src="https://img.freepik.com/vetores-premium/logo-de-midia-social-do-circulo-preto_197792-2899.jpg" 
                alt="Icon Instagram" />
                IDEV2</a>

                <a id='letrasrodape' href="https://www.instagram.com/lucasletzel_/" >
            <img id='iconrodape' 
                src="https://img.freepik.com/vetores-premium/logo-de-midia-social-do-circulo-preto_197792-2899.jpg" 
                alt="Icon Instagram" />
                lucasletzel_</a>
                <a id='letrasrodape' href="https://www.instagram.com/_pedrolima7_/" >
<img id='iconrodape' 
                src="https://img.freepik.com/vetores-premium/logo-de-midia-social-do-circulo-preto_197792-2899.jpg" 
                alt="Icon Instagram" />
                Pedro Lima</a>
        </div>
        </div>
    </>
    )
}

export default Footer;