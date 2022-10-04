/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
//define(['../accUtils'],
 //function(accUtils) {
   // function CustomerViewModel() {
    


/////////////////////////////////////////////////////////


       
  

define(['knockout', 'ojs/ojbootstrap', 'ojs/ojarraydataprovider', 'ojs/ojcontext', 'ojs/ojknockout', 'ojs/ojinputtext',
    'ojs/ojinputnumber', 'ojs/ojtable','ojs/ojdatetimepicker','ojs/ojformlayout','ojs/ojselectsingle', 'ojs/ojlabel', 
    'ojs/ojchart','ojs/ojvalidationgroup'],
  function (ko, Bootstrap, ArrayDataProvider, Context , maleN=0,
     femaleN=0,
     peopleN=0,
     notSelected=0) {

  
    function CustomerViewModel() {
      var deptArray =[];
   /*    [
      { FirstName: 'klei', LastName: 'Dura', Birthday:'2002-07-13',Gender:'Male',Birthplace:'Athine', Age: 20 },
      { FirstName: 'Ana', LastName: 'Stefani',Gender:'Female' ,Birthday:'1996-07-02', Age: 26 }];
*/
     




      var PieArray=[];


      this.deptObservableArray = ko.observableArray(deptArray);
      this.dataprovider = new ArrayDataProvider(this.deptObservableArray, { keyAttributes: '@index' });
      this.groupValid = ko.observable();
      this.isEmptyTable = ko.computed(function () {
        return this.deptObservableArray().length === 0;
      }, this);



    PieArray=[
     
      {
        "id": 1,
        "series": "Male",
        "group": "Group A",
        "value": maleN
      },
      {
        "id": 2,
        "series": "Female",
        "group": "Group A",
        "value": femaleN
      },
      {
        "id": 3,
        "series": "Not Selected",
        "group": "Group A",
        "value": notSelected
      }

    ];

    
    var ChartData=ko.observableArray(PieArray);
    this.UserPieDataProvider =new ArrayDataProvider(ChartData , {
      keyAttributes: 'id',
  });


      // add to the observableArray
      this.addRow = function () {
        if (this.groupValid() === 'invalidShown') {
          return;
        }
        var dept = {
              FirstName:this.inputFirstName(),
              LastName:this.inputLastName(),
              Birthday:this.inputBirthday(),
              Gender:this.selectGenderValue(),
              Birthplace:this.inputBirthplace(),
              Age:this.inputAge()
            
        }; 
       

        this.deptObservableArray.push(dept);     


if(dept.Gender=='Male'){
  maleN++;
}
if (dept.Gender=='Female'){
  femaleN++;
}
if(dept.Gender!='Male' && dept.Gender!='Female')
  
  {notSelected++;}

        PieArray[0].value=maleN;


        PieArray[1].value=femaleN;
        PieArray[2].value=notSelected;
        
valueCache={}

ChartData(PieArray);     
       // console.log('People:', peopleN);
       // console.log( 'Male:', maleN);


      }.bind(this);
  
      // intialize the observable values in the forms
      this.inputFirstName=ko.observable(null);
      this.inputLastName=ko.observable(null);
      this.inputBirthday=ko.observable(null);
      this.selectGenderValue=ko.observable(null);  
      this.inputBirthplace=ko.observable(null);
      this.inputAge=ko.observable(null);
      this.inputGender=ko.observable(new  ArrayDataProvider([
        {
          value:1,
          label:"Male"
        },
        {
          value:2,
          label:"Female"
        }
       ],{
         keyAttributes:'label',
      }));

      console.log( peopleN);

   
    }


 


   return CustomerViewModel;
  }

  
);
