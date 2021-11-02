import { IApi } from "@umijs/types";
import { readFileSync, writeFile } from "fs";
import { join } from "path";

export default (api: IApi) => {
  api.onBuildComplete(({ err }) => {
    if (!err) {
      const indexTpl = readFileSync(join(api.paths.absOutputPath, "index.html"));
      let indexContent = indexTpl.toString("utf-8");
      indexContent = indexContent.replace(/! umi version: \d+(\.\d+)(\.\d+)?/, "");
      writeFile(join(api.paths.absOutputPath, "index.html"), indexContent, {}, () => {});
    }
  });
};
