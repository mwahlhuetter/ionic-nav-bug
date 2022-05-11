<template>
  <ion-page>
    <ion-nav ref="nav" :root="Page1" :rootParams="{ prevPage, nextPage }"/>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonNav, IonPage } from '@ionic/vue';
import Page1 from './Page1.vue';
import { useNav } from '@/composables/useNav';

export default defineComponent({
  name: 'WorkingNavPage',
  components: {  IonPage, IonNav },
  setup() {
    return {
      ...useNav(),
      Page1
    }
  }
});
</script>
