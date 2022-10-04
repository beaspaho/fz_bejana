/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your incidents ViewModel code goes here
 */





define(['../accUtils', 'ojs/ojcore', 'knockout', 'ojs/ojarraydataprovider', "ojs/ojbufferingdataprovider", 'jquery', 'ojs/ojknockout', 'ojs/ojcollectiontabledatasource', 'ojs/ojformlayout', 'ojs/ojinputtext', 'ojs/ojslider',
    'ojs/ojinputnumber', 'ojs/ojbutton', 'ojs/ojtable', 'ojs/ojlabel', 'ojs/ojvalidationgroup',
    'ojs/ojvalidation-number', 'ojs/ojarraytabledatasource'
  ],
  function (accUtils, oj, ko, ArrayDataProvider, BufferingDataProvider, $) {
    function IncidentsViewModel() {


      var self = this;
      self.inputNameToAdd = ko.observable();
      self.groupValid = ko.observable();

      var today = new Date();
      var dd = today.getDate();

      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }
      yyyy %= 100;
      today = dd + mm + yyyy;
      console.log(today);



      self.loadData = function () {
  
      
        const tracker = document.getElementById("tracker");
        if (tracker.valid !== "valid") {       
          tracker.showMessages();
          tracker.focusOn("@firstInvalidShown");
          return ;
        }
      
       


        const sanctionReq = {


          id: today + "-MANL",
          name: self.inputNameToAdd(),
          listName: "MANL",
          percentage: 1

        };
        var tempArray = [];
        $.ajax({
          type: "POST",
          url: "http://10.13.12.70:6005/sanction-screening/sanctioned/add",
          data: JSON.stringify(sanctionReq),
          headers: {
            "Access-Control-Allow-Origin": "*"
          },

          contentType: "application/json;application/xml; charset=utf-8",
          dataType: "json",
          crossDomain: true,
          success: function (data) {
            console.log(JSON.stringify(sanctionReq));
            console.log("test");
            // parser = new DOMParser();
            //xmlDoc = parser.parseFromString(data, "text/xml");
            // let dataObject = xmlToJson(xmlDoc);
            //Ketu duhet nje kusht qe nese kapet vetem nje elemetn te kthehet si array jo obj          
            // this.responseData = dataObject.matchResponse.listMatchEntry;
            console.log('1');
            console.log(data);

          }

        });





      }









    }
    return IncidentsViewModel;
  }
);