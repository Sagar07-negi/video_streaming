import React, { useState } from "react";

const AdminCreators = () => {
  const [creators, setCreators] = useState([
    { name: "Alice Johnson", email: "alice@example.com" },
    { name: "Bob Williams", email: "bob@example.com" },
  ]);
  const [showAddCreatorForm, setShowAddCreatorForm] = useState(false);
  const [newCreator, setNewCreator] = useState({ name: "", email: "" });

  const handleAddCreator = () => {
    setCreators([...creators, newCreator]);
    setShowAddCreatorForm(false);
    setNewCreator({ name: "", email: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">All Creators</h2>
      <ul>
        {creators.map((creator, index) => (
          <li key={index}>{creator.name} - {creator.email}</li>
        ))}
      </ul>
      <button
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setShowAddCreatorForm(true)}
      >
        Add Creator
      </button>

      {showAddCreatorForm && (
        <div className="mt-4">
          <h3 className="text-xl">Add New Creator</h3>
          <input
            type="text"
            placeholder="Name"
            value={newCreator.name}
            onChange={(e) => setNewCreator({ ...newCreator, name: e.target.value })}
            className="block p-2 border rounded mt-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={newCreator.email}
            onChange={(e) => setNewCreator({ ...newCreator, email: e.target.value })}
            className="block p-2 border rounded mt-2"
          />
          <button
            className="mt-4 p-2 bg-green-500 text-white rounded"
            onClick={handleAddCreator}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminCreators;
