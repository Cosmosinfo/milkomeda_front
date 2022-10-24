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
import StoreDetail2 from './pages/store/StoreDetail2'
import StoreDetail3 from './pages/store/StoreDetail3'
import StoreDetail4 from './pages/store/StoreDetail4'
import Error from './pages/Error/ErrorPage'
import ArtistMain from './pages/Artist/ArtistMain'
import ArtistHome from './pages/Artist/ArtistHome'
import ArtistStage from './pages/Artist/ArtistStage';
import ArtistStageus from './pages/Artist/ArtistStageus'
import ArtistStageps from './pages/Artist/ArtistStageps'
import ArtistStore from './pages/Artist/ArtistStore';
import ArtistNotice from './pages/Artist/ArtistNotice';
import ArtistSchedule from './pages/Artist/ArtistSchedule';
import ArtistPost from './pages/Artist/ArtistPost';
import Help from './pages/Help/Help';
import Settings from './pages/Setting/Setting';

function App() {
  return (

    <>

      <BrowserRouter>
        <Topbar />
        <Sidebar />
        <div className="App-content">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/setting" element={<Settings />} />
            <Route path="/stream" element={<StreamMain />} />
            <Route path="/streamup" element={<StreamUpcoming />} />
            <Route path="/streampv" element={<StreamPrevious />} />
            <Route path="/streamlive" element={<StreamLive />} />
            <Route path="/store" element={<StoreMain />} />
            <Route path="/storeDetail" element={<StoreDetail />} />
            <Route path="/storeDetail2" element={<StoreDetail2 />} />
            <Route path="/storeDetail3" element={<StoreDetail3 />} />
            <Route path="/storeDetail4" element={<StoreDetail4 />} />
            <Route path="/error" element={<Error />} />
            <Route path="/artist" element={<ArtistMain />} />
            <Route path="/artisthome" element={<ArtistHome />} />
            <Route path="/artistnotice" element={<ArtistNotice />} />
            <Route path="/artiststage" element={<ArtistStage />} />
            <Route path="/artiststageus" element={<ArtistStageus />} />
            <Route path="/artiststageps" element={<ArtistStageps />} />
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
