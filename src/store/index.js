import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstname: null,
    lastname: null,
    email: null,
    questionForms: {
      uloansConsumerLending: {
        
        1: {
          question: '1. Which Uloans Consumer lending product is governed by the NCR (National Credit Regulator)?',
          options: {
            A: 'Uncollateralized Short Term Loans 1 – 6 months',
            B: 'Uncollateralized Small Credit Agreements 6 - 24 months',
            C: 'Uncollateralized Intermediate Credit Agreements 6 - 24 months.',
            D: 'All of the above.'
          },
          answer: 'D',
        },
        2: {
          question: '2. What is the correct formula used to determine the maximum allowed interest rate that can be charged on a small credit agreement. ',
          options: {
            A: '5% per month on fist loan and 3% per month on second loan within 12 months',
            B: 'Prime Interest Rate + 21% per year',
            C: 'Repo Rate + 21% per year',
            D: 'None of the above'
          },
          answer: 'C',
        },
        3: {
          question: '3. Which of the following types of individuals will qualify for an Uloans loan. ',
          options: {
            A: 'Self-employed persons',
            B: 'Pensioners',
            C: 'Government Employees',
            D: 'Agriculture Employees'
          },
          answer: 'C',
        },
        4: {
          question: '4. For which date should a client authenticate his/her DebiCheck if the employer confirms the normal pay date is the 25th of each month however their bank statement shows their last 3 pay dates were 22nd, 25th and 24th  ',
          options: {
            A: '25th',
            B: '22nd',
            C: '24th',
            D: '21st'
          },
          answer: 'D',
        },
        5: {
          question: '5. In terms of the Uloans Consumer Credit Policy, which of the following does not constitute an adverse credit record?',
          options: {
            A: 'Client listed as under debt counseling',
            B: 'Client’s Compuscore between 580 and 590',
            C: 'Client under administration',
            D: 'Client that has debt disputes lodged against their credit records'
          },
          answer: 'B',
        },
        6: {
          question: '6. Which fees are allowed to be charged according to the NCR?',
          options: {
            A: 'Origination Fee not more than R1,050 (excl. VAT)',
            B: 'Monthly Administration Fee of R115 (Incl. VAT)',
            C: 'Credit Life Insurance of R9.50 per R1,000',
            D: 'Default Admin Fee of R2.97 per day'
          },
          answer: 'A',
        },
        7: {
          question: '7. Which of the following persons are not excluded from eligibility for a loan?',
          options: {
            A: 'Any person not of sound mind',
            B: 'Any person that is an un-rehabilitated debtor',
            C: 'A person that has been flagged by the credit bureau as having absconded',
            D: 'Non-Seasonal salary or wage earners'
          },
          answer: 'D',
        },
        8: {
          question: '8. Which of the following are not approved employer types according to the Credit Policy?',
          options: {
            A: 'Any employer that can readily be found by normal enquiries to places of reference like reputable Internet protocol',
            B: 'Employers should further demonstrate the ability to confirm employment of the applicant, indicate rules for salary payment and any other general enquiries relevant to establish the credentials of the applicant',
            C: 'Industries like security, farm and textile workers ',
            D: 'Employers that pays their employees weekly or fortnightly'
          },
          answer: 'C',
        },
        9: {
          question: '9. Which of the following functions is not available to a client on his Finduis client profile?',
          options: {
            A: 'Change of address ',
            B: 'See client loan repayments',
            C: 'Change banking details ',
            D: 'Change cellphone number'
          },
          answer: 'C',
        },
        10: {
          question: '10. When doing a clients affordability assessment, which of the following is not used to determine loan affordability?',
          options: {
            A: 'NLR accounts',
            B: 'Recurring debit orders on the bank statement ',
            C: 'Monthly DSTV debit orders',
            D: 'Monthly grocery purchases '
          },
          answer: 'D',
        },
        11: {
          question: '11. Which of the following cut-off scores are used for broker applications?',
          options: {
            A: '600',
            B: '580',
            C: '590',
            D: '595'
          },
          answer: 'C',
        },
        12: {
          question: '12. Which of the following banks are excluded from doing DebiCheck’s?',
          options: {
            A: 'Ubank',
            B: 'Discovery Bank',
            C: 'Gro-Bank',
            D: 'Bidvest Bank'
          },
          answer: 'B',
        },
        13: {
          question: '13. When doing employer confirmations, which of the following should not be confirmed by the employees HR department?',
          options: {
            A: 'Salary pay date',
            B: 'Salary pay date',
            C: 'Banking details',
            D: 'Permanent or temporary employment status'
          },
          answer: 'C',
        },
        14: {
          question: '14. How long does it take Uloans to disburse an approved loan application to a client?',
          options: {
            A: '30 minutes',
            B: '2 hours',
            C: '2 hours',
            D: '24 hours '
          },
          answer: 'B',
        },
        15: {
          question: '15. Which of the following reasons is the most prominent reason for a client complaint?',
          options: {
            A: 'Loan Declined',
            B: 'Incorrect fee’s being charged',
            C: 'Lack of communication',
            D: 'Unprofessional behaviour '
          },
          answer: 'C',
        },
      },

      uloansBusiness: {
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
      
      ITdeptTest: {
        1: {
          question: '1. A feature of MS Office that saves the document automatically after certain interval is called ____ ?',
          options: {
            A: 'Auto Save',
            B: 'Quick Save'          
          },
          answer: 'A',
        },
        2: {
          question: '2.To go to a specific location in a document we use what function? ',
          options: {
            A: 'Table of contents ',
            B: 'HyperText', 
            C: 'Bookmark',
            D: 'Macro'
          },
          answer: 'C',
        },
        3: {
          question: '3. In terms of Agile development Scrum methodology, what is the difference and similarity between Agile and Scrum?',
          options: {
            A: 'Agile is a broad spectrum, it is a methodology used for project management while Scrum is just a form of the Agile that describes the process and its steps more concisely',
            B: 'Scrum is a broad spectrum, it is a methodology used for project management while Agile is just a form of the Scrum that describes the process and its steps more concisely',           
          },
          answer: 'A',
        },
        4: {
          question: '4. What is the use of burn-up and burn-down charts?',
          options: {
            A: 'Burn-up refers to how many projects the user is currently deleting. Burn-down is how many projects that the user will be deleting.',
            B: 'The burn-up chart illustrates the amount of completed work in a project whereas the burn-down chart depicts the amount of work remained to complete a project.',           
          },
          answer: 'B',
        },
        5: {
          question: '5. What is the difference between SQL and MySQL?',
          options: {
            A: 'SQL is a programming language made by Google, MySQL is a language derived by Microsoft.',
            B: 'MySQL is a database, SQL is a larger database in a subset to MySQL',
            C: 'SQL is an acronym for structured query language. SQL is generally used to refer to Microsoft T-SQL, MYSQL is an open source alternative to SQL'           
          },
          answer: 'C',
        },
        6: {
          question: '6. What are joins in SQL?',
          options: {
            A: 'Joins in SQL joins two separate files and merges them into one file.',
            B: 'A join is used to link two sheets in the same file.',
            C: 'A join clause is used to combine rows from two or more tables, based on a related column between them.'           
          },
          answer: 'C',
        },
        7: {
          question: '7. Which of the following are the basic data types associated with C# ?',
          options: {
            A: 'Int , Float, Double, Char',
            B: 'Type , Print, Double, Char',
            C: 'Log , Float, True/False, Char'           
          },
          answer: 'A',
        },
        8: {
          question: '8. What is the difference between abs() and fabs() functions?',
          options: {
            A: 'abs() are for an integer value and fabs() are for floating type numbers.',
            B: 'abs() are based on abnormal values such as numbers. fabs() are based on letters or strings.',
            C: 'abs() are a value input section where as fabs() are a Type input section.'           
          },
          answer: 'A',
        },
        9: {
          question: '9. Which one of the following will help reduce webpages loading time? ',
          options: {
            A: 'Get faster internet',
            B: 'Add widgets',
            C: 'Reduce image sizes'           
          },
          answer: 'C',
        },
        10: {
          question: '10. What is the difference between ID and Class selector?  ',
          options: {
            A: 'ID selector finds and modifies the Class selector.',
            B: 'ID selector finds and modifies the style to any single element. Class selector can do to any number of elements.',
            C: 'ID is a way to call something in code. Class is the name of the ID used.'           
          },
          answer: 'B',
        },
      }
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
      11: null,
      12: null,
      13: null,
      14: null,
      15: null,
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
