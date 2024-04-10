import Carousel from 'react-bootstrap/Carousel'; // Importa o componente Carousel do React Bootstrap

// Componente CarouselCar para renderizar um carrossel simples na Tela Home
function CarouselCar() {
  return (
    <Carousel data-bs-theme="dark"> {/* Define o tema do carrossel como "dark" */}
      <Carousel.Item> {/* Define um item do carrossel */}
        <img
          className="d-block w-100"  
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide" 
        />
        <Carousel.Caption> {/* Legenda do item do carrossel */}
          <h5>First slide label</h5>  {/* Título da legenda */}
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> {/* Descrição da legenda */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> {/* Define outro item do carrossel (repetir estrutura para itens adicionais) */}
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> {/* ... (repetir estrutura para itens adicionais) */}
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCar; // Exporta o componente CarouselCar para uso em outros lugares
