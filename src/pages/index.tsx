import { useState } from "react";
import yayJpg from "../assets/yay.jpg";
import { observer } from "mobx-react-lite";
import { counterStore } from "./store";

const HomePage = observer(() => {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      {counterStore.count}
      <button
        onClick={() => {
          counterStore.increment();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          counterStore.decrement();
        }}
      >
        -
      </button>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
});

export default HomePage;
