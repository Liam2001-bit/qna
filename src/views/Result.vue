<template>
    <div>
        <h1>
            heeeyyyy
        </h1>
    </div>
</template>

<script>

import { mapState } from 'vuex'


export default {
    mounted(){
        let qf = this.questionForm
        let as = this.answerSheet
        let score = 0
    },


computed: {
    ...mapState(['questionForm', 'answerSheet'])
  }

}
</script>