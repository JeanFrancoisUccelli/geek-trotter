import React, {useState, useEffect, createContext} from 'react'
import webcams from '../data/webcams.json'

export const WebCamContext = createContext()

const pickRandom = (list, count) => {
    const copy = [...list]
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy.slice(0, count)
}

export const WebCamController = (props) => {

    const [cam, setCam] = useState([])

    useEffect(() => {
        setCam(pickRandom(webcams, 3))
    }, [])

    return(
        <WebCamContext.Provider value={[cam, setCam]}>
            {props.children}
        </WebCamContext.Provider>
    )
}
