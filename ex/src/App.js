import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import StreamMain from './pages/stream/StreamMain'
import StreamLive from './pages/stream/StreamLive'

function App() {
  return (

    <>

<BrowserRouter>
<Topbar />
<Sidebar />
<div className="App-content">

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stream" element={<StreamMain />} />
        <Route path="/streamlive" element={<StreamLive />} />
        {/* <Route path="/page2/*" element={<Page2 />} />
        <Route path="/*" element={<NotFound />} /> */}
      </Routes>


<Home />

</div>
      
    </BrowserRouter>
      
      

    </>
  );
}

export default App;
