function PopUp({ title, onClose }) {
    function confirmAction() {
        console.log("Action confirmed");
    }
    function cancelAction() {
        console.log("Action cancelled");
        if (onClose) onClose();
    }
    return (
        <>
            <div className="popup">
                <span>{title}</span>
                <div className="popup__btns">
                    <button className="popup__btn" onClick={confirmAction}>configure</button>
                    <button className="popup__btn popup__btn--cancel" onClick={cancelAction}>cancel</button>
                </div>
            </div>
            <div className="Backdrop" onClick={onClose}></div>
        </>
    );
}

export default PopUp;