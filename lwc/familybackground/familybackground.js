import { NavigationMixin } from "lightning/navigation";
import familyBackground from "@salesforce/apex/NewCandidateDetails.familyBackground";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { LightningElement, api, track } from "lwc";

export default class Familybackground extends NavigationMixin(
  LightningElement
) {
  @api recordId;
  @track isRecordIdAvailable = false;
  connectedCallback() {
    // Fetch or set the recordId
    console.log('recorId---->',this.recordId); // Replace this with actual logic to get the recordId
}
  @track familyBackgroundRecord = {
    fatherName: "",
    fatherAge: "",
    fatherEducationOccupation: "",
    motherName: "",
    motherAge: "",
    motherEducationOccupation: "",
    sisterName: "",
    sisterAge: "",
    sisterEducationOccupation: "",
    brotherName: "",
    brotherAge: "",
    brotherEducationOccupation: "",
    wifehusbandName:"",
    wifehusbandeducationOccupation:"",
    wifehusbandAge:""
  };

  handleInputChange(event) {
    console.log("Reccc--->", this.recordId);
    if (event.target.name == "fatherName") {
      this.familyBackgroundRecord.fatherName = event.target.value;
      console.log("Father name--->", this.familyBackgroundRecord.fatherName);
    }
    if (event.target.name == "fatherAge") {
      this.familyBackgroundRecord.fatherAge = event.target.value;
      console.log("fatherAge--->", this.familyBackgroundRecord.fatherAge);
    }
    if (event.target.name == "fatherEducationOccupation") {
      this.familyBackgroundRecord.fatherEducationOccupation =
        event.target.value;
      console.log(
        "fatherEducationOccupation--->",
        this.familyBackgroundRecord.fatherEducationOccupation
      );
    }
    if (event.target.name == "motherName") {
      this.familyBackgroundRecord.motherName = event.target.value;
      console.log("motherName--->", this.familyBackgroundRecord.motherName);
    }
    if (event.target.name == "motherAge") {
      this.familyBackgroundRecord.motherAge = event.target.value;
      console.log("motherAge--->", this.familyBackgroundRecord.motherAge);
    }
    if (event.target.name == "motherEducationOccupation") {
      this.familyBackgroundRecord.motherEducationOccupation =
        event.target.value;
      console.log(
        "motherEducationOccupation--->",
        this.familyBackgroundRecord.motherEducationOccupation
      );
    }
    if (event.target.name == "sisterName") {
      this.familyBackgroundRecord.sisterName = event.target.value;
      console.log("sisterName-->", this.familyBackgroundRecord.sisterName);
    }
    if (event.target.name == "sisterAge") {
      this.familyBackgroundRecord.sisterAge = event.target.value;
      console.log("sisterAge--->", this.familyBackgroundRecord.sisterAge);
    }
    if (event.target.name == "sisterEducationOccupation") {
      this.familyBackgroundRecord.sisterEducationOccupation =
        event.target.value;
      console.log(
        "sisterEducationOccupation--->",
        this.familyBackgroundRecord.sisterEducationOccupation
      );
    }
    if (event.target.name == "brotherName") {
      this.familyBackgroundRecord.brotherName = event.target.value;
      console.log("brotherName--->", this.familyBackgroundRecord.brotherName);
    }
    if (event.target.name == "brotherAge") {
      this.familyBackgroundRecord.brotherAge = event.target.value;
      console.log("brotherAge--->", this.familyBackgroundRecord.brotherAge);
    }
    if (event.target.name == "brotherEducationOccupation") {
      this.familyBackgroundRecord.brotherEducationOccupation =
        event.target.value;
      console.log(
        "brotherEducationOccupation--->",
        this.familyBackgroundRecord.brotherEducationOccupation
      );
    }
    if (event.target.name == "wifehusbandName") {
      this.familyBackgroundRecord.wifehusbandName =
        event.target.value;
      console.log(
        "wifehusbandName--->",
        this.familyBackgroundRecord.wifehusbandName);
     }
  if (event.target.name == "wifehusbandeducationOccupation") {
    this.familyBackgroundRecord.wifehusbandeducationOccupation =
      event.target.value;
    console.log(
      "wifehusbandeducationOccupation--->",
      this.familyBackgroundRecord.wifehusbandeducationOccupation);
    }
    if (event.target.name == "wifehusbandAge") {
      this.familyBackgroundRecord.wifehusbandAge =
        event.target.value;
      console.log(
        "wifehusbandAge--->",
        this.familyBackgroundRecord.wifehusbandAge);
      }
  }
  validateForm() {
    let isValid = true;
    const inputFields = this.template.querySelectorAll("lightning-input");
    inputFields.forEach((field) => {
      if (!field.reportValidity()) {
        isValid = false;
      }
    });
    return isValid;
  }
  handleClick() {
    console.log("OK button clicked!!");
    console.log("fathers name---" + this.familyBackgroundRecord.fatherName);
    console.log("father age---" + this.familyBackgroundRecord.fatherAge);
    console.log(
      "father education occupation----" +
        this.familyBackgroundRecord.fatherEducationOccupation
    );
    console.log("mothers name----" + this.familyBackgroundRecord.motherName);
    console.log("mother age----" + this.familyBackgroundRecord.motherAge);
    console.log(
      "mother education occupation---" +
        this.familyBackgroundRecord.motherEducationOccupation
    );
    console.log("sisters name---" + this.familyBackgroundRecord.sisterName);
    console.log("sister age----" + this.familyBackgroundRecord.sisterAge);
    console.log(
      "sister education occupation----" +
        this.familyBackgroundRecord.sisterEducationOccupation
    );
    console.log("brothers name----" + this.familyBackgroundRecord.brotherName);
    console.log("brother age----" + this.familyBackgroundRecord.brotherAge);
    console.log(
      "brother education occupation----" +
        this.familyBackgroundRecord.brotherEducationOccupation
    );
    console.log("wife husband name----" + this.familyBackgroundRecord.wifehusbandName);
    console.log("wife husband age----" + this.familyBackgroundRecord.wifehusbandAge);
    console.log(
      "wife husband education occupation----" +
        this.familyBackgroundRecord.wifehusbandeducationOccupation
    );
    console.log(
      "Entered record-----" + JSON.stringify(this.familyBackgroundRecord)
    );
    console.log('Record ID--->', this.recordId);
    if (this.familyBackgroundRecord) {
      familyBackground({
        wrapRecord: JSON.stringify(this.familyBackgroundRecord),
        recordId: this.recordId
      })
        .then((result) => {
          console.log("Result:" + JSON.stringify(result));
         // this.recordId = result;
         this.isRecordIdAvailable = true;
          this.dispatchEvent (new ShowToastEvent({
            title: "Success",
            message: "family background details were successfully entered",
            variant: "Success",
          })
          );
                this[NavigationMixin.Navigate]({
                  type: 'standard__recordPage',
                  attributes: {
                      recordId: this.recordId,
                      actionName: 'view',
                  },
              });
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
        title: "Failure",
        message: "Please enter all the details correctly!!",
        variant: "Failed",
      })
      );
    }
  }
}