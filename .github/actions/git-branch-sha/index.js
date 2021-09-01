const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  const { payload, eventName } = github.context;

  if (eventName === "pull_request") {
    core.exportVariable("COMMIT_SHA", payload.pull_request.base.sha);
  } else {
    core.exportVariable("COMMIT_SHA", payload.before);
  }
}

run();
