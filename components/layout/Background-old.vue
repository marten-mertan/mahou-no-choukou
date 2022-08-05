<template>
	<div :class="['background', {'animate': animate}]">
		<div class="background-left">
			<svg class="background-left-circle-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
				<ellipse class="circle-3" cx="50" cy="50" rx="45" ry="45" fill="currentColor"/>
				<ellipse class="circle-4" cx="50" cy="50" rx="40" ry="40" fill="currentColor"/>
				<ellipse class="circle-3" cx="50" cy="50" rx="30" ry="30" fill="currentColor"/>
				<ellipse class="circle-2" cx="50" cy="50" rx="25" ry="25" fill="currentColor"/>
				<ellipse class="circle-2" cx="50" cy="50" rx="20" ry="20" fill="white"/>
			</svg>
			<svg class="background-left-circle-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
				<ellipse class="circle-1" cx="50" cy="50" rx="45" ry="45" fill="currentColor"/>
				<ellipse class="circle-2" cx="50" cy="50" rx="40" ry="40" fill="currentColor"/>
				<ellipse class="circle-3" cx="50" cy="50" rx="35" ry="35" fill="currentColor"/>
				<ellipse class="circle-4" cx="50" cy="50" rx="30" ry="30" fill="currentColor"/>
			</svg>
		</div>
		<div class="background-right">
			<svg class="background-right-circle-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
				<ellipse class="circle-1" cx="50" cy="50" rx="45" ry="45" fill="currentColor"/>
				<ellipse class="circle-3" cx="50" cy="50" rx="40" ry="40" fill="currentColor"/>
				<ellipse class="circle-2" cx="50" cy="50" rx="30" ry="30" fill="currentColor"/>
				<ellipse class="circle-1" cx="50" cy="50" rx="25" ry="25" fill="currentColor"/>
				<ellipse class="circle-1" cx="50" cy="50" rx="20" ry="20" fill="white"/>
			</svg>
			<svg class="background-right-circle-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
				<ellipse class="circle-2" cx="50" cy="50" rx="45" ry="45" fill="currentColor"/>
				<ellipse class="circle-3" cx="50" cy="50" rx="40" ry="40" fill="currentColor"/>
				<ellipse class="circle-2" cx="50" cy="50" rx="30" ry="30" fill="currentColor"/>
			</svg>

		</div>
	</div>
</template>

<script>
export default {
	name: 'Background',
	props: {
		animate: {
			type: Boolean,
			required: true,
		}
	}
};
</script>

<style lang="scss" scoped>
.background {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @include respond-to(background) {
    display: none;
  }

  &-left {
	position: absolute;
	width: calc(50% - $container-w / 2);
	top: 0;
	left: 0;
	bottom: 0;

    &-circle-1 {
      position: absolute;
	  top: 10%;
	  left: -150%;
	  width: 200%;
	  transform: scale(-1, 1);
    }

    &-circle-2 {
      position: absolute;
      top: 50%;
      left: -40%;
      width: 120%;
      transform: scale(-1, 1);
    }
  }

  &-right {
    position: absolute;
    width: calc(50% - $container-w / 2);
    top: 0;
    right: 0;
    bottom: 0;

    &-circle-1 {
      position: absolute;
      top: 5%;
      right: -120%;
      width: 160%;
    }

    &-circle-2 {
      position: absolute;
      top: 50%;
      right: -110%;
      width: 220%;
    }

  }

  .circle-1 {
    stroke: $purple;
    stroke-dasharray: 5 20 10 40 30 15 20 10;
    stroke-width: 5.1;
    color: $purple;
    animation: circleRotation 8s .3s infinite ease;
  }

  .circle-2 {
    stroke: $pink;
    stroke-dasharray: 5 30 10 15 11 30 6 15;
    stroke-width: 5.1;
    color: $pink;
    animation: circleRotation 11s .6s infinite linear;
  }

  .circle-3 {
    stroke: $pinkLight;
    stroke-dasharray: 5 30 10 15 11 30 6 15;
    stroke-width: 5.1;
    color: $pinkLight;
    animation: circleRotation 10s .4s infinite linear;
  }

  .circle-4 {
    stroke: $pinkLight;
    stroke-dasharray: 5 30 10 15 11 30 6 15;
    stroke-width: 5.1;
    color: $white;
    animation: circleRotation 16s .6s infinite linear;
  }

  @keyframes circleRotation {
    0% {
      stroke-dashoffset: 0;
    }

    5% {
      stroke-dashoffset: 20;
    }

    20% {
      stroke-dashoffset: -60;
    }

    50% {
      stroke-dashoffset: 80;
    }

    55% {
      stroke-dashoffset: 100;
    }

    80% {
      stroke-dashoffset: 25;
    }

    100% {
      stroke-dashoffset: 0;
    }
  }
}
</style>
