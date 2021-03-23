/* eslint-disable vue/return-in-computed-property */
<template>
    <section id="cards-section">
      <v-card  min-height="300" flat>
        <v-row no-gutters  class="d-inline py-12 pa-md-4 mx-lg-auto" > 
          <!------------First card button------------->
           <col>
           <v-card class="mx-5 py-3" flat>
            <v-btn
              min-height="250" 
              class="font-weight-bold"
              x-large
              block
              outlined
              color="indigo"
              elevation="5"
              @click="$router.push('/cataloge')"
              >
                
                Каталог
            </v-btn>
           </v-card>
          <col/>
          <!------------End first card button------------->

         <!------------second card button------------->
          <!-- <col>
           <v-card class="mx-5 " flat>
            <v-btn
              min-height="100" 
              class="font-weight-bold"
              x-large
              block
              outlined
              color="indigo"
              elevation="5"
              @click="$vuetify.goTo('#about-us')"
              >
                Про нашу компанію
            </v-btn>
           </v-card>
          <col/> -->
          <!------------End second card button------------->
        </v-row>
      </v-card>
    </section>
</template>



