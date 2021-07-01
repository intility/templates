(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[693],{3905:function(A,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return u}});var t=n(7294);function o(A,e,n){return e in A?Object.defineProperty(A,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[e]=n,A}function a(A,e){var n=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),n.push.apply(n,t)}return n}function r(A){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(A,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(n,e))}))}return A}function i(A,e){if(null==A)return{};var n,t,o=function(A,e){if(null==A)return{};var n,t,o={},a=Object.keys(A);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||(o[n]=A[n]);return o}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(o[n]=A[n])}return o}var p=t.createContext({}),l=function(A){var e=t.useContext(p),n=e;return A&&(n="function"==typeof A?A(e):r(r({},e),A)),n},s=function(A){var e=l(A.components);return t.createElement(p.Provider,{value:e},A.children)},d={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(A,e){var n=A.components,o=A.mdxType,a=A.originalType,p=A.parentName,s=i(A,["components","mdxType","originalType","parentName"]),c=l(n),u=o,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||a;return n?t.createElement(f,r(r({ref:e},s),{},{components:n})):t.createElement(f,r({ref:e},s))}));function u(A,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof A||o){var a=n.length,r=new Array(a);r[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=A,i.mdxType="string"==typeof A?A:o,r[1]=i;for(var l=2;l<a;l++)r[l]=n[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8221:function(A,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var t=n(2122),o=n(9756),a=(n(7294),n(3905)),r=["components"],i={title:"Azure App Config",sidebar_position:3},p={unversionedId:"advanced/azure-app-config",id:"advanced/azure-app-config",isDocsHomePage:!1,title:"Azure App Config",description:"When working on large projects, it can bothersome to share secret and configuration between all developers.",source:"@site/dotnet/advanced/azure-app-config.mdx",sourceDirName:"advanced",slug:"/advanced/azure-app-config",permalink:"/dotnet/advanced/azure-app-config",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/dotnet/advanced/azure-app-config.mdx",version:"current",sidebarPosition:3,frontMatter:{title:"Azure App Config",sidebar_position:3},sidebar:"cra",previous:{title:"Deploy with ArgoCD",permalink:"/dotnet/advanced/deploy-argocd"}},l=[{value:"Create App Configuration",id:"create-app-configuration",children:[]},{value:"Create Key Vault",id:"create-key-vault",children:[]},{value:"Use in development deployment",id:"use-in-development-deployment",children:[]}],s={toc:l};function d(A){var e=A.components,i=(0,o.Z)(A,r);return(0,a.kt)("wrapper",(0,t.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When working on large projects, it can bothersome to share secret and configuration between all developers.\nAzure App Config solves this by hosting this configuration remote, and everyone with access can pull it.\nThe template supports this out of the box, and all it needs is an url to get started."),(0,a.kt)("h2",{id:"create-app-configuration"},"Create App Configuration"),(0,a.kt)("p",null,"In Azure, create an ",(0,a.kt)("inlineCode",{parentName:"p"},"App Configuration"),", and go to it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"App Config Endpoint",src:n(198).Z})),(0,a.kt)("p",null,"Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"endpoint")," URL, and paste it into the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfig")," field in ",(0,a.kt)("inlineCode",{parentName:"p"},"Properties/launchSettings.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Properties/launchSettings.json"',title:'"Properties/launchSettings.json"'},'{\n  "profiles": {\n    "YOUR_PROJECT_NAME": {\n      ...\n      "environmentVariables": {\n        "AppConfig": "MY_APP_CONFIG_ENDPOINT"\n      }\n    }\n    ...\n  }\n}\n')),(0,a.kt)("p",null,"The template is set up to use built-in credentials of your development machine.\nThis means that we need to allow your (or more) accounts to access the App Configuration."),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Access Control (IAM)")," in the sidebar, then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Add role assignment"),".\nSelect ",(0,a.kt)("inlineCode",{parentName:"p"},"App Configuration Data Owner"),", and your own account or a group."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add role assignment",src:n(458).Z})),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you do not have access to add role assignments, you should as someone with the role assignment ",(0,a.kt)("inlineCode",{parentName:"p"},"Owner")," to do it for you."))),(0,a.kt)("p",null,"You can now add Key-values in Configuration manager,\nand they will be applied to your local development environment."),(0,a.kt)("h2",{id:"create-key-vault"},"Create Key Vault"),(0,a.kt)("p",null,"In Azure, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Key Vault"),".\nWhen setting up access policies, allow the same group/users you set up in your App Configuration to Get and List the Keys and Secrets."),(0,a.kt)("p",null,"You can now add Key Vault references in the App Configurations Configuration manager,\nand they will be applied to your local development environment."),(0,a.kt)("h2",{id:"use-in-development-deployment"},"Use in development deployment"),(0,a.kt)("p",null,"Since the config uses your machines credentials to access the App Configuration and Key Vault,\nit won't automatically work with your development deployment."),(0,a.kt)("p",null,"To set this up, we need to grant your App Registration we set up earlier access to the App Configuration and Key Vault."),(0,a.kt)("p",null,"First, give it the ",(0,a.kt)("inlineCode",{parentName:"p"},"App Configuration Data Reader")," role in the App Configuration.",(0,a.kt)("br",{parentName:"p"}),"\n","Then, give it Get and List permissions for Key and Secrets."),(0,a.kt)("p",null,"You also need a client secret for your App Registration,\ncreate one in Azure AD -> App Registrations -> Your App Registration -> Certificates & secrets."),(0,a.kt)("p",null,"Set up the following variables in GitLab CI/CD under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Development")," environment scope"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AppConfig"),": The App Configuration endpoint"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AZURE_CLIENT_ID"),": The App Registration client id"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AZURE_CLIENT_SECRET"),": The client secret you just made"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AZURE_TENANT_ID"),": The tenant id of your App Registration (check in your App Registrations Overview)")),(0,a.kt)("p",null,"Lastly, we need to configure the development deployment to use these variables.\nWe do this by passing the variables we just set up to Helm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml" {17-20}',title:'".gitlab-ci.yml"',"{17-20}":!0},"deploy:dev:\n  ...\n  script:\n    - oc login $OPENSHIFT_SERVER --token=$OPENSHIFT_TOKEN\n    - helm upgrade\n      --install $CI_ENVIRONMENT_SLUG ./Company.WebApplication1/chart\n      --set nameOverride=$CI_PROJECT_NAME\n      --set image.repository=$CI_REGISTRY_IMAGE\n      --set image.tag=$IMAGE_TAG\n      --set registry.url=$CI_REGISTRY\n      --set registry.user=$CI_DEPLOY_USER\n      --set registry.password=$CI_DEPLOY_PASSWORD\n      --set route=$ROUTE\n      --set replicaCount=2\n      --set secrets.Sentry__Dsn=$SENTRY_DSN\n      --set config.ASPNETCORE_ENVIRONMENT=$CI_ENVIRONMENT_NAME\n      --set config.AppConfig=$AppConfig\n      --set config.AZURE_CLIENT_ID=$AZURE_CLIENT_ID\n      --set config.AZURE_CLIENT_SECRET=$AZURE_CLIENT_SECRET\n      --set config.AZURE_TENANT_ID=$AZURE_TENANT_ID\n")),(0,a.kt)("p",null,"The development environment will now be able to connect and use the configuration from the App Registration and Key vault."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Don't worry, even though the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy:prod")," job extends the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy:dev")," job, the variables won't be set, since we only scoped them to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Development")," environment."))))}d.isMDXComponent=!0},458:function(A,e,n){"use strict";e.Z=n.p+"assets/images/azure-app-config-role-1011b48f44c5e6422a9936097cc5e50f.png"},198:function(A,e){"use strict";e.Z="data:image/png;base64,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"}}]);