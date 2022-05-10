import "./App.scss";
import { getById } from "./data";
import React, { useState } from "react";
import DragDropList from "./DragDropList";
import Participant from "./Participant";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";

export interface IRoute {
  label: string;
  hash: string;
  state: [IState, React.Dispatch<IState>];
}

export type IState = Array<number>;

const initialState: IState = Array.from(Array(25)).map(
  (value, index) => index + 1
);

function App() {
  const [state, setState] = useState({
    actual: initialState,
    prediction: initialState,
    taste: initialState,
  });

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
      hash: "actual",
      label: "Taste",
      state: [
        state.actual,
        (actual) => setState((state) => ({ ...state, actual: actual })),
      ],
    },
    {
      hash: "taste",
      label: "Ergebnis",
      state: [
        state.taste,
        (taste) => setState((state) => ({ ...state, taste })),
      ],
    },
  ];

  const getRouteElement = ([state, handleDragEnd]: IRoute["state"]) => (
    <DragDropList state={state} onDragEnd={handleDragEnd}>
      {(id, index, isDragging) => {
        const props = getById(id);

        if (!props) {
          return null;
        }

        return (
          <Participant {...props} index={index} isDragging={isDragging} />
        );
      }}
    </DragDropList>
  );

  return (
    <>
      <Nav routes={routes} />
      <Routes>
        {routes.map(({ hash, state }) => (
          <Route path={hash} key={hash} element={getRouteElement(state)} />
        ))}
      </Routes>
    </>
  );
}

export default App;
