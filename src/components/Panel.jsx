export default function Panel({ title, isActive, onShow, children }) {
  return (
    <div className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <div>{children}</div>
      ) : (
        <button className="show" onClick={onShow}>
          Show
        </button>
      )}
    </div>
  );
}
