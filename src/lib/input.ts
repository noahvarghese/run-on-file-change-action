import core from "@actions/core";

export const getInputFromRaw = <T>(input: string): T |undefined => {
    try {
        return JSON.parse(core.getInput(input, {required: true, trimWhitespace: true})) as T;
    } catch (e) {
        console.error(e);
        return undefined;
    }
}