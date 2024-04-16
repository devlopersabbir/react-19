import { simpleGit } from "simple-git";

simpleGit()
  .add(["./main.js"])
  .commit("[chore 😁] updated main.js && package json", {
    "--date": "2024-04-16",
  })
  .push();
