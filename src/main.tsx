import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { App } from './App.tsx'
import Exercise1 from './exercises/Exercise1.tsx'
import { Main } from './gui/Main.tsx'

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      {
        path: "/", element: <Main />,
      },
      {
        path: "/exercise1", element: <Exercise1 />,
      },
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
