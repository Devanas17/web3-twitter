import React from 'react'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileTweets from '../components/profile/ProfileTweets'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white overflow-y-scroll scrollbar-hide`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll scrollbar-hide`,
}



const Profile = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar initialSelectedIcon={'Profile'} />
        <div className={style.mainContent}>
          <ProfileHeader />
          <ProfileTweets />
        </div>
        <Widgets />
      </div>
    </div>
  )
}

export default Profile