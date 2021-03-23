<template>
    <section id="about-us"  class="grey lighten-3">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">Як нас знайти?</h2>
            <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-card
            class="py-12 px-4"
            color="grey lighten-5"
            flat
          >
            <div class="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7115.721278128557!2d26.20092386641302!3d50.91005105624377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1614932890606!5m2!1suk!2sua"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy">
                </iframe>
            </div>
          </v-card>
            
        </v-container>
        <div class="py-12"></div>
      </section>
</template>

<style>
.map-responsive{
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
}
.map-responsive iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}
</style>