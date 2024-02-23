import { navigation } from '$lib/utils/navigation.js';

export function load() {
	return {
		navigationItems: navigation.map((item) => ({
			title: item.title,
			href: item.href
		}))
	};
}
