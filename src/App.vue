<template>
  <v-app>
    
    <head>
      <meta name="description" content="Editor: Liam Edwards. Intership tests">
    </head>
    <div id="grad2">
    <header style="padding:2%">
      <v-img src="@/assets/status.png" width="265px"></v-img>
      <div class="base-timer">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g class="base-timer__circle">            
            <path
              :stroke-dasharray="circleDasharray"
              class="base-timer__path-remaining"
              :class="remainingPathColor"
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
              "
            ></path>
          </g>
        </svg>
        <span class="base-timer__label">{{ formattedTimeLeft }} </span>
      </div>
      
    </header>
    </div>

    <div class="bg" :class="background">
      <v-container class="pb-12 mb-16" >
        <router-view/>
      </v-container>
    </div>
    
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import BaseTimer from "./components/BaseTimer";

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
      timerInterval: null
    };
  },


  computed: {
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
    }
  },

  mounted() {
    this.startTimer();
  },

  methods: {
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
        linear-gradient(to left, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1)),
        url(./assets/chess.jpg);
}
.bg-choice {
  background-image:
        linear-gradient(to left, rgba(245, 240, 240, 0.2), rgba(255, 255, 255, 0.5)),
        url(./assets/staircase.jpg);
}
.bg-questions {
  background-image:
        linear-gradient(to left, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
        url(./assets/tent.jpg);
}
.bg-result {
  background-image:
        linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
        url(./assets/stock.jpg);
}

  #grad2 {
  height: auto;
  width: 100%;
  
  animation: pulse 10s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    background-color: rgb(231, 251, 255);
  }
  12% {
    background-color: rgb(190, 226, 255);
  }
  25% {
    background-color: rgb(130, 224, 255);
  }
  37% {
    background-color: rgb(70, 172, 255);
  }
  50% {
    background-color: rgb(5, 192, 255);
  }

  63% {
    background-color: rgb(61, 207, 255);
  }
  78% {
    background-color: rgb(166, 204, 255);
  }
  100% {
    background-color: rgb(244, 251, 255);
  }  
}
</style>


<style scoped lang="scss">
.base-timer {
  position: inherit;
  width: 90px;
  height: 90px;  

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
    top: 50px;
    right: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  }
}
</style>
