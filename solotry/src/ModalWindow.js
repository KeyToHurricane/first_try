import React, {useState, useCallback, useEffect} from 'react';
import './ModalWindow.css';

const ModalWindow = ({show, onClose, children}) => {
    const [isVisible, setIsVisible,] = useState(false);

    const handleKeyDown = useCallback((event) => {
        if(event.key === 'Escape'){
            onClose();
        }
    },[onClose]);

    useEffect(() => {
        if (show) {
            setIsVisible(true);
            document.addEventListener('keydown', handleKeyDown);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 800);
            document.removeEventListener('keydown', handleKeyDown);
            return () => clearTimeout(timer);
        }
    }, [show, handleKeyDown]);

    useEffect(() => {
        return () =>
            document.removeEventListener('keydown', handleKeyDown);

    }, [handleKeyDown]);

    return (
        <div className={`modal-backdrop ${show ? 'show' : ''}` }
        style={{display: isVisible}} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="modal-close-button" aria-label="Close modal"></button>
                {children}
                <div style={{display: "flex"}}>
                    <a href="https://t.me/+cMXstvUN1Yg5MmQ6" target="_blank" rel="noreferrer" className="social-button">
                        <img src="/icons/telegram.png" alt="Telegram" className="social-icon" />
                        <span>Telegram</span>
                    </a>
                    <a href="https://www.instagram.com/kostya_zagoruyko?igsh=MWV6N3J4YjdtM3N0Yg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="social-button">
                        <img src="/icons/instagram.png" alt="Instagram" className="social-icon"/>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
