import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstname: null,
    lastname: null,
    questionForm: {
      1: {
        question: '1. Which Uloans Business lending product is governed by the NCR (National Credit Regulator) ?',
        options: {
          A: 'Merchant Business Cash Advance lending product: R50 000 – R1,5m',
          B: 'Purchase Order Transaction lending product: R50 000 – R20m.',
          C: 'Business Loan lending product: uncollateralized: R15 000 – R250 000.',
          D: 'Business Loan lending product: uncollateralized: R250 001 – R1,5m'
        },
        answer: 'B',
      },
      2: {
        question: '2. Which Uloans Business lending product is our main product, where we will derive the most revenue from and which has the best net return margin ?',
        options: {
          A: 'Merchant Business Cash Advance lending product: R50 000 – R1,5m',
          B: 'Purchase Order Transaction lending product: R50 000 – R20m.',
          C: 'Business Loan lending product: uncollateralized: R15 000 – R250 000.',
          D: 'Business Loan lending product: uncollateralized: R250 001 – R1,5m'
        },
        answer: 'C'
      }
    },
    answerSheet: {
      1: null,
      2: null,
      3: null
    }
  },
  mutations: {
    // pl example:  ['stateNameToEdit', 'value it should be']
    // pl example:  ['firstname', 'ariel']
    mState: (state, pl) => state[pl[0]] = pl[1],
    mAnswerSheet: (state, pl) => state.answerSheet[pl[0]] = pl[1] 
  },
  actions: {
  },
  modules: {
  },
  getters: {
  }
})
