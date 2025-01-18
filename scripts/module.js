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

async function runMacro(macroName, entity = null) {
    const isToken = entity instanceof Token || entity instanceof TokenDocument;
    const isActor = entity instanceof Actor;
    let scopeIds = isToken ? { token: entity.id } : (isActor ? { actor: entity.id } : null);
    scopeIds.scene = entity.scene?.id;
    await game.maf.socket.executeAsGM("executeMacro", macroName, scopeIds);
}

async function executeMacro(macroName, scopeIds) {
    const macroToRun = game.macros.get(macroName);
    let scope = {};
    if (scopeIds.token) {
        scope.token = game.scenes.find(s => s.id == scopeIds.scene).tokens.find(t => t.id == scopeIds.token);
    } else if (scopeIds.actor) {
        scope.actor = game.actors.get(scopeIds.actor);
    }
    let macroResult = await macroToRun.execute(scope);
    return macroResult;
};
