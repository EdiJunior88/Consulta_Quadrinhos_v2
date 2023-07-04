import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CardsComics = (props) => {
  const [modal, setModal] = useState(false);

  function modalAberto() {
    setModal(true);
  }

  function modalFechado() {
    setModal(false);
  }

  return (
    <div>
      <div>
        <p>{props.nome}</p>
        <button onClick={modalAberto}>
          <img src={props.imagem.path + ".jpg"} alt={props.nome} />
        </button>
        <Modal
          isOpen={modal}
          onRequestClose={modalFechado}
          overlayClassName={styles2.overlayModal}>
          <div>
            <button onClick={modalFechado}>X</button>
          </div>
          <div>
            {props.descricao ? props.descricao : <div>🚫 Sem descrição</div>}

            <div>
              Autor(es)
              <span>{props.autor}</span>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CardsComics;
