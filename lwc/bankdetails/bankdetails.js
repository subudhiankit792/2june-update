import { LightningElement , track, api} from 'lwc';
import bankdetails from '@salesforce/apex/NewCandidateDetails.bankdetails';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class Bankdetails extends LightningElement {
    @api recordId;
    @track isRecordIdAvailable = false;
     connectedCallback() {
     // Fetch or set the recordId
     console.log('recorId---->',this.recordId);
    }
    @track bankdetailsRecord = {
        accountholderName: "",
        IFSCcode: "",
        branchName: "",
        accountNumber: "",
        bankName: ""
    }
    handleInputChange(event)
    {
        if(event.target.name == 'accountholderName')
            {
            this.bankdetailsRecord.stateofSSCschool = event.target.value;
            console.log('accountholderName--->' , this.bankdetailsRecord.accountholderName);
            }
        if(event.target.name=='IFSCcode'){           
             this.bankdetailsRecord.stateofSSCboard = event.target.value;
             console.log('IFSCcode--->',this.bankdetailsRecord.IFSCcode);
        }
        if(event.target.name=='branchName'){
                this.bankdetailsRecord.nameofSSCboard = event.target.value;
                console.log('branchName--->',this.bankdetailsRecord.branchName);
        }
        if(event.target.name=='bankName'){           
             this.bankdetailsRecord.bankName = event.target.value;
             console.log('bankName--->',this.bankdetailsRecord.bankName);
        }        
        if(event.target.name=='accountNumber'){            
            this.bankdetailsRecord.accountNumber = event.target.value;
            console.log('accountNumber--->',this.bankdetailsRecord.accountNumber);
        }        
}
    validateForm() {
        let isValid = true;
        const inputFields = this.template.querySelectorAll('lightning-input');
        inputFields.forEach(field => {
            if (!field.reportValidity()) {
                isValid = false;
            }
        });
        return isValid;
    }
    handleClick() {
            console.log('OK button clicked!!');
            console.log('account holder Name---' + this.bankdetailsRecord.accountholderName);
            console.log('IFSC code---' + this.bankdetailsRecord.IFSCcode);
            console.log('branch Name----' + this.bankdetailsRecord.branchName);
            console.log('bank Name----' + this.bankdetailsRecord.bankName);
            console.log('account Number----' + this.bankdetailsRecord.accountNumber);
            console.log('Entered record-----' + JSON.stringify(this.sscRecord));
            console.log("Record ID--->", this.recordId);
            if (this.bankdetailsRecord) {
                bankdetails({ wrapRecord: JSON.stringify(this.bankdetailsRecord),
                    recordId: this.recordId
                })
                        .then((result) => {
                            console.log('Result:' + JSON.stringify(result));
                            //this.recordId = result;
                           this.isRecordIdAvailable = true;
                              this.dispatchEvent(new ShowToastEvent({
                                    title: 'Success',
                                    message: 'SSC details were successfully entered',
                                    variant: 'Success',
                              })
                              );          
                            })
                                                
                            .catch((error) => {
                                console.log("Error----" + JSON.stringify(error.message));
                                this.dispatchEvent(new ShowToastEvent({
                                  title: "Error",
                                  message: "Error in saving family background details: " + error.message,
                                  variant: "error",
                              })
                            );
                        });
                        } else {
                            this.dispatchEvent(new ShowToastEvent({
                        title: 'Failure',
                        message: 'Please enter all the details correctly!!',
                        variant: 'Failed',
                  })
                );
            }
        }
}