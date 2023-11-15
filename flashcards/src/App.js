import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Pages/Layout";
import DictionaryContentWrapper from './components/DictionaryContextWrapper/DictionaryContextWrapper';
import Flashcards from "./components/Pages/Flashcards/Flashcards";
import Offer  from "./components/Pages/Offer/Offer";
import Page404 from "./components/Pages/Page404";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Offer />} />
            <Route path="dictionary" element={<DictionaryContentWrapper />} />
            <Route path="training" element={<Flashcards />} />
            <Route path="start" element={<Offer />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;



