<template>
  <div>
    <span class="label" :style="`color: white; left: ${x}; top: ${y}`">
      <span class="dot">{{label}}</span>
      <span class="help-content">
        <span>
          <slot/>
        </span>
      </span>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    x: {
      type: String,
      required: true
    },
    y: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
.label {
  width: 17px;
  height: 17px;
  position: absolute;
  z-index: 100;
}
.dot {
  background: red;
  color: white;
  border-radius: 10000px;
  text-align: center;
  padding-top: 0px;
  font-size: 14px;
  font-family: monospace;
  display: inline-block;
  padding-left: 3px;
  padding-right: 3px;
  animation: pulse-red 2s infinite;
}
.help-content {
  opacity: 0;
  z-index: 101;
  pointer-events: none;
  display: inline-flex;
  background: #3850b7;
  min-width: 450px;
  padding: 10px;
  margin-left: 20px;
  border-radius: 4px;
  transform: opacity 0.2s;
  box-shadow: 0 1px 2px 1px rgb(0 1 0 / 20%);
}
.help-content > span {
  display: block;
}
.label:hover .help-content{
  pointer-events: unset;
  opacity: 1;
}

@keyframes pulse-red {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
  }
}
</style>
