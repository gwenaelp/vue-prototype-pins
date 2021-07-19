<template>
  <div class="prototype-pins">
    <slot/>
    <slot name="pins" class="pins" />
  </div>
</template>
<script>
export default {
};
</script>
<style scoped>
.prototype-pins {
  position: relative;
  overflow: visible;
}
</style>
