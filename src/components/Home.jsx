import React, {useContext} from 'react'
import { WebCamContext } from '../context/WebCamContext'
import './home.css';

const Home = () => {

    const [cam] = useContext(WebCamContext)

    return (
        <>
            <h1>Vers le confinement et au dela </h1>

            <p>Parce qu’un confiné n’est pas forcement un imbécile encerclé …<br/>
            Nous vous proposons de partir ou vous le souhaitez selon vos envie depuis votre canapé !
            <br/>Voici nos quelques idées du jour
            </p>

            <div className="iframe">
                {cam.map(e => (
                    <div key={e.id} className='homepage'>
                        {e.embedUrl ? (
                            <iframe
                                title={e.title}
                                width="300"
                                height="200"
                                src={e.embedUrl}
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                            />
                        ) : e.watchUrl ? (
                            <a href={e.watchUrl} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={e.image}
                                    alt={e.title}
                                    width="300"
                                    height="200"
                                />
                            </a>
                        ) : (
                            <img
                                src={e.image}
                                alt={e.title}
                                width="300"
                                height="200"
                            />
                        )}
                        <h6>{e.title}</h6>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home
