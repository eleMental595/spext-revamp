(function(t){function e(e){for(var i,n,l=e[0],r=e[1],c=e[2],u=0,p=[];u<l.length;u++)n=l[u],a[n]&&p.push(a[n][0]),a[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,l=1;l<s.length;l++){var r=s[l];0!==a[r]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var i={},a={app:0},o=[];function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/spext-revamp/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("64a9"),a=s.n(i);a.a},"06c3":function(t,e,s){"use strict";var i=s("9446"),a=s.n(i);a.a},"1a6c":function(t,e,s){},"32f8":function(t,e,s){},"440f":function(t,e,s){"use strict";var i=s("cdbf"),a=s.n(i);a.a},"4e99":function(t,e,s){"use strict";var i=s("32f8"),a=s.n(i);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header"),s("router-view")],1)},o=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"navbar",staticClass:"navbar"},[s("nav",[t._m(0),s("div",{staticClass:"menu-middle anchor",on:{click:t.openTranscript}},[s("div",{ref:"editTranscript",staticClass:"menu-middle-wrapper",class:{"menu-active":t.config.show}},[t._m(1),s("span",[t._v("Transcript Mode")]),s("i",{staticClass:"fa fa-chevron-down",staticStyle:{"margin-left":"16px"}})]),s("Popover",{attrs:{config:t.config}},[s("div",{staticClass:"menu-item"},[s("div",{staticClass:"menu-list"},[s("div",{staticClass:"menu-icon"},[s("i",{staticClass:"fa fa-volume-up"})]),s("div",{staticClass:"menu-element"},[s("span",{staticClass:"label"},[t._v("Edit Media")]),s("span",{staticClass:"description"},[t._v("Shows filter words, silence etc")])])]),s("div",{staticClass:"menu-list"},[s("div",{staticClass:"menu-icon"},[s("i",{staticClass:"fa fa-ellipsis-v"}),s("i",{staticClass:"fa fa-ellipsis-v"}),s("i",{staticClass:"fa fa-ellipsis-v"})]),s("div",{staticClass:"menu-element"},[s("span",{staticClass:"label"},[t._v("Storyboard")]),s("span",{staticClass:"description"},[t._v("visualize the transcript as a grid")])])]),s("div",{staticClass:"menu-list"},[s("div",{staticClass:"menu-icon"},[s("i",{staticClass:"fa fa-volume-up"})]),s("div",{staticClass:"menu-element"},[s("span",{staticClass:"label"},[t._v("Edit Transcript")]),s("span",{staticClass:"description"},[t._v("Correct the transcript for errors")])])])])])],1),t._m(2)])])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-right-wrapper"},[s("div",{staticClass:"arrow-back"},[s("i",{staticClass:"fa fa-chevron-left"})]),s("div",{staticClass:"audio-description"},[s("span",{staticClass:"audio-label"},[t._v("Zoom_wav.mp3")]),s("span",{staticClass:"desc"},[t._v("Shared with Jogn Doe & 15 others")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"t-wrapper"},[s("span",{staticClass:"capital-t-icon"},[t._v("T")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sub-menu"},[s("div",{staticClass:"sub-menu-left"},[s("button",{staticClass:"btn-share"},[t._v("Share")]),s("span",[t._v("\n          Export\n          "),s("i",{staticClass:"fa fa-chevron-down"})]),s("i",{staticClass:"fa fa-search"}),s("i",{staticClass:"fa fa-link"}),s("i",{staticClass:"far fa-save"}),s("i",{staticClass:"fa fa-ellipsis-h"})]),s("div",{staticClass:"sub-menu-right"},[s("i",{staticClass:"fa fa-question-circle"}),s("i",{staticClass:"fa fa-bell"})])])}],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{appear:"",name:t.config.transition}},[t.config.show?s("div",{staticClass:"overlay",class:[!0===(t.config.showFullScreen&&t.config.show)?"full-screen":""],style:{position:t.config.isPositionFixed?"":"absolute"}},[s("div",{staticClass:"menu",style:t.config.style,attrs:{id:"menu"}},[t._t("default")],2)]):t._e()])},c=[],d={name:"Popover",props:{config:Object},methods:{documentClick:function(t){"overlay"===t.target.classList[0]&&(console.log("overlay clicked"),this.config.show=!1,this.$emit("popoverClose"))}},created:function(){window.addEventListener("click",this.documentClick)}},u=d,p=(s("4e99"),s("2877")),f=Object(p["a"])(u,r,c,!1,null,"0cd3d0e8",null),v=f.exports,m={data:function(){return{config:{show:!1,style:{width:"",left:"",top:"","border-radius":"","box-sizing":"","box-shadow":""}}}},components:{Popover:v},created:function(){this.config={show:!1,transition:"bounce-in-top",style:{width:"300px",left:"",top:"","border-radius":"5px","box-sizing":"border - box","box-shadow":"0px 4px 4px rgba(116, 116, 116, 0.25)"}}},methods:{openTranscript:function(t){this.config.show=!this.config.show;var e={width:"300px",left:this.$refs.editTranscript.offsetLeft+"px",top:this.$refs.navbar.offsetHeight-4+"px","border-radius":"5px","box-sizing":"border - box","box-shadow":"0px 4px 4px rgba(116, 116, 116, 0.25)"};this.$set(this.config,"style",e)}}},h=m,g=(s("f1d7"),Object(p["a"])(h,n,l,!1,null,"65179315",null)),b=g.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"transcribe-text-container"},[s("div",{staticClass:"block-left"}),s("div",{staticClass:"block-center todo-list"},[s("div",{staticClass:"file-title"},[t._v(t._s(t.fileTitle))]),t._l(t.todos,function(e,i){return s("div",{key:i,staticClass:"todo-wrapper",attrs:{id:"todo-wrapper"+i},on:{dragstart:function(e){return t.dragStart(i,e)},dragover:function(t){t.preventDefault()},dragenter:function(e){return t.dragEnter(e,i)},dragleave:function(e){return t.dragLeave(e,i)},dragend:t.dragEnd,drop:function(e){return t.dragFinish(i,e)}}},[s("div",{staticClass:"transcribe-text-block",on:{mouseover:function(e){return t.displayIcons(i)},mouseleave:function(e){return t.hideIcons(i)}}},[s("div",{staticClass:"handle-container",attrs:{id:"handle-container"+i}},[s("div",{staticClass:"icon-wrapper"},[s("div",{ref:"label"+i,refInFor:!0,staticClass:"icon label-icon",class:[{"active-icon":e.labelPopoverConfig.show},{"active-label":e.labelColor},{"hide-icon":!e.showIcons},{"on-popover-open":e.labelPopoverConfig.show||e.addActionPopoverConfig.show}],style:{color:e.labelColor},attrs:{id:"label"+i,ref:"exclude"}},[s("i",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:e.labelName||"Label",expression:" item.labelName|| 'Label'",modifiers:{left:!0}}],staticClass:"far fa-tag",on:{click:function(e){return t.openPopover("label",i)}}})]),s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:"Click here to drag",expression:"'Click here to drag'",modifiers:{top:!0}}],staticClass:"icon drag-icon",class:[{"hide-icon":!e.showIcons},{"on-popover-open":e.labelPopoverConfig.show||e.addActionPopoverConfig.show}],attrs:{id:"drag"+i},on:{mousedown:function(e){return t.addEventListener(e)}}},[s("i",{staticClass:"fa fa-ellipsis-v"}),s("i",{staticClass:"fa fa-ellipsis-v"})]),s("div",{ref:"add"+i,refInFor:!0,staticClass:"icon add-icon",class:[{"active-icon":e.addActionPopoverConfig.show},{"hide-icon":!e.showIcons},{"on-popover-open":e.labelPopoverConfig.show||e.addActionPopoverConfig.show}],attrs:{id:"add"+i}},[s("i",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom-end",value:"Click to add",expression:"'Click to add'",modifiers:{"bottom-end":!0}}],class:[e.addActionPopoverConfig.show?"fa fa-plus-circle":"fal fa-plus-circle"],on:{click:function(e){return t.openPopover("addAction",i)}}})])])]),s("div",{ref:"transcriber",refInFor:!0,staticClass:"todo-text-block"},[s("div",{class:{"active-line":e.addActionPopoverConfig.show}}),s("div",{staticClass:"todo-item",attrs:{id:"todo-item"+i,contenteditable:"true"}},[t._v("\n              "+t._s(e.title)+"\n            ")])])]),s("Popover",{attrs:{config:e.labelPopoverConfig}},[e.labelPopoverConfig.show?s("div",{attrs:{id:"label-modal"+i}},[s("div",{staticClass:"color-palette-container"},[s("div",{staticClass:"palette-header-container"},[s("div",{staticClass:"header"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.labelName,expression:"item.labelName"}],ref:"labelName",refInFor:!0,attrs:{contenteditable:"true",placeholder:"Label Name"},domProps:{value:e.labelName},on:{keyup:function(s){return t.saveLabelName(s,i,e.labelName)},input:function(s){s.target.composing||t.$set(e,"labelName",s.target.value)}}})])]),s("div",{staticClass:"color-list"},t._l(t.colors,function(a){return s("div",{staticClass:"color-item",on:{mouseover:function(t){a.isFocused=!0},mouseleave:function(t){a.isFocused=!1}}},[s("i",{staticClass:"fa fa-circle",class:{"active-color-item":e.labelColor===a.code},style:{color:a.code},on:{click:function(e){return t.selectLabelColor(i,a.code)}}}),s("div",{staticClass:"active-color",style:{backgroundColor:e.labelColor===a.code||a.isFocused?a.code:"#fff"}})])}),0)])]):t._e()]),s("Popover",{attrs:{config:e.addActionPopoverConfig}},[e.addActionPopoverConfig.show?s("div",{attrs:{id:"add-action-modal"+i}},[s("div",{staticClass:"add-action-container"},[s("div",{staticClass:"file-container",on:{click:function(e){return t.openPopover("addFile",i)}}},[s("div",{staticClass:"icon-container"},[s("div",{staticClass:"file-icon-wrapper"},[s("i",{staticClass:"far fa-file-audio"})])]),s("div",{staticClass:"description"},[s("div",{staticClass:"title"},[t._v("File")]),s("div",{staticClass:"sub-title"},[t._v("\n                    Add a media or transcribed file\n                  ")])])]),s("div",{staticClass:"paragraph-break-container"},[s("div",{staticClass:"icon-container"},[s("div",{staticClass:"paragraph-icon-wrapper"},[s("i",{staticClass:"fa fa-paragraph"})])]),s("div",{staticClass:"description"},[s("div",{staticClass:"title"},[t._v("Paragraph Break")]),s("div",{staticClass:"sub-title"},[t._v("Keyboard Shortcut-Enter Key")])])])])]):t._e()])],1)})],2),s("div",{staticClass:"block-right"})]),s("Popover",{attrs:{config:t.addFilePopoverConfig}},[s("div",[s("AddFiles",{on:{closeAddFile:function(e){return t.closeAddFilePopover()}}})],1)])],1)},y=[],w=s("774e"),_=s.n(w),x=(s("ac6a"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add-files-container"},[s("div",{staticClass:"add-files-content"},[s("div",{staticClass:"action-list"},t._l(t.actionList,function(e,i){return s("div",{key:i,staticClass:"action-item",class:t.selectedOption===e.name?"selected":"",on:{click:function(s){return t.changeView(e,i)}}},[t._v("\n        "+t._s(e.label)+"\n        ")])}),0),s("div",{staticClass:"action-content"},[s("transition",{attrs:{name:"component-fade",mode:"out-in"}},["spextdocs"===t.selectedOption?s("SpecsDocs"):"sounds"===t.selectedOption?s("Sounds"):"uploadmedia"===t.selectedOption?s("UploadMedia"):t._e()],1)],1)]),s("div",{staticClass:"add-files-footer"},[s("div",{staticClass:"message"},[t._v('\n      Uploaded files wont be transcribed here.To transcribe files,use the\n      "Transcribe" button in the top bar\n    ')]),s("div",{staticClass:"btn-container"},[s("div",{staticClass:"btn-wrapper"},[s("button",{staticClass:"btn cancel-btn",on:{click:function(e){return t.closePopover()}}},[t._v("\n          Cancel\n        ")])]),t._m(0)])])])}),P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"btn-wrapper add-file-btn-wrapper"},[s("button",{staticClass:"btn add-file-btn"},[t._v("Add File")])])}],E=(s("7f7f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spext-docs-container"},[s("div",{staticClass:"search-container"},[s("div",{staticClass:"sub-container"},[t._m(0),s("div",{staticClass:"input-cotainer"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.filename,expression:"filename"}],attrs:{type:"text",placeholder:"Search files"},domProps:{value:t.filename},on:{input:function(e){e.target.composing||(t.filename=e.target.value)}}})])])]),s("div",{staticClass:"file-results-container"},t._l(t.files,function(e){return s("div",{staticClass:"file"},[t._m(1,!0),s("div",{staticClass:"file-name"},[t._v("\n        "+t._s(e.title)+"\n      ")])])}),0)])}),I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("i",{staticClass:"fas fa-search"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon-container"},[s("i",{staticClass:"fas fa-file"})])}],F={name:"SpecsDocs",data:function(){return{filename:"",files:[{title:"File Title 1"},{title:"File Title 2"}]}}},L=F,k=(s("ca59"),Object(p["a"])(L,E,I,!1,null,null,null)),S=k.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"sounds"}},[s("div",{staticClass:"sound-nav"},[s("div",{staticClass:"sound-option",class:"yourMedia"===t.selectedSoundOption?"selected":"",on:{click:function(e){return t.toggle("yourMedia")}}},[s("div",{staticClass:"mar-b-10"},[t._v("Your Media")]),s("div",{staticClass:"underline"})]),s("div",{staticClass:"sound-option",class:"musicLibrary"===t.selectedSoundOption?"selected":"",on:{click:function(e){return t.toggle("musicLibrary")}}},[s("div",{staticClass:"mar-b-10"},[t._v("Music Library")]),s("div",{staticClass:"underline"})])]),s("div",{staticClass:"content"},[s("transition",{attrs:{name:"component-fade-y",mode:"out-in"}},["yourMedia"===t.selectedSoundOption?s("YourMedia"):t._e(),"musicLibrary"===t.selectedSoundOption?s("MusicLibrary"):t._e()],1)],1)])},A=[],N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music-library",attrs:{id:"musicLibrary"}},[t._m(0),s("div",{staticClass:"library-menu"},t._l(t.menus,function(e){return s("div",{staticClass:"menu-item",class:{selected:t.selectedMenu===e.value},on:{click:function(s){return t.changeOption(e)}}},[t._v("\n      "+t._s(e.label)+"\n    ")])}),0),s("div",{staticClass:"results"},[s("ul",{staticClass:"result-list"},t._l(t.results,function(e){return s("li",{staticClass:"item",class:{"selected-audio":t.selectedAudio===e.text},on:{click:function(s){return t.changeAudio(e)}}},[s("span",{staticClass:"icon"},[s("i",{class:e.icon})]),s("span",[t._v(t._s(e.text))])])}),0)])])},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-wrapper"},[s("div",{staticClass:"search"},[s("i",{staticClass:"fa fa-search"}),s("input",{attrs:{type:"text",placeholder:"Search Files"}})])])}],O={name:"MusicLibrary",components:{},data:function(){return{menus:[],selectedMenu:"",results:[],selectedAudio:""}},created:function(){this.menus=[{label:"Ambient",value:"ambient"},{label:"Morning",value:"morning"},{label:"Sad",value:"sad"},{label:"Mystery",value:"mystery"},{label:"Sunny",value:"sunny"}],this.selectedMenu=this.menus[0].value,this.results=[{icon:"fa fa-play-circle",text:"Claps"},{icon:"fa fa-play-circle",text:"Lift"},{icon:"fa fa-play-circle",text:"People Talking"},{icon:"fa fa-play-circle",text:"Birds Chirping"}],this.selectedAudio=this.results[0].text},methods:{changeOption:function(t){this.selectedMenu=t.value},changeAudio:function(t){this.selectedAudio=t.text}}},M=O,B=(s("440f"),Object(p["a"])(M,N,$,!1,null,"60e6dc80",null)),j=B.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("\n    Media\n")])},H=[],z={name:"YourMedia",data:function(){return{}},methods:{}},U=z,Y=(s("06c3"),Object(p["a"])(U,D,H,!1,null,"f84f0142",null)),G=Y.exports,J={name:"Sounds",components:{MusicLibrary:j,YourMedia:G},data:function(){return{selectedSoundOption:""}},created:function(){this.selectedSoundOption="musicLibrary"},methods:{toggle:function(t){this.selectedSoundOption=t}}},V=J,K=(s("5cd8"),Object(p["a"])(V,T,A,!1,null,null,null)),Z=K.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"parent-container"},[s("div",{staticClass:"bold header"},[t._v("Upload Media")]),"enter"===t.uploadStatus?s("div",[s("div",{staticClass:"upload-from-container"},[t._m(0),s("div",{staticClass:"row or"},[t._v("Or")]),s("div",{staticClass:"row btn-container"},[t._m(1),s("div",{staticClass:"btn-wrapper"},[s("button",{staticClass:"btn computer-btn",on:{click:function(e){return t.uploadFromComputer()}}},[t._v("\n            Upload from Computer\n          ")])])])])]):"uploadFile"===t.uploadStatus?s("div",[s("div",{staticClass:"upload-media-container"},[t._m(2),s("div",{staticClass:"bold title"},[t._v("Title")]),s("div",{staticClass:"title-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.titleName,expression:"titleName"}],attrs:{type:"text"},domProps:{value:t.titleName},on:{input:function(e){e.target.composing||(t.titleName=e.target.value)}}})]),s("div",{staticClass:"btn-container"},[s("button",{staticClass:"upload-btn",on:{click:function(e){return t.uploadFile()}}},[t._v("Upload")])])])]):"inprogress"===t.uploadStatus?s("div",{staticClass:"upload-progress-container"},[s("div",{staticClass:"upload-info"},[s("span",[t._v(t._s(t.titleName))]),s("span",[t._v("("+t._s(t.percentage)+"%)")])]),t._m(3)]):"complete"===t.uploadStatus?s("div",{staticClass:"upload-complete-container"},[t._m(4),t.titleName?s("span",{staticClass:"file-title"},[t._v(t._s(t.titleName))]):t._e()]):t._e()])},W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row link-input"},[s("input",{attrs:{type:"text",placeholder:"Copy paste a link here"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"btn-wrapper"},[s("button",{staticClass:"btn dropbox-btn"},[t._v("Upload from Dropbox")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"upload-media-input"},[s("input",{attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"progress-bar"},[s("div",{staticClass:"progress-outer"},[s("div",{staticClass:"progress-inner",attrs:{id:"progress-inner"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon-check-circle"},[s("i",{staticClass:"fas fa-check-circle"})])}],X={name:"UploadMedia",titleName:"",uploadStatus:"enter",percentage:0,data:function(){return{titleName:"",uploadStatus:"enter",percentage:0}},methods:{uploadFromComputer:function(){this.uploadStatus="uploadFile"},uploadFile:function(){var t=this;if(this.titleName){this.uploadStatus="inprogress";var e=setInterval(function(){t.percentage+=10,document.getElementById("progress-inner").style.width="".concat(t.percentage,"%"),100===t.percentage&&(clearInterval(e),t.uploadStatus="complete")},1e3)}}}},Q=X,R=(s("a948"),Object(p["a"])(Q,q,W,!1,null,null,null)),tt=R.exports,et={name:"AddFiles",actionList:[],components:{SpecsDocs:S,Sounds:Z,UploadMedia:tt},data:function(){return{selectedOption:""}},created:function(){this.actionList=[{label:"Spext Docs",name:"spextdocs",path:"/addfile/spextdocs"},{label:"Sounds",name:"sounds",path:"/addfile/sounds"},{label:"Upload Media",name:"uploadmedia",path:"/addfile/uploadmedia"}],this.selectedOption=this.actionList[0].name},methods:{changeView:function(t,e){this.selectedOption=t.name},closePopover:function(){this.$emit("closeAddFile")}}},st=et,it=(s("9a54"),Object(p["a"])(st,x,P,!1,null,null,null)),at=it.exports,ot={name:"TranscribedText",config:{},components:{Popover:v,AddFiles:at},data:function(){return{todos:[],colors:[{code:"#f44236",isFocused:!1},{code:"#e91d61",isFocused:!1},{code:"#00bbd4",isFocused:!1},{code:"#efc00c",isFocused:!1},{code:"#363f46",isFocused:!1},{code:"#4b4f46",isFocused:!1},{code:"#78554a",isFocused:!1},{code:"#1400ff",isFocused:!1},{code:"#ffaaaa",isFocused:!1},{code:"#673ab5",isFocused:!1},{code:"#9c25b1",isFocused:!1},{code:"#e48130",isFocused:!1}],numbers:[1,2,3,4,5,6],text:"",addFilePopover:!1,addFilePopoverConfig:{show:!1,showFullScreen:!0,transition:"bounce-center",style:{width:"",margin:"auto","max-height":"800px"}},fileTitle:"Zoom_wave.mp3"}},created:function(){this.todos=[{title:"1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n       ",labelColor:"",showHorizontalLine:!1,showIcons:!1,labelName:"",labelPopoverConfig:{show:!1,isPositionFixed:!1,transition:"bounce-in-left",style:{}},addActionPopoverConfig:{show:!1,isPositionFixed:!1,transition:"bounce-in-left",style:{}}},{title:"2: Contrary to popular belief, Lorem Ipsum is not simply random text.\n       ",labelColor:"",showHorizontalLine:!1,showIcons:!1,labelName:"",labelPopoverConfig:{show:!1,isPositionFixed:!1,transition:"bounce-in-left",style:{}},addActionPopoverConfig:{show:!1,isPositionFixed:!1,transition:"bounce-in-left",style:{}}},{title:"3: Contrary to popular belief, Lorem Ipsum is not simply random text..\n        ",labelColor:"",showHorizontalLine:!1,showIcons:!1,labelName:"",labelPopoverConfig:{show:!1,isPositionFixed:!1,transition:"bounce-in-left",style:{}},addActionPopoverConfig:{show:!1,isPositionFixed:!1,transition:"bounce-in-left",style:{}}}],this.activeTodoIndex=-1,this.activeDraggedItem=-1,this.lastMovedIndex=-1},methods:{addEventListener:function(){for(var t=document.getElementsByClassName("todo-wrapper"),e=0;e<t.length;e++)t[e].setAttribute("draggable",!0)},dragStart:function(t,e){this.activeDraggedItem=t,e.dataTransfer.setData("Text",this.id),e.dataTransfer.dropEffect="move",this.dragging=t,this.todos[t]["dragging"]=!0;var s=e.srcElement;if(s){s.style.opacity="0.4",document.getElementById("label"+t).style.display="none",document.getElementById("add"+t).style.display="none",document.getElementById("drag"+t).style.opacity="0";var i=document.createElement("div");i.innerHTML=s.innerHTML,i.id="draggedPsuedoEle";var a=window.getComputedStyle(s);_()(a).forEach(function(t){return i.style.setProperty(t,a.getPropertyValue(t),a.getPropertyPriority(t))})}i.style.position="absolute",i.style.top="0px",i.style.left="-100%",i.classList.add("draggedItem"),document.body.appendChild(i);var o=s.cloneNode(!0);o.classList.add("hidden-drag-ghost"),o.id="dragGhost",document.body.appendChild(o),e.dataTransfer.setDragImage(o,0,0)},dragEnter:function(t,e){this.todos[this.dragging].show,document.getElementById("label"+this.dragging).style.display="block",document.getElementById("add"+this.dragging).style.display="block",document.getElementById("drag"+this.dragging).style.opacity="1",this.activeTodoIndex!=e&&-1!=this.activeTodoIndex&&(document.getElementById("todo-wrapper"+this.activeTodoIndex).classList.remove("border-bottom"),document.getElementById("todo-wrapper"+this.activeTodoIndex).classList.remove("border-top")),this.activeTodoIndex=e,this.activeDraggedItem>=e?document.getElementById("todo-wrapper"+e).classList.add("border-top"):document.getElementById("todo-wrapper"+e).classList.add("border-bottom")},dragLeave:function(t,e){document.getElementById("label"+this.dragging).style.display="block",document.getElementById("add"+this.dragging).style.display="block",document.getElementById("drag"+this.dragging).style.opacity="1",this.activeTodoIndex!=e&&(document.getElementById("todo-wrapper"+e).classList.remove("border-bottom"),document.getElementById("todo-wrapper"+e).classList.remove("border-top"))},dragEnd:function(t){document.getElementById("label"+this.dragging).style.display="block",document.getElementById("add"+this.dragging).style.display="block",document.getElementById("drag"+this.dragging).style.opacity="1",this.dragging=-1;for(var e=document.getElementsByClassName("todo-wrapper"),s=0;s<e.length;s++)e[s].setAttribute("draggable",!1),e[s].classList.remove("border-bottom"),e[s].classList.remove("border-top");this.activeTodoIndex=-1,this.activeDraggedItem=-1,t.srcElement.style.opacity="1";var i=document.getElementById("draggedPsuedoEle"),a=document.getElementById("dragGhost");i&&i.parentNode.removeChild(i),a&&a.parentNode.removeChild(a)},dragFinish:function(t,e){document.getElementById("label"+this.dragging).style.display="block",document.getElementById("add"+this.dragging).style.display="block",document.getElementById("drag"+this.dragging).style.opacity="1",this.moveItem(this.dragging,t),this.todos[t]["dragging"]=!1,this.activeTodoIndex=-1;var s=document.getElementById("draggedPsuedoEle");s&&s.parentNode.removeChild(s);var i=document.getElementById("dragGhost");i&&i.parentNode.removeChild(i),this.todos[t].showIcons=!1},removeItemAt:function(t){this.todos.splice(t,1)},moveItem:function(t,e){-1===e?this.removeItemAt(t):this.todos.splice(e,0,this.todos.splice(t,1)[0])},onDrag:function(t){var e=document.getElementById("draggedPsuedoEle");if(e){var s=t.clientX,i=t.clientY;e.style.position="absolute",e.style.left=s-10+"px",e.style.top=i+2+"px",e.style.opacity="1"}},selectLabelColor:function(t,e){this.todos[t].labelColor=e,document.getElementById("label"+t).style.color=e,this.todos[t].labelColor=e},addNewItem:function(t,e){},openPopover:function(t,e){switch(t){case"addFile":this.todos[e].addActionPopoverConfig.show=!1,this.todos[e].showHorizontalLine=!1,this.addFilePopoverConfig.show=!0;var s={left:this.$refs.transcriber[0].offsetLeft+"px",width:this.$refs.transcriber[0].clientWidth+"px"};this.$set(this.addFilePopoverConfig,"style",s);break;case"label":this.todos[e].labelPopoverConfig.show=!this.todos[e].labelPopoverConfig.show,this.todos[e].addActionPopoverConfig.show&&(this.todos[e].addActionPopoverConfig.show=!1,this.todos[e].showHorizontalLine=!1),this.todos[e].labelColor||(this.todos[e].labelColor=this.colors[0].code);s={left:this.$refs["label"+e][0].offsetLeft+10+"px",top:this.$refs["label"+e][0].offsetTop+20+"px"};this.$set(this.todos[e].labelPopoverConfig,"style",s);break;case"addAction":this.todos[e].addActionPopoverConfig.show=!this.todos[e].addActionPopoverConfig.show,this.todos[e].showHorizontalLine=!this.todos[e].showHorizontalLine,this.todos[e].labelPopoverConfig.show&&(this.todos[e].labelPopoverConfig.show=!1);s={left:this.$refs["add"+e][0].offsetLeft+32+"px",top:this.$refs["add"+e][0].offsetTop+"px"};this.$set(this.todos[e].addActionPopoverConfig,"style",s);break}},displayIcons:function(t){this.todos[t].showIcons=!0},hideIcons:function(t){this.todos[t].showIcons=!1},closeAddFilePopover:function(){this.addFilePopoverConfig.show=!1},saveLabelName:function(t,e,s){13===t.keyCode&&(t.preventDefault(),this.todos[e].labelPopoverConfig.show=!1)}},mounted:function(){window.addEventListener("drag",this.onDrag)}},nt=ot,lt=(s("9b52"),Object(p["a"])(nt,C,y,!1,null,null,null)),rt=lt.exports,ct={name:"app",components:{TranscribedText:rt,Header:b}},dt=ct,ut=(s("034f"),Object(p["a"])(dt,a,o,!1,null,null,null)),pt=ut.exports,ft=s("8c4f");i["a"].use(ft["a"]);var vt=new ft["a"]({routes:[{path:"/",name:"TranscribedText",component:rt},{path:"/addfile",name:"addfile",component:at,children:[{path:"/",name:"spextdocs",component:S},{path:"spextdocs",name:"spextdocs",component:S},{path:"sounds",name:"sounds",component:Z,children:[{path:"",name:"musiclibrary",component:j},{path:"musiclibrary",name:"MusicLibrary",component:j},{path:"media",name:"media",component:G}]},{path:"uploadmedia",name:"uploadmedia",component:tt}]}]}),mt=vt,ht=s("e37d"),gt=s("1881"),bt=s.n(gt);i["a"].use(ht["a"]),i["a"].use(bt.a),i["a"].config.productionTip=!1,new i["a"]({router:mt,render:function(t){return t(pt)}}).$mount("#app")},"5cd8":function(t,e,s){"use strict";var i=s("d27c"),a=s.n(i);a.a},"64a9":function(t,e,s){},"8f86":function(t,e,s){},9446:function(t,e,s){},"9a54":function(t,e,s){"use strict";var i=s("fd85"),a=s.n(i);a.a},"9b52":function(t,e,s){"use strict";var i=s("aeb3"),a=s.n(i);a.a},a948:function(t,e,s){"use strict";var i=s("b2d5"),a=s.n(i);a.a},aeb3:function(t,e,s){},b2d5:function(t,e,s){},ca59:function(t,e,s){"use strict";var i=s("1a6c"),a=s.n(i);a.a},cdbf:function(t,e,s){},d27c:function(t,e,s){},f1d7:function(t,e,s){"use strict";var i=s("8f86"),a=s.n(i);a.a},fd85:function(t,e,s){}});
//# sourceMappingURL=app.72ae608c.js.map