<template>
  <div class="home">

    <h1 class="text-center pt-6">Welcome to Uloans Business Intern Competency Test</h1>

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
