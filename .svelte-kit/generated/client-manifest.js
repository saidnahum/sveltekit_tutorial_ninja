export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\src\\routes\\guides\\hello.svelte"),
	() => import("..\\..\\src\\routes\\guides\\index.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\lib\\Title.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"about": [[0, 2], [1]],
	"guides": [[0, 4], [1]],
	"guides/hello": [[0, 3], [1]],
	"lib/Title": [[0, 6], [1]]
};