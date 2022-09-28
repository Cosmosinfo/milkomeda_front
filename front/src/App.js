import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import StreamMain from './pages/stream/StreamMain'
import StreamUpcoming from './pages/stream/StreamUpcoming'
import StreamPrevious from './pages/stream/StreamPrevious'
import StreamLive from './pages/stream/StreamLive'
import StoreMain from './pages/store/StoreMain'
import StoreDetail from './pages/store/StoreDetail'
import Error from './pages/Error/ErrorPage'
import ArtistMain from './pages/Artist/ArtistMain'
import ArtistHome from './pages/Artist/ArtistHome'
import ArtistStage from './pages/Artist/ArtistStage';
import ArtistStore from './pages/Artist/ArtistStore';
import ArtistNotice from './pages/Artist/ArtistNotice';
import ArtistSchedule from './pages/Artist/ArtistSchedule';
import ArtistPost from './pages/Artist/ArtistPost';

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
            <Route path="/streamup" element={<StreamUpcoming />} />
            <Route path="/streampv" element={<StreamPrevious />} />
            <Route path="/streamlive" element={<StreamLive />} />
            <Route path="/store" element={<StoreMain />} />
            <Route path="/storeDetail" element={<StoreDetail />} />
            <Route path="/error" element={<Error />} />
            <Route path="/artist" element={<ArtistMain />} />
            <Route path="/artisthome" element={<ArtistHome />} />
            <Route path="/artistnotice" element={<ArtistNotice />} />
            <Route path="/artiststage" element={<ArtistStage />} />
            <Route path="/artiststore" element={<ArtistStore />} />
            <Route path="/artistpost" element={<ArtistPost />} />
            <Route path="/artistschedule" element={<ArtistSchedule />} />
            {/* <Route path="/page2/*" element={<Page2 />} />
        <Route path="/*" element={<NotFound />} /> */}
          </Routes>

        </div>

      </BrowserRouter>



    </>
  );
}

export default App;
