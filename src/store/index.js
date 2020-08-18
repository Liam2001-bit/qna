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
