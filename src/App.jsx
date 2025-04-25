// src/App.jsx
import React, { useState } from 'react'

import AnimalCard from './components/AnimalCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import confetti from 'canvas-confetti'

function App() {
  const allItems = {
    Animals: [
      { image: '/images/dog.jpg', sound: '/sounds/chien.mp3', label: 'Chien' },
      { image: '/images/cat.jpg', sound: '/sounds/chat.mp3', label: 'Chat' },
      { image: '/images/cow.jpg', sound: '/sounds/vache.mp3', label: 'Vache' },
      { image: '/images/horse.jpg', sound: '/sounds/cheval.mp3', label: 'Cheval' },
      { image: '/images/duck.jpg', sound: '/sounds/canard.mp3', label: 'Canard' }
    ],
    Fruits: [
      { image: '/images/pomme.jpg', sound: '/sounds/pomme.mp3', label: 'Pomme' },
      { image: '/images/banana.jpg', sound: '/sounds/banane.mp3', label: 'Banane' },
      { image: '/images/strawberry.jpg', sound: '/sounds/fraise.mp3', label: 'Fraise' }
    ],
    Colors: [
      { image: '/images/red.jpg', sound: '/sounds/rouge.mp3', label: 'Rouge' },
      { image: '/images/blue.jpg', sound: '/sounds/bleu.mp3', label: 'Bleu' },
      { image: '/images/yellow.jpg', sound: '/sounds/jaune.mp3', label: 'Jaune' },
      { image: '/images/green.jpg', sound: '/sounds/vert.mp3', label: 'Vert' },
      { image: '/images/orange.jpg', sound: '/sounds/orange.mp3', label: 'Orange' },
      { image: '/images/pink.jpg', sound: '/sounds/rose.mp3', label: 'Rose' },
      { image: '/images/purple.jpg', sound: '/sounds/violet.mp3', label: 'Violet' },
      { image: '/images/brown.jpg', sound: '/sounds/marron.mp3', label: 'Marron' },
      { image: '/images/black.jpg', sound: '/sounds/noir.mp3', label: 'Noir' },
      { image: '/images/white.jpg', sound: '/sounds/blanc.mp3', label: 'Blanc' },
      { image: '/images/gray.jpg', sound: '/sounds/gris.mp3', label: 'Gris' },
      { image: '/images/purple.jpg', sound: '/sounds/turquoise.mp3', label: 'Turquoise' }
    ]
  }

  const [category, setCategory] = useState('Animals')
  const [tapCount, setTapCount] = useState(() => {
    return parseInt(localStorage.getItem('tapCount')) || 0
  })

  const handleTap = () => {
    const newCount = tapCount + 1
    setTapCount(newCount)
    localStorage.setItem('tapCount', newCount)

    if (newCount % 10 === 0) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
      })
    }
  }

  const handleReset = () => {
    setTapCount(0)
    localStorage.setItem('tapCount', 0)
  }

  const items = allItems[category]

  return (
    <Container className="py-4">
      <h1 className="text-center mb-3">🎉 Tap & Learn: French Words</h1>

      <div className="text-center mb-3">
        <h4>✅ Words tapped: <span className="text-success">{tapCount}</span></h4>
        <Button variant="outline-danger" size="sm" onClick={handleReset}>Reset Count</Button>
      </div>

      <div className="text-center mb-4">
        <ButtonGroup>
          {Object.keys(allItems).map(cat => (
            <Button 
              key={cat} 
              variant={cat === category ? 'primary' : 'outline-primary'} 
              onClick={() => setCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <Row className="justify-content-center">
        {items.map((item, index) => (
          <Col xs="6" sm="4" md="3" lg="2" key={index} className="d-flex justify-content-center">
            <AnimalCard {...item} onTap={handleTap} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default App
