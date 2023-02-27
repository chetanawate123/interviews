/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api, wire } from "lwc";
import getRecords from '@salesforce/apex/editQuotePageController.getRecords'

export default class EditQuote extends LightningElement {
  @api recordId;
  quotesList;
  quoteData = {
    name: "Quote Name",
    endDate: 1547250828000
  };
 
  // quering data from controller
  @wire(getRecords, {recordIds : '$recordId'})
  wiredData({data,error}){
    if (data) {
         this.quotesList = data;
    console.log('==data==',JSON.stringify(data)); 
    console.log('record id', this.recordId);
    } else if (error) {
    console.log(error);
    }
}
  renderedCallback() {}
}