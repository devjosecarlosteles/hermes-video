import React from 'react';
import { VideoContainer } from "./components/HermesVideo"
import video from "./assets/example.mp4"

function App() {
  return (
    <div className="App">
      <VideoContainer src={ video } />
    </div>
  );
}

export default App;
