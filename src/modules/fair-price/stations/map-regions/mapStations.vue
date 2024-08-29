<template>
  <div>
    <div>
      <khorezm_b :type="type" :resData="resData" v-if="soato=='1733' && type=='BENZIN'"></khorezm_b>
      <khorezm_m :type="type" :resData="resData" v-else-if="soato=='1733' && type=='METAN'"></khorezm_m>
      <khorezm_p :type="type" :resData="resData" v-else-if="soato=='1733' && type=='PROPAN'"></khorezm_p>

      <navoi_b :type="type" :resData="resData" v-else-if="soato=='1712' && type=='BENZIN'"></navoi_b>
      <navoi_m :type="type" :resData="resData" v-else-if="soato=='1712' && type=='METAN'"></navoi_m>
      <navoi_p :type="type" :resData="resData" v-else-if="soato=='1712' && type=='PROPAN'"></navoi_p>

      <bukhara_b :type="type" :resData="resData" v-else-if="soato=='1706' && type=='BENZIN'"></bukhara_b>
      <bukhara_m :type="type" :resData="resData" v-else-if="soato=='1706' && type=='METAN'"></bukhara_m>
      <bukhara_p :type="type" :resData="resData" v-else-if="soato=='1706' && type=='PROPAN'"></bukhara_p>

      <namangan_b :type="type" :resData="resData" v-else-if="soato=='1714' && type=='BENZIN'"></namangan_b>
      <namangan_m :type="type" :resData="resData" v-else-if="soato=='1714' && type=='METAN'"></namangan_m>
      <namangan_p :type="type" :resData="resData" v-else-if="soato=='1714' && type=='PROPAN'"></namangan_p>

      <andijan_b :type="type" :resData="resData" v-else-if="soato=='1703' && type=='BENZIN'"></andijan_b>
      <andijan_m :type="type" :resData="resData" v-else-if="soato=='1703' && type=='METAN'"></andijan_m>
      <andijan_p :type="type" :resData="resData" v-else-if="soato=='1703' && type=='PROPAN'"></andijan_p>

      <fergana_b :type="type" :resData="resData" v-else-if="soato=='1730' && type=='BENZIN'"></fergana_b>
      <fergana_m :type="type" :resData="resData" v-else-if="soato=='1730' && type=='METAN'"></fergana_m>
      <fergana_p :type="type" :resData="resData" v-else-if="soato=='1730' && type=='PROPAN'"></fergana_p>

      <qashqadaryo_b :type="type" :resData="resData" v-else-if="soato=='1710' && type=='BENZIN'"></qashqadaryo_b>
      <qashqadaryo_m :type="type" :resData="resData" v-else-if="soato=='1710' && type=='METAN'"></qashqadaryo_m>
      <qashqadaryo_p :type="type" :resData="resData" v-else-if="soato=='1710' && type=='PROPAN'"></qashqadaryo_p>

      <samarqand_b :type="type" :resData="resData" v-else-if="soato=='1718' && type=='BENZIN'"></samarqand_b>
      <samarqand_m :type="type" :resData="resData" v-else-if="soato=='1718' && type=='METAN'"></samarqand_m>
      <samarqand_p :type="type" :resData="resData" v-else-if="soato=='1718' && type=='PROPAN'"></samarqand_p>

      <sirdaryo_b :type="type" :resData="resData" v-else-if="soato=='1724' && type=='BENZIN'"></sirdaryo_b>
      <sirdaryo_m :type="type" :resData="resData" v-else-if="soato=='1724' && type=='METAN'"></sirdaryo_m>
      <sirdaryo_p :type="type" :resData="resData" v-else-if="soato=='1724' && type=='PROPAN'"></sirdaryo_p>

      <surxondaryo_b :type="type" :resData="resData" v-else-if="soato=='1722' && type=='BENZIN'"></surxondaryo_b>
      <surxondaryo_m :type="type" :resData="resData" v-else-if="soato=='1722' && type=='METAN'"></surxondaryo_m>
      <surxondaryo_p :type="type" :resData="resData" v-else-if="soato=='1722' && type=='PROPAN'"></surxondaryo_p>

      <toshkent_b :type="type" :resData="resData" v-else-if="soato=='1726' && type=='BENZIN'"></toshkent_b>
      <toshkent_m :type="type" :resData="resData" v-else-if="soato=='1726' && type=='METAN'"></toshkent_m>
      <toshkent_p :type="type" :resData="resData" v-else-if="soato=='1726' && type=='PROPAN'"></toshkent_p>

      <jizzax_b :type="type" :resData="resData" v-else-if="soato=='1708' && type=='BENZIN'"></jizzax_b>
      <jizzax_m :type="type" :resData="resData" v-else-if="soato=='1708' && type=='METAN'"></jizzax_m>
      <jizzax_p :type="type" :resData="resData" v-else-if="soato=='1708' && type=='PROPAN'"></jizzax_p>

      <qoraqalpoq_b :type="type" :resData="resData" v-else-if="soato=='1735' && type=='BENZIN'"></qoraqalpoq_b>
      <qoraqalpoq_m :type="type" :resData="resData" v-else-if="soato=='1735' && type=='METAN'"></qoraqalpoq_m>
      <qoraqalpoq_p :type="type" :resData="resData" v-else-if="soato=='1735' && type=='PROPAN'"></qoraqalpoq_p>
    </div>

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
import qoraqalpoq_b from './qoraqalpoq/benzin.vue'
import qoraqalpoq_m from './qoraqalpoq/metan.vue'
import qoraqalpoq_p from './qoraqalpoq/propan.vue'

