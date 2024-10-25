import React, { useState } from "react";

const AdminUsers = () => {
  const [users, setUsers] = useState([
    { name: "John Doe", email: "john@example.com" ,age:"21",gender:"male" },
    { name: "Jane Smith", email: "jane@example.com",age:"21",gender:"male"  },
    { name: "Michael Johnson", email: "michael@example.com" ,age:"21",gender:"male" },
    { name: "Emily Davis", email: "emily@example.com",age:"21",gender:"male" },
    { name: "Emily Davis", email: "emily@example.com",age:"21",gender:"male" },
    { name: "Emily Davis", email: "emily@example.com",age:"21",gender:"male" },
    { name: "Emily Davis", email: "emily@example.com",age:"21",gender:"male" },
    { name: "Emily Davis", email: "emily@example.com",age:"21",gender:"male" },
    { name: "Emily Davis", email: "emily@example.com",age:"21",gender:"male" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  const handleAddUser = () => {
    if (newUser.password === newUser.confirmPassword) {
      setUsers([...users, { name: newUser.name, email: newUser.email }]);
      setShowAddUserForm(false);
      setNewUser({ name: "", email: "", password: "", confirmPassword: "" });
    } else {
      alert("Passwords do not match!");
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Users</h2>
      
      <input
        type="text"
        placeholder="Search users by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {filteredUsers.map((user, index) => (
    <div
      key={index}
      className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition duration-300"
    >
      <h3 className="text-xl font-semibold">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">{user.age}</p>
      <p className="text-gray-600">{user.gender}</p>
    </div>
  ))}
</div>


      <button
        className="mt-6 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={() => setShowAddUserForm(true)}
      >
        Add User
      </button>

      {showAddUserForm && (
        <div className="mt-6 p-6 bg-gray-50 border border-gray-300 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Add New User</h3>
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="block w-full p-2 border rounded-md mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="block w-full p-2 border rounded-md mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            className="block w-full p-2 border rounded-md mb-4"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={newUser.confirmPassword}
            onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.target.value })}
            className="block w-full p-2 border rounded-md mb-4"
          />
          <button
            className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            onClick={handleAddUser}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
