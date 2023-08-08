import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout"
import Dictionary from "./components/dictionary/Dictionary"
import Flashcards from "./components/flashcard/Flashcards"
import Offer  from "./components/Offer"
import Page404 from "./components/Page404"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Offer />} />
            {/* <Route index element={<Dictionary />} /> */}
            <Route path="dictionary" element={<Dictionary />} />
            <Route path="flashcards" element={<Flashcards />} />
            <Route path="start" element={<Offer />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;



