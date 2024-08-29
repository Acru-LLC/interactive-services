<template>
  <div>
    <b-row>
      <b-col cols="4">
        <b-button size="sm" class="colorBtnActive" style="cursor: default">
          {{ $t('stations.grafik') }}
        </b-button>
      </b-col>
      <b-col cols="4">
        <b-button-group class="float-right">
          <b-button size="sm"
                    :class="activeTab == 'propan' ?  'colorBtnActive' : 'colorBtn'"
                    @click="activeTab='propan'">
            {{ $t('stations.propan') }}
          </b-button>
          <b-button size="sm"
                    :class="activeTab == 'metan' ?  'colorBtnActive' : 'colorBtn'"
                    @click="activeTab='metan'">
            {{
              $t('stations.metan')
            }}
          </b-button>
          <b-button size="sm"
                    :class="activeTab == 'benzin' ?  'colorBtnActive' : 'colorBtn'"
                    @click="activeTab='benzin'">
            {{
              $t('stations.benzin')
            }}
          </b-button>
        </b-button-group>
      </b-col>
      <b-col cols="4">
        <b-button-group class="float-right">
          <b-button size="sm"
                    :class="activeDate == 'oy' ?  'colorBtnActive' : 'colorBtn'"
                    @click="activeDate='oy'">
            {{ $t('stations.oy') }}
          </b-button>
          <b-button size="sm"
                    :class="activeDate == 'kun' ?  'colorBtnActive' : 'colorBtn'"
                    @click="activeDate='kun'">
            {{
              $t('stations.kun')
            }}
          </b-button>
        </b-button-group>
      </b-col>
    </b-row>

    <vue-apex-charts
        type="line"
        height="230"
        :options="chart.chartOptions"
        :series="chart.series"
    ></vue-apex-charts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: "created-petrol-count-by-month",
  data() {
    return {
      activeDate: 'oy',
      activeTab: 'propan',
      chart: {
        series: [
          {
            name: "Umumiy",
            data: [0, 1, 2, 3, 5, 3, 2, 2, 2, 3, 6, 8]
          }
        ],
        chartOptions: {
          chart: {
            height: 250,
            type: 'line',
            dropShadow: {
              enabled: true,
              top: 15,
              left: 10,
              blur: 10,
              opacity: 0.2,
              color: '#97052D' // Soyaning rangi
            },
            toolbar: {
              show: false
            }
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth',
            colors: ['#97052D'] // Chiziq rangi
          },
          title: {
            align: 'left'
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          markers: {
            size: 1
          },
          xaxis: {
            categories: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyn', 'Iyl', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'],
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -5,
            offsetX: -1
          }
        },
      },
    }
  },
  components: {
    VueApexCharts,
  }
}
</script>

<style scoped>

.colorBtnActive {
  background: #2b675b;
  color: #FFFFFF !important;
}

.colorBtn {
  background: #FFFFFF;
  color: #2b675b !important;
}
</style>



<!--Andijon - 1703-->
<!--Buxoro - 1706-->
<!--Jizzax - 1708-->
<!--Qashqadaryo - 1710-->
<!--Qoraqalpog'iston - 1735-->
<!--Navoiy - 1712-->
<!--Namangan - 1714-->
<!--Samarqand - 1718-->
<!--Sirdaryo - 1724-->
<!--Surxondaryo - 1722-->
<!--Toshkent viloyati - 1727-->
<!--Toshkent shahar - 1726-->
<!--Farg'ona - 1730-->
<!--Xorazm - 1733-->