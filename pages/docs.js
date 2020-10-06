import getAllFiles from "get-all-files"
import React from "react"
import path from "path"
import Link from "next/link";
function Tree({ tree, name }) {
    if (Object.keys(tree).length < 1) return <p>idk</p>
    // return <ul>
    //     {Object.keys(tree).map(key => {
    //         if (key == "__filePath")
    //             return <Link href={tree[key]} key={key}>
    //                 <a>{tree[key]}</a>
    //             </Link>

    //         return <li key={key}>
    //             {key}
    //             {
    //                 Object.keys(tree).find(key => key != "__filePath") && <Tree tree={tree[key]} key={key}></Tree>
    //             }
    //         </li>
    //     })}
    // </ul>
    const keys = Object.keys(tree);
    const hasFile = keys.includes("__filePath");
    const keysWithoutFile = keys.filter(key => key != "__filePath");
    return <>
        <p>{hasFile ? <Link href={tree.__filePath}><a>{name}</a></Link> : name}</p>
        {
            keysWithoutFile.length != 0 && <ul>
                {keysWithoutFile.map(key => {
                    if (typeof tree[key] === "object")
                        return <li key={key}>
                            <Tree name={key} tree={tree[key]}></Tree>
                        </li>
                    return <Link key={key} href={tree[key]}><a>{tree[key]}</a></Link>
                })}
            </ul>
        }
    </>
    console.log(parts);
}
export default function Docs(props) {
    return <>
        <pre>
            {JSON.stringify(props, null, 2)}
        </pre>
        <Tree name={"Docs"} tree={props.tree}></Tree>
        <style jsx global>
            {`html,body{
              padding:0px;
              margin:0px;  
            }
            body{
                background-color:#016116;
            }`}
        </style>
    </>
}

export async function getStaticProps() {
    const tree = {};
    const files = Array.from(getAllFiles.sync("./docs"));
    function write(o = tree, path, content) {
        const [item] = path;
        o[item] = o[item] || {};
        if (path.length == 1)
            o[item].__filePath = content;
        else write(o[item], path.slice(1), content);
    }
    files.forEach((path) => {
        const parts = path.replace(".md", "").split(/\/|\\/).filter((_) => _ != ".");
        write(tree, parts, path.replace("./", "/").replace(".md", ""));
    });
    return {
        props: {
            tree
        },
    }
}