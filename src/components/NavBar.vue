<template>
  <div>

    <v-container>
      <v-row>
        <v-col  v-for="(t,index) in titles" :key="index" cols="4" md="4">
          <v-btn :style="{color: t.color}"  @click="$router.push({path:t.path}) "
                 class="ma-10 pa-5"
                 shaped
                 large
                 block
          >
            {{t.text}}
          </v-btn>
        </v-col>
      </v-row>
      <div v-if="!this.$auth.loading" style="margin-top: 20px">

        <v-btn v-if="!this.$auth.isAuthenticated" @click="login" class="ma-10 pa-5" shaped large block>
          Sign in
        </v-btn>

        <v-btn v-if="this.$auth.isAuthenticated" @click="logout" class="ma-10 pa-5" shaped large block>
          Log out
        </v-btn>
      </div>
    </v-container>
  </div>


</template>

<script>
export default {
  name: 'NavBar',
  props: ['titles'],
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
