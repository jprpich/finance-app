<script setup></script>

<template>
  <h1 class="finance-title">GASTOS FIJOS</h1>
  <div class="finance-group">
    <div class="finance-group-left">
      <h2 class="finance-group-left__title">Arriendo</h2>
    </div>
    <div class="finance-group-right">
      <p class="finance-group-right__title">1,500.000</p>
    </div>
  </div>

  <div class="finance-group">
    <div class="finance-group-left">
      <h2 class="finance-group-left__title">Gas</h2>
    </div>
    <div class="finance-group-right">
      <p class="finance-group-right__title">250.000</p>
    </div>
  </div>

  <div class="finance-group">
    <div class="finance-group-left">
      <h2 class="finance-group-left__title">Luz</h2>
    </div>
    <div class="finance-group-right">
      <p class="finance-group-right__title">350.000</p>
    </div>
  </div>

  <div class="finance-group">
    <div class="finance-group-left">
      <h2 class="finance-group-left__title">Agua</h2>
    </div>
    <div class="finance-group-right">
      <p class="finance-group-right__title">150.000</p>
    </div>
  </div>

  <div class="finance-group">
    <div class="finance-group-left">
      <h2 class="finance-group-left__title">Transporte</h2>
    </div>
    <div class="finance-group-right">
      <p class="finance-group-right__title">100.000</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #000;
  text-align: center;
  font-size: 32px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}

.finance-title {
  border: 3px solid rgba(178, 151, 200, 0.66);
  padding: 14px;
  margin-bottom: 56px;
  display: flex;
}

.finance-group {
  display: flex;
  margin-bottom: 38px;
}

.finance-group-left {
  width: 140px;
  height: 66px;
  border-radius: 10px;
  background-color: #530f7c;
  display: flex;
  align-items: center;
  justify-content: center;
}

.finance-group-left__title {
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: italic;
  font-weight: 800;
  line-height: normal;
}

.finance-group-right {
  width: 257px;
  height: 66px;
  margin-left: 15px;
  border: 1px solid #b297c8;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.finance-group-right__title {
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
