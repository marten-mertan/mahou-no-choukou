<template>
	<div class="container">
		<GameLevelSelection
			title="Easy"
			name="easy"
			:items="levelGrid.easy"
			:itemsMax="GRID_MAX_ITEMS"
			@addMoreItems="addMoreItems"
		/>
		<GameLevelSelection
			title="Normal"
			name="normal"
			:items="levelGrid.normal"
			:itemsMax="GRID_MAX_ITEMS"
			@addMoreItems="addMoreItems"
		/>
		<GameLevelSelection
			title="Hard"
			name="hard"
			:items="levelGrid.hard"
			:itemsMax="GRID_MAX_ITEMS"
			@addMoreItems="addMoreItems"
		/>
	</div>
</template>

<script>
export default {
	name: 'Index',
	data: () => {
		return {
			GRID_MAX_ITEMS: 200,
			GRID_INITIAL_COUNT: 28,
			GRID_ADD_COUNT: 14,
			levelGrid: {
				easy: [],
				normal: [],
				hard: [],
			},
		}
	},
	methods: {
		levelGridInit() {
			for (let i=1 ;i<=this.GRID_INITIAL_COUNT; i++) {
				this.levelGrid.easy.push({
					index: i,
					link: `/level/${i}/`,
					complete: false,
				})
				this.levelGrid.normal.push({
					index: i+this.GRID_MAX_ITEMS,
					link: `/level/${i+this.GRID_MAX_ITEMS}/`,
					complete: false,
				})
				this.levelGrid.hard.push({
					index: i+this.GRID_MAX_ITEMS*2,
					link: `/level/${i+this.GRID_MAX_ITEMS*2}/`,
					complete: false,
				})
			}
		},
		addMoreItems(name) {
			if (this.levelGrid[name] === undefined) {
				return
			}
			const len = this.levelGrid[name].length;
			const itemCount = (len + this.GRID_ADD_COUNT) > this.GRID_MAX_ITEMS ? this.GRID_MAX_ITEMS - len : this.GRID_ADD_COUNT;
			const lastIndex = this.levelGrid[name][len-1].index;
			for (let i=lastIndex+1 ;i<=lastIndex+itemCount; i++) {
				this.levelGrid[name].push({
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
