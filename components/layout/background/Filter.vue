<template>
	<div class="filter"></div>
</template>

<script>
export default {
	name: 'Filter',
};
</script>

<style lang="scss" scoped>
.filter {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fe5757;
  animation: colorChange 30s ease-in-out infinite;
  animation-fill-mode: both;
  mix-blend-mode: overlay;
}

@keyframes colorChange {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: .6;
  }
}
</style>
