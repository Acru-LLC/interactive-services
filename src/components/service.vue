<script>
import da from "vue2-datepicker/locale/es/da";

export default {
  data() {
    return {
      isSubtitleVisible: false,
      isSubtitleVisible2: false,
      isSubtitleVisible3: false,
      isSubtitleVisible4: false,
      isSubtitleVisible5: false,
      isSubtitleVisible6: false,
      isSubtitleVisible7: false,
      isSubtitleVisible8: false,
      isSubtitleVisible9: false,
      isSubtitleVisible10: false,
      showModal: false,
      showModal2: false,
      showModalPrice: false
    }
  },
  methods: {
    toggleSubtitle(code) {
      switch (code) {
        case 'one':
          this.isSubtitleVisible = !this.isSubtitleVisible;
          break;
        case 'two':
          this.isSubtitleVisible2 = !this.isSubtitleVisible2;
          break;
        case 'three':
          this.isSubtitleVisible3 = !this.isSubtitleVisible3;
          break;
        case 'four':
          this.isSubtitleVisible4 = !this.isSubtitleVisible4;
          break;
        case 'five':
          this.isSubtitleVisible5 = !this.isSubtitleVisible5;
          break;
        case 'six':
          this.isSubtitleVisible6 = !this.isSubtitleVisible6;
          break;
        case 'seven':
          this.isSubtitleVisible7 = !this.isSubtitleVisible7;
          break;
        case 'eight':
          this.isSubtitleVisible8 = !this.isSubtitleVisible8;
          break;
        case 'nine':
          this.isSubtitleVisible9 = !this.isSubtitleVisible9;
          break;
        case 'ten':
          this.isSubtitleVisible10 = !this.isSubtitleVisible10;
          break;
      }
    },
  }
};

</script>

