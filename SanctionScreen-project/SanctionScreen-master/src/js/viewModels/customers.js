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





define(["exports", "knockout", "ojs/ojbootstrap", "ojs/ojfilepickerutils", 'jquery', '../appController', "ojs/ojknockout", "ojs/ojfilepicker", 'ojs/ojvalidationgroup', "ojs/ojbutton", "ojs/ojpopup"],
  function (exports, ko, ojbootstrap_1, FilePickerUtils, $, app) {


    function CustomerViewModel() {



      app.test3();
      this.groupValid = ko.observable();
      var checkErrorMessage=0;
      this.fileNames = ko.observableArray([]);
      this.invalidMessage = ko.observable("");
      this.selectListener = (event) => {
        this.invalidMessage("");
        document.getElementById('valid').style.removeProperty("display");
        const files = event.detail.files;
        this.fileNames(Array.prototype.map.call(files, (file) => {
          return file.name;
        }));
      };
      this.invalidListener = (event) => {
        this.fileNames([]);
        this.invalidMessage("{severity: '" +
          event.detail.messages[0].severity +
          "', summary: '" +
          event.detail.messages[0].summary +
          "'}");
        const promise = event.detail.until;
        if (promise) {
          promise.then(() => {
            this.invalidMessage("");
          });
        }
       document.getElementById('invalid').style.removeProperty("display");
      };
      this.beforeSelectListener = (event) => {
        document.getElementById('valid').style.display="none";
        document.getElementById('invalid').style.display="none";
    
        const accept = event.detail.accept;
        const files = event.detail.files;
       const messages = [];
        let file;
       const invalidFiles = [];
        var check = false;


        //kontrollojm permasat
        for (let i = 0; i < files.length; i++) {
          file = files[i];
          if (file.size > 10000000) {
           
            invalidFiles.push(file.name);
            check = true;
            checkErrorMessage=1;
          }
          if (file.size === 0) {
     
            invalidFiles.push(file.name);
            check = true;
            checkErrorMessage=2;

        
          }
        }

        if (check === false) {
          //kontrollojm formatin
          var j = 0;
          var x = file.name;

          for (j = x.length - 1; j > 0; j--) {

            if (x[j] === '.') {
              break;
            }
          }

          let result = x.substring(j + 1);
          console.log(result);




          if (result === 'xml') {

            this.fileNames(file.name);
           

          } else {
           

            invalidFiles.push(file.name);
            checkErrorMessage=3;

          };
        }

        if (invalidFiles.length === 0) {
          accept(Promise.resolve());
        } else {
          if (invalidFiles.length === 1) {


              if(checkErrorMessage===1){
                messages.push({
                  severity: "error",
                  summary: "File " +
                    invalidFiles[0] +
                    " eshte shume i madh",
                });

              }

              if(checkErrorMessage===2){
                messages.push({
                  severity: "error",
                  summary: "File " +
                    invalidFiles[0] +
                    " eshte bosh",
                });
              }

              if(checkErrorMessage===3){

                messages.push({
                  severity: "error",
                  summary: "File " +
                    invalidFiles[0] +
                    " nuk eshte ne formatin e duhur",
                });
              }
  
          
          } else {
            const fileNames = invalidFiles.join(", ");
            messages.push({
              severity: "error",
              summary: fileNames +
                "jo i pershtatshm.",
            });
          }
          accept(Promise.reject(messages));
          return 0;
        }



        var formData = new FormData();
        console.log(file);
        formData.append('x', $('#file'));
        $.ajax({
          url: 'https://md5.tpondemand.com/api/v1/Attachments/meta',
          type: 'POST',
          data: formData,
          processData: false, // tell jQuery not to process the data
          contentType: false, // tell jQuery not to set contentType
          success: function (data) {
            console.log(data);

          }
        });






      }


     


    };







    return CustomerViewModel;
  }


);