<template>
   <header>
     <div class="logotitulo">
        <h1>Banco Tech</h1>
       
        <img src="../../public/imagenes/Android_Robot_social_media_corporate_logo_icon-icons.com_67679.png" alt="Android">
        </div>
        <MInavbar></MInavbar>
       
        
    </header>


</template>

<script setup>
import MInavbar from './MInavbar.vue';

</script>


<style>
header{
  background:rgb(0, 0, 29) ;
   display: flex;
   height: 200px;

}



.logotitulo h1{
    background-color: 0;
    display: flex;
    align-items: center;
    color: #0ab5f8;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    width: 50%;
}
.logotitulo{
  display: flex;  
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  background: 0;
  width: 20%;
}
.logotitulo img{
    background-size: contain;
    width: 50px;
    height: 50px;
    margin-right: auto;

   
}






#contenedor1{
    background-color: 0;
    display: flex;
    flex-wrap: nowrap;

}

.art{
    background-color: rgb(6, 124, 228);
    height: 100%;
    width: 40%;
    margin: 10px;
}



#contenedor2{
    background: red;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
}

.div{

    height: 200px;
    background: blue;
    margin: 2px;
    width: 30% ;
    
}

</style>