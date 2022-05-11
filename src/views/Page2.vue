<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Page 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Page 2</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ExploreContainer name="Page 2" />

      <ion-button @click="prevPage && prevPage()">Prev</ion-button>
      <ion-button @click="nextPage && nextPage(Page3)">Next</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Page3 from './Page3.vue';

export default defineComponent({
  name: 'PageTwo',
  props: {
    prevPage: {
      type: Function as PropType<() => void>,
    },
    nextPage: {
      type: Function as PropType<(component: any) => void>,
    }
  },
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton },
  setup () {
    return {
      Page3
    }
  }
});
</script>
