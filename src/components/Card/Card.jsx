import React from 'react'
import { CardContainer } from "./styled";
import HeartIcon from "../../assets/heart.svg"

function Card() {
  return (
    <CardContainer>
        <div className='card'>
            <div className='dateheart'>
              <p>02 de jul, 2021</p>
              <button><img src={HeartIcon}></img></button>
            </div>

            <div>
              <h2>Agora é oficial: o Windows 11 está vindo</h2>
            </div>

            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.</p>
            </div>
        </div>

        <div className='card'>
            <div className='dateheart'>
              <p>02 de jul, 2021</p>
              <button><img src={HeartIcon}></img></button>
            </div>

            <div>
              <h2>Tim Berners-Lee vai leiloar código-fonte da web</h2>
            </div>

            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.</p>
            </div>
        </div>

        <div className='card'>
            <div className='dateheart'>
              <p>02 de jul, 2021</p>
              <button><img src={HeartIcon}></img></button>
            </div>

            <div>
              <h2>Tem Firefox novo no pedaço e você vai querer migrar</h2>
            </div>

            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.</p>
            </div>
        </div>

        <div className='card'>
            <div className='dateheart'>
              <p>02 de jul, 2021</p>
              <button><img src={HeartIcon}></img></button>
            </div>

            <div>
              <h2>John McAfee, criador do antivírus McAfee, morre</h2>
            </div>

            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.</p>
            </div>
        </div>
    </CardContainer>
  )
}

export default Card