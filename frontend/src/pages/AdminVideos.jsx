import React, { useState } from "react";

const AdminVideos = () => {
  const [videos, setVideos] = useState([
    { title: "React Tutorial", description: "Learn React from scratch" },
    { title: "JavaScript Basics", description: "Introduction to JavaScript" },
    { title: "CSS Flexbox", description: "Master Flexbox in CSS" },
    { title: "Node.js Guide", description: "Comprehensive Node.js tutorial" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddVideoForm, setShowAddVideoForm] = useState(false);
  const [newVideo, setNewVideo] = useState({ title: "", description: "" });

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddVideo = () => {
    setVideos([...videos, newVideo]);
    setNewVideo({ title: "", description: "" });
    setShowAddVideoForm(false); // Hide form after adding video
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">All Videos</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search videos by title or description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      {/* Video Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredVideos.map((video, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold">{video.title}</h3>
            <p className="text-gray-600">{video.description}</p>
          </div>
        ))}
      </div>

      {/* Toggle Add Video Form */}
     
        <button
          className="mt-6 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => setShowAddVideoForm(true)}
        >
          Add Video
        </button>
  

      {/* Add Video Form */}
      {showAddVideoForm && (
        <div className="mt-6 p-4 bg-gray-100 border rounded-md">
          <h3 className="text-xl font-semibold mb-4">Add New Video</h3>
          <input
            type="text"
            placeholder="Video Title"
            value={newVideo.title}
            onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
            className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Video Description"
            value={newVideo.description}
            onChange={(e) =>
              setNewVideo({ ...newVideo, description: e.target.value })
            }
            className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <button
            className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            onClick={handleAddVideo}
          >
            Save Video
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminVideos;
