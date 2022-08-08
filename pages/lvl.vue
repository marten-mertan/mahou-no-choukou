<template>
	<div class="container">
		<div class="Hello">Hello</div>
		<GameLevelSelection
			key="GameLevelSelection2"
			title="Level selection"
			:items="levelGrid"
			@addMoreItems="addMoreItems"
		/>
	</div>
</template>

<script>
export default {
	name: 'IndexLevel',
	data: () => {
		return {
			GRID_INITIAL_COUNT: 140,
			GRID_ADD_COUNT: 20,
			levelGrid: []
		}
	},
	methods: {
		levelGridInit() {
			for (let i=1 ;i<=this.GRID_INITIAL_COUNT; i++) {
				this.levelGrid.push({
					index: i,
					link: `/level/${i}/`,
					complete: false,
				})
			}
		},
		addMoreItems(name) {
			const len = this.levelGrid.length;
			const lastIndex = this.levelGrid[len-1].index;
			for (let i=lastIndex+1 ;i<=lastIndex+this.GRID_ADD_COUNT; i++) {
				this.levelGrid.push({
					index: i,
					link: `/level/${i}/`,
					complete: false,
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
