(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39f8910e","chunk-62b6a48c"],{"4e9a":function(t,e,n){"use strict";n.r(e);n("d81d");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"col-md-12 text-center"},[e("div",{staticClass:"h4 mb-4 d-inline-block"},[t._v(t._s(t.$t("word_templates.categories")))])]),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row mb-2"},[e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"search-box me-4 mb-2 d-inline-block"},[e("div",{staticClass:"position-relative"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKeyword,expression:"searchKeyword"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.$t("column.search")},domProps:{value:t.searchKeyword},on:{input:[function(e){e.target.composing||(t.searchKeyword=e.target.value)},t.fetchTableItems]}}),e("i",{staticClass:"bx bx-search-alt search-icon"})])]),e("div",{staticClass:"col-3 me-2 mx-2 d-inline-block"},[e("span",[t._v(t._s(t.$t("column.select.text1"))+" "+t._s(t.$t("column.select.text2")))]),e("div",{staticClass:"position-relative"},[e("b-form-select",{staticClass:"form-select",attrs:{options:t.optionsTable},on:{change:t.selectList},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)]),e("div",{staticClass:"col-5 me-2 mx-2 d-inline-block"},[e("base-multiselect-with-validation",{attrs:{"not-required":"","label-on-top":"",placeholder:"","preserve-search":"","with-create-addition":"","open-direction":"bottom",label:t.$t("word_templates.categories"),"max-height":600,searchable:!0,"show-labels":!1,"clear-on-select":!1,"close-on-select":!1,"internal-search":!1,"custom-label":t.customLabelCategory,"custom-styles":{display:"block"},options:t.category.map((function(t){return t.id}))},model:{value:t.templateCategory,callback:function(e){t.templateCategory=e},expression:"templateCategory"}})],1)]),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"text-sm-end"},[e("b-row",[e("b-col",{attrs:{cols:"7"}}),e("b-col",{attrs:{cols:"5"}},[e("b-btn",{staticClass:"btn btn-success btn-rounded mb-2 me-2",attrs:{type:"button",to:{name:"CreateTemplates"}}},[e("i",{staticClass:"mdi mdi-plus me-1"}),t._v(" "+t._s(t.$t("actions.add"))+" ")])],1)],1)],1)])]),e("b-table",{staticClass:"custom-b-table",attrs:{items:t.tableItems,fields:t.tableFields,busy:t.loadingTableItems,id:"my-table",responsive:"",striped:"",bordered:"",small:"","show-empty":""},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[t._v(" "+t._s(t.util_paginate(e.index,t.var_default_search_payload.page,t.var_default_search_payload.itemsPerPage))+" ")]}},{key:"cell(bodyHtml)",fn:function(n){return[e("span",{staticClass:"text",domProps:{innerHTML:t._s(n.item.bodyHtml)}}),e("b-badge",{staticStyle:{cursor:"pointer"},attrs:{variant:"primary"},on:{click:function(e){return t.eyeItem(n.item.id)}}},[t._v(" "+t._s(t.$t("word_templates.full_text"))+" ")])]}},{key:"cell(category)",fn:function(n){return[e("p",[t._v(" "+t._s(t.getName({nameRu:n.item.categoryNameRu,nameLt:n.item.categoryNameLt,nameUz:n.item.categoryNameUz}))+" ")])]}},{key:"cell(actions)",fn:function(n){return[e("div",{staticClass:"general-table__actions d-flex justify-content-center"},[e("b-btn",{staticClass:"text-decoration-none p-0",staticStyle:{"font-size":"1.2rem","margin-right":"1rem"},attrs:{variant:"link"}},[e("i",{staticClass:"mdi mdi-circle-edit-outline edit",on:{click:function(e){return t.editItem(n.item.id)}}})]),e("b-btn",{staticClass:"text-decoration-none p-0 text-danger",staticStyle:{"font-size":"1.2rem"},attrs:{variant:"link"}},[e("i",{staticClass:"mdi mdi-trash-can delete",on:{click:function(e){return t.deleteItem(n.item.id)}}})])],1)]}},{key:"empty",fn:function(){return[e("h4",{staticClass:"text-center"},[t._v(t._s(t.$t("messages.data_not_found")))])]},proxy:!0},{key:"table-busy",fn:function(){return[e("div",{staticClass:"text-center my-2"},[e("b-spinner",{staticClass:"align-middle",attrs:{variant:"primary"}})],1)]},proxy:!0}])}),e("b-pagination",{staticClass:"justify-content-end",attrs:{"total-rows":t.totalItems,"per-page":t.var_default_search_payload.itemsPerPage,"aria-controls":"my-table"},model:{value:t.var_default_search_payload.page,callback:function(e){t.$set(t.var_default_search_payload,"page",e)},expression:"var_default_search_payload.page"}})],1)])])])},r=[],o=n("c7eb"),c=n("1da1"),i=(n("a4d3"),n("e01a"),n("7db0"),n("d3b7"),n("159b"),n("14d9"),n("c2a4")),s=n("03f4"),l=n("887a"),d="templates",u={page:{title:"Positions",meta:[{name:"description",content:i.description}]},components:{},data:function(){return{category:[],templateCategory:null,loadingTableItems:!1,json_fields:{"Name Uz":"nameUz","Name Lt":"nameLt","Name Ru":"nameRu"},json_data:[],json_meta:[[{key:"charset",value:"utf-8"}]],searchKeyword:"",selected:20,optionsTable:[{value:20,text:20},{value:50,text:50},{value:100,text:100},{value:150,text:150},{value:200,text:200}],title:"Positions",activeDep:{},tableItems:[],totalItems:0,tableFields:[{label:"#",thClass:"text-center",tdClass:"text-center",sortable:!1,key:"index",thStyle:{width:"3%"}},{label:this.$t("word_templates.templates"),key:"bodyHtml",thClass:"text-center",tdClass:"text-center",thStyle:{width:"70%"}},{label:this.$t("word_templates.category_name"),key:"category",thClass:"text-center",tdClass:"text-center",thStyle:{width:"20%"}},{label:this.$t("column.actions"),key:"actions",thClass:"text-center",tdClass:"text-center",sortable:!1,thStyle:{width:"7%"}}]}},computed:{numberOfPages:function(){return!this.totalItems||this.totalItems<=0||this.totalItems<this.var_default_search_payload.itemsPerPage?1:this.totalItems/this.var_default_search_payload.itemsPerPage}},methods:{getCategory:function(){var t=this;return Object(c["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].searchListWithKeyword("template/category",t.var_default_search_payload).then((function(e){t.category=e.data.list})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},customLabelCategory:function(t){var e=this.category.find((function(e){return e.id===t}));return e?"".concat(this.getName({nameRu:e.nameRu,nameLt:e.nameLt,nameUz:e.nameUz})):""},fetchDateTypesByParentId:function(t,e){var n=this,a=Object.assign({},this.var_default_search_payload);a.page=0,a.itemsPerPage=500,this.$set(this.tableItems[e],"loadingInnerData",!0),l["a"].fetchDateTypesByParentId(t,a).then((function(t){n.$set(n.tableItems[e],"children",t.data.list)})).catch((function(t){n.$set(n.tableItems[e],"children",[])})).finally((function(){n.$set(n.tableItems[e],"loadingInnerData",!1)}))},rowClicked:function(t,e){this.$set(t,"_showDetails",!t._showDetails),this.fetchDateTypesByParentId(t.id,e)},downloadExcel:function(){var t=this;this.json_data=[],this.tableItems.forEach((function(e){var n={};n.nameUz=e.nameUz,n.nameLt=e.nameLt,n.nameRu=e.nameRu,t.json_data.push(n)}))},selectList:function(t){this.var_default_search_payload.itemsPerPage="all"==t?this.totalItems:t,this.fetchTableItems()},fetchTemplateList:function(){var t=arguments,e=this;return Object(c["a"])(Object(o["a"])().mark((function n(){var a,r;return Object(o["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:"",t.length>1&&void 0!==t[1]?t[1]:null,e.loadingTableItems=!0,r=Object.assign({},e.var_default_search_payload),r.page=0,r.itemsPerPage=500,n.next=8,l["a"].getTemplateByCategoryId(e.templateCategory,a,r).then((function(t){e.tableItems=t.data.list,e.totalItems=t.data.total})).catch((function(t){e.templates=[]})).finally((function(){e.loadingTableItems=!1}));case 8:case"end":return n.stop()}}),n)})))()},fetchTableItems:function(){var t=this;this.loadingTableItems=!0,this.var_default_search_payload.keyword=this.searchKeyword,s["a"].searchListWithKeyword(d,this.var_default_search_payload).then((function(e){t.tableItems=e.data.list,t.totalItems=e.data.total})).catch((function(e){t.tableItems=[],t.totalItems=0})).finally((function(){t.loadingTableItems=!1}))},editItem:function(t){this.$router.push({name:"UpdateTemplates",params:{id:t}})},eyeItem:function(t){this.$router.push({name:"SeeTemplates",params:{id:t}})},deleteItem:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvModal.msgBoxConfirm(this.$t("messages.delete_title"),{okTitle:this.$t("actions.confirm"),cancelTitle:this.$t("actions.cancel")}).then((function(o){o&&s["a"].deleteById(d,t).then((function(t){r&&n?e.fetchDateTypesByParentId(n,a):e.fetchTableItems()})).catch((function(t){console.log(t)}))})).catch((function(t){}))}},created:function(){var t=this;return Object(c["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchTableItems();case 2:return e.next=4,t.getCategory();case 4:case"end":return e.stop()}}),e)})))()},watch:{templateCategory:{handler:function(t){null!==t&&this.fetchTemplateList("")}},"var_default_search_payload.page":{handler:function(){this.fetchTableItems()}}}},g=u,p=(n("7454"),n("2877")),f=Object(p["a"])(g,a,r,!1,null,"7bfa0771",null);e["default"]=f.exports},"6d85":function(t,e,n){},7454:function(t,e,n){"use strict";n("6d85")},"7db0":function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").find,o=n("44d2"),c="find",i=!0;c in[]&&Array(1)[c]((function(){i=!1})),a({target:"Array",proto:!0,forced:i},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o(c)},"887a":function(t,e,n){"use strict";n("99af"),n("b0c0");var a=n("f2db"),r=(n("7476"),{getTemplateByCategoryId:function(t,e,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return a["a"].post("templates/get-by-category/".concat(t||"","?keyword=").concat(e||""),n,r)},getTemplateListByCategoryId:function(t,e,n,r){return a["a"].post("templates/sample/list-search?keyword=".concat(n||"","&categoryId=").concat(t||"","&personType=").concat(e||""),r)},getApplicationFromDxaById:function(t){return a["a"].get("application-dxa/get-all-information?id=".concat(t||""))},getApplicationInfoBystepId:function(t,e){return a["a"].get("application-dxa/get-info/".concat(t,"/").concat(e))},getVisaAllInfoById:function(t){return a["a"].get("application-dxa/get-all-header-info?id=".concat(t||""))},getApplicationFilesBystepId:function(t,e,n){return a["a"].get("application-dxa/get-file-info/".concat(parseInt(e),"?application_id=").concat(t,"&applicationDXAId=").concat(n))},getApplicationFilesDownloadById:function(t,e){return a["a"].customRequest({url:"application-dxa/upload-file/".concat(parseInt(e),"?application_id=").concat(t),method:"GET",responseType:"blob"})},getApplicationTree:function(t){return a["a"].get("before-commission/application/get-tree/".concat(t))},petrolPricesByDate:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return a["a"].post("docReport/petrol-report?fromDate=".concat(t||"","&toDate=").concat(e||"","&regionId=").concat(n||""),{},r)},testTelegramBotApi:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a["a"].post("docReport/petrol-data-for-telegram-bot?docTableId=".concat(t,"&petrolId=").concat(e),{},n)},fetchDateTypesByParentId:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a["a"].post("dateType/listByParentId/".concat(t),e,n)},getContractorBankAccounts:function(t){return a["a"].get("contractor/get-contractor-banks/".concat(t))},getContractorFounders:function(t){return a["a"].get("contractor/get-contractor-founders/".concat(t))},getContractorDirector:function(t){return a["a"].get("contractor/get-contractor-director/".concat(t))},getContractorAccounter:function(t){return a["a"].get("contractor/get-contractor-accountant/".concat(t))},approveReestrDoc:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].get("reestr/contractor-reestr-documents/reestr-document-confirmation/".concat(t),e)},updateReestr:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n?a["a"].post("".concat(t,"/update/").concat(n),e,r):a["a"].post("".concat(t,"/update/").concat(e.id),e,r)},getContractorsByProdectOrServiceTypeIdAndProductOrServiceId:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].post("reestr/contractor-reestr-documents/list-search-for-contractor-by-is-republic/".concat(t),{},e)},searchReestrContractorListByIndividualsGroupId:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].post("reestr/contractor-reestr-documents/list-search-for-contractor-children-by-is-republic-for-group-of-individuals/".concat(t),{},e)},searchReestrContractorListByParentId:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].post("reestr/contractor-reestr-documents/list-search-for-contractor-children-by-is-republic/".concat(t),{},e)},searchReestrHistoryListByContractorId:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].post("reestr/contractor-reestr-documents/list-search-by-is-republic/".concat(t),{},e)},searchReestrListByRepublic:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].post("reestr/contractor-reestr-documents/list-search-by-is-republic/".concat(t),{},e)},getReestrByRepublic:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].post("reestr/contractor-reestr-documents/get/product-or-service-type-by-is-republic/by-region/".concat(t),{},e)},getReestrByRegionId:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a["a"].post("reestr/contractor-reestr-documents/get/product-or-service-type/by-region/".concat(e,"?regionId=").concat(t),{},n)},getProductOrServicesByTypeId:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object.assign({},e);return r.page=r.page-1,a["a"].post("directory/product-or-services/get/by-type-id/".concat(t,"?keyword=").concat(e.keyword?e.keyword:""),r,n)},savePermittedDepsByUserId:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a["a"].post("department/save/permitted/by-user-id/for-dep-perm-control/".concat(t),e,n)},fetchControlPermittedDepsByUser:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].get("department/get/checked/permitted/by-user-id/for-dep-perm-control/".concat(t),e)},getAdConstructionsForMap:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].post("contractor-advertising-construction/get-all/for-map?passportNumber=".concat(t.passportNumber,"&contractorIds=").concat(t.contractorIds,"&regionIds=").concat(t.regionIds,"&districtIds=").concat(t.districtIds,"&designTypeIds=").concat(t.designTypeIds),null,e)},getAdConstructionsForMapEAuction:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].post("contractor-advertising-construction/get-all/for-map/e-auction?passportNumber=".concat(t.passportNumber,"&contractorIds=").concat(t.contractorIds,"&regionIds=").concat(t.regionIds,"&districtIds=").concat(t.districtIds,"&designTypeIds=").concat(t.designTypeIds),null,e)},getPetrolStationsForMap:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].post("petrol/get-all/for-map?name=".concat(t.name,"&contractorIds=").concat(t.contractorIds,"&regionIds=").concat(t.regionIds,"&districtIds=").concat(t.districtIds),null,e)},getSugarStationsForMap:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].post("sugar/get-all/for-map?name=".concat(t.name,"&contractorIds=").concat(t.contractorIds,"&regionIds=").concat(t.regionIds,"&districtIds=").concat(t.districtIds),null,e)},getBakeryStationsForMap:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].post("bakery/get-all/for-map?name=".concat(t.name,"&contractorIds=").concat(t.contractorIds,"&regionIds=").concat(t.regionIds,"&districtIds=").concat(t.districtIds),null,e)},getFlourStationsForMap:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].post("flour/get-all/for-map?name=".concat(t.name,"&contractorIds=").concat(t.contractorIds,"&regionIds=").concat(t.regionIds,"&districtIds=").concat(t.districtIds),null,e)},getAdDesignTypesByActiveStatus:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return a["a"].get("directory/advertisement-design-type/get-all-by-active-status/",t)},getVolumesByActiveStatus:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return a["a"].get("directory/advertisement-design-type/get-all-by-active-status/",t)},getVolumeTypesByActiveStatus:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return a["a"].get("directory/advertisement-volume-types/get-all-by-active-status/",t)},getPrivilegeCoefficientValueByAdDesignTypeId:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].get("directory/advertisement-design-type_privilege_coefficients/get-coefficient-by-design-type-id?designTypeId=".concat(t),e)},getCoefficientValueByZoneAndDistrictIds:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a["a"].get("directory/coefficients/get-by-district-and-zone/".concat(t,"/").concat(e),n)},getMinCollectionValueByRegionAndDistrictIds:function(t,e,n,r,o){var c=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return a["a"].get("directory/minimum-collections/get-by-region?regionId=".concat(t,"&districtId=").concat(e,"&locationTypeId=").concat(n,"&designTypeId=").concat(r,"&volumeTypeId=").concat(o||""),c)},getAdZonesByDistrictId:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].get("directory/coefficients/get-zones/by-district-id/".concat(t),e)},getGroupOfRegion:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].get("directory/group-regions/get-group/by-region-id/".concat(t),e)},getAdVolumeTypesByAdLocationTypeId:function(t,e){return a["a"].get("directory/advertisement-volume-types/get-all/".concat(t),e)},getAdDesignTypesByAdLocationTypeId:function(t,e,n){return a["a"].get("directory/advertisement-design-type/get-design-types/".concat(e,"/").concat(t),n)},updateUserPasswordByAdmin:function(t,e){return a["a"].put("user/update-password/no-checking",t,e)},updateUserPassword:function(t,e){return a["a"].put("user/update-password",t,e)},updateRolePermissionsById:function(t,e){return a["a"].post("role/add-permissions/".concat(t.id),t.permissionIds,e)},permissionsListByRoleId:function(t,e){return a["a"].get("permission/list/by-role-id/".concat(t),e)},updateDepartment:function(t){return a["a"].put("department/update/".concat(t.departmentDto.id),t)},validateInnFromApi:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].get("contractor/check-inn-is-valid?inn=".concat(t),e)},checkAdPassportNumber:function(t){return a["a"].get("contractor-advertising-construction/check-passport-number?passportNumber=".concat(t))},checkAdPassportNumberByRegion:function(t,e){return a["a"].get("contractor-advertising-construction/check-passport-number/by-region?passportNumber=".concat(t,"&regionId=").concat(e))},findContractorByInn:function(t){return a["a"].get("department/check-inn?inn=".concat(t))},getIndividualInfoByInn:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].get("employee/get-by-inn-from-soliq/".concat(t),e)},getSingleContractorByInn:function(t){return a["a"].get("contractor/get-by-inn/".concat(t))},getContractorInfoByInnForCreate:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return a["a"].get("contractor/get-new-contractor-info-from-soliq-by-inn/for-create?inn=".concat(t,"&pinfl=").concat(e,"&isYur=").concat(Boolean(n)),r)},getContractorInfoByInnForUpdate:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return a["a"].get("contractor/get-new-contractor-info-from-soliq-by-inn/for-update?inn=".concat(t,"&pinfl=").concat(e,"&isYur=").concat(Boolean(n)),r)},getCuratorsForDepartment:function(){return a["a"].get("department/get-department/curators")},getGeoLocationsByParentId:function(t){return a["a"].get("geographical-region/list/by-parent-id/".concat(t))},getGeoLocationsByMultipleParentIds:function(t){return a["a"].get("geographical-region/get-all-district/by-region-ids?regionIds=".concat(t))},fetchRegions:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return a["a"].get("geographical-region/get-all-region",t)},fetchRegions14:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].get("geographical-region/get-region-tree?keyword=".concat(t),e)},fetchRegionsForAdvertisementByCurrentUserId:function(){return a["a"].get("geographical-region/get-all-regions-by-current-user-id/for-advertisement")},fetchRegionsForPetrolByCurrentUserId:function(){return a["a"].get("geographical-region/get-all-regions-by-current-user-id/for-petrol")},fetchRegionsForSugarByCurrentUserId:function(){return a["a"].get("geographical-region/get-all-regions-by-current-user-id/for-sugar")},fetchRegionsForBakeryByCurrentUserId:function(){return a["a"].get("geographical-region/get-all-regions-by-current-user-id/for-bakery")},fetchRegionsForFlourByCurrentUserId:function(){return a["a"].get("geographical-region/get-all-regions-by-current-user-id/for-flour")},fetchRegionsForContractorReestrByCurrentUserId:function(){return a["a"].get("geographical-region/get-all-regions-by-current-user-id/for-reestr")},searchEmployeesByDep:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object.assign({},t);return r.page-=1,a["a"].post("employee/search/by-depId/".concat(e),r,n)},searchEmployeesByDepID:function(t){var e=Object.assign({},t);return e.page-=1,a["a"].post("employee/getByYurDepForSign",e)},searchEmployeesWithoutDep:function(t){var e=Object.assign({},t);return e.page-=1,a["a"].post("employee/search/without/dep",e)},createDepWithLegalInfo:function(t){return a["a"].post("department/finish",t)},getRefByCode:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].get("reference/get-code/".concat(t),e)},getRefByCodeNew:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].get("reference/get-reference-by-code/".concat(t),e)},getEmployeeList:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a["a"].get("employee/get-all-for-create-user/by-keyword?keyword=".concat(t),e)},getCountNotifications:function(){return a["a"].get("report/advertisement-notifications/unread-messages")},getNotificationList:function(t){var e=Object.assign({},t);return e.page-=1,a["a"].post("notification/list-search?search=".concat(e.searchTitle))},acceptById:function(t){return a["a"].post("report/advertisement-notifications/accepted-notification/".concat(t))},rejectById:function(t,e,n){var r=Object.assign({},e);return a["a"].post("report/advertisement-notifications/rejected-notification/".concat(t),r,n)},getAllReceivers:function(t,e){return a["a"].post("report/advertisement-notifications/outgoing-receivers/".concat(t),e)},getAllReceiversForReport:function(t,e){return a["a"].post("report/general-inventory-reports/outgoing-receivers/".concat(t),e)},acceptReportById:function(t){return a["a"].post("report/general-inventory-reports/accepted-report/".concat(t))},rejectReportById:function(t){return a["a"].post("report/general-inventory-reports/rejected-report/".concat(t))},makeReadNotification:function(t){return a["a"].put("notification/make-read-notification/".concat(t))},getCounts:function(){return a["a"].get("report/dashboard/get-count")},getCountsByRegion:function(){return a["a"].get("report/dashboard/get-all-counts-by-region")},sendMessageToUser:function(t){return a["a"].post("murojaat/send-message",t)}});e["a"]=r}}]);