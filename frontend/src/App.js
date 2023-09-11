import { Routes, Route } from 'react-router-dom';
import "./styles/App.css";
import "./styles/index.css";
import { UserContextProvider } from './context/UserContext';
import IndexPage from "./pages/IndexPage";
import PostPage from "./pages/PostPage";
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
        <UserContextProvider> 
            <Routes>
                <Route path="/" element={ <IndexPage /> } />
                <Route path="/post/:id" element={ <PostPage /> } />
                <Route path="/dashboard" element={ <DashboardPage /> } />
                <Route path="/login" element={ <LoginPage /> } />
            </Routes>
        </UserContextProvider>
      </div>
  );
}

export default App;
