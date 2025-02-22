"use client";
import React, { useEffect } from "react";
import Rive, { Layout, useRive } from "@rive-app/react-canvas";

export const componentName = "grid - State Machine 1";

export default function RiveComponentControls(props) {
  const layout = new Layout({
    fit: props.fit ?? "contain",
    alignment: props.alignment ?? "center",
  });

  const { RiveComponent, rive } = useRive({
    src: "/rive/dot.riv",
    artboard: "grid",
    stateMachines: "State Machine 1",
    autoplay: props.play, // Directly use props.play
    automaticallyHandleEvents: true,
    layout,
  });

  useEffect(() => {
    if (rive) {
      if (props.play) {
        rive.play();
      } else {
        rive.pause();
      }
    }
  }, [rive, props.play]);

  useEffect(() => {
    if (rive) {
      rive.layout = new Layout({
        fit: props.fit ?? "contain",
        alignment: props.alignment ?? "center",
      });
    }
  }, [rive, props.fit, props.alignment]);

  return <RiveComponent />;
}
