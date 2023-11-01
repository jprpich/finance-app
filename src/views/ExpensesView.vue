<template>
  <InlineSvg name="background-top" />

  <div class="finance-top">
    <h1 class="finance-top__title">GASTOS FIJOS</h1>
  </div>

  <div class="expenses-wrapper">
    <div v-if="showPopup" class="expenses-popup">
      <div class="expenses-popup__box">
        <input class="expenses-popup__input" type="text" v-model="newGroup" />
      </div>
      <div class="expenses-popup__bottom">
        <button
          class="expenses-popup__bottom-btn expenses-popup__bottom-btn--left"
          @click="showPopup = false"
        >
          cancel
        </button>
        <button class="expenses-popup__bottom-btn" @click="addGroup">add</button>
      </div>
    </div>

    <div class="finance-groups">
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
    </div>
    <div class="finance-bottom">
      <div class="finance-bottom-sum">
        <InlineSvg name="logo" class="finance-bottom-sum__svg" />

        <h3 class="finance-bottom-sum__left">VALOR TOTAL</h3>
        <p class="finance-bottom-sum__right">{{ expensesTotal }}</p>
      </div>

      <div class="finance-bottom-add">
        <svg
          @click="showPopup = true"
          width="51"
          height="51"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5 4.25C13.7828 4.25 4.25 13.7828 4.25 25.5C4.25 37.2172 13.7828 46.75 25.5 46.75C37.2172 46.75 46.75 37.2172 46.75 25.5C46.75 13.7828 37.2172 4.25 25.5 4.25ZM36.125 27.625H27.625V36.125H23.375V27.625H14.875V23.375H23.375V14.875H27.625V23.375H36.125V27.625Z"
            fill="#6C236D"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groups: null,
      showPopup: false,
      newGroup: 'Nuevo Grupo'
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
    },
    addGroup() {
      this.groups.push({
        title: this.newGroup,
        price: ''
      })
      this.showPopup = false
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
.finance-top-svg {
  width: 100%;
}
.expenses-wrapper {
  position: relative;
  padding-left: 39px;
  padding-right: 26px;
}

.expenses-popup {
  position: absolute;
  top: 115px;
  left: 0;
  height: 172px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #000;
  &__box {
    background-color: #6c236d;
    width: 301px;
    height: 66px;
    margin: 19px auto;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
  &__input {
    background-color: #6c236d;
    outline: none;
    border: none;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
  }
  &__bottom {
    display: flex;
    justify-content: center;
  }
  &__bottom-btn {
    cursor: pointer;
    width: 119px;
    height: 37px;
    border-radius: 50px;
    border: 1px solid #000;
    background: #fff;
    color: #000;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    &--left {
      margin-right: 20px;
    }
  }
}
.finance-top {
  margin-top: 15px;
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

.finance-groups {
  height: 45vh;
  overflow: scroll;
}

.finance-group {
  display: flex;
  margin-bottom: 19px;
}

.finance-group-left {
  width: 94px;
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
  width: 257px;
  height: 66px;
  margin-left: 14px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  padding-top: 30px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border-top: 2px solid rgba(178, 151, 200, 0.51);
}

.finance-bottom-sum {
  position: relative;
  border-radius: 10px;
  border: 1px solid #000;
  width: 252px;
  height: 70px;
  display: flex;
  align-items: center;
  &__left {
    color: #000;
    font-size: 12px;
    font-weight: 400;
    margin-left: 57px;
  }
  &__right {
    margin-left: 6px;
  }
  &__svg {
    position: absolute;
    top: 7px;
    left: 7px;
  }
}

.finance-bottom-add {
  cursor: pointer;
  margin-left: 35px;
}
</style>
