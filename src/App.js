import { Suspense } from "react";
import { Navigation } from '../src/Navigation/Routes'
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { Flip, ToastContainer } from "react-toastify";
import { Header } from '../src/components/Layout/header';
import { Provider } from 'react-redux';  // Import Redux Provider
import store from './redux/store';  // Import Redux store

function App() {
  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<div className="spnnier"><p>Loading...</p></div>}>
          <Header />
          <Navigation />
          <ToastContainer
            position="top-right"
            autoClose={3500}
            hideProgressBar
            newestOnTop={true}
            closeOnClick
            draggable
            pauseOnHover
            theme="colored"
            transition={Flip}
          />
        </Suspense>
      </Provider>
    </>
  )
}

export default App;
