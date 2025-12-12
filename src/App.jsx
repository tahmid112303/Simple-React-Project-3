import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles'
import { ToastContainer } from 'react-toastify';

function App() {
  const userPromise=fetch('Data.json').then(res=>res.json())
  return (
    <>
      <ToastContainer></ToastContainer>
      <h1 className='text-center mt-4 text-6xl font-bold mb-6'>Water Bottle Shop</h1>

      <Suspense fallback={<span className="loading loading-spinner text-info"></span>}>
          <Bottles userPromise={userPromise}></Bottles>
      </Suspense>

    </>
  )
}

export default App
