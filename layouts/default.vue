<template>
	<div>
		<LayoutHeader />

		<main class="main">
			<slot />
		</main>

		<LayoutBackground
			:animate="true"
		/>

		<LayoutFooter />
	</div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: $header-h;
  min-height: calc(100vh - $footer-h);

  @include respond-to(mobile) {
    padding-top: $header-h-m;
  }
}
</style>
