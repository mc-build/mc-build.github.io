import React from "react"
import banner from "./../assets/mc-build_banner_grad.png"
function TopBanner(){
    return <div style={{
        width:"100vw",
        textAlign:"center",
        paddingTop:"calc(100vh * .85)",
        height:"100vh"
    }}>
        <h1 style={{color:"white",zIndex:2}}>A cli tool to make datapack creation easier.</h1>
        <img src={banner} style={{
            position:"absolute",
            top:0,
            left:0,
            width:"100vw",
            zIndex:-10,
            pointerEvents:"none"
        }}></img>
    </div>
}
function Page({children}){
    return <div style={{
        minHeight:"100vh"
    }}>
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-evenly",
        }}>
            <div style={{
                width:"300px",
                height:"500px",
                backgroundColor:"#013d0b",
                borderRadius:"1em",
                textAlign:"center",
                paddingLeft:"1em",
                paddingRight:"1em"
            }}>
                <h2
                    style={{
                        color:"#eee",
                        paddingTop:".5em"
                    }}
                >
                    Build Time
                </h2>
                <hr style={{
                    marginBottom:"32px",
                    marginTop:"32px"
                }}/>
                <p style={{
                    color:"#ccc",
                    fontSize:"24px"
                }}>
                    mc-build tends to perform the initial build of projects in just a couple seconds. aditional builds tend to take less than a fifth of a second.
                </p>
            </div>
            <div style={{
                width:"300px",
                height:"500px",
                backgroundColor:"#013d0b",
                borderRadius:"1em",
                textAlign:"center",
                paddingLeft:"1em",
                paddingRight:"1em"
            }}>
                <h2
                    style={{
                        color:"#eee",
                        paddingTop:".5em"
                    }}
                >
                    Easy learning curve.
                </h2>
                <hr style={{
                    marginBottom:"32px",
                    marginTop:"32px"
                }}/>
                <p style={{
                    color:"#ccc",
                    fontSize:"24px"
                }}>
                    mcfunction like syntax with some quality of life changes. Learn to leverage the more advanced features as you go.
                </p>
            </div>
        </div>
    </div>
}

export default function Home(props){
    return <>
        <TopBanner></TopBanner>
        <Page>

        </Page>
        <style jsx global>
            {
            `*{
              padding:0px;
              margin:0px;  
            }
            body{
                background-color:#016116;
            }`
            }
        </style>
    </>
}