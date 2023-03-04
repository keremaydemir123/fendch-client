import React, { useState } from 'react';

function CommentForm() {
  const [message, setMessage] = useState('');

  return (
    <form className="w-96 h-[50px] items-center my-4">
      <div className="flex h-full gap-2">
        <textarea
          className="flex-grow resize-none textarea textarea-primary outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={'Write a comment'}
        />
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
