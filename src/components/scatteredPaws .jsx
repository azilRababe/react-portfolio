//  in case you're a bit confused, this is a component that renders a bunch of paws
//  that are scattered around the screen. It's a bit of a hacky solution, but it works.
//  I'm not sure if I'll keep it, but I'm keeping it here for now.

import React, { useState, useEffect } from 'react'
import { LiaPawSolid } from 'react-icons/lia'

const ScatteredPaws = () => {
  const numberOfPaws = 30
  const pawSize = 25

  const getRandomPosition = () => {
    const maxX = window.innerWidth - pawSize
    const maxY = window.innerHeight - pawSize

    const randomX = Math.random() * maxX
    const randomY = Math.random() * maxY

    return { left: randomX, top: randomY }
  }

  const [pawPositions, setPawPositions] = useState(
    Array.from({ length: numberOfPaws }, () => getRandomPosition())
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setPawPositions(pawPositions.map(getRandomPosition))
    }, 5000)

    return () => clearInterval(interval)
  }, [pawPositions])

  return (
    <div className="scattered-paws-container">
      {pawPositions.map((position, index) => (
        <LiaPawSolid
          key={index}
          style={{
            position: 'absolute',
            width: `${pawSize}px`,
            height: `${pawSize}px`,
            left: `${position.left}px`,
            top: `${position.top}px`,
            // transition: 'all 0.5s ease',
            transition: 'all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)',
            opacity: 0.1,
            zIndex: -1,
          }}
        />
      ))}
    </div>
  )
}

export default ScatteredPaws
