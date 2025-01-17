const NAME = "macro-among-friends";

Hooks.on("init", () => {
    game.maf = game.maf ?? {};
    game.maf.runMacro = runMacro;
});

Hooks.once("socketlib.ready", () => {
    game.maf = game.maf ?? {};

    game.maf.socket = socketlib.registerModule(NAME);
    game.maf.socket.register("executeMacro", executeMacro);
});

async function runMacro(macroName) {
    await game.maf.socket.executeAsGM("executeMacro", macroName);
}

async function executeMacro(macroName) {
    const macroToRun = game.macros.get(macroName);
    let macroResult = await macroToRun.execute();
    return macroResult;
};
