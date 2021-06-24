(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[326],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=i,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2367:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],s={title:"AAD Authorization",sidebar_position:2},p=void 0,l={unversionedId:"setup/authorization",id:"setup/authorization",isDocsHomePage:!1,title:"AAD Authorization",description:"The example code is set up to use authorization. For this to work, an App Registration has to be set up in Azure AD.",source:"@site/dotnet/setup/authorization.mdx",sourceDirName:"setup",slug:"/setup/authorization",permalink:"/dotnet/setup/authorization",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/dotnet/setup/authorization.mdx",version:"current",sidebarPosition:2,frontMatter:{title:"AAD Authorization",sidebar_position:2},sidebar:"cra",previous:{title:"GitLab Repository",permalink:"/dotnet/setup/gitlab"},next:{title:".gitlab-ci.yml Overview",permalink:"/dotnet/setup/gitlab-ci"}},u=[{value:"API",id:"api",children:[]},{value:"Add an application scope",id:"add-an-application-scope",children:[]},{value:"Swagger",id:"swagger",children:[{value:"Adding reply URLs",id:"adding-reply-urls",children:[]},{value:"Access API",id:"access-api",children:[]}]}],c={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The example code is set up to use authorization. For this to work, an App Registration has to be set up in Azure AD."),(0,a.kt)("h3",{id:"api"},"API"),(0,a.kt)("p",null,"Head over to ",(0,a.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},"Azure -> Azure Active Directory -> App registrations"),"\nwith your Intility Account, and create a new registration."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New Registration in Azure",src:n(5137).Z}),(0,a.kt)("br",{parentName:"p"}),"\n","Select a fitting name for your project, this name will be presented to the user during consent."),(0,a.kt)("p",null,"Under ",(0,a.kt)("inlineCode",{parentName:"p"},"Supported account types"),", choose either ",(0,a.kt)("inlineCode",{parentName:"p"},"Intility AS only - Single tenant")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Any Azure AD directory - Multitenant"),".\nThis can be changed later, so if you're unsure what to choose, select single tenant."),(0,a.kt)("p",null,"Under ",(0,a.kt)("inlineCode",{parentName:"p"},"Redirect URI"),", select ",(0,a.kt)("inlineCode",{parentName:"p"},"Web")," from the dropdown, and enter ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:5000"),"."),(0,a.kt)("p",null,"Hit the register button, and you will be taken to an overview of your newly created registration."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Finding Client ID",src:n(3768).Z}),(0,a.kt)("br",{parentName:"p"}),"\n","Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Application (Client) ID")," GUID, and paste it into the ",(0,a.kt)("inlineCode",{parentName:"p"},"AzureAd:ClientId")," field in your ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="appsettings.json"',title:'"appsettings.json"'},'{\n  "AzureAd": {\n    "ClientId": "YOUR_CLIENT_ID",\n    ...\n  },\n  ...\n}\n')),(0,a.kt)("h3",{id:"add-an-application-scope"},"Add an application scope"),(0,a.kt)("p",null,"Go to Expose an API in your app registration, and add a scope.\nYou will be prompted to set an Application ID URI.\nUse the suggested one, and hit Save and continue."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add a scope",src:n(1667).Z})),(0,a.kt)("p",null,"Add a scope named ",(0,a.kt)("inlineCode",{parentName:"p"},"user_impersonation"),", that can be consented by ",(0,a.kt)("inlineCode",{parentName:"p"},"Admins and users"),"."),(0,a.kt)("p",null,"You can use the following descriptions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Access API as user\nAllows the app to access the API as the user.\n\nAccess API as you\nAllows the app to acces the API as you.\n")),(0,a.kt)("h2",{id:"swagger"},"Swagger"),(0,a.kt)("p",null,"In addition to creating an App Registration for the API itself, we need to make one for the Swagger client too.\nAgain head over to ",(0,a.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},"Azure -> Azure Active Directory -> App registrations"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New Registration in Azure",src:n(8080).Z}),"  "),(0,a.kt)("p",null,"Use the same name appended with ",(0,a.kt)("inlineCode",{parentName:"p"},"Swagger"),"."),(0,a.kt)("p",null,"Under ",(0,a.kt)("inlineCode",{parentName:"p"},"Redirect URI"),", select ",(0,a.kt)("inlineCode",{parentName:"p"},"Single-page application (SPA)")," and enter ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/oauth2-redirect.html"),"."),(0,a.kt)("p",null,"Hit the register button, and you will be taken to an overview of your newly created registration."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Finding Client ID",src:n(8995).Z}),(0,a.kt)("br",{parentName:"p"}),"\n","Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Application (Client) ID")," GUID, and paste it into the ",(0,a.kt)("inlineCode",{parentName:"p"},"AzureAd:ClientId")," field in your ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="appsettings.json"',title:'"appsettings.json"'},'{\n  "Swagger": {\n    "ClientId": "YOUR_SWAGGER_CLIENT_ID",\n    ...\n  },\n  ...\n}\n')),(0,a.kt)("h3",{id:"adding-reply-urls"},"Adding reply URLs"),(0,a.kt)("p",null,"For each deployment of your app, you'll need to register it. You can do that by going to the Authentication page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Adding Reply URLs",src:n(9244).Z}),(0,a.kt)("br",{parentName:"p"}),"\n","The first reply URLs we need to add are the localhost https URL, and the OpenShift deploy URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://localhost:5001/oauth2-redirect.html\nhttps://{your-project-slug}-dev.apps.int.intility.no/oauth2-redirect.html\n")),(0,a.kt)("p",null,"You can also add more later if you create more environments."),(0,a.kt)("h3",{id:"access-api"},"Access API"),(0,a.kt)("p",null,"To allow Swagger to talk to the API, you need to add API permissions to the Swagger app registration.\nGo to API permissions, and hit Add a permission.\nUnder My APIs, find your API, select the scope(s) and press Add permissions."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add API permission",src:n(4302).Z})))}d.isMDXComponent=!0},1667:function(e,t,n){"use strict";t.Z=n.p+"assets/images/azure-add-scope-1b8457ba1e65c5e9f719f6ce5d8f2509.png"},4302:function(e,t,n){"use strict";t.Z=n.p+"assets/images/azure-api-permissions-3bfc9e8d1623d4e3030cdc7b31ee9872.png"},3768:function(e,t,n){"use strict";t.Z=n.p+"assets/images/azure-clientid-dotnet-a31cd0017a15663e6474390653500747.png"},8995:function(e,t,n){"use strict";t.Z=n.p+"assets/images/azure-clientid-swagger-aeffd261b413bda085518af4de06fb52.png"},5137:function(e,t,n){"use strict";t.Z=n.p+"assets/images/azure-new-dotnet-d9fb3917e0d9dba0f782fba6c7b5d64f.png"},8080:function(e,t,n){"use strict";t.Z=n.p+"assets/images/azure-new-swagger-f585ee6da48bc30d279999fb080ddcb3.png"},9244:function(e,t,n){"use strict";t.Z=n.p+"assets/images/azure-replyurls-swagger-a9471812a200512d52bd05df1f221d87.png"}}]);