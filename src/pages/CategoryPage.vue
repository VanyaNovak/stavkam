<template>
   <div>
      <section
        id="category"
        class="grey lighten-3"
      >
        <div class="py-10 "></div>

        <v-container class="text-center mt-9" >
            <v-parallax
             :height="$vuetify.breakpoint.smAndDown ? 200 : 300"
              src="./catalogePageComponents/catalogePageMedia/cataloge_img.jpg"
            >
              <h2 class="display-3 font-weight-Light mb-3 white--text">Category Name</h2>
            </v-parallax>

          <ItemListComponent 
            class="mt-5"
          />
        </v-container>

        </section> 
    </div>
</template>

<script>

import ItemListComponent from './categoryPageComponents/ItemListComponent.vue';

export default {
    name: 'CategoriesComponent',

    components: {
      ItemListComponent
    },
}
</script>