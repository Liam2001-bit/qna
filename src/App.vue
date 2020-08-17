<template>
  <v-app>
    
    <head>
      <meta name="description" content="Editor: Liam Edwards. Intership tests for each department">
    </head>
    <div id="grad2">
    <header style="padding:2%">
      <v-img src="@/assets/status.png" width="275px"></v-img>
      
    </header>
    </div>

    <v-container class="pb-12 mb-12 pl-3 pr-3">
      <router-view/>
    </v-container>
    
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import BaseTimer from "./components/BaseTimer";

export default {
  name: 'App',

  components: {
    HelloWorld,
    BaseTimer,
  },

  data: () => ({
    //
  }),
};
</script>


<style>
/* body {
  background-color: #fff;
} */

/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
} */

  #grad2 {
  height: auto;
  width: 100%;
  
  animation: pulse 5s ease-in infinite;
}

@keyframes pulse {
  0% {
    background-color: lightskyblue;
  }
  25% {
    background-color: lightblue;
  }
  50% {
    background-color: lightsalmon;
  }  
  75% {
    background-color: lightgreen;
  }
  100% {
    background-color: lightskyblue;
  }  
}
</style>
