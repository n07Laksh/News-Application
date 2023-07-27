import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Toaster extends Component {
  render() {
    // toast emitter
    const notify = () => {toast("So Easy!",{
        // position: "top-center",
        // autoClose: 5000,
        // hideProgressBar: false,
        // closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        // theme: "colored",
        });}
        
    return (
      <div>
      {/* toast container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
         />
        <button onClick={notify}>Toast</button>
        

      </div>
    )
  }
}
