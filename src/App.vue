<template>
  <v-app>
    
    <head>
      <meta name="description" content="Editor: Liam Edwards. Intership Competency Tests">
    </head>
    <div id="grad2">
    <header style="padding:1%">
      <div>
        <h1 class="d-flex align-top justify-center" style="font-weight: 600; font-size: 30px;">Intern Competency Test</h1>
      </div>
      <img src="@/assets/status.png" width="265px" alt="Status logo"/>
      
      <div class="base-timer" v-if="showTimer">
        <span class="base-timer__label">{{ formattedTimeLeft }} </span>
      </div>    

    </header>
    </div>

    <div class="bg fill-height" :class="background">
      <v-container class="pb-12 mb-16" >
        <router-view/>
      </v-container>
    </div>
    
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import BaseTimer from "./components/BaseTimer";
import { mapState } from 'vuex';

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 180;
const ALERT_THRESHOLD = 100;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 1800;

export default {
  name: 'App',

  components: {
    HelloWorld,
    BaseTimer,
  },

  data() {
    return {
      timePassed: 0,
      timerInterval: null,
      showTimer: false
    };
  },


  computed: {
    ...mapState(['startTime']),
    circleDasharray() {
      return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
    },

    formattedTimeLeft() {
      const timeLeft = this.timeLeft;
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    },

    timeLeft() {
      return TIME_LIMIT - this.timePassed;
    },

    timeFraction() {
      const rawTimeFraction = this.timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    },

    remainingPathColor() {
      const { alert, warning, info } = COLOR_CODES;

      if (this.timeLeft <= alert.threshold) {
        return alert.color;
      } else if (this.timeLeft <= warning.threshold) {
        return warning.color;
      } else {
        return info.color;
      }
    },

    background() {
      return this.$route.name == 'Home' ? 'bg-home' :
        this.$route.name == 'Choice' ? 'bg-choice' : 
        this.$route.name == 'Questions' ? 'bg-questions':
        this.$route.name == 'Result' ? 'bg-result':''
    }
  },

  watch: {
    timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp();
      }
    },
    $route (to, from){
        this.handleTimer()
    }
  },

  mounted() {
    this.startTimer();
  },

  methods: {
    handleTimer() {
      // show or hide timer depending on the current route
      this.showTimer = this.$route.name == 'Questions' ? true : false

      // reset time when the questionNumber is 1
      if (this.$route.params.questionNumber == 1){
        this.timePassed = 0;
      }
    },

    onTimesUp() {
      clearInterval(this.timerInterval);
    },

    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    }
  }
};

</script>


<style>

.bg {
  background-size: cover;
  background-repeat: no-repeat;
}

.bg-home {
  background-image:
        linear-gradient(to left,rgba(0, 0, 0, 0.4),rgba(255, 255, 255, 0.7)),
        url(./assets/chess.jpg);
}
.bg-choice {
  background-image:
        linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(250, 248, 248, 0.5)),
        url(./assets/laptop.jpg);
}
.bg-questions {
  background-image:
        linear-gradient(to left, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.8)),
        url(./assets/mist.jpg); 
}
.bg-result {
  background-image:
        linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)),
        url(./assets/stock.jpg);
}

  #grad2 {
  height: auto;
  width: 100%;  
  animation: pulse 10s ease-in infinite;
}

@keyframes pulse {
  0% {
    background-color: rgb(128, 247, 181);
  }
  12% {
    background-color: rgb(179, 152, 255);
  }
  25% {
    background-color: rgb(130, 143, 255);
  }
  37% {
    background-color: rgb(172, 70, 255);
  }
  50% {
    background-color: rgb(5, 197, 255);
  }

  63% {
    background-color: rgb(61, 216, 255);
  }
  78% {
    background-color: rgb(166, 255, 196);
  }
  100% {
    background-color: rgb(81, 252, 124);
  }  
}
</style>


<style scoped lang="scss">
.base-timer {
  position: inherit;
  width: 90px;
  height: 30px;
    

  &__svg {
    transform: scaleX(-1);
  }

  &__circle {
    fill: none;
    stroke: none;
  }

  &__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
  }

  &__path-remaining {
    stroke-width: 6px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;

    &.green {
      color: rgb(152, 0, 172);
    }

    &.orange {
      color: orange;
    }

    &.red {
      color: red;
    }
  }

  &__label {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 10px;
    right: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  }
}
</style>