<template>
  <!--START SERVICES-->
  <section class=" section-lg pb-0" id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <h1 class="section-title text-center text-color">{{ $t('main_page.title') }}</h1>
          <div class="section-title-border margin-t-20" style="background-color: #246256"></div>
          <!--          <p-->
          <!--              class="section-subtitle text-muted text-center padding-t-30 font-secondary"-->
          <!--          >We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>-->
        </div>
      </div>
      <div class="row margin-t-30">
        <div class="col-lg-3 col-md-6 col-12">
            <div class="p-3 margin-t-20" :class="isSubtitleVisible ? 'active-card' : 'inactive-card'"
                 style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">
              <div class="hover-effect">
                <a href="https://cabinet.fairtech.uz/murojaat-create" target="_blank">
                <img src="@/assets/image/online_sud_qarori.svg" alt="" class="custom-icons">
                <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('services.appeal_title') }}</h4>

                <!-- Toggleable Subtitle -->
                <p v-if="isSubtitleVisible" class="padding-t-15 text-color">
                  {{ $t('services.appeal_subtitle') }}
                </p>
                </a>
              </div>
              <!-- "Batafsil" Button with Chevron -->
              <button @click="toggleSubtitle('one')" class="btn btn-link p-0 font-size-17">
                {{ $t('actions.details') }}
                <i class="font-size-12" :class="isSubtitleVisible ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"></i>
              </button>
            </div>
        </div>

        <div class="col-lg-3 col-md-6 col-12">
          <div class="p-3  margin-t-20"
               :class="isSubtitleVisible2 ? 'active-card' : 'inactive-card'"
               style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">
            <div class="hover-effect" @click="showModal2 = true">
              <img src="@/assets/image/onlayn_kuzatuv.svg" alt="" class="custom-icons">
              <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('services.online_checking.card_title') }}</h4>
              <p v-if="isSubtitleVisible2"  class="padding-t-15 text-color">
                {{ $t('services.online_checking.card_subtitle1') }}
                <a href="https://cabinet.fairtech.uz" target="_blank">cabinet.fairtech.uz</a>
                {{ $t('services.online_checking.card_subtitle2') }}
              </p>
            </div><!-- "Batafsil" Button with Chevron -->
              <button @click="toggleSubtitle('two')" class="btn btn-link p-0 font-size-17">
                {{ $t('actions.details') }}
                <i class="font-size-12" :class="isSubtitleVisible2 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"></i>
              </button>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-12">
            <div class="p-3 margin-t-20" :class="isSubtitleVisible3 ? 'active-card' : 'inactive-card'"
                 style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">
              <div class="hover-effect">
                <router-link to="/product-services">
                <img src="@/assets/image/product_info.svg" alt="" class="custom-icons">
                <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('services.product_info.card_title') }}</h4>
                <hr class="green-gradient-bg my-1 w-75 ml-0" style="height: 2px">
                <h4 class="text-color font-weight-bold">{{ $t('services.product_info.card_subtitle1') }}</h4>
                <p class="padding-t-15 text-color" v-if="isSubtitleVisible3">
                  {{ $t('services.product_info.card_subtitle2') }}
                </p>
          </router-link>
              </div>
              <!-- "Batafsil" Button with Chevron -->
              <button @click="toggleSubtitle('three')" class="btn btn-link p-0 font-size-17">
                {{ $t('actions.details') }}
                <i class="font-size-12" :class="isSubtitleVisible3 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"></i>
              </button>
            </div>

        </div>

        <div class="col-lg-3 col-md-6 col-12">
            <div class="p-3 margin-t-20" :class="isSubtitleVisible4 ? 'active-card' : 'inactive-card'"
                 style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">
              <div class="hover-effect">
                <a href="https://cabinet.fairtech.uz/reporting/menu" target="_blank">
                <img src="@/assets/image/statistik_malumot.svg" alt="" class="custom-icons">
                <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('services.online_report.card_title') }}</h4>
                <p class="padding-t-15 text-color" v-if="isSubtitleVisible4">
                  {{ $t('services.online_report.card_subtitle') }}
                </p>
                </a>
              </div>
              <!-- "Batafsil" Button with Chevron -->
              <button @click="toggleSubtitle('four')" class="btn btn-link p-0 font-size-17">
                {{ $t('actions.details') }}
                <i class="font-size-12" :class="isSubtitleVisible4 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"></i>
              </button>
            </div>
        </div>

      </div>

      <div class="row mt-5">
        <div class="col-lg-3 col-md-6 col-12 mb-4">
          <div class="p-3" :class="isSubtitleVisible5 ? 'active-card' : 'inactive-card'"
               style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">
            <div class="hover-effect" @click="showModal = true">
              <img src="@/assets/image/rozilik_berish.svg" alt="" class="custom-icons">
              <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('services.agreement.card_title') }}</h4>
              <p class="padding-t-15 text-color" v-if="isSubtitleVisible5">
                {{ $t('services.agreement.card_subtitle') }}
              </p>
            </div>
            <!-- "Batafsil" Button with Chevron -->
            <button @click="toggleSubtitle('five')" class="btn btn-link p-0 font-size-17">
              {{ $t('actions.details') }}
              <i class="font-size-12" :class="isSubtitleVisible5 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"></i>
            </button>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-12 mb-4">
<!--          <div class="p-3 h-100"-->
<!--               @click="showModalPrice = true"-->
<!--               style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">-->
<!--            <div class="hover-effect">-->
<!--              <img src="@/assets/image/onlayn_kuzatuv.svg" alt="" class="custom-icons">-->
<!--              <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('services.fair_price.card_title') }}</h4>-->
<!--              <p class="padding-t-15 text-color">-->
<!--                {{ $t('services.fair_price.body_title') }}-->
<!--              </p>-->
<!--            </div>-->
<!--          </div>-->
          <!--          <router-link to="/fair-price" teg="div">-->
          <!--            <div class="p-3 h-100"-->
          <!--                 style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">-->
          <!--              <div class="hover-effect">-->
          <!--                <img src="@/assets/image/fair_prce.svg" alt="" class="custom-icons">-->
          <!--                <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('services.fair_price.card_title') }}</h4>-->
          <!--                <hr class="green-gradient-bg my-1" style="height: 2px">-->
          <!--                <h5 class="text-color font-weight-bold">{{ $t('services.fair_price.sub_title') }}</h5>-->

          <!--                <p class="padding-t-15 text-color">-->
          <!--                  {{ $t('services.fair_price.body_title') }}-->
          <!--                </p>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </router-link>-->
            <div class="p-3" :class="isSubtitleVisible6 ? 'active-card' : 'inactive-card'"
                 style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">
              <div class="hover-effect" @click="showModalPrice = true">
