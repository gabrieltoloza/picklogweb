import type { Ref } from "vue"
import type { ResponseToken } from "../../interface/JWT/token.response.interface"
import type { ErrorJWTResponse } from "../../interface/JWT/error.response.token.interface"



/**
 * Funcion para autenticarnos en la api de Akeron y obtener el token de autorización.
 * @param client_api Api client del seller.
 * @param client_secret Api secret del seller.
 * @returns Promise que resuelve un objeto con el jwt y su tiempo de expiración.
 */


export const getAuthAkeronJWT = async(

    client_api: string, 
    client_secret: string

): Promise<ResponseToken | ErrorJWTResponse> => {

    const formData = {
        client_api: client_api,
        client_secret: client_secret
    }

    try {
        
        const token = await fetch(`https://picklog.akeron.net/api/v1/auth/token`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

        })

        if(!token.ok) throw new Error(`Error HTTP: ${token.status}`)
        
        const data = await token.json();

        // Validamos el tipo de respuesta basándonos en la estructura
        if ('result' in data && Array.isArray(data.result)) {
            
            if (data.result.length > 0 && data.result[0]?.api_token) {

                return data as ResponseToken;
            } else {

                return {
                    msg: data.msg || 'Error al obtener token',
                    status: false,
                    result: []
                } as ErrorJWTResponse;
            }
        } else {

            // Formato de respuesta inesperado
            return {
                msg: 'Formato de respuesta inesperado',
                status: false,
                result: []
            } as ErrorJWTResponse;
        }


    } catch (error) {
        console.log("Ocurrio un error: ", error)
        return {
            msg: 'Ocurrio un error inesperado',
            status: false,
            result: [null]
        }
    }
}




// Scroll para visualizar las opciones de envio
// Scroll para visualizar las opciones de envio
// Scroll para visualizar las opciones de envio
export const scrollToOptionShipping = (optionsRef: Ref<HTMLElement | null>) => {
    if (!optionsRef.value) return;

    const elementPosition = optionsRef.value.getBoundingClientRect().top;
    // Usar scrollY con fallback
    const offsetPosition = elementPosition + (window.scrollY || document.documentElement.scrollTop);

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}