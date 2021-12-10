import React from "react";
import { github, sha, version } from "../config";

export default () => (
  <footer className="h-10 px-10">
    <p>
      <small>
        <a href={github.sha}>{version}</a>
      </small>
    </p>
  </footer>
);
