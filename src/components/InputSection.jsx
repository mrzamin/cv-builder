export default function InputSection(props) {
  return (
    <div className="input-section">
      <label htmlFor={props.id}>{`${props.name}:`} </label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
