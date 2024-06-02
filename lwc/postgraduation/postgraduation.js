import { NavigationMixin } from 'lightning/navigation';
import { LightningElement , track , api} from 'lwc';
import postgraduationMethod from '@salesforce/apex/NewCandidateDetails.postgraduation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class postgraduation extends NavigationMixin (LightningElement) {
    @api recordId;
    @track isRecordIdAvailable = false;
     connectedCallback() {
     // Fetch or set the recordId
     console.log('Record Id----->', this.recordId);
    }
    @track postgraduationRecord={
        stateofuniversityPg: "",
        stateofcollegePg: "",
        nameofuniversityPg: "",
        UniversityRollno: "",
        citydistrictofCollege: "",
        nameofPGCollege: "",
        branchorSubject: "",
        electiveSubjects: "",
        percentageCgpa: "",
        datemonthyearofPassing: ""
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
        if(event.target.name == 'stateofuniversityPg')
            {
            this.postgraduationRecord.graduationstateofUniversity = event.target.value;
            console.log('stateofuniversityPg--->' , this.postgraduationRecord.stateofuniversityPg);
            }
        if(event.target.name=='stateofcollegePg'){
             this.postgraduationRecord.stateofcollegePg = event.target.value;
        console.log('stateofcollegePg--->' , this.postgraduationRecord.stateofcollegePg);
            }
        if(event.target.name=='nameofuniversityPg')
            {
            this.postgraduationRecord.nameofuniversityPg = event.target.value;
            console.log('nameofuniversityPg--->' , this.postgraduationRecord.nameofuniversityPg);
             }        
         if(event.target.name=='UniversityRollno')
            {
            this.postgraduationRecord.UniversityRollno = event.target.value;
            console.log('UniversityRollno--->' , this.postgraduationRecord.UniversityRollno);
            }        
        if(event.target.name=='citydistrictofCollege')
            {
            this.postgraduationRecord.citydistrictofCollege = event.target.value;
            console.log('citydistrictofCollege--->' , this.postgraduationRecord.citydistrictofCollege);
            }        
        if(event.target.name=='graduationnameofCollege')
            {
             this.postgraduationRecord.nameofPGCollege = event.target.value;
            console.log('nameofPGCollege--->' , this.postgraduationRecord.nameofPGCollege);
            }
        if(event.target.name=='branchorSubject')
            {
             this.postgraduationRecord.branchorSubject = event.target.value;
            console.log('branchorSubject--->' , this.postgraduationRecord.branchorSubject);
            }        
        if(event.target.name=='electiveSubjects')
            {
            this.postgraduationRecord.electiveSubjects = event.target.value;
            console.log('electiveSubjects--->' , this.postgraduationRecord.electiveSubjects);
            }      
       if(event.target.name=='graduationpercentageCgpa')
            {
            this.postgraduationRecord.percentageCgpa = event.target.value;
            console.log('percentageCgpa--->' , this.postgraduationRecord.percentageCgpa);
            }        
        if(event.target.name=='datemonthyearofPassing')
        {
            this.postgraduationRecord.datemonthyearofPassing = event.target.value;
            console.log('datemonthyearofPassing--->' , this.postgraduationRecord.datemonthyearofPassing);
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
            console.log('state of university Pg---' + this.postgraduationRecord.stateofuniversityPg);
            console.log('state of college Pg---' + this.postgraduationRecord.stateofcollegePg);
            console.log('name of university Pg----' + this.postgraduationRecord.nameofuniversityPg);
            console.log('University Rollno----' + this.postgraduationRecord.UniversityRollno);
            console.log('city district of College----' + this.postgraduationRecord.citydistrictofCollege);
            console.log('name of PG College---' + this.postgraduationRecord.nameofPGCollege);
            console.log('branch or Subject---' + this.postgraduationRecord.branchorSubject);
            console.log('elective Subjects----' + this.postgraduationRecord.electiveSubjects);
            console.log('percentage Cgpa----' + this.postgraduationRecord.percentageCgpa);
            console.log('date month year of Passing----' + this.postgraduationRecord.datemonthyearofPassing);
            console.log('Entered record-----' + JSON.stringify(this.postgraduationRecord));
            if (this.postgraduationRecord) {
                postgraduationMethod({ wrapRecord: JSON.stringify(this.postgraduationRecord) })
                .then(result => {
                    console.log('Result:' + JSON.stringify(result));
                    //this.recordId = result;
                    this.isRecordIdAvailable = true;
                      this.dispatchEvent(new ShowToastEvent({
                            title: 'Success',
                            message: 'postgraduation details were successfully entered',
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