import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Offer from './components/Offer';
import Dictionary from './components/dictionary/Dictionary';
import Flashcards from './components/flashcard/Flashcards';

function App() {
  return (
    <div className="App">
      <Header />
      <Offer />
      <Dictionary />
      <Flashcards />
      <Footer />
    </div>
  );
}

export default App;
