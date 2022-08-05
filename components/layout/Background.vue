<template>
	<div class="background">
		<LayoutBackgroundCanvas />
		<LayoutBackgroundCity />
	</div>
</template>

<script>
export default {
	name: 'Background',
};
</script>

<style lang="scss" scoped>
.background {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $black;
}
</style>
