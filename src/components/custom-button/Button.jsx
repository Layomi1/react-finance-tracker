import "./styles.css";

export const Button = ({ text, onClick, blue = 1 }) => {
  return (
    <button className="blue? btn btn-blue: btn" onClick={onClick}>
      {text}
    </button>
  );
};
