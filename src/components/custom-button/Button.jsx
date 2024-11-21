import "./styles.css";

export const Button = ({ text, onClick, blue, disabled }) => {
  return (
    <button
      className={blue ? "btn btn-blue" : "btn"}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
