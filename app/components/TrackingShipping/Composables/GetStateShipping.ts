
import type { StateSuccess } from "../interface/state.ok.response";
import type { TrackingError } from "../interface/tracking.error.interface";



/**
 * Devuelve el estado del envio consultado, mas informacion logística.
 * @param _shippingCode Código de envio
 * @param _bearerToken Token de autorización
 * @returns Promise que resuelve un array con un objeto con informacion de estado y datos logísticos.
 */

export const getInfoState = async (

    _shippingCode: string,
    _bearerToken: string

): Promise<StateSuccess | TrackingError> => {

    try {

        const baseURL = `/v1/shipping/state/`

        const request = await fetch(baseURL + _shippingCode, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${_bearerToken}`
            }
        });

        console.log(request)

        const response = await request.json();

        // Si la respuesta no es OK, pero incluye detalles, los devolvemos para manejarlos
        if (!request.ok) {
            return {
                msg: response.msg || `Error HTTP: ${request.status}`,
                status: false,
                result: []
            };
        }


        if (!response.status) {
            return response as TrackingError;
        }

        console.log(response)
        return response as StateSuccess;

    } catch (error) {
        console.error("Error al consultar el historial", error);

        return {
            msg: error instanceof Error ? error.message : "Error desconocido",
            status: false,
            result: [
                null
            ]
        }
    }

}