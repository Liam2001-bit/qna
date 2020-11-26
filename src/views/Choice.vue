<template>
  <div class="backgroundChoice hero-wrap">
    <meta
      name="description"
      content="Editor: Liam Edwards, Uloans intern test"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1,
			shrink-to-fit=no"
    />
    <h1 class="text-center pt-6" style="font-size: 26px">
      Kindly select the test that you will be completing today
    </h1>
    <h2 class="text-center pt-2" style="font-size: 22px">
      Please note that you only have <u>30 minutes</u> to complete each of these
      tests.
    </h2>
    <br />
    <br />
    <v-row>
      <v-col cols="7" class="d-flex flex-column align-center justify-center">
        <img class="logos-small" src="@/assets/uloans-business.png" alt="uloans business logo"
        />
      </v-col>
      <v-col cols="1" class="d-flex flex-column align-center justify-center">
        <v-btn
          color="uloans"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'uloansBusiness',
              questionNumber: 1,
            },
          }"
          >Uloans Business
        </v-btn>
      </v-col>
      <!-- <v-col cols="2" class="d-flex flex-column align-center justify-center">
        <h3>Attempts: 2</h3>
      </v-col>
      <v-col cols="2" class="d-flex flex-column align-center justify-center">
        <h3>DISTINCTION</h3>
      </v-col> -->
    </v-row>
    <br />
    <v-row>
      <v-col cols="7" class="d-flex flex-column align-center justify-center">
        <img class="logos-small" src="@/assets/uloans.png" alt="uloans logo" />
      </v-col>
      <v-col cols="1" class="d-flex flex-column align-center justify-center">
        <v-btn
          color="uloans"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'uloansConsumerLending',
              questionNumber: 1,
            },
          }"
          >Uloans Consumer Lending</v-btn
        >
      </v-col>
      <!-- <v-col cols="2" class="d-flex flex-column align-center justify-center">
        <h3>Attempts: 3</h3>
      </v-col>
      <v-col cols="2" class="d-flex flex-column align-center justify-center">
        <h3>AVERAGE</h3>
      </v-col> -->
      <!-- <v-col cols="3" class="d-flex flex-column align-center justify-center">
        <h3>Attempts: 1 </h3>
      </v-col> -->
    </v-row>
    <br />
    <v-row>
      <v-col cols="7" class="d-flex flex-column align-center justify-center">
        <img class="logos-small" src="@/assets/blogo.png" alt="uloans logo" />
      </v-col>
      <v-col cols="1" class="d-flex flex-column align-center justify-center">
        <v-btn
          color="basira"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'basira',
              questionNumber: 1,
            },
          }"
          style="color: #fff"
          >Basira Group - APS competency test</v-btn
        >
      </v-col>
      <!-- <v-col cols="2" class="d-flex flex-column align-center justify-center">
        <h3>Attempts: 3</h3>
      </v-col>
      <v-col cols="2" class="d-flex flex-column align-center justify-center">
        <h3>AVERAGE</h3>
      </v-col> -->
      <!-- <v-col cols="3" class="d-flex flex-column align-center justify-center">
        <h3>Attempts: 1 </h3>
      </v-col> -->
    </v-row>
    <br />
    <v-row>
      <v-col cols="7" class="d-flex flex-column align-center justify-center">
        <img class="logos-large" src="@/assets/statuscapitalbuildingsociety.png" alt="status capital buidling society logo"
        />
      </v-col>
      <v-col cols="1" class="d-flex flex-column align-center justify-center">
        <v-btn
          color="info"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'StatusBuildingAMLCFTQuiz',
              questionNumber: 1,
            },
          }"
          >SCBS AML/CFT test
        </v-btn>
        <br />
        <v-btn
          color="info"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'eSWATINItrainingModuleBanking',
              questionNumber: 1,
            },
          }"
          >eSWATINI Training Module Banking test</v-btn
        >
        <br />
        <v-btn
          color="info"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'eSWATINISalesQuiz',
              questionNumber: 1,
            },
          }"
          >eSWATINI Sales test
        </v-btn>
        <br />
        <v-btn
          color="info"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'eSWATINIQuiz',
              questionNumber: 1,
            },
          }"
          >eSWATINI test
        </v-btn>
        <br />
      </v-col>
      <!-- <v-col cols="3" class="d-flex flex-column align-center justify-center">
        <h3>Attempts: </h3>
      </v-col> -->
    </v-row>
    <br />
    <v-row>
      <v-col cols="7" class="d-flex flex-column align-center justify-center">
        <img class="logos-large" src="@/assets/fintechLogo.png" alt="fintech campus logo"/>
      </v-col>
      <v-col cols="1" class="d-flex flex-column align-center justify-center">
        <v-btn
          color="fintech"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'ITdeptTest',
              questionNumber: 1,
            },
          }"
          style="color: #fff"
          >IT department Competency test</v-btn
        >
        <br />
        <v-btn
          color="fintech"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'fintechIntern',
              questionNumber: 1,
            },
          }"
          style="color: #fff"
          >fintech Campus Intern Competency test</v-btn
        >
        <br />
        <v-btn
          color="fintech"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'finance',
              questionNumber: 1,
            },
          }"
          style="color: #fff"
          >Finance division Competency test</v-btn
        >
        <br />
        <v-btn
          color="fintech"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'humanResources',
              questionNumber: 1,
            },
          }"
          style="color: #fff"
          >Human resources Competency test</v-btn
        >
        <br />
        <v-btn
          color="fintech"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'legalDivision',
              questionNumber: 1,
            },
          }"
          style="color: #fff"
          >legal division Competency test</v-btn
        >
      </v-col>
    </v-row>
    <br />
    <v-row>
      <v-col cols="7" class="d-flex flex-column align-center justify-center">
        <img class="logos-large" src="@/assets/CryoSave1.png" alt="Cryo Save logo" />
      </v-col>
      <v-col cols="1" class="d-flex flex-column align-center justify-center">
        <v-btn
          color="cryoSave"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'cryoSave',
              questionNumber: 1,
            },
          }"
          >CryoSave intern test</v-btn
        >
      </v-col>
    </v-row>
    <br />
    <v-row>
      <v-col cols="7" class="d-flex flex-column align-center justify-center">
        <img class="logos-large" src="@/assets/SDFF.png" alt="SDFF logo" />
      </v-col>
      <v-col cols="1" class="d-flex flex-column align-center justify-center">
        <v-btn
          color="sdff"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'payrollAfrica',
              questionNumber: 1,
            },
          }"
          >Payroll Lending Africa test</v-btn
        >
      </v-col>
    </v-row>
    <br />
    <v-row>
      <v-col cols="7" class="d-flex flex-column align-center justify-center">
        <img class="logos-large" src="@/assets/credit-store.png" alt="Credit Store logo"/>
      </v-col>
      <v-col cols="1" class="d-flex flex-column align-center justify-center">
        <v-btn
          color="creditStore"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'creditStore',
              questionNumber: 1,
            },
          }"
          >Credit Store Intern test</v-btn
        >
      </v-col>
    </v-row>
    <br />
    <v-row>
      <v-col cols="7" class="d-flex flex-column align-center justify-center">
        <img class="logos-small" src="@/assets/aluma.png" alt="Aluma logo" />
      </v-col>
      <v-col cols="1" class="d-flex flex-column align-center justify-center">
        <v-btn
          color="aluma"
          rounded
          :to="{
            name: 'Questions',
            params: {
              form: 'aluma',
              questionNumber: 1,
            },
          }"
          >Aluma Intern test</v-btn
        >
      </v-col>
    </v-row>
    <br />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data: () => ({}),
  methods: {
    ...mapMutations(["mState"]),
    validate() {
      if (this.$refs.form.validate()) {
        // 1.  save user details to the store
        this.mState(["firstname", this.fd.first]);
        this.mState(["lastname", this.fd.last]);

        // 2.  proceed to start the test
        this.$router.push({
          name: "Questions",
          params: {
            questionNumber: 1,
          },
        });
      }
    },
  },
  computed: {
    ...mapState(["firstname", "lastname"]),
  },
};
</script>

