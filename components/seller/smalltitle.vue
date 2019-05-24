<template>
  <div class="smalltitle">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "smalltitle"
    }
</script>

<style scoped>
  .smalltitle{
    height: 30px;
    color: rgba(0,0,0,0.5);
    width: 100%;
  }
</style>
