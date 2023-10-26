<script setup></script>

<template>
  <div class="finance-top">
    <h1 class="finance-top__title">GASTOS FIJOS</h1>
  </div>
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

<style scoped lang="scss">
.finance-top {
  width: 100%;
  height: 67px;
  border: 3px solid rgba(178, 151, 200, 0.66);
  margin-bottom: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__title {
    color: #000;
    text-align: center;
    font-size: 32px;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
  }
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

  &__title {
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-style: italic;
    font-weight: 800;
    line-height: normal;
  }
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

  &__title {
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
  }
}
</style>
