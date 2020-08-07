<template>
<v-container>
    <h3 style="padding-top:1%; padding-left:5%">1. Which Uloans Business lending product is governed by the NCR (National Credit Regulator) ?</h3>
    <v-container class="px-15" fluid>
    <v-checkbox
      v-model="checkbox"
      :label="`Merchant Business Cash Advance lending product: R50 000 – R1,5m.${checkbox.toString()}`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox"
      :label="`Purchase Order Transaction lending product: R50 000 – R20m.${checkbox.toString()}`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox"
      :label="`Business Loan lending product: uncollateralized: R15 000 – R250 000.${checkbox.toString()}`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox"
      :label="`Business Loan lending product: uncollateralized: R250 001 – R1,5m.${checkbox.toString()}`"
    ></v-checkbox>
    
</v-container>
</template>