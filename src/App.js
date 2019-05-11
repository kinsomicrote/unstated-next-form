import React, { useState } from 'react';
import { createContainer } from "unstated-next";

const useForm = () => {
  const [input, setValue] = useState("");
  const [name, setName] = useState("Barney Stinson");

  const handleInput = event => {
    setValue(event.target.value);
  };

  const updateName = event => {
    event.preventDefault();
    setName(input);
    setValue("");
  };

  return {
    input,
    name,
    handleInput,
    updateName,
  };
};

const Form = createContainer(useForm);

const FormContainer = () => {
  const form = Form.useContainer();
  return (
    <div>
      <p>Hello! {form.name}</p>
      <div>
        <input
          type="text"
          value={form.input}
          onChange={form.handleInput}
        />
        <button onClick={form.updateName}>Save</button>
      </div>
    </div>
  );
};

const App = () => (
  <Form.Provider>
    <FormContainer />
  </Form.Provider>
)

export default App;
