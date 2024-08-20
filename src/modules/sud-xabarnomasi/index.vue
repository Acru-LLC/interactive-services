<script>
import {mapActions, mapMutations} from "vuex";
import i18n from "@/i18n";
import CheckService from "@/shared/services/checkService";
import Toast from "vue-toastification";

export default {
  data() {
    return {
      dailyIndex: {},
      loading: false,
      searchingModal: false,
      isTelefonActive: true,
      isJshshirActive: false,
      telefonInput: null,
      jshshirInput: null,
      fish: '',
      appealCount: '',
      appealDate: '',
      getUserDatas: {},
      modalVisible: false,
      selectedLanguage: 'UZ',
      languages: [
        {
          language: "uz",
          title: "O'Z",
        },
        {
          language: "uzCyrillic",
          title: "ЎЗ",

        },
        {
          language: "ru",
          title: "РУ",
        },
        // {
        //     flag: require("../shared/views/auth/images/mainPageImages/flags/united-states-of-america.png"),
        //     language: "en",
        //     title: "En",
        // }
      ],
      lan: this.$i18n.locale,
      text: null,
      currentLocale: {},
    }
  },
  computed: {
    getCurrentDate() {
      const now = new Date();
      // console.log(new Date())
      // console.log(now)
      // const options = { year: 'numeric', month: 'long', day: 'numeric' };
      // return now.toLocaleDateString(undefined, options);
      let day = now.getDate()
      let month = now.getMonth()
      let year = now.getFullYear()
      return day + ' ' + this.monthName(month) + ' ' + year
    },
    isSendButtonDisabled() {
      if (this.isTelefonActive) {
        return !this.telefonInput.trim();
      } else if (this.isJshshirActive) {
        return !this.jshshirInput.trim();
      }
      return true; // Disable the button if neither input is active
    },
  },
  methods: {
    ...mapActions(['setCount']),
    ...mapMutations({
      setLocale: "SET_LOCALE"
    }),
    async changeLocale(localeCode) {
      if (this.$i18n.locale !== localeCode) {
        window.location.reload();
        await this.setLocale(localeCode);
        this.currentLocale = this.languages.find(locale => locale.language === localeCode)
      }
    },
    selectLanguage(language) {
      this.selectedLanguage = language;
      // You can perform additional actions here when a language is selected
    },

    showInput(type) {
      if (type === 'phoneNumber') {
        this.isTelefonActive = true;
        this.isJshshirActive = false;
        this.jshshirInput = '';
      } else if (type === 'pinfl') {
        this.isTelefonActive = false;
        this.isJshshirActive = true;
        this.telefonInput = '';
      }
    },
    sendRequest() {
      this.loading = true;
      let check = {
        stir: this.telefonInput ? this.telefonInput.replace(/\s+/g, '') : '',
        pinfl: this.jshshirInput,
        fish: this.fish,
        appealCount: this.appealCount,
        appealDate: this.appealDate
      }
      this.searchLoader = true;
      return CheckService.courtCheckOnline(check)
          .then((result) => {
            this.getUserDatas = result.data;
            // console.log(result.data)
            this.phoneNumber = '';
            this.pinfl = '';
            this.fish = '';
            this.appealCount = '';
            this.appealDate = '';
            this.searchLoader = false;
            this.loading = false;
            if (
                result.data &&
                (result.data.count !== null ||
                    result.data.date !== null ||
                    result.data.firstName !== null ||
                    result.data.lastName !== null ||
                    result.data.middleName !== null)
            ) {
              this.$toast.success(this.$t('statistics_info.download_success'));
              this.modalVisible = true;
            } else {
              this.$toast.error(this.$t('statistics_info.empty_message'));
              this.modalVisible = true;
            }
            // console.log(result.data)
          })
          .catch((err) => {
            this.$toast.error('Error');
            // this.catchErr(err);
          })
          .finally(() => {
            this.searchLoader = false;
            this.searchingModal = false;
            this.loading = false;
          });
    },

    fetchDailyIndex() {
      this.searchLoader = true;
      return CheckService.getDailyIndex()
          .then((result) => {
            this.dailyIndex = result.data;
            // console.log(result.data)
          })
          .catch((err) => {
            this.$toast.error('Error');
            // this.catchErr(err);
          })
          .finally(() => {
            this.searchLoader = false;
          });
    },
  },
  mounted() {
    this.value = this.languages.find((x) => x.language === i18n.locale);
    this.text = this.value.title;
    this.flag = this.value.flag;
  },
  created() {
    this.fetchDailyIndex();
  },
}
</script>
<template>
  <div>
    <b-row style="background-color: #e3f2ef; min-height: 100vh">
    <b-col cols="4" class="p-3" style="box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15); border-bottom-right-radius: 20px; border-top-right-radius: 20px; background-color: white">
      <div class="d-flex justify-content-between align-items-center ml-4">
        <a class="" href="/">
          <img src="@/assets/image/gerb.svg"
               width="60" height="60"
               alt="logo"
               style="box-shadow: rgb(36, 98, 86) 1px 2px 8px; border-radius: 50%"
          />
        </a>
        <span class="text-color ml-3 font-size-17 custom-font">
                    {{ $t('navbar.main_title') }}
                </span>
        <b-dropdown variant="white" right toggle-class="header-item" class="languageBar">
          <template v-slot:button-content>
            {{ text }}
          </template>
          <b-dropdown-item
              v-for="(entry, i) in languages"
              :key="i"
              :value="entry"
              :class="{ active: currentLocale.language === entry.language }"
              @click="changeLocale(entry.language)"
              class="notify-item"
          >
            <span class="align-middle">{{ entry.title }}</span>
          </b-dropdown-item>
        </b-dropdown>
      </div>

      <div class="ml-4">
        <h4 class="font-weight-bold my-4 custom-font" style="color: #226358;">
          {{ $t('sud_xabarnoma.require_txt') }}
        </h4>
        <hr style="background-color: #226358; width: 25%; height: 2px;margin-left: 0; margin-top: -10px">
      </div>

      <div class="ml-4">
        <div class="d-flex justify-content-between shadow-box custom-font">
          <button @click="showInput('phoneNumber')"
                  :class="{'active-class-style': isTelefonActive, 'inactive-class-style': !isTelefonActive}"
                  class="btn">{{ $t('column.individual') }}
          </button>
          <button @click="showInput('pinfl')"
                  :class="{'active-class-style': isJshshirActive, 'inactive-class-style': !isJshshirActive}"
                  class="btn">{{ $t('column.legal_entity') }}
          </button>
        </div>
        <div class="d-flex justify-content-center my-3 custom-font">
          <input v-if="isJshshirActive" class="form-control shadow-box font-size-17" v-model="telefonInput"
                 v-mask="'### ### ###'" :placeholder="$t('bojxona_info.stir')"/>
          <input v-if="isTelefonActive" class="form-control shadow-box font-size-17" v-model="jshshirInput"
                 v-mask="'##############'" :placeholder="$t('pharm_check_sms.pinfl_placeholder')"/>
        </div>
        <button @click="sendRequest"
                class="btn btn-success w-100 d-flex justify-content-center green-gradient-bg2 custom-font font-size-17">
          {{ $t('pharm_check_sms.check_btn') }}
        </button>
      </div>

      <div class="container-box my-5">
        <div class="row text-center">
          <div class="col-md-6 mb-4">
            <div class="info-box">
              <h1 class="counter custom-font">{{dailyIndex.body.finished}}</h1>
              <p class="custom-font text-color font-size-17">
                {{ $t('sud_xabarnoma.checked') }}
              </p>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="info-box highlighted">
              <h1 class="counter custom-font">{{dailyIndex.body.lastDayFinished}}</h1>
              <p class="custom-font text-color font-size-17">
                {{ $t('sud_xabarnoma.checked_today') }}
              </p>
            </div>
          </div>
        </div>

        <div class="contact-info custom-font">
          <p class="custom-font"><img width="30" height="30" src="./tg_gradient.svg" alt="">{{ $t('sud_xabarnoma.telegram') }}</p>
            <p class="custom-font"><img width="30" height="30" src="./info_gradient.svg" alt=""> {{ $t('sud_xabarnoma.support') }}: <a  class="custom-font" href="tel:+998712074800">71-207-48-00 </a><a  class="custom-font" href="tel:1159">(1159)</a></p>
        </div>

        <footer class="mt-5">
          <p class="custom-font">{{ $t('sud_xabarnoma.qomita') }}</p>
          <p class="custom-font">2024</p>
        </footer>
      </div>
      <b-button style="background: #F39138" class="btn btn-warning float-right" size="md" @click="$router.go(-1)">
        &leftarrow; {{ $t("actions.back") }}
      </b-button>

    </b-col>
    <b-col cols="8 d-flex justify-content-center align-items-center position-relative">
      <div class="logo"></div>
      <div v-if="modalVisible" class="modal-container">
        <span class="close-btn" @click="modalVisible = false">&times;</span>
        <div class="modal-number mt-3 custom-font">
          {{ getUserDatas ? getUserDatas : 0}}
        </div>
        <div class="text-color text-center p-3">
          <p class="modal-text font-size-17 custom-font">
            {{ $t('sud_xabarnoma.modal_message') }}
          </p>
          <a href="https://cabinet.fairtech.uz/" target="_blank" class="modal-button green-gradient-bg2 btn btn-success custom-font">
            {{ $t('sud_xabarnoma.modal_btn') }}
          </a>
        </div>
      </div>
    </b-col>
    </b-row>
  </div>
