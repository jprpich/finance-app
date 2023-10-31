<template>
  <div class="expenses-wrapper">
    <div class="finance-top">
      <h1 class="finance-top__title" @click="$emit('update-selected', 'RegisterView')">
        GASTOS FIJOS!
      </h1>
    </div>
    <div class="finance-group" v-for="(group, i) in groups" :key="i">
      <div class="finance-group-left">
        <h2 class="finance-group-left__title">{{ group.title }}</h2>
      </div>
      <div class="finance-group-right">
        <input
          class="finance-group-right__title"
          type="text"
          inputmode="decimal"
          :value="group.price"
          @input="updatePrice($event, i)"
        />
      </div>
    </div>
    <div class="finance-bottom">
      <svg
        class="finance-bottom__svg"
        width="40"
        height="35"
        viewBox="0 0 40 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="12.22" cy="11.9203" rx="12.22" ry="11.9203" fill="#23A991" />
        <ellipse cx="28.92" cy="16.6522" rx="10.92" ry="10.6522" fill="black" />
        <ellipse
          cx="12.48"
          cy="29.4203"
          rx="5.72"
          ry="5.57971"
          fill="#F119F5"
          fill-opacity="0.86"
        />
      </svg>

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
        let price = group.price.replace(/[.]/g, '')
        sum += +price
      })
      return '$' + sum.toLocaleString('de-DE')
    }
  },
  methods: {
    updatePrice(e, idx) {
      const value = e.target.value
      const title = `group-${idx}`

      localStorage.setItem(title, value)

      this.groups[idx].price = value
    }
  },
  created() {
    this.groups = [
      {
        title: 'Arriendo',
        price: localStorage.getItem('group-0') || ''
      },
      {
        title: 'Gas',
        price: localStorage.getItem('group-1') || ''
      },
      {
        title: 'Luz',
        price: localStorage.getItem('group-2') || ''
      },
      {
        title: 'Agua',
        price: localStorage.getItem('group-3') || ''
      },
      {
        title: 'Transporte',
        price: localStorage.getItem('group-4') || ''
      }
    ]
  }
}
</script>

<style scoped lang="scss">
.expenses-wrapper {
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
  margin-left: 15px;
  border: 1px solid #b297c8;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__title {
    height: 35px;
    width: 90%;
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
  position: relative;
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
    margin-left: 77px;
  }
  &__right {
    margin-left: 20px;
  }
  &__svg {
    position: absolute;
    top: 7px;
    left: 7px;
  }
}
</style>
