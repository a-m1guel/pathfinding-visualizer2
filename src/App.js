import React, { useState } from 'react';
import './App.css';
import PathfindingVisualizer from './pathfindingVisualizer/pathfindingVisualizer';
import Modal from '../src/components/modal';
import '../src/pathfindingVisualizer/navbar.css';

const modalbtn_bg = {
  backgroundColor: '#343a40'
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App" style = {modalbtn_bg}>
      <button className = 'btn btn-light' onClick = {() => setIsOpen(true)}>Description of Algorithms</button>
      <Modal open ={isOpen} onClose={() => setIsOpen(false)}>
      </Modal>
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
