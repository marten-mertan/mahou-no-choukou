<template>
	<div class="level container">
		<GameField
			:field="game.field"
			@changeItemOffset="changeItemOffset"
		/>
	</div>
</template>

<script>
export default {
	name: 'Level',
	data: () => {
		return {
			game: {
				field: {
					width: 400,
					height: 400,
					width_c: 4,
					height_c: 4,
					items: []
				},
				status: 'loading',
			},
		}
	},
	methods: {
		gameInit() {
			for(let i=0; i < this.game.field.height_c; i++) {
				for( let j=0; j < this.game.field.width_c; j++) {
					this.game.field.items.push({
						index: i*this.game.field.height_c + j,
						value: '1000',
						offset: 0,
						y: i,
						x: j,
					})
				}
			}
		},
		checkFieldStatus() {
			for(let i=0; i < this.game.field.height_c; i++) {
				for( let j=0; j < this.game.field.width_c; j++) {
					const currentOffset = this.game.field.items[i*this.game.field.height_c + j].offset;
					const valueRight = this.game.field.items[i*this.game.field.height_c + j].value[(5 - currentOffset%4)%4];
					const valueBottom = this.game.field.items[i*this.game.field.height_c + j].value[(6 - currentOffset%4)%4];
					const valueTop = this.game.field.items[i*this.game.field.height_c + j].value[(4 - currentOffset%4)%4];
					const valueLeft = this.game.field.items[i*this.game.field.height_c + j].value[(7 - currentOffset%4)%4];
					const neighbourRight = (j !== this.game.field.width_c - 1) ? this.game.field.items[i*this.game.field.height_c + j + 1] : null;
					const neighbourRightOffset = neighbourRight ? neighbourRight.offset: null;
					const neighbourRightValue = neighbourRight ? neighbourRight.value[(7 - neighbourRightOffset%4)%4] : null;
					const neighbourBottom = (i !== this.game.field.height_c - 1) ? this.game.field.items[(i+1)*this.game.field.height_c + j]: null;
					const neighbourBottomOffset = neighbourBottom ? neighbourBottom.offset : null;
					const neighbourBottomValue = neighbourBottom ? neighbourBottom.value[(4 - neighbourBottomOffset%4)%4] : null;
					console.log(valueRight, neighbourRightValue, valueBottom, neighbourBottomValue)
					if ((j === 0 && valueLeft !== '0') ||
						(j === this.game.field.width_c - 1 && valueRight !== '0') ||
						(i === 0 && valueTop !== '0') ||
						(i === this.game.field.height_c - 1 && valueBottom !== '0') ||
						neighbourRight && valueRight !== neighbourRightValue ||
						neighbourBottom && valueBottom !== neighbourBottomValue) {
						return false;
					}
				}
			}
			return true;
		},
		changeItemOffset(index, delta) {
			this.game.field.items[index].offset+=delta;

			console.log(this.checkFieldStatus());
		},
	},
	mounted() {
		this.gameInit();
	}
};
</script>

<style lang="scss" scoped>
.level {

}
</style>
