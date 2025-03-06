import React from "react";
import Modal from "react-modal";

// Custom styles for the modal (optional)
const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark background overlay
      zIndex: 1000,
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#fff",
      color: "#333",
      padding: "30px",
      borderRadius: "10px",
      width: "50%",
      maxWidth: "500px",
      boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
      textAlign: "center",
    },
  };
  

Modal.setAppElement("#root");

const CertificateModal = ({ isOpen, onClose, items, title }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "#6a5acd" }}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <button 
    onClick={onClose} 
    style={{
        marginTop: "20px", 
        padding: "10px 15px", 
        cursor: "pointer",
        background: "#6a5acd",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        fontSize: "1rem"
    }}
>
  Close
</button>
    </Modal>
  );
};

export default CertificateModal;
