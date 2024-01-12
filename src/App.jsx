import './App.css'
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "assets/Build/assets.loader.js",
    dataUrl: "assets/Build/assets.data",
    frameworkUrl: "assets/Build/assets.framework.js",
    codeUrl: "assets/Build/assets.wasm",
  });

  return (
    <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', width: "100vw"}}>
      {!isLoaded && (
        <div style={{textAlign: 'center', fontSize: '20px'}}><p>Loading Application... {Math.round(loadingProgression * 100)}%</p></div>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden", borderLeft: '5px solid #306FA5', borderRight: '5px solid #306FA5', height: window.innerHeight, width: window.innerWidth }}
      />
    </div>
  );
}

export default App
