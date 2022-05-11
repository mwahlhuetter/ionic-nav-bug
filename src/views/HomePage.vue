<template>
  <ion-page class="ion-justify-content-center">
    <ion-button router-link="/working">IonNav Working</ion-button>
    <ion-button router-link="/breaking">IonNav Breaking</ion-button>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonPage } from '@ionic/vue';

export default defineComponent({
  name: 'HomePage',
  components: { IonButton, IonPage },
  setup() {
    return {
    }
  }
});
</script>
