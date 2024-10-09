import React from "react";
import CommonBackground from "../Components/CommonBackground";
import ProfileImage from "../assets/img/profile.jpg";

const Chat = () => {
  return (
    <CommonBackground>
            <div className="h-screen flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 bg-gray-800 text-gray-200 p-4 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-6">Channels</h2>
            <ul className="space-y-4">
              <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">
                # general
              </li>
              <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">
                # random
              </li>
              <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">
                # team-updates
              </li>
              <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">
                # project-x
              </li>
            </ul>

            <h2 className="text-lg font-semibold mt-10 mb-6">
              Direct Messages
            </h2>
            <ul className="space-y-4">
              <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">
                John Doe
              </li>
              <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">
                Jane Smith
              </li>
              <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">
                Robert Wilson
              </li>
            </ul>
          </aside>

          {/* Chat Window */}
          <main className="flex-1 flex flex-col bg-white">
            {/* Chat Header */}
            <div className="border-b p-4 bg-gray-100 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src={ProfileImage}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <h3 className="text-lg font-semibold"># general</h3>
              </div>
              <div>
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
                  Invite
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {/* Example Messages */}
              <div className="flex items-start space-x-4">
                <img
                  src={ProfileImage}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="text-sm text-gray-500">
                    John Doe{" "}
                    <span className="text-xs text-gray-400">2:45 PM</span>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg text-sm">
                    Hey team! What's the update on the project?
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img
                  src={ProfileImage}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="text-sm text-gray-500">
                    Jane Smith{" "}
                    <span className="text-xs text-gray-400">2:48 PM</span>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg text-sm">
                    We are almost done with the initial phase!
                  </div>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="border-t p-4 bg-gray-100">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
                  placeholder="Type your message..."
                />
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
                  Send
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </CommonBackground>
  );
};

export default Chat;
