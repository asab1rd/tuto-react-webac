import React from 'react'

export default function Header() {
    return (
        <header className="header-container">
            <div className="logo">JESSICON</div>
            <nav className="nav">
                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/portfolio" className="nav-link">Portfolio</a>
                <a href="/api" className="nav-link">RANDOM</a>
            </nav>
        </header>
    );
}

