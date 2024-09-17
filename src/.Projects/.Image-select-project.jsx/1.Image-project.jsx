import { useState } from "react";

const ImageSelect = () => {
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState(""); 

  const onHandleChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
      setShowModal(true);
    }
  };

  const closeButton = () => {
    setShowModal(false);
  };

  const applyFilter = (filter) => {
    setFilter(filter); 
  };

  const modalStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  };

  const second_container = {
    position: 'relative',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '90%',
    maxHeight: '90%',
    textAlign: 'center'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    cursor: 'pointer'
  };

  const buttonStyle = {
    margin: '5px',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <div>
      <h1>Select Image and Apply Filter</h1>
      <input type="file" onChange={onHandleChange} accept="image/*" />
      
      {showModal && (
        <div style={modalStyle}>
          <div style={second_container}>
            <span style={closeButtonStyle} onClick={closeButton}>x</span>
            
            <div>
              <h3>Choose a Filter:</h3>
              <button style={buttonStyle} onClick={() => applyFilter("grayscale(100%)")}>Grayscale</button>
              <button style={buttonStyle} onClick={() => applyFilter("sepia(100%)")}>Sepia</button>
              <button style={buttonStyle} onClick={() => applyFilter("brightness(1.5)")}>Brightness</button>
              <button style={buttonStyle} onClick={() => applyFilter("contrast(200%)")}>Contrast</button>
              <button style={buttonStyle} onClick={() => applyFilter("")}>None</button>
            </div>
            
            <img 
              src={file} 
              alt="Selected" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                filter: filter
              }} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSelect;
