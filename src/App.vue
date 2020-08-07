<template>
  <v-app>
    <header style="background-color:black; padding-left:5%; padding:1%;">
      <v-img src="@/assets/uloans.png" width="5%"></v-img>
    </header>

    <v-container>
      <router-view/>
    </v-container>

    <v-footer 
      color="uloans"     
      absolute
      class="font-weight-medium">
      <v-col
        class="text-center"
        cols="12">
        {{ new Date().getFullYear() }} — <strong>Uloans Business Intern Competency Test </strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
