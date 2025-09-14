<template>
    <div class="min-h-screen text-white py-20 bg-transparent">
        <div class="container mx-auto px-8">
            <div class="w-full mx-auto bg-gray-300 rounded-lg p-8">
                <h1 class="text-4xl h-[100px] font-bold my-4 text-center">Formulario de Postulación para transportistas</h1>

                <form @submit.prevent="enviarFormulario" class="space-y-6">
                    
                    <!-- Datos personales -->
                    <div>
                        <h2 class="text-2xl font-semibold mb-4 text-[#F9BD6B]">Datos personales</h2>
                        <div class="flex flex-col gap-4">
                            <div>
                                <label for="nombre" class="block mb-2">Nombre*</label>
                                <input id="nombre" v-model="formulario.nombre" type="text"
                                    class="w-full p-3 bg-gray-700" required>
                            </div>
                            <div>
                                <label for="apellido" class="block mb-2">Apellido*</label>
                                <input id="apellido" v-model="formulario.apellido" type="tel"
                                    class="w-full p-3 bg-gray-700" required>
                            </div>
                            <div>
                                <label for="barrio" class="block mb-2">Barrio/Comuna/Colonia</label>
                                <input id="barrio" v-model="formulario.barrio" type="text"
                                    class="w-full p-3 bg-gray-700" required>
                            </div>
                            <div>
                                <label for="pais" class="block mb-2">Pais*</label>
                                <input id="pais" v-model="formulario.pais" type="text"
                                    class="w-full p-3 bg-gray-700" required>
                            </div>
                                                        <div>
                                <label for="correo" class="block mb-2">Correo*</label>
                                <input id="correo" v-model="formulario.correo" type="email"
                                    class="w-full p-3 bg-gray-700" required>
                            </div>
                                                        <div>
                                <label for="dni" class="block mb-2">Documento Nacional de Identidad/Cédula de Identidad*</label>
                                <input id="dni" v-model="formulario.dni" type="text"
                                    class="w-full p-3 bg-gray-700" required>
                            </div>
                                                        <div>
                                <label for="phone" class="block mb-2">Numero de Telefono*</label>
                                <input id="phone" v-model="formulario.phone" type="text"
                                    class="w-full p-3 bg-gray-700" required>
                            </div>
                                                        <div>
                                <label for="marca" class="block mb-2">Marca de vehículo</label>
                                <input id="marca" v-model="formulario.marca" type="text"
                                    class="w-full p-3 bg-gray-700" required>
                            </div>
                                                        <div>
                                <label for="patente" class="block mb-2">Patente | Placa*</label>
                                <input id="patente" v-model="formulario.patente" type="text"
                                    class="w-full p-3 bg-gray-700" required>
                            </div>
                                                        <div>
                                <label for="registro" class="block mb-2">Pais</label>
                                <input id="registro" v-model="formulario.registro" type="text"
                                    class="w-full p-3 bg-gray-700" required>
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