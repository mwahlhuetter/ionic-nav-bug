<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Page 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Page 3</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ExploreContainer name="Page 3" />

      <ion-button @click="prevPage && prevPage()">Prev</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'PageThree',
  props: {
    prevPage: {
      type: Function as PropType<() => void>,
    }
  },
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton },
});
</script>