</template>
<style>
@font-face {
  font-family: 'NoirPro';
  src: url('NoirPro-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.custom-font {
  font-family: 'NoirPro', sans-serif;
}
.header {
  width: 100%;
  height: 10%;
  padding: 1rem;
  display: flex;
  align-items: center;
  box-shadow: 0 8px 8px 5px rgba(41, 105, 93, 0.20);
  justify-content: space-between;
}

.header-text {
  margin-left: 1%;
}

.header-main-text a {
  color: #2C665A;
  font-family: "NoirPro-Regular", sans-serif;
  font-size: 38px;
  line-height: 35px;
}

.header-sub-text {
  color: #2C665A;
  font-family: "NoirPro-Regular", sans-serif;
  font-size: 12px;
}

.container-box {
  max-width: 600px;
  margin: 0 auto;
}

.info-box {
  background-color: #f8fdfc;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 30px 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.info-box.highlighted {
  background-color: #e6f8f4;
}

.counter {
  font-size: 56px;
  color: #2B675B;
  font-weight: bold;
}

.contact-info p {
  font-size: 16px;
  margin-bottom: 10px;
  color: #2B675B;
}

.contact-info i {
  margin-right: 8px;
  font-size: 20px;
  color: #2B675B;
}

footer p {
  font-size: 16px;
  color: #2B675B;
}


.languageBar {
  display: flex;
  align-items: center;
  justify-content: center;
  //margin-right: 10px;
  //top: 50px;
  //left: 50px;
  //position: absolute;
  border: 2px solid #2C665A;
  border-radius: 6px;
  width: 68px;
  height: 40px;
}

.language-bar {
  background-color: #E1E8E7;
  border-radius: 50%;
  width: 33px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.language-img {
  width: 21px;
  height: 21px;
  margin-right: 10px;
}

.language-select {
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 33px;
  height: 33px;
  margin-right: 0.25rem;
}
.logo {
  width: 700px;
  height: 700px;
  background-image: url("logo.png");
  background-size: cover;
  opacity: 0.3;
}
.language-select .selected-language {
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  background-color: #E1E8E7;
}

.language-select .selected-language i {
  margin-right: 10px;
}

.language-select .dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.language-select .dropdown-content a {
  display: flex;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  color: #333;
}

.language-select .dropdown-content a i {
  margin-right: 10px;
}

.language-select .dropdown-content a:hover {
  background-color: #e4e4e4;
}

.language-select.active .dropdown-content {
  display: block;
  z-index: 2;
}

/* Close Button */
.modal-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //width: 100%;
  //max-width: 800px; /* Adjust based on your design */
  background: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  color: #888;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0px 0px 6px 2px rgb(44, 102, 90);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Number Style */
.modal-number {
  font-size: 100px;
  color: #2C665A; /* Dark Green */
  margin-bottom: 20px;
}

/* Modal Text */
.modal-text {
  font-size: 18px;
  color: #2C665A; /* Dark Green */
  margin-bottom: 30px;
}

/* Button Style */
.modal-button {
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.modal-button:hover {
  background-color: #005333; /* Darker Green */
}

.date-label {
  width: 156px;
  height: 40px;
  border-radius: 6px;
  border: 2px solid #2C665A;
  background: rgba(217, 217, 217, 0.00);
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  position: relative;
  //display: inline-block; transition: all 0.4s;
}

.date-label span {
  background-color: #2C665A;
  display: block;
  position: absolute;
  transition: all 0.4s;
}

.date-label span:nth-child(odd) {
  width: 0;
  height: 2px;
}

.date-label span:nth-child(even) {
  width: 2px;
  height: 0;
}

.date-label span:nth-child(1) {
  left: 0;
  bottom: 0;
}

.date-label span:nth-child(2) {
  right: 0;
  bottom: 0;
}

.date-label span:nth-child(3) {
  right: 0;
  top: 0;
}

.date-label span:nth-child(4) {
  left: 0;
  top: 0;
}

.date-label:hover span:nth-child(odd) {
  width: 100%;
}

.date-label:hover span:nth-child(even) {
  height: 100%;
}

.date-label:hover {
  box-shadow: 0 2px 4px rgba(75, 0, 130, 0.2);
}

.date-text {
  color: #2C665A;
  font-family: "NoirPro-Regular", sans-serif;
  font-size: 15px;
  line-height: 36px; /* 93.333% */
}

.active-class-style {
  color: #2B675B !important;
  font-size: 17px;
  width: 48%;
  font-weight: bolder;
  border: none;
  border-bottom: 3px solid transparent; /* Makes sure the bottom border space is reserved */
  background-image: linear-gradient(to right, #2A6D60, #217C69, #0E977B);
  background-size: 100% 3px; /* 100% width and 3px height to match the border-bottom size */
  background-repeat: no-repeat;
  background-position: bottom;
}
.shadow-box{
  box-shadow: 0px 0px 6px 4px rgba(227, 242, 239, 1)!important;
  border-radius: 8px;
}

.inactive-class-style {
  //background-color: #E1E8E7 !important;
  color: #2B675B !important;
  font-size: 17px;
  width: 48%;
}
</style>
