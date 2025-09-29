import type { FormularioTransportista } from "../interface/formulario.interface";
import type { FormularioResponse } from "../interface/formulario.response";

export async function enviarFormularioTransportista(formulario: FormularioTransportista): Promise<FormularioResponse> {
    try {
        const response = await fetch('https://api.picklog.online/v2/contact/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formulario)
        });

        return await response.json();
    } catch (err: any) {
        return {
            success: false,
            type: 'unknown',
            error: err.message
        };
    }
}