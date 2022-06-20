import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact =() =>  {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    return (
        <>
           <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass = {letterClass}
                    strArray ={['C','o','n','t','a','c','t',' ', 'm','e']}
                    idx = {15}
                    />
                </h1>
                <p>
                    I am interested in freelance and graduate opportunities - especially projects that enhance
                    and further my skills, if you have requests or questions please don't hesitate to contact me using the form below.
                </p>
                </div>
                </div>
           <Loader type="pacman"/>
        </>
    )
}

export default Contact