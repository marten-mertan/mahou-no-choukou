<template>
	<div
		:class="['field', {'complete': status === 'complete'}]"
	>
		<div
			class="field-inner"
			:style="{width: field.width+'px', height: field.height+'px'}"

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
  margin: 20px auto;
  padding: 20px;
  overflow: hidden;

  &.complete {
    &:after {
      transform: translateY(100%);
    }

	.field-item {
      cursor: default;

	  &-inner {
        animation: fieldComplete .8s .3s;
	  }
	}
  }

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
	background: url('/static/img/light.png') 50% 50% no-repeat;
	background-size: cover;
    transform: translateY(-100%);
	transition: all .8s ease-out .3s;
  }

  &-inner {
    position: relative;
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
}
</style>
