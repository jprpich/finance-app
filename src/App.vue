<template>
  <div class="finance-wrapper">
    <ExpensesView />
  </div>
</template>

<script>
import ExpensesView from './views/ExpensesView.vue'
export default {
  components: {
    ExpensesView
  }
}
</script>

<style scoped>
.finance-wrapper {
  max-width: 500px;
}
</style>
