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

    <RouterLink to="/expenses">
      <h1 class="register-title">AHORAPP</h1>
    </RouterLink>

    <svg
      class="register-bottom-image"
      width="430"
      height="511"
      viewBox="0 0 430 511"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 430C0 308.967 0 248.451 17.2076 199.858C47.4207 114.539 114.539 47.4207 199.858 17.2076C248.451 0 308.967 0 430 0V511H0V430Z"
        fill="#B297C8"
        fill-opacity="0.31"
      />
    </svg>
  </div>
</template>

<script>
export default {}
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

.register-bottom-image {
  position: absolute;
  bottom: 0;
}
</style>
