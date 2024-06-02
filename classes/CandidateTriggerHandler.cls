public class CandidateTriggerHandler {
/**public static void SendEmailToCandidate(List<Candidate__c> cList){
List<Messaging.SingleEmailMessage> messages = new List<Messaging.SingleEmailMessage>();
EmailTemplate emailTemplate = [Select Id,Subject,Description,Body from EmailTemplate where name = 'Job Welcome mail'];

System.debug(emailTemplate.Id);
for(Candidate__c c : cList)
{
Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage();            
message.setTemplateID(emailTemplate.Id);
message.setTargetObjectId(c.OwnerId);
    System.debug(c.OwnerId);
message.toAddresses = new String[] { c.Email_ID__c};
    System.debug(c.Email_ID__c);
messages.add(message); 
}
/**Messaging.SendEmailResult[] results = Messaging.sendEmail(messages);

if (results[0].success) 
{
System.debug('The email was sent successfully');
} 
else {
System.debug('The email failed to send: ' +  results[0].errors[0].message);
}
}**/
}