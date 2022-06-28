<script context="module">
   export async function load({fetch}){
      
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const guides = await res.json();

      // With api endpoints
      //const res = await fetch('/guides.json');
      //const {guides} = await res.json();
      
      if(res.ok){
         return {
            props: {
               guides
            }
         }
      }

      return {
         status: res.status,
         error: new Error('Could not fetch the guides')
      }
   }
</script>

<script>
   export let guides;
</script>

<div>
   <ul class="flex flex-col space-y-8 justify-center items-center">
      {#each guides as guide (guide.id)}
         <li>
            <a sveltekit:prefetch class="p-2 border border-dashed" href={`/guides/${guide.id}`}>
               <span class="border-b-2">{guide.title}</span>
            </a>
         </li>
      {/each}
   </ul>
   <p class="text-lg text-center mt-10"><a class="border-b-2" href="/">Home</a></p>
</div>