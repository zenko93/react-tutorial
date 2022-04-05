import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import {Navbar} from "./components/Navbar";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {FirebaseState} from "./context/firebase/FirebaseState";

function App() {
  return (
      <FirebaseState>
          <AlertState>
              <BrowserRouter>
                  <Navbar />
                  <div className="container pt-4">
                      <Alert />
                      <Routes>
                          <Route path={'/'} exact element={ <Home/> } />
                          <Route path={'/about'} exact element={ <About/> } />
                      </Routes>
                  </div>
              </BrowserRouter>
          </AlertState>
      </FirebaseState>
  );
}

export default App;
