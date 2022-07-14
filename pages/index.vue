<template>
	<div class="container">
		<GameLevelSelection
			:items="levelGrid"
		/>
	</div>
</template>

<script>
export default {
	name: 'Index',
	data: () => {
		return {
			levelGrid: [],
		}
	},
	methods: {
		levelGridInit() {
			for (let i=0 ;i<36; i++) {
				this.levelGrid.push({
					index: i+1,
					link: `/level/${i+1}/`,
					complete: false,
					difficult: 3,
				})
			}
		}
	},
	mounted() {
		this.levelGridInit();
	}
};
</script>

<style lang="scss" scoped>

</style>
