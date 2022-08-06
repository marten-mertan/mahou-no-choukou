<template>
	<div class="background">
		<LayoutBackgroundCanvas />
		<LayoutBackgroundCity />
		<LayoutBackgroundFilter />
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
  background: linear-gradient(to bottom, $black 0%, #c9c8ff 100%);
}
</style>
