<template>
  <div>
    <h3>{{question}}</h3>
    <v-radio-group v-model="answer">
      <v-radio
        v-for="(value, key, index) in options"
        :key="index"
        :label="value"
        :value="key"
      ></v-radio>
    </v-radio-group>

    <p class="caption red--text" v-if="error">{{error}}</p>
  </div>
</template>

<script>
export default {
  props: {
    question: { required: true, type: String },
    options: { required: true, type: Object },
    error: { required: false, type: String, default: null}
  },
  data: () => ({
    answer: null,
  }),
  watch:{
    $route (to, from){
      this.answer = null;
    }
  } 
}
</script>