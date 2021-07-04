import { useReducer } from "react";

const initialState = {
  contador: 0,
};

type ActionType =
  | {
      type: "incrementar" | "decrementar";
    }
  | { type: "custom"; payload: number };

const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "incrementar":
      return {
        ...state,
        contador: state.contador + 1,
      };
    case "decrementar":
      return {
        ...state,
        contador: state.contador - 1,
      };
    case "custom":
      return {
        ...state,
        contador: action.payload,
      };
    default:
      return state;
  }
};

export const ContadorRed = () => {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <div>
      <h2>Contador: {contadorState.contador}</h2>
      <button className="btn" onClick={() => dispatch({ type: "incrementar" })}>
        +1
      </button>
      <button className="btn" onClick={() => dispatch({ type: "decrementar" })}>
        -1
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "custom", payload: 100 })}
      >
        100
      </button>
    </div>
  );
};
