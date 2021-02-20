(this.webpackJsonphui=this.webpackJsonphui||[]).push([[0],{62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(29),i=a.n(c),r=a(2),l=a(3),d=a(5),o=a(4),j=a(6),h=a(9),u=a.n(h),V=a(0),m=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={status:!0,disabled:!0,token:null},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(V.jsxs)("header",{children:[Object(V.jsx)("div",{className:"label",children:Object(V.jsx)("span",{children:Object(V.jsx)("b",{children:"usof"})})}),Object(V.jsx)("input",{type:"search",placeholder:"Search..."}),Object(V.jsxs)("nav",{children:[Object(V.jsx)("li",{children:Object(V.jsx)(j.b,{to:"/",children:"Main"})}),Object(V.jsx)("li",{children:Object(V.jsx)(j.b,{to:"/users",children:"Users"})}),Object(V.jsx)("li",{children:Object(V.jsx)(j.b,{to:"/tags",children:"Tags"})})]})]})}}]),a}(n.a.Component),b=a(14);function U(e){return e.open?Object(V.jsxs)("div",{className:"ascDescFilters",children:[Object(V.jsx)("button",{onClick:function(){e.updateData("&sort=".concat(e.value,"&order=asc"))},children:" \u2191"}),Object(V.jsx)("button",{onClick:function(){e.updateData("&sort=".concat(e.value,"&order=desc"))},children:" \u2193"})]}):null}var N=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).updateData=function(e){s.props.updateData(e)},s.state={open:!1},s.handelToggleClick=s.handelToggleClick.bind(Object(b.a)(s)),s}return Object(l.a)(a,[{key:"handelToggleClick",value:function(){this.setState((function(e){return{open:!e.open}}))}},{key:"render",value:function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("div",{className:"itemFilters",onClick:this.handelToggleClick,children:this.props.nameFilter}),Object(V.jsx)(U,{open:this.state.open,value:this.props.nameFilter,updateData:this.updateData})]})}}]),a}(n.a.Component);var p=function(e){return Object(V.jsx)(j.b,{to:"/questions/".concat(e.id),className:"title",children:e.title})};var F=function(e){return Object(V.jsxs)("div",{className:"answers"===e.value&&e.score>0?"statistic answered":"statistic",id:e.answered?"checkAnswer":null,children:[e.score,Object(V.jsx)("p",{children:e.value})]})};var Z=function(e){return Object(V.jsx)(V.Fragment,{children:e.tags.map((function(e,t){return Object(V.jsx)(j.b,{to:"/tags/".concat(e),className:"tagItem",children:e},t)}))})},R=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={showImg:!1},s.preview=s.preview.bind(Object(b.a)(s)),s}return Object(l.a)(a,[{key:"preview",value:function(){this.setState((function(e){return{showImg:!e.showImg}}))}},{key:"render",value:function(){return Object(V.jsxs)("div",{className:"questionOwner",children:["asked ",this.props.time,Object(V.jsx)(j.b,{to:"/users/".concat(this.props.id),onMouseOver:this.preview,onMouseOut:this.preview,className:"userName",children:this.props.name}),this.state.showImg?Object(V.jsx)("img",{className:"ownerimg",src:this.props.img,alt:"userimg"}):null,Object(V.jsx)("span",{children:Object(V.jsx)("b",{children:this.props.reputation>9999?"".concat((this.props.reputation/1e3).toFixed(1),"K"):this.props.reputation})})]})}}]),a}(n.a.Component),O=Math.round((new Date).getTime()/1e3),x=O-43200,k=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={resultApi:null},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getQuestion()}},{key:"componentDidUpdate",value:function(e){this.props.filterMethod===e.filterMethod&&this.props.tagged===e.tagged||this.getQuestion()}},{key:"getQuestion",value:function(){var e=this;h.get("https://api.stackexchange.com/2.2/questions?pagesize=50&fromdate=".concat(x,"&todate=").concat(O,"&tagged=").concat(this.props.tagged,"&site=stackoverflow&key=HFW32iJzXLrJwqyL5HF2fg((").concat(this.props.filterMethod)).then((function(t){e.setState({resultApi:t.data.items})}))}},{key:"render",value:function(){return null===this.state.resultApi?Object(V.jsx)("h1",{children:"Please wait..."}):Object(V.jsx)(V.Fragment,{children:this.state.resultApi.map((function(e){return Object(V.jsxs)("div",{className:"question",children:[Object(V.jsx)(p,{title:e.title,id:e.question_id}),Object(V.jsxs)("div",{className:"allStats",children:[Object(V.jsx)(F,{score:e.score,value:"votes"}),Object(V.jsx)(F,{score:e.answer_count,answered:e.is_answered,value:"answers"}),Object(V.jsx)(F,{score:e.view_count,value:"views"})]}),Object(V.jsxs)("div",{className:"tagsAndOwner",children:[Object(V.jsx)(Z,{tags:e.tags}),Object(V.jsx)(R,{name:e.owner.display_name,id:e.owner.user_id,img:e.owner.profile_image,reputation:e.owner.reputation,time:T(1e3*e.creation_date)})]})]},e.question_id)}))})}}]),a}(n.a.Component);function T(e){var t=(e=new Date(e)).getDate(),a=e.getMonth()+1,s=e.getFullYear(),n=e.getHours(),c=e.getMinutes();return a<10&&(a="0".concat(a)),t<10&&(t="0".concat(t)),c<10&&(c="0".concat(c)),"".concat(t,".").concat(a,".").concat(s," at ").concat(n,":").concat(c)}var W=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).updateData=function(e){s.setState({filterMethod:e})},s.state={filterMethod:""},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(V.jsxs)("div",{className:"mainContainer",children:[Object(V.jsxs)("div",{className:"filters",children:[Object(V.jsx)("h1",{className:"filterH1",children:"Filters"}),Object(V.jsx)(N,{updateData:this.updateData,nameFilter:"activity"}),Object(V.jsx)(N,{updateData:this.updateData,nameFilter:"votes"}),Object(V.jsx)(N,{updateData:this.updateData,nameFilter:"creation"})]}),Object(V.jsxs)("div",{className:"questionDiv",children:[Object(V.jsx)("h1",{children:"Top Questions"}),Object(V.jsx)(k,{filterMethod:this.state.filterMethod,tagged:"javascript"})]})]})}}]),a}(n.a.Component);var S=function(e){var t=e.user.about_me;return Object(V.jsxs)("div",{className:"priviewUser",children:[Object(V.jsx)("p",{children:e.user.display_name}),Object(V.jsxs)("div",{className:"badgesContainer",children:[Object(V.jsxs)("div",{className:"badgesItem",children:[Object(V.jsx)("div",{className:"badge",id:"gold"}),e.user.badge_counts.gold]}),Object(V.jsxs)("div",{className:"badgesItem",children:[Object(V.jsx)("div",{className:"badge",id:"silver"}),e.user.badge_counts.silver]}),Object(V.jsxs)("div",{className:"badgesItem",children:[Object(V.jsx)("div",{className:"badge",id:"bronze"}),e.user.badge_counts.bronze]})]}),Object(V.jsx)("div",{className:"aboutMe",children:Object(V.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})})]})},M=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={showPreview:!1},s.preview=s.preview.bind(Object(b.a)(s)),s}return Object(l.a)(a,[{key:"preview",value:function(){this.setState((function(e){return{showPreview:!e.showPreview}}))}},{key:"render",value:function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("img",{src:this.props.user.profile_image,className:"usersimgs",alt:"imgUser",onMouseOver:this.preview,onMouseOut:this.preview}),this.state.showPreview?Object(V.jsx)(S,{user:this.props.user}):null]})}}]),a}(n.a.Component),v=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={filterMethod:s.props.filterMethod,resultApi:null,showPreview:!1},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getQuestion()}},{key:"componentDidUpdate",value:function(e){this.props.filterMethod!==e.filterMethod&&this.getQuestion()}},{key:"getQuestion",value:function(){var e=this;h.get("https://api.stackexchange.com/2.2/users?&site=stackoverflow&filter=!0Z-LvgkIiS)pY6ZMtsOr_tRsP&key=HFW32iJzXLrJwqyL5HF2fg((".concat(this.props.filterMethod)).then((function(t){e.setState({resultApi:t.data.items})}))}},{key:"render",value:function(){return null===this.state.resultApi?Object(V.jsx)("h1",{children:"Please wait..."}):Object(V.jsx)(V.Fragment,{children:this.state.resultApi.map((function(e){return Object(V.jsxs)("div",{className:"userItem",children:[Object(V.jsx)(M,{user:e}),Object(V.jsx)(j.b,{to:"/users/".concat(e.user_id),className:"userName",children:e.display_name}),Object(V.jsx)("p",{className:"userLocation",children:e.location}),Object(V.jsx)("p",{className:"userRep",children:e.reputation>999?(e.reputation/1e3).toFixed(1)+"K":e.reputation}),Object(V.jsx)("div",{className:"allTags",children:Object(V.jsx)(Q,{id:e.user_id})})]},e.account_id)}))})}}]),a}(n.a.Component),Q=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={resultApi:null},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.get("https://api.stackexchange.com/2.2/users/".concat(this.props.id,"/top-tags?site=stackoverflow&key=HFW32iJzXLrJwqyL5HF2fg((")).then((function(t){e.setState({resultApi:t.data.items})}))}},{key:"render",value:function(){return null===this.state.resultApi?Object(V.jsx)("span",{children:"Please wait..."}):Object(V.jsx)(V.Fragment,{children:this.state.resultApi.slice(0,3).map((function(e,t){return Object(V.jsx)(j.b,{to:"/tags/".concat(e.tag_name),className:"tags",children:e.tag_name},t)}))})}}]),a}(n.a.Component),J=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).updateData=function(e){s.setState({filterMethod:e})},s.state={filterMethod:""},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(V.jsxs)("div",{className:"mainUserContainer",children:[Object(V.jsxs)("div",{className:"filters",children:[Object(V.jsx)("h1",{className:"filterH1",children:"Filters"}),Object(V.jsx)(N,{updateData:this.updateData,nameFilter:"reputation"}),Object(V.jsx)(N,{updateData:this.updateData,nameFilter:"creation"}),Object(V.jsx)(N,{updateData:this.updateData,nameFilter:"name"})]}),Object(V.jsxs)("div",{children:[Object(V.jsx)("h1",{children:"Users"}),Object(V.jsx)("div",{className:"usersDiv",children:Object(V.jsx)(v,{filterMethod:this.state.filterMethod})})]})]})}}]),a}(n.a.Component),g=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={resultApi:null},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=encodeURIComponent(this.props.name);h.get("https://api.stackexchange.com/2.2/tags/".concat(t,"/wikis?&site=stackoverflow&key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/usof",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"31GGghpGieteoFTqI0h1HA(("}).REACT_APP_KEY)).then((function(t){e.setState({resultApi:t.data.items})}))}},{key:"render",value:function(){return null===this.state.resultApi?Object(V.jsx)("h3",{children:"Please wait..."}):Object(V.jsx)(V.Fragment,{children:Object(V.jsx)("div",{className:"tagWiki",children:this.state.resultApi[0].excerpt.match(/./g).length>170?this.state.resultApi[0].excerpt.substring(0,170)+"...":this.state.resultApi[0].excerpt})})}}]),a}(n.a.Component),B=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={filterMethod:s.props.filterMethod,resultApi:null},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getQuestion()}},{key:"componentDidUpdate",value:function(e){this.props.filterMethod!==e.filterMethod&&this.getQuestion()}},{key:"getQuestion",value:function(){var e=this;h.get("https://api.stackexchange.com/2.2/tags?&site=stackoverflow&key=HFW32iJzXLrJwqyL5HF2fg((".concat(this.props.filterMethod)).then((function(t){e.setState({resultApi:t.data.items})}))}},{key:"render",value:function(){return null===this.state.resultApi?Object(V.jsx)("h1",{children:"Please wait..."}):Object(V.jsx)(V.Fragment,{children:this.state.resultApi.map((function(e){return Object(V.jsxs)("div",{className:"tagDiv",children:[Object(V.jsx)(j.b,{to:"/tags/".concat(e.name),className:"tagItem",children:e.name}),Object(V.jsx)(g,{name:e.name}),Object(V.jsxs)("div",{className:"tagCount",children:[e.count," questions"]})]},e.name)}))})}}]),a}(n.a.Component),E=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).updateData=function(e){s.setState({filterMethod:e})},s.state={filterMethod:""},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(V.jsxs)("div",{className:"mainTagContainer",children:[Object(V.jsxs)("div",{className:"filters",children:[Object(V.jsx)("h1",{className:"filterH1",children:"Filters"}),Object(V.jsx)(N,{updateData:this.updateData,nameFilter:"popular"}),Object(V.jsx)(N,{updateData:this.updateData,nameFilter:"activity"}),Object(V.jsx)(N,{updateData:this.updateData,nameFilter:"name"})]}),Object(V.jsxs)("div",{children:[Object(V.jsx)("h1",{children:"Tags"}),Object(V.jsx)("div",{className:"tagsContainer",children:Object(V.jsx)(B,{filterMethod:this.state.filterMethod})})]})]})}}]),a}(n.a.Component),D=a(7);var G=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={resultApi:null},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.stackexchange.com/2.2/users/".concat(this.props.id,"?&site=stackoverflow&filter=!--1nZuvlSU9X&key=HFW32iJzXLrJwqyL5HF2fg((")).then((function(t){e.setState({resultApi:t.data.items})}))}},{key:"render",value:function(){return null===this.state.resultApi?Object(V.jsx)("h1",{children:"Please wait..."}):Object(V.jsx)(V.Fragment,{children:this.state.resultApi.map((function(e){return Object(V.jsxs)("div",{className:"mainUser",children:[Object(V.jsx)("h1",{className:"oneUserName",children:e.display_name}),Object(V.jsxs)("div",{className:"userLocation",children:["Location: ",e.location]}),Object(V.jsxs)("div",{className:"imgAndBadges",children:[Object(V.jsx)("img",{className:"bigUserImg",src:e.profile_image,alt:"imgUser"}),Object(V.jsxs)("div",{className:"badges",children:[Object(V.jsxs)("div",{className:"badgesItem",children:[Object(V.jsx)("div",{className:"badge",id:"gold"}),e.badge_counts.gold]}),Object(V.jsxs)("div",{className:"badgesItem",children:[Object(V.jsx)("div",{className:"badge",id:"silver"}),e.badge_counts.silver]}),Object(V.jsxs)("div",{className:"badgesItem",children:[Object(V.jsx)("div",{className:"badge",id:"bronze"}),e.badge_counts.bronze]})]})]}),Object(V.jsx)("div",{dangerouslySetInnerHTML:{__html:e.about_me},className:"aboutUser"})]},e.user_id)}))})}}]),a}(n.a.Component),Y=function(){var e=Object(D.e)().userID;return Object(V.jsx)(G,{id:e})};var w=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).updateData=function(e){s.setState({filterMethod:e})},s.state={filterMethod:""},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(V.jsxs)("div",{className:"mainContainer",children:[Object(V.jsxs)("div",{className:"filters",children:[Object(V.jsx)("h1",{className:"filterH1",children:"Filters"}),Object(V.jsx)(N,{updateData:this.updateData,nameFilter:"activity"}),Object(V.jsx)(N,{updateData:this.updateData,nameFilter:"votes"}),Object(V.jsx)(N,{updateData:this.updateData,nameFilter:"creation"})]}),Object(V.jsxs)("div",{className:"questionDiv",children:[Object(V.jsxs)("h1",{children:["Questions tagged [ ",this.props.name," ]"]}),Object(V.jsx)(k,{filterMethod:this.state.filterMethod,tagged:this.props.name})]})]})}}]),a}(n.a.Component),y=function(){var e=Object(D.e)().tagName;return Object(V.jsx)(w,{name:e})};var f=function(e){return Object(V.jsx)(V.Fragment,{children:e.comments.map((function(e){return Object(V.jsxs)("div",{className:"commentItem",children:[Object(V.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}}),Object(V.jsx)(j.b,{to:"/users/".concat(e.owner.user_id),className:"userName",children:e.owner.display_name})]},e.comment_id)}))})},X="data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBR0FBQUFCZ0NBWUFBQURpbUhjNEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUN6VWxFUVZSNG5PMmJzVzdVVUJSRW55a1FmME1UVVZFa1RiUUZDUEUxTkpINEthcDhWUVJDSWRWUVpDS3NFR2Z0Ni9mZVhOdHo2dDA3NHptN1VyUlNTakhHYkJRQUZ3QXUxRDBPQ1lDUEFPNEEvQUp3cGU1ektBQmNBdmlKZi93R2NLM3VkUWdBbkFEYzQzL3VBWnpVL1hZTmdPdUo4Wjk0QVBCWjNYT1h6QmpmRWxxeFlIeExxRTFnZkV1b3hZcnhMV0V0RmNhM2hDZ1Z4N2VFcFRRWTN4TG0wbkI4U3poSGgvRXRZWXFPNDF2Q2N6RDkyODVMekhuZGtsdkgvdTBJeXo3NUR3QSt6WGpkMHB2SC9DWkV4dWY3WGlWNCsxZ1NvdVB6dldjRkJET09JV0hOK0h6L0xBSEJySDFMV0RzK2I4d1dFTXpjcDRRYTQvUE9JZ0hCN0gxSnFEVStieTBXRU95d0R3azF4K2U5a0lCZ2wyMUxxRDArYjRZRkJEdHRVMEtMOFhsM2xZQmd0MjFKYURVK2I2OFdFT3k0RFFrdHgrZjlLZ0tDWFhOTGFEMCtNNm9KQ0hiT0thSEgrTXlwS2lEWVBaZUVYdU16cTdxQTREUGtrTkJ6Zk9ZMUVSQjhGcTJFM3VNenM1bUE0RE5wSkNqR1oyNVRBY3pJTFVFMVByT2JDMkJPVGduSzhabmZSUUN6Y2tsUWo4OE8zUVF3TDRlRURPT3pSMWNCek5SS3lESSt1M1FYd0Z5TmhFempzNDlFQUxQN1NzZzJQanZKQkRDL2o0U000N09YVkFBN3RKV1FkWHgya3d0Z2p5b1Mza3pjLzFCS2VUZWp4NTlTeXBkaEdINUVIMlNyRE1Od1cwcjVXaDQzT01mYlVzcjdSUUVBdm1YNjVJOTZwZmdHalByTStTWjhqeDZma2lBWm41MVNDV0NuMXlURXhoOGRmeTVCTmo3N3BCUEFYaTlKV0RmKzZQaVRCT240N0pKU0FMdU5KZFFaZjNUOEJnbitvU0d6QVBZN0FiaVorL3FoWlprV25CdDVHSVpOUGRQVW42R21FeFlneGdMRVdJQVlDeEJqQVdJc1FJd0ZpTEVBTVJZZ3hnTEVXSUFZQ3hCakFXSXNRSXdGaUxFQU1SWWd4Z0xFV0lBWUN4QmpBV0lzUUl3RmlMRUFNUllneGdMRVdJQVlDeEJqQVdJc1FJd0ZpTEVBTVJZZ3hnTEVXSUFZQ3hCakFXSXNRSXdGaUxFQU1SWWd4Z0xFV0lDWXYySm5xYXVGKzdmeUFBQUFBRWxGVGtTdVFtQ0Mi",z="data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBR0FBQUFCZ0NBWUFBQURpbUhjNEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUNnVWxFUVZSNG5PM2JQVTRjUVJURThSNGlId2dpQWtkR0JPWkdCSVRjeHVJYVJMNklKWVJrOFpFVXdkSVNXakU3M2YzZTYrcVpxWDhLMm4ydW4yRXNoS2Uwc2dEZzFNZW5hWnA2M2VMUkdmdUF2U2NBY2dJZ0p3QnlBaUFuQUhJQ0lDY0FjZ0lnSndCeUFpQW5BSElDSUNjQWNnSWdKd0J5QWlBbkFISUNJQ2NBY2dJZ0p3QnlBaUFuQUhJQ0lDY0FjZ0lnSndCeUFpQW5BSElDSUNjQWNnSWdKd0J5QWlBbkFISUNJQ2NBY2dJZ0p3QnlBaUFuQUhJQ0lDY0Fjc1VBQUc0QlhFY2VzNFVBWEFPNDlYN1JPeHg2QTNEait1TDF0NXlNZk5zVmdKZlBVKzY5WHZUdTZNOUlSUmdWNEdqOG5BM2htL0hwQ0NNQ3pJeHZRemd4UGhWaE5JQ0Y4ZHNRY0hqZ2x2U0N6Zy9ta1FCd2VPQXVqWi83OXNFODk2K2d4NVRTYThFTlAxSktEeUEvbUJrQnVFb3AvVW1IRFpaNlR5bjlyWDZEQ3QxdTM0NUcrQXBvMk9aM3J6Y0tSMkFEZEJ2ZjhJYWhDRXlBN3VNYjNqZ01nUVZBRzk5d1FBZ0NBNEErdnVFUWQ0VGVBTU9NYnpqSUZhRW53SERqR3c1elErZ0ZNT3o0aGdOZEVIb0FERCsrNFZBelFqVEFhc1kzSEd4Q2lBUlkzZmk1bmdoUkFLc2RQOWNMSVFKZzllUG5laUI0QTJ4bS9GdzBnaWZBNXNiUFJTSjRBV3gyL0Z3VWdnZkE1c2ZQUlNCWUFYWXpmczRid1FLd3UvRnpuZ2l0QUxzZFArZUYwQUt3Ky9GekhnaTFBQnIvS0N0Q0RZREduOG1DVUFxZzhSZHFSU2dCMFBpRnRTQVVmSjdHcndsMXYxOVo4bmsxcjZYL2NKSlM5VmVDUi9xYmYxeEhCSTAvVndjRWpiOVVJSUxHTHkwQVFlUFg1b2lnOFZ0elFORDQxZ3dJR3QrckJnU043MTBGZ3NhUHFnQkI0MGVIK1o4ZDZXYzd2UUx3RThEemwvSC9BL2pGdm10WEFiZ0E4QS9BRTRCTDlqMjdETUE1Z0hQMkhVcXAxajRBa1orSmd2b01aUG9BQUFBQVNVVk9SSzVDWUlJPSI=";var H=function(e){return Object(V.jsx)(V.Fragment,{children:e.answers.map((function(e){return Object(V.jsxs)("div",{className:"commentItem",children:[Object(V.jsxs)("div",{className:"answerScore",children:[Object(V.jsx)("img",{className:"vote",src:X,alt:"upVote"}),Object(V.jsx)("span",{children:e.score}),Object(V.jsx)("img",{className:"vote",src:z,alt:"downVote"}),e.is_accepted?Object(V.jsx)("img",{className:"accepted",src:"data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTkFBQUFEUUNBWUFBQUIycE85MEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQVA2a2xFUVZSNG5PM2RlNVJkVlgwSDhPL3YzSmxKSUVBMENDTE56SjJaM0xrVFJLbUtDRzJ4VW9za1N5djBKVnJXVWtJb0pGQmhBUUloRUlhZFNRZ2hLNFpxTEMyaHNZblVybGFzQ3JaRlFGekZna0FSSDRTUm1Uc3p1ZmVPSVVUZUFmS1l4ejIvL29GVFFram16T1BzczgvaisvbVh5ZG5meGVTYnZlODU5K3dORUJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRlI5b2pyQUpSUmFyeEN0ZmE3QW1tRjRnZ0lubXRRNzRtdUZyUERkYlNKWUlFb1VxMzlTMmJXZVlkY0RzRmlRTis5MzMvMkFUenFxWFoydDNUZTZ5TGZSTEZBRkpuMkFmTmhWWHdIcW8yQlB5eHkxM0J0YUZHNWRkVnZJb2cyYVN3UVJhS3RiRDRnZ29jQW5UR0JQL1lLUkM4dDVUdnZzQlpzaWxnZ3N1NzkxV3ZlT2FUVGZxRkEweVF2OGE5ZTNkQVh1MmZmOUdLb3dVTGd1UTVBNlRlbzA3NDZoZklBd09mOGtXbGQ3ZVdPczBJTEZSTE9RR1JWZTduakxCWDVYbmhYbER1bnlkNUZXL0tyWHc3dm1wUEhBcEUxeGUzbVhSakNVd2U0MnpZbEFneW82TUpTdnZPQk1LODdHVnpDa1QxRHVEWHM4Z0NBQWsxUTNGOHMzM0RiOGMrWnc4Sysva1J3QmlJcjJpcm1ISUYrMC81SVV2YTFkbDVmeTRvSDdZOTFnTkZkREVycGRsemwydmZVVVA4VWdGa1JEZW1MNG11MWtaZXU3bXRiUHhqUm1BQzRoQ01MYW1pNEhkR1ZCd0E4RlZ3cTliTitXcWhjLzhFSXgyV0JLRnp0RmJNUTBFKzVHRnVBOTNud2Z0SldNZWRFT0NaUk9BcmJ6R3h2UkxjQWVJZmJKS29pM3RrOWVmTnQyeU54QnFKd0tNUWJ3U1k0THc4QWlLanF4cGF0MTRaK0IzQi9MQkNGb2xqdHVCalFQM2FkWXg5SDFIc05TMndQd2lVY1RWbXhhbHFoK2tzQVRwL0p2SjA4WDhyakdJanhiWTNBR1lpbVJvMEgxYzJJWFhrQVFJK2F1NjEydk0wUldDQ2FrcmFxL3lVQXA3ck9jVEIrVFdiYnZENExSSk5XcUpyM0NxVFRkWTZ4ZVZZL3ByQkFOQ21ucWFuemZHd0NNTjExbGpINXRXZHNYcDRGb2tuWlBvQnJJWHFTNnh4amt4ZExMZDFQMlJ5QkJhSUpheXViRDBEMU90YzV4dUZmSUhmV2JBN0FBdEdFSE45bEdrUjBNNEFHMTFrQ3ZGNnZXR1Y3RUJhSUptVDRNQmdBSjdqT0VVeVdSTEhISEIrazByak5yVjUvb3ErNVJ3Q3RkNTBsd0k5SytlV25RNkMyQjZxelBRQ2xRM1BaVFBjVm14TlFubGRIYW5KZUZPVUJ1SVNqY2FyMzlDWkFyVDdWRDROQUx0ODZ4d3hFTng1UmdQYnE5WCtnbW5zUTBKenJMR01Sd1gwOVRjdm5Selg3QUp5QktNQUpPNjZjb2VwdGludDVBTHhTeThuNVVaWUhZSUVvd0o3QkdXc0JGRnpuQ0tLcUYvZk5OdHVpSHBkTE9EcW9ZdFdjRHZYdkF5VGVmMDlFN2lybHpaKzZHSm96RUIxUWEvK1NtYUs2TWZibEFWNFlyZzB0Y2pVNEMwUUhWRmQzeUZlbXVKOTFKRVRrSXBkSG9NVDlYeGR5b0ZEdCtMU25jcmZySE1Ia2psS3orWUxMQkp5QjZDM21ibHQ2cEtleXdYV09jZGhlbjhObHJrT3dRUFFXL25ERHJRQ09jWjBqbUZ6UTFXaGVjcDJDQmFML1Z5eDNmQmFDczEzbkNDYTNsNXJOZjdsT0FiQkE5RnVGM3FWSFFlU3Jybk9NUThVZnhwV3VRNHhpZ1FnQTROVTMvQU9BbzEzbkdKdXE3OHVpdmpienF1c2tvMWdnUWx2WkxBRHc1NjV6QkJHVjlYMnQ1ajdYT2ZiRkFtVmM4ZGZYL1k0STFybk9NUTViNjJaSTdGNGpaNEd5VENHbzFmMGpvTzkwSFNXQUQ4OWYwSFcwZWQxMWtQMnhRQm5XWHVsWURHQys2eHhCVkxHMjFMVGlmMXpuT0JDK2tacFI3WlZsTFFydlprVDc3ZjlKa0tlSGdSdGNwemdZemtCWnBNWUQ2djRKME1OZFJ3a3dBcTkyYnFYRjdIVWQ1R0JZb0F3cVZuR1pRai9tT2tjZ2xSdExUU3NlZHgxakxDeFF4clJ2WGRZT1lLWHJIT1B3aS9yZDl2ZDFteW9XS0VOT1UxT25YdDFtUUE5eG5XVnNNaWkrbk50MXZCbHluU1FJQzVRaDI2dTRHdENUWGVjSXBEQTlyZVpKMXpIR2crOERaVVNoYXQ3cnFUNkJ1SittQUR4YXl2L3FWTnQ3V29lRk0xQUduS2FtemxOOEEvRXZ6MTVmNVB5a2xBZmdjNkJNZUxhcU53QTQwWFdPSUNKNlRWOSsrYTljNTVnSUZpamxDaFh6SVFXV0pPQ0I2Y005VGJMZWRZcUpZb0ZTck5CN3lUU0JiZ1lROC8yc1pWY3Rod1UyVDlPMmhRVktzVno5ckpVS3ZNOTFqaUNxL3BmNkd6djdYT2VZRE42RlM2bTVGZlA3UHZEakJHekorOE5TZnZrWlVXL0pHeGJlaFV1aFk3ZWJRMnVLQk94bkxUdEhhdEh2WngwbUx1RlM2TEFocklGb20rc2NnUVNYUm5rVWlRMWN3cVZNZThWOFhPSC9NTzViOG9ySzkzdGF6Sm11YzB3VmwzQXBVdWcxUnlqdzliaVhCNUFYNjRBTFhhY0lBNWR3S1NMMWVndUF2T3NjUVVSd2NWZXovUU9Bb3hEemY2bG92QXBielJtZTUvOGc5ck9QeUwrVjh1WnpybU9FaFROUUNqU1h6VHM4U2NKUkpQSjhiUmlYdWs0UkpuNEdTb0VHd2EwQVpydk9FVVNCeGYwRjg1enJIR0ZpZ1JLdXZkeHhGcUIvNVRwSElNR20zbWJ6SGRjeHdzWUNKVmloZCtsUkt0NXRybk1FazJlbVlmQUsxeWxzWUlFU0xGYy83ZThCZmJmckhHTlRCZndMdHVSWHYrdzZpUTBzVUVJVnF4MmZWK2hmdU00UlJFVnVLelYzM3VNNmh5MHNVQUsxRDVoam9mSzNybk1FazdLM1o4L1ZybFBZeE52WUNhUyszZzVnbHVzY0FYeGZhK2YxelYzem11c2dObkVHU3BoaTFWd0k0Sk91Y3dTVHIvUzFySGpRZFFyYldLQUVtVnMyelZDc2RaMGptUFRzenUyTTNWRWtOaVJqQ2FmR0t3NzRmd1NWVDRwS0d3UkhLUFJGaGY0c2w5Tzd1eHRYYkhFZDBUcUYrRlY4UGY3N1dVdk5WeXpZMW5qTEh0ZEpvaER6cjM2TWZqMWZid0Z3d3NGK1JoVjNpeWVYbC9KbWE0VFJJdFZXN2JoRU5BRm5tQXBXbC9MTGw3cU9FWlZZTCtHS0ZYT0ZBdmRoalBJQWdBak9oT3JqN1JYejhZaWlSZXE0L21WdG5zcHExemtDcVd6eGgxNHlybU5FS2JZRktwYU5BZlRMRTNndGVaWkM3eWxVT3o1dE5WalUxSGcxcjI2akFvZTZqaEpnUkhKWTJOZTJmdEIxa0NqRnNrREZzakVRbmN5aFNnMmV5cmZUVktMMkFmOHFpSDdVZFk0Z0F1M3NhVEkvZFowamFyRXIwQlRLTXlvMUpXcXJMRHRPVlJLd0pKS2ZIL2JDanZndk1TMklWWUZDS00rb3hKZm9ORFYxb25XYkVmdjlyR1V3NStFTFQzeDR3N0RySkM3RXBrQWhsbWRVb2t1MHZZSmxFRDNKZFk0Z0N2LzZwNXZNVTY1enVCS0wyOWdXeXJPdklWLzBML3Z5bmQrM2RQM1FGU3JYZjlCRDdqRkFZNzBscjBBZTZjbDNmVFJKcHltRXpma01aTGs4UU1KbW9rTHZKZE04elcyT2YzbXdXMnBZa09YeUFJNExGRUY1UmlXbVJGN2RrY3NoK243WE9ZSW9aRW4zSEZOeW5jTTFaMHU0Q011enIxZ3Y1d3BsYzRvbmVDaitXL0xpUjZYODh0T1R2Q1Z2V0p6TVFJN0tBOFI0SmpwMnV6blVFOTBjLy9MSUx0K3JYY2p5dkNIeUFqa3N6NmhZbHVqd1FiMEpRTkYxam5HNHJLOXBaYi9yRUhFUjZSSXVCdVhaVjJ5V2M4V3FPUldxRHlJR04zWEdwSEovcWRuTTQrenpwc2grWWNWS3g5L0VxRHhBVEdhaUUzWmNPUU9LVFloN2VZQlgvSG9zWkhuZUtwSmZXcUZpUGdSNHQwUXgxZ1ExZUNyZmFpK2IrYTRDN04well4MmdjMXlOUDE0aWNrbmZiTFBOZFk2NGlhUkFJbGdWNCtjYTAxWDB1eTVLMUY0Mjh5RjZRZFRqVHB4OHR5ZHYvdGwxaWppeVhxQTVmZGMxaXZwbjJCNW5pcWFyNkYxUkx1ZGErNWZNVkE4YjRyK2ZOVjRZOW9jdWNoMGlycXdYeU12bFRrL0FYeElnNHVWY1hlNlE5VkJ0akdLc3FWRG80bkxycXQrNHpoRlgxZ3NrOEdKL1hzMCtJcG1KMmdmTW1ZQiszdVlZWVZESU4zdWJPLy9kZFk0NHMvOFp5Tk5wMXNjSWw5V1pxTGpkdkV0OWJMQng3WERKc3cyNWRCMUZZb1AxQWlua1dkdGpXR0R2eHNJUWJvMy9mdGFBd3IrZ3E5Rzg1RHBIM05uL0RDVDRpZTB4TEFsOU9kZFdNZWNBK3Btd3JtZVBiT3h0N3Z4UDF5bVN3SHFCZWhyTkV3Q1N1dDFVYU11NTR5clh2a2VBMkc5TEpjQ0FQNHhVSGtWaWcvM1BRQUtGeUhMcjQ5Z1R5bkt1aHZvTmdCNFpWaWc3VkZWMFlWK2JlZFYxa3FTSTVFRnFxY25jQWNpZFVZeGx5WlNXYyswVnN4REFuNFNjeVFMNXUxSys4d0hYS1pJa211OWZDVlQyN2o0ZmtNY2lHYytPU1Mzbld2dE5rd0xyYklVS1VkLzA2YnV1Y1IwaWFTTDdBbVBQM0RXdmpkVDJ6QVB3YUZSaldqQ3htVWdodVRwc0FIU201VnhUNWFzdjV6OTV6TnBkcm9Na1RhVGZBTjQ2NSthZEk3Vzk4NUhzRW8zN1c5ekZhc2ZGb2pvdmlsQlRJY0M2M2xielk5YzVraWp5cjlCbnBVVHRsV1V0UUFMMnN3YTZkK1ZlN1hBZElxbWN2SU9TK2hLcDhWUnltd0FjRm4yc0NSbUJMK2RtNVNnU0c1eTl4SlhtRXJWVmNRVVVmK2dxMUhncDVLWlNxL2xmMXptU3pPbGJrR2tzVWJGczVnclE2VHBVTVBsbHd5NnNkSjBpNldMeG1rRnIvNUtaZGJucFB3QndpdXNzVXpBRWxjL0MwNlZRZk1SMW1BQkQ0c3RKUGEzbVNkZEJraTRXQlFKR1MzVEl2WUNlN0RyTDVLa200ZDBuaFM3cmJlNjgwWFdPTklqTlJoWnZMT2VTL3B3by91VVI0R2RIdkxCamplc2NhUkc3WDNoS2xuTXhKWU8rMUU3c3k2L29jcDBrTFdJekE0MUt5WTJGZUZKL0tjc1RydGdWQ0dDSjdKQ0hTODFQeC81MWlxU0paWUVBbGloY3NxdVc0MUVrTnNTMlFBQkxGQlpSLzZyK1J0UG5Pa2NheGU0bXdvSHd4c0pVeUFPbHZQa0V0K1MxSTlZejBDak9SSk1sTzBkcTNNL2Fwa1FVQ0dDSkprTVZsMjJkWXdaYzUwaXpSQ3poOXNYbDNMajlSNmw1ZWF6T1FFcWp4TXhBb3pnVGpjc3J5STBzZGgwaUN4SlhJSUFsQ3FSeVVhbnh4bWRjeDhpQ3hDM2g5c1hsM0FGOXI5UzgvTTljaDhpS1JNNUFvemdUN1UrZXI0M0lJdGNwc2lUUkJRSllvbjBwL0l2NkMrWTUxem15SlBFRkFsZ2lBSURpR3p5S0pIcXBLQkNRK1JKdG4rWU5YdVk2UkJhbHBrQkFWa3VrQ3VoZmI4bXZmdGwxa2l4S1ZZR0E3SlZJeE50UWF1Njh4M1dPckVwZGdZQk1sYWlDUGJ1dmNoMGl5MUpaSUNBVEpmSTlsZk42NXE1NXpYV1FMRXR0Z1lCMGwwaFYxbmUzbVA5Mm5TUHJVbDBnSUswbGt2NkdHVmptT2dWbG9FQkE2a3JrUTdDZzYyanp1dXNnbEpFQ0FTa3FrV0JOS1c4ZWNoMkQzcENaQWdGcEtKRThQZVFuK3J6WjFNbFVnWUJFbDJnRVh1M2NTb3ZaNnpvSXZTbHpCUUlTV2lMUmxhV21GWSs3amtGdmxja0NBVWtya2Z6ODhPZDNySEtkZ3Q0dTBTL1VoU0grTCtYSm9KZXJuZFRkdUdLTDZ5VDBkcG1kZ1ViRmZTWVNRUWZMRTErWkx4QVEzeElKNUpHZXBxNHZ1ODVCQjhjQy9WYmNTaVRBYnFseFArdTRZNEgyRWFjUytTSkx1K2VZa3VzY05EWVdhRDh4S2RGRHZVMzRtc1B4YVp4WW9BTndXeUxaNVh1MUJSRGpSejgyVFJRTGRCRE9TaVQrNVgxTksvc2pIWk1tTGZQUGdZSkUrcHhJNWY1U3M1bkgweFNTZ3pOUWdPaG1JdGxacXcyZnovSWtDd3MwRG0rV1NCNnpOb2o0bC9RWGJ2eTF0ZXVURlN6UU9MMVJvajN6WUdVbWtvMmxmT2NkNFYrWGJHT0JKbURybkp0MzFoOHFuNERJWGVGZFZSNFlVbnd4dk90UmxIZ1RZVExVZU1XcXJnQjBLU0JUK0g4bzkweWYvdnBubmp4bTdhN3d3bEdVV0tBcEtKVE5LVG5CT29YKzNzVCtwTlFFV04yVDc3cUJYOVZKTmhab3FoUlNySFNjRFUrdWdPSWpnVDh1Y204T3RldTY4eXVlaUNJZTJjVUNoYWhZTm5NaC9xY0E3MlJBMndHWkNlZ2VFUXdvNUdINCtGYXB4WFM3emtsRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFUkVSRVJFNU1qL0FkZUIyOTYxNi9rOUFBQUFBRWxGVGtTdVFtQ0Mi",alt:"accepted"}):null]}),Object(V.jsx)("div",{dangerouslySetInnerHTML:{__html:e.body}}),Object(V.jsxs)("div",{className:"owner",children:[Object(V.jsxs)("p",{children:["answered ",C(1e3*e.creation_date)]}),Object(V.jsx)(j.b,{to:"/users/".concat(e.owner.user_id),className:"userName",children:Object(V.jsx)("img",{alt:"ownerImg",className:"ownerImg",src:e.owner.profile_image})}),Object(V.jsx)(j.b,{to:"/users/".concat(e.owner.user_id),className:"userName",children:e.owner.display_name}),Object(V.jsx)("p",{children:e.owner.reputation})]}),e.comment_count>0?Object(V.jsx)(f,{comments:e.comments}):null]},e.answer_id)}))})};function C(e){var t=(e=new Date(e)).getDate(),a=e.getMonth()+1,s=e.getFullYear(),n=e.getHours(),c=e.getMinutes();return a<10&&(a="0".concat(a)),t<10&&(t="0".concat(t)),c<10&&(c="0".concat(c)),"".concat(t,".").concat(a,".").concat(s," at ").concat(n,":").concat(c)}var L=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={resultApi:null},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.stackexchange.com/2.2/questions/".concat(this.props.id,"?order=desc&sort=activity&site=stackoverflow&filter=!LYA)NcjxVO1mgxq*)Lp_Eq&key=HFW32iJzXLrJwqyL5HF2fg((")).then((function(t){console.log(t.data),e.setState({resultApi:t.data.items[0]})}))}},{key:"render",value:function(){return null===this.state.resultApi?Object(V.jsx)("h1",{children:"Please, wait..."}):Object(V.jsxs)("div",{className:"questionInfo",children:[Object(V.jsx)("h1",{children:this.state.resultApi.title}),Object(V.jsxs)("div",{className:"questionScore",children:[Object(V.jsx)("img",{className:"vote",src:X,alt:"upVote"}),Object(V.jsx)("span",{className:"scoreCount",children:this.state.resultApi.score}),Object(V.jsx)("img",{className:"vote",src:z,alt:"downVote"})]}),Object(V.jsx)("div",{className:"questionBody",dangerouslySetInnerHTML:{__html:this.state.resultApi.body}}),Object(V.jsx)("div",{className:"questionTags",children:this.state.resultApi.tags.map((function(e){return Object(V.jsx)(j.b,{to:"/tags/".concat(e),className:"tagItem",children:e},e)}))}),Object(V.jsxs)("div",{className:"owner",children:[Object(V.jsxs)("p",{children:["asked ",I(1e3*this.state.resultApi.creation_date)]}),Object(V.jsx)(j.b,{to:"/users/".concat(this.state.resultApi.owner.user_id),className:"userName",children:Object(V.jsx)("img",{alt:"ownerImg",className:"ownerImg",src:this.state.resultApi.owner.profile_image})}),Object(V.jsx)(j.b,{to:"/users/".concat(this.state.resultApi.owner.user_id),className:"userName",children:this.state.resultApi.owner.display_name}),Object(V.jsx)("p",{children:this.state.resultApi.owner.reputation})]}),Object(V.jsx)("div",{className:"comments",children:this.state.resultApi.comment_count>0?Object(V.jsx)(f,{comments:this.state.resultApi.comments}):Object(V.jsxs)("p",{className:"emptyComments",children:["Comments: ",this.state.resultApi.comment_count]})}),Object(V.jsxs)("div",{className:"answers",children:[Object(V.jsxs)("h2",{children:[this.state.resultApi.answer_count,"  ",1===this.state.resultApi.answer_count?"Answer":"Answers"]}),this.state.resultApi.answer_count>0?Object(V.jsx)(H,{answers:this.state.resultApi.answers}):null]})]})}}]),a}(n.a.Component);function I(e){var t=(e=new Date(e)).getDate(),a=e.getMonth()+1,s=e.getFullYear(),n=e.getHours(),c=e.getMinutes();return a<10&&(a="0".concat(a)),t<10&&(t="0".concat(t)),c<10&&(c="0".concat(c)),"".concat(t,".").concat(a,".").concat(s," at ").concat(n,":").concat(c)}var K=function(){var e=Object(D.e)().questionId;return Object(V.jsx)(L,{id:e})};a(62);var A=function(){return Object(V.jsx)(j.a,{basename:"/usof",children:Object(V.jsxs)("div",{className:"App",children:[Object(V.jsx)(m,{}),Object(V.jsx)(D.a,{exact:!0,path:"/",component:W}),Object(V.jsx)(D.a,{exact:!0,path:"/questions/:questionId",component:K}),Object(V.jsx)(D.a,{exact:!0,path:"/users",component:J}),Object(V.jsx)(D.a,{path:"/users/:userID",component:Y}),Object(V.jsx)(D.a,{exact:!0,path:"/tags",component:E}),Object(V.jsx)(D.a,{path:"/tags/:tagName",component:y})]})})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(V.jsx)(n.a.StrictMode,{children:Object(V.jsx)(A,{})}),document.getElementById("root")),_()}},[[63,1,2]]]);
//# sourceMappingURL=main.f0504d94.chunk.js.map