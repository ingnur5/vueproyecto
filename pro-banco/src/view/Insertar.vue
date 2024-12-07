<template>
    <Miheader></Miheader>
   <fieldset>
    <label for="">Registro de clientes</label>

    <form @submit.prevent="insertarcliente">
        <div>
            <label for="documento">Documento</label>
            <input type="text" id="documento" v-model="frm.documento" required>
        </div>
        <div>
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" v-model="frm.nombre">
        </div>

        <div>
            <label for="correo"></label>
            <input type="email" id="correo" v-model="frm.correo">
        </div>
         
        <div>
           <button type="submit">Registrar</button>
        </div>
    </form>
     <div>{{mensaje}}</div>
   </fieldset>
 
</template>



<script setup>
import Swal from 'sweetalert2';
import Miheader from '@/components/Miheader.vue';
import { ref } from 'vue';
const frm=ref({
  documento:"",
  nombre:"",
  correo:""  
})

const mensaje=ref("")
const insertarcliente=async()=>{
    try {
        
      const respuest= await fetch("http://localhost:8080/datos",
        {
           method:"POST",
           headers:{
            "Content-Type":"application/json",
            }, 
            body:JSON.stringify(frm.value)
        })
        console.log(respuest)
        if(!respuest.ok){
            throw new Error("No se registraron lo datos")
        }
        Swal.fire({
            title: "Registro Ok",
            text: "Regitro cliente ok",
            icon: "success",
            confirmButtomText:"Aceptar"
            });

        mensaje.value="Registro exitoso"
        frm.value={documento:"",nombre:"",correo:""}
    } catch (error) {
        mensaje.value=error.mensaje
        Swal.fire({
            title: "Error",
            text: "Error al regitrar",
            icon: "error",
            confirmButtomText:"Aceptar"
            });
    }
}

</script>


<style>
fieldset {
    border: 0;
  margin-top: 50px;
  border-radius: 5px;
  padding: 20px;
  max-width: 500px;
  margin: auto;
  background-color: #FFFFFFFF; /* Azul muy claro para el fondo */
  width: 70%;
  padding: 30px;
  height: 400px;
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.5), 
                0 10px 30px rgba(0, 0, 0, 0.3), 
                0 5px 15px rgba(0, 0, 0, 0.2);
 transition: transform 0.3s ease, box-shadow 0.3s ease;
}




legend {
  color: #070130FF; /* Azul para el texto del legend */
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 0 10px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

div {
  display: flex;
  flex-direction: column;
}

label {
  color: #004aad; /* Azul fuerte */
  font-weight: bold;
  margin-bottom: 5px;
}

input {
 
  border:1 solid green;
  padding: 8px;
  font-size: 1rem;
  margin-bottom: 20px;
  outline: none;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #004aad; /* Azul más oscuro al enfocar */
}

button {
  background-color: #00002CFF; /* Azul para el botón */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0BE6F6FF; /* Azul más oscuro al pasar el mouse */
}

div[v-if] {
  margin-top: 10px;
  color: #004aad; /* Azul fuerte para el mensaje */
  font-weight: bold;
  text-align: center;
}



</style>