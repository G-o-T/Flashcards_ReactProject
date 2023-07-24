import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './pages/MainPage';
import FlashcardsPage from './pages/FlashcardsPage';
import ErrorPage from './pages/ErrorPage';
import OfferPage from './pages/OfferPage';
import Header from "./components/Header";


function App() {

  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/dictionary" element={<MainPage />} />
          <Route path="/flashcards" element={<FlashcardsPage />} />
          <Route path="/start" element={<OfferPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
