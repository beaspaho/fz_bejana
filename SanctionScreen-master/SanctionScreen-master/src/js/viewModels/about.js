/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your about ViewModel code goes here
 */
define(['../accUtils', '../appController', 'ojs/ojcore', "ojs/ojbootstrap", 'knockout', 'ojs/ojarraydataprovider', "ojs/ojbufferingdataprovider", 'jquery', "exports", "ojs/ojcorerouter", "ojs/ojknockoutrouteradapter", "ojs/ojurlparamadapter", 'ojs/ojknockout', 'ojs/ojcollectiontabledatasource', 'ojs/ojformlayout', 'ojs/ojinputtext',
    'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojtable', 'ojs/ojlabel', 'ojs/ojvalidationgroup',
    'ojs/ojvalidation-number', 'ojs/ojarraytabledatasource', "ojs/ojnavigationlist"
  ],
  function (accUtils, app, oj, ojbootstrap_1, ko, ArrayDataProvider, BufferingDataProvider, $, exports, CoreRouter, KnockoutRouterAdapter, UrlParamAdapter) {
    function AboutViewModel() {
      var self = this;
      self.inputUserName = ko.observable();
      self.inputPassword = ko.observable();

      self.groupValid = ko.observable();


      self.selection;




      

      // Synchronize the router, causing it to go to its default route


      self.loadData = function () {
        console.log('Brenda Search1');
        console.log(self.inputUserName());
        console.log(self.inputPassword());
        if(self.inputUserName()==='beardo' && self.inputPassword()==='1234'){
        app.test();
        console.log('Brenda Search');
          




        }
        else{
          alert('Te dhenat jane te pasakta');
          self.inputUserName(null);
          self.inputPassword(null);
    
        }
    


      }






    }


    return AboutViewModel;


    (0, ojbootstrap_1.whenDocumentReady)().then(() => {
      ko.applyBindings(new ViewModel(), document.getElementById("routing-container"));
    });

  }

);