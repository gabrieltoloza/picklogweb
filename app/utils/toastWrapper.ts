import toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

export function showToast(message: string, type: 'success' | 'error' = 'success') {
    const isMobile = window.innerWidth < 640;

    toastify({
        text: message,
        duration: 8000,
        gravity: "bottom",
        position: isMobile ? "center" : "right",
        className: "custom-toastify", // <-- clase personalizada
        stopOnFocus: true,
        style: {
            background: "#18181b", // Fondo oscuro siempre
            color: "#fff",
            width: isMobile ? "90%" : "auto",
            minWidth: isMobile ? "200px" : "auto",
            fontSize: "1rem",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0 2px 16px 0 #00000033"
        }
    }).showToast();
}