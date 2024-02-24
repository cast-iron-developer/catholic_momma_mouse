import { navigation } from '$lib/utils/navigation.js';

/* Loading in the Navigation for the Footer and the Header*/
export function load() {
	return {
		navigationItems: navigation.map((item) => ({
			title: item.title,
			href: item.href
		}))
	};
}
