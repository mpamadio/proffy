import React from "react";

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/2831485?s=460&u=1f5bd74504213cb57012ea74ceda780be8b5a525&v=4"
          alt="Marcola"
        />
        <div>
          <strong>Marcos P Amadio</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        laudantium minima. Harum deleniti totam similique
        <br />
        <br />
        alias at quis ea sapiente accusamus, eius nesciunt dicta veniam aliquid,
        porro quae nemo quia.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
