import { simpleGit } from "simple-git";

simpleGit()
  .add(["./main.js"])
  .commit("[chore] automate updated", { "--date": "2024-03-22" })
  .push();
