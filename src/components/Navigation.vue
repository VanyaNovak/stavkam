<template>
    <v-app-bar
      app
      color="white"
      height="100"
    >
      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="70"
      >
        <v-img
          @click="$router.push('/')"
          contain
          max-height="70%"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          id="mouse"
        ></v-img>
      </v-avatar>

      <v-toolbar-title class="font-weight-black headline">
        <v-row justify-end>
          <v-col class="pt-6"
            @click="$router.push('/')"
            id="mouse"
          >
          STAVKAM
          </v-col>
          <v-col>
            <v-btn 
            class="font-weight-light"
            x-large
            @click="$router.push('/cataloge')"
            id="mouse"
            >
             Каталог
           </v-btn>
          </v-col>
        </v-row>
      </v-toolbar-title>
    </v-app-bar>
</template>

<style>
#mouse {
  cursor: pointer;
}
</style>

