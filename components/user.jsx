import styles from '../styles/Home.module.css'
const UserInfo = ()=>{
  const userinfo = {
     username:'Carina Geng',
     level:'Level 3',
     today:50,
     finish:750,
     total:800,
     buttonTxt:'View all badges'
  }
  return (
    <div className="tw-w-[345px] tw-h-[561px] tw-bg-[#101010] tw-rounded-[10px] tw-px-[70px] tw-pt-[37px] tw-pb-[40px] tw-mr-3">
    <div className="tw-flex tw-flex-wrap tw-justify-center">
      <div className="tw-w-[102px] tw-h-[102px] tw-mb-5 tw-bg-[#D9D9D9]  tw-rounded-full"></div>
      <p className="tw-w-full tw-font-[20px] tw-font-bold tw-leading-[20px] tw-text-[#D9D9D9] tw-text-center">{userinfo.username}</p>
      <div className="tw-flex tw-flex-nowrap  tw-items-center tw-mt-3">
        <div className="tw-w-[20px] tw-h-[20px] tw-rounded-full tw-bg-[#D9D9D9] tw-mr-2" ></div>
        <p className="tw-text-[#D9D9D9] tw-font-[13px] tw-leading[13px] tw-text-center">{userinfo.level}</p>
        <div className="tw-w-[20px] tw-h-[20px] tw-ml-5 tw-rounded-full tw-text-[12px]   tw-text-[#828282] tw-border tw-text-center tw-leading-[12px] tw-flex tw-items-center tw-justify-center" >?</div>
      </div>
      {/* 价格 */}
      <div className="tw-w-full tw-h-[42px] tw-flex tw-flex-nowrap tw-my-14">
        <div className="">
          <p className="tw-text-[12px] tw-text-[#7D7D7D] tw-mb-3">Today’s XP</p>
          <p className="tw-text-[12px] tw-text-[#EDEDED]">{userinfo.today}</p>
        </div>
        <div className="tw-mx-7">
        <svg width="13" height="44" viewBox="0 0 13 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector 172" d="M12 1L1 43" stroke="#7D7D7D"/>
        </svg>
        </div>
        <div className="">
          <p className="tw-text-[12px] tw-text-[#7D7D7D] tw-mb-3">Total XP</p>
          <p className="tw-text-[12px] tw-text-[#EDEDED]">{userinfo.finish}/{userinfo.total}</p>
        </div>
      </div>
      {/* 圆圈 */}
      <div className="tw-relative tw-w-full tw-h-[93px] tw-flex tw-items-center tw-justify-center tw-mb-6">
        <div className="tw-absolute tw-left-[11px] tw-w-[69px] tw-h-[69px] tw-rounded-full tw-bg-[#444]"></div>
        <div className="tw-w-[92px] tw-h-[92px] tw-bg-[#D9D9D9] tw-rounded-full tw-z-10 "></div>
        <div className="tw-absolute tw-right-[11px] tw-w-[69px] tw-h-[69px] tw-rounded-full tw-bg-[#444]"></div>
      </div>
      {/* button */}
      <div  className={styles.button}>
        <button className="tw-text-[14px] tw-text-[#EDEDED]">{userinfo.buttonTxt}</button>
      </div>
    </div>
  </div>
  );
}
export default UserInfo;