<template>
	<div class="level-selection">
		<div class="level-selection__title">Select a level</div>

		<div class="level-selection-grid">
			<div v-for="(item, index) in items" :key="'level-selection-grid-item-'+index" class="level-selection-grid-item">
				<NuxtLink :to="item.link" class="level-selection-grid-item-link">
					{{item.index}}
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LevelSelection',
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.level-selection {
  max-width: 500px;
  margin: 28px auto;

  &__title {
    font-size: 28px;
    color: $violetDark;
    text-align: center;
  }

  &-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 4px;
    margin-top: 20px;

    &-item {

      &-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        border-radius: 8px;
        color: $white;
        font-size: 20px;
        background-color: #a4508b;
        background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
        opacity: .7;
        transition: all .22s ease;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
