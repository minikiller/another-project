<template>
  <div>
    <span v-if="!visibleDialog && !visibleWindow">
      <button class="k-button" @click="toggleDialog">Open Dialog</button>
      <button class="k-button" @click="toggleWindow">Open Window</button>
    </span>
    <k-dialog
      v-if="visibleDialog"
      :title="'Please confirm'"
      @close="toggleDialog"
    >
      <p :style="{ margin: '25px', textAlign: 'center' }">
        Are you sure you want to continue?
      </p>
      <dialog-actions-bar>
        <button class="k-button" @click="toggleDialog">No</button>
        <button class="k-button" @click="toggleDialog">Yes</button>
      </dialog-actions-bar>
    </k-dialog>
    <window
      v-if="visibleWindow"
      :title="'Status'"
      :width="800"
      @close="toggleWindow"
    >
      <!-- Additional info - you can drag and resize the me! -->
      <column-grid></column-grid>
      <!-- <dialog-actions-bar>
        <button class="k-button" @click="toggleDialog">No</button>
        <button class="k-button" @click="toggleDialog">Yes</button>
      </dialog-actions-bar> -->
    </window>
  </div>
</template>

<script setup lang="ts">
import { Dialog, DialogActionsBar, Window } from '@progress/kendo-vue-dialogs'
import { ref } from 'vue'
import ColumnGrid from './ColumnGrid.vue'

const visibleDialog = ref(false)
const visibleWindow = ref(false)

const toggleDialog = () => {
  visibleDialog.value = !visibleDialog.value
}

const toggleWindow = () => {
  visibleWindow.value = !visibleWindow.value
}
</script>
