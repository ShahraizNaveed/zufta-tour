import React, { useEffect, useState } from 'react'
import './scroll.css'
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    const listenToScroll = () => {
        let heightToHidden = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop

        if (windowScroll > heightToHidden) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])


    return (
        <section className='wrapper'>
            {isVisible && (
                <div className='top-btn' onClick={goToBtn}><FaArrowCircleUp className='icon' size={30} /></div>
            )}
        </section>
    )
}


export default ScrollToTop