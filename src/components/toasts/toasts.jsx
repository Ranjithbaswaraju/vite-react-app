import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { errorToasts,successToasts } from './toast-helpers';



const Toasts=({message})=>{
        // const clickMe=()=>{
        //     // toast(message)
        //     toast.success(message,{
        //         position:"top-center"
        //     })
        const notify = () => {
          // errorToasts("I am error","top-right")

          try{
            successToasts("I am clciked","top-right")
          }catch(err){
            successToasts("I am error","top-right")
          }
           
        }
    return(
        <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div> 
    )
}
export default Toasts;