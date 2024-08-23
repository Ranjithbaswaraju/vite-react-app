How to use the npm packages in react application:

1.Loader
2.Toasts
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Toasts=({message})=>{
        // const clickMe=()=>{
        //     // toast(message)
        //     toast.success(message,{
        //         position:"top-center"
        //     })
        const notify = () => {
            // toast("Default Notification !");
      
            toast.success("Success Notification !", {
              position: "top-right"
            });
      
            // toast.error("Error Notification !", {
            //   position: "top-left"
            // });
      
            // toast.warn("Warning Notification !", {
            //   position: "bottom-left"
            // });
      
            // toast.info("Info Notification !", {
            //   position: "bottom-center"
            // });
      
            // toast("Custom Style Notification with css class!", {
            //   position: "bottom-right",
            //   className: 'foo-bar'
            // });
        }
    return(
        <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div> 
    )
}
export default Toasts;