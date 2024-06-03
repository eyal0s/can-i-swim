import "./styles/global.css";
import "./styles/layout.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Swim App</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <link rel="icon" href="/favicon.ico" />
      <body>
      <div className="loading-container">
      <div className="sky">
        <div className="sun">☀️</div>
        <div className="beach">
          <div className="crab-1">🦀</div>
          <div className="crab-2">🦀</div>
          <div className="crab-3">🦀</div>
        </div>
        <div className="water">
          <div className="page-content"> 
            {children}
            </div>
        <div className="swimmer">🏊</div>
        </div>
      </div>
    </div>
      </body>
    </html>
  )
}