import React, {useState, useEffect} from 'react'
import './Footer.css'
import {Carousel} from 'react-bootstrap'
import './Envie.css'
import Button from 'react-bootstrap/Button'
import webcams from '../data/webcams.json'

const pickRandom = (list, count) => {
    const copy = [...list]
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy.slice(0, count)
}

const Carouse = () => {

  const [camCategory, setCamCategory] = useState([])
  const [category, setCategory] = useState('mountain')

  useEffect(() => {
    const filtered = webcams.filter(c => c.category === category)
    setCamCategory(pickRandom(filtered, 3))
  }, [category])

  return (
    <div className="test">
      <Carousel>
        <Carousel.Item>
          <img
            name='mountain'
            className="ok"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Chamonix_valley_from_la_Fl%C3%A9g%C3%A8re%2C2010_07.JPG/1280px-Chamonix_valley_from_la_Fl%C3%A9g%C3%A8re%2C2010_07.JPG"
            alt="Vallee de Chamonix"/>
          <Carousel.Caption>
            <h3>Partir à la montagne</h3>
            <Button variant="success" onClick={() => setCategory('mountain')}>Découvrez la sélection</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="ok"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/%C3%88ze_und_Cap_Ferrat-Grande_Corniche.jpg/1280px-%C3%88ze_und_Cap_Ferrat-Grande_Corniche.jpg"
            alt="Cote d'Azur, Eze et Cap Ferrat"/>
          <Carousel.Caption>
            <h3>Partir à la mer</h3>
            <Button variant="success" onClick={() => setCategory('beach')}>Découvrez la sélection</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="ok"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"
            alt="Paris, Tour Eiffel depuis Tour Saint-Jacques"/>
          <Carousel.Caption>
            <h3>Partir dans les plus belles villes</h3>
            <Button variant="success" onClick={() => setCategory('city')}>Découvrez la sélection</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <>
        {camCategory.map(e => (
          <div key={e.id}>
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
      </>
    </div>
  )
}

export default Carouse
