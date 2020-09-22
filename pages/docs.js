import React from "react"

export default function Docs(props) {
    return <>
        <pre>
            {JSON.stringify(props, null, 2)}
        </pre>
        <style jsx global>
            {`*{
              padding:0px;
              margin:0px;  
            }
            body{
                background-color:#016116;
            }`}
        </style>
    </>
}