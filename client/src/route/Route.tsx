import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/page/Home'
import Layout from '@/layout/Layout'
import ErrorPage from '@/page/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
     
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
} 