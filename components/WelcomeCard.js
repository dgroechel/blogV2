import React, { Component } from "react";
import Typist from "react-typist";
import { Typography } from "@material-ui/core";

export default class HeaderText extends Component {
  render() {
    return (
      <div style={{ paddingBottom: 65, margin: 5 }}>
        <div>
          <Typist
            style={{ background: "#fafafa" }}
            cursor={{
              show: false,
            
            }}
          >
            <div>
              <Typography variant="h4" style={{ color: "#00701a" }}>Hi, I'm David Groechel! </Typography>
            </div>
            <Typist.Delay ms={500} />
            <div>
              <Typography variant="h4">
                {" "}
                I write random musings about life, tech, and my projects.{" "}
              </Typography>{" "}
            </div>
          </Typist>
        </div>
      </div>
    );
  }
}
