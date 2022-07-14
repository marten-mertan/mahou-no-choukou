<template>
	<div class="path-svg">
		<svg class="path-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
			<ellipse cx="50" cy="50" rx="8" ry="8" fill="currentColor"/>
			<rect v-if="path[0] === '1'" x="42" y="0" width="16" height="50" fill="currentColor"/>
			<rect v-if="path[1] === '1'" x="50" y="42" width="50" height="16" fill="currentColor"/>
			<rect v-if="path[2] === '1'" x="42" y="50" width="16" height="50" fill="currentColor"/>
			<rect v-if="path[3] === '1'" x="0" y="42" width="50" height="16" fill="currentColor"/>
		</svg>
	</div>
</template>

<script>
export default {
	name: 'PathSvg',
	props: {
		path: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.path-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &-icon {
    color: white;
  }
}
</style>
