<template>
	<div class="path-svg">
		<svg class="path-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
<!--			<rect x="6" y="6" rx="12" ry="12" width="88" height="88" fill="#ffa5a5" stroke="#ffd8d8" stroke-width="12" />-->

			<ellipse cx="50" cy="50" rx="6" ry="6" fill="currentColor"/>

			<g v-if="path[0] === '1'">
				<rect x="44" y="0" width="12" height="50" fill="currentColor"/>
			</g>

			<g v-if="path[1] === '1'">
				<rect x="50" y="44" width="50" height="12" fill="currentColor"/>
			</g>

			<g v-if="path[2] === '1'">
				<rect x="44" y="50" width="12" height="50" fill="currentColor"/>
			</g>

			<g v-if="path[3] === '1'">
				<rect x="0" y="44" width="50" height="12" fill="currentColor"/>
				<ellipse cx="0" cy="50" rx="6" ry="6" fill="currentColor"/>
			</g>

<!--			<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--				<path d="M44 62.2566C44 65.712 45 55 45 55C45 55 34.2879 56 37.7434 56C41.1988 56 44 58.8012 44 62.2566Z" fill="currentColor"/>-->
<!--				<path d="M37.7434 44C34.288 44 45 45 45 45C45 45 44 34.288 44 37.7434C44 41.1988 41.1988 44 37.7434 44Z" fill="currentColor"/>-->
<!--			</svg>-->


			<g v-if="path[0] === '1' && path[1] === '1'">
				<path d="M56 37.7434C56 34.288 55 45 55 45C55 45 65.7121 44 62.2566 44C58.8012 44 56 41.1988 56 37.7434Z" fill="currentColor"/>
			</g>

			<g v-if="path[1] === '1' && path[2] === '1'">
				<path d="M62.2566 56C65.712 56 55 55 55 55C55 55 56 65.712 56 62.2566C56 58.8012 58.8012 56 62.2566 56Z" fill="currentColor"/>
			</g>

			<g v-if="path[2] === '1' && path[3] === '1'">
				<path d="M44 62.2566C44 65.712 45 55 45 55C45 55 34.2879 56 37.7434 56C41.1988 56 44 58.8012 44 62.2566Z" fill="currentColor"/>
			</g>

			<g v-if="path[3] === '1' && path[0] === '1'">
				<path d="M37.7434 44C34.288 44 45 45 45 45C45 45 44 34.288 44 37.7434C44 41.1988 41.1988 44 37.7434 44Z" fill="currentColor"/>
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
