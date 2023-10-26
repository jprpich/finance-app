<template>
  <div class="finance-wrapper">
    <div class="finance-top">
      <h1 class="finance-top__title">GASTOS FIJOS</h1>
    </div>
    <div class="finance-group" v-for="(group, i) in groups" :key="i">
      <div class="finance-group-left">
        <h2 class="finance-group-left__title">{{ group.title }}</h2>
      </div>
      <div class="finance-group-right">
        <p class="finance-group-right__title">{{ group.price }}</p>
      </div>
    </div>
    <h1>{{ expensesTotal }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groups: [
        {
          title: 'Arriendo',
          price: 1500000
        },
        {
          title: 'Gas',
          price: 250000
        },
        {
          title: 'Luz',
          price: 350000
        },
        {
          title: 'Agua',
          price: 150000
        },
        {
          title: 'Transporte',
          price: 100000
        }
      ]
    }
  },
  computed: {
    expensesTotal() {
      let sum = 0
      this.groups.forEach((group) => {
        sum += group.price
      })
      return sum
    }
  }
}
</script>

<style scoped lang="scss">
.finance-wrapper {
  max-width: 500px;
}
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
