import { InterfaceButton } from "../Interface/Interface";

const Button = ({ onClick, name }: InterfaceButton) => {
  return (
    <div>
      <div>
        <button onClick={onClick}>{name}</button>
      </div>
    </div>
  );
};

export default Button;
