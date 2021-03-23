<template>
    <div>
        <div> <MainPageImageSection class="mt-16 pt-9" /> </div> 
        <div> <CardsButtonSection /> </div>
        <div> <FeaturesSection  /></div>
        <div>
            <v-parallax
             :height="$vuetify.breakpoint.smAndDown ? 200 : 300"
              src="./mainPageComponents/mainPageMedia/stone-texture.jpg"
            />
        </div>
        <div> <AboutUsSection /> </div>
        <div> <WhereWeLocateSection /> </div>
        <div> <FeedBackSection /> </div>
    </div>
</template>

<script>

import MainPageImageSection from './mainPageComponents/MainPageImageSection.vue'
import CardsButtonSection from './mainPageComponents/CardsButtonSection.vue'
import FeaturesSection from './mainPageComponents/FeaturesSection.vue'
import AboutUsSection from './mainPageComponents/AboutUsSection.vue'
import WhereWeLocateSection from './mainPageComponents/WhereWeLocateSection.vue'
import FeedBackSection from './mainPageComponents/FeedBackSection.vue'

export default {
    name: 'MainPage',
    
     components: {
        MainPageImageSection,
        CardsButtonSection,
        FeaturesSection,
        AboutUsSection,
        WhereWeLocateSection,
        FeedBackSection,
    },
}
</script>

<style scoped>

</style>



