(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{8164:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/campaigns/show",function(){return a(9409)}])},9409:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Z}});var r=a(5893),n=a(7294),s=a(9824),i=a(3165),o=a(2256),u=a(8005),c=a(967),d=a(7156),l=a(5424),h=a(416),m=a(8156),p=a(262);let w=e=>{let{address:t}=e,[a,s]=(0,n.useState)(""),[o,u]=(0,n.useState)(""),[w,g]=(0,n.useState)(!1),[Z,f]=(0,n.useState)(!0),[j,x]=(0,n.useState)(""),b=async e=>{e.preventDefault(),u("");let r=await (0,i.Z)(t);try{f(!1),x("It will take around 15 to 20 seconds to complete the transaction. Please Wait!"),g(!0);let n=await d.Z.eth.getAccounts();await r.methods.contribute().send({from:n[0],value:d.Z.utils.toWei(a,"ether")}),x(""),f(!0)}catch(s){f(!0),u(s.message)}g(!1),p.Router.replaceRoute("/campaigns/".concat(t))};return(0,r.jsxs)(l.Z,{onSubmit:b,children:[(0,r.jsxs)(l.Z.Field,{children:[(0,r.jsx)("label",{children:"Amount to Contribute"}),(0,r.jsx)(h.Z,{value:a,onChange(e){s(e.target.value)},label:"ether",labelPosition:"right"})]}),(0,r.jsx)(m.Z,{error:!0,header:"Oops! Something Went Wrong",content:o}),(0,r.jsx)(m.Z,{hidden:Z,primary:!0,content:j}),(0,r.jsx)(c.Z,{loading:w,primary:!0,children:"Contribute !"})]})},g=e=>(0,r.jsx)(s.Z,{children:(0,r.jsxs)(u.Z,{children:[(0,r.jsxs)(u.Z.Row,{children:[(0,r.jsx)(u.Z.Column,{width:10,children:(()=>{let{minimumContribution:t,balance:a,requestsCount:n,approversCount:s,manager:i}=e,u=[{header:i,meta:"Address of manager",description:"The manager created this campaign and create requests for this campaign",style:{overflowWrap:"break-word"}},{header:t,meta:"Minimum Contribution (Wei)",description:"You must contribute at least this much wei to campaign"},{header:n,meta:"Number of Requests",description:"A request tries to withdraw money from the campaign"},{header:s,meta:"Campaign Balance (ether)",description:"Number of people who have already donated to the"},{header:d.Z.utils.fromWei(a,"ether"),meta:"Campaign Balance (ether)",description:"The balance is how much money this campaign ha left to spend"}];return(0,r.jsx)(o.Z.Group,{items:u})})()}),(0,r.jsx)(u.Z.Column,{width:6,children:(0,r.jsx)(w,{address:e.address})})]}),(0,r.jsx)(u.Z.Row,{children:(0,r.jsx)(u.Z.Column,{children:(0,r.jsx)(p.Link,{legacyBehavior:!0,route:"/campaigns/".concat(e.address,"/requests"),children:(0,r.jsx)("a",{children:(0,r.jsx)(c.Z,{primary:!0,children:"View Requests"})})})})})]})});g.getInitialProps=async e=>{let t=await (0,i.Z)(e.query.address),a=await t.methods.getSummary().call();return{address:e.query.address,minimumContribution:a[0],balance:a[1],requestsCount:a[2],approversCount:a[3],manager:a[4]}};var Z=g}},function(e){e.O(0,[774,543,737,578,299,814,888,179],function(){return e(e.s=8164)}),_N_E=e.O()}]);