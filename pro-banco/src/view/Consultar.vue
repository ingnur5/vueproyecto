<template>
<Miheader></Miheader>
<div v-if="cargarDatos">Cargarndo datos</div>

<h1>Consultar cliente</h1>
<table>
 <tr>
    <th>Documento</th>
    <th>Nombre</th>
    <th>Correo</th>
 </tr>

 <tr v-for="(item, index) in data" :key="index">
    <td  >{{ item.documento }}</td>
    <td>{{ item.nombre }}</td>
    <td>{{ item.correo }}</td>
 </tr>


</table>


</template>


<script setup>
 import Miheader from '@/components/Miheader.vue';
 import { ref, onMounted } from 'vue';

 const data=ref([])
 const cargarDatos=ref(true)
 const mensaje=ref(null)

 const consultarDatosCliente=async()=>{
     try {

        const respuesta= await fetch("http://localhost:8080/datos")
        if(!respuesta.ok){
            throw new Error("Datos no se consultaron")

        }

        data.value= await respuesta.json()
        
     } catch (error) {
        mensaje.value=error.mensaje

     }finally{
        cargarDatos.value=false
     }
    


 }

onMounted(()=>{
     consultarDatosCliente()

    })



</script>



<style>
 h1{

color: #00177e;
margin: auto;
font-size: 25px;
font-weight: bold;
margin-top: 20px;
margin-bottom: 20px;
width: 50%;
text-align: center;
}
table {
border-collapse: collapse;
width: 50%;
margin: auto;
}

th, td {
border: 2px solid #091258;
padding: 8px;
text-align: left;
}

th {
background-color: #00177e;
font-weight: bold;
}




</style>