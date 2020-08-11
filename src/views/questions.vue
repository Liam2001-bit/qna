<template>
  <div class="about">
    <h1 class="text-center pt-6">Uloans Business Intern Competency Test</h1>

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