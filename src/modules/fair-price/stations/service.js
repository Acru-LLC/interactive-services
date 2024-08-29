import ApiService from '@/shared/services/api.service'

export default {
    // yuridik-shaxs
    getYuridikShaxsData: async function (stir, withLoader = false) {
        let res = await ApiService.post(`/yuridik-shaxs/get-info?&tin=${stir}`, withLoader);
        return res;
    }, // yuridik-shaxs
    getYuridikShaxsDataByPinfl: async function (pinfl, withLoader = false) {
        let res = await ApiService.post(`/ytt/get-info?pinfl=${pinfl}`, withLoader);
        return res;
    }, searchListWithKeyword: function (mainUrl, payload, appendUrl, withLoader = false) {
        let myPayload = Object.assign({}, payload)
        myPayload.page -= 1
        if (appendUrl) {
            return ApiService.post(`${mainUrl}/list-search/${appendUrl}?keyword=${myPayload.keyword ? myPayload.keyword : ''}&type=${myPayload.type ? myPayload.type : ''}`, myPayload, withLoader);
        } else {
            return ApiService.post(`${mainUrl}/list-search?keyword=${myPayload.keyword ? myPayload.keyword : ''}&type=${myPayload.type ? myPayload.type : ''}`, myPayload, withLoader = true);
        }
    }, saveIdsConnectProductIdWithUsers: async function (data, withLoader = false) {
        let res = await ApiService.post(`/price_product/update/user`, data, withLoader);
        return res;
    }, getRegionPrice: async function (soato, withLoader = false) {
        let res = await ApiService.post(`/gas-station/get-station-all-region-count`, withLoader);
        return res;
    }, getStationCount: async function (soato, withLoader = false) {
        let res = await ApiService.post(`/gas-station/get-station-count-outer?soato=${soato ? soato : ''}`, withLoader);
        return res;
    }, getStationByMxik: async function (obj, body, withLoader = false) {
        let myPayload = Object.assign({}, body)
        myPayload.page -= 1
        let res = await ApiService.post(`/gas-station/get-station-by-mxik?tin=${obj.stir ? obj.stir : ''}&mxik=${obj.mxik ? obj.mxik : ''}&date1=${obj.dateFrom ? obj.dateFrom : ''}&date2=${obj.dateTo ? obj.dateTo : ''}`, myPayload, withLoader);
        return res;
    }, getStationByCost: async function (obj, withLoader = false) {
        console.log(obj)
        let res = await ApiService.post(`/gas-station/get-station-by-price?soato=17&price=${obj.price ? obj.price : ''}&type=${obj.type ? obj.type : ''}&priceType=${obj.priceType ? obj.priceType : ''}`, withLoader);
        return res;
    }, gasStationListType: async function (withLoader = false) {
        let res = await ApiService.post(`/gas-station/list-type`, withLoader);
        return res;
    }, gasStationListData: async function (obj, withLoader = false) {
        let res = await ApiService.post(`/gas-station/get-station-by-soato-outer?soato=${obj.soato ? obj.soato : ''}&type=${obj.type ? obj.type : ''}`, withLoader);
        return res;
    },
    gasStationInfoData: async function (obj, withLoader = false) {
        console.log(obj)
        let res = await ApiService.post(`/gas-station/get-station-price-by-id/${obj.id ? obj.id : ''}?soato=${obj.soato ? obj.soato : ''}&type=${obj.type ? obj.type : ''}`, withLoader);
        return res;
    },

}

