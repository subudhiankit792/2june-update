public with sharing class CandidateApplicationController {
    // Candidate object to store form data
    public Candidate__c candidate { get; set; }
    // List to store education records
    //public List<Education__c> educationList { get; set; }
    // List to store work experience records
    //ublic List<Work_Experience__c> workExperienceList { get; set; }
    // Resume attachment
    //public Blob resume { get; set; }
    // Resume file name
    //public String resumeName { get; set; }
    
    // Constructor
   public CandidateApplicationController() {
        candidate = new Candidate__c();
        //educationList = new List<Education__c>();
        //workExperienceList = new List<Work_Experience__c>();
    }
    
    // Method to add a new education record to the list
    /**public void addEducation() {
        educationList.add(new Education__c());
    }**/
    
    // Method to add a new work experience record to the list
   /** public void addWorkExperience() {
        workExperienceList.add(new Work_Experience__c());
    }**/
    
    // Method to submit the application form
    public PageReference submitApplication() {
        /**try {
            // Insert candidate application record
            insert candidate;
            
            // Assign education records to the candidate application
            for(Education__c edu : educationList) {
                edu.Candidate_Application__c = candidate.Id;
            }
            // Insert education records
            insert educationList;
            
            // Assign work experience records to the candidate application
            for(Work_Experience__c exp : workExperienceList) {
                exp.Candidate_Application__c = candidate.Id;
            }
            // Insert work experience records
            insert workExperienceList;
            
            // Insert resume attachment
            Attachment resumeAttachment = new Attachment();
            resumeAttachment.ParentId = candidate.Id;
            resumeAttachment.Body = resume;
            resumeAttachment.Name = resumeName;
            insert resumeAttachment;**/
            
            // Reset form fields
            candidate = new Candidate__c();
            //educationList.clear();
            //workExperienceList.clear();
            //resume = null;
            //resumeName = null;
            
            // Redirect to a thank you page or home page
            return new PageReference('/thankyou');
        } 
    /**catch(Exception e) {
            // Display error message
            ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, 'An error occurred while submitting the application.'));
            return null;
        }
    }**/
}