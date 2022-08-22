import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'

function App() {
  return (

    <>
      <Router>

        <Topbar />


        <Sidebar />
        <div className="App-content">



          <Home />

        </div>
      </Router>

    </>
  );
}

export default App;
