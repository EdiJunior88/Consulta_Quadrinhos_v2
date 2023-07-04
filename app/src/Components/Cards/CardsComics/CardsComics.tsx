import { useState } from "react";
import Modal from "react-modal";
import { InterfaceCardsComics } from "../../Interface/Interface";

Modal.setAppElement("#root");

const CardsComics = ({
  author,
  name,
  image,
  description,
}: InterfaceCardsComics) => {
  const [modal, setModal] = useState<boolean>(false);

  function modalAberto() {
    setModal(true);
  }

  function modalFechado() {
    setModal(false);
  }

  return (
    <div>
      <div>
        <p>{name}</p>
        <button onClick={modalAberto}>
          <img src={image?.path + ".jpg"} alt={name} />
        </button>
        <Modal isOpen={modal} onRequestClose={modalFechado}>
          <div>
            <button onClick={modalFechado}>X</button>
          </div>
          <div>
            {description ? description : <div>🚫 Sem descrição</div>}

            <div>
              Autor(es)
              <span>{author}</span>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CardsComics;
