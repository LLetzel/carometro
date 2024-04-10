import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

// Navbar simples para cabeçalho do site
function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg"> {/* Define o fundo como "light" e expansível em telas largas */}
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>  {/* Título da navbar com link para "#home" */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Botão para expandir/contrair a navbar em telas pequenas */}
      <Navbar.Collapse id="basic-navbar-nav"> {/* Conteúdo que aparece quando a navbar é expandida */}
        <Nav className="mr-auto"> {/* Menu de navegação com margem à direita */}
          <Nav.Brand href="#home">Home</Nav.Brand> {/* Item de menu "Home" com link para "#home" */}
          <Nav.Brand href="#link">Link</Nav.Brand>  {/* Item de menu "Link" com link para "#link" */}
          {/* Adicione mais itens de menu conforme necessário */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
