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
define([
  "knockout",
 "ojs/ojarraydataprovider",
  "ojs/ojbufferingdataprovider",
   "ojs/ojformlayout",
  "ojs/ojinputtext",
  "ojs/ojinputtext",
  "ojs/ojdatetimepicker",
 "ojs/ojselectsingle",
"ojs/ojinputnumber",  
  "ojs/ojinputtext",
  "ojs/ojbutton",
  "ojs/ojtable",

  
],
 function(
  ko,
 ArrayDataProvider,
 BufferingDataProvider,
  ) {
    function CustomerViewModel() {
      this.value = ko.observable(" ");
      this.surname = ko.observable(" ");
      this.date = ko.observable(null);
     this.age = ko.observable(0);
      this.country = ko.observable(" ");
      this.gjinia = ko.observable(null);
      this.table = ko.observable();
    
 
      this.InitialVar();
 

 
      this.deptArray = ko.observableArray([]);
  
      this.dataprovider = new BufferingDataProvider(new ArrayDataProvider(this.deptArray));
     
    
    
    
           
        


            this.IonSaveButtonClick = function(){
              let dept = {
                emer: this.value(),
                mbiemer : this.surname(),
                datelindje : this.date(),
                gjinia : this.gjinia(),
                vendlindja : this.country(),
                mosha : this.age()
              };

              this.dataprovider.addItem({
                metadata: { key: dept.emer },
                data: dept
              });
            }
      
     this.button2Text = "Button Text 2";
      this.IonSaveButtonClick = this.IonSaveButtonClick.bind(this);

      

          

     
  
    
    }  CustomerViewModel.prototype.InitialVar = function (){ 
     
       this.inputGenderProvider = new ArrayDataProvider([
         { value: 'f', label: 'femer' },
         { value: 'm', label: 'mashkull'},
       ], {
         keyAttributes: 'value',
     });
     }



         

       
      
        

    


    /*CustomerViewModel.prototype.InitialVar = function (){ 
     
      this.inputGenderProvider = new ArrayDataProvider([
        { value: 1, label: 'femer' },
        { value: 2, label: 'mashkull'},
      ], {
        keyAttributes: 'value',
    });
    }
  

  }


    

  




    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
  
  
   return CustomerViewModel;
});
