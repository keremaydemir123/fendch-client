import React from 'react';
import CommentStackIcon from '../../icons/CommentStackIcon';
import HeartIcon from '../../icons/HeartIcon';

function CommentCard() {
  return (
    <div className="flex flex-col h-max w-96 bg-base-100 text-base-content px-4 py-3 rounded-md gap-2 shadow-md">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-2 items-center">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="/kerem.jpeg" alt="user" />
            </div>
          </div>
          <div>Kerem Aydemir</div>
        </div>
        <div className="text-sm text-gray-500">11/12/21</div>
      </div>
      <div>sad</div>
      <div className="flex items-center justify-end w-full gap-2">
        <HeartIcon count={3} />
        <CommentStackIcon count={3} />
      </div>
    </div>
  );
}

export default CommentCard;
