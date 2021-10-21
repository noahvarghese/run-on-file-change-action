import core from "@actions/core";
import github from "@actions/github";
import { getInputFromRaw } from "./lib/input";

(async () => {
    try {
        // get inputs from action
        const token = core.getInput("gh_token", {required: true, trimWhitespace: true})
        const command = core.getInput("command", {
            required: true,
            trimWhitespace: true,
        });

        const files = getInputFromRaw("files");

        if (!files || !command) {
            console.error("Missing parameters");
            return;
        }

        // get all changed files
        const octokit = github.getOctokit(token);
        // head commit
        await octokit.rest.git.getCommit({})
        core.
        // loop over changed files
        // if changed contains one of provided files
        // then break and trigger command
    } catch (e) {
        console.error(e);
    }
})();
