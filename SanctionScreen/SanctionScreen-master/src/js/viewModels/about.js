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
      
      app.test2();
      self.loadData = function () {
        if(self.inputUserName()==='beardo' && self.inputPassword()==='1234'){
        app.test();

        }
        else{
          alert('Te dhenat jane te pasakta');
          self.inputUserName(null);
          self.inputPassword(null);
    
        }
      }
    }
    return AboutViewModel;
  }
);