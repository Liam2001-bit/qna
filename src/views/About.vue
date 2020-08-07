<template>
  <div class="about">    
    <header style="background-color:black; padding-left:5%; padding:1%;">
      <v-img src="../assets/uloans.png" width="5%"></v-img>
    </header>
    <div class="container">
    <h2 style="padding-top:1%" align="center">Instructions:</h2>
    <p style="padding-left:10%; padding-right:10%">This is a multiple-choice Test. Read all the questions carefully and then select only the correct answer for each question. There is only one correct answer for each question. Select the correct answer in the blocks provided.<br><br><u>You have 30minutes to complete this test. Goodluck.</u></p>
    <br>
    <br>

    <!-- text area with multiple choice answers -->
    <!-- selectable checkboxes or radio buttons -->

    <!-- Question 1 -->

    <h3 style="padding-top:1%;">1. Which Uloans Business lending product is governed by the NCR (National Credit Regulator) ?</h3>
    <!-- <v-container class="px-15" fluid> -->
      <p>{{ radios || 'Select one:'}}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Merchant Business Cash Advance lending product: R50 000 – R1,5m" value="A1"></v-radio>
      <v-radio label="Purchase Order Transaction lending product: R50 000 – R20m." value="A2"></v-radio>
      <v-radio label="Business Loan lending product: uncollateralized: R15 000 – R250 000." value="A3/C1"></v-radio>
      <v-radio label="Business Loan lending product: uncollateralized: R250 001 – R1,5m" value="A4"></v-radio>
    </v-radio-group>

    <!-- Question 2 -->

    <h3 style="padding-top:1%;">2. Which Uloans Business lending product is our main product, where we will derive the most revenue from and which has the best net return margin ?</h3>
      <p>{{ radios || 'Select one:'}}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Merchant Business Cash Advance lending product: R50 000 – R1,5m." value="A1"></v-radio>
      <v-radio label="Purchase Order Transaction lending product: R50 000 – R20m." value="A2/C2"></v-radio>
      <v-radio label="Business Loan lending product: uncollateralized: R15 000 – R250 000" value="A3"></v-radio>
      <v-radio label="Business Loan lending product: uncollateralized: R250 001 – R1,5m" value="A4"></v-radio>
    </v-radio-group>

    <!-- Question 3 -->

    <h3 style="padding-top:1%;">3. Which Uloans Business lending product is the most suitable for retailers in shopping centres where a large part of their sales is via Point of Sale (POS) devices ?</h3>
      <p>{{ radios || 'Select one:'}}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Merchant Business Cash Advance lending product: R50 000 – R1,5m." value="A1/C3"></v-radio>
      <v-radio label="Purchase Order Transaction lending product: R50 000 – R20m." value="A2"></v-radio>
      <v-radio label="Business Loan lending product: uncollateralized: R15 000 – R250 000" value="A3"></v-radio>
      <v-radio label="Business Loan lending product: uncollateralized: R250 001 – R1,5m" value="A4"></v-radio>
    </v-radio-group>

    <!-- Qution 4 -->

    <h3 style="padding-top:1%;">4. Which Uloans Business lending product is the most suitable for vendors with Purchase Order from private and public sector companies or organisations ?</h3>
      <p>{{ radios || 'Select one:'}}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Merchant Business Cash Advance lending product: R50 000 – R1,5m." value="A1"></v-radio>
      <v-radio label="Purchase Order Transaction lending product: R50 000 – R20m." value="A2/C4"></v-radio>
      <v-radio label="Business Loan lending product: uncollateralized: R15 000 – R250 000" value="A3"></v-radio>
      <v-radio label="Business Loan lending product: uncollateralized: R250 001 – R1,5m" value="A4"></v-radio>
    </v-radio-group>

    <!-- Question 5 -->

    <h3 style="padding-top:1%;">5. Which Uloans Business lending product description below outlines the correct Business Rule for that product in terms of our Credit Policy ?</h3>
      <p>{{ radios || 'Select one:'}}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Merchant Business Cash Advance lending product: R50 000 – R1,5m prospective clients must have been in business for at least 6 months in the retail trade." value="A1/C5"></v-radio>
      <v-radio label="Purchase Order Transaction lending product: R50 000 – R20m prospective clients cannot be start-up businesses." value="A2/C4"></v-radio>
      <v-radio label="Business Loan lending product: uncollateralized: R15 000 – R250 000 prospective clients must be start-up businesses." value="A3"></v-radio>
      <v-radio label="Business Loan lending product: uncollateralized: R250 001 – R1,5m prospective clients can be existing businesses who need loan terms of up to 60 months." value="A4"></v-radio>
    </v-radio-group>

    <!-- Question 6 -->

    <h3 style="padding-top:1%;">6. Which fees are we allowed to charge on our NCR regulated lending product ?</h3>
      <p>{{ radios || 'Select one:'}}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Transaction fee of 8% of the transaction amount." value="A1"></v-radio>
      <v-radio label="Loan investigation fee of R5 000." value="A2"></v-radio>
      <v-radio label="Daily debit order fee of 4%." value="A3"></v-radio>
      <v-radio label="Initiation fee not exceeding R2 990 (including VAT) and a monthly admin fee of R69-00 (including VAT)." value="A4/C6"></v-radio>
    </v-radio-group>

    <!-- Question 7 -->

    <h3 style="padding-top:1%;">7. Which two lending products do we not charge an annual interest rate per annum on ?</h3>
      <p>{{ radios || 'Select one:'}}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="Purchase Order Transactions and Uncollateralized Loans." value="A1"></v-radio>
      <v-radio label="Merchant Business Cash Advance and Uncollateralized Loans." value="A2"></v-radio>
      <v-radio label="Merchant Business Cash Advance and Purchase Order Transactions." value="A3/C7"></v-radio>
      <v-radio label="NCR regulated loans and Uncollateralized Loans of R250 001 – R1,5m." value="A4"></v-radio>
    </v-radio-group>

    <!-- Question 8 -->

    <h3 style="padding-top:1%;">8. What is an Escrow bank account ?</h3>
      <p>{{ radios || 'Select one:'}}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="A specific bank account where a client has full viewing and transaction rights." value="A1"></v-radio>
      <v-radio label="A specific bank account set up for Purchase Order Transactions where the client only has viewing rights and the lender has transaction and viewing rights." value="A2/C8"></v-radio>
      <v-radio label="A specific bank account set up for Purchase Order Transactions where the client only has transaction rights and the lender has transaction and viewing rights." value="A3"></v-radio>
      <v-radio label="A specific bank account set up for Purchase Order Transactions where the client only has viewing rights and the lender also only has viewing rights." value="A4"></v-radio>
    </v-radio-group>

    <!-- Question 9 -->

    <h3 style="padding-top:1%;">9. What does the term “Margin of Safety” mean in respect of the projected Income Statement ?</h3>
      <p>{{ radios || 'Select one:'}}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="It refers to the profitability of the business, specifically the net profit %." value="A1"></v-radio>
      <v-radio label="It refers to the gross profit % of the business." value="A2"></v-radio>
      <v-radio label="It refers to by how much can your turnover drop percentage wise and the business can still breakeven." value="A3/C9"></v-radio>
      <v-radio label="It refers to the breakeven turnover of a retail business which is calculated by dividing the total expenses by the gross profit%." value="A4"></v-radio>
    </v-radio-group>

    <!-- Question 10 -->
  
    <h3 style="padding-top:1%;">10. When evaluating any prospective business loan application, the following are the most important points to generally consider before making a final financing decision ?</h3>
      <p>{{ radios || 'Select one:'}}</p>
    <v-radio-group v-model="radios" :mandatory="false">
      <v-radio label="The own contribution of the applicant, the net profit margin and the collateral offered." value="A1"></v-radio>
      <v-radio label="The abilities of the jockey of the horse, the financial and market viability of the business, the client’s own contribution, ability to repay the loan, value of collateral offered, number of jobs created / maintained and the community value add." value="A2/C10"></v-radio>
      <v-radio label="The profitability of the business and the ROI (Return on Investment)." value="A3"></v-radio>
      <v-radio label="The long-term sustainability of the business." value="A4"></v-radio>
    </v-radio-group>
  </div>



    <!-- submit -->

    <v-card-text style="height: 70px;" class="grey darken-1 text-center">
      <v-btn color="submit" @click="submitForm">
        submit
      </v-btn>
    </v-card-text>

    <!-- <div id="results"></div> -->

  <v-card height="90">
    <v-footer 
      color="uloans"     
      absolute
      class="font-weight-medium">
      <v-col
        class="text-center"
        cols="12">
        {{ new Date().getFullYear() }} — <strong>Uloans Business Intern Competency Test </strong>
      </v-col>
    </v-footer>
  </v-card>

  <!-- <div class="base-timer">
    <svg
      class="base-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="base-timer__circle">
        <circle
          class="base-timer__path-elapsed"
          cx="50"
          cy="50"
          r="46.5"
        />
      </g>
    </svg>
    <span class="base-timer__label">
      {{ formattedTimeLeft }}
    </span>
  </div> -->
  

  </div>
</template>



<script>
  export default {
    data: () => ({
      includeFiles: true,
      enabled: false,
      hidden: false,
    }),
    methods: {
      submitForm(){
        alert('TEST COMPLETED')
      }
    }
  }
</script>