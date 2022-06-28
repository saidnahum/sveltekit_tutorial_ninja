<script context="module">
	export async function load({ fetch, params }) {
		//await new Promise(resolve => setTimeout(resolve, 2000));
		const id = params.id

		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		const guide = await res.json();

		//const res = await fetch(`/guides/${id}.json`);
		//const {guide} = await res.json();

		if (res.ok) {
			return {
				props: {
					guide
				}
			};
		}

		return {
			status: 301,
			//error: new Error('Could not fetch the guides')
			redirect: '/guides'
		};
	}
</script>

<script>
	export let guide;
</script>

<div class="border border-dashed p-4">
	<h2 class="text-2xl font-bold mb-3">{guide.title} - ({guide.id})</h2>
	<p>{guide.body}</p>
</div>
