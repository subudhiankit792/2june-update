import { NavigationMixin } from 'lightning/navigation';
import { LightningElement , track, api } from 'lwc';
import hsc from '@salesforce/apex/NewCandidateDetails.hsc';
import {showToastEvent} from 'lightning/platformShowToastEvent';

export default class HSC extends NavigationMixin (LightningElement) {
    @api recordId;
    @track isRecordIdAvailable = false;
    connectedCallback() {
    // Fetch or set the recordId
    console.log('recorId---->',this.recordId);
   }
   @track hscRecord={
        stateofHSCcollege: "",
        stateofHSCboard: "",
        nameofHSCboard: "",
        nameofHSCcollege: "",
        citydistrictofHSCcollege: "",
        periodfromtooHSC: "",
        percentagecgpaHSC: "",
        datemonthyearofpassingHSC: ""
       }

    stateOptions = [
                {label: 'Andhra Pradesh' , value: 'Andhra Pradesh'},
                {label: 'Arunachal Pradesh', value: 'Arunachal Pradesh'},
                {label: 'Assam', value:'Assam'},
                {label: 'Bihar',value: 'Bihar'},
                {label: 'Chhattisgarh',value: 'Chhattisgarh'},
                {label:'Goa',value:'Goa'},
                {label:'Gujarat', value:'Gujarat'},
                {label:'Haryana',value:'Haryana'},
                {label:'Himachal Pradesh',value:'Himachal Pradesh'},
                {label:'Jharkhand',value:'Jharkhand'},
                {label:'Karnataka',value:'Karnataka'},
                {label:'Kerala',value:'Kerala'},
                {label:'Madhya Pradesh',value:'Madhya Pradesh'},
                {label:'Maharashtra',value:'Maharashtra'},
                {label:'Manipur',value:'Manipur'},
                {label:'Meghalaya',value:'Meghalaya'},
                {label:'Mizoram',value:'Mizoram'},
                {label:'Nagaland',value:'Nagaland'},
                {label:'Odisha',value:'Odisha'},
                {label:'Punjab',value:'Punjab'},
                {label:'Rajasthan',value:'Rajasthan'},
                {label:'Sikkim',value:'Sikkim'},
                {label:'Tamil Nadu',value:'Tamil Nadu'},
                {label:'Telangana',value:'Telangana'},
                {label:'Tripura',value:'Tripura'},
                {label:'Uttar Pradesh',value:'Uttar Pradesh'},
                {label:'Uttarakhand',value:'Uttarakhand'},
                {label:'West Bengal',value:'West Bengal'}
             ];
    boardOptions = [
        {label:'Board of Intermediate Education, Andhra Pradesh (BIEAP)' , 
                                value:'Board of Intermediate Education, Andhra Pradesh (BIEAP)'},
        {label:'Directorate of School Education, Arunachal Pradesh',
                                value:'Directorate of School Education, Arunachal Pradesh'},
        {label:'Assam Higher Secondary Education Council (AHSEC)',
                            value:'Assam Higher Secondary Education Council (AHSEC)'},
        {label:'Bihar School Examination Board (BSEB)',
                            value:'Bihar School Examination Board (BSEB)'},
        {label:'Chhattisgarh Board of Secondary Education (CGBSE)',
                            value:'Chhattisgarh Board of Secondary Education (CGBSE)'},
        {label:'Central Board of Secondary Education (CBSE) Delhi',
                            value:'Central Board of Secondary Education (CBSE) Delhi'},
        {label:'Goa Board of Secondary and Higher Secondary Education (GBSHSE)',
                            value:'Goa Board of Secondary and Higher Secondary Education (GBSHSE)'},
        {label:'Gujarat Secondary and Higher Secondary Education Board (GSEB)',
                            value:'Gujarat Secondary and Higher Secondary Education Board (GSEB)'},
        {label:'Board of School Education Haryana (BSEH)',
                            value:'Board of School Education Haryana (BSEH)'},  
        {label:'Himachal Pradesh Board of School Education (HPBOSE)',
                            value:'Himachal Pradesh Board of School Education (HPBOSE)'},
        {label:'Jharkhand Academic Council (JAC)',
                            value:'Jharkhand Academic Council (JAC)'},
        {label:'Department of Pre-University Education, Karnataka (PUE Karnataka)',
                            value:'Department of Pre-University Education, Karnataka (PUE Karnataka)'},
        {label:'Kerala Board of Higher Secondary Education (KBHSE)',
                            value:'Kerala Board of Higher Secondary Education (KBHSE)'},
        {label:'Board of Secondary Education, Madhya Pradesh (MPBSE)',
                            value:'Board of Secondary Education, Madhya Pradesh (MPBSE)'},
        {label:'Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)',
                            value:'Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)'},
        {label:'Council of Higher Secondary Education, Manipur (COHSEM)',
                            value:'Council of Higher Secondary Education, Manipur (COHSEM)'},
        {label:'Meghalaya Board of School Education (MBOSE)',
                            value:'Meghalaya Board of School Education (MBOSE)'},
        {label:'Mizoram Board of School Education (MBSE)',
                            value:'Mizoram Board of School Education (MBSE)'},
        {label:'Nagaland Board of School Education (NBSE)',
                            value:'Nagaland Board of School Education (NBSE)'},
        {label:'Council of Higher Secondary Education, Odisha (CHSE Odisha)',
                            value:'Council of Higher Secondary Education, Odisha (CHSE Odisha)'},
        {label:'Punjab School Education Board (PSEB)',
                            value:'Punjab School Education Board (PSEB)'},
        {label:'Board of Secondary Education, Rajasthan (RBSE)',
                            value:'Board of Secondary Education, Rajasthan (RBSE)'},
        {label:'Sikkim Board of Secondary Education',
                            value:'Sikkim Board of Secondary Education'},
        {label:'Tamil Nadu State Board of School Examination (TN HSC)',
                            value:'Tamil Nadu State Board of School Examination (TN HSC)'},
        {label:'Board of Intermediate Education, Telangana (TSBIE)',
                            value:'Board of Intermediate Education, Telangana (TSBIE)'},
        {label:'Tripura Board of Secondary Education (TBSE)',
                            value:'Tripura Board of Secondary Education (TBSE)'},
        {label:'Board of High School and Intermediate Education Uttar Pradesh (UPMSP)',
                            value:'Board of High School and Intermediate Education Uttar Pradesh (UPMSP)'},
        {label:'Uttarakhand Board of School Education (UBSE)',
                            value:'Uttarakhand Board of School Education (UBSE)'},
        {label:'West Bengal Council of Higher Secondary Education (WBCHSE)',
                            value:'West Bengal Council of Higher Secondary Education (WBCHSE)'}
    ];
    handleInputChange(event)
    {
        if(event.target.name == 'stateofHSCcollege')
            {
            this.hscRecord.stateofHSCcollege = event.target.value;
            console.log('stateofHSCcollege--->' , this.hscRecord.stateofHSCcollege);
            }
        if(event.target.name=='stateofHSCboard')
            this.hscRecord.stateofHSCboard = event.target.value;
        if(event.target.name=='nameofHSCboard')
            this.hscRecord.nameofHSCboard = event.target.value;
        if(event.target.name=='nameofHSCcollege')
            this.hscRecord.nameofHSCcollege = event.target.value;
        if(event.target.name=='citydistrictofHSCcollege')
            this.hscRecord.citydistrictofHSCcollege = event.target.value;
        if(event.target.name=='periodfromtooHSC')
            this.hscRecord.periodfromtooHSC = event.target.value;
        if(event.target.name=='percentagecgpaHSC')
            this.hscRecord.percentagecgpaHSC = event.target.value;
        if(event.target.name=='datemonthyearofpassingHSC')
            this.hscRecord.datemonthyearofpassingHSC = event.target.value;
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
            console.log('state of HSC college is---' + this.hscRecord.stateofHSCcollege);
            console.log('state of HSC board---' + this.hscRecord.stateofHSCboard);
            console.log('state of HSC board----' + this.hscRecord.stateofHSCboard);
            console.log('name of HSC college----' + this.hscRecord.nameofHSCcollege);
            console.log('city district of HSC college----' + this.hscRecord.citydistrictofHSCcollege);
            console.log('period from too HSC---' + this.hscRecord.periodfromtooHSC);
            console.log('percentage cgpa HSC---' + this.hscRecord.percentagecgpaHSC);
            console.log('date month year of passing HSC----' + this.hscRecord.datemonthyearofpassingHSC);
            console.log('Entered record-----' + JSON.stringify(this.hscRecord));
            if (this.hscRecord) {
                hsc({ wrapRecord: JSON.stringify(this.hscRecord) })
                        .then(result => {
                            console.log('Result:' + JSON.stringify(result));
                           // this.recordId = result;
                            this.isRecordIdAvailable = true;
                              this.dispatchEvent(new ShowToastEvent({
                                    title: 'Success',
                                    message: 'hsc details were successfully entered',
                                    variant: 'Success',
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
                    title: 'Failure',
                    message: 'Please enter all the details correctly!!',
                    variant: 'Failed',
              })
            );
        }
    }
}