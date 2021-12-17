import React from 'react' ;

const message = () => {
  alert("Welcome to Educative!");
}

function Logo() {
  return (
      <div className="logo">
        <h1> Logo </h1>
      </div>
  );
}

function Navigation() {
  return (
      <ul className="navigation">
        <li>
          <a>Homepage</a>
        </li>
        <li>
          <a>Team</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
  );
}

function SearchBar() {
  return (
      <div className="search-bar">
        <form method="post" action="/search">
          <p>
            <label htmlFor="q">Search:</label>
            <input type="text" id="q" name="q" />
          </p>
          <button onClick={message} type="button">Search</button>
        </form>
      </div>
  );
}

export default function Header() {
  return (
      <header>
        <Logo />
        <Navigation />
        <SearchBar />
      </header>
  );
}