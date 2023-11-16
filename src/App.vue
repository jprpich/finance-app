<template>
  <div class="finance-wrapper">
    <RouterLink to="/" style="margin-right: 30px">Register</RouterLink>
    <RouterLink to="/expenses">Expenses</RouterLink>
    <RouterView />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {}
}
</script>

<style scoped>
.finance-wrapper {
  position: relative;
}
</style>
