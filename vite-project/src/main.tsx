import { createRoot } from 'react-dom/client'
import App from './App'
import {ToastContainer} from "react-toastify"

createRoot(document.getElementById('root') as HTMLElement).render(

<>
<App></App>
<ToastContainer
position="top-right"
autoClose={2000}
limit={1}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
</>

)