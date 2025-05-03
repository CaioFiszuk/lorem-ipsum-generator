import Modal from 'react-modal';

Modal.setAppElement('#root');

function Result({result, onClose}) {

    return (
        <Modal
        isOpen={result}
        onRequestClose={onClose} 
        overlayClassName="result__overlay" 
        className="result__content" 
        >
        <p>{result}</p>
      </Modal>
    )
  }
  
  export default Result;
  