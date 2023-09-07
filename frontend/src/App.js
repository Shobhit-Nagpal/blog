import { Routes, Route } from 'react-router-dom';
import "./styles/App.css";
import "./styles/index.css";
import { UserContextProvider } from './context/UserContext';
import IndexPage from "./pages/IndexPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="App">
        <UserContextProvider> 
            <Routes>
                <Route path="/" element={ <IndexPage /> } />
                <Route path="/post/:id" element={ <PostPage /> } />
            </Routes>
        </UserContextProvider>
      </div>
  );
}

export default App;
