<template>
  <v-app>
    <header style="background-color:black; padding:1%">
      <v-img src="@/assets/uloans.png" width="70px"></v-img>
    </header>

    <v-container class="pb-12 mb-12 pl-3 pr-3">
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
