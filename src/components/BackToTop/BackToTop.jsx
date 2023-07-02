import React, { useEffect, useState } from 'react';
import styles from './BackToTop.module.css'
import { FaArrowUp } from 'react-icons/fa6';
const BackToTop = ({ props }) => {
    const [showGoTop, setShowGoTop] = useState(false);

    const handleVisibleButton = () => {
        setShowGoTop(window.scrollY > 100)
    }

    const handleScrollUp = () => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton)
    }, [])

    return (
        <div className={showGoTop ? '' : styles.goTopHidden} onClick={handleScrollUp}>
            <button type={'button'} className={styles.goTop} title='Go-To-Top'>
                {/* use Material Icon */}
                <span className={styles.goTopIcon}><FaArrowUp size={30} /></span>
            </button>
        </div>
    )
}

export default BackToTop;
