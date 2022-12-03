// Closure Challenge

// Declare Variables
const character = play(100);

// Main Program
console.log(character.attacked(20));
console.log(character.healed(10));
console.log(character.attacked(20));
console.log(character.healed(120));
console.log(character.attacked(200));

// Function Definitions
function play(startingHealth){
  return returnObj = {
    attacked: function(damageTaken){
      startingHealth -= damageTaken;
        if (startingHealth <= 0){
          return "Game Over";
        }
        else{
          return "Your health is: " + startingHealth;
        }
    },
    healed: function(healingTaken){
      return "Your health is: " + (startingHealth += healingTaken);
    }
  };
}
