import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import GridContextProvider from './Context/gridContext'
import ErrorContextProvider from './Context/errorContext'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorContextProvider>
      <DndProvider backend={HTML5Backend}>
      <GridContextProvider>
        <App />
      </GridContextProvider>
      </DndProvider>
    </ErrorContextProvider>
  </React.StrictMode>,
)
