<template>
  <div class="pinkTitle">
    <div>
      <slot name="left"></slot>
    </div>
    <div><slot></slot></div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "pinkTitle"
    }
</script>

<style scoped>
  .pinkTitle{
    height: 0.45rem;width: 100%;
    background: #fc455d;
    display: flex;justify-content: space-between;align-items: center;
    font-family: 'buding';
    font-size: 0.16rem;
    color:#fff;
    padding: 0 0.1rem;
    position: fixed;top: 0;
    z-index: 2;
  }
  .pinkTitle>div{
    display: flex;align-items: center;
  }
</style>
