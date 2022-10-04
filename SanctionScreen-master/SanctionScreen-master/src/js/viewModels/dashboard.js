/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */


define(['../accUtils', 'ojs/ojcore', 'knockout', 'ojs/ojarraydataprovider', "ojs/ojbufferingdataprovider", 'jquery', 'ojs/ojknockout', 'ojs/ojcollectiontabledatasource', 'ojs/ojformlayout', 'ojs/ojinputtext', 'ojs/ojslider',
    'ojs/ojinputnumber', 'ojs/ojbutton', 'ojs/ojtable', 'ojs/ojlabel', 'ojs/ojvalidationgroup',
    'ojs/ojvalidation-number', 'ojs/ojarraytabledatasource'
  ],
  function (accUtils, oj, ko, ArrayDataProvider, BufferingDataProvider, $) {


    function DashboardViewModel() {



      this.dept = ko.observableArray();
      // this.name = ko.observable();
      // this.percantage = ko.observable();
      // this.similarity = ko.observable();
      var xmlData;

      this.groupValid = ko.observable();
      this.inputNameToCheck = ko.observable();
      this.inputSimilarity = ko.observable();
      this.value = ko.observable(50);
      this.sliderMessages = ko.observableArray([]);
      this.inputNumberOfRecords = ko.observable(1);
      var deptArray = [{
        'id': '11091-HMRC',
        'listName': 'HMRC',
        'name': 'SALAFIST GROUP FOR CALL AND COMBAT',
        'percentage': '92.0',
        'reqName': 'all all'
      }];

      this.deptObservableArray = ko.observableArray(deptArray);
      this.dataprovider = new ArrayDataProvider(this.deptObservableArray, {
        keyAttributes: '@index'
      });
      this.isEmptyTable = ko.computed(function () {
        return this.deptObservableArray().length === 0;
      }, this);


      this.onValueChange = (event) => {
        this.checkNumber(event.detail.value);
      };
      this.checkNumber = (newValue) => {
        let msgs = [];
        let number = newValue;
        if (number == 0) {
          msgs.push({
            summary: "Number out of range",
            detail: "Number needs to be  0 to 100",
            severity: "error",
          });
          this.sliderMessages(msgs);
        }
      };

      // -------------------------------------------------------------------
      var self = this;
      self.dataSource = ko.observable();
      self.data = ko.observableArray();


      self.loadData = function () {
        
        const tracker = document.getElementById("tracker");
        if (tracker.valid !== "valid") {       
          tracker.showMessages();
          tracker.focusOn("@firstInvalidShown");
          return ;
        }
      

        const sanctionReq = {

          nameToCheck: self.inputNameToCheck(),
          minSimilarity: self.value(),
          nrOfRecords: self.inputNumberOfRecords()
        };
        var tempArray = [];
        $.ajax({
          type: "POST",
          url: "http://10.13.12.70:6005/sanction-screening/list/match",
          data: JSON.stringify(sanctionReq),
          headers: {
            "Access-Control-Allow-Origin": "*"
          },

          contentType: "application/json;application/xml; charset=utf-8",
          dataType: "text",
          crossDomain: true,
          success: function (data) {
            console.log("test");
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(data, "text/xml");
            let dataObject = xmlToJson(xmlDoc);
            //Ketu duhet nje kusht qe nese kapet vetem nje elemetn te kthehet si array jo obj          
            this.responseData = dataObject.matchResponse.listMatchEntry;

            console.log(this.responseData);
            if (this.responseData == undefined) {
              console.log('S ka te dhena');
              alert('Ska te dhena');
              var tempArray1 = [];

              self.data(tempArray1);
              self.dataSource(new oj.ArrayTableDataSource(
                self.data, {
                  idAttribute: 'id'
                }
              ));







            } else {
              if (!Array.isArray(this.responseData)) {
                console.log("It is an object");
                $.each(dataObject.matchResponse.listMatchEntry, function () {
                  var tempArray = [];
                  tempArray.push({
                    id: dataObject.matchResponse.listMatchEntry.id,
                    name: dataObject.matchResponse.listMatchEntry.name,
                    listName: dataObject.matchResponse.listMatchEntry.listName,
                    percentage: dataObject.matchResponse.listMatchEntry.percentage,
                    reqName: dataObject.matchResponse.listMatchEntry.reqName
                  });
                });
                this.responseData.id = this.responseData.id['#text'];
                this.responseData.listName = this.responseData.listName['#text'];
                this.responseData.name = this.responseData.name['#text'];
                this.responseData.percentage = this.responseData.percentage['#text'];
                this.responseData.reqName = this.responseData.reqName['#text'];
                tempArray.push({
                  id: this.responseData.id,
                  listName: this.responseData.listName,
                  name: this.responseData.name,
                  percentage: this.responseData.percentage,
                  reqName: this.responseData.reqName
                });
              } else {
                //It is an array
                $.each(dataObject.matchResponse.listMatchEntry, function () {
                  var tempArray = [];
                  tempArray.push({
                    id: dataObject.matchResponse.listMatchEntry.id,
                    name: dataObject.matchResponse.listMatchEntry.name,
                    listName: dataObject.matchResponse.listMatchEntry.listName,
                    percentage: dataObject.matchResponse.listMatchEntry.percentage,
                    reqName: dataObject.matchResponse.listMatchEntry.reqName
                  });
                });
                for (let i = 0; i < this.responseData.length; i++) {
                  this.responseData[i].id = this.responseData[i].id['#text'];
                  this.responseData[i].listName = this.responseData[i].listName['#text'];
                  this.responseData[i].name = this.responseData[i].name['#text'];
                  this.responseData[i].percentage = this.responseData[i].percentage['#text'];
                  this.responseData[i].reqName = this.responseData[i].reqName['#text'];
                  tempArray.push({
                    id: this.responseData[i].id,
                    listName: this.responseData[i].listName,
                    name: this.responseData[i].name,
                    percentage: this.responseData[i].percentage,
                    reqName: this.responseData[i].reqName
                  });
                }

              }
            }
            ////
            self.data(tempArray)
          },
          error: function (errMsg) {}
        });
        //     }
        self.dataSource(new oj.ArrayTableDataSource(
          self.data, {
            idAttribute: 'id'
          }
        ));

        //----------------------------------------------------------

        console.log("1");
        this.responseData = ko.observableArray([]);

        this.dataprovider = new BufferingDataProvider(new ArrayDataProvider(this.responseData, {
          keyAttributes: 'id'
        }));
      }



      function xmlToJson(xml) {

        // Create the return object
        var obj = {};

        if (xml.nodeType == 1) { // element
          // do attributes
          if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType == 3) { // text
          obj = xml.nodeValue;
        }

        // do children
        if (xml.hasChildNodes()) {
          for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof (obj[nodeName]) == "undefined") {
              obj[nodeName] = xmlToJson(item);
            } else {
              if (typeof (obj[nodeName].push) == "undefined") {
                var old = obj[nodeName];
                obj[nodeName] = [];
                obj[nodeName].push(old);
              }
              obj[nodeName].push(xmlToJson(item));
            }
          }
        }
        return obj;
      };

      this.connected = () => {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Dashboard";
        // Implement further logic if needed
      };

  

      


    }
    return DashboardViewModel;
  }
);