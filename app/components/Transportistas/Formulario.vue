<template>
    <div class="min-h-screen text-white py-10 bg-transparent">
        <div class="container mx-auto">
            <div class="w-full mx-auto flex flex-col bg-gray-300 rounded-lg px-32">
                <span class="self-end h-auto">
                    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="64.0001" cy="64" rx="32" ry="32" transform="rotate(-180 64.0001 64)"
                            fill="#F9BD6B" />
                        <path
                            d="M54.8305 51.3738L75.2598 73.3563C76.0259 74.1807 76.0259 75.2798 75.2598 76.1041C74.4937 76.9285 73.4722 76.9285 72.7061 76.1041L52.2768 54.1216C51.5107 53.2973 51.5107 52.1982 52.2768 51.3738C53.0429 50.5495 54.0644 50.5495 54.8305 51.3738Z"
                            fill="black" />
                        <path
                            d="M75.2611 54.1231L54.8318 76.1056C54.0657 76.9299 53.0442 76.9299 52.2781 76.1056C51.512 75.2813 51.512 74.1821 52.2781 73.3578L72.7074 51.3753C73.4735 50.551 74.495 50.551 75.2611 51.3753C76.0272 52.1996 76.0272 53.2988 75.2611 54.1231Z"
                            fill="black" />
                    </svg>

                </span>

                <h1 class="text-5xl h-[70px] font-semibold my-14 flex flex-col gap-7 text-start tracking-wide text-[#1B2329]">
                    <span>Formulario de Postulación</span>
                    <span>para Transportistas</span>
                </h1>

                <form @submit.prevent="enviarFormulario" class="py-20">
                    <div>
                        
                        <div class="flex flex-col gap-4">
                            <div>
                                <label for="nombre" class="block mb-2">Nombre*</label>
                                <input id="nombre" v-model="formulario.nombre" type="text"
                                    class="w-full p-3 bg-gray-700" placeholder="Completá con tu nombre" required>
                            </div>
                            <div>
                                <label for="apellido" class="block mb-2">Apellido*</label>
                                <input id="apellido" v-model="formulario.apellido" type="tel"
                                    class="w-full p-3 bg-gray-700" placeholder="Completá con tu apellido" required>
                            </div>
                            <div>
                                <label for="barrio" class="block mb-2">Barrio/Comuna/Colonia</label>
                                <input id="barrio" v-model="formulario.barrio" type="text"
                                    class="w-full p-3 bg-gray-700" placeholder="Ingrese su barrio o comuna" required>
                            </div>
                            <div>
                                <label for="pais" class="block mb-2">Pais*</label>
                                <input id="pais" v-model="formulario.pais" type="text" class="w-full p-3 bg-gray-700"
                                    placeholder="Ingrese el pais actual" required>
                            </div>
                            <div>
                                <label for="correo" class="block mb-2">Correo*</label>
                                <input id="correo" v-model="formulario.correo" type="email"
                                    class="w-full p-3 bg-gray-700" placeholder="Completá con tu correo" required>
                            </div>
                            <div>
                                <label for="dni" class="block mb-2">Documento Nacional de Identidad/Cédula de
                                    Identidad*</label>
                                <input id="dni" v-model="formulario.dni" type="text" class="w-full p-3 bg-gray-700"
                                    placeholder="Completá con tu numero de documento (DNI)" required>
                            </div>
                            <div>
                                <label for="phone" class="block mb-2">Numero de Telefono*</label>
                                <input id="phone" v-model="formulario.phone" type="text" class="w-full p-3 bg-gray-700"
                                    placeholder="Completá con tu numero de teléfono" required>
                            </div>
                            <div>
                                <label for="marca" class="block mb-2">Marca de vehículo</label>
                                <input id="marca" v-model="formulario.marca" type="text" class="w-full p-3 bg-gray-700"
                                    placeholder="Ingrese la marca de su vehículo" required>
                            </div>
                            <div>
                                <label for="patente" class="block mb-2">Patente | Placa*</label>
                                <input id="patente" v-model="formulario.patente" type="text"
                                    class="w-full p-3 bg-gray-700" placeholder="Ingrese el número de identificación de su vehículo" required>
                            </div>
                            <div>
                                <label for="registro" class="block mb-2 w-[56%]">
                                    ¿Estás registrado en el organismo regulatorio de tu país para poder facturar con tu nombre?*
                                </label>
                                <div class="flex gap-5 m-5 ml-7">
                                    <button>SI</button>
                                    <button>NO</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <!-- Botón de envío -->
                    <div class="flex justify-center pt-6">
                        <button type="submit"
                            class="bg-[#F9BD6B] text-[#1B2329] px-10 py-4 rounded-full text-lg font-medium hover:bg-[#F9BD6B]/80 transition-colors">
                            Enviar solicitud
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
const formulario = reactive({
    nombre: '',
    telefono: '',
    email: '',
    ciudad: '',
    tipoVehiculo: '',
    marca: '',
    modelo: '',
    anio: '',
    experiencia: '',
    mensaje: ''
});

const enviarFormulario = async () => {
    try {
        // Aquí implementarías la lógica para enviar el formulario
        // Por ejemplo, mediante una API o servicio de correo
        console.log('Formulario enviado:', formulario);

        // Simulando envío exitoso
        alert('¡Gracias por tu solicitud! Te contactaremos pronto.');

        // Opcionalmente redirigir a una página de confirmación
        // navigateTo('/transportistas/gracias');
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Ocurrió un error al enviar el formulario. Por favor intenta nuevamente.');
    }
};
</script>

<style scoped>
.father-solutions {
    min-height: 100vh;
    width: 100%;
    position: relative;
    z-index: 2;
}

.content-container {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
}
</style>