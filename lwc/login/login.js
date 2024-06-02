// formExample.js
import { LightningElement, track } from 'lwc';

export default class FormExample extends LightningElement {
    @track First_Name__c = '';
    @track Last_Name__c = '';
    @track Email_ID__c = '';
    @track Phone__c = '';
    @track Address__c = '';

    handleFirstNameChange(event) {
        this.First_Name__c = event.target.value;
    }

    handleLastNameChange(event) {
        this.Last_Name__c = event.target.value;
    }

    handleEmailChange(event) {
        this.Email_ID__c = event.target.value;
    }

    handlePhoneChange(event) {
        this.Phone__c = event.target.value;
    }

    handleAddressChange(event) {
        this.Address__c = event.target.value;
    }

    handleSubmit() {
        // Perform form submission logic here
        console.log('Form submitted!');
        console.log('First Name:', this.First_Name__c);
        console.log('Last Name:', this.Last_Name__c);
        console.log('Email:', this.Email_ID__c);
        console.log('Phone:', this.Phone__c);
        console.log('Address:', this.Address__c);
    }
}