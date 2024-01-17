import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser, updateUser } from "../slices/userSlice";

const Users = () => {
  const users = useSelector((store) => store.users.agents);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    id: 0,
    name: "",
    userName: "",
  });
  const [updatedUserName, setUpdatedUserName] = useState("");

  let handleCreate = (data) => {
    dispatch(addUser(data));
  };

  let handleDelete = (user) => {
    dispatch(removeUser(user));
  };

  let handleUpdate = (user) => {
    if (updatedUserName.trim() !== "") {
      dispatch(updateUser({ ...user, userName: updatedUserName }));
    }
  };

  console.log("users==>", users);
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="name"
          // value={name}
          onChange={(e) =>
            setData({
              ...data,
              id: users.length + 1,
              name: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="username"
          // value={name}
          onChange={(e) =>
            setData({
              ...data,
              id: users.length + 1,
              userName: e.target.value,
            })
          }
        />
        <button onClick={() => handleCreate(data)}>Create</button>
      </div>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h1>Name:{user.name}</h1>
              <h1>Username:{user.userName}</h1>
              <input
                type="text"
                placeholder="New Username"
                onChange={(e) => setUpdatedUserName(e.target.value)}
              />
              <button onClick={() => handleDelete(user)}>Delete User</button>
              <button onClick={() => handleUpdate(user)}>
                Update Username
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Users;
