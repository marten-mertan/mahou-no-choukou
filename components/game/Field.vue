<template>
	<div
		:class="['field', {'complete': status === 'complete'}]"
	>
		<div
			class="field-inner"
			:style="{width: field.width+'rem', height: field.height+'rem'}"

		>
			<div
				v-for="(item, index) in field.items"
				:key="'field-item-'+index"
				v-show="item.value !== '0000'"
				class="field-item"
				:style="{
				top: 100 / field.height_c * item.y + '%',
				left: 100 / field.width_c * item.x + '%',
				width: 100 / field.width_c + '%',
				height: 100 / field.height_c + '%',
				transform: `rotate(${90*item.offset}deg)`
			}"
				@click="changeItemOffset(item.index, 1)"
			>
				<div class="field-item-inner">
					<GamePathSvg
						:path="item.value"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Field',
	props: {
		field: {
			type: Object,
			required: true,
		},
		status: {
			type: String,
			default: 'loading',
		},
	},
	methods: {
		changeItemOffset(itemIndex, delta) {
			this.$emit('changeItemOffset', itemIndex, delta);
		},
	},
};
</script>

<style lang="scss" scoped>
.field {
  position: relative;
  display: flex;
  width: max-content;
  margin: 2rem 0;
  padding: 2rem;
  overflow: hidden;

  &.complete {
	.field-inner {
      animation: fieldOverflow 1s .3s infinite;

      &:after {
        transform: translateY(calc(100% + 2rem));
      }
	}

	.field-item {
      cursor: default;

	  &-inner {
        animation: fieldComplete .8s .3s;
	  }
	}
  }

  &-inner {
    position: relative;
    backdrop-filter: blur(.5rem);
    -webkit-backdrop-filter: blur(.5rem);

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: url('/img/light.png') 50% 50% no-repeat;
      background-size: cover;
      transform: translateY(calc(-100% - 2rem));
      transition: all .8s ease-out .4s;
    }
  }

  &-item {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
    cursor: pointer;
    user-select: none;
    transition: all .22s ease;
    background: rgba($white, 0.2);
    border-radius: .8rem;
    box-shadow: 0 .4rem 3rem rgba($black, 0.1);

    &-inner {
	  position: relative;
	  width: 100%;
	  height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: scale(1);
      transition: all .22s ease;
    }
  }

  @keyframes fieldComplete {
    0% {
      transform: scale(1);
    }

	50% {
      transform: scale(.9);
	}

    75% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes fieldOverflow {
    0%, 100% {
      overflow: hidden;
    }
  }
}
</style>
