# Bel'veth Ult Passive

### Instructions

Open index.html in your browser </br>

Bel'veth, currently, is a new League of Legends champion with an <i>interesting</i> passive on her ultimate. Every 2 `hits`, Bel'veth does a burst of true damage to her target. However, each burst increases the damage of the next burst by the amount that was just dealt, stacking infinitely. The `baseDmg` is also increased by 0.12% for each point in `bonusAD` (12% per 100 `bonusAD`). </br>

Create a function that accepts `baseDmg`, `hits`, and `bonusAD` as parameters and returns the total damage her passive would do, based on the amount of `hits`. The return value should be rounded with a single decimal point (If it has one).

### Tips

- `bonusAD` isn't required and the function should work without it. </br>

- The [toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) method of a number allows you to round to a decimal point of your choosing. Beware, it converts a number into a string.
