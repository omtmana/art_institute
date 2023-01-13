import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
