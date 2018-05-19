import React from 'react';

 const Header = props => (
  <header className="top">
    <h1>Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      the Day</h1>
    <h3 className="tagline">
      { /* here this=component*/ }
      <span>{props.tagline}</span>
    </h3>
  </header>
);

export default Header;