<template>
  <div>
    <vue-final-modal 
      v-slot="{ params, close }"
      v-bind="$attrs"
      classes="modal-container" 
      content-class="modal-content"
      :click-to-close="false"
      :esc-to-close="false"
    >
    <span class="modal__title">
      <slot name="title"></slot>
    </span>
    <div class="modal__content">
      <slot :params="params"></slot>
    </div>
      <div class="modal__action">
        <button class="ui primary button" @click="$emit('confirm', close)">
          <slot name="confirm"></slot>
        </button>
        <button class="ui button" @click="$emit('cancel', close)">
          <slot name="cancel"></slot>
        </button>
      </div>
    </vue-final-modal>
  </div>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal'
export default {
  name: 'ConfirmModal',
  inheritAttrs: false,
  emits: ['confirm', 'cancel'],
  components: {
    VueFinalModal
  },
}
</script>

<style scoped>
::v-deep(.modal-container) {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep(.modal-content) {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>
