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
<label for="">Documento</label> <div>{{ cliente.documento }}</div>
<label for="">Nombre</label> <div>{{ cliente.nombre }}</div>
<label for="">Correo</label> <div>{{ cliente.correo }}</div>

<button @click="elimnarCliente">Eliminar</button>
</section>


</template>


<script setup>
import Miheader from '@/components/Miheader.vue';
import { ref } from 'vue';
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


const elimnarCliente=async()=>{
 alert("Eliminar")

 try {

  const elimnarRespeuste= await fetch(`http://localhost:8080/datos/eliminar/${documento.value}`,{
    method:"DELETE"
  })

  if(!elimnarRespeuste.ok){
    throw new Error("Error al eliminar cliente")
  }
  mensaje.value="Cliente eliminado ok"
  
 } catch (error) {
  mensaje.value=error.mensaje
  
 }



}



</script>