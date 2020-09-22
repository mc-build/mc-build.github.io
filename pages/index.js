import React from "react"
import banner from "./../assets/mc-build_banner_grad.png"
import Link from "next/link";
function Button(props) {
    const { children } = props;
    return <>
        <a {...props}>
            {children}
        </a>
        <style jsx>
            {
                `                
a {
	box-shadow: 0px 10px 14px -7px #3e7327;
	background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
	background-color:#77b55a;
	border-radius:4px;
	border:1px solid #4b8f29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:24px;
	font-weight:bold;
	padding:6px 12px;
	text-decoration:none;
	text-shadow:0px 1px 0px #5b8a3c;
}
a:hover {
	background:linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
	background-color:#72b352;
}
a:active {
	position:relative;
	top:1px;
}
`
            }
        </style>
    </>
}
function TopBanner() {
    return <div style={{
        width: "100vw",
        textAlign: "center",
        paddingTop: "calc(100vh * .85)"
    }}>
        <h1 style={{ color: "white", zIndex: 2 }}>A cli tool to make datapack creation easier.</h1>
        <img src={banner} style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            zIndex: -10,
            pointerEvents: "none"
        }}></img>
    </div>
}
function Page({ children }) {
    return <div style={{
        minHeight: "100vh",
        marginTop: "256px"
    }}>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
        }}>
            <div style={{
                width: "300px",
                height: "500px",
                backgroundColor: "#013d0b",
                borderRadius: "1em",
                textAlign: "center",
                paddingLeft: "1em",
                paddingRight: "1em"
            }}>
                <h2
                    style={{
                        color: "#eee",
                        paddingTop: ".5em"
                    }}
                >
                    Build Time
                </h2>
                <hr style={{
                    marginBottom: "32px",
                    marginTop: "32px"
                }} />
                <p style={{
                    color: "#ccc",
                    fontSize: "24px"
                }}>
                    mc-build tends to perform the initial build of projects in just a couple seconds. aditional builds tend to take less than a fifth of a second.
                </p>
            </div>
            <div style={{
                width: "300px",
                height: "500px",
                backgroundColor: "#013d0b",
                borderRadius: "1em",
                textAlign: "center",
                paddingLeft: "1em",
                paddingRight: "1em"
            }}>
                <h2
                    style={{
                        color: "#eee",
                        paddingTop: ".5em"
                    }}
                >
                    Easy learning curve.
                </h2>
                <hr style={{
                    marginBottom: "32px",
                    marginTop: "32px"
                }} />
                <p style={{
                    color: "#ccc",
                    fontSize: "24px"
                }}>
                    mcfunction like syntax with some quality of life changes. Learn to leverage the more advanced features as you go.
                </p>
                <Link
                    href="/docs"
                >
                    <Button
                        style={{
                            top: "132px",
                            position: "relative"
                        }}>
                        Docs
                    </Button>
                </Link>
            </div>
            <div style={{
                width: "300px",
                height: "500px",
                backgroundColor: "#013d0b",
                borderRadius: "1em",
                textAlign: "center",
                paddingLeft: "1em",
                paddingRight: "1em"
            }}>
                <h2
                    style={{
                        color: "#eee",
                        paddingTop: ".5em"
                    }}
                >
                    Community discord.
                </h2>
                <hr style={{
                    marginBottom: "32px",
                    marginTop: "32px"
                }} />
                <p style={{
                    color: "#ccc",
                    fontSize: "24px"
                }}>
                    we have an official discord server which your welcome to join to ask any questions you might have.
                </p>
                <Button
                    href="https://discord.gg/kpGqTDX"
                    target="_blank"
                    style={{
                        top: "161px",
                        position: "relative"
                    }}>Join!</Button>
            </div>
        </div>
    </div>
}

export default function Home(props) {
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