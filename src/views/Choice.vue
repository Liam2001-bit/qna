<template>
  <div class="backgroundChoice js-fullheight hero-wrap " >
    <meta name="description" content="Editor: Liam Edwards, Uloans intern test">
		<meta name="viewport" content="width=device-width, initial-scale=1,
			shrink-to-fit=no">
    <h1 class="text-center pt-6" style="font-size:26px">Kindly select the test that you will be completing today</h1>
    <h2 class="text-center pt-2" style="font-size:22px">Please note that you only have <u>30 minutes</u> to complete any of these tests.</h2>
    <br>

    <v-row>
      <v-col cols="4" class="d-flex flex-column align-center justify-center">
        <v-img src="@/assets/uloans-business.png" width="100px"></v-img>   
      </v-col>
      <v-col cols="3" class="d-flex flex-column align-center justify-center">
        <v-btn 
        color="uloans"
            rounded
            :to="{
                name: 'Questions',
                params: {
                    form: 'uloansBusiness',
                    questionNumber: 1
                }
            }">Uloans Buisness Intern</v-btn>
      </v-col>
      <v-col cols="3" class="d-flex flex-column align-center justify-center">
        <h3>Attempts: 2</h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4" class="d-flex flex-column align-center justify-center">
        <v-img src="@/assets/uloans.png" width="100px"></v-img>   
      </v-col>
      <v-col cols="3" class="d-flex flex-column align-center justify-center">
        <v-btn 
        color="uloans"
            rounded
            :to="{
                name: 'Questions',
                params: {
                    form: 'uloansConsumerLending',
                    questionNumber: 1
                }
            }">Uloans Consumer Lending</v-btn>
      </v-col>
      <v-col cols="3" class="d-flex flex-column align-center justify-center">
        <h3>Attempts: 1 </h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4" class="d-flex flex-column align-center justify-center">
        <v-img src="@/assets/blogo.png" width="110px"></v-img>   
      </v-col>
      <v-col cols="3" class="d-flex flex-column align-center justify-center">
        <v-btn 
        color="basira"
            rounded            
            :to="{
                name: 'Questions',
                params: {
                    form: '',
                    questionNumber: 1
                }
            }">Basira Group Intern</v-btn>
      </v-col>
      <v-col cols="3" class="d-flex flex-column align-center justify-center">
        <h3>Attempts: </h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4" class="d-flex flex-column align-center justify-center">
        <v-img src="@/assets/fintechLogo.png" width="185px"></v-img>   
      </v-col>
      <v-col cols="3" class="d-flex flex-column align-center justify-center">
        <v-btn 
        color="fintech"
            rounded
            :to="{
                name: 'Questions',
                params: {
                    form: 'ITdeptTest',
                    questionNumber: 1
                }
            }">IT department test</v-btn>
      </v-col>
      <v-col cols="3" class="d-flex flex-column align-center justify-center">
        <h3>Attempts: 4</h3>
      </v-col>
      <!-- <v-col cols="3" class="d-flex flex-column align-center justify-center">
        <h3>Passed: 1</h3>
      </v-col> -->
      
    </v-row>

    <!-- <v-row>
        <v-col class="d-flex flex-column justify center"
        v-for="n in 1"
        :key="n"
        cols="12"
        sm="8"
      >
      <v-img src="@/assets/uloans-business.png" width="100px"></v-img>      
        <div class="d-flex flex-row justify-center ">
            <v-btn
            color="uloans"
            rounded
            :to="{
                name: 'Questions',
                params: {
                    form: 'uloansBusiness',
                    questionNumber: 1
                }
            }"                          
            ></v-btn>
        </div>        
        </v-col>
    </v-row>
    <v-row no-gutters class="py-2 ml-6">
        <v-col
        v-for="n in 1"
        :key="n"
        cols="12"
        sm="8"
      >
      <v-img src="@/assets/uloans.png" width="100px"></v-img>      
        <div class="d-flex justify-center">
            <v-btn
            color="primary"
            rounded
            :to="{
                name: ':Questions', 
                params: {
                    form: 'uloansConsumerLending',
                    questionNumber: 1
                }
            }"                            
            >Uloans Consumer Lending</v-btn>
        </div>        
        </v-col>
    </v-row>
    <v-row no-gutters class="py-2 ml-6">
        <v-col
        v-for="n in 1"
        :key="n"
        cols="12"
        sm="8"
      >
      <v-img src="@/assets/blogo.png" width="100px"></v-img>      
        <div class="d-flex justify-center">
            <v-btn
            color="info"
            rounded
            :to="{name: ':Questions', params: {questionNumber: 1}}"                            
            >Basira Buisness Intern</v-btn>
        </div>
        <div class="d-flex justify-center pt-2">
            <v-btn
              color="info"
              rounded
              :to="{name: ':Questions', params: {questionNumber: 1}}"                            
            >Basira Consumer Lending</v-btn>
        </div>
        <v-img src="@/assets/fintechLogo.png" width="150px"></v-img>      
        <div class="d-flex justify-center">
            <v-btn
            color="primary"
            rounded
            :to="{
                name: ':Questions', 
                params: {
                    form: 'uloansConsumerLending',
                    questionNumber: 1
                }
            }"                            
            >IT department test</v-btn>
        </div>
        </v-col>
    </v-row> -->
    
  </div> 
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data: () => ({
    
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
    .backgroundChoice{
        background-image:
        linear-gradient(to left, rgba(245, 240, 240, 0.2), rgba(255, 255, 255, 0.5)),
        url(../assets/staircase.jpg);
        background-size: cover;
        position: relative;
    }

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
        background-position: center center !important;
     } } 
  .hero-wrap {
        height: 200%;
        margin-left: -1px;
        padding-top: 2%;
    }
  
  .hero-wrap.hero-wrap-2 {
        height: 600px;
        position: inherit;
        background-position: top center; 
    }

  
    
</style>
