<template>
  <div class="pl-3 pr-3">

    <b-row>
      <b-col style="padding: 3px;">
        <b-button block size="sm" class="colorBtnActive" style="cursor: default">
          <span style="font-size: 13px">  {{ $t('stations.stations_info') }}</span>
        </b-button>
      </b-col>
    </b-row>
    <b-row style="font-weight: bold; margin-top: 15px">
      <b-col cols="5">{{ $t('stations.stations_name') }}</b-col>
      <b-col cols="5">{{ $t('stations.address') }}</b-col>
      <b-col cols="2">{{ $t('column.soato') }}</b-col>
    </b-row>
    <b-row>
      <b-col cols="5">{{ infoData.nameLong ? infoData.nameLong : '- - -' }}</b-col>
      <b-col cols="5">{{ infoData.excelRegion ? infoData.excelRegion : '- ' }}
        {{ infoData.excelDistrict ? infoData.excelDistrict : '- ' }}
        {{ infoData.excelAddress ? infoData.excelAddress : '-' }}
      </b-col>
      <b-col cols="2">{{ infoData.soato ? infoData.soato : '- - -' }}</b-col>
    </b-row>


    <b-row class="mt-3">
      <b-col style="padding: 3px;">
        <b-button block size="sm" class="colorBtnActive" style="cursor: default">
          <span style="font-size: 13px">  {{ $t('stations.stations_cost_info') }}</span>
        </b-button>
      </b-col>
    </b-row>

    <b-row style="font-weight: bold; margin-top: 15px">
      <b-col cols="3">{{ $t('stations.name') }}</b-col>
      <b-col cols="3">{{ $t('pharm.medicationPaymentDate') }}</b-col>
      <b-col cols="3">{{ $t('pharm.pharmUlgurji.productPaymentPrice') }}</b-col>
      <b-col cols="3">{{ $t('stations.belgilangan') }}</b-col>
    </b-row>

    <div v-if="type=='BENZIN'">

      <b-row v-if="Object.keys(resData).length !== 0">
        <b-col cols="3">{{ resData.AI80 ? $t('stations.benzin80') : '- - -' }}</b-col>
        <b-col cols="3">{{ resData.AI80 && resData.AI80.date ? resData.AI80 && resData.AI80.date : '- - -' }}</b-col>
        <b-col cols="3">
          {{ resData.AI80 && resData.AI80.middlePrice ? formatNumber(Math.trunc(resData.AI80.middlePrice)) : '- - -' }}
        </b-col>
        <b-col cols="3">{{ '- - -' }}</b-col>
      </b-row>
      <b-row v-if="Object.keys(resData).length !== 0">
        <b-col cols="3">{{ resData.AI92 ? $t('stations.benzin92') : '- - -' }}</b-col>
        <b-col cols="3">{{ resData.AI92 && resData.AI92.date ? resData.AI92 && resData.AI92.date : '- - -' }}</b-col>
        <b-col cols="3">
          {{ resData.AI92 && resData.AI92.middlePrice ? formatNumber(Math.trunc(resData.AI92.middlePrice)) : '- - -' }}
        </b-col>
        <b-col cols="3">{{ '- - -' }}</b-col>
      </b-row>
      <b-row v-if="Object.keys(resData).length !== 0">
        <b-col cols="3">{{ resData.AI95 ? $t('stations.benzin95') : '- - -' }}</b-col>
        <b-col cols="3">{{ resData.AI95 && resData.AI95.date ? resData.AI95 && resData.AI95.date : '- - -' }}</b-col>
        <b-col cols="3">
          {{ resData.AI95 && resData.AI95.middlePrice ? formatNumber(Math.trunc(resData.AI95.middlePrice)) : '- - -' }}
        </b-col>
        <b-col cols="3">{{ '- - -' }}</b-col>
      </b-row>
    </div>
    <div v-if="type=='METAN'">
      <b-row v-if="Object.keys(resData).length !== 0">
        <b-col cols="3">{{ resData.METAN ? $t('stations.metan') : '- - -' }}</b-col>
        <b-col cols="3">{{ resData.METAN && resData.METAN.date ? resData.METAN && resData.METAN.date : '- - -' }}</b-col>
        <b-col cols="3">
          {{ resData.METAN && resData.METAN.middlePrice ? formatNumber(Math.trunc(resData.METAN.middlePrice)) : '- - -' }}
        </b-col>
        <b-col cols="3">{{ '- - -' }}</b-col>
      </b-row>
    </div>
    <div v-if="type=='PROPAN'">
      <b-row v-if="Object.keys(resData).length !== 0">
        <b-col cols="3">{{ resData.PROPAN ? $t('stations.propan') : '- - -' }}</b-col>
        <b-col cols="3">{{ resData.PROPAN && resData.PROPAN.date ? resData.PROPAN && resData.PROPAN.date : '- - -' }}</b-col>
        <b-col cols="3">
          {{ resData.PROPAN && resData.PROPAN.middlePrice ? formatNumber(Math.trunc(resData.PROPAN.middlePrice)) : '- - -' }}
        </b-col>
        <b-col cols="3">{{ '- - -' }}</b-col>
      </b-row>
    </div>

    <b-row v-if="Object.keys(resData).length == 0"
           style="justify-content: center !important; text-align: center !important;">
     <span style="color: #b2b2b2">
               {{ $t('actions.empty') }}
              </span>
    </b-row>

    <div class="loaderBody" v-show="loader">
      <div class="loaderPosition">
        <div class="loader">
          <div class="blue dot"></div>
          <div class="green dot"></div>
          <div class="red dot"></div>
          <div class="orange dot"></div>
          <div class="logoColor dot"></div>
        </div>
        <div class="mt-3 text-center"><p style="font-size: 20px; font-weight: bold">{{ $t('loader.waiting') }} <br>
          {{ $t('loader.downloading') }}</p></div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "@/modules/fair-price/stations/service";

