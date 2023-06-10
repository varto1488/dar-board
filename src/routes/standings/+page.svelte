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

<div class="container">
	<div class="overflow-x-auto">
	  <table class="table table-lg m-2 text-center w-full">
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
	</div>
</div>

<style>
</style>