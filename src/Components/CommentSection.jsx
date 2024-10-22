import React, { useState } from 'react';

function CommentSection() {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            setComments([...comments, commentText]);
            setCommentText('');
        }
    };

    return (
        <div>
            <form onSubmit={handleCommentSubmit} className="mb-4">
                <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="Add a comment..."
                />
                <button type="submit" className="bg-orange-600 text-white mt-2 px-4 py-2 rounded-md">
                    Comment
                </button>
            </form>

            <ul>
                {comments.map((comment, index) => (
                    <li key={index} className="mb-2 p-2 bg-gray-100 rounded-md">
                        {comment}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CommentSection;
