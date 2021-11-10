import { writable } from 'svelte/store';

export const searchStore = writable({
	name: 'Lucie Drimlová',
	title: 'učitelka',
	icon: '/icons/academic-cap.blue.svg'
});
