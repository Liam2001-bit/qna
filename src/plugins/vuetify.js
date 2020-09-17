import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF0000',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        uloans: '#f87919',
        fail: '#000',
        passed: '#00FF25',
        basira: '#42692c',
        fintech:'#007bff',
        cryoSave: '#a57aef',
        sdff: '#dddddd',
        creditStore: '#3ca8cb',
        aluma: '#b5b5b5',
        basira: '#556b2f',
      },
    },
  },
});
