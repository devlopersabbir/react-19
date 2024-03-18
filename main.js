import { simpleGit } from "simple-git";

simpleGit()
  .add(["./main.js"])
  .commit("[chore 🥹] updated", { "--date": "2024-03-18" })
  .push();
