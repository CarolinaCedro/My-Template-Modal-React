import { Content } from "./styles";
import {BsFillSuitHeartFill} from 'react-icons/bs'

export function Header(){

  return(
    <Content>
      <p> Desenvolvido por</p>
      <a href="https://linktr.ee/CarolinaCedro" target="_blank" rel="noreferrer">Carol Cedro</a>
      <BsFillSuitHeartFill color={'#ff0000'}/>
    </Content>
    
  )
}