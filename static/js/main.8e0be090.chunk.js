(this.webpackJsonpchallenge1=this.webpackJsonpchallenge1||[]).push([[0],{135:function(e,t,a){e.exports=a(282)},140:function(e,t,a){},142:function(e,t,a){},281:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(8),i=a.n(l),s=(a(140),a(119)),o=a(133),m=a(41),c=a(42),h=a(48),u=a(43),b=a(49),d=(a(141),a(142),a(7)),y=a.n(d),p=a(286),f=a(287),g=a(13),E=a(285),N=a(102);var v=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.form.validateFields()}},{key:"render",value:function(){var e,t=this.props.form,a=t.getFieldDecorator,n=t.getFieldsError,l=t.getFieldError,i=t.isFieldTouched,s=this.props,o=s.handleChange,m=s.handleDateChange,c=s.handleSubmit,h=s.firstName,u=s.lastName,b=s.hobby,d=i("fName")&&l("fName"),v=i("fName")&&l("fName"),j=i("hobby")&&l("hobby"),O=i("date-picker")&&l("date-picker");return r.a.createElement(p.a,{layout:"inline",onSubmit:c},r.a.createElement(p.a.Item,{validateStatus:d?"error":"",help:d||""},a("fName",{rules:[{required:!0,message:"Please input your First Name!"}]})(r.a.createElement(f.a,{prefix:r.a.createElement(g.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"First Name",name:"firstName",setFieldsValue:h,onChange:o}))),r.a.createElement(p.a.Item,{validateStatus:v?"error":"",help:v||""},a("lName",{rules:[{required:!0,message:"Please input your Last Name!"}]})(r.a.createElement(f.a,{prefix:r.a.createElement(g.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Last Name",name:"lastName",setFieldsValue:u,onChange:o}))),r.a.createElement(p.a.Item,{label:"Birthday",validateStatus:O?"error":"",help:O||""},a("date-picker",{rules:[{required:!0,message:"Please select your date of birth!"}]})(r.a.createElement(E.a,{onChange:m,defaultValue:y()(),showToday:!0}))),r.a.createElement(p.a.Item,{validateStatus:j?"error":"",help:j||""},a("hobby",{rules:[{required:!0,message:"Please input your Hobby!"}]})(r.a.createElement(f.a,{prefix:r.a.createElement(g.a,{type:"customer-service",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Hobby",name:"hobby",setFieldsValue:b,onChange:o}))),r.a.createElement(p.a.Item,null,r.a.createElement(N.a,{type:"primary",htmlType:"submit",disabled:(e=n(),Object.keys(e).some((function(t){return e[t]})))},"Submit")))}}]),t}(r.a.Component),j=p.a.create({name:"horizontal_login"})(v),O=(a(281),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.items;return r.a.createElement("div",null,r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Birthday"),r.a.createElement("th",null,"Age (years)"),r.a.createElement("th",null,"Hobby")),e.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.birthday),r.a.createElement("td",null,e.age),r.a.createElement("td",null,e.hobby))})))))}}]),t}(n.Component)),C=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).handleSubmit=function(t){t.preventDefault();var a=Object(o.a)(e.state.items),n=e.state,r=n.firstName,l=n.lastName,i=n.birthday,s=n.age,m=n.hobby;a.push({firstName:r,lastName:l,birthday:i,age:s,hobby:m}),e.setState({firstName:"",lastName:"",birthday:null,age:"",hobby:"",items:a})},e.handleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(s.a)({},r,n))},e.handleDateChange=function(t,a){var n=y()().diff(a,"years",!1);e.setState({birthday:a,age:n})},e.state={firstName:"",lastName:"",birthday:null,age:"",hobby:"",items:[]},e}return Object(b.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,firstName:this.state.firstName,lastName:this.state.lastName,birthday:this.state.birthday,age:this.state.age,hobby:this.state.hobby,handleDateChange:this.handleDateChange}),r.a.createElement(O,{items:this.state.items}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[135,1,2]]]);
//# sourceMappingURL=main.8e0be090.chunk.js.map