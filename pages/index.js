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
                    <Card.Image />
                    <Card.Content>
                        <Content>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#1">#css</a> <a href="#2">#responsive</a>
                            <br />
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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