export default function InputSection(props) {
  return (
    <div className="input-section">
      <label htmlFor={props.name}>{`${props.label}:`}</label>

      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={true}
      />
    </div>
  );
}
