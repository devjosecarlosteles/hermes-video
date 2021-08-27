import React, { useState, useEffect } from "react"
import {
  Container
} from "./style"

interface VideoContainer {
  src: string
}

function VideoContainer ({ src }: VideoContainer) {
  const [ showContextMenu, setShowContextMenu ] = useState(false)

  function handleContextMenu(e: any) {
    e.preventDefault() // block opening context menu

    setShowContextMenu(true)
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
        onContextMenu={(e) => handleContextMenu(e)}
      ></video>
      {
        showContextMenu ? (
          "salve"
        ) : null
      }
    </Container>
  )
}

export  {
  VideoContainer
}