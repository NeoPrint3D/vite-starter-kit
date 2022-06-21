import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import "./styles/global.css"

const rootElement = document.getElementById('root')
const components = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
)

if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, components)
} else {
  ReactDOM.createRoot(rootElement!).render(components)
}