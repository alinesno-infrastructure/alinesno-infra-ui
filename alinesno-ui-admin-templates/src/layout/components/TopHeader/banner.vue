<template>
  <div>
    <router-link tag="div" class="header-logo-bar" to="/index">
      <div class="header-logo" v-if="enableLogo" @click="enterDomain">
        <img :src="saasLogoUrl" alt="" />
      </div>
      <a :title="saasTitle" target="_self" class="header-logo-label">
        <span>{{ saasTitle }} </span>
      </a>
      <div v-if="saasUrl" class="dashboard-home" @click="dashboardHome()">
        <i class="fa-solid fa-house"></i> 工作台
      </div>
    </router-link>
  </div>
</template>

<script>

// import { getEnterpriseInfo } from 'alinesno-ui/src/api/config'

export default {
  name: 'TopHeader',
  components: {
  },
  computed: {
  },
  data() {
    // const { VUE_APP_SASS_TITLE, VUE_APP_SASS_URL, VUE_APP_SAAS_LOGO_URL, VUE_APP_ENABLE_LOGO, VUE_APP_DISPLAY_URL } = process.env

    let saasTitle = 'AIP基础设施'
    let enableLogo = true;
    let saasUrl = 'http://portal.infra.linesno.com'; 
    let saasLogoUrl = 'http://portal.infra.linesno.com/logo.png' ; 
    let displayUrl = ''; 

    // if (VUE_APP_SASS_TITLE) {
    //   saasTitle = VUE_APP_SASS_TITLE
    // }
    // if (VUE_APP_SASS_URL) {
    //   saasUrl = VUE_APP_SASS_URL
    // }
    // if (VUE_APP_SAAS_LOGO_URL) {
    //   saasLogoUrl = VUE_APP_SAAS_LOGO_URL
    // }
    // if (VUE_APP_ENABLE_LOGO === 'off') {
    //   enableLogo = false;
    // }
    // if (VUE_APP_DISPLAY_URL) {
    //   displayUrl = VUE_APP_DISPLAY_URL;
    // }

    // >>>> 自定义环境变量的问题 >>>>
    // console.log('env = ' + process.env.VUE_APP_ENV)
    // if (process.env.VUE_APP_ENV !== 'development') {  // 非开发环境
    //   if (window.g.VUE_APP_DISPLAY_URL) {
    //     displayUrl = window.g.VUE_APP_DISPLAY_URL
    //   }
    // }

    return {
      saasTitle,
      saasUrl,
      saasLogoUrl,
      enableLogo,
      displayUrl,
      domainName: null,
    }
  },
  created() {
    // 获取企业信息
    // getEnterpriseInfo().then(res => {
    //   console.info('res = ' + res);

    //   if (res.data && res.data.id) {
    //     this.saasTitle = res.data.name;

    //     console.log(this.saasLogoUrl);
    //     console.log('displayUrl ' + this.displayUrl);

    //     // 官网域名
    //     this.domainName = res.data.domainName;
    //     if (res.data.saasUrl) {
    //       this.saasUrl = res.data.saasUrl;
    //     }

    //     if (res.data.logo && this.displayUrl) {
    //       this.saasLogoUrl = this.displayUrl + res.data.logo;
    //     }

    //   }
    // });
  },
  methods: {
    dashboardHome() {
      window.location.href = this.saasUrl
    },
    // 进入企业官网
    enterDomain() {
      if (this.domainName) { // 跳转进入官网
        window.open(this.domainName)
      }
    }
  }
}
</script>
