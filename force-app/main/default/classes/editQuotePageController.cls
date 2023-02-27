/*
Class Name :  editQuotePageController

Author     : Chetan Awate
*/
public with sharing class editQuotePageController {
    
    @AuraEnabled(cacheable=true)
    public static List<Quote__c> getRecords(String recordIds){
        // quering the Quote__c records
        return [SELECT Id, Name, start_date__c, EndDate__c from Quote__c WHERE Id =: recordIds WITH SECURITY_ENFORCED];
    }
}