import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: 338px;

  background-color: #000;

  position: relative;

  video {
    width: 100%;
    height: 100%;
    
    position: absolute;

    top: 0;
    left: 0;
  }

  #timeline_container {
    width: 92%;
    height: 3px;

    background-color: #FFF;

    position: absolute;

    bottom: 40px;
    left: 20px;
  }

  #controls {
    position: absolute;
    
    bottom: 2px;
    left: 20px;

    .control {
      cursor: pointer;
    }
  }
`