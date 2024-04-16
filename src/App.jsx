import React, { useRef } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import './App.scss'
const App = () => {
  const gameName = 'WebGL';
  const relativePath = '../../../../unitybuild/original/'
  const ref = useRef()
  const {
    loadingProgression,
    unityProvider,
    isLoaded,
    sendMessage
  } = useUnityContext({
    productName: 'Assesment',
    companyName: 'Xeurix.LTD',
    // The url's of the Unity WebGL runtime, these paths are public and should be
    //   accessible from the internet and relative to the index.html.
    loaderUrl: `${relativePath}${gameName}.loader.js`,
    dataUrl: `${relativePath}${gameName}.data.unityweb`,
    frameworkUrl: `${relativePath}${gameName}.framework.js.unityweb`,
    codeUrl: `${relativePath}${gameName}.wasm.unityweb`,
    // Additional configuration options.
    webglContextAttributes: {
      preserveDrawingBuffer: true,
    },
  });
  return (
    <div>
      loading {loadingProgression}
      <div>{isLoaded?"Loaded":"Loading"}</div>
      <Unity className="unity-canvas" ref={ref} unityProvider={unityProvider} />
    </div>
  );
};

export default App;