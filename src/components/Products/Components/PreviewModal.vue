<script setup>
  import { ModalsContainer, useModal } from 'vue-final-modal'
  import ModalConfirm from './ModalConfirm.vue'

  const props = defineProps(['data'])

  const { open, close } = useModal({
    component: ModalConfirm,
    attrs: {
      title: 'This Products!!',
      onConfirm() {
        console.log('hello world', props.data);
        close()
      },
    },
    slots: {
      default: `want to buy this ${props.data.name} products`,
    },
  })

  </script>

  <template>
    <VButton @click="() => open()">
      <div type="button" class="text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">Buy Now</div>
    </VButton>

    <ModalsContainer />
  </template>