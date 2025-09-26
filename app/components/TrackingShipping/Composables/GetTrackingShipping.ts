
import type { TrackingError } from "../interface/tracking.error.interface";
import type { TrackingSuccess } from "../interface/tracking.ok.interface";


/**
 * Devuelve el historial de estados del envio consultado
 * @param _shippingCode Código de envio
 * @param _bearerToken Token de autorización
 * @returns Promise que resuelve un array de objetos con el historial de estados del envío
 */

export const getHistoryShipping = async (

    _shippingCode: string, 
    _bearerToken: string

): Promise<TrackingSuccess | TrackingError> => {

    console.log(_shippingCode)
    console.log(_bearerToken)

    try {

        const baseURL = `/v1/shipping/historial/`;

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
        if(!request.ok) {
            return {
                msg: response.msg || `Error HTTP: ${request.status}`,
                status: false,
                result: []
            };
        }


        if(!response.status){
            return response as TrackingError;
        }

        return response as TrackingSuccess;
        
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