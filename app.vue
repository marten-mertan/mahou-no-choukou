<template>
	<div>
		<NuxtLayout>
			<NuxtLoading />
			<NuxtPage :pageKey="$route.fullPath"/>
		</NuxtLayout>
	</div>
</template>
