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




          {/* <Switch>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route exact={true} path="/stream">
            <StreamMain />
          </Route>
          <Route exact={true} path="/streamLive">
            <StreamLive />/
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch> */}
        </div>
      </Router>


    </>

    // <div className="App">
    //   <header className="App-header">
    //     Header
    //   </header>

    // <div className='App-content'>

    //   <div className='App-left'>
    //     <div className='mnu'>
    //       <div className='mnu-1'>123</div>
    //     </div>
    //   </div>

    //   <div className='App-right'>
    //     <div className='cont'>
    //       <div className='cont-1'>1234</div>
    //       <div className='cont-1'>1234</div>
    //       <div className='cont-1'>1234</div>
    //     </div>
    //   </div>



    // </div>




    // </div>
  );
}

export default App;
