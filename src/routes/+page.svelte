<!-- StandingsForm.svelte -->
<script>
  import { onMount } from 'svelte';
  import { db } from '$lib/firebase';
  import { collection, addDoc } from 'firebase/firestore';

  const standingsRef = collection(db, 'standings');

  let player1 = 'Ante';
  let player2 = 'Luka';
  let matchResult = '';
  let winner = '';

  async function handleSubmit(e) {
    e.preventDefault();
    const newStandingsEntry = {
      player1: player1,
      player2: player2,
      matchResult: matchResult,
		winner: `${winner.toUpperCase()}`
    };
    const response = await addDoc(standingsRef, newStandingsEntry);
	 console.log(response)
    e.target.reset();
  }
</script>


<form on:submit={handleSubmit}>
  <div class="mb-6">
	 <label for="player1" class="block mb-2 text-sm font-medium text-gray-900 text-gray-400">Player 1:</label>
    <input type="text" id="player1" name="player1" disabled="true" bind:value={player1} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Player 1" required />
  </div>
  <div class="mb-6">
    <label for="player2" class="block mb-2 text-sm font-medium text-gray-900 text-gray-400">Player 2:</label>
    <input type="text" id="player2" name="player2" disabled="true" bind:value={player2} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Player 2" required />
  </div>
  <div class="mb-6">
	  <label class="block mb-2 text-sm font-medium text-gray-900 text-gray-400" for="matchWinner">Winner of the match:</label>
     <input class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="example: Player 1" required type="text" id="matchWinner" name="matchWinner" bind:value={winner} />
   </div>	
  <div class="mb-6">
	  <label class="block mb-2 text-sm font-medium text-gray-900 text-gray-400" for="matchResult">Match Result:</label>
     <input class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="example: 2:1" required type="text" id="matchResult" name="matchResult" bind:value={matchResult} />
   </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Match</button>
</form>