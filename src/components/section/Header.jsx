import React from 'react'

import { CiGrid31 } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { CiBarcode } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
    return (
        <header id='header' role='banner'>
            <div className='header__logo'>
                <a href="/">
                    <em aria-hidden='true'></em>
                    <span>Wa<br />Tube</span>
                </a>
            </div>
            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/'><CiYoutube />홈</a>
                    </li>
                    <li>
                        <a href='/today'><CiTimer />나우픽</a>
                    </li>
                    <li>
                        <a href='/developer'><CiGrid31 />개발자 유튜브</a>
                    </li>
                    <li>
                        <a href='/playlist'><CiBarcode />워터멜론</a>
                    </li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href='/search/webstoryboy'>webstoryboy</a>
                    </li>
                    <li>
                        <a href='/search/@믹스커피'>브튜유국한(워터멜론)</a>
                    </li>
                    <li>
                        <a href='/search/html'>HTML</a>
                    </li>
                    <li>
                        <a href='/search/css'>CSS</a>
                    </li>
                    <li>
                        <a href='/search/javascript'>JS</a>
                    </li>
                    <li>
                        <a href='/search/chrome'>Chrome</a>
                    </li>
                    <li>
                        <a href='/search/firefox'>Firefox</a>
                    </li>
                    <li>
                        <a href='/search/microsoft edge'>Microsoft Edge</a>
                    </li>
                </ul>
            </nav>
            <div className='header__sns'>
            <ul>
                    <li>
                        <a href='https://github.com/bovvsr45' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/@믹스커피' rel='noopener noreferrer'>
                            <AiFillYoutube />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/' rel='noopener noreferrer'>
                            <AiOutlineInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header