<template>
  <div class="register-wrapper">
    <InlineSvg class="app-logo" name="app-logo" />

    <h1 class="register-title">AHORAPP</h1>
    <div class="register-link" @click="updateIsLogin">
      <a>{{ isLogin ? 'No tienes cuenta? Crea una cuenta' : 'Ya tienes una cuenta? entrar.' }}</a>
    </div>

    <p class="register-error-message">{{ errorMessage }}</p>

    <div class="register">
      <InlineSvg class="background-bottom" name="background-bottom" />

      <input
        class="register__input register__input--first"
        placeholder="Email"
        type="text"
        v-model="user.email"
      />

      <input class="register__input" placeholder="Contraseña" type="text" v-model="user.password" />

      <input
        v-if="!isLogin"
        class="register__input"
        placeholder="Confirmar Contraseña"
        type="text"
        v-model="user.passwordConfirm"
      />

      <button class="register__btn" @click="onSubmit">
        {{ isLogin ? 'entrar' : 'crear cuenta' }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
        passwordConfirm: '',
        name: ''
      },
      errorMessage: '',
      isLogin: true
    }
  },
  methods: {
    onSubmit() {
      if (this.isLogin) {
        axios
          .post(import.meta.env.VITE_API_URL + 'api/v1/users/login', this.user)
          .then((res) => {
            console.log(res.data)
            this.$router.push('/expenses')
          })
          .catch((e) => {
            this.errorMessage = e.response.data.message
          })
      } else {
        axios
          .post(import.meta.env.VITE_API_URL + 'api/v1/users/signup', this.user)
          .then((res) => {
            console.log(res.data)
            this.$router.push('/expenses')
          })
          .catch((e) => {
            this.errorMessage = e.response.data.message
          })
      }
    },
    updateIsLogin() {
      this.user = {}
      this.errorMessage = ''
      this.isLogin = !this.isLogin
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

.register-error-message {
  text-align: center;
  color: rgb(210, 36, 36);
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

.register-link {
  cursor: pointer;
  text-align: center;
}

.register {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  &__input {
    z-index: 1;
    width: 236px;
    height: 54px;
    color: #000;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 38px;
    border: 1px solid black;
    padding-left: 20px;
    &--first {
      margin-top: 140px;
    }
  }

  &__btn {
    z-index: 1;
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

.background-bottom {
  width: 100%;

  position: absolute;
  z-index: 0;
}
</style>
