import { IonNav } from '@ionic/vue'
import { ref, computed, DefineComponent } from 'vue'
import type { IonNav as IonNavElement } from '@ionic/core/components/ion-nav'

export function useNav () {
  const nav = ref<InstanceType<typeof IonNav>>()
  const navController = computed(() => nav.value?.$el as IonNavElement | undefined)

  async function prevPage () {
    const canGoBack = await navController.value?.canGoBack()
    if (canGoBack) navController.value?.pop()
  }

  function nextPage (component: DefineComponent) {
    console.log(component)
    navController.value?.push(component, { prevPage, nextPage })
  }

  return {
    nav,
    prevPage,
    nextPage
  }
}