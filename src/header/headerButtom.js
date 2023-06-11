import search from '../images/find.png'
import './headerButtom.css'
import Search from './search_bar'
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import SignIn from './sign_in';



const HeaderButtom = () => {
    const [showComponent, setShowComponent] = useState(false);
    const handleClick = () => {
        setShowComponent(!showComponent);
    };

    const animation = useSpring({
        opacity: showComponent ? 1 : 0,
        transform: showComponent ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(-100px, -100px, 0) scale(0)',

    });

    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (<div>
        <section className='headerButtom'>
            <div className="logo"></div>
            <nav className='menu'>
                <ul className='menu-contenar'>
                    <li>Latest</li>
                    <li>Trending</li>
                    <li>Channel Nos</li>
                </ul>
            </nav>
            <ul className='language'>
                <li>Odia</li>
                <li>English</li>
            </ul>
            <img className='search' src={search} onClick={handleClick} alt=''></img>
            <button className='signIn' onClick={openModal} >Sign in</button>
            <SignIn isOpens={isOpen} closeModals={closeModal} />
        </section>
        <div>
            {showComponent && <animated.div style={animation}><Search localClose={handleClick} /></animated.div>}

        </div>

    </div>
    )
}
export default HeaderButtom;