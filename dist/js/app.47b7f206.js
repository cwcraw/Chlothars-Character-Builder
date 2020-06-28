(function(t){function e(e){for(var r,c,s=e[0],h=e[1],o=e[2],u=0,v=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&v.push(n[c][0]),n[c]=0;for(r in h)Object.prototype.hasOwnProperty.call(h,r)&&(t[r]=h[r]);l&&l(e);while(v.length)v.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var h=a[s];0!==n[h]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},i=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],h=s.push.bind(s);s.push=e,s=s.slice();for(var o=0;o<s.length;o++)e(s[o]);var l=h;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),this.newCharVal?t._e():a("div",[a("button",{on:{click:t.newChar}},[t._v("New Character")]),a("PreviousCharacterDisplay")],1),this.newCharVal?a("div",[a("button",{on:{click:t.newChar}},[t._v("Previous Characters")]),a("NewCharacterDisplay")],1):t._e()],1)},i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("p",[t._v("Previous Character list")]),t._l(t.CharSheetList,(function(e){return a("h5",{key:e.id},[t._v(" ID: "+t._s(e.id)+", Name: "+t._s(e.name)+" ")])})),a("p",[t._v("Please select the character ID below")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.id=e.target.multiple?a:a[0]}}},t._l(t.CharSheetList,(function(e){return a("option",{key:e.id},[t._v(" "+t._s(e.id)+" ")])})),0),a("br"),a("button",{attrs:{id:"retrieveCharacterButton"},on:{click:t.Retrieve}},[t._v(" Retrieve This Character From Datatabase ")]),a("button",{on:{click:t.charUpdateDisplay}},[t._v(" Update This Character in the Datatabase ")]),this.charUpdateFlag?a("div",[a("CharacterUpdate",{attrs:{charSheet:this.updatingChar}})],1):t._e(),a("br")],2),a("div",{staticClass:"col-6"},[this.charDisplayFlag?a("div",[a("CharacterDisplay",{attrs:{charSheet:this.retrievedChar}})],1):t._e(),a("button",{on:{click:t.Delete}},[t._v(" Delete This Character From Datatabase ")])])])],1)},s=[],h=(a("96cf"),a("1da1")),o=a("8785"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[t._v(" Display As: "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.display,expression:"display"}],staticClass:"Display",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.display=e.target.multiple?a:a[0]}}},t._l(t.displayList,(function(e){return a("option",{key:e.id},[t._v(" "+t._s(e)+" ")])})),0),"JSON"===this.display?a("div",[a("h1",[t._v(t._s(t.charSheet))])]):"CSV"===this.display?a("div",[a("h1",[t._v(" Name, "+t._s(t.charSheet.name)+", Race, "+t._s(t.charSheet.race)+", Str, "+t._s(t.charSheet.str)+", Dex, "+t._s(t.charSheet.dex)+", Con, "+t._s(t.charSheet.con)+", Int, "+t._s(t.charSheet.int)+", Wis, "+t._s(t.charSheet.wis)+", Cha, "+t._s(t.charSheet.cha)+" ")])]):t._e(),"Browser"===this.display?a("div",[a("h1",[t._v(t._s(t.charSheet.name)+" the "+t._s(t.charSheet.race))]),a("h3",[t._v("Str: "+t._s(t.charSheet.str))]),a("h3",[t._v("Dex: "+t._s(t.charSheet.dex))]),a("h3",[t._v("Con: "+t._s(t.charSheet.con))]),a("h3",[t._v("Int: "+t._s(t.charSheet.int))]),a("h3",[t._v("Wis: "+t._s(t.charSheet.wis))]),a("h3",[t._v("Cha: "+t._s(t.charSheet.cha))])]):t._e()])])},u=[],v={name:"CharacterDisplay",data:function(){return{displayList:["Browser","JSON","CSV"],display:"Browser"}},props:{charSheet:Object}},p=v,d=a("2877"),m=Object(d["a"])(p,l,u,!1,null,null,null),_=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Character Update")]),a("div",[t._v(" Character Name: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.charName,expression:"charName"}],domProps:{value:t.charName},on:{input:function(e){e.target.composing||(t.charName=e.target.value)}}})]),a("div",[t._v(" Character Abilities: "),a("br"),t._v(" Previous Strength Score: "+t._s(this.charSheet.str)+" "),a("br"),t._v(" New Strength Score: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.charStr,expression:"charStr"}],domProps:{value:t.charStr},on:{input:function(e){e.target.composing||(t.charStr=e.target.value)}}}),t._v(" Strength Score: "+t._s(t.charStr)+" "),a("br"),a("br"),t._v(" Previous Dexterity Score: "+t._s(this.charSheet.dex)+" "),a("br"),t._v(" New Dexterity Score: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.charDex,expression:"charDex"}],domProps:{value:t.charDex},on:{input:function(e){e.target.composing||(t.charDex=e.target.value)}}}),t._v(" Dexterity Score: "+t._s(t.charDex)+" "),a("br"),a("br"),t._v(" Previous Constitution Score: "+t._s(this.charSheet.con)+" "),a("br"),t._v(" New Constitution Score: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.charCon,expression:"charCon"}],domProps:{value:t.charCon},on:{input:function(e){e.target.composing||(t.charCon=e.target.value)}}}),t._v(" Constitution Score: "+t._s(t.charCon)+" "),a("br"),a("br"),t._v(" Previous Intelligence Score: "+t._s(this.charSheet.int)+" "),a("br"),t._v(" New Intelligence Score: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.charInt,expression:"charInt"}],domProps:{value:t.charInt},on:{input:function(e){e.target.composing||(t.charInt=e.target.value)}}}),t._v(" Intelligence Score: "+t._s(t.charInt)+" "),a("br"),a("br"),t._v(" Previous Wisdom Score: "+t._s(this.charSheet.wis)+" "),a("br"),t._v(" New Wisdom Score: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.charWis,expression:"charWis"}],domProps:{value:t.charWis},on:{input:function(e){e.target.composing||(t.charWis=e.target.value)}}}),t._v(" Wisdom Score: "+t._s(t.charWis)+" "),a("br"),a("br"),t._v(" Previous Charisma Score: "+t._s(this.charSheet.cha)+" "),a("br"),t._v(" New Charisma Score: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.charCha,expression:"charCha"}],domProps:{value:t.charCha},on:{input:function(e){e.target.composing||(t.charCha=e.target.value)}}}),t._v(" Charisma Score: "+t._s(t.charCha)+" "),a("br")]),a("button",{attrs:{id:"Update"},on:{click:function(e){return t.charUpdate(t.charName,t.charRace,t.charStr,t.charDex,t.charCon,t.charInt,t.charWis,t.charCha)}}},[t._v(" Update character in Database ")])])},b=[],C=(a("b0c0"),a("9530")),S=a.n(C);function y(){var t=Object(o["a"])(["\n          mutation(\n            $id: ID!\n            $name: String!\n            $race: String!\n            $str: Int!\n            $dex: Int!\n            $con: Int!\n            $int: Int!\n            $wis: Int!\n            $cha: Int!\n          ) {\n            CharUpdate(\n              id: $id\n              name: $name\n              race: $race\n              str: $str\n              dex: $dex\n              con: $con\n              int: $int\n              wis: $wis\n              cha: $cha\n            ) {\n              name\n            }\n          }\n        "]);return y=function(){return t},t}var g={name:"characterUpdate",data:function(){return{charName:"",charRace:"",charStr:10,charDex:10,charCon:10,charInt:10,charWis:10,charCha:10}},mounted:function(){this.charName=this.charSheet.name,this.charRace=this.charSheet.race,this.charStr=this.charSheet.str,this.charDex=this.charSheet.dex,this.charCon=this.charSheet.con,this.charInt=this.charSheet.int,this.charWis=this.charSheet.wis,this.charCha=this.charSheet.cha,this.charId=this.charSheet.id},props:{charSheet:Object},methods:{reset:function(){this.charStr=this.charSheet.str,this.charDex=this.charSheet.dex,this.charCon=this.charSheet.con,this.charInt=this.charSheet.int,this.charWis=this.charSheet.wis,this.charCha=this.charSheet.cha,this.charName=this.charSheet.name,this.charRace=this.charSheet.race},charUpdate:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$apollo.mutate({mutation:S()(y()),variables:{id:this.charId,name:this.charName,race:this.charRace,str:parseInt(this.charStr),dex:this.charDex,con:this.charCon,int:this.charInt,wis:this.charWis,cha:this.charCha}});case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},w=g,x=Object(d["a"])(w,f,b,!1,null,"215c4de1",null),D=x.exports;function N(){var t=Object(o["a"])(["\n          query($id: ID!) {\n            GetChar(id: $id) {\n              id\n              name\n              race\n              str\n              dex\n              con\n              int\n              wis\n              cha\n            }\n          }\n        "]);return N=function(){return t},t}function O(){var t=Object(o["a"])(["\n          mutation($id: ID!) {\n            Delete(id: $id)\n          }\n        "]);return O=function(){return t},t}function I(){var t=Object(o["a"])(["\n          query($id: ID!) {\n            GetChar(id: $id) {\n              id\n              name\n              race\n              str\n              dex\n              con\n              int\n              wis\n              cha\n            }\n          }\n        "]);return I=function(){return t},t}function P(){var t=Object(o["a"])(["\n      query {\n        CharSheetList {\n          name\n          id\n        }\n      }\n    "]);return P=function(){return t},t}var R={name:"PreviousCharacterDisplay",apollo:{CharSheetList:S()(P())},data:function(){return{char:"",character:"",charSheet:{},id:0,retrievedChar:{},charUpdateFlag:!1,charDisplayFlag:!1}},components:{CharacterDisplay:_,CharacterUpdate:D},methods:{charUpdateDisplay:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$apollo.query({query:S()(I()),variables:{id:this.id}});case 2:e=t.sent,delete e.data.GetChar["__typename"],this.updatingChar=e.data.GetChar,this.charUpdateFlag=!0,this.charDisplayFlag=!1;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),Delete:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$apollo.mutate({mutation:S()(O()),variables:{id:this.id}});case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),Retrieve:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$apollo.query({query:S()(N()),variables:{id:this.id}});case 2:e=t.sent,delete e.data.GetChar["__typename"],delete e.data.GetChar["id"],this.retrievedChar=e.data.GetChar,this.charUpdateFlag=!1,this.charDisplayFlag=!0;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},$=R,j=Object(d["a"])($,c,s,!1,null,null,null),A=j.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("characterInput",{attrs:{id:"charInput"},on:{submit:t.display}})],1),a("div",{staticClass:"col-6"},[a("characterDisplay",{attrs:{charSheet:this.charSheet}}),a("button",{on:{click:t.Save}},[t._v("Save This Character To Datatabase")])],1)])},W=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[t._v(" Character Name: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.charName,expression:"charName"}],domProps:{value:t.charName},on:{input:function(e){e.target.composing||(t.charName=e.target.value)}}})]),a("div",[t._v(" Setting: "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.setting,expression:"setting"}],staticClass:"setting",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.setting=e.target.multiple?a:a[0]},t.setPoints]}},t._l(t.settingList,(function(e){return a("option",{key:e.id},[t._v(" "+t._s(e)+" ")])})),0)]),a("div",[t._v(" Initial Ability Points: "+t._s(t.abilityPoints)+" "),a("br"),t._v(" Remaining Ability Points: "+t._s(t.remAbilityPoints)+" ")]),a("div",[t._v(" Character Race: "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.charRace,expression:"charRace"}],staticClass:"race",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.charRace=e.target.multiple?a:a[0]}}},t._l(t.RaceList,(function(e){return a("option",{key:e.id},[t._v(" "+t._s(e)+" ")])})),0),"Human"===this.charRace?a("div",[a("p",[t._v(" Humans get a +2 Bonus to any 1 stat, please select the stat and see the bonus upon changing the value. ")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.extraPoint,expression:"extraPoint"}],staticClass:"race",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.extraPoint=e.target.multiple?a:a[0]}}},t._l(t.AblList,(function(e){return a("option",{key:e.id},[t._v(" "+t._s(e)+" ")])})),0)]):t._e(),"Gnome"===this.charRace?a("div",[a("p",[t._v("Gnomes have a +2 bonus to Cha and Con but a -2 penalty to Str.")])]):t._e(),"Dwarf"===this.charRace?a("div",[a("p",[t._v("Dwarfs have a +2 bonus to Wis and Con, but a -2 penalty to Cha.")])]):t._e(),"Elf"===this.charRace?a("div",[a("p",[t._v("Elves have a +2 bonus to Int and Dex, but a -2 penalty to Con.")])]):t._e()]),a("div",[t._v(" Character Abilities: "),a("br"),t._v(" Strength Selection "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.Str,expression:"Str"}],staticClass:"Abl_score",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.Str=e.target.multiple?a:a[0]},t.calcStr]}},t._l(t.pointList,(function(e){return a("option",{key:e.id},[t._v(" "+t._s(e)+" ")])})),0),t._v(" Strength Score: "+t._s(t.charStr)+" "),a("br"),a("br"),t._v(" Dexterity Selection "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.Dex,expression:"Dex"}],staticClass:"Abl_score",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.Dex=e.target.multiple?a:a[0]},t.calcDex]}},t._l(t.pointList,(function(e){return a("option",{key:e.id},[t._v(" "+t._s(e)+" ")])})),0),t._v(" Dexterity Score: "+t._s(t.charDex)+" "),a("br"),a("br"),t._v(" Constitution Selection "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.Con,expression:"Con"}],staticClass:"Abl_score",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.Con=e.target.multiple?a:a[0]},t.calcCon]}},t._l(t.pointList,(function(e){return a("option",{key:e.id},[t._v(" "+t._s(e)+" ")])})),0),t._v(" Constitution Score: "+t._s(t.charCon)+" "),a("br"),a("br"),t._v(" Intelligence Selection "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.Int,expression:"Int"}],staticClass:"Abl_score",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.Int=e.target.multiple?a:a[0]},t.calcInt]}},t._l(t.pointList,(function(e){return a("option",{key:e.id},[t._v(" "+t._s(e)+" ")])})),0),t._v(" Intelligence Score: "+t._s(t.charInt)+" "),a("br"),a("br"),t._v(" Wisdom Selection "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.Wis,expression:"Wis"}],staticClass:"Abl_score",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.Wis=e.target.multiple?a:a[0]},t.calcWis]}},t._l(t.pointList,(function(e){return a("option",{key:e.id},[t._v(" "+t._s(e)+" ")])})),0),t._v(" Wisdom Score: "+t._s(t.charWis)+" "),a("br"),a("br"),t._v(" Charisma Selection "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.Cha,expression:"Cha"}],staticClass:"Abl_score",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.Cha=e.target.multiple?a:a[0]},t.calcCha]}},t._l(t.pointList,(function(e){return a("option",{key:e.id},[t._v(" "+t._s(e)+" ")])})),0),t._v(" Charisma Score: "+t._s(t.charCha)+" "),a("br")]),a("button",{attrs:{id:"Display"},on:{click:function(e){return t.$emit("submit",t.charName,t.charRace,t.charStr,t.charDex,t.charCon,t.charInt,t.charWis,t.charCha)}}},[t._v(" Update Display ")]),a("button",{on:{click:t.reset}},[t._v("New Character")])])},L=[],U={name:"characterInput",data:function(){return{RaceList:["Human","Gnome","Dwarf","Elf"],AblList:["Str","Dex","Con","Int","Wis","Cha"],extraPoint:"",pointList:[-4,-2,-1,0,1,2,3,5,7,10,13,17],pointObj:{"-4":7,"-2":8,"-1":9,0:10,1:11,2:12,3:13,5:14,7:15,10:16,13:17,17:18},scoreObj:{7:-4,8:-2,9:-1,10:0,11:1,12:2,13:3,14:5,15:7,16:10,17:13,18:17},settingList:["Low Fantasy","Standard Fantasy","High Fantasy","Epic Fantasy"],settingObj:{"Low Fantasy":10,"Standard Fantasy":15,"High Fantasy":20,"Epic Fantasy":25},setting:0,abilityPoints:15,remAbilityPoints:15,charName:"",charRace:"",charStr:10,charDex:10,charCon:10,charInt:10,charWis:10,charCha:10,rawStr:10,rawDex:10,rawCon:10,rawInt:10,rawWis:10,rawCha:10,Str:0,Dex:0,Int:0,Wis:0,Con:0,Cha:0}},methods:{reset:function(){this.charStr=10,this.charDex=10,this.charCon=10,this.charInt=10,this.charWis=10,this.charCha=10,this.charName="",this.charRace=""},setPoints:function(){this.abilityPoints=this.settingObj[this.setting],this.remAbilityPoints=this.abilityPoints},calcStr:function(){this.remAbilityPoints=this.remAbilityPoints+this.scoreObj[this.rawStr]-this.Str;var t=this.pointObj[this.Str];return isNaN(t)&&(t=0),this.rawStr=t,"Gnome"===this.charRace&&(t-=2),"Human"===this.charRace&&"Str"===this.extraPoint&&(t+=2),this.charStr=t,this.charStr},calcDex:function(){this.remAbilityPoints=this.remAbilityPoints+this.scoreObj[this.rawDex]-this.Dex;var t=this.pointObj[this.Dex];return isNaN(t)&&(t=0),this.rawDex=t,"Elf"===this.charRace&&(t+=2),"Human"===this.charRace&&"Dex"===this.extraPoint&&(t+=2),this.charDex=t,this.charDex},calcCon:function(){this.remAbilityPoints=this.remAbilityPoints+this.scoreObj[this.rawCon]-this.Con;var t=this.pointObj[this.Con];return isNaN(t)&&(t=0),this.rawCon=t,"Elf"===this.charRace?t-=2:("Dwarf"===this.charRace||"Gnome"===this.charRace)&&(t+=2),"Human"===this.charRace&&"con"===this.extraPoint&&(t+=2),this.charCon=t,this.charCon},calcInt:function(){this.remAbilityPoints=this.remAbilityPoints+this.scoreObj[this.rawInt]-this.Int;var t=this.pointObj[this.Int];return isNaN(t)&&(t=0),this.rawInt=t,"Elf"===this.charRace&&(t+=2),"Human"===this.charRace&&"Int"===this.extraPoint&&(t+=2),this.charInt=t,this.charInt},calcWis:function(){this.remAbilityPoints=this.remAbilityPoints+this.scoreObj[this.rawWis]-this.Wis;var t=this.pointObj[this.Wis];return isNaN(t)&&(t=0),this.rawWis=t,"Dwarf"===this.charRace&&(t+=2),"Human"===this.charRace&&"Wis"===this.extraPoint&&(t+=2),this.charWis=t,this.charWis},calcCha:function(){this.remAbilityPoints=this.remAbilityPoints+this.scoreObj[this.rawCha]-this.Cha;var t=this.pointObj[this.Cha];return isNaN(t)&&(t=0),this.rawCha=t,"Gnome"===this.charRace?t+=2:"Dwarf"===this.charRace&&(t-=2),"Human"===this.charRace&&"Cha"===this.extraPoint&&(t+=2),this.charCha=t,this.charCha}}},B=U,F=Object(d["a"])(B,k,L,!1,null,"0a116af4",null),H=F.exports;function V(){var t=Object(o["a"])(["\n          mutation(\n            $name: String!\n            $race: String!\n            $str: Int!\n            $dex: Int!\n            $con: Int!\n            $int: Int!\n            $wis: Int!\n            $cha: Int!\n          ) {\n            NewCharSheet(\n              name: $name\n              race: $race\n              str: $str\n              dex: $dex\n              con: $con\n              int: $int\n              wis: $wis\n              cha: $cha\n            ) {\n              name\n            }\n          }\n        "]);return V=function(){return t},t}var G={name:"NewCharacterDisplay",components:{CharacterInput:H,CharacterDisplay:_},data:function(){return{character:"",charSheet:{}}},methods:{Save:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0!==this.charName){t.next=3;break}return t.next=3,document.getElementById("Display").click();case 3:return t.next=5,this.$apollo.mutate({mutation:S()(V()),variables:{name:this.charName,race:this.charRace,str:this.charStr,dex:this.charDex,con:this.charCon,int:this.charInt,wis:this.charWis,cha:this.charCha}});case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),display:function(t,e,a,r,n,i,c,s){this.charName=t,this.charRace=e,this.charStr=a,this.charDex=r,this.charCon=n,this.charInt=i,this.charWis=c,this.charCha=s,this.charSheet={name:t,race:e,str:a,dex:r,con:n,int:i,wis:c,cha:s}}}},T=G,q=Object(d["a"])(T,E,W,!1,null,null,null),M=q.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header"}},[t._v(" Welcome to Chlothar's Character Creator ")])},z=[],K={name:"Header"},Q=K,X=(a("af74"),Object(d["a"])(Q,J,z,!1,null,"bfcf1158",null)),Y=X.exports,Z={name:"App",components:{Header:Y,PreviousCharacterDisplay:A,NewCharacterDisplay:M},data:function(){return{prevCharVal:!1,newCharVal:!1}},methods:{newChar:function(){this.newCharVal=!this.newCharVal}}},tt=Z,et=(a("034f"),Object(d["a"])(tt,n,i,!1,null,null,null)),at=et.exports,rt=a("2c82"),nt=a("522d"),it=a("2f62");a("ed18").config(a("94ff")(".env"));a("a1bc");r["a"].use(nt["a"]),r["a"].use(it["a"]);new it["a"].Store({state:{currChar:{},charList:{}},mutations:{changeChar:function(){}}});var ct=new rt["a"]({uri:Object({NODE_ENV:"production",BASE_URL:"/"}).DATABASE_URL||"http://localhost:4000/"}),st=new nt["a"]({defaultClient:ct});r["a"].config.productionTip=!1,new r["a"]({apolloProvider:st,render:function(t){return t(at)}}).$mount("#app")},"85ec":function(t,e,a){},"8faa":function(t,e,a){},a1bc:function(t,e,a){a("ed18").config(a("94ff")(".env")),t.exports={db:{client:"pg",connection:Object({NODE_ENV:"production",BASE_URL:"/"}).DB_URL||{host:Object({NODE_ENV:"production",BASE_URL:"/"}).DB_HOST||"127.0.0.1",port:Object({NODE_ENV:"production",BASE_URL:"/"}).DB_PORT||5432,database:Object({NODE_ENV:"production",BASE_URL:"/"}).DB_NAME||"characters",user:Object({NODE_ENV:"production",BASE_URL:"/"}).DB_USER||"cwcra",password:Object({NODE_ENV:"production",BASE_URL:"/"}).DB_PASSWORD||"postgres"}}}},aee3:function(t,e){function a(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id="aee3"},af74:function(t,e,a){"use strict";var r=a("8faa"),n=a.n(r);n.a}});
//# sourceMappingURL=app.47b7f206.js.map