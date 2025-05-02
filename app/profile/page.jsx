"use client"

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@components/Profile';


const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDeleteClick = (post) => {
    setPostToDelete(post);
    setShowConfirmModal(true);
  };

  const confirmDelete = async () => {
    if (!postToDelete) return;

    try {
      await fetch(`/api/prompt/${postToDelete._id.toString()}`, {
        method: "DELETE",
      });

      const filteredPosts = posts.filter((p) => p._id !== postToDelete._id);
      setPosts(filteredPosts);
    } catch (error) {
      console.error(error);
    } finally {
      setShowConfirmModal(false);
      setPostToDelete(null);
    }
  };

  return (
    <>
      <Profile
        name="My"
        desc="Welcome to your personalized profile page."
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDeleteClick} // updated
      />
      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur">
        <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm text-center">
          <h2 className="text-2xl text-gray-900 font-semibold mb-4 font-inter">Confirm Deletion</h2>
          <p className="mb-6 text-gray-400">Are you sure you want to delete this prompt?</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setShowConfirmModal(false)}
              className="px-4 py-2 border-2 border-gray-400 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={ () => confirmDelete()}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      
      )}
    </>
  );
};

export default MyProfile;
