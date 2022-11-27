import React from 'react'
import './App.css';
import layerBase from './layerBase.png'
import layerFront from './layerFront.png'
import layerMiddle from './layerMiddle.png'
import dungeon from './dung.jpg'
import {useEffect, useState} from 'react'


function Qouote() {
    useEffect(() => {

    window.addEventListener('scroll', e =>{
        document.body.style.cssText = `--scrollTop: ${window.scrollY}px`})
    }, [])
    const [mySearch, setMySearch] = useState('')
    useEffect( ()=> {
    newQoutes()
    }, [])
    const newQoutes = async () =>{
    const response = await fetch('https://www.boredapi.com/api/activity/ ')
    const data = await response.json()
    console.log(response)
    console.log(data)

    console.log(data.activity)
    setMySearch(data.activity)
    }
        
    return(
        <div className='wrapper' >
            <div className='content'>
        <div className='bodyDiv'>
            <div>
            <div className="main-header">
                <div className="layers">
                    <div className="layers__header">
                        <div className="layers__caption">
                        Welcome to qotes from API
                        </div>
                        <div className="layers__title">
                        Fairy Forest
                        </div>
                    </div>
                    <div className="layer layers__base" style={{backgroundImage: `url(${layerBase})`}} ></div>
                    <div className="layer layers__middle" style={{backgroundImage: `url(${layerMiddle})`}}></div>
                    <div className="layer layers__front" style={{backgroundImage: `url(${layerFront})`}}></div>

                </div>

            </div>
            </div>
            <article className='main-article' style={{backgroundImage: `url(${dungeon})`}}>
                <div className='main-article__content'>
                    <h2 className='main-article__header'onClick={newQoutes}> Show Qotes</h2>
                    <p className='main-article__paragraph'>
                    {mySearch}
                    </p>
                </div>
                <div className='copy'>
                    The project was created thanks to the lessons of CanSheCode and WebDesign Master  
                </div>
            </article>
        </div>
        </div>
        </div>
    )
}
export default Qouote;