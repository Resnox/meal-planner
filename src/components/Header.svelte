<script lang="ts">
	import { page } from '$app/state';
	import { SignIn, SignOut } from '@auth/sveltekit/components';
	import NavigationMenu from '$components/NavigationMenu.svelte';
</script>

<header>
	<div class="flex items-center gap-2">
		<img
			alt="User avatar"
			src={page.data?.session?.user?.image ??
				`https://api.dicebear.com/9.x/thumbs/svg?seed=${Math.floor(Math.random() * 100000) + 1}&randomizeIds=true`}
			class="h-12 w-12 rounded-full border-2"
		/>
		{#if page.data.session}
			<span class="signedInText">
				{page.data.session.user?.name}
			</span>
			<SignOut className="ml-auto">
				<div slot="submitButton" class="buttonPrimary">Sign out</div>
			</SignOut>
		{:else}
			<span class="notSignedInText">You are not signed in</span>
			<SignIn className="ml-auto">
				<div slot="submitButton" class="buttonPrimary">Sign in</div>
			</SignIn>
		{/if}
	</div>
	<NavigationMenu/>
</header>
