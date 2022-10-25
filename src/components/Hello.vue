<template>
  <div>
    <h1>Hello!</h1>
    <h2>
      <span id="vue">
        Vue
        <span>2</span>
      </span>
      and
      <span id="vite">Vite</span>
    </h2>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped>
  div {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  h1 {
    font-size: 96px;
  }
  h2 {
    font-size: 64px;
  }
  #vue {
    color: #33a06f;
  }
  #vue span {
    color: #ffffff;
    background: #33a06f;
    border-radius: 16px;
    padding: 4px 12px;
    margin-left: -12px;
  }
  #vite {
    color: #646cff;
  }
</style>
