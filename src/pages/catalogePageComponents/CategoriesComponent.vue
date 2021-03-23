<template>
   <div>
      <section
        id="categories"
        class="grey lighten-3"
      >
        <div class="py-10 "></div>

        <v-container class="text-center mt-9" >
            <v-parallax
             :height="$vuetify.breakpoint.smAndDown ? 200 : 300"
              src="./catalogePageMedia/cataloge_img.jpg"
            >
              <h2 class="display-3 font-weight-Light mb-3 white--text">КАТАЛОГ</h2>
            </v-parallax>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
          </v-responsive>

          <v-row class="mb-4">
            <v-col
              v-for="({ icon, title}, i) in category"
              :key="i"
              cols="12"
              md="4"
            >
              <v-card
                class="py-12 px-4"
                color="grey lighten-5"
              >
                <v-theme-provider dark>
                  <div>
                    <v-avatar
                      color="primary"
                      size="100"
                    >
                      <v-icon
                        large
                        v-text="icon"
                      ></v-icon>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                  class="justify-center font-weight-black text-uppercase"
                  v-text="title"
                ></v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        </section> 
      </div>
</template>

<script>


export default {
    name: 'CategoriesComponent',

    components: {
      
    },
    data () {
      return {
        category: [
          {
            icon: 'mdi-grave-stone',
            title: 'Пам’ятники',
          },
          {
            icon: 'mdi-wall',
            title: 'Бруківка',
          },
          {
            icon: 'mdi-checkbox-multiple-blank',
            title: 'Кам’яні плити',
          },
        ],
      }
    }
}
</script>