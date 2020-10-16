import React from "react";
import getAllFiles from "get-all-files";
import fs from "fs";
import MarkDown from "react-markdown";
import Link from "next/link";

export default function Docs({ md, display }) {
  return (
    <>
      <h1>{display.join("/")}</h1>
      <hr />
      <MarkDown source={md}></MarkDown>
      <style jsx global>
        {`
          * {
            padding: 0px;
            margin: 0px;
          }
          body {
            background-color: #016116;
          }
        `}
      </style>
    </>
  );
}
export async function getStaticPaths() {
  const path = await import("path");
  const docFiles = [];
  //mcbuild.dev/docs/test.md
  //mcbuild.dev/pages/docs/[target]/[[...path]].js
  // ../../../../docs
  for await (const filename of getAllFiles.async(`./docs`)) {
    if (path.parse(filename).ext === ".md") {
      docFiles.push(filename);
    } else {
      console.log(
        `NON DOC FILE '${filename}', ext='${path.parse(filename).ext}'`
      );
    }
  }
  const base = path.resolve("./docs");
  const res = {
    paths: docFiles.map((filename) => {
      const relative = path.relative(base, filename);
      const [target, ...parts] = relative.replace(".md", "").split(path.sep);
      return {
        params: {
          target: target,
          segments: parts,
        },
      };
    }),
    fallback: false,
  };
  console.log("getStaticPaths", JSON.stringify(res));
  return res;
}

export async function getStaticProps(data) {
  const path = await import("path");
  console.log("getStaticProps", JSON.stringify(data));
  const _p = path.join(
    "docs",
    data.params.target,
    (data.params.segments || []).join(path.sep)
  );
  return {
    props: {
      md: fs.readFileSync("./" + _p + ".md", "utf-8"),
      display: [data.params.target, ...data.params.segments],
    },
  };
}
