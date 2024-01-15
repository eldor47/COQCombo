import './App.css'
import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "assets/Build/assets.loader.js",
    dataUrl: "assets/Build/assets.data",
    frameworkUrl: "assets/Build/assets.framework.js",
    codeUrl: "assets/Build/assets.wasm",
  });

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }


  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  
  const isMobile = width <= 768;

  return (
    <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', width: "100vw", textAlign: 'center'}}>
      {isMobile ? <div>Mobile is not supported. Please play on a Desktop / Laptop device. Android / iOS in the works!</div> :
      <>
        {!isLoaded && (
          <div style={{width: '500px', textAlign: 'center'}}>Loading Application... {Math.round(loadingProgression * 100)}%</div>
        )}
        <Unity
          unityProvider={unityProvider}
          style={{ visibility: isLoaded ? "visible" : "hidden", aspectRatio: "16 / 9", height: window.innerHeight, width: window.innerWidth }}
        />
      </>}
    </div>
  );
}

export default App
