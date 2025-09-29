// Respuesta exitosa
export interface FormularioSuccessResponse {
    success: true;
    data: any; // Puedes tipar mejor si sabes la estructura de "result" que retorna mailService.sendMail
}

// Error de validación (Zod)
export interface FormularioValidationErrorResponse {
    success: false;
    type: 'validation';
    error: Array<{
        code: string;
        message: string;
        path: (string | number)[];
    }>;
}

// Error de envío de mail
export interface FormularioMailErrorResponse {
    success: false;
    type: 'mail';
    error: string;
}

// Error desconocido (puedes usarlo para otros casos)
export interface FormularioUnknownErrorResponse {
    success: false;
    type: 'unknown';
    error?: string;
}

// Unión de todas las posibles respuestas
export type FormularioResponse =
    | FormularioSuccessResponse
    | FormularioValidationErrorResponse
    | FormularioMailErrorResponse
    | FormularioUnknownErrorResponse;