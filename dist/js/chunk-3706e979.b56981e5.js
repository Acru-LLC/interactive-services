(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3706e979"],{"56e3":function(e,t,r){"use strict";r("e681")},"8c22":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e._self._c;return t("base-create-or-update-wrapper",{attrs:{"has-save-suspend":"","custom-title":e.isModeCreate?e.$t("actions.create"):e.$t("actions.update")},on:{save:e.save}},[t("CreateFormQuarter",{ref:"formQuarter"})],1)},a=[],n=r("c7eb"),i=r("1da1"),c=(r("b0c0"),r("170bc")),o=r("03f4"),u=(r("887a"),"statistic-report/directory/quarter"),d={name:"CreateOrUpdate",components:{CreateFormQuarter:c["default"]},data:function(){return{}},computed:{isModeCreate:function(){return console.log(this.$route),"CreateStatisticsReportQuarter"===this.$route.name},computedObserver:function(){return this.$refs.formQuarter.$refs.observer}},methods:{treeClosed:function(e){this.computedObserver.refs[e].validate()},normalizer:function(e){return e.children&&0!==e.children.length?{id:e.id,label:e.name,children:e.children&&e.children.length>0?e.children:[]}:(delete e.children,{id:e.id,label:e.name})},save:function(){var e=this;this.computedObserver.validate().then((function(t){t?e.$refs.formQuarter.editingItem.id?o["a"].update(u,e.$refs.formQuarter.editingItem).then((function(t){e.computedObserver.reset(),e.$refs.formQuarter.editingItem=Object.assign({},{}),e.$router.go(-1),e.$toast(e.$t("messages.saved_successfully"),{type:"success"})})):o["a"].create(u,e.$refs.formQuarter.editingItem).then((function(t){e.computedObserver.reset(),e.$refs.formQuarter.editingItem=Object.assign({},{}),e.$router.go(-1),e.$toast(e.$t("messages.saved_successfully"),{type:"success"})})):e.$toast(e.$t("messages.fill_required_fields"),{type:"error"})}))}},created:function(){return Object(i["a"])(Object(n["a"])().mark((function e(){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},f=d,l=(r("56e3"),r("2877")),m=Object(l["a"])(f,s,a,!1,null,"2f88b6da",null);t["default"]=m.exports},e681:function(e,t,r){}}]);