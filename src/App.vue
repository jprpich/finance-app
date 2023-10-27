<template>
  <div class="finance-wrapper">
    <div class="finance-top">
      <h1 class="finance-top__title">GASTOS FIJOS</h1>
    </div>
    <div class="finance-group" v-for="(group, i) in groups" :key="i">
      <div class="finance-group-right">
        <input
          class="finance-group-right__title"
          type="number"
          :value="group.price"
          @input="updatePrice($event, i)"
        />
      </div>
      <div class="finance-group-left">
        <h2 class="finance-group-left__title">{{ group.title }}</h2>
        <h2 class="finance-group-left__price">{{ displayPrice(group) }}</h2>
      </div>
    </div>
    <div class="finance-bottom">
      <h3 class="finance-bottom__left">VALOR TOTAL</h3>
      <p class="finance-bottom__right">{{ expensesTotal }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groups: null
    }
  },
  computed: {
    expensesTotal() {
      let sum = 0
      this.groups.forEach((group) => {
        sum += group.price
      })
      return '$' + sum.toLocaleString('de-DE')
    }
  },
  methods: {
    updatePrice(e, idx) {
      const value = e.target.value
      const price = value.replace(/[.]/g, '')
      const newPrice = +price
      const title = `group-${idx}`

      localStorage.setItem(title, newPrice)

      this.groups[idx].price = newPrice
    },
    displayPrice(group) {
      return '$' + group.price.toLocaleString('de-DE')
    }
  },
  created() {
    this.groups = [
      {
        title: 'Arriendo',
        price: +localStorage.getItem('group-0') || 0
      },
      {
        title: 'Gas',
        price: +localStorage.getItem('group-1') || 0
      },
      {
        title: 'Luz',
        price: +localStorage.getItem('group-2') || 0
      },
      {
        title: 'Agua',
        price: +localStorage.getItem('group-3') || 0
      },
      {
        title: 'Transporte',
        price: +localStorage.getItem('group-4') || 0
      }
    ]
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
  margin-bottom: 30px;
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
  flex-direction: column;
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

  &__price {
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
  }
}

.finance-group-right {
  width: 210px;
  height: 66px;
  margin-right: 15px;
  border: 1px solid #b297c8;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__title {
    height: 35px;
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: italic;
    font-weight: 300;
    outline: none;
    border: none;
  }
}

.finance-bottom {
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid #b297c8;
  width: 299px;
  height: 70px;
  display: flex;
  align-items: center;
  &__left {
    color: #000;
    font-size: 12px;
    font-weight: 400;
    margin-left: 64px;
  }
  &__right {
    margin-left: 20px;
  }
}
</style>
