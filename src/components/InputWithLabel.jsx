
// Reusable component
const InputWithLabel = ({id, label, value, type="text", onInputChange}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onInputChange}/>
    </>
  );
};

export default InputWithLabel;
