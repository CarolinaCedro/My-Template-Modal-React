import { useState } from "react";
import { ButtonNewActionModal } from "./components/ButtonNewActionModal";
import { Header } from "./components/Header";
import { NewActionModal } from "./components/Modal/NewActionModal";

export function App(){

    const [isNewTransictionModal,setIsNewTransictionModal] = useState(false)

    function handleOpenModal(){
    setIsNewTransictionModal(true);
    }
  
    function handleCloseModal(){
      setIsNewTransictionModal(false)
    }

  return (
    <>
     <Header/>
     <ButtonNewActionModal onOpenActionButtonModal={handleOpenModal}/>
     <NewActionModal isOpen={isNewTransictionModal} onRequestClose={handleCloseModal}/>
    </> 
  )

}