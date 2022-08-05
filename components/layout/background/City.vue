<template>
	<div class="city"></div>
</template>

<script>
export default {
	name: 'City',
};
</script>

<style lang="scss" scoped>
.city {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 30rem;
  width: 100%;
  background: url('/img/city.png') center bottom repeat-x;
  background-size: contain;
}
</style>
