(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5401"],{"944d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"col-md-12 text-center"},[e("div",{staticClass:"h4 mb-4 d-inline-block"},[t._v(t._s(t.$t("submodules.ad_volume_types_by_location_type.title")))])]),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row mb-2"},[e("div",{staticClass:"col-sm-8"}),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"text-sm-end"},[e("b-btn",{staticClass:"btn btn-success btn-rounded mb-2 me-2",attrs:{type:"button",to:{name:"CreateAdvertisementVolumeTypesByLocationType"}}},[e("i",{staticClass:"mdi mdi-plus me-1"}),t._v(" "+t._s(t.$t("actions.add"))+" ")])],1)])]),e("b-table",{staticClass:"custom-b-table",attrs:{items:t.tableItems,fields:t.tableFields,busy:t.loadingTableItems,id:"my-table",responsive:"",bordered:"",small:"",hover:"","show-empty":""},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[t._v(" "+t._s(t.util_paginate(e.index,t.var_default_search_payload.page,t.var_default_search_payload.itemsPerPage))+" ")]}},{key:"cell(adLocationType)",fn:function(e){return[t._v(" "+t._s(t.getName({nameRu:e.item.directoryAdvertisementLocationTypeNameRu,nameLt:e.item.directoryAdvertisementLocationTypeNameLt,nameUz:e.item.directoryAdvertisementLocationTypeNameUz}))+" ")]}},{key:"cell(adVolumeTypes)",fn:function(a){return[e("div",{staticClass:"d-flex align-items-center flex-wrap"},[e("ul",t._l(a.item.volumeTypes,(function(a,s){return e("li",{key:"location-volume-".concat(s)},[t._v(t._s(t.getName({nameRu:a.nameRu,nameLt:a.nameLt,nameUz:a.nameUz})))])})),0)])]}},{key:"cell(actions)",fn:function(a){return[e("div",{staticClass:"general-table__actions d-flex justify-content-center"},[e("b-btn",{staticClass:"text-decoration-none p-0",staticStyle:{"font-size":"1.2rem","margin-right":"1rem"},attrs:{variant:"link"}},[e("i",{staticClass:"mdi mdi-circle-edit-outline edit",on:{click:function(e){return t.editItem(a.item.directoryAdvertisementLocationTypeId)}}})]),e("b-btn",{staticClass:"text-decoration-none p-0 text-danger",staticStyle:{"font-size":"1.2rem"},attrs:{variant:"link"}},[e("i",{staticClass:"mdi mdi-trash-can delete",on:{click:function(e){return t.deleteItem(a.item.directoryAdvertisementLocationTypeId)}}})])],1)]}},{key:"empty",fn:function(){return[e("h4",{staticClass:"text-center"},[t._v(t._s(t.$t("messages.data_not_found")))])]},proxy:!0},{key:"table-busy",fn:function(){return[e("div",{staticClass:"text-center my-2"},[e("b-spinner",{staticClass:"align-middle",attrs:{variant:"primary"}})],1)]},proxy:!0}])})],1)])])])},n=[],i=a("ade3"),l=(a("a4d3"),a("e01a"),a("d3b7"),a("159b"),a("14d9"),a("9225"),a("c2a4")),o=a("03f4"),c="directory/advertisement-formatters",r={page:{title:"Advertisement Privilege Coefficient",meta:[{name:"description",content:l.description}]},components:{},data:function(){var t;return{loadingTableItems:!1,json_fields:(t={},Object(i["a"])(t,this.$t("column.name_uz"),"nameUz"),Object(i["a"])(t,this.$t("column.name_lt"),"nameLt"),Object(i["a"])(t,this.$t("column.name_ru"),"nameRu"),Object(i["a"])(t,this.$t("column.ad_design_types"),"designTypes"),t),json_data:[],json_meta:[[{key:"charset",value:"utf-8"}]],searchKeyword:"",selected:20,optionsTable:[{value:20,text:20},{value:50,text:50},{value:100,text:100},{value:150,text:150},{value:200,text:200}],title:"Departments",activeDep:{},tableItems:[],totalItems:0,tableFields:[{label:"#",thClass:"text-center",tdClass:"text-center",sortable:!1,key:"index"},{label:this.$t("column.ad_location_type"),key:"adLocationType"},{label:this.$t("submodules.ad_volume_types.title_plural"),key:"adVolumeTypes"},{label:this.$t("column.actions"),key:"actions",thClass:"text-center",tdClass:"text-center",sortable:!1}]}},computed:{numberOfPages:function(){return!this.totalItems||this.totalItems<=0||this.totalItems<this.var_default_search_payload.itemsPerPage?1:this.totalItems/this.var_default_search_payload.itemsPerPage}},methods:{downloadExcel:function(){var t=this;this.json_data=[],this.tableItems.forEach((function(e){var a={designTypes:[]};a.nameUz=e.nameUz,a.nameLt=e.nameLt,a.nameRu=e.nameRu,e.designTypes.forEach((function(t){a.designTypes.push(t.nameUz)})),t.json_data.push(a)}))},selectList:function(t){this.var_default_search_payload.itemsPerPage="all"==t?this.totalItems:t,this.fetchTableItems()},fetchTableItems:function(){var t=this;this.loadingTableItems=!0,this.var_default_search_payload.keyword=this.searchKeyword,o["a"].searchListWithKeyword(c,this.var_default_search_payload).then((function(e){t.tableItems=e.data})).catch((function(e){t.tableItems=[],t.totalItems=0})).finally((function(){t.loadingTableItems=!1}))},editItem:function(t){this.$router.push({name:"UpdateAdvertisementVolumeTypesByLocationType",params:{id:t}})},deleteItem:function(t){var e=this;this.$bvModal.msgBoxConfirm(this.$t("messages.delete_title"),{okTitle:this.$t("actions.confirm"),cancelTitle:this.$t("actions.cancel")}).then((function(a){a&&o["a"].deleteById(c,t).then((function(t){e.fetchTableItems()})).catch((function(t){console.log(t)}))})).catch((function(t){}))}},created:function(){this.fetchTableItems()},watch:{"var_default_search_payload.page":{handler:function(){this.fetchTableItems()}}}},d=r,m=a("2877"),u=Object(m["a"])(d,s,n,!1,null,"5205a0f5",null);e["default"]=u.exports}}]);