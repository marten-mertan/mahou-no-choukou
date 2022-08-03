<template>
	<div class="level-selection">
		<div class="level-selection__title">{{title}}</div>

		<div class="level-selection-grid">
			<div v-for="(item, index) in items" :key="'level-selection-grid-item-'+index" class="level-selection-grid-item">
				<NuxtLink :to="item.link" class="level-selection-grid-item-link">
					{{item.index}}
				</NuxtLink>
			</div>
			<div v-if="items.length < itemsMax" class="level-selection-grid-item">
				<div
					class="level-selection-grid-item-more"
					@click="addMoreItems"
				>
					+
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LevelSelection',
	props: {
		title: {
			type: String,
			default: 'TITLE',
		},
		name: {
			type: String,
			required: true,
		},
		items: {
			type: Array,
			required: true,
		},
		itemsMax: {
			type: Number,
			required: true,
		},
	},
	methods: {
		addMoreItems() {
			this.$emit('addMoreItems', this.name);
		}
	}
};
</script>

<style lang="scss" scoped>
.level-selection {
  margin: 2.8rem auto;

  &__title {
    font-size: 2.8rem;
    color: $purple;
	text-transform: uppercase;
  }

  &-grid {
    display: flex;
	flex-wrap: wrap;
    margin-top: 2rem;

    &-item {
	  margin-right: .8rem;
      margin-bottom: .8rem;

      &-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8rem;
        height: 8rem;
        border-radius: .8rem;
        color: $grayDark;
        font-size: 2rem;
		border: .2rem solid $grayDark;
        opacity: .7;
        transition: all .22s ease-out;

        &:hover {
          opacity: 1;
		  transform: scale(1.1);
        }
      }

      &-more {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8rem;
        height: 8rem;
        border-radius: .8rem;
        color: $grayDark;
        font-size: 2rem;
        border: .2rem solid $grayDark;
        opacity: .7;
		cursor: pointer;
        transition: all .22s ease-out;

        &:hover {
          opacity: 1;
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
