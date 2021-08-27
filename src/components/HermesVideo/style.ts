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
    width: 200px;
    height: 10px;

    background-color: red;

    position: absolute;

    bottom: 0;
  }
`