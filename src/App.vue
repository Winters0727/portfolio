<template>
  <v-app>
    <v-app-bar
      app
      :color="themeColor"
      dark
    >
      <div class="d-flex align-center">
        <router-link :to="{ name : 'index' }" exact>
          <v-img
          alt="navbar-logo.png"
          title="Developer Winters"
          class="shrink mr-2"
          contain
          :src="require('@/assets/navbar-logo.png')"
          transition="scale-transition"
          width="60%"
        />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex">
        <router-link v-for="(nav, index) in navbarData" :key="`navbarKey-${index}`" :to="nav.to" exact>
        <v-btn
        class="mx-1"
        :color="btnColor"
      >
        {{ nav.btnContext }}
      </v-btn>
      </router-link>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <footer class="d-block" id="app-footer">
        <!-- center 정렬 -->
    </footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    themeColor : process.env.VUE_APP_THEME_COLOR,
    btnColor : process.env.VUE_APP_BTN_COLOR,
    navbarData : [
      {
        to : { name : 'introduction' },
        btnContext : "소개"
      },
      {
        to : { name : 'activity' },
        btnContext : "대외활동"
      },
      {
        to : { name : 'project' },
        btnContext : "프로젝트"
      }
    ]
  }),
};
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .router-link-exact-active > button {
    border : 3px;
    border-color: red;
    font-weight: bold;
  }

  #app-footer {
    position : fixed;
    text-align: center;
    bottom : 0;
  }
</style>