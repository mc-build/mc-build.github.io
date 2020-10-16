import React from 'react';
// import Box from 'react-bulma-components/lib/components/box';
// import Img from "react-bulma-components/lib/components/image";
import {
    Card,
    Image,
    Media,
    Columns,
    Content,
    Heading,
} from "react-bulma-components";

import banner from "../assets/mc-build_banner_grad.png"
const App = () => (
    <>
        <Image src={banner}></Image>
        <Columns>
            <Columns.Column>
                <Card style={{ margin: '2em' }}>
                    <Card.Content>
                        <Content>
                            <h3></h3>
                            <hr />
                            <p>
                                {/* vanilla command like syntax, easy to learn and implement, have custom macros, has libraries, helpful discord server, js block support, has other common programming feature like if, else, elseif, loop, while statements
                                Inline functions also */}
                                MC-BUILD impliment a vanilla command like syntax through the lang-mc language.
                            </p>
                        </Content>
                    </Card.Content>
                </Card>
            </Columns.Column>
            <Columns.Column>
                <p className="bd-notification is-info">Second Column</p>
            </Columns.Column>
            <Columns.Column>
                <p className="bd-notification is-warning">Third Column</p>
            </Columns.Column>
        </Columns>
    </>
);

export default App;