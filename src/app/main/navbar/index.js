import React, { useState } from 'react';
import navigationConfig from '../../config/navigationConfig';
import resume from '../../assets/docs/resume.pdf';
import Collapsible from 'react-collapsible';
// import logo from '../../assets/images/tred-logo.png';
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const scrollTo = (id) => {
        const targetElement = document.getElementById(id);
        const navbarHeight = document.documentElement.clientHeight * 0.09;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    }

    return (
        <div className='navbar__container'>
            <div className='navbar'>
                <div></div>
                <div className='bw__navigation'>
                    {navigationConfig.map((element, i) => {
                        return (
                            <span className='navigation__item' key={i} onClick={() => {
                                console.log(element.href)
                                setOpen(false)
                                scrollTo(element.href)
                                }}>
                                {element.title}
                            </span>
                        );
                    })}

                    <a href={resume} download='Tomás_Rojo_resume'>
                        Dowload Resume
                    </a>
                </div>
                <div className='burger' onClick={() => setOpen(!open)}>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            </div>
            <div className='collapsible'>
                <Collapsible open={open} transitionTime={200} onTriggerClosing={() => setOpen(false)}>
                    {navigationConfig.map((element, i) => {
                        return (
                            <span key={i} className='collapse__item navigation__item' onClick={() => {
                                console.log(element.href)
                                setOpen(false)
                                scrollTo(element.href)
                                }}>
                                {element.title}
                            </span>
                        );
                    })}

                    <a className='collapse__item' href={resume} download='Tomás_Rojo_resume'>
                        Download Resume
                    </a>
                </Collapsible>
            </div>
        </div>
    );
};

export default Navbar;
