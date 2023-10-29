<template>
  <div class="finance-wrapper">
    <component :is="selected" @update-selected="updateSelected" />
  </div>
</template>

<script>
import ExpensesView from './views/ExpensesView.vue'
import RegisterView from './views/RegisterView.vue'

export default {
  data() {
    return {
      selected: ''
    }
  },
  components: {
    ExpensesView,
    RegisterView
  },
  methods: {
    updateSelected(view) {
      this.selected = view
    }
  },
  created() {
    this.selected = 'RegisterView'
  }
}
</script>

<style scoped>
.finance-wrapper {
  max-width: 500px;
}
</style>
