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

      <div className='welcome-block'>
        <div className='first-block'>
          <h1>Java developer<span className='title-name'>KeyToHurrycane</span>
            </h1>
          <h2 style={{ marginBottom: "7%", marginTop: "7%" }}>
            I create and launch <span style={{ color: "#4824ff"}}>turnkey</span>
            <span style={{marginLeft: "10px"}}>websites that include your</span>
            <span style={{marginLeft: "10px", color: "#4824ff"}}>needs and desires</span>
            </h2>
          <h3>I have been involved in IT development for 1.5 years<span style={{marginLeft: "10px"}}>
            and have worked in a company and also do freelance projects.</span></h3>
        </div>
        <div className='foto-me'>
          <img src="/icons/me.png" draggable="false"/>
      </div>
      </div>
    </div>
  );
}



export default Main;
