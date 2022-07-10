<template>
	<div>
		<LayoutHeader/>

		<main class="main">
			<slot />
		</main>

		<LayoutFooter/>
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

  @media screen and (max-width: 767px) {
    padding-top: $header-h-m;
  }
}
</style>
