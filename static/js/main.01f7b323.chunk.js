(this.webpackJsonpcovidapp=this.webpackJsonpcovidapp||[]).push([[0],{128:function(e,t,a){},130:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},336:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(30),s=a.n(n),r=(a(196),a(197),a(28)),i=a(34),o=a(42),l=a(45),j=a(50),d=(a(128),a(1)),u=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("nav",{children:[Object(d.jsx)("div",{className:"pages",children:Object(d.jsxs)("ul",{className:"nav-links",children:[Object(d.jsx)(j.b,{to:"/Home",children:Object(d.jsx)("li",{children:"Home"})}),Object(d.jsx)(j.b,{to:"/WorldData",children:Object(d.jsx)("li",{children:"Worldwide Data"})}),Object(d.jsx)(j.b,{to:"/USAData",children:Object(d.jsx)("li",{children:"USA Data"})}),Object(d.jsx)(j.b,{to:"/ContactUs",children:Object(d.jsx)("li",{children:"Contact Me"})})]})}),Object(d.jsx)("div",{children:Object(d.jsx)("ul",{children:Object(d.jsx)(j.b,{to:"/Login",children:Object(d.jsx)("li",{className:"logout",children:"Log Out"})})})})]})}}]),a}(c.Component),b=a.p+"static/media/world.9477d7c3.jpg",h=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"home",children:[Object(d.jsx)(u,{}),Object(d.jsx)("h1",{children:"WELCOME TO COVID-19 DATA COLLECTION APP "}),Object(d.jsxs)("div",{className:"parag",children:[Object(d.jsx)("div",{className:"p1",children:Object(d.jsx)("p",{children:"COVID-19 is an infectious disease caused by the SARS-CoV-2 virus, which has impacted the lives of millions of people negatively around the world since 2019. The amount of human and economic losses is significant and incomparable to other pandemics that have affected humanity. As a result, countries around the globe took restrictive measures to reduce the adverse effects. However, these new measures generate new problems, such as increasing poverty and mental health problems."})}),Object(d.jsxs)("div",{className:"p1",children:[Object(d.jsx)("p",{children:'Currently, different vaccines could protect people from SARS-CoV-2, so people\'s lives are returning to the "normality." However, it is essential to let people know how bad the impact of COVID-19 was. Hence, the Data Collection App was born to provide information about this disease\u2019s live cases and historical data. People can use this information to build statistical charts; it will be shared and encourage people to continue taking precautions to end the pandemic.'}),Object(d.jsx)("p",{id:"meg",children:"Stay Safe and Healthy"})]})]}),Object(d.jsx)("div",{className:"rside",children:Object(d.jsx)("img",{src:b,alt:"imag",id:"world"})})]})}}]),a}(c.Component),O=a(13),m=a(185),p=(a(130),a(46)),x=a.n(p),f=a(96),v=function(){var e=Object(c.useContext)(w),t=e.state,a=e.dispatch,n=Object(c.useState)(" "),s=Object(O.a)(n,2),r=s[0],i=s[1],o=function(){var e=Object(f.a)(x.a.mark((function e(t){var c,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona.lmao.ninja/v2/countries/".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,e.abrupt("return",a({type:"FETCH_DATA",payload:n}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"country_info",children:[Object(d.jsx)("h3",{children:"COVID-19 WorldWide Data "}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===r||void 0===r?alert("Nothing to look for"):(o(r).then((function(e){console.log("The results has been fetched")})).catch((function(e){console.log(e)})),e.target.reset())},children:[Object(d.jsx)("input",{className:"inp_country",type:"text",required:!0,name:"name",placeholder:"Enter a country name, Ex. USA",onChange:function(e){return i(e.target.value)}}),Object(d.jsx)("input",{type:"submit",value:"Check",id:"btn2"})]}),Object(d.jsx)("button",{id:"btn1",onClick:function(){return a({type:"REMOVE"})},children:"Clear "}),Object(d.jsx)("div",{children:t.worldata.map((function(e,t){return Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"li_data",children:e.country}),Object(d.jsx)("br",{}),Object(d.jsx)("img",{src:e.countryInfo.flag,alt:"flag"}),Object(d.jsx)("p",{children:"Historical Data"}),Object(d.jsxs)("li",{className:"li_data",children:["Cases:  ",e.cases]}),Object(d.jsxs)("li",{className:"li_data",children:["Deaths:  ",e.deaths]}),Object(d.jsxs)("li",{className:"li_data",children:["Recovered:  ",e.recovered]})]},t)}))})]})},g=a(187),y=a(184),A=function(e){var t=e.onClick;return Object(d.jsx)("div",{className:"mapmarker",onClick:t,children:Object(d.jsx)(y.a,{className:"locationicon"})})},C=function(e){var t=e.info;return Object(d.jsxs)("div",{id:"details",children:[Object(d.jsx)("h6",{children:"Updated information"}),Object(d.jsxs)("ul",{className:"mark_info",children:[Object(d.jsx)("li",{className:"li_mark",children:t.country}),Object(d.jsxs)("li",{className:"li_mark",children:["Today Cases:",t.todaycases]}),Object(d.jsxs)("li",{className:"li_mark",children:["Today Recov:",t.todayrecov]}),Object(d.jsxs)("li",{className:"li_mark",children:["Today Deaths:",t.todaydeaths]})]})]})},N=function(e){var t=e.center,a=e.zoom,n=Object(c.useContext)(w).state,s=Object(c.useState)(""),r=Object(O.a)(s,2),i=r[0],o=r[1],l=n.worldata.map((function(e,t){return Object(d.jsx)(A,{lat:e.countryInfo.lat,lng:e.countryInfo.long,onClick:function(){return o({lat:e.countryInfo.lat,lng:e.countryInfo.long,country:e.country,todaycases:e.todayCases,todayrecov:e.todayRecovered,todaydeaths:e.todayDeaths})}},t)}));return Object(d.jsx)("div",{style:{height:"90%",width:"90%"},id:"map",children:Object(d.jsxs)(g.a,{bootstrapURLKeys:{key:"AIzaSyCsKRTWdedWzFhmR2mCbSLOpKwC8LXIghk"},defaultCenter:t,defaultZoom:a,children:[l,i&&Object(d.jsx)(C,{lat:i.lat,lng:i.lng,info:i})]})})};N.defaultProps={center:{lat:37.09024,lng:-95.712891},zoom:4};var S=N,w=Object(c.createContext)(),k={worldata:[]},E=function(e,t){switch(t.type){case"FETCH_DATA":return{worldata:[].concat(Object(m.a)(e.worldata),[t.payload])};case"REMOVE":return{worldata:[]};default:return e}},D=function(){var e=Object(c.useReducer)(E,k),t=Object(O.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)(w.Provider,{value:{state:a,dispatch:n},children:[Object(d.jsx)(u,{}),Object(d.jsx)(v,{}),Object(d.jsx)(S,{})]})},L=a(18),I=a(84),T=function(e){var t=e.checkLogin,a=Object(c.useState)({email:"",password:""}),n=Object(O.a)(a,2),s=n[0],r=n[1];return Object(d.jsxs)("div",{className:"inner_ctn",children:[Object(d.jsx)("h3",{className:"tittle",children:"COVID-19 DATA COLLECTION"}),Object(d.jsx)("p",{children:"Enter your user, email and password "}),Object(d.jsxs)("form",{className:"loginform",onSubmit:function(e){e.preventDefault(),t(s)},children:[Object(d.jsx)("label",{id:"user_inp",htmlFor:"user",children:"User:"}),Object(d.jsx)("input",{className:"user_inp",type:"text",id:"user",placeholder:"Enter a user name...",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{id:"email_inp",htmlFor:"email",children:"Email:"}),Object(d.jsx)("input",{className:"user_inp",type:"email",id:"email",placeholder:"Enter a email...",onChange:function(e){return r(Object(I.a)(Object(I.a)({},s),{},{email:e.target.value}))},value:s.email,required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{id:"pass_inp",htmlFor:"password",children:"Password:"}),Object(d.jsx)("input",{className:"user_inp",type:"password",id:"password",placeholder:"Enter a  password...",onChange:function(e){return r(Object(I.a)(Object(I.a)({},s),{},{password:e.target.value}))},value:s.password,required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"login",type:"submit",children:"LOGIN"})]})]})},F=(a(204),function(){var e=Object(L.f)(),t=Object(c.useState)({email:"user@gmail.com",password:"User123456"}),a=Object(O.a)(t,1)[0];return Object(d.jsxs)("div",{className:"main_ctn",children:[Object(d.jsx)(T,{checkLogin:function(t){return a.email===t.email&&a.password===t.password?e.push("/Home"):alert("Email and password do not match our records. Please double-check and try again")}})," "]})}),H=(a(205),function(e){var t=e.filterst;return Object(d.jsx)("div",{children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"State"}),Object(d.jsx)("th",{children:"Cases"}),Object(d.jsx)("th",{children:"Recovered"}),Object(d.jsx)("th",{children:"Active"}),Object(d.jsx)("th",{children:"Death"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{id:"state",children:e.state}),Object(d.jsx)("td",{children:e.cases}),Object(d.jsx)("td",{children:e.recovered}),Object(d.jsx)("td",{children:e.active}),Object(d.jsx)("td",{children:e.deaths})]},t)}))})]})})}),R=a(342),P=a(186),q=a(81),X=a(85),W=function(){return Object(d.jsx)("div",{className:"chart",children:Object(d.jsxs)(R.a,{width:730,height:250,children:[Object(d.jsx)(P.a,{dataKey:"value",isAnimationActive:!1,data:[{name:"Cases",value:42895046},{name:"Deaths",value:691864},{name:"Recovered",value:3250217}],cx:"50%",cy:"50%",outerRadius:80,fill:"#8884d8",label:!0}),Object(d.jsx)(q.a,{}),Object(d.jsx)(X.a,{})]})})},Q=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(O.a)(s,2),i=r[0],o=r[1];Object(c.useEffect)((function(){l()}),[]);var l=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona.lmao.ninja/v2/states?sort&yesterday").then((function(e){return e.json()})).then((function(e){return n(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=a.filter((function(e){return""!==i?e.state===i:a}));return Object(d.jsxs)("div",{className:"usadata",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("div",{className:"inner_usa",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{id:"usah1",children:[Object(d.jsx)("span",{children:Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACECAMAAACOGsa+AAACo1BMVEVQN2SyIjQ8O26yIjRgX4lOTXzKytiMjKqMi6nLy9hOTXv9/f1LSnnMzNlMS3r9/f6LiqlPTnz39/n////29vidnbY/PnBvbpTn5+2enbfJydevrsNycpZRUH1zcpeursOGhqVJSHjIyNbHx9WFhaXBwdGUk6/Dw9OEg6NHR3fj4+poaI9paJBHRnaFhKTDwtKVlLDAwNA9PG9eXohZWIRSUX5eXYfltbvExNNKSXiHhqb//v77+/xIR3fGxtXGxdTf3+fz8/by8vXe3ueCgaK5uctDQnNEQ3S6usyBgKFaWYRGRXWAf6F/f6DQ0NxXVoKkpLu+vs+/vs/R0d1/fp/o6O51dZl2dZlmZY1UVIBQT328u828vM75+fpFRHXV1eCcnLbS0t3d3eZubpTVhpDJyNeSka4+PW9nZo6Skq57e517ep27u8yzs8dlZY3d3OV5eJtCQXPs7PFBQHJ6eZxlZIy0tMdubZN8fJ6bmrW3t8q4uMqamrTFxdRAP3GiorrU1N9RUX6iobp0c5h4d5p4eJtBQHF1dJi1tMi2tcju7vKXlrKYl7Lt7fLTgIqrqsCsrMLq6e+VlbHq6vCsq8FdXIbg4OiDgqPg3+hcW4Z3dprNzdqwsMTT09+Pj6zw8PQ+PXDt7fGvr8SOjat9fJ5bWoWjo7tycZZxcJXv7/Nwb5WxscXnu8HW1eChoLmmpr3p6e9oZ46Tk6/T0t6qqsD4+PrCwtJbW4Wcm7Vsa5Jra5Hr6/BrapGIh6aWlrFTUn/a2ePZ2ePASlmmpbz8/P1kY4zm5uzW1uHX1+Hl5eylpLyJiafn5u2CgqKpqb+pqL9+fZ/j4+ufnrefn7iNjKphYYphYIn68fLh4emgoLji4ulqaZDb2+Ta2uRWVYG2tsnv5urjNd4OAAAAAnRSTlP0yeT7k5UAAAZRSURBVHgB7Nz1lxNZAsXx2Ts+g+YyhWcbdwgP1/YunPbGHTJCO+7u7prG3d3dIevLuvwpeyonyau32m/11dn+4HXq/vDFSpAP/hu+Z6QP8F/woZGq0oGPoPr4Y0jqCdoLs9M//gSqTz+D6vMvIGksjE//7MtqUFT/HIoaNWtB0liYnV77Ex/JOl9ZiKpbjyTr1UWUVb8OSV+D2nBoLwxOh9WQZCNIjUmyMSQ/ye/HQzUXJqcjgWQTuDQlm8GlCcnmkLQWRqe3aFmjVWtIbdq2a9+2A6SOnWoEOkPSWpicLrpEPjm6wtGtCdCkm+tAdwF0EQBQrZruAj2M5KQrevaColorqHon6C5AE/X58/QmfZtDkdC3HxT9E3UXXki36tcjWS9RXsMSIwdc17CkZDIltW7lF4anS2kk0zMQZw8gORDSIJIcpLPwSvpgkkPgMpDkYLj0JxP1Fh5JHzpseGYWXLIzh+fkQrLz8gvybJ2F+end4BhhAe1E5DrdAQBEO8Aa4Tph5Chg1EidhfHpHUZDlTYQqjEdIOktzE4fOHYcFC06QzFu7BBIeguD02tnjyc5foK8hk2cRE7KmYwo66vICdnyGqa1mGKkSDp6TSU5LYi4r0lyBOKC35Bs2gsO/YXRjy/fksz4e9cwm+R3kLQWRqdPLywqLoFUWtaxeVk5pBnFM2cNgKS1MDld+IGM2XDUgGN4V6DrcNeB2aWAXwCAbesuDE5XzLKhsGdBNedb3YVH0jN830HxbZ1SKEZP1114Id2am0gycZ68hs2PHFggr2ELq5OfL5xc+YVH0rFoMcklSxHXbTzJZYsQt5wk/ToLj6SjnOQKuKwkuQouU8mmeguPpK/OW5m4Bi5rF67MWw5p0br1GzYu0lg4Nhkpnt4BjoImEGkCAMrLAUS+0aTAdcKgImBEV42F+Y8v5ZuhKsiHanM5JI2F8en5yaugWLsGilXJqyFpLAx/cttSSG4tDMhrWOE8cl6hfPu4rXA7WbhDXsM0FkanY+cukoU2YkRrktyNuHGzSO7ZC4fewvR07CNpwWU/WR0uFskCSBoLw9MPHAxVTIZ0aOPmHYcPQapbETp4BJLGwux0cdRC42Nw2HAcbwQ0Ou46cKwxrKMCABYt0lkYnq44sQiKRYuhOnlKd+GRdOv0GShOnT4ExdkDugucM5KSboUyz5OZF+Q17EImOT4zZCFqcuZF8mLm5MovvHIPX60nyUuXEdfuEslW1RATbEmSV4KVX3glHYf+/Bq2guQhuFwlJ+otPJLe3rd51zW4bN6z+Xo7SMHtN25sDeoszE9fBUfHm7DnCgA4dAgAxC0bN1u7Tti7G9i9V2NhfvqhBVDdvgPVgkOQNBbGp9+5G4Rix2YogmX3IGkszE6v3TJAdg7ct+JZgQfkg8AdRFn3Ay3IQEt5DdNYGJ2O/AqSOQ8Rs+gESS5ehJiHOSQrVsOhtzA9HSUkLbg8Ih/DZZF8+6i/eGKkaPrT7YnPnkMSL16+ei0gzXyWePcNJI2F4U9uT3thxFs4DsGxd5oIfnPTdeBtEXo9jZQFhc7C/HQBQMARinzh+iwEh4idhRFFGgvz0yXxbiYURS8EFE/f6Cy8km7NCf+A28NheQ0Lh+/yh+E5FqJGhHeTu8MjKrHwVjq6JJH0NReIEgk+kkldEDNuLUmuGVeJhcfSYZOcA5cfkbTh8pr8scbCO+ldmOf7CVx+6stjd7jsqahI0lqYny7gOLoaD4/I3/SBIw+R/zPXCYMyF61601VjYX66SIDDcj4JAPj5+8jhyAE4EkTsBFgaC8cvjBRLf/9LAcWFX0Ehfv0RJI2F2ffwH/v9r9jSf8pC1Ed+P+n3x2OtU/4AX/r9H8OhtTA8PbjtGcm89urLRvashpjfXCL5LBCEQ2theDrQmmQTSOI0uVFAakIyDEljYXj6XJJd4fJb8ndwGURyASSNheHp8/ZidwjS8ELbnvV7SKHd2PkHSBoLs9NFKYAMSBn4KwdKBRxai6r/tcAQVelV6X/8LzD0Rpb/r/r8qf16KQAoBGAY9j6iMIQelKACZfjYUgc5Fh0dPSh0dHT0U9vz14aOjo6Ojh4U+q7NvqCjo6OjoyeEvmqzL+jo6Ojo6Amhz9rsCzo6Ojo6ekLoozb7go6Ojo6eEDr6W9sFBFtY4cxcqLgAAAAASUVORK5CYII=",alt:"usaflag",id:"usaflag"})})," COVID-19 USA "]}),Object(d.jsx)(W,{})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("form",{className:"form_usa",children:Object(d.jsx)("input",{className:"state_inp",type:"text",required:!0,name:"state",placeholder:"Enter a state, Ex. California",onChange:function(e){return o(e.target.value)}})}),Object(d.jsx)(H,{filterst:j}),console.log(j)]})]})]})},V=a(183),U=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"sendEmail",value:function(e){e.preventDefault(),V.a.sendForm("gmail","form-contact",e.target,"user_HDGAsK2rBedrtar84PVMu").then((function(){alert("Email sent, awesome!")}),(function(){alert("Oops, something went wrong. Try again")})),e.target.reset()}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"contact",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("div",{className:"div_form",children:[Object(d.jsx)("h4",{children:"Do you have any question or concerns? Feel free to send us a email!"}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{className:"contact_form",onSubmit:this.sendEmail,children:[Object(d.jsx)("label",{children:"Name"}),Object(d.jsx)("input",{type:"text",name:"name",placeholder:"Enter a name...",className:"cont_inp",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Email"}),Object(d.jsx)("input",{type:"email",name:"from_email",placeholder:"Enter a email...",className:"cont_inp",required:!0}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Subject"}),Object(d.jsx)("input",{name:"subject",placeholder:"Write a subject...",className:"cont_inp"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Message"}),Object(d.jsx)("textarea",{name:"message",placeholder:"Write a message...",required:!0,id:"mesg"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"submit",value:"Send",id:"sub_btn"})]})]})]})}}]),a}(c.Component);var B=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(j.a,{children:Object(d.jsxs)(L.c,{children:[Object(d.jsx)(L.a,{path:"/",exact:!0,component:F}),Object(d.jsx)(L.a,{path:"/Login",exact:!0,component:F}),Object(d.jsx)(L.a,{path:"/Home",component:h}),Object(d.jsx)(L.a,{path:"/WorldData",component:D}),Object(d.jsx)(L.a,{path:"/USAData",component:Q}),Object(d.jsx)(L.a,{path:"/ContactUs",component:U})]})})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,343)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};s.a.render(Object(d.jsx)(B,{}),document.getElementById("root")),G()}},[[336,1,2]]]);
//# sourceMappingURL=main.01f7b323.chunk.js.map