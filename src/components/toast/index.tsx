import { Toaster } from "react-hot-toast";

const ToastContainer = () => {
    return(
        <Toaster
        toastOptions={{
          style: {
            background: "#0A0A0A",
            color: "#fff",
            border: "#fff",
            padding: "1rem",
          },
          error: {
            icon: "❌",
          },
          success: {
            icon: "✅",
          },
          duration: 3000,
        }}
      />
    )
};

export default ToastContainer