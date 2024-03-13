const { simpleGit } = require("simple-git");
simpleGit()
  .add(["./main.js"])
  .commit("[chore 😁] updated", { "--date": "2024-03-13" })
  .push();