<style scoped>
/* .backgroundChoice{
        background-image:
        linear-gradient(to left, rgba(245, 240, 240, 0.2), rgba(255, 255, 255, 0.5)),
        url(../assets/staircase.jpg);
        background-size: cover;
        position: relative;
    } */

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
  height: 105%;
  margin-left: -1px;
  padding-top: 2%;
}

.hero-wrap.hero-wrap-2 {
  height: 600px;
  position: inherit;
  background-position: top center;
}

.logos-small {
  align-items: center;
  text-align: center;
  margin: 1%;
  width: 12%;
  position: relative;
}

@media only screen and (max-width: 600px) {
  .logos-small {
    align-items: center;
    text-align: center;
    margin: 1%;
    width: 20%;
    position: relative;
  }
}

@media only screen and (max-width: 768px) {
  .logos-small {
    align-items: center;
    text-align: center;
    margin: 1%;
    width: 17%;
    position: relative;
  }
}

@media only screen and (max-width: 1024px) {
  .logos-small {
    align-items: center;
    text-align: center;
    margin: 1%;
    width: 15%;
    position: relative;
  }
}

.logos-large {
  align-items: center;
  text-align: center;
  margin: 1%;
  width: 20%;
  position: relative;
}

@media only screen and (max-width: 600px) {
  .logos-large {
    align-items: center;
    text-align: center;
    margin: 1%;
    width: 27%;
    position: relative;
  }
}

@media only screen and (max-width: 768px) {
  .logos-large {
    align-items: center;
    text-align: center;
    margin: 1%;
    width: 22%;
    position: relative;
  }
}

@media only screen and (max-width: 1024px) {
  .logos-large {
    align-items: center;
    text-align: center;
    margin: 1%;
    width: 20%;
    position: relative;
  }
}
</style>
