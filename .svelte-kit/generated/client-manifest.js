export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\runtime\\components\\layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\__layout-general.svelte"),
	() => import("..\\..\\src\\routes\\guides\\__layout-prueba.svelte"),
	() => import("..\\..\\src\\routes\\about@general.svelte"),
	() => import("..\\..\\src\\routes\\guides\\[id]@prueba.svelte"),
	() => import("..\\..\\src\\routes\\guides\\hello.svelte"),
	() => import("..\\..\\src\\routes\\guides\\index@prueba.svelte"),
	() => import("..\\..\\src\\routes\\index@general.svelte"),
	() => import("..\\..\\src\\routes\\lib\\Title.svelte")
];

export const dictionary = {
	"about@general": [[2, 4], [1]],
	"guides@prueba": [[0, 3, 7], [1]],
	"@general": [[2, 8], [1]],
	"guides/hello": [[0, 6], [1]],
	"lib/Title": [[0, 9], [1]],
	"guides/[id]@prueba": [[0, 3, 5], [1]]
};