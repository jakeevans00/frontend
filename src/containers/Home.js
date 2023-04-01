import React from 'react';
import './Home.css';
import TopBanner from '../../src/Blah';

export default function Home() {
  return (
    <div className="Home">
      <TopBanner saying="Joel Hilton Movie Collection" />
      <p>This site was created to host all of Joel Hilton's movies!!</p>
    </div>
  );
}
