<template>
  <div class="about backgroundQuestions hero-wrap ">
    <meta name="description" content="Editor: Liam Edwards, Uloans intern test">
		<meta name="viewport" content="width=device-width, initial-scale=1,
			shrink-to-fit=no">
    <h1 class="text-center pt-4" style="font-size:22px">Please select the correct answer</h1>
    <h2 class="text-center pt-2 pb-12" style="font-size: 20px">Bare in mind that you only have <u>30 minutes</u> to complete this test</h2>
    <br>
    <question-component 
      ref='questionObject' 
      :question='questionForms[form][parseInt(questionNumber)].question' 
      :options='questionForms[form][parseInt(questionNumber)].options'
      :error='error'/>
    <br>
    <br>
    <v-btn
      class="px-8 ml-4"
      color="primary"
      rounded
      @click="validate"
    >Next</v-btn>
    <br>
    <br>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// import questionComponent from '@/components/questionComponent'

export default {
  props: {
    form: {required: true, type: String},
    questionNumber: { required: true, type: Number},
  },
  data: () => ({
    error: null,
  }),
  components: {
    questionComponent: () => import('@/components/questionComponent')
  },
  mounted() {
    this.mState(['startTime', true])
  },
  methods: {
    ...mapMutations(['mAnswerSheet']),
    ...mapMutations(['mState']),
    validate() {
      this.error = null
      
      if (this.$refs.questionObject.answer){
        // 1.  save the users input
        this.mAnswerSheet([this.questionNumber, this.$refs.questionObject.answer])

        // 2.  we want to go to the next question
        if(parseInt(this.questionNumber) < this.questionCount[this.$route.params.form]){
          this.$router.push({
            name: 'Questions',
            params: {
              questionNumber: parseInt(this.questionNumber) + 1
            }
          })
        } else {
          // go to results page
          this.$router.push({
            name: 'Result', 
            params: {
              form: this.$route.params.form
            }          
          })
        }
      } 
      else {
        this.error = 'Please select an answer to proceed to the next question.'
      }
    }
  },
  computed: {
    ...mapState(['questionForms', 'questionCount'])
  }
}
</script>


<style scoped>    
    .hero-wrap {
        width: 110%;
        height: 900px;
        position: inherit;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center; }
        @media (max-width: 991.98px) 
    {
    .hero-wrap {
        background-position: center center !important;
     } } 
    .hero-wrap {
        height: 200%;
        width: 100%;
        padding-top: 2%;
        padding-left: 3%;
    }
  
  .hero-wrap.hero-wrap-2 {
        height: 900px;
        position: relative;
        background-position: top center; 
    }
    .hero-wrap.hero-wrap-2  {
        width: 100%;
        opacity: 0;
    }
</style>
