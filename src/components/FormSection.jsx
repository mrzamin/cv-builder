export default function formSection({ name, children }) {
  return (
    <div className="form-section">
      <h2>{name}</h2>
      {children}
    </div>
  );
}
