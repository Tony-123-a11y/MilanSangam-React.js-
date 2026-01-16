import React from 'react';

const ChatStartPage = () => {
  return (
    <div className="h-full bg-amber-50 flex items-center justify-center p-4 max-sm:p-2">
      <div className="text-center container">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-amber-400 rounded-full mx-auto flex items-center justify-center shadow-lg">
            <span className="text-white text-5xl font-bold">💬</span>
          </div>
        </div>

        {/* Text */}
        <h1 className="text-4xl font-semibold text-amber-600 mb-4 max-sm:text-2xl">
          Select a profile to start chatting
        </h1>
        <p className="text-amber-500 max-w-md mx-auto max-sm:text-sm">
         Select  profiles from your matches or choose from existing chats
        </p>
      </div>
    </div>
  );
};

export default ChatStartPage;
