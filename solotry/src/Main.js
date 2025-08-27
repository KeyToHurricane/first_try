import React, {useState} from 'react';
import ModalWindow from './ModalWindow';

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);  
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div className="Main">
      <header>
        <div className="menu">
          <a>About me</a>
          <a>Services</a>
          <a>Portfolio</a>
          <a>Reviews</a>
          <a>Garanties</a>
        </div>

        <button onClick={handleOpenModal} className="btn">Contact</button>
        <ModalWindow show={showModal} onClose={handleCloseModal}>
          <h2 style={{ color: "#4824ff", fontSize: "40px"}}>Way to Contact</h2>
          <p style={{fontSize: "22px"}}>You can contact with me on Telegram<br/>or instagram 👇</p>
        </ModalWindow>

        <a href="https://t.me/+cMXstvUN1Yg5MmQ6" target="_blank"
        className="icon telegram"/>
        <a href="https://www.instagram.com/kostya_zagoruyko?igsh=MWV6N3J4YjdtM3N0Yg%3D%3D&utm_source=qr" target="_blank"
        className="icon instagram"/>

        <div className="switch">
          <div className="theme light"></div>
        </div>
      </header>
    </div>
  );
}



export default Main;
