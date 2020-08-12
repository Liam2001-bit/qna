<template>
  <div class="about backgroundQuestions js-fullheight hero-wrap ">
    <meta name="description" content="Editor: Liam Edwards, Uloans intern test">
		<meta name="viewport" content="width=device-width, initial-scale=1,
			shrink-to-fit=no">
    <h1 class="text-center pt-4 pb-4" style="font-size:22px">Uloans Business Intern Competency Test</h1>
    <question-component 
      ref='questionObject' 
      :question='questionForm[parseInt(questionNumber)].question' 
      :options='questionForm[parseInt(questionNumber)].options'
      :error='error'/>

    <v-btn
      class="px-8"
      color="primary"
      rounded
      @click="validate"
    >Next</v-btn>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// import questionComponent from '@/components/questionComponent'

export default {
  props: {
    questionNumber: { required: true, type: Number},
  },
  data: () => ({
    error: null,
  }),
  components: {
    questionComponent: () => import('@/components/questionComponent')
  },
  methods: {
    ...mapMutations(['mAnswerSheet']),
    validate() {
      this.error = null
      
      if (this.$refs.questionObject.answer){
        // 1.  save the users input
        this.mAnswerSheet([this.questionNumber, this.$refs.questionObject.answer])

        // 2.  we want to go to the next question
        if(parseInt(this.questionNumber) < 10){
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
          })
        }
      } 
      else {
        this.error = 'Please select an answer to proceed to the next question.'
      }
    }
  },
  computed: {
    ...mapState(['questionForm'])
  }
}
</script>


<style scoped>
    .backgroundQuestions{
        background-image:
        linear-gradient(to left, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
        url(../assets/credit_card.jpg);
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
        height: 105%;
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
