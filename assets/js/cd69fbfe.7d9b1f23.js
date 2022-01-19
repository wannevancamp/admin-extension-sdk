"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8993],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1539:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Settings Item",d={unversionedId:"guide/api-reference/ui/settingsItem",id:"guide/api-reference/ui/settingsItem",isDocsHomePage:!1,title:"Settings Item",description:"Add settings item",source:"@site/docs/guide/2_api-reference/ui/settingsItem.md",sourceDirName:"guide/2_api-reference/ui",slug:"/guide/api-reference/ui/settingsItem",permalink:"/admin-extension-sdk/docs/guide/api-reference/ui/settingsItem",tags:[],version:"current",frontMatter:{},sidebar:"Guide",previous:{title:"Modals",permalink:"/admin-extension-sdk/docs/guide/api-reference/ui/modals"},next:{title:"Tabs",permalink:"/admin-extension-sdk/docs/guide/api-reference/ui/tabs"}},p=[{value:"Add settings item",id:"add-settings-item",children:[{value:"Usage:",id:"usage",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4}],level:3},{value:"Getting the right icon",id:"getting-the-right-icon",children:[{value:"Example",id:"example",children:[],level:4}],level:3}],c={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"settings-item"},"Settings Item"),(0,i.kt)("h3",{id:"add-settings-item"},"Add settings item"),(0,i.kt)("p",null,"Add a new settings item to the Shopware settings. The content of the settings item module is determined by your ",(0,i.kt)("inlineCode",{parentName:"p"},"locationId"),".\nA specific view or a set of actions can be triggered based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"locationId"),"."),(0,i.kt)("h4",{id:"usage"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"ui.settings.addSettingsItem({\n    label: 'App Settings',\n    locationId: 'settings-location-id',\n    icon: 'default-object-books',\n    displaySearchBar: true,\n    tab: 'plugins',\n});\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"label")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The label of the tab bar item")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"locationId")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The id for the content of the settings item module")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"icon")),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The icon to display in your settings item")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"displaySearchBar")),(0,i.kt)("td",{parentName:"tr",align:"left"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"true"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggles the sw-page search bar on/off")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tab")),(0,i.kt)("td",{parentName:"tr",align:"left"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"'plugins'"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Determines in which tab your settings item will be displayed")))),(0,i.kt)("h3",{id:"getting-the-right-icon"},"Getting the right icon"),(0,i.kt)("p",null,"Assuming that your editor supports TypeScript, you should get auto-completion for valid ",(0,i.kt)("inlineCode",{parentName:"p"},"icon")," values.\nIn case that doesn't work take a look at the list ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shopware/admin-extension-sdk/blob/main/src/icons.ts"},"here"),"."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Settings item example",src:n(9598).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// General commands\nif (location.is(location.MAIN_HIDDEN)) {\n    // Add the settings item to the plugins tab\n    ui.settings.addSettingsItem({\n        label: 'App Settings',\n        locationId: 'settings-location-id',\n        icon: 'default-object-books',\n        displaySearchBar: true,\n        tab: 'plugins',\n    });\n}\n\n// Render your custom view\nif (location.is('settings-location-id')) {\n    document.body.innerHTML = '<h1 style=\"text-align: center\">Hello from your settings item</h1>';\n}\n")))}m.isMDXComponent=!0},9598:function(e,t,n){t.Z=n.p+"assets/images/add-settings-item-example-49d1f84686010d731ac38e02c9be2c6c.png"}}]);