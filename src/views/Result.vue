<template>
  <div class="hero-wrap background">
    <h1 class="ml-6 mt-6 mr-6 pt-9" style="color: #fff; font-size: 25px">
      Well done on completing your internship exam
    </h1>
    <h2 class="ml-6 mt-4" style="color: #fff">View your results below:</h2>
    <br />

    <!-- <div v-if="percentage < 70" style="color: #fff">You Failed</div>
    <div v-else-if="percentage > 90" style="color: #fff">
      You did exceptional; Passed with distinction
    </div>
    <div v-if="percentage > 80" style="color: #fff">You did amazing; Passed great</div>
    <div v-else-if="percentage > 70">You Passed</div> -->

    <div v-if="score <= 7">
      <h2 class="ml-6 mt-6 scoreReveal" style="color: #fff">
        Sorry, you <b style="color: #ff0000">FAILED</b>, please redo the exam.
      </h2>
      <div class="scoreReveal">
        <v-btn class="px-8 ml-8 mt-2" color="error" rounded @click="desicion"
          >Try Again
        </v-btn>
      </div>
    </div>

    <div v-else class="ml-6 mt-6 scoreReveal">
      <h2 style="color: #fff">
        Congratulations, You <b style="color: #00ff25">PASSED</b>
      </h2>
    </div>
    <br />
    <h3 class="ml-6 mt-3 scoreReveal" style="color: #fff; font-size: 24px">
      <u>Score:</u> {{ percentage.toFixed(2) }}%
    </h3>

    <v-btn icon color="red" :to="{ name: 'Home' }" x-large class="home-btn">
      <v-icon x-large>mdi-home</v-icon>
    </v-btn>

    <br />
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: {
    form: { required: true, type: String },
  },
  data: () => ({
    score: 0,
    percentage: 0,
  }),
  mounted() {
    // get the amount of questions for this tests
    let amountOfQuestions = this.questionCount[this.$route.params.form];

    // determine how many questions did the client get right
    let score = 0;
    for (const [key, value] of Object.entries(this.answerSheet)) {
      let intKey = parseInt(key);

      if (intKey <= amountOfQuestions) {
        let answer = this.questionForms[this.form][key].answer;
        if (value == answer) {
          score += 1;
        }
      }
    }

    this.score = score;
    this.percentage = (score / amountOfQuestions) * 100;

    this.saveDateToDb();
  },
  computed: {
    ...mapState([
      "questionForms",
      "answerSheet",
      "questionCount",
      "firstname",
      "lastname",
      "email",
    ]),
    // percentage: {
    //   get: function () {
    //     return +(this.score * 100);
    //   },
    // },
  },
  methods: {
    saveDateToDb() {
      const axios = require("axios");

      let data = {
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        testName: this.$route.params.form,
        score: this.percentage,
      };

      let config = {
        method: "post",
        url: `${process.env.VUE_APP_API_BACKEND}intern/tests`,
        headers: {
          token:
            "erkjhg39847fyui3hf943yf83jfeesdhf98324f923iwejfij9%^#$^%$^%%$&%&*^$&$HTF%R&^HT&^%RG*^Rhrh9%^BR954rv8b%Rrv756",
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((r) => {
          alert("Saved data! Thank you");
        })
        .catch((e) => {
          alert("Some error occurred, data not saved");
        });
    },
    desicion() {
      const passRate = {
        uloansBusiness: {
          minScore: 7,
          passedOk: 8,
          passedGood: 9,
          passedGreat: 10,
        },
        uloansConsumerLending: {
          minScore: 11,
          passedOk: 12,
          passedGood: 13,
          passedGreat: 14,
        },
        fintechIntern: {
          minScore: 7,
          passedOk: 8,
          passedGood: 9,
          passedGreat: 10,
        },
        ITdeptTest: {
          minScore: 7,
          passedOk: 8,
          passedGood: 9,
          passedGreat: 10,
        },
        eSWATINItrainingModuleBanking: {
          minScore: 16,
          passedOk: 17,
          passedGood: 18,
          passedGreat: 19,
        },
        eSWATINISalesQuiz: {
          minScore: 7,
          passedOk: 8,
          passedGood: 9,
          passedGreat: 10,
        },
        eSWATINIQuiz: {
          minScore: 7,
          passedOk: 8,
          passedGood: 9,
          passedGreat: 10,
        },
        StatusBuildingAMLCFTQuiz: {
          minScore: 7,
          passedOk: 8,
          passedGood: 9,
          passedGreat: 10,
        },
        cryoSave: {
          minScore: 5,
          passedOk: 6,
          passedGood: 7,
          passedGreat: 8,
        },
        payrollAfrica: {
          minScore: 18,
          passedOk: 20,
          passedGood: 21,
          passedGreat: 22,
        },
        creditStore: {
          minScore: 13,
          passedOk: 15,
          passedGood: 16,
          passedGreat: 17,
        },
        aluma: {
          minScore: 7,
          passedOk: 8,
          passedGood: 9,
          passedGreat: 10,
        },
        basira: {
          minScore: 7,
          passedOk: 8,
          passedGood: 9,
          passedGreat: 10,
        },
      };

      if (this.percentage < 70) {
        this.$router.push({
          name: "Questions",
          params: {
            form: this.$route.params.form,
            questionNumber: 1,
          },
        });
      } else if (this.percentage >= 100) {
        alert("You passed with an exceptional achievement of 100%!");
      } else if (this.percentage >= 90) {
        alert("You passed with distinction of 90%!");
      } else if (this.percentage >= 80) {
        alert("You passed with an average of 80%!");
      }
    },
  },
};
</script>

<style scoped>
/* .background{
        background-image:
        linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url(../assets/stock.jpg);
    } */
.home-btn {
  position: absolute;
  left: 20px;
  bottom: 20px;
}
.hero-wrap {
  width: 100%;
  height: 900px;
  position: inherit;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
}
@media (max-width: 991.98px) {
  .hero-wrap {
    background-position: center center !important;
  }
}
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
  content: "";
  opacity: 0;
  background: #000000;
}
.hero-wrap.hero-wrap-2 {
  height: 600px;
  position: relative;
  background-position: top center;
}
.hero-wrap.hero-wrap-2 {
  width: 100%;
  opacity: 0;
  background: #000;
}

.scoreReveal {
  position: relative;
  animation: mymove 3s;
}

@keyframes mymove {
  from {
    left: 1200px;
  }
  to {
    left: 0px;
  }
}
</style>