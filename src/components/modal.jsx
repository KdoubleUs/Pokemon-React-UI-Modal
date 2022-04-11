function Modal({ open, child, onClose }) {
  if (!open) return null;
  return (
    <div className="backLay">
      <div className="modal">
        <button onClick={onClose}> closeModal</button>
        <h1>TESTING TESTING</h1>
      </div>
    </div>
  );
}

export default Modal;
