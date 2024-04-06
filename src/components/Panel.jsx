export default function Panel({ title, isActive, onShow, children }) {
  return (
    <div className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <div>{children}</div>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </div>
  );
}
