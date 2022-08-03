<template>
	<footer class="footer">
		<div class="footer-wrap container">
			created by
			<a class="footer-link"
			   target="_blank"
			   href="https://github.com/marten-mertan">Mertan</a>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  z-index: 10;
  background: $black;

  &-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: $footer-h;
    color: $white;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: .2rem;
  }

  &-link {
    color: $pink;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: .2rem;
    margin-left: .6rem;
  }
}
</style>
