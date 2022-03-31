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
### Ask another player whether this is true or false.
Let's say you have a simple true/false dialog macro, like this below, and you want another player to decide whether this is true or false for you.

<code>let result = await Dialog.confirm({
    title: "Do you want this to be true?",
    content: "Pick a button to your heart's content and get true/false return value for testing.",
    1: () => {
      return 1;
    },
    2: () => {
      return 2;
    },
    defaultYes: false,
  });

return result;</code>



## Changelog
31-03-2022: First release uploaded to Github.
