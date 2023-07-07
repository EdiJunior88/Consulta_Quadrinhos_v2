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

  const openModal = () => {
    setModal(true);
  };

  const closedModal = () => {
    setModal(false);
  };

  return (
    <div>
      <div>
        <p>{name}</p>
        <button onClick={openModal}>
          <img src={image?.path + ".jpg"} alt={name} />
        </button>
        <Modal isOpen={modal} onRequestClose={closedModal}>
          <div>
            <button onClick={closedModal}>X</button>
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
