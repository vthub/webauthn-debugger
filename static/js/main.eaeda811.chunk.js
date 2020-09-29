(this["webpackJsonpwebauthn-debugger"]=this["webpackJsonpwebauthn-debugger"]||[]).push([[0],{131:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(61),i=a.n(s),r=(a(71),a(72),a(64)),c=a.n(r),o=a(22),u=a(62),m=a(33),d=a(32),E=a(12),h=a.n(E),b=a(6),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target.value;n.setState({value:t})},n.componentDidUpdate=function(e,t,a){n.state.value!==t.value&&n.parse(n.state.value),n.state.isEmpty!==t.isEmpty&&n.state.isEmpty&&n.setState({fields:[]})},n.clean=function(){n.setState({isEmpty:!0,fields:[],type:b.b.AUTODETECT})},n.parse=function(e){e&&0!==e.length?(n.setState({isEmpty:!1}),new b.c(e).parse().then((function(e){n.setState({isValid:e.isValid(),fields:e.getFields(),type:e.type()})})).catch((function(e){console.log(e),n.setState({isValid:!1,type:b.b.AUTODETECT})}))):n.clean()},n.setExample=function(e,t){e.preventDefault(),n.setState({value:JSON.stringify(t,null," ")})},n.state={isEmpty:!0,isValid:!0,type:b.b.AUTODETECT,value:"",fields:[]},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h4",{className:"mb-3"},"Input"),l.a.createElement(h.a,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 mb-1"},l.a.createElement(h.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(h.a.Label,null,"Type:"),l.a.createElement(h.a.Control,{as:"select",value:this.state.type,disabled:!0},Object.keys(b.b).map((function(e){return l.a.createElement("option",{key:e},b.b[e])})))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement(h.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(h.a.Label,null,"Payload:"),l.a.createElement(h.a.Control,{as:"textarea",rows:20,value:this.state.value,onChange:this.onChange})))))),l.a.createElement("div",{className:"col-md-6 mb-4"},l.a.createElement("h4",{className:"d-flex justify-content-between align-items-center mb-3"},l.a.createElement("span",null,"Output")),l.a.createElement("ul",{className:"list-group mb-3"},this.state.isEmpty&&l.a.createElement("li",{className:"list-group-item d-flex justify-content-between lh-condensed"},l.a.createElement("div",null,l.a.createElement("h6",{className:"my-0"},"No input available"))),!this.state.isValid&&!this.state.isEmpty&&l.a.createElement("li",{className:"list-group-item d-flex justify-content-between lh-condensed"},l.a.createElement("div",null,l.a.createElement("h6",{className:"my-0"},"Input is not valid"))),this.state.isValid&&this.state.fields.map((function(e,t){return l.a.createElement("li",{key:t,className:"list-group-item d-flex justify-content-between lh-condensed"},l.a.createElement("div",null,l.a.createElement("h6",{className:"my-0"},e.name),l.a.createElement("small",{className:"text-muted"},e.value)))}))),!this.state.isEmpty&&this.state.isValid&&l.a.createElement("button",{type:"submit",className:"btn btn-secondary"},"Copy as JSON"),!this.state.isEmpty&&l.a.createElement("button",{type:"submit",className:"btn btn-warning ml-3",onClick:function(){return e.setState({value:""})}},"Clean"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},"Currently supported types:",l.a.createElement("ul",null,Object.keys(b.b).map((function(e){return b.b[e]!==b.b.AUTODETECT?l.a.createElement("li",{key:e},b.b[e]," - ",l.a.createElement("a",{href:"/#",onClick:function(a){return t.setExample(a,b.a[e])}},"Try now")," "):""}))))))}}]),a}(l.a.Component);var f=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"py-5 text-center"},l.a.createElement("img",{className:"d-block mx-auto mb-4",src:"/logo512.png",alt:"",width:"72",height:"72"}),l.a.createElement("h1",null,"Webauthn Payload Debugger"),l.a.createElement("p",{className:"lead"},"Webauthn (a.k.a. FIDO2) is a protocol to enable authentication using private-public key pairs.")),l.a.createElement(p,null),l.a.createElement("hr",null),l.a.createElement("footer",{className:"my-5 pt-5 text-muted text-center text-small"},l.a.createElement("p",{className:"mb-1"},"Webauthn Debugger"),l.a.createElement("ul",{className:"list-inline"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://github.com/vthub/webauthn-debugger"},"GitHub")),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://github.com/vthub/webauthn-debugger/blob/master/LICENSE"},"License")),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://github.com/vthub/webauthn-debugger/issues"},"Support")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){"use strict";(function(e){a.d(t,"c",(function(){return E})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return u}));var n=a(65),l=a(31),s=a(33),i=a(32),r=a(22),c=a(63),o={AUTODETECT:"Autodetect",GET_ATTESTATION_RESPONSE:"Post Attestation JSON (Authenticator -> Relying Party)"},u={GET_ATTESTATION_RESPONSE:{rawId:"1bDwRDd7k6AqQdojv7AX4lWIEOG0ndZBgkyzNFCB15aGOlrczRD10Seyfjdb7ZNsusrX9KGuUWUzFqm8GqfVsg",response:{attestationObject:"o2NmbXRmcGFja2VkZ2F0dFN0bXSjY2FsZyZjc2lnWEcwRQIhAMARFYy6h0-8F8rbOozJfUMLq_a8nylpdPhIkbbZ30CdAiAQk0EAUrBbtTbPsr-J8mWSAed4ibMaVNUmXzN3fiCMLWN4NWOBWQLBMIICvTCCAaWgAwIBAgIEGKxGwDANBgkqhkiG9w0BAQsFADAuMSwwKgYDVQQDEyNZdWJpY28gVTJGIFJvb3QgQ0EgU2VyaWFsIDQ1NzIwMDYzMTAgFw0xNDA4MDEwMDAwMDBaGA8yMDUwMDkwNDAwMDAwMFowbjELMAkGA1UEBhMCU0UxEjAQBgNVBAoMCVl1YmljbyBBQjEiMCAGA1UECwwZQXV0aGVudGljYXRvciBBdHRlc3RhdGlvbjEnMCUGA1UEAwweWXViaWNvIFUyRiBFRSBTZXJpYWwgNDEzOTQzNDg4MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEeeo7LHxJcBBiIwzSP-tg5SkxcdSD8QC-hZ1rD4OXAwG1Rs3Ubs_K4-PzD4Hp7WK9Jo1MHr03s7y-kqjCrutOOqNsMGowIgYJKwYBBAGCxAoCBBUxLjMuNi4xLjQuMS40MTQ4Mi4xLjcwEwYLKwYBBAGC5RwCAQEEBAMCBSAwIQYLKwYBBAGC5RwBAQQEEgQQy2lIHo_3QDmT7AonKaFUqDAMBgNVHRMBAf8EAjAAMA0GCSqGSIb3DQEBCwUAA4IBAQCXnQOX2GD4LuFdMRx5brr7Ivqn4ITZurTGG7tX8-a0wYpIN7hcPE7b5IND9Nal2bHO2orh_tSRKSFzBY5e4cvda9rAdVfGoOjTaCW6FZ5_ta2M2vgEhoz5Do8fiuoXwBa1XCp61JfIlPtx11PXm5pIS2w3bXI7mY0uHUMGvxAzta74zKXLslaLaSQibSKjWKt9h-SsXy4JGqcVefOlaQlJfXL1Tga6wcO0QTu6Xq-Uw7ZPNPnrpBrLauKDd202RlN4SP7ohL3d9bG6V5hUz_3OusNEBZUn5W3VmPj1ZnFavkMB3RkRMOa58MZAORJT4imAPzrvJ0vtv94_y71C6tZ5aGF1dGhEYXRhWMTwGNfJbZKBJKgvVC6ftVMcpZoMm0xOEZ4YUL9_OTOHaUUAAAFPy2lIHo_3QDmT7AonKaFUqABA1bDwRDd7k6AqQdojv7AX4lWIEOG0ndZBgkyzNFCB15aGOlrczRD10Seyfjdb7ZNsusrX9KGuUWUzFqm8GqfVsqUBAgMmIAEhWCDE0jSbfClWuXLB8NunovBbkxZPs3S0VyoQeBCh1DNl3CJYIKBVJs3EhCjpDut2JrHG6vj_HTqn-xXNqpl4bqa8KEbK",clientDataJSON:"eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoialdBeXhZYWRsVmYzQVpKamxIcXNqWFIyaEU4ZDJ0TERyNEJ2MFJsSVViZyIsIm9yaWdpbiI6Imh0dHBzOi8vY2VydC5maWRvLnN5Z25wYXkuY29tIiwiY3Jvc3NPcmlnaW4iOmZhbHNlLCJleHRyYV9rZXlzX21heV9iZV9hZGRlZF9oZXJlIjoiZG8gbm90IGNvbXBhcmUgY2xpZW50RGF0YUpTT04gYWdhaW5zdCBhIHRlbXBsYXRlLiBTZWUgaHR0cHM6Ly9nb28uZ2wveWFiUGV4In0"},getClientExtensionResults:{},id:"1bDwRDd7k6AqQdojv7AX4lWIEOG0ndZBgkyzNFCB15aGOlrczRD10Seyfjdb7ZNsusrX9KGuUWUzFqm8GqfVsg",type:"public-key"}},m=function(e){return Array.from(e,(function(e){return("0"+(255&e).toString(16)).slice(-2)})).join("").replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/,"$1-$2-$3-$4-$5")},d=function(t){Object(s.a)(n,t);var a=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,i=new Array(s),u=0;u<s;u++)i[u]=arguments[u];return(t=a.call.apply(a,[this].concat(i))).type=function(){return o.GET_ATTESTATION_RESPONSE},t.parse=function(){var a=Object(l.a)(t);return new Promise((function(n,l){try{var s=JSON.parse(t.body),i=e.from(s.response.attestationObject,"base64");c.decodeFirst(i,(function(e,t){console.log(t),a.fields.push({name:"format",value:t.fmt}),a.fields.push({name:"counter",value:new Uint32Array(t.authData.slice(33,37))}),a.fields.push({name:"aaguid",value:m(new Uint32Array(t.authData.slice(37,53)))}),a.valid=!0,n(a)}))}catch(r){t.valid=!1,l(r)}}))},t}return n}((function e(t){var a=this;Object(r.a)(this,e),this.type=function(){},this.parse=function(){},this.isValid=function(){return a.valid},this.getFields=function(){return a.fields},this.body=t,this.fields=[],this.valid=!1})),E=function e(t){var a=this;Object(r.a)(this,e),this.parse=function(){var e,t,l=[],s=Object(n.a)(a.parsers);try{for(s.s();!(t=s.n()).done;)e=t.value,l.push(e.parse())}catch(i){s.e(i)}finally{s.f()}return Promise.any(l).then((function(e){return console.log("Matched parser ".concat(e.type())),e}))},this.parsers=[new d(t)]}}).call(this,a(7).Buffer)},66:function(e,t,a){e.exports=a(131)},71:function(e,t,a){},72:function(e,t,a){},78:function(e,t){},80:function(e,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.eaeda811.chunk.js.map