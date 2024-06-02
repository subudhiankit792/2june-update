import { LightningElement , track, api} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import otherinfo from '@salesforce/apex/NewCandidateDetails.otherinfo';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class JoiningFormPage3 extends NavigationMixin(LightningElement) {
    @api recordId;
   @track isRecordIdAvailable = false;
    connectedCallback() {
    // Fetch or set the recordId
    console.log('Record Id----->', this.recordId);
   }
   @track otherinfoRecord={
    speak: "",
    read: "",
    write: "",
    games: "",
    socialActivities: "",
    hobbies: ""
   }
    options = [
                { label: 'Bengali', value: 'Bengali'},
                { label: 'English', value: 'English' },
                { label: 'Hindi', value: 'Hindi'},
                { label: 'Kannada', value: 'Kannada'},
                { label: 'Telugu/Tamil', value: 'Telugu/Tamil'}
        ];
        handleInputChange(event)
    {
        if(event.target.name == 'speak')
            {
            this.otherinfoRecord.speak = event.target.value;
            console.log('speak--->' , this.otherinfoRecord.speak);
            }
        if(event.target.name=='write'){           
             this.otherinfoRecord.write = event.target.value;
             console.log('write--->',this.otherinfoRecord.write);
        }
        if(event.target.name=='read'){
                this.otherinfoRecord.read = event.target.value;
                console.log('read--->',this.otherinfoRecord.read);
        }
        if(event.target.name=='games'){           
             this.otherinfoRecord.nameofSSCschool = event.target.value;
             console.log('games--->',this.otherinfoRecord.games);
        }        
        if(event.target.name=='socialActivities'){            
            this.otherinfoRecord.socialActivities = event.target.value;
            console.log('socialActivities--->',this.otherinfoRecord.socialActivities);
        }        
        if(event.target.name=='hobbies'){            
            this.otherinfoRecord.hobbies = event.target.value;
            console.log('hobbies--->',this.otherinfoRecord.hobbies);
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
            console.log('speak---' + this.otherinfoRecord.speak);
            console.log('write---' + this.otherinfoRecord.write);
            console.log('read----' + this.otherinfoRecord.read);
            console.log('games----' + this.otherinfoRecord.games);
            console.log('socialActivities----' + this.otherinfoRecord.socialActivities);
            console.log('hobbies---' + this.otherinfoRecord.hobbies);
            console.log('Entered record-----' + JSON.stringify(this.otherinfoRecord));
            console.log("Record ID--->", this.recordId);
            if (this.sscRecord) {
                otherinfo({ wrapRecord: JSON.stringify(this.otherinfoRecord),
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