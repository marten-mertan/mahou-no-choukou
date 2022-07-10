<template>
	<header class="header">
		<div class="header-wrap">
			<div class="header__title">
				MAHOU NO CHOUKOU
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
  width: 100%;
  background-color: rgba(white, .92);

  &-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $header-h;

    @media screen and (max-width: 767px) {
      height: $header-h-m;
    }
  }

  &__title {
    font-size: 30px;
    line-height: 30px;
    font-weight: 300;
    letter-spacing: 3px;
    padding: 17px 20px;
    color: $violet;

    @media screen and (max-width: 767px) {
      font-size: 20px;
      line-height: 20px;
      padding: 6px 12px;
    }
  }
}
</style>
