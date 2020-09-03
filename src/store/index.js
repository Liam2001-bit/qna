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
          question: '10. When evaluating any prospective business loan application, the following are the most important points to generally consider before making a final financing decision ?',
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
      },


      eSWATINItrainingModuleBanking: {
        1: {
          question: '1. What is a Mula Account?',
          options: {
            A: 'Savings Account',
            B: 'Fixed deposit',
            C: 'Current Account',
            D: 'Salary Account',
            E: 'Gold Account'           
          },
          answer: 'D',
        },
        2: {
          question: '2. How it Works / who qualifies',
          options: {
            A: "Received at least 6 months' salary or pension payment may qualify ",
            B: 'Can be considered for a loan',
            C: 'Can also be opened for stop order processing, eg Medical Aid payments or Funeral Covers',
            D: 'Only A & C are correct',
            E: 'All of the above'           
          },
          answer: 'E',
        },
        3: {
          question: '3. What are the benefits of opening an account with SCBS?',
          options: {
            A: "Personal loan of up to E30 000.00. Flexible repayment term up to 3 years",
            B: 'Access to Mobile and Internet services',
            C: 'Access to your money 24/7 through ATM services',
            D: 'SMS notification to keep you updated on all account activity',
            E: 'All of the above'           
          },
          answer: 'E',
        },
        4: {
          question: '4. Account Opening',
          options: {
            A: "E50.00 minimum deposit",
            B: 'Certified copy of Swazi ID',
            C: 'Proof of residence (Utility Bill, water bill, electricity bill, rates bill and lease agreement not older than 3 months)',
            D: 'Proof of income not older than 3 months',
            E: 'All of the above'           
          },
          answer: 'E',
        },
        5: {
          question: '5. What is a Savings Account?',
          options: {
            A: "A savings account designed for individuals",
            B: 'Co-operative societies and companies who intend to have access to their funds and at the same time',
            C: 'Achieve growth on their savings account',
            D: 'Only A & B are correct',
            E: 'All of the above'           
          },
          answer: 'E',
        },
        6: {
          question: '6. What are the prerequisites to open a savings account?',
          options: {
            A: "E1,000.00 minimum deposit",
            B: 'Certified copy of Swazi ID',
            C: 'Proof of residence (Utility Bill, water bill, electricity bill, rates bill and lease agreement not older than 3 months)',
            D: 'Proof of income not older than 3 months',
            E: 'All of the above'           
          },
          answer: 'E',
        },
        7: {
          question: '7. What is umncweba Savings Scheme?',
          options: {
            A: "This is a group savings scheme designed for staff members in various organizations. ",
            B: 'Amounts contracted for saving are directly deducted from staff members and remitted by employer to the Society',
            C: 'Perfect for annual savings towards Xmas and school fees. ',
            D: 'Quite a good method used by employers to encourage and promote the culture of savings amongst employees. ',
            E: 'All of the above'           
          },
          answer: 'E',
        },
        8: {
          question: '8. Describe Fixed-Period shares offered at SCBS',
          options: {
            A: "They are issued to attract investments redeployed through various investment strategies in the sectors listed in our investment strategy. ",
            B: 'The fixed period shares are issued and redeemable within a minimum of 2 years and a maximum of 5 years',
            C: 'The period may be renewable at the request of the member. These are paidup shares issued at a nominal value of E1 per share ',
            D: 'Every person who purchases these shares becomes a member and in turn has a right to vote during the society’s annual general meetings. ',
            E: 'All of the above'           
          },
          answer: 'E',
        },
        9: {
          question: '9. Describe Subscription Shares by selecting the appropriate answer',
          options: {
            A: "This is an affordable short to long term investment product.  ",
            B: 'After accumulating substantial savings, Subscription Shares are your Permanent Shares and Fixed Period Shares.',
            C: 'Status Capital Building Society will accept instructions relating to the disposal of interest.',
            D: 'Customers are encouraged to reinvest interest in line with the spirit of the investment product. These allow a member to build up their portfolio through monthly contributions. ',
            E: 'All of the above'           
          },
          answer: 'E',
        },
        10: {
          question: '10. Describe Permanent Shares by selecting the appropriate answer',
          options: {
            A: "These shares are not publicly marketed but can be negotiated with the building society on application",
            B: 'The application must be approved by the board.',
            C: 'Suitable for high net worth individuals and institutional investors who have lump sums to save and want returns on their investments. ',
            D: 'The nature of permanent shares issued by Status Capital Building Society is such that these will provide the investors with equity in the building society.',
            E: 'All of the above'           
          },
          answer: 'E',
        },
        11: {
          question: '11. Describe Fixed-Rate Deposit Account by selecting the appropriate answer',
          options: {
            A: "Fixed-rate Deposit Account is a fixed deposit with a non-variable interest rate. ",
            B: 'This investment is for a short to medium term and offers flexibility to the investor to choose a notice period suitable to their needs',
            C: 'Investors are able to take advantage of this opportunity and maximize their returns.  ',
            D: 'Only A & C are correct',
            E: 'A, B and C are correct'           
          },
          answer: 'E',
        },
        12: {
          question: '12. Detail the Status Capital Building Society Call Account',
          options: {
            A: "A call account which offers the advantages of both a savings and a check account. ",
            B: 'A call Like a check account, has no fixed deposit period, provides instant access to funds, and allows unlimited withdrawals',
            C: 'This type of account also provides the investor with interest which is calculated daily but credited at the end of the month. ',
            D: 'This vehicle is perfect for large funds that may be called up anytime without the rigidity of a fixed notice period and without having the value of the funds being depleted by charges should the funds be kept for a longer period',
            E: 'All of the above'           
          },
          answer: 'E',
        },
        13: {
          question: '13. Describe the benefits of the SCBS Call Account',
          options: {
            A: "There are no charges on this account",
            B: 'Offers investors a stake in SCBS shareholding with a high return',
            C: 'Guarantees instant access to your money via Short Loan Facility, with dividends (interest) payable half yearly',
            D: 'In the event of an emergency, permanent shares may be pledged to qualify for a short loan not exceeding 90% of your investment.',
            E: 'All of the above'           
          },
          answer: 'E',
        },
        14: {
          question: '14. The following are requirements for call account opening, except?',
          options: {
            A: "Certified copy of Swazi ID",
            B: 'Proof of residence e.g. Utility bills, electricity bill, water bill, rates bill',
            C: 'Lease agreements (not older than 3 months)',
            D: 'Minimum balance required',
            E: 'Birth certificate'           
          },
          answer: 'E',
        },
        15: {
          question: '15. What are the Application Requirements for Property and Vacant Land?',
          options: {
            A: "Proof of income: Current advise slip, Current lease agreement where income is rental based, Audited financial statements, cash flow projections and 6      months bank statement for companies",
            B: 'Proof of current utility bill and declaration form',
            C: 'For trust applications: copy of trust document and resolution to borrow for companies: form J and form C, Memorandum / Articles of Association,       Certificate of Incorporation and Resolution to borrow',
            D: 'Confirmation of employment / contract of employment & Deed of sale in case of purchase / copy of tittle deed & Valid identity documents',
            E: 'All of the above'           
          },
          answer: 'E',
        },
        16: {
          question: '16. What are the Application Requirements for Building Loans (Residential and Commercial) ?',
          options: {
            A: "Approved Plan by City Council /Ministry of Housing and Local municipal council's written consent and Supervising Architect / Projects Manager's Professional Fees and Swatini Environmental Authority approval.",
            B: 'Proof of income: Current advise slip, Current lease agreement where income is rental based, Audited financial statements, cash flow projections and 6 months bank statement for companies',
            C: 'Confirmation of employment / contract of employment & Deed of sale in case of purchase / copy of tittle deed and Valid identity documents',
            D: 'Proof of current utility bill and declaration form, For trust applications: copy of trust document and resolution to borrow & For companies: form J      and form C, Memorandum / Articles of Association, Certificate of Incorporation and Resolution to borrow',
            E: 'All of the above'           
          },
          answer: 'E',
        },
        17: {
          question: '17. How is the Risk Covered by the Society?',
          options: {
            A: "Loans financed by SCBS should be covered under the Mortgage Protection Policy and House-Owner’s Insurance. or",
            B: 'It shall be a condition precedent to the loan being disbursed to the Borrower, that the Borrower shall take insurance cover and pay premiums in respect of such insurance policy. or',
            C: 'In the event that the Borrowers insurer cancels such a policy, the Society shall reserve the right to force insure the loan to protect its interests',
            D: 'The Borrower will choose the insurer intermediary with whom he shall conclude a contract of insurance to secure the dept',
            E: 'All of the above'           
          },
          answer: 'E',
        },
        18: {
          question: '18. A Building Society is authorized to cover the following insurance except?',
          options: {
            A: "Personal lines insurance and House holder’s insurance",
            B: 'Rural & Urban housing insurance',
            C: 'Personal, commercial all risk and liability insurance',
            D: 'Aircraft Insurance cover',
            E: 'Private Motor, Motorcycle & Trailers Insurance'           
          },
          answer: 'D',
        },
        19: {
          question: '19. Which of the following loans types are offered by the Building Society?',
          options: {
            A: "Short Loans",
            B: 'Mula Loans',
            C: 'Employee Guarantee Loans',
            D: 'Insurance Policy Loans',
            E: 'All of the above'           
          },
          answer: 'E',
        },
        20: {
          question: '20. What does the acronym we use SCBS stands for?',
          options: {
            A: "Savings Credit Bureu of Standards",
            B: 'Save Cash Before Sunset',
            C: 'Status Capital Building Society',
            D: 'Status Cash Balance Sheet',
            E: 'All of the above'           
          },
          answer: 'C',
        },
      },


      eSWATINISalesQuiz:{
        1: {
          question: '1. What 2 ways through which a building society raises funds:',
          options: {
            A: 'Savings Account',
            B: 'Taking deposits',
            C: 'Isuing shares',
            D: 'Both B and C are correct'                                
          },
          answer: 'D',
        },
        2: {
          question: '2. What three types of shares are SCBS allowed to issue:',
          options: {
            A: 'Fixed period shares, Subscription shares, Permanent shares',
            B: 'Fixed period shares, Fixed shares, Permanent shares',                                           
          },
          answer: 'A',
        },
        3: {
          question: '3. Which type of shares are we currently marketing?',
          options: {
            A: 'Subscription shares',
            B: 'Fixed period shares',  
            C: 'Permanent shares'                                         
          },
          answer: 'B',
        },
        4: {
          question: '4. Choose the 2 Classes of shares available under the types of shares mention in 3 above ',
          options: {
            A: 'Class A and Class C',
            B: 'Class B and Class C',  
            C: 'Class A and Class B'                                         
          },
          answer: 'C',
        },
        5: {
          question: '5. What is the nominal value of the shares we issue?',
          options: {
            A: 'E1 per share',
            B: 'E2 per share',  
            C: 'E3 per share'                                         
          },
          answer: 'A',
        },
        6: {
          question: '6. How many shares are required per application?',
          options: {
            A: '10 000',
            B: '20 000',  
            C: '30 000'                                         
          },
          answer: 'B',
        },
        7: {
          question: '7. What is the difference between a Bank and a Building Society?',
          options: {
            A: 'A bank is a financial institution and a Building Society is a group of banks',
            B: 'A building society is not a company but a mutual institution owned by the members whilst a bank is a company owned by its shareholders ',                             
          },
          answer: 'B',
        },
        8: {
          question: '8. Who regulates banks? And who regulates Building societies?',
          options: {
            A: 'Central Bank of Eswatini for banks.FSRA for Building Societies',
            B: 'The government of Eswatini and the Natio regulator',                             
          },
          answer: 'A',
        },
        9: {
          question: '9. Can the shares be redeemed before the end of the term?',
          options: {
            A: 'No',
            B: 'Yes',                             
          },
          answer: 'A',
        },
        10: {
          question: '10. To whose account are funds disbursed on redemption?',
          options: {
            A: 'The Client',
            B: 'The Regultor',                            
          },
          answer: 'A',
        },
      },


      eSWATINIQuiz: {
        1: {
          question: '1. What is a building society?',
          options: {
            A: 'Company',
            B: 'Mutual organisation',
            C: 'Bank'                         
          },
          answer: 'B',
        },
        2: {
          question: '2. The building society is owned by:',
          options: {
            A: 'Shareholders',
            B: 'Members',
            C: 'Status Holdings (South Africa)'                         
          },
          answer: 'B',
        },        
        3: {
          question: '3. Is Status Capital Building Society related to Swaziland Building Society?',
          options: {
            A: 'YES',
            B: 'NO',
            C: 'Partly'                         
          },
          answer: 'B',
        },
        4: {
          question: '4. Name 3 ways through which we invest.',
          options: {
            A: 'Money market',
            B: 'Vendor financing',
            C: 'Offering mortgage and housing finance',
            D: 'All of the above'
          },
          answer: 'D',
        },
        5: {
          question: '5. What do you do when your client is a pension fund or big company?',
          options: {
            A: 'Approach them and do presentation.',
            B: 'Seek management approval.',
            C: 'Ask a colleague to help you with the presentation',
            D: 'All of the above'
          },
          answer: 'B',
        },
        6: {
          question: '6. Do we accept cash deposits?',
          options: {
            A: 'YES',
            B: 'NO',
          },
          answer: 'B',
        },
        7: {
          question: '7. Who are our insurers?',
          options: {
            A: 'Lidwala',
            B: 'Tibiyo',
            C: 'Eswatini Royal insurance company'
          },
          answer: 'A',
        },
        8: {
          question: '8. Do our current interest rates fluctuate based on market force?',
          options: {
            A: 'YES',
            B: 'NO',            
          },
          answer: 'B',
        },
        9: {
          question: '9. What is the current investment that is on offer?',
          options: {
            A: 'Fixed period shares, fixed deposits',
            B: 'Temporary shares, temporary deposits',            
          },
          answer: 'A',
        },
        10: {
          question: '10. Up to what amount of cash do we accept on investments?',
          options: {
            A: '0',
            B: '100',
            C: '200',
            D: '300'
          },
          answer: 'A',
        },
      },

      
      StatusBuildingAMLCFTQuiz: {
        1: {
          question: '1. How many stages are there in the money laundering cycle?',
          options: {
            A: '1',
            B: '2',
            C: '3',            
          },
          answer: 'B',
        },
        2: {
          question: '2. Can a financial institution be guilty of money laundering?',
          options: {
            A: 'YES',
            B: 'NO',                       
          },
          answer: 'A',
        },
        3: {
          question: '3. Can one launder money without following all the stages of the cycle?',
          options: {
            A: 'YES',
            B: 'NO',                       
          },
          answer: 'A',
        },
        4: {
          question: '4. When you suspect a client or potential client of laundering money or of trying to invest proceeds of crime what do you do?',
          options: {
            A: 'Investigate',
            B: 'Call the police',
            C: 'Complete and File an STR',
            D: 'Tell the client about your suspicion'                      
          },
          answer: 'C',
        },
        5: {
          question: '5. What is the international body responsible for setting standards on Anti Money Laundering and combating of the financing of terrorism?',
          options: {
            A: 'UN',
            B: 'IMF',
            C: 'FATF',
            D: 'FATCA'                      
          },
          answer: 'C',
        },
        6: {
          question: '6. You will commit a money laundering offence if you do what to/with criminal property?',
          options: {
            A: 'Conceal its true nature and origin',
            B: 'Disguise its nature',
            C: 'Convert it',
            D: 'Transfer it',
            E: 'All of the above'                      
          },
          answer: 'E',
        },
        7: {
          question: '7. When should an STR be made?',
          options: {
            A: 'When you close a deal',
            B: 'As soon as you know or suspect that a client or potential client has committed or is committing a money laundering offence',
            C: 'After doing your investigations about the client',                                  
          },
          answer: 'B',
        },
        8: {
          question: '8. Are you allowed to tip-off a client after making an STR?',
          options: {
            A: 'YES',
            B: 'NO',                                            
          },
          answer: 'B',
        },
        9: {
          question: '9. Which approach is used in AML/CFT compliance and reporting?',
          options: {
            A: 'Rule based approach',
            B: 'Risk based approach',                                            
          },
          answer: 'B',
        },
        10: {
          question: "10. Can an institution still be at risk of being used for money laundering if they dont't take cash?",
          options: {
            A: 'YES',
            B: 'NO',                                            
          },
          answer: 'A',
        },
      },


      cryoSave: {
        1: {
          question: "1. Explain the nature of business conducted by Cryo Save.",
          options: {
            A: 'Fertility tests ',
            B: 'Harvesting and storing blood and cord stem cells',
            C: 'Cryogenic therapy for injured sportsmen'                                            
          },
          answer: 'B',
        },
        2: {
          question: "2. Who would the ideal customer be for Cryo Save to approach?",
          options: {
            A: 'Sportspeople',
            B: 'Teachers',
            C: 'Pregnant moms',
            D: 'Business people'                                            
          },
          answer: 'C',
        },
        3: {
          question: "3. When are the stem cells harvested to be stored By Cryo Save?",
          options: {
            A: 'When baby is 1 week old',
            B: 'Anytime',
            C: 'At birth',
            D: 'When the child becomes an adult'                                            
          },
          answer: 'C',
        },
        4: {
          question: "4. How long can one store stem cells for?",
          options: {
            A: '1 year',
            B: '10 years',
            C: '20 years',
            D: 'Indefinately'                                            
          },
          answer: 'D',
        },
        5: {
          question: "5. How many time can stem cells be used?",
          options: {
            A: 'Once',
            B: 'Twice',
            C: 'They can be expanded and then reused',                                            
          },
          answer: 'A',
        },
        6: {
          question: "6. Is there a payment plan available and if so with whom is the payment plan arranged?",
          options: {
            A: 'No ',
            B: 'Yes with FNB',
            C: 'Yes with Uloans',                                            
          },
          answer: 'C',
        },
        7: {
          question: "7. Can any body use stem cells that are banked?",
          options: {
            A: 'Yes ',
            B: 'No Cryosave is a private stem cell bank',
            C: 'The family can decide to donate them.',                                            
          },
          answer: 'B',
        },
        8: {
          question: "8. Who is most likely to match with banked stem cells?",
          options: {
            A: 'The bay where they came from and direct family',
            B: 'Anybody',                                                        
          },
          answer: 'B',
        },
      },


      fintechIntern: {
        1: {
          question: "1. Meetings can be hosted at the Fintech Campus auditorium and can seat up to ___ individuals",
          options: {
            A: '55',
            B: '65',
            C: '75',
          },
          answer: 'B',
        },
        2: {
          question: "2. At Fintech Campus, the following health and safety measures are in place to protect our staff, tenants and visitors against Covid 19:",
          options: {
            A: 'Temperature screening, hand sanitizing, record keeping, social distancing, frequent cleaning and PPE equipment for anyone entering the premises',
            B: 'Temperature screening, social distancing, frequent cleaning and PPE equipment for anyone entering the premises',
            C: 'Temperature screening, hand sanitizing, social distancing and frequent cleaning',
          },
          answer: 'A',
        },
        3: {
          question: "3. During the Covid 19 pandemic, how frequently are the boardrooms disinfected?",
          options: {
            A: 'Once a day',
            B: 'After each meeting',
            C: 'Three times a day',
          },
          answer: 'B',
        },
        4: {
          question: "4. When a potential client unexpectedly arrives at Fintech Campus to view our services, Fintech should:",
          options: {
            A: 'Be friendly and accommodate the client',
            B: 'Turn the client away because they never booked an appointment',
            C: 'Make an appointment for the client for another date and time',
          },
          answer: 'A',
        },
        5: {
          question: "5. Must the slow lounge and canteen be inspected for health and safety requirements?",
          options: {
            A: 'Yes',
            B: 'No',
          },
          answer: 'A',
        },
        6: {
          question: "6. Can the boardrooms, auditorium and rooftop be hired out to outside people that do not work at Fintech Campus?",
          options: {
            A: 'Yes',
            B: 'No',
          },
          answer: 'A',
        },
        7: {
          question: "7. The building managers responsibilities mainly consist of?",
          options: {
            A: 'All building related issues, tenants, cleaning, maintenance and security',
            B: 'All building related issues, tenants, cleaning, maintenance, security and IT',
            C: 'All building related issues, tenants, cleaning, maintenance and drivers'
          },
          answer: 'A',
        },
        8: {
          question: "8. All access to for Fintech Campus is monitored by an app called?",
          options: {
            A: 'Meteor',
            B: 'Gallagher',
            C: 'Galaxy'
          },
          answer: 'B',
        },
        9: {
          question: "9. Does Fintech Campus provide 24/7 security?",
          options: {
            A: 'Yes',
            B: 'No',
          },
          answer: 'A',
        },
        10: {
          question: "10. Fintech Campus has the following additional service/s available:",
          options: {
            A: 'Virtual Office, Co-Working Space and One Person Office',
            B: 'Hot Desk only',
            C: 'One Person Office and Virtual Office'
          },
          answer: 'A',
        },
      },


      payrollAfrica: {
        1: {
          question: '1. What do you understand when referring to the Governing Body setting the rules for MFC’s to comply with?',
          options: {
            A: 'Management',
            B: 'Board of directors',
            C: 'Government',
            D: 'Private Sector',
          },
          answer: 'C',
        },
        2: {
          question: '2. Why is it important to have a vision and a mission for your organization?',
          options: {
            A: 'Company compliance',
            B: 'Business goals and direction',
            C: 'Legislation',
            D: 'All of the above',
          },
          answer: 'B',
        },
        3: {
          question: '3. What is one of the most effective means of analysing and determining your organizational objectives and goals?',
          options: {
            A: 'Human resources',
            B: 'SWOT',
            C: 'PDF',
            D: 'Legislation',
          },
          answer: 'B',
        },
        4: {
          question: '4. When looking at products and pricing, what do you consider most important?',
          options: {
            A: 'Affordability',
            B: 'Tax bracket',
            C: 'Profit Margin',
            D: 'Competitors',
          },
          answer: 'C',
        },
        5: {
          question: '5. What does a deduction code allow you to do?',
          options: {
            A: 'Phone the client',
            B: 'Meeting the client',
            C: 'Legislative requirement',
            D: 'Deduct from source',
          },
          answer: 'D',
        },
        6: {
          question: '6. Where and what do you apply for?',
          options: {
            A: 'License at Government',
            B: 'Partnership at Private sector',
            C: 'License at Registrar',
            D: 'Partnership at FNB',
          },
          answer: 'A',
        },
        7: {
          question: '7. Why is it important to analyse affordability?',
          options: {
            A: 'Collect debt',
            B: 'Be competitive',
            C: 'Profit margin',
            D: 'All of the above',
          },
          answer: 'D',
        },
        8: {
          question: '8. What does the company insure?',
          options: {
            A: 'Debt',
            B: 'Personal belongings',
            C: 'Staff life cover',
            D: 'Medical insurance',
          },
          answer: 'A',
        },
        9: {
          question: '9. What do you understand when referring to loan consolidation?',
          options: {
            A: 'High risk',
            B: 'Low margin',
            C: 'Business opportunity',
            D: 'Business threat',
          },
          answer: 'C',
        },
        10: {
          question: '10. What needs to be submitted and when?',
          options: {
            A: 'Staff performance annually',
            B: 'Collection file monthly',
            C: 'Budget weekly',
            D: 'Attendance daily',
          },
          answer: 'B',
        },
        11: {
          question: '11. How and when do we collect?',
          options: {
            A: 'Cash at the counter daily',
            B: 'EFT weekly',
            C: 'From source monthly',
            D: 'Debit order annually',
          },
          answer: 'C',
        },
        12: {
          question: '12. How do we analyse our competitors?',
          options: {
            A: 'Spy on them',
            B: 'Employ them',
            C: 'Compare SWOT',
            D: 'Google',
          },
          answer: 'C',
        },
        13: {
          question: '13. Why do we have a credit policy and operations manual?',
          options: {
            A: 'Legislation',
            B: 'Company standards',
            C: 'Margin',
            D: 'All of the above',
          },
          answer: 'D',
        },
        14: {
          question: '14. Why is it important to analyse your debt collections?',
          options: {
            A: 'Company rule',
            B: 'Minister of Finance',
            C: 'Cashflow',
            D: 'Bank requirement',
          },
          answer: 'C',
        },
        15: {
          question: '15. What are the two most important marketing strategy for a MFC?',
          options: {
            A: 'Office location and size',
            B: 'Product and People',
            C: 'Internet and pricing',
            D: 'Brand and signage',
          },
          answer: 'B',
        },
        16: {
          question: '16. Why do we even consider customer care?',
          options: {
            A: 'Brand reputation',
            B: 'Word of mouth advertising',
            C: 'Staff performance',
            D: 'All of the above',
          },
          answer: 'D',
        },
        17: {
          question: '17. Why do we need an operating system to manage the business?',
          options: {
            A: 'Legislation',
            B: 'Realtime data',
            C: 'Customer care',
            D: 'Easy to work with',
          },
          answer: 'B',
        },
        18: {
          question: '18. What is risk and how do we manage it?',
          options: {
            A: 'Increasing Debt',
            B: 'Decreasing Sales',
            C: 'Negative customer feedback',
            D: 'All of the above',
          },
          answer: 'D',
        },
        19: {
          question: '19. What are the critical success factors we need to manage daily/weekly/monthly?',
          options: {
            A: 'Sales/Administration/Collections',
            B: 'Staff/Sales/Administration',
            C: 'Administration/Sales/Staff',
            D: 'Creditors/Sales/Staff',
          },
          answer: 'A',
        },
        20: {
          question: '20. What does Operations management entail?',
          options: {
            A: 'Facility',
            B: 'Sales',
            C: 'Staff',
            D: 'All of the above',
          },
          answer: 'D',
        },
        21: {
          question: '21. What is the most important tool we have in the management of the business’ finance?',
          options: {
            A: 'Finance Manager',
            B: 'Operating system',
            C: 'Staff',
            D: 'Income Tax',
          },
          answer: 'B',
        },
        22: {
          question: '22. What are the key performance indicators when managing your workforce?',
          options: {
            A: 'KPI’s',
            B: 'Behavioral Competencies',
            C: 'Training and development',
            D: 'All of the above',
          },
          answer: 'D',
        },
      },
      
      
      creditStore: {
        1: {
          question: '1. What is ROAS?',
          options: {
            A: 'ROAD misspelled',
            B: 'Return On Ad Spend',
            C: 'Review Online Advertising Spend',
          },
          answer: 'B',
        },
        2: {
          question: '2. What’s the function of a fulfilment partner?',
          options: {
            A: 'Keep Stock Holding Full',
            B: 'Deliver Products to Clients',
            C: 'Auto fill email fields in Advertising Champagnes',
          },
          answer: 'B',
        },
        3: {
          question: '3. How do we keep our online shop safe?',
          options: {
            A: 'Hosted in Secure environment',
            B: 'Run antivirus on our local machines',
            C: 'Hire armed security guards',
          },
          answer: 'A',
        },
        4: {
          question: '4. What is reverse logistics?',
          options: {
            A: 'Return of products with return issues ',
            B: 'Large trucks with stock for Credit Store Reversing and damaging items',
            C: 'Back-order stock logged into the system awaiting delivery',
          },
          answer: 'A',
        },
        5: {
          question: '5. What is Drop Shipping?',
          options: {
            A: 'Pick up and go stations',
            B: 'Supplier delivers direct to Credit Store Customer',
            C: 'Drop locations for parcels i.e. garages or Police stations',
          },
          answer: 'B',
        },
        6: {
          question: '6. What is a 30 day account?',
          options: {
            A: 'Cash on Delivery 30 days until delivery',
            B: 'Payment in 30 days or invoice in 30 days',
            C: '30 days delivery from our suppliers to Credit Store',
          },
          answer: 'B',
        },
        7: {
          question: '7. What is a COO account?',
          options: {
            A: 'Cash on Delivery',
            B: 'Chief Operation Officer',
            C: 'Cash on Order',
          },
          answer: 'C',
        },
        8: {
          question: '8. How do we ascertain what the suppliers SOH is?',
          options: {
            A: 'Check Facebook and get latest info there',
            B: 'Client sends regular emails with stack holding',
            C: 'Call them',
            D: 'Both B & C are correct'
          },
          answer: 'D',
        },
        9: {
          question: '9. Where do we get our loans approved?',
          options: {
            A: 'Our banking provider FNB',
            B: 'National Credit Bureau',
            C: 'uLoans',
          },
          answer: 'C',
        },
        10: {
          question: '10. What is our back end software?',
          options: {
            A: 'Magento',
            B: 'Shopify',
            C: 'Woo Commerce',
          },
          answer: 'A',
        },
        11: {
          question: '11. What is Customer protection act?',
          options: {
            A: 'Certified public accountant with advice on accounting and pricing issues',
            B: 'Act that promotes fairness openness and good business practice between suppliers and consumers ',
            C: 'Budget Planning by the Certified Government and Public consumer forum',
          },
          answer: 'B',
        },
        12: {
          question: '12. What is POPI?',
          options: {
            A: 'Popi is the AI system running at Fintec Campus',
            B: 'Popi is an Act the secures Protection Of Personal Information',
            C: 'Popi is Credit Stores association the Cryosave Lab',
          },
          answer: 'B',
        },
        13: {
          question: '13. Do we have return policies?',
          options: {
            A: 'Yes',
            B: 'No',
            C: 'Still working on it',
          },
          answer: 'A',
        },
        14: {
          question: '14. What can our Customers review us?',
          options: {
            A: 'Webiste',
            B: 'Social Media',
            C: 'Google',
            D: 'All of the above'
          },
          answer: 'D',
        },
        15: {
          question: '15. Where can customers review or compliment us?',
          options: {
            A: 'Webiste',
            B: 'Social Media',
            C: 'Google',
            D: 'All of the above'
          },
          answer: 'D',
        },
        16: {
          question: '16. What is SEO?',
          options: {
            A: 'Search Engine  Optimisation',
            B: 'Searches Engineering & Organisation',
            C: 'Security Engineered for Organizations ',
          },
          answer: 'A',
        },
        17: {
          question: '17. Where can our customers find us to make purchases?',
          options: {
            A: 'Social Media',
            B: 'On the Credit Store website',
            C: 'Sandton City Mall',
            D: 'Only A & B are correct',
          },
          answer: 'D',
        },      
      },


      finance: {
        1: {
          question: '1. The Statement of Profit and Loss is also called the:',
          options: {
            A: 'Balance Sheet',
            B: 'Income Statement',
            C: 'Statement of Cash Flows',
            D: 'Statement of Financial Position',
          },
          answer: 'B',
        },
        2: {
          question: '2. Which of the following is not a current asset?',
          options: {
            A: 'Cash',
            B: 'Accounts payable',
            C: 'Inventory',
            D: 'Property, plant, and equipment',
          },
          answer: 'D',
        },
        3: {
          question: '3. What happens to the balance sheet when a company pays salaries of R5,000?',
          options: {
            A: 'R5,000 credit in cash; R5,000 debit in accounts payable',
            B: 'R5,000 credit in cash; R5,000 debit in retained earnings',
            C: 'R5,000 debit in cash; R5,000 credit in retained earnings',
            D: 'R5,000 credit in cash; R5,000 debit in accounts receivable',
          },
          answer: 'A',
        },
        4: {
          question: '4. When can VAT be processed on a company?',
          options: {
            A: 'Any company can claim VAT',
            B: 'When company is registered at CIPC',
            C: 'When company is registered at SARS',
            D: 'No need to be registered',
          },
          answer: 'C',
        },
        5: {
          question: '5. The following accounts are on an income statement(can be more than one of the below)',
          options: {
            A: 'Shareholder account',
            B: 'Printing and Stationary',
            C: 'Salary control',
            D: 'Sales',
            E: 'B and D'
          },
          answer: 'E',
        },
        6: {
          question: '6. Which financial statement contains revenues and expenses?',
          options: {
            A: 'Balance sheet',
            B: 'Income Statement',
            C: 'Trial Balance',
          },
          answer: 'B',
        },
        7: {
          question: '7. Why is a Cash flow management important?',
          options: {
            A: 'To manage cash flow on daily basis',
            B: 'To project income and expenses on month end',
            C: 'Make important decisions regarding sales and payments',
            D: 'All of the above',
          },
          answer: 'D',
        },
        8: {
          question: '8. Which of the following items would not fall under the definition of an asset?',
          options: {
            A: 'Land',
            B: 'Machinery',
            C: 'Cash',
            D: 'Owner’s equity',
            E: 'Debtors'
          },
          answer: 'D',
        },
        9: {
          question: '9. Accounting entries involve a minimum of how many accounts?',
          options: {
            A: 'One',
            B: 'Two',
            C: 'Three',
            D: 'Four',
          },
          answer: 'B',
        },
        10: {
          question: '10. When a company pays a bill, the account Cash will be?',
          options: {
            A: 'Credited',
            B: 'Debited',            
          },
          answer: 'A',
        },
      },
      

      aluma: {
        1: {
          question: '1. Aluma Capital Is a registered Financial Services Provider, Licensed in which Categories?',
          options: {
            A: 'Category 1 Only',
            B: 'Category 2 Only',
            C: 'Category 1 & 2',
            D: 'Category 1 & 3'
          },
          answer: 'C',
        },
        2: {
          question: '2. Can Aluma Offer a Client Local and Offshore Share Portfolio’s?',
          options: {
            A: 'True',
            B: 'Flase',            
          },
          answer: 'A',
        },
        3: {
          question: '3. Aluma Capital has a Structured Note s available to Clients? Aluma Capital has a Triparty Agreement with what other Mayor Banks/Investment Houses? ',
          options: {
            A: 'Aluma Capital, ABSA, and CITI Investment Strategies ',
            B: 'Aluma Capital, Standard Bank, and CITI Investment Strategies ',
            C: 'Aluma Capital, ABSA, and Nedbank.  ',
            D: 'Aluma Capital, Nedbank, and CITI Investment Strategies '
          },
          answer: 'D',
        },
        4: {
          question: '4. With Regards to Aluma Capital Note 3. The note offers Clients the Following: ',
          options: {
            A: 'A)	100% Capital Protection',
            B: 'B)	80% Capital Protection',
            C: 'C)	21% Minimum Return ',
            D: 'D)	0% Min Return ',
            E: 'E)	100% Participation in the Citi Global Multi Asset USD Index  ',
            F: 'F)	200% Participation in the Citi Global Multi Asset USD Index',
            G: 'G)	325 % Participation in the Citi Global Multi Asset USD Index',
            H: 'H)	100% USD/ZAR Exposure',
            I: 'I)	100% USD ZAR Positive Return Exposure',
            J: 'Only A,D,G,I  are correct',
          },
          answer: 'J',
        },
        5: {
          question: '5. The Citi Global Multi Asset USD Index consists of a Core as well as a Reserve Portfolio. With Regard to the Core Portfolio. What is the Asset Class and Weighting mix? ',
          options: {
            A: '60 % Equities, 10 % Commodities, 30 % Bonds',
            B: '50%  Equities, 15 % Commodities, 35 % Bonds',
            C: '70%  Equities, 10 % Commodities, 20 % Bonds',
            D: '30%  Equities, 15 % Commodities, 55 % Bonds'
          },
          answer: 'A',
        },
        6: {
          question: '6. Which fees are charged on any of our Structured Notes?',
          options: {
            A: 'Financial Advisor Fee: 0,5% + VAT Per Annum.',
            B: 'Structuring Fee : 0,5% + VAT Per Annum.',
            C: 'Fund Manager Fee: 0,2% + VAT Per Annum.',
            D: 'All of the Above '
          },
          answer: 'D',
        },
        7: {
          question: '7. If a Client Invests R 1 000 000 in Note 3 and the Citi Global Multi Asset USD Index falls 15 % over the 5 Year Term, what would the Note Maturity Value be? Thus what would the clients investment be worth?',
          options: {
            A: 'R 850 000',
            B: 'R 1 150 000',
            C: 'R 1 000 000',
            D: 'R 1 015 000 '
          },
          answer: 'C',
        },
        8: {
          question: '8. The Client Receives 100% USD ZAR Positive Return Exposure? What does this mean?',
          options: {
            A: 'A)	If the ZAR Depreciates Against the USD over the investment term, and positive returns in the index will be enhanced.',
            B: 'B)	If the ZAR Depreciates Against the USD over the investment term, and positive returns in the index will be reduced. ',
            C: 'C)	If the ZAR Appreciates Against the USD over the investment term, and positive returns in the index will be reduced. ',
            D: 'D)	If the ZAR Appreciates Against the USD over the investment term, and positive returns in the index will be enhanced. ',
            E: 'Only A & C are correct'
          },
          answer: 'E',
        },
        9: {
          question: '9. What is the Minimum Investment Amount for Individual Investors and what is the Minimum Amount to Structure a Client his own Personalized Structured Note ?',
          options: {
            A: 'R 500 000 and R 16 000 000',
            B: 'R 250 000 and R 18 000 000',
            C: 'R 250 000  and USD 1 000 000',
            D: 'R 500 000 and USD R 1 000 000',            
          },
          answer: 'C',
        },
        10: {
          question: '10. If a clients invests in Structured Note 3, and the index gives Positive Returns of 25 % over the 5 Year term, what % Growth will the client receive in the index?',
          options: {
            A: '25%',
            B: '75%',
            C: '81.25%',
            D: '85%',            
          },
          answer: 'C',
        },
      },


      humanResources: {
        1: {
          question: '1. When recruiting new staff, it is company policy that... ?',
          options: {
            A: 'That the company only employs highly qualified people.',
            B: 'That the company only employs individuals of a certain age.',
            C: 'That the company only employs people with the required qualifications and skills within the correct salary range.',
            D: 'The company employs people related to staff employs and friends.'
          },
          answer: 'C',
        },
        2: {
          question: '2. What is the correct statement related to staff grievances ?',
          options: {
            A: 'Approach the CEO directly.',
            B: 'Approach the Human Resources Division and complete the relevance Grievance documentation.',
            C: 'Discuss the grievance with other employees.',
            D: 'Go to the press.'
          },
          answer: 'B',
        },
        3: {
          question: '3. What is the correct procedure when applying for leave ?',
          options: {
            A: 'Complete the necessary Leave Application Form signed off by the necessary Line Manager and Human Resources within 48 hours.',
            B: 'Only apply for leave on the same day you want to take leave.',
            C: 'Go on leave without signing the required forms.',
            D: 'Only apply for leave after you have taken leave.'
          },
          answer: 'A',
        },
        4: {
          question: '4. How many sick leave days does an employee get in a 3 year cycle ?',
          options: {
            A: '48 days.',
            B: '36 days.',
            C: '30 days.',
            D: '24 days.'
          },
          answer: 'B',
        },
        5: {
          question: '5. How many written warning must you give a staff member before taking disciplinary action ?',
          options: {
            A: '3 written warnings.',
            B: '1 written warning.',
            C: '2 written warnings.',
            D: 'None of the above.'
          },
          answer: 'A',
        },
        6: {
          question: '6. How long is a second written warning valid ?',
          options: {
            A: '18 months',
            B: '3 months.',
            C: '12 months.',
            D: '6 months.'
          },
          answer: 'D',
        },
        7: {
          question: '7. What is the purpose of a Performance Appraisal ?',
          options: {
            A: 'To earn more money.',
            B: 'To punish poor performance.',
            C: 'To objectively assess the performance of a staff member and provide constructive feedback to improve performance and achieve and exceed targets.',
            D: 'To ensure staff are not acknowledged for performance.'
          },
          answer: 'C',
        },
        8: {
          question: '8. The retrenchment process should be... ?',
          options: {
            A: 'In accordance with the process of the employer.',
            B: 'Substantially and procedurally fair.',
            C: 'The employer can embark on retrenchments for no reason.',
            D: 'Terminating employees service without notice.'
          },
          answer: 'B',
        },
        9: {
          question: '9. Should the employer consult the employee before embarking on retrenchments ?',
          options: {
            A: 'No.',
            B: 'It is up to the discretion of the employer.',
            C: 'Yes. It is a statutory requirement in terms of Section 189 of the Labour Relations Act.',
            D: 'Consultation needs only to be held with employees who need to be retrenched at the end of the process.'
          },
          answer: 'C',
        },
        10: {
          question: '10. Human Resources management helps improve...?',
          options: {
            A: 'Profit.',
            B: 'Productivity.',
            C: 'Power.',
            D: 'Production.'
          },
          answer: 'B',
        },
      },


      legalDivision: {
        1: {
          question: '1. In respect of Lease Agreements, if the landlord is a VAT Vendor and the tenant is not a VAT Vendor, should the landlord issue the tenant for VAT ?',
          options: {
            A: 'No.',
            B: 'The landlord will only charge VAT if the tenant is registered for VAT.',
            C: 'Yes.',
            D: 'Not applicable.'
          },
          answer: 'C',
        },
        2: {
          question: '2. Is the shareholder the owner of a company or only responsible for successfully managing the company ?',
          options: {
            A: 'The shareholder is not the owner of the company.',
            B: 'The shareholder is the owner of the company.',
            C: 'The shareholder has no relationship with the company.',
            D: 'A shareholder cannot be a director.'
          },
          answer: 'B',
        },
        3: {
          question: '3. What is the minimum number of directors permissible in a public company ?',
          options: {
            A: '3',
            B: '12',
            C: '18',
            D: '1'
          },
          answer: 'A',
        },
        4: {
          question: '4. What is the monetary jurisdiction applicable to the High Court for any civil claims ?',
          options: {
            A: 'R1-00 to R200 000.',
            B: 'R400 000 and above.',
            C: 'R200 001 to R399 000.',
            D: 'None of the above.'
          },
          answer: 'B',
        },
        6: {
          question: '6. In South African criminal law, in order to find someone guilty you must be able to prove guilt to the following extent... ?',
          options: {
            A: 'Balance of probability.',
            B: 'As far as possible.',
            C: 'As the court deems necessary.',
            D: 'Beyond all reasonable doubt.'
          },
          answer: 'D',
        },
        7: {
          question: '7. To prove a Civil Claim you need to prove your case to the following extent...?',
          options: {
            A: 'Beyond all reasonable doubt.',
            B: 'As the court deems necessary.',
            C: 'Balance of probability.',
            D: 'As far as possible.'
          },
          answer: 'C',
        },
        8: {
          question: '8. If you are a lender falling within the NCA, does your corporate governance in clude submitting annual reports to the NCR ?',
          options: {
            A: 'No',
            B: 'Yes',
            C: 'Not necessary.',
            D: 'Only in the case of Insurance.'
          },
          answer: 'B',
        },
        9: {
          question: '9. What is the importance of compliance at the NCA in the case of a lender ?',
          options: {
            A: 'Has no bearing at all.',
            B: 'It is not necessary to comply with the rules of the NCR.',
            C: 'To reduce risk of reputational harm and non-compliance with statutory requirements.',
            D: 'Only external audit issues are important.'
          },
          answer: 'C',
        },
        10: {
          question: '10. Is a company allowed to authorize and issue different types of shares to different types of shareholders ?',
          options: {
            A: 'No.',
            B: 'Yes.',
            C: 'Only in certain instances.',
            D: 'None of the above.'
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
      16: null, 
      17: null,
      18: null,
      19: null,
      20: null,
      21: null,
      22: null,
    }
  },
  mutations: {
    // pl example:  ['stateNameToEdit', 'value it should be']
    // pl example:  ['firstname', 'ariel']
    mState: (state, pl) => state[pl[0]] = pl[1],
    mAnswerSheet: (state, pl) => state.answerSheet[pl[0]] = pl[1] 
  },
  aDtions: {
  },
  modules: {
  },
  getters: {
  }
})
