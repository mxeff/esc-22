import "./App.scss";
import { getById } from "./data";
import React, { useEffect, useState } from "react";
import DragDropList from "./DragDropList";
import Participant from "./Participant";
import {
  Route,
  Routes,
} from "react-router-dom";
import Nav from "./Nav";
import Divergence from "./Divergence";

export interface IRoute {
  label: string;
  hash: string;
  state?: [Array<number>, React.Dispatch<Array<number>>];
}

export interface IState {
  actual: Array<number>;
  prediction: Array<number>;
  taste: Array<number>;
}

const initialValue = Array.from(Array(25)).map(
  (value, index) => index + 1
);

const initialState = {
  actual: initialValue,
  prediction: initialValue,
  taste: initialValue,
}

function App() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const stateInLocalStorage = localStorage.getItem("state");

    if (!stateInLocalStorage) {
      return;
    }

    setState(JSON.parse(stateInLocalStorage));
  }, []);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const routes: Array<IRoute> = [
    {
      hash: "",
      label: "Tipp",
      state: [
        state.prediction,
        (prediction) => setState((state) => ({ ...state, prediction })),
      ],
    },
    {
      hash: "taste",
      label: "Taste",
      state: [
        state.taste,
        (taste) => setState((state) => ({ ...state, taste })),
      ],
    },
    {
      hash: "ergebnis",
      label: "Ergebnis",
      state: [
        state.actual,
        (actual) => setState((state) => ({ ...state, actual: actual })),
      ],
    },
    {
      hash: "abweichung",
      label: "Abweichung",
    },
  ];

  const routesWithState = routes.filter((route) => "state" in route);

  const getRouteElement = ([state, handleDragEnd]: NonNullable<
    IRoute["state"]
  >) => (
    <DragDropList state={state} onDragEnd={handleDragEnd}>
      {(id, index, isDragging) => {
        const props = getById(id);

        if (!props) {
          return null;
        }

        return <Participant {...props} index={index} isDragging={isDragging} />;
      }}
    </DragDropList>
  );

  return (
    <>
      <Nav routes={routes} />
      <Routes>
        {routesWithState.map(({ hash, state }) => {
          if (!state) {
            return null;
          }

          return (
            <Route path={hash} key={hash} element={getRouteElement(state)} />
          );
        })}
        <Route path={"abweichung"} element={<Divergence {...state} />} />
      </Routes>
    </>
  );
}

export default App;
