<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Page 1</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content :fullscreen="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Page 1</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <ExploreContainer name="Page 1" />

    <ion-button @click="nextPage && nextPage(Page2)">Next</ion-button>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Page2 from './Page2.vue';

export default  defineComponent({
  name: 'PageOne',
  props: {
    nextPage: {
      type: Function as PropType<(component: any) => void>,
    }
  },
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonButton },
  setup (props) {
    console.log(props)
    return {
      Page2
    }
  }
});
</script>
