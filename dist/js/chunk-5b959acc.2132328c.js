(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b959acc"],{"51e5":function(e,t,n){"use strict";n("cbfd")},6427:function(e,t,n){"use strict";n.r(t);var a=n("8468"),r=function(){var e=this,t=e._self._c;return t("base-create-or-update-wrapper",{attrs:{"has-save-suspend":"","custom-title":e.isModeCreate?e.$t("actions.create"):e.$t("actions.update")},on:{save:e.save}},[t("ValidationObserver",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(n){return Object(a["a"])(n),[t("b-row",{staticClass:"mb-3"},[t("b-col",{attrs:{sm:"12",md:"6"}},[t("BaseInputWithValidation",{staticClass:"required",attrs:{rules:"required",label:e.$t("column.name_uz"),placeholder:e.$t("column.name_uz")},model:{value:e.editingItem.nameUz,callback:function(t){e.$set(e.editingItem,"nameUz",t)},expression:"editingItem.nameUz"}})],1),t("b-col",{attrs:{sm:"12",md:"6"}},[t("BaseInputWithValidation",{attrs:{"not-required":"",label:e.$t("column.name_lt"),placeholder:e.$t("column.name_lt")},model:{value:e.editingItem.nameLt,callback:function(t){e.$set(e.editingItem,"nameLt",t)},expression:"editingItem.nameLt"}})],1)],1),t("b-row",{staticClass:"mb-3"},[t("b-col",{attrs:{sm:"12",md:"6"}},[t("BaseInputWithValidation",{attrs:{"not-required":"",label:e.$t("column.name_ru"),placeholder:e.$t("column.name_ru")},model:{value:e.editingItem.nameRu,callback:function(t){e.$set(e.editingItem,"nameRu",t)},expression:"editingItem.nameRu"}})],1),t("b-col",{attrs:{sm:"12",md:"6"}})],1)]}}])})],1)},s=[],i=n("c7eb"),c=n("1da1"),o=(n("b0c0"),n("03f4")),u="directory/form-of-ownerships",d={name:"CreateOrUpdate",props:{customIsModeCreate:{type:Boolean,default:!1}},components:{},data:function(){return{editingItem:{},statuses:[]}},computed:{isModeCreate:function(){return"CreateFormOfOwnership"===this.$route.name},computedObserver:function(){return this.$refs.observer}},methods:{treeClosed:function(e){this.computedObserver.refs[e].validate()},normalizer:function(e){return e.children&&0!==e.children.length?{id:e.id,label:e.name,children:e.children&&e.children.length>0?e.children:[]}:(delete e.children,{id:e.id,label:e.name})},save:function(){var e=this;this.computedObserver.validate().then((function(t){t?e.editingItem.id?o["a"].update(u,e.editingItem).then((function(t){e.computedObserver.reset(),e.editingItem=Object.assign({},{}),e.$router.go(-1),e.$toast(e.$t("messages.saved_successfully"),{type:"success"})})):o["a"].create(u,e.editingItem).then((function(t){e.computedObserver.reset(),e.editingItem=Object.assign({},{}),e.$router.go(-1),e.$toast(e.$t("messages.saved_successfully"),{type:"success"})})):e.$toast(e.$t("messages.fill_required_fields"),{type:"error"})}))}},created:function(){var e=this;return Object(c["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.var_default_search_payload.itemsPerPage=500,!e.isModeCreate){t.next=6;break}return t.next=4,o["a"].getEmpty(u).then((function(t){e.editingItem=t.data})).catch((function(e){console.log(e)}));case 4:t.next=8;break;case 6:return t.next=8,o["a"].getById(u,e.$route.params.id,!1).then((function(t){e.editingItem=t.data})).catch((function(e){console.log(e)}));case 8:case"end":return t.stop()}}),t)})))()}},l=d,m=(n("51e5"),n("2877")),f=Object(m["a"])(l,r,s,!1,null,"45c0074d",null);t["default"]=f.exports},8468:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("d9e2");function a(e){if(null==e)throw new TypeError("Cannot destructure "+e)}},cbfd:function(e,t,n){}}]);