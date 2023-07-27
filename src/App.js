import React, {useState} from 'react'

import Navbar from './newsComponent/Navbar';
import './App.css';
import News from './newsComponent/News';
import {
  BrowserRouter as R,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [progress,setProgress] = useState(0);

  return (
    <div>

    <R>
      <LoadingBar
        color='#f11946'
        progress={progress}
        shadow={true}
        height={3}
        style={{
                height:"4px",
                }}
/>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<News progress={setProgress} apiKey={apiKey} key="general" country="in" pageSize={6} category="general" />}/>
        <Route exact path="/business" element={<News progress={setProgress} apiKey={apiKey} key="business" country="in" pageSize={6} category="business" />}/>
        <Route exact path="/entertainment" element={<News progress={setProgress} apiKey={apiKey} key="entertainment" country="in" pageSize={6} category="entertainment" />}/>
        <Route exact path="/healths" element={<News progress={setProgress} apiKey={apiKey} key="healths" country="in" pageSize={6} category="health" />}/>
        <Route exact path="/science" element={<News progress={setProgress} apiKey={apiKey} key="science" country="in" pageSize={6} category="science" />}/>
        <Route exact path="/sports" element={<News progress={setProgress} apiKey={apiKey} key="sports" country="in" pageSize={6} category="sports" />}/>
        <Route exact path="/technology" element={<News progress={setProgress} apiKey={apiKey} key="technology" country="in" pageSize={6} category="technology" />}/>
        
      </Routes>
      </R>

    </div>
  );

}



export default App;
