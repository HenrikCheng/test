import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = {
    id: null,
    name: "",
    username: "",
    position: 0,
    price: 0,
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Ticker Symbol</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <label>Number of stocks</label>
      <input
        type="number"
        name="position"
        value={user.position}
        onChange={handleInputChange}
      />
      <label>Price of each stock</label>
      <input
        type="number"
        name="price"
        value={user.price}
        onChange={handleInputChange}
      />
      <button>Add new stock</button>
    </form>
  );
};

export default AddUserForm;
