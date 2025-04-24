// src/components/AnimalCard.jsx
import React from 'react'
import Card from 'react-bootstrap/Card'
function AnimalCard({ image, sound, label, onTap }) {
  const playSound = () => {
    new Audio(sound).play()
    if (onTap) onTap()
  }

  return (
    <Card 
      onClick={playSound} 
      className="text-center m-2 shadow-sm"
      style={{ width: '150px', cursor: 'pointer' }}
    >
      <Card.Img 
        variant="top" 
        src={image} 
        style={{ height: '120px', objectFit: 'contain', padding: '10px' }} 
      />
      <Card.Body>
        <Card.Title style={{ fontSize: '1.2rem' }}>{label}</Card.Title>
      </Card.Body>
    </Card>
  )
}


export default AnimalCard
