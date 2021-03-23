<template>
    <section id="about-us">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">Про нашу компанію</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
          >
            Компанія STAVKAM - це лідер у виробництві виробів з каменю. Ми поширюємо широкий пакет послуг, який може задовільнити навіть самого вимогливого клієнта! Саме у нас Ви можете зробити замовлення, про яке не пожалієте і будете повністю задоволені результатом виконаної роботи. 
          </v-responsive>

          <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img src="./mainPageMedia/stone-texture.jpg"></v-img>
          </v-avatar>

          <div></div>

          <v-btn
            color="grey"
            @click="$vuetify.goTo('#feedback')"
            outlined
            large
          >
            <span class="grey--text text--darken-1 font-weight-bold">
              Зв’язатися з нами
            </span>
          </v-btn>
        </v-container>

        <div class="py-12"></div>
      </section>
</template>