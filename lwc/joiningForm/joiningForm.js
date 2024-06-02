// associateForm.js
import { NavigationMixin } from "lightning/navigation";
import { LightningElement, track } from "lwc";
import personalInfo from "@salesforce/apex/NewCandidateDetails.personalInfo";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class joiningForm extends NavigationMixin(LightningElement) {
  @track recordId;
  @track isRecordIdAvailable = false;
  @track personalInfoRecord = {
    Name: "",
    motherName: "",
    fatherName: "",
    presentAddress: "",
    permananentAddress: "",
    email: "",
    contactNumber: "",
    altContactNumber: "",
    whatsappNumber: "",
    parentContactNumber: "",
    gender: "",
    dateOfBirth: "",
    bloodGroup: "",
    religion: "",
    aadhaarNumber: "",
    panNumber: "",
    voterIdNumber: "",
    passportNumber: "",
    image: "",
  };

  genderValue = "";
  bloodValue = "";

  get options() {
    return [
      { label: "Male", value: "Male" },
      { label: "Female", value: "Female" },
      { label: "others", value: "others" },
    ];
  }

  // handleGenderChange(event) {
  //     this.genderValue = event.detail.value;
  // }

  get bloodOptions() {
    return [
      { label: "A+", value: "A+" },
      { label: "A-", value: "A-" },
      { label: "B+", value: "B+" },
      { label: "B-", value: "B-" },
      { label: "AB+", value: "AB+" },
      { label: "AB-", value: "AB-" },
      { label: "O+", value: "O+" },
      { label: "O-", value: "O-" },
    ];
  }
  // handlebloodChange(event) {
  //     this.bloodValue = event.detail.value;
  // }

  handleInputChange(event) {
    if (event.target.name == "Name") {
      this.personalInfoRecord.Name = event.target.value;
      console.log("Name--->", this.personalInfoRecord.Name);
    }
    if (event.target.name == "MotherName")
      this.personalInfoRecord.motherName = event.target.value;
    if (event.target.name == "FatherName")
      this.personalInfoRecord.fatherName = event.target.value;
    if (event.target.name == "PresentAddress")
      this.personalInfoRecord.presentAddress = event.target.value;
    if (event.target.name == "PermanentAddress")
      this.personalInfoRecord.permananentAddress = event.target.value;
    if (event.target.name == "Email")
      this.personalInfoRecord.email = event.target.value;
    if (event.target.name == "ContactNumber")
      this.personalInfoRecord.contactNumber = event.target.value;
    if (event.target.name == "AlternativeContactNumber")
      this.personalInfoRecord.altContactNumber = event.target.value;
    if (event.target.name == "WhatsAppNumber")
      this.personalInfoRecord.whatsappNumber = event.target.value;
    if (event.target.name == "ParentsContact")
      this.personalInfoRecord.parentContactNumber = event.target.value;
    if (event.target.name == "Gender") {
      this.personalInfoRecord.gender = event.target.value;
      console.log("Gender--->", this.personalInfoRecord.gender);
    }
    if (event.target.name == "DOB")
      this.personalInfoRecord.dateOfBirth = event.target.value;
    if (event.target.name == "BloodGroup") {
      this.personalInfoRecord.bloodGroup = event.target.value;
      console.log("Blood Group--->", this.personalInfoRecord.bloodGroup);
    }
    if (event.target.name == "Religion") {
      this.personalInfoRecord.religion = event.target.value;
      console.log("Religion--->", this.personalInfoRecord.religion);
    }
    if (event.target.name == "Aadhar")
      this.personalInfoRecord.aadhaarNumber = event.target.value;
    if (event.target.name == "Pan")
      this.personalInfoRecord.panNumber = event.target.value;
    if (event.target.name == "VoterId") {
      this.personalInfoRecord.voterIdNumber = event.target.value;
    }
    if (event.target.name == "Passport") {
      if (event.target.value != "")
        this.personalInfoRecord.passportNumber = event.target.value;
      else this.personalInfoRecord.passportNumber = "";
    }
    if (event.target.name == "picture")
      this.personalInfoRecord.image = event.target.value;
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
    console.log("Name is---" + this.personalInfoRecord.Name);
    console.log("mother Name---" + this.personalInfoRecord.motherName);
    console.log("father Name----" + this.personalInfoRecord.fatherName);
    console.log("present Address----" + this.personalInfoRecord.presentAddress);
    console.log(
      "present Address----" + this.personalInfoRecord.permananentAddress
    );
    console.log("Email is---" + this.personalInfoRecord.email);
    console.log("contact Number---" + this.personalInfoRecord.contactNumber);
    console.log(
      "alt Contact Number----" + this.personalInfoRecord.altContactNumber
    );
    console.log("whatsapp Number----" + this.personalInfoRecord.whatsappNumber);
    console.log(
      "parentContactNumber----" + this.personalInfoRecord.parentContactNumber
    );
    console.log("gender is---" + this.personalInfoRecord.gender);
    console.log("DOB---" + this.personalInfoRecord.dateOfBirth);
    console.log("blood Group----" + this.personalInfoRecord.bloodGroup);
    console.log("religion----" + this.personalInfoRecord.religion);
    console.log("aadhaar Number is---" + this.personalInfoRecord.aadhaarNumber);
    console.log("pan Number---" + this.personalInfoRecord.panNumber);
    console.log("voter Id Number----" + this.personalInfoRecord.voterIdNumber);
    console.log("passport Number----" + this.personalInfoRecord.passportNumber);
    console.log("image----" + this.personalInfoRecord.image);
    console.log(
      "Entered record-----" + JSON.stringify(this.personalInfoRecord)
    );
    if (this.personalInfoRecord) {
      personalInfo({ wrapRecord: JSON.stringify(this.personalInfoRecord) })
        .then((result) => {
          console.log("Result:" + JSON.stringify(result));
          this.recordId = result;
          const showSuccess = new ShowToastEvent({
            title: "Success", 
            message: "New Candidate details were successfully entered",
            variant: "Success",
          });
          this.dispatchEvent(showSuccess);
          
          console.log("Result:" + JSON.stringify(this.personalInfoRecord));
          if (this.recordId) {
            this.isRecordIdAvailable = true;
          }
        })
        .catch((error) => {
          console.log("Error----" + JSON.stringify(error.message));
        });
    } else {
      const showFailure = new ShowToastEvent({
        title: "Failure",
        message: "Please enter all the details correctly!!",
        variant: "Failed",
      });
      this.dispatchEvent(showFailure);
    }
  }
}