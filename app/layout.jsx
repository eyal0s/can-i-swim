import Layout from "./components/Layout";
import "./styles/loading.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
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
        <Layout>{children}</Layout>
          <div className="swimmer">🏊</div>
        </div>
      </div>
    </div>
      </body>
    </html>
  )
}