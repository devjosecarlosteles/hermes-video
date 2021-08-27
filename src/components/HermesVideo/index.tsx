import React, { useState, useEffect } from "react"
import {
  Container
} from "./style"

interface VideoContainer {
  src: string
}

function VideoContainer ({ src }: VideoContainer) {
  const [ showContextMenu, setShowContextMenu ] = useState(false)
  const [ showControls, setShowControls ] = useState(false)

  function handleContextMenu(e: any) {
    e.preventDefault() // block opening context menu

    setShowContextMenu(true)
  }

  function handleMouseMove() {
    setShowControls(true)
  }

  useEffect(() => {
    window.addEventListener("click", () => {
      setShowContextMenu(false)
    })
  }, [])

  return (
    <Container>
      <video 
        src={ src } 
        controls={ false }
        onContextMenu={ (e) => handleContextMenu(e) }
        onMouseMove={ (e) => handleMouseMove() }
      ></video>
    </Container>
  )
}

export  {
  VideoContainer
}