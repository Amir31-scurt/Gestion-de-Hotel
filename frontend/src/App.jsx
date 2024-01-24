import React from 'react';
import './App.css';
import ProtectedRoutes from './pages/ProtectedRoutes';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
      <ProtectedRoutes />
    </AnimatePresence>
  );
}

export default App;
