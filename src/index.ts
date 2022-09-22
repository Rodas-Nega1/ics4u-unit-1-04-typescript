/**
 * This program is based on a dice roll game.
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-09-21
 */

import promptSync from "prompt-sync";
import random from "random";

// Th
const prompt = promptSync();
let attempts = 1;
const dice = random.int(1, 6);
// input & process & output
while (true) {
  const numberInput = prompt("Pick a number (1-6): ");
  const player = parseFloat(numberInput);
  if (player > 6 || player < 1) {
    console.log("\nThat is an invalid number.");
  } else if (player === dice) {
    console.log("\nYou guessed right!");
    console.log(`\nIt took you ${attempts} tries.`);
    break;
  } else if (player > dice) {
    console.log("\nYou guessed too high, try again.");
  } else if (player < dice) {
    console.log("\nYou guessed too low, try again");
  } else if (isNaN(player)) {
    console.log("\nThat is an invalid input.");
  }
  attempts += 1;
}
console.log("\nDone.");
