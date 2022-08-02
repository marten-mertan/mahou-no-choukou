<template>
	<div class="path-svg">
		<svg class="path-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
			<rect x="6" y="6" rx="12" ry="12" width="88" height="88" fill="#ffa5a5" stroke="#ffd8d8" stroke-width="12" />

			<ellipse cx="50" cy="50" rx="6" ry="6" fill="currentColor"/>

			<g v-if="path[0] === '1'">
				<rect x="44" y="12" width="12" height="38" fill="currentColor"/>
				<ellipse cx="50" cy="0" rx="6" ry="6" fill="currentColor"/>
			</g>

			<g v-if="path[1] === '1'">
				<rect x="50" y="44" width="38" height="12" fill="currentColor"/>
				<ellipse cx="100" cy="50" rx="6" ry="6" fill="currentColor"/>
			</g>

			<g v-if="path[2] === '1'">
				<rect x="44" y="50" width="12" height="38" fill="currentColor"/>
				<ellipse cx="50" cy="100" rx="6" ry="6" fill="currentColor"/>
			</g>

			<g v-if="path[3] === '1'">
				<rect x="12" y="44" width="38" height="12" fill="currentColor"/>
				<ellipse cx="0" cy="50" rx="6" ry="6" fill="currentColor"/>
			</g>
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
    color: $white;
  }
}
</style>
