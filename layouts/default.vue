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
  padding-top: $header-h;
  min-height: calc(100vh - $footer-h);

  @include respond-to(mobile) {
    padding-top: $header-h-m;
  }
}
</style>
