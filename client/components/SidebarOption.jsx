import React from 'react'

const style ={
    wrappper: 'w-min flex items-center rounded-[100px] p-4 cursor-pointer hover:bg-[#333c45] transition-all hover:duration-200 hover:ease-in-out',
    iconContainer: 'text-xl mr-4',
    textActive: 'font-extrabold',
    textActive: "font-medium",
}

const SidebarOption = ({text, Icon, isActive, setSelected, redirect }) => {
  return (
    <div className={style.wrappper} onClick={() => {
        setSelected(text)
    }}>
        <div className={style.iconContainer}>
            <Icon />
        </div>
        <div className={`${isActive ? style.textActive : style.textGeneral} `}>{text}</div>
    </div>
  )
}

export default SidebarOption