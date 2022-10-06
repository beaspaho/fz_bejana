/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your application specific code will go here
 */
define(['knockout', 'ojs/ojcontext', 'ojs/ojmodule-element-utils', 'ojs/ojknockouttemplateutils', 'ojs/ojcorerouter', 'ojs/ojmodulerouter-adapter', 'ojs/ojknockoutrouteradapter', 'ojs/ojurlparamadapter', 'ojs/ojresponsiveutils', 'ojs/ojresponsiveknockoututils', 'ojs/ojarraydataprovider',
    'ojs/ojdrawerpopup', 'ojs/ojmodule-element', 'ojs/ojknockout'
  ],
  function (ko, Context, moduleUtils, KnockoutTemplateUtils, CoreRouter, ModuleRouterAdapter, KnockoutRouterAdapter, UrlParamAdapter, ResponsiveUtils, ResponsiveKnockoutUtils, ArrayDataProvider) {

    function ControllerViewModel() {

      this.KnockoutTemplateUtils = KnockoutTemplateUtils;

      // Handle announcements sent when pages change, for Accessibility.
      self.booleanShowNavBar = ko.observable(false);
      this.manner = ko.observable('polite');
      this.message = ko.observable();
      announcementHandler = (event) => {
        this.message(event.detail.message);
        this.manner(event.detail.manner);
      };


      document.getElementById('globalBody').addEventListener('announce', announcementHandler, false);


      // Media queries for repsonsive layouts
      const smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      this.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
      const mdQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
      this.mdScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);

      let navData = [{
          path: '',
          redirect: 'about'
        },
        {
          path: 'about',
          detail: {
            label: 'Log in',
            iconClass: 'oj-ux-ico-information-s'
          }
        },
        {
          path: 'dashboard',
          detail: {
            label: 'Search',
            iconClass: 'oj-ux-ico-bar-chart'
          }
        },
        {
          path: 'incidents',
          detail: {
            label: 'Add',
            iconClass: 'oj-ux-ico-fire'
          }
        },
        {
          path: 'customers',
          detail: {
            label: 'Attach',
            iconClass: 'oj-ux-ico-fire'
          }
        }
       
      ];

      // Router setup
      let router = new CoreRouter(navData, {
        urlAdapter: new UrlParamAdapter()
      });
      router.sync();

      this.moduleAdapter = new ModuleRouterAdapter(router);

      this.selection = new KnockoutRouterAdapter(router);

      // Setup the navDataProvider with the routes, excluding the first redirected
      // route.
      this.navDataProvider = new ArrayDataProvider(navData.slice(2), {
        keyAttributes: "path"
      });

      // Drawer
      self.sideDrawerOn = ko.observable(false);

      // Close drawer on medium and larger screens
      this.mdScreen.subscribe(() => {
        self.sideDrawerOn(false)
      });

      // Called by navigation drawer toggle button and after selection of nav drawer item
      this.toggleDrawer = () => {
        self.sideDrawerOn(!self.sideDrawerOn());
      }

      // Header
      // Application Name used in Branding Area
      this.appName = ko.observable("Sanction Screen");
      // User Info used in Global Navigation area
      this.userLogin = ko.observable("BEARDO TEAM");
      this.test = function () {
        router.go({
          path: 'dashboard'
        });
        self.booleanShowNavBar(true);

      };
      this.test1 = function () {
        router.go({
          path: 'about'
        });

        self.booleanShowNavBar(false);

      };
      this.test2=function(){
        self.booleanShowNavBar(false);
      }
      this.test3=function(){
        self.booleanShowNavBar(true);
      }

      // Footer
      this.footerLinks = [{
          name: 'About Facilization',
          linkId: 'aboutOracle',
          linkTarget: 'https://www.facilization.com/en/about-us/'
        },
        {
          name: "Contact Us",
          id: "contactUs",
          linkTarget: "https://www.facilization.com/en/contact/"
        },
        {
          name: "Solutions",
          id: "legalNotices",
          linkTarget: "https://www.facilization.com/en/solutions-facilizations/"
        },
        {
          name: "Products",
          id: "termsOfUse",
          linkTarget: "https://www.facilization.com/en/products/"
        },
        {
          name: "Services",
          id: "yourPrivacyRights",
          linkTarget: "https://www.facilization.com/en/services/"
        },
      ];
    }
    // release the application bootstrap busy state
    Context.getPageContext().getBusyContext().applicationBootstrapComplete();

    return new ControllerViewModel();
  }
);