import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { App } from './App.tsx'
import { Excercise1 } from './exercises/Excercise1.tsx'

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      {
        path: "exercise1", element: <Excercise1 />,
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
