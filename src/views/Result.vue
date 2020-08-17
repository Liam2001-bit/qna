<template>  
    <div class=" hero-wrap js-fullheight background">
        <meta name="description" content="Editor: Liam Edwards, Uloans intern test">
		<meta name="viewport" content="width=device-width, initial-scale=1,
			shrink-to-fit=no">
        <h1 class="ml-6 mt-6 mr-6 pt-9" style="color:#fff; font-size:25px">
            Well done on completing your internship exam</h1>
        <h2 class="ml-6 mt-4" style="color:#fff">View your results below:</h2>
        <br>
        
        <div v-if="score < 8">
            <h2  class="ml-6 mt-6 scoreReveal" style="color:#fff">
        Sorry, You <b style="color:#FF0000">FAILED</b></h2>
        <div class="scoreReveal">
            <v-btn
                class="px-8 ml-8 mt-2"
                color="error"                       
                rounded
                @click="desicion"
            >Try Again
            </v-btn>
        </div>
        </div>
        <div v-else class="ml-6 mt-6 scoreReveal">
            <h2  style="color:#fff">Congratulations, You <b style="color: #00FF25">PASSED</b></h2>
        </div>
            <br>            
            <h3 class="ml-6 mt-3 scoreReveal" style="color:#fff; font-size: 24px"><u>Score:</u> {{score}}/10</h3>
        
            <br>        
    </div>
</template>
<script>
import { mapState } from 'vuex'


export default {
    props: {
        form:{required:true, type: String}
    },
    data: () => ({
        score: 0,
    }),
    mounted(){
        let score = 0

        for (const [key, value] of Object.entries(this.answerSheet)) {
            console.log(`${key}: ${value}`);

            if(value == this.questionForms[this.form][key]["answer"]){
                this.score += 1
            }
        }
    },
    computed: {
        ...mapState(['questionForms', 'answerSheet']),
        percentage: {
            get: function(){
                return +(this.score * 100)
            }
        }
    },
    methods: {
        desicion() {
            // if the user passed display go to route
            // this.$router.push({
            //     name: '',
            //     params: {

            //     }
            // })
        }
    }
}

</script>

<style scoped>
    .background{
        background-image:
        linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url(../assets/stock.jpg);
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
        padding: 3%;
        
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

    .scoreReveal{
      position: relative;
      animation: mymove 3s;
    }

    @keyframes mymove {
      from {left: 1200px;}
      to {left: 0px;}
    }
</style>