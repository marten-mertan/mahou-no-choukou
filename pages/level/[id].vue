<template :key="2">
	<div class="level container">
		<div class="level-arrow complete">
			<NuxtLink class="level-arrow__back" to="/" >
				<div class="level-arrow__label">level selection</div>
			</NuxtLink>
		</div>
		<GameField
			key="GameField"
			:field="game.field"
			:status="game.status"
			@changeItemOffset="changeItemOffset"
		/>
		<div :class="['level-arrow', {'complete': game.status === 'complete'}]">
			<NuxtLink class="level-arrow__next" :to="`/level/${Number($route.params.id) + 1}/`" >
				<div class="level-arrow__label">{{ `level ${Number($route.params.id) + 1}` }}</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	key: route => route.fullPath,
})
</script>

<script>
export default {
	name: 'Level',
	data: () => {
		return {
			game: {
				field: {
					width: 48, //in rem
					height: 48, //in rem
					width_c: 4,
					height_c: 4,
					items: [],
				},
				status: 'loading',
			},
		};
	},
	computed: {},
	methods: {
		gameInit() {
			if (this.$route.params.id > 200 && this.$route.params.id <= 400) {
				this.game.field.width_c = 5;
				this.game.field.height_c = 5;
			}
			if (this.$route.params.id > 400) {
				this.game.field.width_c = 6;
				this.game.field.height_c = 6;
			}

			let hash = this.getHash(this.$route.params.id).toString(2);
			for (let i = 0; i < this.game.field.height_c; i++) {
				for (let j = 0; j < this.game.field.width_c; j++) {
					let value = '';
					value += (i === 0) ? '0' : this.game.field.items[(i-1) * this.game.field.height_c + j].value[2] || '0';
					value += (j === this.game.field.width_c-1) ? '0' : (hash = hash.slice(0, -1)).substring(hash.length-1) || '0';
					value += (i === this.game.field.height_c-1) ? '0' : (hash = hash.slice(0, -1)).substring(hash.length-1) || '0';
					value += (j === 0) ? '0' : this.game.field.items[i * this.game.field.height_c + j-1].value[1] || '0';
					this.game.field.items.push({
						index: i * this.game.field.height_c + j,
						value: value,
						offset: Math.round(Math.random()*3+1),
						y: i,
						x: j,
					});
				}
			}

			// перемешиваем тайлы, если поле уже решено (если после повторного перемешивания поле решено снова, то такова судьба)
			if (this.checkFieldStatus()) {
				this.fieldRefresh();
			}

			this.game.status = 'playing';

			if (this.checkFieldStatus()) {
				this.game.status = 'complete';
			}
		},
		getHash(str, seed = 1) {
			let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
			for (let i = 0, ch; i < str.length; i++) {
				ch = str.charCodeAt(i);
				h1 = Math.imul(h1 ^ ch, 2654435761);
				h2 = Math.imul(h2 ^ ch, 1597334677);
			}
			h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
			h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
			return 4294967296 * (2097151 & h2) + (h1 >>> 0);
		},
		checkFieldStatus() {
			for (let i = 0; i < this.game.field.height_c; i++) {
				for (let j = 0; j < this.game.field.width_c; j++) {
					const currentOffset = this.game.field.items[i * this.game.field.height_c + j].offset;
					const valueRight = this.game.field.items[i * this.game.field.height_c + j].value[(5 - currentOffset % 4) % 4];
					const valueBottom = this.game.field.items[i * this.game.field.height_c + j].value[(6 - currentOffset % 4) % 4];
					const valueTop = this.game.field.items[i * this.game.field.height_c + j].value[(4 - currentOffset % 4) % 4];
					const valueLeft = this.game.field.items[i * this.game.field.height_c + j].value[(7 - currentOffset % 4) % 4];
					const neighbourRight = (j !== this.game.field.width_c - 1) ? this.game.field.items[i * this.game.field.height_c + j + 1] : null;
					const neighbourRightOffset = neighbourRight ? neighbourRight.offset : null;
					const neighbourRightValue = neighbourRight ? neighbourRight.value[(7 - neighbourRightOffset % 4) % 4] : null;
					const neighbourBottom = (i !== this.game.field.height_c - 1) ? this.game.field.items[(i + 1) * this.game.field.height_c + j] : null;
					const neighbourBottomOffset = neighbourBottom ? neighbourBottom.offset : null;
					const neighbourBottomValue = neighbourBottom ? neighbourBottom.value[(4 - neighbourBottomOffset % 4) % 4] : null;
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
		fieldRefresh() {
			for (let i = 0; i < this.game.field.height_c; i++) {
				for (let j = 0; j < this.game.field.width_c; j++) {
					this.game.field.items[i * this.game.field.height_c + j].offset = Math.round(Math.random()*3+1);
				}
			}
		},
		changeItemOffset(index, delta) {
			if (this.game.status !== 'playing') {
				return;
			}

			this.game.field.items[index].offset += delta;

			if (this.checkFieldStatus()) {
				this.game.status = 'complete';
				console.log(this.game.status);
			}
		},
	},
	mounted() {
		this.gameInit();
	},

};
</script>

<style lang="scss" scoped>
.level {
  display: flex;
  align-items: center;
  justify-content: center;

  &-arrow {
	position: relative;
    display: flex;
    justify-content: center;
	opacity: 0;
	visibility: hidden;
    transform: translateY(1.2rem);
    transition: all .3s ease-out 1.2s;

	&.complete {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
	}

	&__next {
      position: relative;
      display: flex;
      align-items: center;
      height: 5rem;
      padding-right: 5rem;
      border-radius: 50%;
      border: .1rem solid transparent;
      transform: scale(1, 1);
      transition: all .4s ease;

      &:hover {
        transform: scale(1.1, 1.1);

        &:after {
          animation: arrowNext1 .6s infinite ease;
        }

        &:before {
          animation: arrowNext2 .6s infinite ease;
        }
      }

      &:after {
        opacity: 1;
        content: '';
        position: absolute;
        top: .9rem;
        right: 1.1rem;
        width: 0;
        height: 0;
        border-top: 1.6rem solid transparent;
        border-bottom: 1.6rem solid transparent;
        border-left: 2rem solid $white;
        transition: all .22s ease;
      }

      &:before {
        opacity: 0;
        content: '';
        position: absolute;
        top: .9rem;
        right: 4.1rem;
        width: 0;
        height: 0;
        border-top: 1.6rem solid transparent;
        border-bottom: 1.6rem solid transparent;
        border-left: 2rem solid $white;
        transition: all .22s ease;
      }
	}

    &__back {
      position: relative;
	  display: flex;
	  align-items: center;
      height: 5rem;
	  padding-left: 5rem;
      border-radius: 50%;
      border: .1rem solid transparent;
      transform: scale(1, 1);
      transition: all .4s ease;

      &:hover {
        transform: scale(1.1, 1.1);

        &:after {
          animation: arrowBack1 .6s infinite ease;
        }

        &:before {
          animation: arrowBack2 .6s infinite ease;
        }
      }

      &:after {
        opacity: 1;
        content: '';
        position: absolute;
        top: .9rem;
        left: 1.1rem;
        width: 0;
        height: 0;
        border-top: 1.6rem solid transparent;
        border-bottom: 1.6rem solid transparent;
        border-right: 2rem solid $white;
        transition: all .22s ease;
      }

      &:before {
        opacity: 0;
        content: '';
        position: absolute;
        top: .9rem;
        left: 4.1rem;
        width: 0;
        height: 0;
        border-top: 1.6rem solid transparent;
        border-bottom: 1.6rem solid transparent;
        border-right: 2rem solid $white;
        transition: all .22s ease;
      }
    }

	&__label {
      width: max-content;
      color: white;
      font-size: 1.4rem;
      font-weight: bold;
	  line-height: 2rem;
	}
  }

  @keyframes arrowBack1 {
    0% {
      transform: translateX(0) scale(1, 1);
      opacity: 1;
    }

    100% {
      transform: translateX(-3rem) scale(1.4, 1.4);
	  opacity: 0;
    }
  }

  @keyframes arrowBack2 {
    0% {
      transform: translateX(0) scale(.6, .6);
      opacity: 0;
    }

    100% {
      transform: translateX(-3rem) scale(1, 1);
      opacity: 1;
    }
  }

  @keyframes arrowNext1 {
    0% {
      transform: translateX(0) scale(1, 1);
      opacity: 1;
    }

    100% {
      transform: translateX(3rem) scale(1.4, 1.4);
      opacity: 0;
    }
  }

  @keyframes arrowNext2 {
    0% {
      transform: translateX(0) scale(.6, .6);
      opacity: 0;
    }

    100% {
      transform: translateX(3rem) scale(1, 1);
      opacity: 1;
    }
  }
}
</style>
