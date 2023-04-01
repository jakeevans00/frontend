import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Movies from './containers/Movies';
import Podcasts from './containers/Podcasts';

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="/Podcasts" element={<Podcasts />} />
    </Routes>
  );
}
