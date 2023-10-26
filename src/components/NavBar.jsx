import { CartWidget } from "./CartWidget";
import destacado from "../assets/destacado.svg";
import categorias from "../assets/categorias.svg";
import autor from "../assets/autor.svg";
import crear from "../assets/crear.svg";

export const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="main_content">
          <p className="title">MisteryHub</p>

          <div className="options">
            <div className="item__1">
              <a href="">
                <img src={destacado} alt="" />
                <p>Destacado</p>
              </a>
            </div>
            <div className="item__2">
              <a href="">
                <img src={categorias} alt="" />
                <p>Categorias</p>
              </a>
            </div>
            <div className="item__3">
              <a href="">
                <img src={autor} alt="" />
                <p>Cajas de autor</p>
              </a>
            </div>
          </div>
        </div>
        <div className="other_options">
          <CartWidget />
          <div className="item__1">
            <a href="">
              <img src={crear} alt="Crear caja" />
              <p>Crear Caja</p>
            </a>
          </div>
          <div className="item__2">
            <a href="">
              <p>Login</p>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
