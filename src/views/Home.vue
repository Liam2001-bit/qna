<template>
  <div class="home backgroundHome js-fullheight hero-wrap">
    <meta name="description" content="Editor: Liam Edwards, Uloans intern test">
		<meta name="viewport" content="width=device-width, initial-scale=1,
			shrink-to-fit=no">
    <h1 class="text-center pt-6" style="font-size:28px">Welcome to Uloans Business Intern Competency Test</h1>

    <v-row class="py-12">
      <v-col cols='12' md='4' offset-md='4'>

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

           <div class="d-flex justify-center">
            <v-btn
              color="info"
              rounded
              @click="validate"
            >go to test</v-btn>
          </div>
        </v-form>


      </v-col>
    </v-row>
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
    },
    rules: [
      v => !!v || 'Names are required!'
    ]
  }),
  methods: {
    ...mapMutations(['mState']),
    validate(){
      if(this.$refs.form.validate()){
        // 1.  save user details to the store
        this.mState(['firstname', this.fd.first])
        this.mState(['lastname', this.fd.last])

        // 2.  proceed to start the test
        this.$router.push({
          name: 'Questions',
          params: {
            questionNumber: 1
          }
        })
      }
    }
  },
  computed: {
    ...mapState(['firstname', 'lastname'])
  }
}
</script>

<style scoped>
    .backgroundHome{
        background-image:
        linear-gradient(to left, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
        url(../assets/test.jpg);
    }

    .hero-wrap {
        width: 100%;
        height: 700px;
        position: inherit;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top center; }
        @media (max-width: 991.98px) 
    {
    .hero-wrap {
        background-position: center center !important;
     } } 
  .hero-wrap {
        height: 500px; 
    }
  .hero-wrap .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        opacity: 0;
        background: #000000; 
    }
  .hero-wrap.hero-wrap-2 {
        height: 600px;
        position: relative;
        background-position: top center; 
    }
    .hero-wrap.hero-wrap-2  {
        width: 100%;
        opacity: 0;
        background: #000; 
    }
</style>
