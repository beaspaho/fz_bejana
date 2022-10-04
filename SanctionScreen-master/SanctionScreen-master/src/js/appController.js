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
            label: 'Customers',
            iconClass: 'oj-ux-ico-contact-group'
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
      this.navDataProvider = new ArrayDataProvider(navData.slice(1), {
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

      }

      // Footer
      this.footerLinks = [{
          name: 'About Oracle',
          linkId: 'aboutOracle',
          linkTarget: 'http://www.oracle.com/us/corporate/index.html#menu-about'
        },
        {
          name: "Contact Us",
          id: "contactUs",
          linkTarget: "http://www.oracle.com/us/corporate/contact/index.html"
        },
        {
          name: "Legal Notices",
          id: "legalNotices",
          linkTarget: "http://www.oracle.com/us/legal/index.html"
        },
        {
          name: "Terms Of Use",
          id: "termsOfUse",
          linkTarget: "http://www.oracle.com/us/legal/terms/index.html"
        },
        {
          name: "Your Privacy Rights",
          id: "yourPrivacyRights",
          linkTarget: "http://www.oracle.com/us/legal/privacy/index.html"
        },
      ];
    }
    // release the application bootstrap busy state
    Context.getPageContext().getBusyContext().applicationBootstrapComplete();

    return new ControllerViewModel();
  }
);