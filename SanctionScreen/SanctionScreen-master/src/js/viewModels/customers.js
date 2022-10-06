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





define(["exports", "knockout", "ojs/ojbootstrap", "ojs/ojfilepickerutils", 'jquery',  '../appController',"ojs/ojknockout", "ojs/ojfilepicker", 'ojs/ojvalidationgroup', "ojs/ojbutton"],
  function (exports, ko, ojbootstrap_1, FilePickerUtils, $,app) {


    function CustomerViewModel() {



      app.test3();

      this.groupValid = ko.observable();

      this.fileNames = ko.observableArray([]);
      this.invalidMessage = ko.observable("");
      this.selectListener = (event) => {
        this.invalidMessage("");
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
      };
      this.beforeSelectListener = (event) => {
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
            alert('File shume i madh');
            invalidFiles.push(file.name);
            check = true;
          }
          if (file.size === 0) {
            alert('File nuk mund te jete bosh');
            invalidFiles.push(file.name);
            check = true;

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
            alert("File u ngarkua me sukses");
          } else {
            alert('Format jo i duhur');
           
            invalidFiles.push(file.name);
           
          };
        }

        if (invalidFiles.length === 0) {
          accept(Promise.resolve());
        } else {
          if (invalidFiles.length === 1) {
            messages.push({
              severity: "error",
              summary: "File " +
                invalidFiles[0] +
                " jo i pershtatshme",
            });
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