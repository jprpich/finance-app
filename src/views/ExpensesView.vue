<template>
  <InlineSvg class="background-top" name="background-top" />

  <div class="finance-top">
    <h1 class="finance-top__title">GASTOS FIJOS</h1>
  </div>

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

  <div v-else class="expenses-wrapper">
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
          <div class="finance-group-right__minus" @click="deleteGroup(i)">
            <InlineSvg name="minus" />
          </div>
        </div>
      </div>
    </div>
    <div class="finance-bottom">
      <div class="finance-bottom-sum">
        <InlineSvg name="logo" class="finance-bottom-sum__svg" />

        <h3 class="finance-bottom-sum__left">TOTAL</h3>
        <p class="finance-bottom-sum__right">{{ expensesTotal }}</p>
      </div>

      <div class="finance-bottom-add">
        <InlineSvg name="plus" @click="showNewGroup" />
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
      this.groups[idx].price = value
      this.updateLocalStorage()
    },
    addGroup() {
      this.groups.push({
        title: this.newGroup,
        price: ''
      })
      this.updateLocalStorage()
      this.showPopup = false
    },
    deleteGroup(i) {
      this.groups.splice(i, 1)
      this.updateLocalStorage()
    },
    updateLocalStorage() {
      localStorage.groups = JSON.stringify(this.groups)
    },
    showNewGroup() {
      this.newGroup = 'Nuevo Grupo'
      this.showPopup = true
    }
  },
  created() {
    if (localStorage.groups) {
      this.groups = JSON.parse(localStorage.groups)
    } else {
      this.groups = [
        {
          title: 'Arriendo',
          price: ''
        },
        {
          title: 'Gas',
          price: ''
        },
        {
          title: 'Luz',
          price: ''
        },
        {
          title: 'Agua',
          price: ''
        },
        {
          title: 'Transporte',
          price: ''
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.background-top {
  width: 100%;
}

.expenses-wrapper {
  padding-left: 39px;
  padding-right: 26px;
}

.expenses-popup {
  z-index: 2;
  position: absolute;
  top: 250px;
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
  height: 40vh;
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
  position: relative;
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

  &__minus {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    height: 25px;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
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
