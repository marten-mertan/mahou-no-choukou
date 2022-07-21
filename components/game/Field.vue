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
    border-radius: 20%;
    cursor: pointer;
    user-select: none;
	border: 1px solid $purple;
    transition: all .22s ease;
  }

}
</style>
