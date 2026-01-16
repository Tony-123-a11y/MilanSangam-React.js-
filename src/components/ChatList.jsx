import { PanelRightClose, Search, Sliders } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { getContacts } from '../services/api.service';
import {useQuery} from '@tanstack/react-query'
const ChatList = ({showChatList,setShowChatList}) => {
     const [activeChat, setActiveChat] = useState(1);
   const {data,isLoading,isError}= useQuery(({
     queryKey:['contacts'],
    queryFn: getContacts
   }))
console.log(data)
   
  return (
   
       <div className=" h-full bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4.5 border-b border-gray-200 text-lg text-amber-600 max-sm:p-5 font-semibold text-center flex items-center justify-start">
           <PanelRightClose onClick={()=>setShowChatList(!showChatList)} className='max-xl:block hidden'/>
            <h1 className=' flex-grow max-sm:hidden'>Your Chats</h1>
          </div>
{
  isLoading ? <div className=' flex-1 flex items-center justify-center text-primary font-bold'>Loading Chats...</div> :
          data?.data?.contacts?.length===0 ? <div className=' flex-1 flex items-center justify-center text-gray-500 font-bold'>No Chats Available</div> :

          <div className="flex-1 overflow-y-auto">
            {data?.data?.contacts?.map((contact) => (
              <Link to={`/profile/chats/chatpage/${contact.user._id}`}
                key={contact._id}
                state={contact}
                onClick={() => {
                  setShowChatList(!showChatList);
                  setActiveChat(contact._id)}}
                className={`p-2 flex items-start gap-3 cursor-pointer hover:bg-gray-50 ${
                  activeChat === contact._id ? "bg-amber-100" : ""
                }`}
              >
                <div className="relative">
                  <img
                    src={contact.profilePhotos[0] || "/placeholder.svg"}
                    alt={contact.user.fullName}
                    className="w-12 h-12 max-sm:w-10 max-sm:h-10 rounded-full object-cover bg-white border border-amber-200"
                  />
                  {contact.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-medium truncate">{contact.user.fullName}</h3>
                    <span className="text-xs text-gray-500">
                      {contact.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    {contact.lastMessage}
                  </p>
                </div>

                {contact.unread > 0 && (
                  <div className="flex-shrink-0 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-medium">
                      {contact.unread}
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </div>
}
        </div>
  
  )
}

export default ChatList
