import { ToastContainer } from 'react-toastify'
import AppRouter from './Config/AppRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
