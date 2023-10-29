<template>
  <div class="register-wrapper">
    <svg
      class="app-logo"
      width="219"
      height="190"
      viewBox="0 0 219 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="68.62" cy="64.7101" rx="68.62" ry="64.7101" fill="#23A991" />
      <ellipse cx="157.68" cy="107.391" rx="61.32" ry="57.8261" fill="black" />
      <ellipse cx="70.08" cy="159.71" rx="32.12" ry="30.2899" fill="#F119F5" fill-opacity="0.86" />
    </svg>

    <h1 class="register-title">AHORAPP</h1>

    <div class="register">
      <input class="register__input" type="text" v-model="user.email" />

      <input class="register__input" type="text" v-model="user.password" />

      <button class="register__btn" @click="$emit('update-selected', 'ExpensesView')">
        entrar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: 'email',
        password: 'password'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
}

.app-logo {
  margin: 17px;
}

.register-title {
  color: #000;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100px; /* 208.333% */
  letter-spacing: 9.6px;
}

.register {
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  &__input {
    width: 236px;
    height: 54px;
    color: #000;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 38px;
    border: 1px solid black;
    padding-left: 20px;
  }

  &__btn {
    width: 144px;
    height: 54px;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    border-radius: 20px;
    cursor: pointer;
  }
}

.register-bottom-image {
  position: absolute;
  bottom: 0;
}
</style>
