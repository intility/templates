"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1448],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,r[1]=p;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1614:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],p={title:"Azure configuration",sidebar_position:1},s=void 0,l={unversionedId:"setup/authorization",id:"setup/authorization",title:"Azure configuration",description:"We'll need to create two application registrations for Azure AD authentication to cover both direct API",source:"@site/fastapi/setup/authorization.mdx",sourceDirName:"setup",slug:"/setup/authorization",permalink:"/fastapi/setup/authorization",draft:!1,editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/fastapi/setup/authorization.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Azure configuration",sidebar_position:1},sidebar:"python",previous:{title:"Included Dependencies",permalink:"/fastapi/getting-started/included-dependencies"},next:{title:"Docker-compose",permalink:"/fastapi/setup/docker-compose"}},c={},u=[{value:"Backend API",id:"backend-api",level:2},{value:"Step 1 - Create app registration",id:"step-1---create-app-registration",level:3},{value:"Step 2 - Change token version to <code>v2</code>",id:"step-2---change-token-version-to-v2",level:3},{value:"Step 3 - Note down your application IDs",id:"step-3---note-down-your-application-ids",level:3},{value:"Step 4 - Add an application scope",id:"step-4---add-an-application-scope",level:3},{value:"OpenAPI Documentation",id:"openapi-documentation",level:2},{value:"Step 1 - Create app registration",id:"step-1---create-app-registration-1",level:3},{value:"Step 2 - Change token version to <code>v2</code>",id:"step-2---change-token-version-to-v2-1",level:3},{value:"Step 3 - Note down your application IDs",id:"step-3---note-down-your-application-ids-1",level:3},{value:"Step 4 - Allow OpenAPI to talk to the backend",id:"step-4---allow-openapi-to-talk-to-the-backend",level:3},{value:"Step 5 - Decide whether guest users should be allowed to access your application",id:"step-5---decide-whether-guest-users-should-be-allowed-to-access-your-application",level:3}],d={toc:u};function h(e){var t=e.components,p=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We'll need to create two application registrations for Azure AD authentication to cover both direct API\nuse and usage from the OpenAPI (swagger) documentation."),(0,o.kt)("p",null,"We'll start with the API."),(0,o.kt)("h2",{id:"backend-api"},"Backend API"),(0,o.kt)("h3",{id:"step-1---create-app-registration"},"Step 1 - Create app registration"),(0,o.kt)("p",null,"Head over to\n",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},"Azure -> Azure Active Directory -> App registrations"),",\nand create a new registration."),(0,o.kt)("p",null,"Select a fitting name for your project; Azure will present the name to the user during consent."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Supported account types"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Single tenant")," -  If you want to create a multi-tenant application, you\nshould head over to the ",(0,o.kt)("a",{parentName:"li",href:"https://intility.github.io/fastapi-azure-auth/multi-tenant/azure_setup"},"official documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Redirect URI"),": Leave blank.")),(0,o.kt)("p",null,"Press ",(0,o.kt)("strong",{parentName:"p"},"Register")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1_application_registration",src:n(1199).Z,width:"884",height:"576"})),(0,o.kt)("h3",{id:"step-2---change-token-version-to-v2"},"Step 2 - Change token version to ",(0,o.kt)("inlineCode",{parentName:"h3"},"v2")),(0,o.kt)("p",null,"First we'll change the token version to version 2. In the left menu bar, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Manifest")," and find the line\nthat says ",(0,o.kt)("inlineCode",{parentName:"p"},"accessTokenAcceptedVersion"),". Change its value from ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,o.kt)("p",null,"Press ",(0,o.kt)("strong",{parentName:"p"},"Save")),(0,o.kt)("p",null,"(This change can take some time to happen, which is why we do this first.)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"2_manifest",src:n(9327).Z,width:"806",height:"509"})),(0,o.kt)("h3",{id:"step-3---note-down-your-application-ids"},"Step 3 - Note down your application IDs"),(0,o.kt)("p",null,"Go back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Overview"),", found in the left menu."),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application (Client) ID")," place it in your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env" {2}',title:'".env"',"{2}":!0},"TENANT_ID=9b5ff18e-53c0-45a2-8bc2-9c0c8f60b2c6\nAPP_CLIENT_ID=\nOPENAPI_CLIENT_ID=\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3_overview",src:n(9278).Z,width:"934",height:"344"})),(0,o.kt)("h3",{id:"step-4---add-an-application-scope"},"Step 4 - Add an application scope"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Expose an API")," in the left menu bar under your app registration."),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("strong",{parentName:"li"},"+ Add a scope")),(0,o.kt)("li",{parentName:"ol"},"You'll be prompted to set an Application ID URI, leave the suggested one and press ",(0,o.kt)("strong",{parentName:"li"},"Save and continue"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"4_add_scope",src:n(5840).Z,width:"1210",height:"899"})),(0,o.kt)("p",null,"Add a scope named ",(0,o.kt)("inlineCode",{parentName:"p"},"user_impersonation")," that can be consented by ",(0,o.kt)("inlineCode",{parentName:"p"},"Admins and users"),"."),(0,o.kt)("p",null,"You can use the following descriptions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Access API as user\nAllows the app to access the API as the user.\n\nAccess API as you\nAllows the app to access the API as you.\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"5_add_scope_props",src:n(6931).Z,width:"577",height:"728"})),(0,o.kt)("h2",{id:"openapi-documentation"},"OpenAPI Documentation"),(0,o.kt)("p",null,"Our OpenAPI documentation will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization Code Grant Flow, with Proof Key for Code Exchange")," flow.\nIt's a flow that enables a user of a Single-Page Application to safely log in, consent to permissions and fetch an ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token"),"\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT")," format. When the user clicks ",(0,o.kt)("inlineCode",{parentName:"p"},"Try out")," on the APIs, the ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," is attached to the header as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Bearer ")," token.\nThis is the token the backend will validate."),(0,o.kt)("p",null,"So, let's set it up!"),(0,o.kt)("h3",{id:"step-1---create-app-registration-1"},"Step 1 - Create app registration"),(0,o.kt)("p",null,"Just like in the previous chapter, we have to create an application registration for our OpenAPI."),(0,o.kt)("p",null,"Head over to\n",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps"},"Azure -> Azure Active Directory -> App registrations"),",\nand create a new registration."),(0,o.kt)("p",null,"Use the same name, but with ",(0,o.kt)("inlineCode",{parentName:"p"},"- OpenAPI")," appended to it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Supported account types"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Single tenant")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Redirect URI"),": Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Single-Page Application (SPA)")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8000/oauth2-redirect")," as a value")),(0,o.kt)("p",null,"Press ",(0,o.kt)("strong",{parentName:"p"},"Register")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"6_application_registration_openapi",src:n(2115).Z,width:"882",height:"650"})),(0,o.kt)("h3",{id:"step-2---change-token-version-to-v2-1"},"Step 2 - Change token version to ",(0,o.kt)("inlineCode",{parentName:"h3"},"v2")),(0,o.kt)("p",null,"Like last time, we'll change the token version to version 2. In the left menu bar, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Manifest")," and find the line\nthat says ",(0,o.kt)("inlineCode",{parentName:"p"},"accessTokenAcceptedVersion"),". Change its value from ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,o.kt)("p",null,"Press ",(0,o.kt)("strong",{parentName:"p"},"Save")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"3_manifest",src:n(9327).Z,width:"806",height:"509"})),(0,o.kt)("h3",{id:"step-3---note-down-your-application-ids-1"},"Step 3 - Note down your application IDs"),(0,o.kt)("p",null,"Go back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Overview"),", found in the left menu."),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application (Client) ID")," and save it as your ",(0,o.kt)("inlineCode",{parentName:"p"},"OPENAPI_CLIENT_ID"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env" {3}',title:'".env"',"{3}":!0},"TENANT_ID=9b5ff18e-53c0-45a2-8bc2-9c0c8f60b2c6\nAPP_CLIENT_ID=\nOPENAPI_CLIENT_ID=\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"7_overview_openapi",src:n(7845).Z,width:"1524",height:"203"})),(0,o.kt)("h3",{id:"step-4---allow-openapi-to-talk-to-the-backend"},"Step 4 - Allow OpenAPI to talk to the backend"),(0,o.kt)("p",null,"To allow OpenAPI to talk to the backend API, you must add API permissions to the OpenAPI app registration.\nIn the left menu, go to ",(0,o.kt)("strong",{parentName:"p"},"API Permissions")," and ",(0,o.kt)("strong",{parentName:"p"},"Add a permission"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"8_api_permissions",src:n(2130).Z,width:"1163",height:"725"})),(0,o.kt)("p",null,"Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"user_impersonation")," scope, and press ",(0,o.kt)("strong",{parentName:"p"},"Add a permission"),"."),(0,o.kt)("p",null,"Your view should now look something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"9_api_permissions_finish",src:n(5227).Z,width:"1037",height:"184"})),(0,o.kt)("p",null,"That's it! With these environment variables, FastAPI has been correctly configured from the template."),(0,o.kt)("h3",{id:"step-5---decide-whether-guest-users-should-be-allowed-to-access-your-application"},"Step 5 - Decide whether guest users should be allowed to access your application"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You will most likely want to deny guest users"),", unless you have a very specific use case."),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com/#blade/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/AllApps/menuId/"},"Azure AD -> Enterprise Applications")," and find your application (you can search by Client ID).\nUnder Properties, enable ",(0,o.kt)("inlineCode",{parentName:"p"},"User assignment required?")," and save."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enable User assignment required",src:n(4986).Z,width:"412",height:"39"})),(0,o.kt)("p",null,"Then, go to Users and groups, and add user/group. Find users or a fitting group and assign it to the role Default Access."),(0,o.kt)("p",null,"Read more about guest users ",(0,o.kt)("a",{parentName:"p",href:"https://intility.github.io/fastapi-azure-auth/usage-and-faq/guest_users"},"here"),"."))}h.isMDXComponent=!0},4986:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZwAAAAnCAYAAAA7O/47AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAodSURBVHhe7Z1tTBXZGcf/az9pTJpUg2E3gYJvmF2aAjUmvoB665JWibK6CfBBtmwrbCSKm2Cz2RTEhhg03RVDIrhdIiZFk24LEbWhelVQSYwLNGWJGgSCSZdA3CZNfPnUbec/9wx37mXmvsDMBS/PL5kw55y598yZezj/8zznZd74nwYEQRAEwWUWqb+CIAiC4CoiOIIgCEJMEMERBEEQYoIIjiAIghATRHAEQRCEmCCCIwiCIMQEmRYtCEJUPHv2DA8fPsTo6CgmJyfx/PlzlSK8TixduhQJCQlISUnBunXrsHz5cpXiHiI4giBEBIWmq6sLw8PDSE9Px6pVq5CYmKg3XMLrBzsK4+PjePLkCQYGBrBy5Urk5OS4KjwiOIIghKW3txcdHR3weDzYsmWLihXiiTt37sDr9SIvLw9ZWVkq1llEcARBCAkbIvaA8/PzdYuG/PPGQ/Re+wYjvWP497f/wff//V6Pf11Y9INF+NGbP0RqVjKyfvkOfvLzdSplYUOLp62tTbdg3ehYiOAIgmALLZv79+9j//79uuvs6Tf/wle1f8PQ/VF1RXywekMK9n36CyS985aKWbjQ1XbhwgVs2LDBcUtHZqkJgmAJx2zoRqNlQ7GhVVOX3xh3YkNYJpaNZVzo8Lfmb87fnnXASURwBEGwhBMEOGZDNxotm6aPWl8711k0sGwsI8u60OFvzt+edcBJxKUmxB337t3DjRs3wKr96tUrLFmyBJs2bcLGjRv1cyE87Nk2Nzfj6NGjevizwj/GpWVjBd1rH1/8tQotbE6ePImSkhLHZq4tYAunC9WZGajuVkEhQpx+bvy+QrSMqeAsePr0qf4PwsaysrISx44dQ11dnX7+4sUL1NTU6NcI4eE6Gw4cE7qZ3BCbzc21OP67JBVSFBbj7K2dSFXBuYBljY1rbRBfpn6Kj/JuYlzF+GFaPa7OscazDrAuOMUMBMeugXCu4YgNOajp60dNtgrOa+bTs3XzuY2hpSgDWZqg6Ud1dOb8pUuXUFBQgN27dwdYMjxn3MGDB/VeuxAeLurkOhvC2WhucLehB/jVNmxWYSAJ7x9Yg8FzVzGiYuYKt8psyaAXXzRNqsD8gnWAdcEpZAxHmD+M3QLK+tGrCVpv32ns6miMWGTpRlu7di2Skvw9ZsbxMGBaRkZGQJxgDXcQMKZAc+qzK/Rdxd9vr8G7hpWTmY509ODaRQY08blVi7MjPD7G+5n6FT5oBenxPIpNguUcrpV5GgnY5S3CW3X1+NKromzor9SsIVpEtlaR87AOsC44hXuC013l76lmVsHvgTH3Ys29dtWL7z6PIqYVndeutCDge4NcO3Z5WsZPtxq6q41rMlDUct6UHnRv2uHP1ybNlGeg+ynC8hufG2O4AlfwCGfytXjLXr/ds7PLy0fY8gbf27Q0J/I19Z6SP0DxlOX0Y6SmqdMIuH79Onbs2KFCPihAPMzwGhGc8HBqrLGDANfZuIXZytlcvhGTyrrZ3FyK7aPtvsZ132Ok/8Fws61HeS3wJ6PhTW3BXT3eWdws83TexodfpOPr31xCv4oJZrypHuceeVClhPZAmhfHKwdVqnuwDji5dZFLgqM1RBXA53pPlcdxGO1Id/UenFl92hfflovOT8zCojWqjcAJprV+gGQV60dryLyp+KvxvafzcKXCJCCWedrfi5mxlkIcGTo89d0n0Kk18mZM9xaQLwlO0xpTr8eXX9C1EZff+JzWCLeyt480HGrT4mty1LXBTH92ofIKX95IcSNfCtYejJRdRPH0SmBL8ISAYAuH8JqXL1+qkDDnGFZOczHeTTGsm/X46dbvcLPhgX4J+gYwgLVaB8UXBJYh0WzxxAOeAlT9dgLnbMZzrtUBu85sh8/mBDJOFeFnfxmwFaj5iosutSGMBvVs2fh7O7SGs0Q1msnboDVHuD11nZZ2wkpoDJJRXGNKz/ZoDbE5H6s8iV28QRea6xGQd3JxmfbdZkz3Ni3f4DRTGQOujaL80/IIh+mzOqHyiqS8keJ8vhSskTL3xtc4c00IjblnyxX5bqJbOVvXTFk3PpZh+1eG20yzdqYq2AM0pN7BCpVWXqiiHcbtMluRWFqo/S/YjeeswJsp6nSKCXzr8qQCs6XrBC4JDgeWyzBCF1BmsEtJ6xGr+KxMrSf8SEVHCHvIhjsmS3c1GdjlGepezKxGir/VdJHZlT86QuXlZnlnk+8YRofSkDqDe4vEcuE1ixcvViHBDu4izG1OCLd/cZW+SUziO0w8VmEdzcLZZ7jNeHyGP/epJF10GNcO1AaN7ziE62W2JAE7Oziec9FidpqVuFiJkLOwDrAuOMUMBIe+9UcYCe55j41q/XFzY+KbzcTBX1SY/fha75euIeVS6e2Lwm3SXYX3OnP9LjXd1WTGLk+7eDPRWBOzYRblj5pQeblZ3tnkq1mxrdE/E47NcBzHDNcOBK8f4DVckyOEhlvWcxdhwr3GYssD/OO2ZuGUr1dhOyYwMbYMKwKH6Rwh9mU24HjOClzxtOJrFcO4zL2TuHLI727rr9TS96YjQ4XdgnWAdcEpZiA4ydiamxY0hqFpQXM9Hud5LMZHzAKVA0+e1vttdmb16lhLo824g40o2sZPv6/uarP15BTOlj80ofIKV17fc+pUvj7752zFbPIlvgkH9paoNRSR/v7+gHU2jDOLC9N6enpEcCKA70fhhp2EG1tyMWQsuVvSjsGte5RLTTum1uasR7kRN1KK9JtNaNDHfZyDZZ3TzTw9BTiwV50rMk6piQLK4tMnEJx6W6W6B+sA64JTzMilllx8EZ/ndeCI7jLxHUdw2jSgzdlLfpdKZ277lD8+u0azSjoqpj5nOxvNiuwPcQj1eE999hPkmiwcuzzt78VMdk07Dg3578vrCbaenGFm5c9ByWGEmKVmTai8QpdXszLK8vC4fo+eFvicwzPzfGcHV0Rznc3ly5cD3Gs8ZxzTuBZHdhsIDy1Dvh+FO0UTbmzJHZbdgS4ys8uMGG4zdWwzxncC46t+7+xCXpaRZY0NmjUzchg7LbScAnM2KM0Xp44O/wQCt+Bvzzrg5Ptx3pCtbWzgdOT8EZTZzGqLPyjMjUhtc9PF5z4UF2N2mrGtDcdsgq0dITzcsaGhoQGlpaX6egyuvo/n/dQoNqVni+RVBRocu2lqakJ5ebkIjvv4puXqU3ttpyHHG/EhOIKzyOsJFh5uvp5ABEfBxYhHOlSA5C0ksSEiOII18gK2hYO8gE0QhDlHXjEd/8grpgVBmDdwTIfvRxkeHtZ7wNzYkRaPkwsDhdhB1xktGk59pgXLCQI5OTmOjtkEI4IjCEJUUHi4ZT13EebGjk7utSXEDnYUuKiT62w49dlNoTEQwREEQRBiglsT6wVBEAQhABEcQRAEISaI4AiCIAgxQQRHEARBiAkiOIIgCEJMEMERBEEQYoIIjiAIghADgP8DYn++TkukSAYAAAAASUVORK5CYII="},1199:function(e,t,n){t.Z=n.p+"assets/images/1_application_registration-c086a93d6601a09c8dfc94227ecce4f0.png"},9327:function(e,t,n){t.Z=n.p+"assets/images/2_manifest-1b8787c29ab4f1141631adc9b0e1f6da.png"},9278:function(e,t,n){t.Z=n.p+"assets/images/3_overview-645be70b19834d6652531701c5589761.png"},5840:function(e,t,n){t.Z=n.p+"assets/images/4_add_scope-b92ca374688a71c50520829f7141e39c.png"},6931:function(e,t,n){t.Z=n.p+"assets/images/5_add_scope_props-5102f17459906ae9347cf18bc2d89b74.png"},2115:function(e,t,n){t.Z=n.p+"assets/images/6_application_registration_openapi-ce91c522a3b2e19f85b410b500aa714d.png"},7845:function(e,t,n){t.Z=n.p+"assets/images/7_overview_openapi-01564c0cdbcd18d11059037f96e177e6.png"},2130:function(e,t,n){t.Z=n.p+"assets/images/8_api_permissions-fe3b2a5164249990612a022c10bdcca5.png"},5227:function(e,t,n){t.Z=n.p+"assets/images/9_api_permissions_finish-48d03b99688420c25d45a2bb31569f34.png"}}]);