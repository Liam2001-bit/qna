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
        answer: 'C',
      },
      2: {
        question: '2. Which Uloans Business lending product is our main product, where we will derive the most revenue from and which has the best net return margin ?',
        options: {
          A: 'Merchant Business Cash Advance lending product: R50 000 – R1,5m',
          B: 'Purchase Order Transaction lending product: R50 000 – R20m.',
          C: 'Business Loan lending product: uncollateralized: R15 000 – R250 000.',
          D: 'Business Loan lending product: uncollateralized: R250 001 – R1,5m'
        },
        answer: 'B',
      },
      3: {
        question: '3. Which Uloans Business lending product is the most suitable for retailers in shopping centres where a large part of their sales is via Point of Sale (POS) devices?',
        options: {
          A: 'Merchant Business Cash Advance lending product: R50 000 – R1,5m',
          B: 'Purchase Order Transaction lending product: R50 000 – R20m.',
          C: 'Business Loan lending product: uncollateralized: R15 000 – R250 000.',
          D: 'Business Loan lending product: uncollateralized: R250 001 – R1,5m'
        },
        answer: 'A',
      },
      4: {
        question: '4. Which Uloans Business lending product is the most suitable for vendors with Purchase Order from private and public sector companies or organisations?',
        options: {
          A: 'Merchant Business Cash Advance lending product: R50 000 – R1,5m',
          B: 'Purchase Order Transaction lending product: R50 000 – R20m.',
          C: 'Business Loan lending product: uncollateralized: R15 000 – R250 000.',
          D: 'Business Loan lending product: uncollateralized: R250 001 – R1,5m'
        },
        answer: 'B',
      },
      5: {
        question: '5. Which Uloans Business lending product description below outlines the correct Business Rule for that product in terms of our Credit Policy?',
        options: {
          A: 'Merchant Business Cash Advance lending product: R50 000 – R1,5m prospective clients must have been in business for at least 6 months in the retail trade.',
          B: 'Purchase Order Transaction lending product: R50 000 – R20m prospective clients cannot be start-up businesses.',
          C: 'Business Loan lending product: uncollateralized: R15 000 – R250 000 prospective clients must be start-up businesses.',
          D: 'Business Loan lending product: uncollateralized: R250 001 – R1,5m prospective clients can be existing businesses who need loan terms of up to 60 months.'
        },
        answer: 'A',
      },
      6: {
        question: '6. Which fees are we allowed to charge on our NCR regulated lending product?',
        options: {
          A: 'Transaction fee of 8% of the transaction amount.',
          B: 'Loan investigation fee of R5 000.',
          C: 'Daily debit order fee of 4%.',
          D: 'Initiation fee not exceeding R2 990 (including VAT) and a monthly admin fee of R69-00 (including VAT).'
        },
        answer: 'D',
      },
      7: {
        question: '7. Which two lending products do we not charge an annual interest rate per annum on?',
        options: {
          A: 'Purchase Order Transactions and Uncollateralized Loans.',
          B: 'Merchant Business Cash Advance and Uncollateralized Loans.',
          C: 'Merchant Business Cash Advance and Purchase Order Transactions.',
          D: 'NCR regulated loans and Uncollateralized Loans of R250 001 – R1,5m.'
        },
        answer: 'C',
      },
      8: {
        question: '8. What is an Escrow bank account?',
        options: {
          A: 'A specific bank account where a client has full viewing and transaction rights.',
          B: 'A specific bank account set up for Purchase Order Transactions where the client only has viewing rights and the lender has transaction and viewing rights.',
          C: 'A specific bank account set up for Purchase Order Transactions where the client only has transaction rights and the lender has transaction and viewing rights.',
          D: 'A specific bank account set up for Purchase Order Transactions where the client only has viewing rights and the lender also only has viewing rights.'
        },
        answer: 'B',
      },
      9: {
        question: '9. What does the term “Margin of Safety” mean in respect of the projected Income Statement?',
        options: {
          A: 'It refers to the profitability of the business, specifically the net profit %.',
          B: 'It refers to the gross profit % of the business.',
          C: 'It refers to by how much can your turnover drop percentage wise and the business can still breakeven.',
          D: 'It refers to the breakeven turnover of a retail business which is calculated by dividing the total expenses by the gross profit%.'
        },
        answer: 'C',
      },
      10: {
        question: '10. What is an Escrow bank account?',
        options: {
          A: 'The own contribution of the applicant, the net profit margin and the collateral offered.',
          B: 'The abilities of the jockey of the horse, the financial and market viability of the business, the client’s own contribution, ability to repay the loan, value of collateral offered, number of jobs created / maintained and the community value add.',
          C: 'The profitability of the business and the ROI (Return on Investment).',
          D: 'The long-term sustainability of the business.'
        },
        answer: 'B',
      },
    },
    answerSheet: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
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