import jizzax_b from './jizzax/benzin.vue'
import jizzax_m from './jizzax/metan.vue'
import jizzax_p from './jizzax/propan.vue'

import surxondaryo_b from './surxondaryo/benzin.vue'
import surxondaryo_m from './surxondaryo/metan.vue'
import surxondaryo_p from './surxondaryo/propan.vue'

import toshkent_b from './tashkent/benzin.vue'
import toshkent_m from './tashkent/metan.vue'
import toshkent_p from './tashkent/propan.vue'

import sirdaryo_b from './sirdaryo/benzin.vue'
import sirdaryo_m from './sirdaryo/metan.vue'
import sirdaryo_p from './sirdaryo/propan.vue'

import samarqand_b from './samarqand/benzin.vue'
import samarqand_m from './samarqand/metan.vue'
import samarqand_p from './samarqand/propan.vue'

import qashqadaryo_b from './qashqadaryo/benzin.vue'
import qashqadaryo_m from './qashqadaryo/metan.vue'
import qashqadaryo_p from './qashqadaryo/propan.vue'

import khorezm_b from './khorezm/benzin.vue'
import khorezm_m from './khorezm/metan.vue'
import khorezm_p from './khorezm/propan.vue'

import navoi_b from './navoi/benzin.vue'
import navoi_m from './navoi/metan.vue'
import navoi_p from './navoi/propan.vue'

import bukhara_b from './bukhara/benzin.vue'
import bukhara_m from './bukhara/metan.vue'
import bukhara_p from './bukhara/propan.vue'

import namangan_b from './namangan/benzin.vue'
import namangan_m from './namangan/metan.vue'
import namangan_p from './namangan/propan.vue'

import andijan_b from './andijan/benzin.vue'
import andijan_m from './andijan/metan.vue'
import andijan_p from './andijan/propan.vue'

import fergana_b from './fergana/benzin.vue'
import fergana_m from './fergana/metan.vue'
import fergana_p from './fergana/propan.vue'

import Service from "@/modules/fair-price/stations/service";

export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    soato: {
      type: String,
      default: ''
    },
  },
  components: {
    qoraqalpoq_b,
    qoraqalpoq_m,
    qoraqalpoq_p,

    jizzax_b,
    jizzax_m,
    jizzax_p,

    toshkent_b,
    toshkent_m,
    toshkent_p,

    surxondaryo_b,
    surxondaryo_m,
    surxondaryo_p,

    sirdaryo_b,
    sirdaryo_m,
    sirdaryo_p,

    samarqand_b,
    samarqand_m,
    samarqand_p,

    qashqadaryo_b,
    qashqadaryo_m,
    qashqadaryo_p,

    khorezm_b,
    khorezm_m,
    khorezm_p,

    navoi_b,
    navoi_m,
    navoi_p,

    bukhara_b,
    bukhara_m,
    bukhara_p,

    namangan_b,
    namangan_m,
    namangan_p,

    andijan_b,
    andijan_m,
    andijan_p,

    fergana_b,
    fergana_m,
    fergana_p,
  },
  data() {
    return {
      resData: [],
      loader: false
    }
  },
  methods: {
    getData() {
      this.loader = true
      console.log(this.loader)
      Service.gasStationListData({soato: this.soato, type: this.type})
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

