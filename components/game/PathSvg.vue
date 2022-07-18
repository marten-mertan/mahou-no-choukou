<template>
	<div class="path-svg">
		<svg class="path-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
			<ellipse cx="50" cy="50" rx="3" ry="3" fill="currentColor"/>

			<g v-if="path[0] === '1'">
				<rect x="47" y="0" width="6" height="50" fill="currentColor"/>
				<rect x="32" y="0" width="6" height="14" fill="currentColor"/>
				<rect x="62" y="0" width="6" height="14" fill="currentColor"/>
				<rect x="32" y="8" width="36" height="6" fill="currentColor"/>
				<rect x="32" y="20" width="36" height="6" fill="currentColor"/>
			</g>

			<g v-if="path[1] === '1'">
				<rect x="50" y="47" width="50" height="6" fill="currentColor"/>
				<rect x="86" y="62" width="14" height="6" fill="currentColor"/>
				<rect x="86" y="32" width="14" height="6" fill="currentColor"/>
				<rect x="86" y="32" width="6" height="36" fill="currentColor"/>
				<rect x="74" y="32" width="6" height="36" fill="currentColor"/>
			</g>

			<g v-if="path[2] === '1'">
				<rect x="47" y="50" width="6" height="50" fill="currentColor"/>
				<rect x="32" y="86" width="6" height="14" fill="currentColor"/>
				<rect x="62" y="86" width="6" height="14" fill="currentColor"/>
				<rect x="32" y="86" width="36" height="6" fill="currentColor"/>
				<rect x="32" y="74" width="36" height="6" fill="currentColor"/>
			</g>

			<g v-if="path[3] === '1'">
				<rect x="0" y="47" width="50" height="6" fill="currentColor"/>
				<rect x="0" y="62" width="14" height="6" fill="currentColor"/>
				<rect x="0" y="32" width="14" height="6" fill="currentColor"/>
				<rect x="8" y="32" width="6" height="36" fill="currentColor"/>
				<rect x="20" y="32" width="6" height="36" fill="currentColor"/>
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
    color: $black;
  }
}
</style>
