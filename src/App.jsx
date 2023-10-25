import { useAuth0 } from "@auth0/auth0-react";
import reactLogo from './assets/react.svg'
import './App.css'
import Login from "./components/Login";
import Profile from './components/Profile';
import Logout from './components/Logout';

function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {isAuthenticated ? <Logout /> : <Login />}
      <Profile />
      <h1> React</h1>
    </>
  )
}

export default App
