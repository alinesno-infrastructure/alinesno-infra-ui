<template>
  <div class="app-container acp-dashboard">

    <!-- 面板切换-->
    <HeadTypeTab :currentTab="4" />

    <!-- 自定义用户应用 -->
    <CustomApps />

  </div>
</template>

<script setup name="Index">

import HeadTypeTab from './headTypeTab.vue'

import CustomApps from './custom-workspace/ucenter-apps.vue'

</script>
