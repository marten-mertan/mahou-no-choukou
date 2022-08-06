<template>
	<div class="level-selection">
		<div class="level-selection__title">{{title}}</div>

		<div class="level-selection-grid">
			<div v-for="(item, index) in items" :key="'level-selection-grid-item-'+index" class="level-selection-grid-item">
				<NuxtLink :to="item.link" class="level-selection-grid-item-link">
					{{item.index}}
				</NuxtLink>
			</div>
			<div class="level-selection-grid-item">
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
		items: {
			type: Array,
			required: true,
		},
	},
	methods: {
		addMoreItems() {
			this.$emit('addMoreItems');
		}
	}
};
</script>

<style lang="scss" scoped>
.level-selection {
  margin: 0 auto 5rem;
  padding: 2.8rem 0 0;
  backdrop-filter: blur(.5rem);
  -webkit-backdrop-filter: blur(.5rem);

  &__title {
    font-size: 2.8rem;
    color: $white;
	text-transform: uppercase;
  }

  &-grid {
    display: grid;
	grid-template-columns: repeat(20, 1fr);
	grid-gap: .4rem;
	flex-wrap: wrap;
    margin-top: 2rem;

    &-item {
      &-link {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 6rem;
        color: $white;
        font-size: 2rem;
        background: rgba($white, 0.2);
        border-radius: .8rem;
        box-shadow: 0 .4rem 3rem rgba($black, 0.1);
        border: .1rem solid rgba($white, 0.3);
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
        height: 6rem;
        color: $white;
        font-size: 2.4rem;
        background: rgba($white, 0.1);
        border-radius: .8rem;
        box-shadow: 0 .4rem 3rem rgba($black, 0.1);
        border: .1rem solid rgba($white, 0.4);
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
