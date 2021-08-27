import React, { useState, useEffect } from "react"
import {
  Container
} from "./style"
import {
  BsFillPlayFill
} from "react-icons/bs"

interface VideoContainer {
  src: string
}

function VideoContainer ({ src }: VideoContainer) {
  const [ showContextMenu, setShowContextMenu ] = useState(false)
  const [ showControls, setShowControls ] = useState(false)
  const [ showTimeline, setShowTimeline ] = useState(false)

  function handleContextMenu(e: any) {
    e.preventDefault() // block opening context menu

    setShowContextMenu(true)  
  }

  function handleMouseMove() {
    setShowControls(true)
    setShowTimeline(true)

    setTimeout(() => {
      setShowTimeline(false)
      setShowControls(false)
    }, 4000)
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
        onMouseMove={ () => handleMouseMove() }
      ></video>
      {
        showTimeline ? (
          <div id="timeline_container">
            <div id="timeline"></div>
          </div>
        ) : null
      }
      {
        showControls ? (
          <div id="controls">
            <BsFillPlayFill
              className="control"
              color="#FFF"
              size={ 30 }
            />
          </div>
        ) : null
      }
    </Container>
  )
}

export  {
  VideoContainer
}