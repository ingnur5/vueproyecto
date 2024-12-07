<template>
<Miheader></Miheader>
<form @submit.prevent="buscarCliente">
<label for="">Documento</label>
<input type="text" v-model="documento" required placeholder="Documento">
<button type="submit">Buscar</button>
</form>

<div>{{ mensaje }}</div>
<section v-if="cliente">
    <div>Datos del cliente</div>
    <form @submit.prevent="actualizarCliente">
    <div>
    <label for="">Documento</label> 
    <input type="text" v-model="cliente.documento" disabled>
    </div> 
    <div>
    <label for="">Nombre</label>
    <input type="text" v-model="cliente.nombre">
    </div>
    <div>
    <label for="">Correo</label> 
    <input type="text" v-model="cliente.correo">
    </div>

    <button type=" submit">Actuzalizar</button>

    </form>


</section>




</template>


<script setup>
import Miheader from '@/components/Miheader.vue';
import { ref } from 'vue';
import Swal from 'sweetalert2';
const documento=ref("")
const cliente=ref(null)
const mensaje=ref(null)
const buscarCliente=async()=>{
  alert("consultado")
    try {
       const datosCliente= await fetch(`http://localhost:8080/datos/cliente/${documento.value}`,{
        method:"GET"
       })
    console.log(datosCliente)
    if(!datosCliente.ok){
        throw new Error("Datos no se consultaro")
    }
    cliente.value=await datosCliente.json()
    mensaje.value="Consulta ok"
      } catch (error) {
        mensaje.value=error.mensaje
        
       }

}



const actualizarCliente=async()=>{
    alert("Actualizar")
    try {
        
  
    const datosCliente= await fetch(`http://localhost:8080/datos/actualizar/${documento.value}`,
    {
        method:"PUT",
           headers:{
            "Content-Type":"application/json",
            }, 
            body:JSON.stringify(cliente.value)
    })

    console.log(datosCliente)

    if(!datosCliente.ok){
        throw new Error("Eror al actualizar los datos")
    }
    Swal.fire({
            title: "Datos actualizados Ok",
            text: "Se actualizaron los datos del cliente",
            icon: "success",
            confirmButtomText:"Aceptar"
            });

        mensaje.value="Actualizacion exitosa"
        cliente.value={documento:"",nombre:"",correo:""}

    } catch (error) {
        Swal.fire({
            title: "Error",
            text: "Error al actualizar",
            icon: "error",
            confirmButtomText:"Aceptar"
            });

        
    }

}



</script>