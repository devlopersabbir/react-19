import { simpleGit } from "simple-git";
simpleGit()
  .add(["./main.js", "./package.json"])
  .commit("[chore 😁] updated main.js && package json", {
    "--date": "2024-03-13",
  })
  .push();
