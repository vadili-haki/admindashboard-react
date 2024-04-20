import './App.scss'
import "./style/dark.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Router,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import New from './pages/New';
import Single from './pages/Single';
import List from './pages/List';


function App() {


  return (
    <div className='app '>
      <BrowserRouter>
        <Routes>
          <Route path='/' >
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
