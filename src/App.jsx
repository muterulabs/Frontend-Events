import Layout from './components/Layout';
import EventDetailsPage from './pages/EventDetailsPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
      </Routes>
    </Layout>
  )
}

export default App