export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    infoData: {
      type: Object,
      default: () => ({}),
    }
  },
  data() {
    return {
      resData: {},
      loader: false
    }
  },
  methods: {
    getData() {
      this.loader = true
      console.log(this.loader)
      Service.gasStationInfoData({id: this.infoData.id, soato: this.infoData.soato, type: this.type})
          .then(async res => {
            this.resData = res.data
            this.loader = false
          })
          .catch(e => {
            this.loader = false
          })
          .finally(() => {
            this.loader = false
          })
    }
  },
  async created() {
    await this.getData()
  }
}
</script>

<style scoped>

.loaderBody {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(239, 239, 239, 0.73);

}

.loaderPosition {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot {
  margin: 2px;
  border-radius: 100%;
  width: 15px;
  height: 15px;
}

.blue {
  -webkit-animation: pulse_blue 1s ease-in-out infinite,
  nudge 1s ease-in-out infinite;
}

.green {
  -webkit-animation: pulse_green 1s ease-in-out .1s infinite,
  nudge 1s ease-in-out .1s infinite;
}

.red {
  -webkit-animation: pulse_red 1s ease-in-out .2s infinite,
  nudge 1s ease-in-out .2s infinite;
}

.orange {
  -webkit-animation: pulse_orange 1s ease-in-out .3s infinite,
  nudge 1s ease-in-out .3s infinite;
}

.logoColor {
  -webkit-animation: pulse_logoColor 1s ease-in-out .4s infinite,
  nudge 1s ease-in-out .4s infinite;
}

@-webkit-keyframes pulse_blue {
  0%, 80%, 100% {
    background-color: #b4bec8;
  }
  40% {
    background-color: #00adef;
  }
}

@-webkit-keyframes pulse_green {
  0%, 80%, 100% {
    background-color: #b4bec8;
  }
  40% {
    background-color: #7fc400;
  }
}

@-webkit-keyframes pulse_red {
  0%, 80%, 100% {
    background-color: #b4bec8;
  }
  40% {
    background-color: #ff4d4d;
  }
}

@-webkit-keyframes pulse_orange {
  0%, 80%, 100% {
    background-color: #b4bec8;
  }
  40% {
    background-color: orange;
  }
}

@-webkit-keyframes pulse_logoColor {
  0%, 80%, 100% {
    background-color: #b4bec8;
  }
  40% {
    background-color: #2c675b;
  }
}

@-webkit-keyframes nudge {
  0%, 80% {
    transform: translate(0, 0);
  }
  40% {
    transform: translate(0, -20px);
  }
}


.live-icon {
  width: 14px;
  height: 14px;
  position: absolute;
  background-color: #ff435b;
  border-radius: 50%;
  z-index: 999;
}

.live-effect {
  width: 100%;
  height: 100%;
  background-color: #ff435b;
  border-radius: 50%;
  animation: live 2s linear infinite;
}

[id^='circle-'][id$='-info'] {
  display: none;
}

@keyframes live {
  from {
    transform: scale(0.8);
    opacity: 0.8;
  }
  to {
    transform: scale(2);
    opacity: 0.1;
  }
}
</style>

<style scoped>
.colorBtnActive {
  background: #2b675b;
  color: #FFFFFF !important;
  height: 27px;
}
</style>