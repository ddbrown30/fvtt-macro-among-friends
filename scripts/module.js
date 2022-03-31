let socketMAF;
const MAF = "macro-among-friends";

Hooks.once("socketlib.ready", () => {
    socketMAF = socketlib.registerModule(MAF);
    socketMAF.register("macro",runMacro)
    window.MAF = socketMAF;
});


// Function to execute a macro on a client. Provide a macro name.
async function runMacro(macroName) {
    const macroToRun = game.macros.getName(macroName);
    let macroResult = await macroToRun.execute();
    return macroResult;
};
