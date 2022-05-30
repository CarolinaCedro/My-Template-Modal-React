import Modal from 'react-modal'
import {AiOutlineClose} from 'react-icons/ai'
import { Container } from "./styles";

interface ModalProps{
  isOpen:boolean;
  onRequestClose:()=>void;
}


export function NewActionModal({isOpen,onRequestClose}:ModalProps) {
  return (
    
      <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
      <button type='button' className='react-modal-button-close' onClick={onRequestClose}>
          <AiOutlineClose fontSize={20} color={'#969cb3'}/>
         </button>
        <Container >
            <h2>Cadastrar transação</h2>
            <input  placeholder='Exemplo'/>
            <input  placeholder='Exemplo'/>
            <input  placeholder='Exemplo'/>
            <input  placeholder='Exemplo'/>    
            
            <button type="submit">Cadastrar</button>        
        </Container>
    
      </Modal>
  
  );
}


