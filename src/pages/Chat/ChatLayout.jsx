import React from 'react'
import ChatList from '../../components/ChatList'
import { Outlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
const ChatLayout = () => {
  const [showChatList,setShowChatList]=React.useState(false);
  const isMobile= useMediaQuery({maxWidth: 1024});
   const panelVariants = {
    visible: { x: isMobile ?  '-85%' : 0 },
    initial: { x: 0 },
  };
  return (
    <div className='flex h-full bg-gray-100 overflow-x-hidden relative z-80'>
     
      <div className=" w-3/4 h-full max-xl:w-[92%] max-lg:w-[90%] max-sm:w-[89%]">
        <Outlet/>
      </div>
      <AnimatePresence>
         <motion.div 
       variants={panelVariants}
         initial="initial"
     animate={showChatList ? 'visible' : 'initial'}
        transition={{ duration: 0.3 }}
       className=" w-1/4 h-full  z-90 shadow   max-xl:w-full max-xl:absolute max-xl:top-0 max-xl:-right-[92.5%] max-lg:-right-[90.5%] max-sm:-right-[88%]"> 
        <ChatList setShowChatList={setShowChatList} showChatList={showChatList}/>
      </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ChatLayout
