import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="title">
            🦁 Demo React Site
          </h1>
          <p className="subtitle">
            Built with Vite + React
          </p>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="card">
            <button onClick={() => setCount(count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
            <div className="connect">
              <a
                className="button"
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <a
                className="button"
                href="https://vite.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite Docs
              </a>
            </div>
          </div>
        </div>

        <section className="features">
          <h2>Features</h2>
          <div className="feature-grid">
            <div className="feature">
              <div className="icon">⚡️</div>
              <h3>Blazing Fast</h3>
              <p>HMR & instant feedback</p>
            </div>
            <div className="feature">
              <div className="icon">🎨</div>
              <h3>Modern CSS</h3>
              <p>Clean & responsive design</p>
            </div>
            <div className="feature">
              <div className="icon">🔧</div>
              <h3>Developer Friendly</h3>
              <p>TypeScript & ESLint ready</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>
            Made with ❤️ using Vite + React
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
