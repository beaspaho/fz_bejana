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
define(['../accUtils', '../appController', 'ojs/ojcore', "ojs/ojbootstrap", "ojs/ojmutablearraydataprovider", 'knockout', 'ojs/ojarraydataprovider', "ojs/ojbufferingdataprovider", 'jquery', "exports", "ojs/ojcorerouter", "ojs/ojknockoutrouteradapter", "ojs/ojurlparamadapter", 'ojs/ojknockout', 'ojs/ojcollectiontabledatasource', 'ojs/ojformlayout', 'ojs/ojinputtext',
    'ojs/ojinputtext', 'ojs/ojbutton', "ojs/ojpopup", "ojs/ojmessagebanner", 'ojs/ojtable', 'ojs/ojlabel', 'ojs/ojvalidationgroup',
    'ojs/ojvalidation-number', 'ojs/ojarraytabledatasource', "ojs/ojnavigationlist"
  ],
  function (accUtils, app, oj, ojbootstrap_1, MutableArrayDataProvider, ko, ArrayDataProvider, BufferingDataProvider, $, exports, CoreRouter, KnockoutRouterAdapter, UrlParamAdapter) {
    function AboutViewModel() {
  
      var self = this;
  
      



      self.inputUserName = ko.observable();
      self.inputPassword = ko.observable();
      self.groupValid = ko.observable();


      const initialPersonalSectionData = [];
      this.closePersonalInformationMessage = (event) => {
          // remove the message from the data to close it
          let data = this.personalInformationMessages.data.slice();
          const closeMessageKey = event.detail.key;
          data = data.filter((message) => message.id !== closeMessageKey);
          this.personalInformationMessages.data = data;
      };


      app.test2();

      self.loadData = () => {
      
       
        this.personalInformationMessages.data =null;

        if (self.inputUserName() === 'beardo' && self.inputPassword() === '1234') {


          

          app.test();

        } else {
          self.inputUserName(null);
          self.inputPassword(null);
          let data = this.personalInformationMessages.data.slice();
          data.push({
              id: `message-${++this.counter}`,
              severity: 'error',
              summary: 'Gabim!',
              detail: 'Kredencialet e vendosura jane te gabuara!'
          });
          this.personalInformationMessages.data = data;
  
        
          

        }
      }
      
      this.personalInformationMessages = new MutableArrayDataProvider(initialPersonalSectionData, {
        keyAttributes: 'id'
    });
    this.counter = 0;

     

    }
    return AboutViewModel;
  }
);