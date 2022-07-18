<template>
	<div class="field">
		<div
			class="field-inner"
			:style="{width: field.width+'px', height: field.height+'px'}"

		>
			<div
				v-for="(item, index) in field.items"
				:key="'field-item-'+index"
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
				{{item}}
				<GamePathSvg
					:path="item.value"
				/>
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
  user-select: none;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #a4508b;
    background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
    border-radius: 20px;
    opacity: .84;
    pointer-events: none;
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
    font-size: 10px;
    padding: 12px;
    border-radius: 25%;
    cursor: pointer;
    user-select: none;
    transition: all .22s ease;
  }

}
</style>
