<template>
  <div class="home">
    <h1 style="padding-top:1%" align="center">Welcome to Uloans Business Intern Competency Test</h1>

<!-- enter names -->
    <v-form>
      <v-container>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="first"
            label="First Name"
            outlined
            shaped
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="last"
            label="Last Name"
            outlined
            shaped
          ></v-text-field>
        </v-col>
      </v-container>
    </v-form>
    <!-- select test date -->
    <v-row justify="center">
      <v-date-picker v-model="picker"></v-date-picker>
    </v-row>
    <br>
    <br>
    <div class="d-flex justify-center">
      <v-btn
        color="primary"
        rounded
        :to="{name: 'Questions'}"
      >go to test</v-btn>
    </div>
    <v-card height="150">
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
  </v-card>
  </div> 
</template>

<script>
export default {
  methods: {
    
  }
}
</script>
