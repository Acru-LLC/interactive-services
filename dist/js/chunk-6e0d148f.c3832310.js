(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e0d148f"],{"19ab":function(t,e,o){"use strict";o("cd41")},"7db0":function(t,e,o){"use strict";var a=o("23e7"),n=o("b727").find,r=o("44d2"),s="find",c=!0;s in[]&&Array(1)[s]((function(){c=!1})),a({target:"Array",proto:!0,forced:c},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),r(s)},8468:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));o("d9e2");function a(t){if(null==t)throw new TypeError("Cannot destructure "+t)}},aafd:function(t,e,o){"use strict";o.r(e);o("99af");var a=o("f2db"),n="report/general-inventory-reports",r={create:function(t,e){return a["a"].post("".concat(n,"/create/").concat(t),e)},update:function(t,e,o){return a["a"].put("".concat(n,"/update/").concat(t,"/").concat(e),o)},get:function(t){return a["a"].get("".concat(n,"/get/").concat(t))},delete:function(t){return a["a"].delete("".concat(n,"/delete/").concat(t))},list:function(t,e){return a["a"].post("".concat(n,"/list-search-by-owner/").concat(t),e)}};e["default"]=r},c68d:function(t,e,o){"use strict";o.r(e);var a=o("8468"),n=(o("d81d"),o("b0c0"),function(){var t=this,e=t._self._c;return e("base-create-or-update-wrapper",{attrs:{"has-save-suspend":"","has-back-bottom":"","has-save-suspend-bottom":"","custom-title":t.isModeCreate?t.$t("actions.create"):t.$t("actions.update")},on:{save:t.save}},[e("ValidationObserver",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(o){return Object(a["a"])(o),[e("div",[e("h5",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[e("strong",[t._v("1. "+t._s(t.$t("column.ad_construction_address")))])]),e("b-row",{staticClass:"mb-5"},[e("b-col",{attrs:{sm:"12",md:"6"}},[e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("strong",[t._v(t._s(t.$t("column.current_condition"))+":")])]),e("b-col",{attrs:{cols:"9"}},[t._v(t._s(t.getName({nameRu:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.addressDto.quarterNameRu,nameLt:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.addressDto.quarterNameLt,nameUz:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.addressDto.quarterNameUz})?t.getName({nameRu:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.addressDto.quarterNameRu,nameLt:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.addressDto.quarterNameLt,nameUz:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.addressDto.quarterNameUz})+", ":"")+" "+t._s(t.getName({nameRu:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.addressDto.streetNameRu,nameLt:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.addressDto.streetNameLt,nameUz:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.addressDto.streetNameUz})?t.getName({nameRu:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.addressDto.streetNameRu,nameLt:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.addressDto.streetNameLt,nameUz:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.addressDto.streetNameUz})+", ":"")+", "+t._s(t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.addressDto.additional)+" ")])],1)],1),e("b-col",{attrs:{sm:"12",md:"6"}},[e("b-row",[e("b-col",[e("BaseMultiselectWithValidation",{attrs:{options:t.quarters.map((function(t){return t.id})),label:t.$t("column.detected_condition"),"custom-label":t.customLabelQuarters,placeholder:t.$t("column.quarter"),"open-direction":"bottom","max-height":600,"show-labels":!1},on:{select:t.quarterSelected},model:{value:t.createItem.quarterId,callback:function(e){t.$set(t.createItem,"quarterId",e)},expression:"createItem.quarterId"}})],1)],1),e("b-row",{staticClass:"mt-3"},[e("b-col",[e("BaseMultiselectWithValidation",{attrs:{options:t.streets.map((function(t){return t.id})),"custom-label":t.customLabelStreet,placeholder:t.$t("column.street"),"open-direction":"bottom","max-height":600,"show-labels":!1},model:{value:t.createItem.streetId,callback:function(e){t.$set(t.createItem,"streetId",e)},expression:"createItem.streetId"}})],1)],1),e("b-row",{staticClass:"mt-3"},[e("b-col",[e("BaseInputWithValidation",{model:{value:t.createItem.additional,callback:function(e){t.$set(t.createItem,"additional",e)},expression:"createItem.additional"}})],1)],1)],1)],1),e("hr"),e("h5",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[e("strong",[t._v("2. "+t._s(t.$t("column.ad_construction_place")))])]),e("b-row",{staticClass:"mb-5"},[e("b-col",{attrs:{sm:"12",md:"6"}},[e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("strong",[t._v(t._s(t.$t("column.current_condition"))+":")])]),e("b-col",{attrs:{cols:"9"}},[t._v(t._s(t.getName({nameRu:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.directoryAdvertisementLocationOfOutdoorNameRu,nameLt:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.directoryAdvertisementLocationOfOutdoorNameLt,nameUz:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.directoryAdvertisementLocationOfOutdoorNameUz}))+" ")])],1)],1),e("b-col",{attrs:{sm:"12",md:"6"}},[e("BaseMultiselectWithValidation",{attrs:{options:t.adLocationOfOutdoors.map((function(t){return t.id})),label:t.$t("column.detected_condition"),"custom-label":t.customLabelAdLocationType,placeholder:"","open-direction":"bottom","max-height":600,"show-labels":!1},model:{value:t.createItem.locationOfOutdoorId,callback:function(e){t.$set(t.createItem,"locationOfOutdoorId",e)},expression:"createItem.locationOfOutdoorId"}})],1)],1),e("hr"),e("h5",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[e("strong",[t._v("3. "+t._s(t.$t("column.ad_construction_existence_document")))])]),e("b-row",{staticClass:"mb-5"},[e("b-col",{attrs:{sm:"12",md:"6"}},[e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("strong",[t._v(t._s(t.$t("column.current_condition"))+":")])]),e("b-col",{attrs:{cols:"9"}},[t._v(t._s(t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.passportNumber?t.$t("column.ad_construction_passport_number")+": "+t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.passportNumber+",":"")+t._s(t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.passportCode?t.$t("column.name")+": "+t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.passportCode+",":"")),e("br")])],1)],1),e("b-col",{attrs:{sm:"12",md:"6"}},[e("BaseTextareaWithValidation",{attrs:{"max-rows":"4",label:t.$t("column.detected_condition")},model:{value:t.createItem.existenceDocument,callback:function(e){t.$set(t.createItem,"existenceDocument",e)},expression:"createItem.existenceDocument"}})],1)],1),e("hr"),e("h5",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[e("strong",[t._v("4. "+t._s(t.$t("column.ad_tool_type")))])]),e("b-row",{staticClass:"mb-5"},[e("b-col",{attrs:{sm:"12",md:"6"}},[e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("strong",[t._v(t._s(t.$t("column.current_condition"))+":")])]),e("b-col",{attrs:{cols:"9"}},[t._v(t._s(t.getName({nameRu:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.directoryAdvertisementDesignTypeNameRu,nameLt:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.directoryAdvertisementDesignTypeNameLt,nameUz:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.directoryAdvertisementDesignTypeNameUz}))+" ")])],1)],1),e("b-col",{attrs:{sm:"12",md:"6"}},[e("BaseMultiselectWithValidation",{attrs:{options:t.adDesignTypes.map((function(t){return t.id})),label:t.$t("column.detected_condition"),"custom-label":t.customLabelAdDesignType,placeholder:"","open-direction":"bottom","show-labels":!1},model:{value:t.createItem.designTypeId,callback:function(e){t.$set(t.createItem,"designTypeId",e)},expression:"createItem.designTypeId"}})],1)],1),e("hr"),e("h5",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[e("strong",[t._v("5. "+t._s(t.$t("column.ad_tool_volume")))])]),e("b-row",{staticClass:"mb-5"},[e("b-col",{attrs:{sm:"12",md:"6"}},[e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("strong",[t._v(t._s(t.$t("column.current_condition"))+":")])]),e("b-col",{attrs:{cols:"9"}},[t._v(t._s(t.getName({nameRu:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.directoryAdvertisementVolumeTypeNameRu,nameLt:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.directoryAdvertisementVolumeTypeNameLt,nameUz:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.directoryAdvertisementVolumeTypeNameUz}))+" ")])],1)],1),e("b-col",{attrs:{sm:"12",md:"6"}},[e("BaseMultiselectWithValidation",{attrs:{options:t.adVolumeTypes.map((function(t){return t.id})),label:t.$t("column.detected_condition"),"custom-label":t.customLabelAdVolumeType,placeholder:"","open-direction":"bottom","show-labels":!1},model:{value:t.createItem.volumeTypeId,callback:function(e){t.$set(t.createItem,"volumeTypeId",e)},expression:"createItem.volumeTypeId"}})],1)],1),e("hr"),e("h5",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[e("strong",[t._v("6. "+t._s(t.$t("column.ad_tool_current_status")))])]),e("b-row",{staticClass:"mb-5"},[e("b-col",{attrs:{sm:"12",md:"6"}},[e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("strong",[t._v(t._s(t.$t("column.current_condition"))+":")])]),e("b-col",{attrs:{cols:"9"}},[t._v(t._s(t.getName({nameRu:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.directoryAdvertisementObjectStateNameRu,nameLt:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.directoryAdvertisementObjectStateNameLt,nameUz:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.directoryAdvertisementObjectStateNameUz}))+" ")])],1)],1),e("b-col",{attrs:{sm:"12",md:"6"}},[e("BaseMultiselectWithValidation",{attrs:{options:t.adObjectStates.map((function(t){return t.id})),label:t.$t("column.detected_condition"),"custom-label":t.customLabelAdObjectStates,placeholder:"","open-direction":"bottom","show-labels":!1},model:{value:t.createItem.objectStateId,callback:function(e){t.$set(t.createItem,"objectStateId",e)},expression:"createItem.objectStateId"}})],1)],1),e("hr"),e("h5",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[e("strong",[t._v("7. "+t._s(t.$t("column.state_ad_construction_locate")))])]),e("b-row",{staticClass:"mb-5"},[e("b-col",{attrs:{sm:"12",md:"6"}},[e("b-row",[e("b-col",{attrs:{cols:"3"}}),e("b-col",{attrs:{cols:"9"}})],1)],1),e("b-col",{attrs:{sm:"12",md:"6"}},[e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("label",[t._v(t._s(t.$t("column.detected_condition")))])]),e("b-col",{attrs:{cols:"9"}},[e("div",[e("b-form-radio",{attrs:{name:"some-radios",value:t.$t("submodules.inventory_report.radio_box3")},model:{value:t.createItem.locateInState,callback:function(e){t.$set(t.createItem,"locateInState",e)},expression:"createItem.locateInState"}},[t._v(t._s(t.$t("submodules.inventory_report.radio_box3")))]),e("b-form-radio",{attrs:{name:"some-radios",value:t.$t("submodules.inventory_report.radio_box4")},model:{value:t.createItem.locateInState,callback:function(e){t.$set(t.createItem,"locateInState",e)},expression:"createItem.locateInState"}},[t._v(t._s(t.$t("submodules.inventory_report.radio_box4")))]),e("div",{staticClass:"mt-3"},[t._v(t._s(t.$t("submodules.inventory_report.selected"))+": "),e("strong",[t._v(t._s(t.createItem.locateInState))])])],1)])],1)],1)],1),e("hr"),e("h5",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[e("strong",[t._v("8. "+t._s(t.$t("column.ad_construction_about_owner")))])]),e("b-row",{staticClass:"mb-5"},[e("b-col",{attrs:{sm:"12",md:"6"}},[e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("strong",[t._v(t._s(t.$t("column.current_condition"))+":")])]),e("b-col",{attrs:{cols:"9"}},[t._v(t._s(t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.contractorName?t.$t("column.name")+": "+t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.contractorName+",":"")),e("br"),t._v(" "+t._s(t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.contractorPhoneNumber?t.$t("column.phone_number")+": "+t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.contractorPhoneNumber+",":"")),e("br"),t._v(" "+t._s(t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.contractorAdditionalAddress?t.$t("column.address")+": "+t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.contractorAdditionalAddress+",":"")+" ")])],1)],1),e("b-col",{attrs:{sm:"12",md:"6"}},[e("BaseMultiselectWithValidation",{attrs:{options:t.contractors.map((function(t){return t.id})),label:t.$t("column.detected_condition"),"custom-label":t.customLabelAdContractor,placeholder:"","open-direction":"bottom","max-height":600,"show-labels":!1,withCreateAddition:""},scopedSlots:t._u([{key:"append-slot",fn:function(){return[e("b-button",{staticStyle:{padding:"2.5px 10px","font-size":"1.2rem"},attrs:{variant:"outline-primary"},on:{click:function(e){t.addContractorModal=!0}}},[e("i",{staticClass:"mdi mdi-plus-circle"})])]},proxy:!0}],null,!0),model:{value:t.createItem.contractorId,callback:function(e){t.$set(t.createItem,"contractorId",e)},expression:"createItem.contractorId"}}),e("BaseModalForCreate",{attrs:{mainApiUrl:"contractor","additional-params":{},createFormName:"CreateFormContractor"},on:{"new-ref-created":t.newRefCreated},model:{value:t.addContractorModal,callback:function(e){t.addContractorModal=e},expression:"addContractorModal"}})],1)],1),e("hr"),e("h5",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[e("strong",[t._v("9. "+t._s(t.$t("column.ad_tool_about_contractor")))])]),e("b-row",{staticClass:"mb-5"},[e("b-col",{attrs:{sm:"12",md:"6"}},[e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("strong",[t._v(t._s(t.$t("column.current_condition"))+":")])]),e("b-col",{attrs:{cols:"9"}})],1)],1),e("b-col",{attrs:{sm:"12",md:"6"}},[e("BaseTextareaWithValidation",{attrs:{"max-rows":"4",label:t.$t("column.detected_condition")},model:{value:t.createItem.infoByContractorAboutAdCompany,callback:function(e){t.$set(t.createItem,"infoByContractorAboutAdCompany",e)},expression:"createItem.infoByContractorAboutAdCompany"}})],1)],1),e("hr"),e("h5",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[e("strong",[t._v("10. "+t._s(t.$t("column.ad_tool_locate_type")))])]),e("b-row",{staticClass:"mb-5"},[e("b-col",{attrs:{sm:"12",md:"6"}},[e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("strong",[t._v(t._s(t.$t("column.current_condition"))+":")])]),e("b-col",{attrs:{cols:"9"}},[t._v(t._s(t.getName({nameRu:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.directoryAdvertisementTypeNameRu,nameLt:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.directoryAdvertisementTypeNameLt,nameUz:t.adEditingItem.contractorAdvertisingConstructionForSecondAgentDto.directoryAdvertisementTypeNameUz}))+" ")])],1)],1),e("b-col",{attrs:{sm:"12",md:"6"}},[e("BaseInputWithValidation",{attrs:{label:t.$t("column.detected_condition")},model:{value:t.createItem.advertisementTypeName,callback:function(e){t.$set(t.createItem,"advertisementTypeName",e)},expression:"createItem.advertisementTypeName"}})],1)],1),e("hr"),e("h5",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[e("strong",[t._v("11. "+t._s(t.$t("column.other_info")))])]),e("b-row",{staticClass:"mb-5"},[e("b-col",{attrs:{sm:"12",md:"6"}},[e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("strong")]),e("b-col",{attrs:{cols:"9"}})],1)],1),e("b-col",{attrs:{sm:"12",md:"6"}},[e("BaseTextareaWithValidation",{attrs:{"max-rows":"4",label:t.$t("column.detected_condition")},model:{value:t.createItem.otherInfo,callback:function(e){t.$set(t.createItem,"otherInfo",e)},expression:"createItem.otherInfo"}})],1)],1),e("hr"),e("h5",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[e("strong",[t._v("12. "+t._s(t.$t("column.ad_construction_104")))])]),e("b-row",{staticClass:"mb-5"},[e("b-col",{attrs:{sm:"12",md:"6"}},[e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("strong")]),e("b-col",{attrs:{cols:"9"}})],1)],1),e("b-col",{attrs:{sm:"12",md:"6"}},[e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("label",[t._v(t._s(t.$t("column.detected_condition")))])]),e("b-col",{attrs:{cols:"9"}},[e("div",[e("b-form-radio",{attrs:{name:"radios-for104",value:"Мувофиқ"},model:{value:t.createItem.vm104RelatedChanges,callback:function(e){t.$set(t.createItem,"vm104RelatedChanges",e)},expression:"createItem.vm104RelatedChanges"}},[t._v(t._s(t.$t("submodules.inventory_report.radio_box1")))]),e("b-form-radio",{attrs:{name:"radios-for104",value:"Номувофиқ"},model:{value:t.createItem.vm104RelatedChanges,callback:function(e){t.$set(t.createItem,"vm104RelatedChanges",e)},expression:"createItem.vm104RelatedChanges"}},[t._v(t._s(t.$t("submodules.inventory_report.radio_box2")))]),e("div",{staticClass:"mt-3"},[t._v(t._s(t.$t("submodules.inventory_report.selected"))+": "),e("strong",[t._v(t._s(t.createItem.vm104RelatedChanges))])])],1)])],1)],1)],1)],1)]}}])}),e("div",["Номувофиқ"==t.createItem.vm104RelatedChanges?e("div",[e("b-row",{staticClass:"pb-5"},[e("b-col",{staticClass:"px-5"},[e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("1.")]),e("b-form-checkbox",{model:{value:t.createItem.locatedAtIntersectionOfHighways,callback:function(e){t.$set(t.createItem,"locatedAtIntersectionOfHighways",e)},expression:"createItem.locatedAtIntersectionOfHighways"}},[t._v(" "+t._s(t.options[0].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("2.")]),e("b-form-checkbox",{model:{value:t.createItem.locatedOnSidewalks,callback:function(e){t.$set(t.createItem,"locatedOnSidewalks",e)},expression:"createItem.locatedOnSidewalks"}},[t._v(" "+t._s(t.options[1].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("3.")]),e("b-form-checkbox",{model:{value:t.createItem.locatedNearRoadside,callback:function(e){t.$set(t.createItem,"locatedNearRoadside",e)},expression:"createItem.locatedNearRoadside"}},[t._v(" "+t._s(t.options[2].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("4.")]),e("b-form-checkbox",{model:{value:t.createItem.restrictsVisionForOther,callback:function(e){t.$set(t.createItem,"restrictsVisionForOther",e)},expression:"createItem.restrictsVisionForOther"}},[t._v(" "+t._s(t.options[3].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("5.")]),e("b-form-checkbox",{model:{value:t.createItem.distanceToRoadLessThanFiveMeters,callback:function(e){t.$set(t.createItem,"distanceToRoadLessThanFiveMeters",e)},expression:"createItem.distanceToRoadLessThanFiveMeters"}},[t._v(" "+t._s(t.options[4].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("6.")]),e("b-form-checkbox",{model:{value:t.createItem.locatedOnCarriagewayOrSidewalk,callback:function(e){t.$set(t.createItem,"locatedOnCarriagewayOrSidewalk",e)},expression:"createItem.locatedOnCarriagewayOrSidewalk"}},[t._v(" "+t._s(t.options[5].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("7.")]),e("b-form-checkbox",{model:{value:t.createItem.locatedAtPublicTransportStations,callback:function(e){t.$set(t.createItem,"locatedAtPublicTransportStations",e)},expression:"createItem.locatedAtPublicTransportStations"}},[t._v(" "+t._s(t.options[6].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("8.")]),e("b-form-checkbox",{model:{value:t.createItem.locatedCloseToTunnels,callback:function(e){t.$set(t.createItem,"locatedCloseToTunnels",e)},expression:"createItem.locatedCloseToTunnels"}},[t._v(" "+t._s(t.options[7].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("9.")]),e("b-form-checkbox",{model:{value:t.createItem.locatedCloseToHighVoltageElectricity,callback:function(e){t.$set(t.createItem,"locatedCloseToHighVoltageElectricity",e)},expression:"createItem.locatedCloseToHighVoltageElectricity"}},[t._v(" "+t._s(t.options[8].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("10.")]),e("b-form-checkbox",{model:{value:t.createItem.dataNotShownInFull,callback:function(e){t.$set(t.createItem,"dataNotShownInFull",e)},expression:"createItem.dataNotShownInFull"}},[t._v(" "+t._s(t.options[9].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("11.")]),e("b-form-checkbox",{model:{value:t.createItem.advertisingHeightMoreThanOneThirdOfBuilding,callback:function(e){t.$set(t.createItem,"advertisingHeightMoreThanOneThirdOfBuilding",e)},expression:"createItem.advertisingHeightMoreThanOneThirdOfBuilding"}},[t._v(" "+t._s(t.options[10].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("12.")]),e("b-form-checkbox",{model:{value:t.createItem.foundationsMoreThanFiftyCentimeters,callback:function(e){t.$set(t.createItem,"foundationsMoreThanFiftyCentimeters",e)},expression:"createItem.foundationsMoreThanFiftyCentimeters"}},[t._v(" "+t._s(t.options[11].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("13.")]),e("b-form-checkbox",{model:{value:t.createItem.foundationsPaintedIncorrectly,callback:function(e){t.$set(t.createItem,"foundationsPaintedIncorrectly",e)},expression:"createItem.foundationsPaintedIncorrectly"}},[t._v(" "+t._s(t.options[12].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("14.")]),e("b-form-checkbox",{model:{value:t.createItem.numberOfAdsAtFourWayIntersectionMoreThanFour,callback:function(e){t.$set(t.createItem,"numberOfAdsAtFourWayIntersectionMoreThanFour",e)},expression:"createItem.numberOfAdsAtFourWayIntersectionMoreThanFour"}},[t._v(" "+t._s(t.options[13].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("15.")]),e("b-form-checkbox",{model:{value:t.createItem.numberOfAdsAtThreeWayIntersectionMoreThanFour,callback:function(e){t.$set(t.createItem,"numberOfAdsAtThreeWayIntersectionMoreThanFour",e)},expression:"createItem.numberOfAdsAtThreeWayIntersectionMoreThanFour"}},[t._v(" "+t._s(t.options[14].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("16.")]),e("b-form-checkbox",{model:{value:t.createItem.distanceBetweenSmallSizedAdsLessThanFiftyMeters,callback:function(e){t.$set(t.createItem,"distanceBetweenSmallSizedAdsLessThanFiftyMeters",e)},expression:"createItem.distanceBetweenSmallSizedAdsLessThanFiftyMeters"}},[t._v(" "+t._s(t.options[15].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("17.")]),e("b-form-checkbox",{model:{value:t.createItem.distanceBetweenMediumSizedAds,callback:function(e){t.$set(t.createItem,"distanceBetweenMediumSizedAds",e)},expression:"createItem.distanceBetweenMediumSizedAds"}},[t._v(" "+t._s(t.options[16].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("18.")]),e("b-form-checkbox",{model:{value:t.createItem.distanceBetweenLargeSizedAds,callback:function(e){t.$set(t.createItem,"distanceBetweenLargeSizedAds",e)},expression:"createItem.distanceBetweenLargeSizedAds"}},[t._v(" "+t._s(t.options[17].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("19.")]),e("b-form-checkbox",{model:{value:t.createItem.distanceBetweenVeryLargeSizedAds,callback:function(e){t.$set(t.createItem,"distanceBetweenVeryLargeSizedAds",e)},expression:"createItem.distanceBetweenVeryLargeSizedAds"}},[t._v(" "+t._s(t.options[18].name)+" ")])],1),e("b-row",{staticClass:"mt-3"},[e("strong",{staticStyle:{"margin-right":"5px"}},[t._v("20.")]),e("b-form-checkbox",{model:{value:t.createItem.otherCases,callback:function(e){t.$set(t.createItem,"otherCases",e)},expression:"createItem.otherCases"}},[t._v(" "+t._s(t.options[19].name)+" ")])],1)],1)],1)],1):t._e()])],1)}),r=[],s=o("c7eb"),c=o("1da1"),i=(o("7db0"),o("d3b7"),o("03f4")),d=o("18f8"),m=o("42f3"),l=o("aafd"),u="contractor-advertising-construction",b={name:"CreateOrUpdateByGovernment",components:{BaseTextareaWithValidation:m["default"],BaseMultiselectWithValidation:d["default"]},data:function(){return{editingItem:{},createItem:{},addContractorModal:!1,adLocationOfOutdoors:[],quarters:[],streets:[],adDesignTypes:[],adVolumeTypes:[],adObjectStates:[],contractors:[],adTypes:[],items:[],adEditingItem:{contractorAdvertisingConstructionForSecondAgentDto:{addressDto:{}}},selected:[],options:[{item:"a",name:this.$t("submodules.inventory_report.checkbox1")},{item:"b",name:this.$t("submodules.inventory_report.checkbox2")},{item:"c",name:this.$t("submodules.inventory_report.checkbox3")},{item:"d",name:this.$t("submodules.inventory_report.checkbox4")},{item:"e",name:this.$t("submodules.inventory_report.checkbox5")},{item:"f",name:this.$t("submodules.inventory_report.checkbox6")},{item:"g",name:this.$t("submodules.inventory_report.checkbox7")},{item:"h",name:this.$t("submodules.inventory_report.checkbox8")},{item:"j",name:this.$t("submodules.inventory_report.checkbox9")},{item:"i",name:this.$t("submodules.inventory_report.checkbox10")},{item:"k",name:this.$t("submodules.inventory_report.checkbox11")},{item:"l",name:this.$t("submodules.inventory_report.checkbox12")},{item:"m",name:this.$t("submodules.inventory_report.checkbox13")},{item:"n",name:this.$t("submodules.inventory_report.checkbox14")},{item:"o",name:this.$t("submodules.inventory_report.checkbox15")},{item:"q",name:this.$t("submodules.inventory_report.checkbox16")},{item:"r",name:this.$t("submodules.inventory_report.checkbox17")},{item:"s",name:this.$t("submodules.inventory_report.checkbox18")},{item:"t",name:this.$t("submodules.inventory_report.checkbox19")},{item:"u",name:this.$t("submodules.inventory_report.checkbox20")}]}},computed:{isModeCreate:function(){return"CreateInventoryReport"===this.$route.name},computedObserver:function(){return this.$refs.observer}},methods:{quarterSelected:function(t){var e=this;return Object(c["a"])(Object(s["a"])().mark((function o(){return Object(s["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(e.var_default_search_payload.itemsPerPage=500,!t){o.next=6;break}return o.next=4,i["a"].searchListWithKeyword("directory/street-names",e.var_default_search_payload,"get-by-quarterId/".concat(t)).then((function(t){e.streets=t.data.list})).catch((function(t){console.log(t),e.streets=[]}));case 4:o.next=7;break;case 6:e.streets=[];case 7:case"end":return o.stop()}}),o)})))()},newRefCreated:function(t,e,o){"CreateFormContractor"==o&&(this.contractors=t,this.editingItem.contractorId=e)},customLabelAdLocationType:function(t){var e=this.adLocationOfOutdoors.find((function(e){return e.id==(t.id?t.id:t)}));return e?"".concat(this.getName({nameRu:e.nameRu,nameLt:e.nameLt,nameUz:e.nameUz})):""},customLabelAdContractor:function(t){var e=this.contractors.find((function(e){return e.id==(t.id?t.id:t)}));return e?"".concat(e.fullName):""},customLabelAdDesignType:function(t){var e=this.adDesignTypes.find((function(e){return e.id==(t.id?t.id:t)}));return e?"".concat(this.getName({nameRu:e.nameRu,nameLt:e.nameLt,nameUz:e.nameUz})):""},customLabelAdVolumeType:function(t){var e=this.adVolumeTypes.find((function(e){return e.id==(t.id?t.id:t)}));return e?"".concat(this.getName({nameRu:e.nameRu,nameLt:e.nameLt,nameUz:e.nameUz})):""},customLabelAdObjectStates:function(t){var e=this.adObjectStates.find((function(e){return e.id==(t.id?t.id:t)}));return e?"".concat(this.getName({nameRu:e.nameRu,nameLt:e.nameLt,nameUz:e.nameUz})):""},customLabelAdTypes:function(t){var e=this.adTypes.find((function(e){return e.id==(t.id?t.id:t)}));return e?"".concat(this.getName({nameRu:e.nameRu,nameLt:e.nameLt,nameUz:e.nameUz})):""},customLabelQuarters:function(t){var e=this.quarters.find((function(e){return e.id==(t.id?t.id:t)}));return e?"".concat(this.getName({nameRu:e.nameRu,nameLt:e.nameLt,nameUz:e.nameUz})):""},customLabelStreet:function(t){var e=this.streets.find((function(e){return e.id==(t.id?t.id:t)}));return e?"".concat(this.getName({nameRu:e.nameRu,nameLt:e.nameLt,nameUz:e.nameUz})):""},save:function(){var t=this;this.createItem.constructionId=this.$route.params.adId,this.isModeCreate?l["default"].create(this.$route.params.adId,this.createItem).then((function(e){t.createItem={},t.$router.go(-1),t.$toast(t.$t("messages.saved_successfully"),{type:"success"})})):l["default"].update(this.$route.params.adId,this.$route.params.id,this.createItem).then((function(e){t.createItem={},t.$router.go(-1),t.$toast(t.$t("messages.saved_successfully"),{type:"success"})}))},getAdvertisementConstruction:function(){var t=this;return Object(c["a"])(Object(s["a"])().mark((function e(){var o;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=0,e.next=3,i["a"].getById(u,t.$route.params.adId).then((function(e){t.adEditingItem=e.data,o=e.data.contractorAdvertisingConstructionForSecondAgentDto.addressDto.districtId})).catch((function(t){console.log(t)}));case 3:return t.var_default_search_payload.itemsPerPage=500,e.next=6,i["a"].searchListWithKeyword("directory/quarter-names",t.var_default_search_payload,"get-by-districtId/".concat(o)).then((function(e){t.quarters=e.data.list})).catch((function(e){console.log(e),t.quarters=[]}));case 6:return e.next=8,i["a"].searchList("directory/street-names",t.var_default_search_payload).then((function(e){t.streets=e.data.list})).catch((function(e){console.log(e),t.streets=[]}));case 8:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;this.getAdvertisementConstruction(),this.var_default_search_payload.itemsPerPage=500,i["a"].searchList("directory/advertisement-location-of-outdoor",this.var_default_search_payload).then((function(e){t.adLocationOfOutdoors=e.data.list})).catch((function(e){console.log(e),t.adLocationOfOutdoors=[]})),i["a"].searchListWithKeyword("directory/advertisement-design-type",this.var_default_search_payload).then((function(e){t.adDesignTypes=e.data.list})).catch((function(e){console.log(e),t.adDesignTypes=[]})),i["a"].searchListWithKeyword("directory/advertisement-volume-types",this.var_default_search_payload).then((function(e){t.adVolumeTypes=e.data?e.data.list:[]})).catch((function(e){console.log(e),t.tableItems=[]})),i["a"].searchListWithKeyword("directory/advertisement-object-state",this.var_default_search_payload).then((function(e){t.adObjectStates=e.data.list})).catch((function(e){console.log(e),t.adObjectStates=[]})),i["a"].searchList("directory/advertisement-type",this.var_default_search_payload).then((function(e){t.adTypes=e.data.list})).catch((function(e){console.log(e),t.adTypes=[]})),i["a"].searchListWithKeyword("contractor",this.var_default_search_payload,"by-contractor").then((function(e){t.contractors=e.data.list})).catch((function(e){console.log(e),t.contractors=[]})),this.isModeCreate||l["default"].get(this.$route.params.id).then((function(e){t.createItem=e.data})).catch((function(t){console.log(t)}))}},g=b,h=(o("19ab"),o("2877")),v=Object(h["a"])(g,n,r,!1,null,"1d5ba662",null);e["default"]=v.exports},cd41:function(t,e,o){}}]);