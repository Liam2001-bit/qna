<template>
  <div class="backgroundHome hero-wrap">
    <meta name="description" content="Editor: Liam Edwards, Intern Competency Test">
		<meta name="viewport" content="width=device-width, initial-scale=1,
			shrink-to-fit=no">
    <div id="grad1">
    <v-card
      width="100%"
      color="transparent"
      class="mt-10"
      >

      <v-row 
        class="py-12"
        align="center"
        justify="center"
        >

        <h1 class="pt-6 pl-4 pr-4" style="font-size:28px" >Welcome, please fill in your information below to proceed</h1>

        <v-col 
          cols='12'         
          md="5" 
          offset-md="0"
          >

          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="fd.first"
              label="First Name"
              outlined
              shaped
              :rules='rules'
            ></v-text-field>

            <v-text-field
              v-model="fd.last"
              label="Last Name"
              outlined
              shaped
              :rules='rules'
            ></v-text-field>

            <v-text-field
              type='email'
              v-model="fd.email"
              label="Email"
              outlined
              shaped
              :rules='rules'
            ></v-text-field>

            <div class="d-flex align-center justify-center">
              <v-btn
                color="info"
                rounded
                @click="validate"
              >proceed</v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
    </div>
  </div> 
</template>

<script>
import { mapMutations, mapState } from 'vuex'


export default {
  data: () => ({
    valid: true,
    fd: {
      first: null,
      last: null,
      email: null,
    },
    rules: [
      v => !!v || 'This field is required!'
    ]
  }),
  methods: {
    ...mapMutations(['mState']),
    validate(){
      if(this.$refs.form.validate()){
        // 1.  save user details to the store
        this.mState(['firstname', this.fd.first])
        this.mState(['lastname', this.fd.last])
        this.mState(['email', this.fd.email])

        // 2.  proceed to start the test
        this.$router.push({
          name: 'Choice',          
        })
      }
    }
  },
  computed: {
    ...mapState(['firstname', 'lastname', 'emaill'])
  }
}
</script>

<style scoped>
    /* .backgroundHome{
        background-image:
        linear-gradient(to left, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1)),
        url(../assets/chess.jpg);
    } */

    .hero-wrap {
        width: 100%;
        height: 900px;
        position: inherit;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center; }
        @media (max-width: 991.98px) 
    {
    .hero-wrap {
        background-position: top center !important;
     } } 
  .hero-wrap {        
        padding-top: 3%;
    }
  
  .hero-wrap.hero-wrap-2 {
        height: 600px;
        position: inherit;
        background-position: top center; 
    }

  #grad1 {
  height: auto;
  background-color: transparent; 
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) , rgba(255, 255, 255, 0.5)); 
}

</style>
