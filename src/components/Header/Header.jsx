import React from 'react'
import { HeaderContainer } from "./styled";
import SearchIcon from "../../assets/search.svg"

function Header() {
  return (
    <HeaderContainer>
        <div className='title'>
            <h2>Blog Codelandia</h2>
        </div>
        <div className='input'>
            <input type='text' placeholder='Pesquisar no blog'></input>
        </div>
    </HeaderContainer>
  )
}

export default Header