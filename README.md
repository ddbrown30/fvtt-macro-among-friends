![](https://img.shields.io/badge/Foundry-v9-informational)
# Macro Among Friends

For Foundry Virtual Tabletop, this small module uses the excellent socketlib module to allow you to execute macros on other clients. Got a macro triggered by player A that needs a response from player B through another macro? Macro Among Friends has got your back!

# Warning: Do not use this not around friends! 
This module can be used to trigger scripts through the gamemaster(s) client(s) (if connected), so use with caution.

# How?
Utilizing socketlib, this small module registers a function to allow for easier execution of macros from other clients, meaning this module can be used to quickly execute macros for everyone, everyone else but you, all other GMs, even specific players (single and plural) and more. Please visit the above socketlib link for an indepth description of limitations.

The module is a small module, that truthfully could be achieved by just about anyone with a modicum of coding interest by just grabbing socketlib and creating it themselves, but I made it for myself and figured others could use it. This module registers itself along with a simple function to execute a macro with socketlib, allowing the user to execute macros on other clients.

After the module is installed, you can trigger macros on other's client. 

## Examples
### Prompt another player with a dialog macro.
Let's say you have a simple true/false dialog macro, like this below, and you want another player to decide whether this is true or false for you.

```
let result = await Dialog.confirm({
    title: "Do you want this to be true?",
    content: "Pick a button to your heart's content and get true/false return value for testing.",
    yes: () => {
      return 1;
    },
    no: () => {
      return 2;
    },
    defaultYes: false,
  });

return result;
```

Find their player id, name your true or false macro, and try the following macro here.

```
let playerId, macroName;

playerId = "uV3Z8JI1ck0NiVmm"; // Define a player id.
macroName = "True or False"; // Define a macro name.

let result = await MAF.executeAsUser("macro", playerId, macroName); // Await the result and remember to include a return in your macro, if you so wish a return value.

console.log(result); // To verify it has a return value.
```

You will find that the player by your chosen player id will have the true or false macro executed on their end, and you will receive the result through your console!

## Changelog
31-03-2022: First release uploaded to Github.