<!--                <router-link to="/fair-price" >-->
                <img src="@/assets/image/fair_prce.svg" alt="" class="custom-icons">
                <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('services.fair_price.card_title') }}</h4>
                <hr class="green-gradient-bg my-1 w-50 ml-0" style="height: 2px">
                <h5 class="text-color font-weight-bold">{{ $t('services.fair_price.sub_title') }}</h5>

                <p class="padding-t-15 text-color" v-if="isSubtitleVisible6">
                  {{ $t('services.fair_price.body_title') }}
                </p>
<!--                </router-link>-->
              </div>
              <!-- "Batafsil" Button with Chevron -->
              <button @click="toggleSubtitle('six')" class="btn btn-link p-0 font-size-17">
                {{ $t('actions.details') }}
                <i class="font-size-12" :class="isSubtitleVisible6 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"></i>
              </button>
            </div>
        </div>

        <div class="col-lg-3 col-md-6 col-12 mb-4">
            <div class="p-3" :class="isSubtitleVisible7 ? 'active-card' : 'inactive-card'"
                 style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">
              <div class="hover-effect">
                <a href="https://t.me/rquzBot" target="_blank">
                <img src="@/assets/image/rqbot.svg" alt="" class="custom-icons">
                <!--                <i class="fab fa-telegram-plane"></i>-->
                <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('telegram_menu_title') }}</h4>
                <p class="padding-t-10 text-color" v-if="isSubtitleVisible7">
                  {{ $t('telegram_menu_subtitle') }}
                </p>
                </a>
              </div>
              <!-- "Batafsil" Button with Chevron -->
              <button @click="toggleSubtitle('seven')" class="btn btn-link p-0 font-size-17">
                {{ $t('actions.details') }}
                <i class="font-size-12" :class="isSubtitleVisible7 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"></i>
              </button>
            </div>
        </div>

        <div class="col-lg-3 col-md-6 col-12 mb-4">
            <div class="p-3" :class="isSubtitleVisible8 ? 'active-card' : 'inactive-card'"
                 style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">
              <div class="hover-effect">
                <router-link to="/court-table">
                <img src="@/assets/image/statistik_malumot.svg" alt="" class="custom-icons">
                <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('court_table_list.card_title') }}</h4>
                <p class="padding-t-15 text-color" v-if="isSubtitleVisible8">
                  {{ $t('court_table_list.card_subtitle') }}
                </p>
                </router-link>
              </div>
              <!-- "Batafsil" Button with Chevron -->
              <button @click="toggleSubtitle('eight')" class="btn btn-link p-0 font-size-17">
                {{ $t('actions.details') }}
                <i class="font-size-12" :class="isSubtitleVisible8 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"></i>
              </button>
            </div>
        </div>
      </div>

      <div class="row margin-t-30 d-flex justify-content-center">
        <div class="col-lg-3 col-md-6 col-12">
            <div class="p-3" :class="isSubtitleVisible9 ? 'active-card' : 'inactive-card'"
                 style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">
              <div class="hover-effect">
                <router-link to="/sud-xabarnomasi" teg="div">
                <img src="@/assets/image/Sud qarori.svg" alt="" class="custom-icons">
                <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('sud_xabarnoma.card_title') }}</h4>
                <p class="padding-t-15 text-color" v-if="isSubtitleVisible9">
                  {{ $t('sud_xabarnoma.card_subtitle') }}
                </p>
                </router-link>
              </div>
              <!-- "Batafsil" Button with Chevron -->
              <button @click="toggleSubtitle('nine')" class="btn btn-link p-0 font-size-17">
                {{ $t('actions.details') }}
                <i class="font-size-12" :class="isSubtitleVisible9 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"></i>
              </button>
            </div>
        </div>

        <div class="col-lg-3 col-md-6 col-12">
            <div class="p-3" :class="isSubtitleVisible10 ? 'active-card' : 'inactive-card'"
                 style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">
              <div class="hover-effect">
                <router-link to="/court-online" teg="div">
                <img src="@/assets/image/online_sud_qarori.svg" alt="" class="custom-icons">
                <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('court_online.card_title') }}</h4>
                <p class="padding-t-15 text-color" v-if="isSubtitleVisible10">
                  {{ $t('court_online.card_subtitle') }}
                </p>
                </router-link>
              </div>
              <!-- "Batafsil" Button with Chevron -->
              <button @click="toggleSubtitle('ten')" class="btn btn-link p-0 font-size-17">
                {{ $t('actions.details') }}
                <i class="font-size-12" :class="isSubtitleVisible10 ? 'fa fa-chevron-up' : 'fa fa-chevron-down'"></i>
              </button>
            </div>
        </div>
        <!--        <div class="col-lg-3 col-md-6 col-12">-->
        <!--          <router-link to="/online-kuzatuv" teg="div">-->
        <!--            <div class="p-3 h-100"-->
        <!--                 style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">-->
        <!--              <div class="hover-effect">-->
        <!--                <img src="@/assets/image/online_sud_qarori.svg" alt="" class="custom-icons">-->
        <!--                <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('online kuzatuv') }}</h4>-->
        <!--                <p class="padding-t-15 text-color">-->
        <!--                  {{ $t('court_online.card_subtitle') }}-->
        <!--                </p>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </router-link>-->
        <!--        </div>-->

      </div>


      <b-modal id="modal-1" hide-footer :title="$t('services.agreement.card_title')" v-model="showModal" size="lg">
        <b-row>
          <b-col>
            <a href="https://my.gov.uz/uz/service/355" target="_blank">
              <b-card class="text-center h-100" style="box-shadow: rgb(201, 219, 215) 2px 4px 8px 0px">
                <!--              <b-card class="default-bg">-->
                <img src="@/assets/image/service-logo.svg" alt="image" class="img-fluid bg-white"
                     style="border-radius: 50%; box-shadow: rgb(36, 98, 86) 1px 1px 7px 3px;">
                <!--              </b-card>-->
                <h4 class="padding-t-15 text-color">{{ $t('services.agreement.card_title') }}</h4>
                <p class="padding-t-15 text-color">
                  {{ $t('services.agreement.modal1_subtitle') }}
                </p>
              </b-card>
            </a>
          </b-col>

          <b-col>
            <a href="https://license.gov.uz/service/3991" target="_blank">
              <b-card class="text-center h-100" style="box-shadow: rgb(201, 219, 215) 2px 4px 8px 0px">
                <!--              <b-card class="default-bg">-->
                <img src="@/assets/image/service-logo.svg" alt="image" class="img-fluid bg-white"
                     style="border-radius: 50%; box-shadow: rgb(36, 98, 86) 1px 1px 7px 3px;">
                <!--              </b-card>-->
                <h4 class="padding-t-15 text-color">{{ $t('services.agreement.card_title') }}</h4>
                <p class="padding-t-15 text-color">
                  {{ $t('services.agreement.modal2_subtitle') }}
                </p>
              </b-card>
            </a>
          </b-col>
        </b-row>
      </b-modal>

      <b-modal id="modal-2" hide-footer :title="$t('online_kuzatuv.card_title')" v-model="showModal2" size="lg">
        <b-row>
          <b-col>
            <router-link to="/online-watching" teg="div">
              <div class="p-3 h-100"
                   style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">
                <div class="hover-effect">
                  <img src="@/assets/image/onlayn_kuzatuv.svg" alt="" class="custom-icons">
                  <!--                  <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('services.online_checking.card_title') }}</h4>-->
                  <p class="padding-t-15 text-color">
                    {{ $t('services.online_checking.card_subtitle1') }}
                    <a href="https://cabinet.fairtech.uz" target="_blank">cabinet.fairtech.uz</a>
                    {{ $t('services.online_checking.card_subtitle3') }}
                  </p>
                </div>
              </div>
            </router-link>
          </b-col>

          <b-col>
            <router-link to="/online-kuzatuv" teg="div">
              <div class="p-3 h-100"
                   style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">
                <div class="hover-effect">
                  <img src="@/assets/image/online_sud_qarori.svg" alt="" class="custom-icons">
                  <!--                  <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('online_kuzatuv.card_title') }}</h4>-->
                  <p class="padding-t-15 text-color">
                    {{ $t('online_kuzatuv.card_subtitle') }}
                  </p>
                </div>
              </div>
            </router-link>
          </b-col>
        </b-row>
      </b-modal>

      <b-modal id="modal-2" hide-footer :title="$t('services.fair_price.card_title')" v-model="showModalPrice"
               size="lg">
        <b-row>
          <b-col>
            <router-link to="/fair-price" teg="div">
              <div class="p-3 h-100"
                   style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">
                <div class="hover-effect">
                  <b-row>
                    <b-col cols="3">
                      <img src="@/assets/image/onlayn_kuzatuv.svg" alt="" class="custom-icons">
                    </b-col>
                    <b-col cols="9">
                      <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('services.fair_price.card_title') }}</h4>
                    </b-col>
                  </b-row>
                  <p class="padding-t-15 text-color">
                    {{ $t('services.fair_price.body_title') }}
                  </p>
                </div>
              </div>

            </router-link>
          </b-col>

          <b-col>
            <router-link to="/fair-price-stations" teg="div">
              <div class="p-3 h-100"
                   style="border-radius: 5px; cursor: pointer; box-shadow: rgb(201 219 215) 2px 4px 8px 0px">
                <div class="hover-effect">
                  <b-row>
                    <b-col cols="3">
                      <img src="@/assets/image/statistik_malumot.svg" alt="" class="custom-icons">
                    </b-col>
                    <b-col cols="9">
                      <h4 class="padding-t-15 text-color font-weight-bold">{{ $t('stations.title') }}</h4>
                    </b-col>
                  </b-row>
                  <p class="padding-t-15 text-color">
                    {{ $t('stations.title1') }}
                  </p>
                </div>
              </div>
            </router-link>
          </b-col>
        </b-row>
      </b-modal>

      <hr class="green-gradient-bg mt-5" style="height: 2px"/>
      <b-row>
        <b-col>
          <h4 class="text-center text-color">{{ $t('boss.head_title1') }}</h4>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <hr class="green-gradient-bg" style="height: 2px">
        </b-col>

        <b-col cols="">
          <h4 class="text-center text-color">{{ $t('boss.head_title2') }}</h4>
        </b-col>

        <b-col>
          <hr class="green-gradient-bg" style="height: 2px">
        </b-col>
      </b-row>

    </div>
  </section>
  <!--START SERVICES-->
</template>

<style>
#modal-1 .modal-title {
  width: 200px;
  color: #ffffff;
  background-color: #2b675b;
  border-radius: 5px;
  text-align: center;
}

.custom-icons {
  width: 50px;
  height: 50px;
}

#modal-2 .modal-title {
  width: 40%;
  background-color: #2b675b;
  color: #ffffff;
  border-radius: 5px;
  padding: 3px;
}

/*
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}

.card-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
*/
.active-card{
  height: auto;
}
.inactive-card{
  height: 212px;
  //display: flex;
  //flex-direction: column;
  //justify-content: space-between;
}
.disabled-card {
  pointer-events: none; /* Disables click events */
  opacity: 0.6; /* Makes the element look disabled by reducing its opacity */
  cursor: not-allowed; /* Changes the cursor to indicate that the element is disabled */
  background-color: #e0e0e0; /* Optional: Adds a background color to reinforce the disabled look */
  color: #a0a0a0; /* Optional: Changes text color to a gray shade */
}
@media only screen and (max-width: 767px) {
  .first-row-col {
    margin-top: -20px;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 16px;
  }
}
</style>
