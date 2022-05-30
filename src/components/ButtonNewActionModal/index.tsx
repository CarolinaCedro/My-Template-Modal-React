import { Container } from "./styles";


interface ButtonNewActionModalProps{
  onOpenActionButtonModal:()=>void;
}

export function ButtonNewActionModal({onOpenActionButtonModal}:ButtonNewActionModalProps){
  return(
    <Container>
     <button onClick={onOpenActionButtonModal}>Abrir Modal</button>
    </Container>
  )
}