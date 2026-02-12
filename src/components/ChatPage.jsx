
import { Loader, Paperclip, Send, Smile } from 'lucide-react';
import  { useEffect, useRef, useState } from 'react'
import { getMessages, sendMessages } from '../services/api.service';
import { useLocation, useParams } from 'react-router-dom';
import EmojiPicker from 'emoji-picker-react';
import socket from '../services/socketInstance';


const ChatPage = () => {
  const {userId}= useParams()
      const [loadingMessage, setLoadingMessage] = useState(true);
      const [sendLoading, setSendLoading] = useState(false);
      const [emojiPicker, setEmojiPicker] = useState(false);
  const [message, setMessage] = useState(""); 
  const [messages, setmessages] = useState();
  const location=useLocation()
  console.log(location.state)

 



  const handleSendMessage = async(e) => {
    e.preventDefault();
    if (message.trim() === "") return;
try {
     socket.emit('sendMessage',{text:message,profileId:userId})
     setSendLoading(true)
     const res= await sendMessages(userId,{text:message})
     setMessage('')
     callGetMessageAPI()
     
} catch (error) {
  console.log(error)
}finally{
  setSendLoading(false)
}

  
  };
  useEffect(() => {
   socket.on('replyMessage',(message)=>{
   setmessages((prev)=>[...prev,{text:message}])
   })
   return ()=>{
    socket.off('replyMessage')
   }
  }, [])

  const handleEmoji=(e)=>{
    const emoji=e.emoji
    setMessage((prev)=>prev+emoji)
  }
 
  async function callGetMessageAPI(){
try {
       const res= await getMessages(userId)
       setmessages(res.data.messages)
} catch (error) {
  console.log(error)
}finally{
  setLoadingMessage(false)
}
     
  }

  useEffect(() => {
     callGetMessageAPI()
  }, [userId])

  const chatRef= useRef(null)
    useEffect(()=>{
      if(chatRef.current){
    chatRef.current.scrollTop=chatRef.current.scrollHeight
      }
  },[messages])

  return (
   
      <div className="flex-1 h-full  flex flex-col bg-gray-50">
         
            <>
              {/* Chat header */}
              <div className="p-3 bg-white border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={location?.state?.profilePhoto || "/placeholder.svg"}
                      alt={location.state.fullName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  
                  </div>
                  <div>
                    <h3 className="font-medium">{location.state.fullName}</h3>
                    
                  </div>
                </div>

              </div>

              {/* Messages */}
              {
                loadingMessage ? <div className=' flex-1 flex items-center justify-center text-primary font-bold'>Loading Messages...</div> :
              
              <div ref={chatRef} className="flex-1  overflow-y-scroll max-h-[calc(100vh-216px)] p-4 space-y-4 custom-scrollbar">
                {
                  (messages?.length===0 || !messages) && <div className=' text-center text-gray-500 mt-10'>No messages yet. Say hello!</div>
                }
                {messages?.map((msg) => (
                  <div
                    key={msg._id}
                    className={`flex ${
                      msg.userId !== userId ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] px-4 py-2 rounded-lg ${
                        msg.senderId === "me"
                          ? "bg-amber-500 text-white rounded-br-none"
                          : "bg-white text-gray-800 rounded-bl-none shadow-sm"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.senderId === "me"
                            ? "text-amber-100"
                            : "text-gray-500"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
}
              {/* Message input */}
              <div className="p-3 bg-white border-t border-gray-200 relative">
                <div className='absolute bottom-full right-0 '>
                  <EmojiPicker open={emojiPicker} onEmojiClick={handleEmoji} searchDisabled={true}/>
                </div>
                <form
                  onSubmit={handleSendMessage}
                  className="flex items-center gap-2"
                >
                
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value)
                      setEmojiPicker(false)                   
                    }}
                    placeholder="Type a message..."
                    className="flex-1 py-2 px-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    className="p-2 rounded-full hover:bg-gray-100"
                    onClick={()=>setEmojiPicker(!emojiPicker)}
                  >
                    <Smile size={18} className="text-gray-600" />
                  </button>
                  <button
                    type="submit"
                    className="p-2 bg-amber-500 text-white rounded-full hover:bg-amber-600"
                  >
                    {
                      sendLoading ? <Loader size={18} className='animate-spin'/> :
                    
                    <Send size={18} />
}
                  </button>
                </form>
              </div>
            </>
          
            
          
        </div>
   
  )
}

export default ChatPage
