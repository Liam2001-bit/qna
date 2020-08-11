<template>
    <div>
        <h1>
            Heyy you stupid ;)  Redo it!!!
        </h1>
        <h2>Almost there</h2>
        
        <!-- <div>
            <ul>
                <li v-for="index in 10" :key="index">
                    {{ answerSheet[index].questionNumber }} - {{ questionForm[index].questionNumber }}
                </li>
            </ul>
        </div> -->
    </div>
</template>

<script>

import { mapState } from 'vuex'


export default {
    mounted(){
        let qF = this.questionForm
        let aS = this.answerSheet
        let score = 0
    },

    data: () => ({
    score: null,
  }),


computed: {
    ...mapState(['questionForm', 'answerSheet'])
  }

}
</script>