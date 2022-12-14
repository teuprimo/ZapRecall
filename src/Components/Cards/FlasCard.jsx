import { useState } from "react"
import styled from "styled-components"
import {IonIcon} from '@ionic/react'

let awa = []
let respostas=0


export default function FlashCard(prop){
    console.log(prop.respostas)
    const [icon, setIcon] =useState(<img data-test='no-icon' src='./assets/img/icone_erro.png'/>) ;
    const [cor, setCor] =useState('red')

  const [show, setShow] = useState("Pergunta " + prop.number)
    if(awa.length<=prop.number){
        awa.push(0)
        
    }

    const coloAnswer = (input) =>{ input == 'red' ? cor=cor : input == 'green' ? setIcon(<img data-test='zap-icon' src='./assets/img/icone_certo.png'/>) : setIcon(<img data-test='partial-icon' src='./assets/img/icone_quase.png'/>);
         setCor(input) }

    const iniciouTeste = () => {

        console.log(prop.setType)
        if (show===prop.cardsQuestion){
            setShow(prop.cardsAnswer)
            
            
        }
        else if(awa[prop.number]==1){
        setShow(prop.cardsQuestion)
        
        }
        else{
            respostas++
            setShow(`Pergunta ${prop.number}`)
        }
    }
    
    if(!awa[prop.number] ){
        return(
        <Container data-identifier='flashcard'>

                
                <div data-test='flashcard-text'>{show} <img data-test='play-btn' src="./assets/img/seta_play.png" onClick={() => {awa[prop.number]++; iniciouTeste()}} alt="" srcset="" /></div>
                

            

        </Container>


    )}
    else if (awa[prop.number]===2){return(
        <ContainerQuestion  data-identifier='flashcard'>

                
                <div>
                <Question data-identifier='flashcard-text'>  <div data-test='flashcard-text'>{show}</div> </Question>
                <Opcoes>
                <Idk data-identifier='no-btn' onClick={() => {awa[prop.number]++; iniciouTeste(); coloAnswer('red')}}>
                Nao lembrei
                </Idk>

                <MaisOuMenos data-identifier='partial-btn' onClick={() => {awa[prop.number]++; iniciouTeste(); coloAnswer('orange')}}>
                Quase nao lembrei
                </MaisOuMenos >
                <Zap data-identifier='zap-btn' onClick={() => {awa[prop.number]++; iniciouTeste(); coloAnswer('green')}}>
                Zap!
                </Zap>
                </Opcoes>
                </div>
                
                

            

        </ContainerQuestion>


    )}
    else if (awa[prop.number]===1){return(
        <ContainerQuestion  data-identifier='flashcard'>

                
                <Answer><div data-test='flashcard-text'>{show} </div></Answer>
                <img src="./assets/img/seta_virar.png" alt="" srcset="" onClick={() => {awa[prop.number]++; iniciouTeste()}}/>

            

        </ContainerQuestion>


    )}
    else{
        console.log(cor)
        return(
        <Container data-identifier='flashcard' respostas={prop.setType(respostas)} >

                
                <End cor={cor} icon={icon}>{show} {icon}</End>
                

            

        </Container>


    )}
}

const Container = styled.div`
    
    font-size: Sans-serif;
    font-weight: 400;
    display  :flex ;
    justify-content: space-between;
    align-items: center;
    div{
        cursor: default;
        width: 300px;
        display: flex;
        margin: 12px;
        margin-top: 25px;
        border-radius: 7px;
        background-color: white;
        height: 65px;
        padding-left: 15px;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        padding-right: 15px;
        box-sizing: border-box;
    }
    img{
        width: 20px;
        height: 20px;
        cursor: pointer;
        
    }
`
const ContainerQuestion = styled.div`
    
    
    display  :flex ;
    width: 300px;
    height: 131px;
    background-color: white;
    box-sizing: border-box;
    
        
       
       
        margin: 12px;
        margin-top: 25px;
        border-radius: 7px;
        background-color: #ffffd4;
        
        padding-left: 15px;
        
        flex-direction: column;
        justify-content: space-around;
        cursor: default;

        img{
        width: 20px;
        height: 20px;
        position: relative;
        bottom: -12px;
        left: 250px;
        cursor: pointer;
    }
            
    
`



const Answer = styled.div`

position: relative;
    
    left:15px;
    width:255px;
    top: 25px;
    
`
const Question = styled.div`
    
    

    width:255px;
    word-wrap:break-word;
  
`

const Opcoes =styled.div`
    font-size: 12px;
    width: auto;
    color:white;
    font-size: 18px;
    width: 255px;
    height: 37px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    box-sizing: border-box;
    
    
    `

const MaisOuMenos =styled.div`
font-size: 12px;
    width: auto;
    color:white;
    background-color: orange;
    width: 85px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    
    box-sizing: border-box;
    
    margin-left:5px;
`
const Zap=styled.div`
font-size: 12px;
    width: auto;
    color:white;
    background-color:green;
    width: 85px;
    height: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
    left:100px;
    box-sizing: border-box;
    
   margin-left: 5px;
`
const Idk=styled.div`
font-size: 12px;
    width: auto;
    color:white;
    background-color:#ff3030;
    width: 85px;
    height: 37px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    left:100px;
    
    
`
const End=styled.div`
    
    text-decoration: line-through;
    color:${props => props.cor};
`