<script>
	import { onMount } from 'svelte';
	import { collection, getDocs } from 'firebase/firestore';
import { db } from '$lib/firebase';

export async function getStandings() {
  const standingsRef = collection(db, 'standings');
  const snapshot = await getDocs(standingsRef);
  const standings = snapshot.docs.map(doc => {
    return { id: doc.id, ...doc.data() };
  });
  return standings;
}

	  let standings = [];

  onMount(async () => {
    standings = await getStandings();
  });
</script>

<div class="container mx-auto my-6">
	<div class="overflow-x-auto">
	  <table class="table table-lg text-center w-full">
	    <!-- head -->
	    <thead>
	      <tr>
	        <th>Match</th>
	        <th>Result</th>
			  <th>Winner 🏆</th>
	      </tr>
	    </thead>
	    <tbody class="text-center">
			{#each standings as standing}
				<tr>
				  <th>{standing.player1} vs {standing.player2}</th>
				  <th>{standing.matchResult}</th>
				  <th class="text-green-600">{standing.winner}</th>
				</tr>
			{:else}
				<tr>
				  <th colspan="3">No matches yet!</th>
				</tr>
		   {/each}
	    </tbody>
	  </table>

	  {#if standings.length}
		  <div class="container text-center w-full mt-5 bg-gray-600 text-white p-2 rounded-full">
			 <h3 class="font-bold">Summary</h3>
		    <p>Ante total match wins: {standings.filter(item => item.winner == "ANTE").length}</p>
		    <p>Luka total match wins: {standings.filter(item => item.winner == "LUKA").length}</p>			  
		  </div>
	  {/if}
	</div>
</div>

<style>
</style>