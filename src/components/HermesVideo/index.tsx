import React from "react"
import {
  Container
} from "./style"

interface VideoContainer {
  src: string
}

function VideoContainer ({ src }: VideoContainer) {
  return (
    <Container>
      <video src={ src } controls={ false }></video>
    </Container>
  )
}

export  {
  VideoContainer
}