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

  #controls {
    position: absolute;
    
    top: 40px;
    left: 10px;

    .control {
      cursor: pointer;
    }
  }

  #timeline_container {
    width: 92%;
    height: 3px;

    background-color: #FFF;

    position: absolute;

    bottom: 20px;
    left: 20px;
  }
`