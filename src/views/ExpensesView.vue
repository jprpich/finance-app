<template>
  <svg
    width="430"
    height="126"
    viewBox="0 0 430 126"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-173 37.6688C-173 -1.55449 -140.57 -33.0113 -101.364 -31.816L459.74 -14.7094H1014.74C1017.85 -14.7094 1020.94 -14.1296 1023.85 -12.9995C1049.59 -2.97753 1042.62 35.2159 1015 35.5008L274.431 43.1389C272.927 43.1544 271.428 43.3241 269.959 43.6453L265.732 44.5695C244.58 49.1938 243.557 78.9795 264.342 85.0437L277.474 88.875C298.5 95.0096 294.072 126 272.169 126H207.144H136.117H-3.59955C-12.1393 126 -20.6581 125.155 -29.0316 123.478L-117.135 105.832C-149.62 99.3259 -173 70.7991 -173 37.6688Z"
      fill="#6C236D"
    />
    <ellipse
      cx="12.1301"
      cy="30.4015"
      rx="45.7306"
      ry="45.067"
      transform="rotate(-41.8083 12.1301 30.4015)"
      fill="#23A991"
    />
    <ellipse
      cx="76.1858"
      cy="12.9906"
      rx="40.8657"
      ry="40.2726"
      transform="rotate(-41.8083 76.1858 12.9906)"
      fill="black"
    />
    <ellipse
      cx="56.9617"
      cy="79.069"
      rx="21.4058"
      ry="21.0952"
      transform="rotate(-41.8083 56.9617 79.069)"
      fill="#F119F5"
      fill-opacity="0.86"
    />
  </svg>

  <div class="finance-top">
    <h1 class="finance-top__title">GASTOS FIJOS</h1>
  </div>

  <div class="expenses-wrapper">
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
  margin-top: 34px;
  margin-bottom: 19px;
  border-top: 2px solid rgba(178, 151, 200, 0.51);
  border-bottom: 2px solid rgba(178, 151, 200, 0.51);

  &__title {
    color: #000;
    text-align: center;
    font-size: 32px;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
    margin: 19px 0;
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
  background-color: #6c236d;
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
