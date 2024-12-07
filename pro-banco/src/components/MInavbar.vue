<template>
   <nav>
    <ul>
       <li><router-link to="/">Home</router-link></li>
       <li><router-link to="/insertar">Insertar</router-link></li>
       <li><router-link to="/consultar">Consultar</router-link></li>
       <li><router-link to="/actualizar">Actualizar</router-link></li>
       <li><router-link to="/eliminar">Eliminar</router-link></li>
    </ul>
   </nav>

</template>


<style scoped>
nav ul {
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
}
nav ul li a {
  text-decoration: none;
  color: rgb(253, 253, 255);
}
nav ul li a:hover {
  text-decoration: underline;
  background-color: rgb(4, 196, 255);
  padding: 20px;
}

nav{
    background-color:0;
    margin-left: auto;
    width: 50%;
    display: flex;
    align-items: center;
}
ul{
    background-color: 0;
}
li{
    
    display: inline;
    margin: 10px;
  
}
a{
  background-color: rgba(255,255,255,0.5);
  padding: 20px;
  border-radius: 5px;
}


</style>