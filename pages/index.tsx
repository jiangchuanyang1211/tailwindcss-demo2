import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import CircleProgress from '../components/process'
import UserInfo  from '../components/user'
import CourseTable from '../components/table'
const Home: NextPage = () => {
  const  process = [
    {
      percent:38,
      text:"Complete 10 Quest",
      process:"6/10",
      count:10
    },
    {
      percent:38,
      text:"Complete 20 Quest",
      process:"6/20",
      count:25,
      innerIsBlack:true
    },

  ]

  return (
   
    <div className="container tw-flex   tw-py-[120px] tw-rounded-[20px] tw-justify-center">
      <UserInfo></UserInfo>
      <div className="tw-h-full tw-flex tw-flex-col tw-w-[1083px]  ">
        <div className=" tw-h-[221px] tw-flex tw-flex-nowrap tw-bg-[#101010] tw-relative tw-rounded-[20px] tw-mb-3">
          <div className={styles.questbg}>
            <svg width="189" height="220" viewBox="0 0 189 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Rectangle 1830" d="M0 20C0 8.9543 8.9543 0 20 0H188.426L128.78 220H20C8.9543 220 0 211.046 0 200V20Z" fill="#1C1C1C"/>
            </svg>
            <svg className="tw-absolute tw-bottom-0" xmlns="http://www.w3.org/2000/svg" width="142" height="115" viewBox="0 0 142 115" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M141.739 67.2027L128.78 115H20C8.9543 115 0 106.046 0 95V17.2623C15.0458 6.40044 33.5254 0 53.5 0C95.6215 0 131.095 28.4618 141.739 67.2027Z" fill="#232323"/>
            </svg>
            <p className="tw-absolute tw-top-10 tw-left-[28px] tw-w-[74px] tw-text-[16px] tw-text-[#EDEDED] tw-font-bold">Daily Quests</p>
          </div>
          <div className="tw-w-full tw-flex tw-flex-nowrap tw-items-center tw-justify-around">
            <div className="">
              <div className="tw-w-[135px] tw-h-[135px] tw-border-[2px] tw-border-white tw-rounded-full tw-flex tw-items-center tw-justify-center">
                <div className={styles.iconbg}>
                  <button className="tw-block tw-w-[70px] tw-h-10 tw-text-center tw-text-[14px] tw-text-[#6F6F6F]">Claimed</button>
                </div>
              </div>
              <div className="tw-mt-5 tw-flex tw-items-center tw-justify-center tw-gap-[5px] tw-leading-5">
                  <img src="../imgs/sphere.png" />
                  <span className="tw-text-[#EDEDED] tw-text-[14px]">5</span>
              </div>
            </div>
            <CircleProgress {...process[0]} ></CircleProgress>
            <CircleProgress {...process[1]}></CircleProgress>
            <div className="">
              <div>
                <button className="tw-block tw-w-[143px] tw-h-[39px] tw-rounded-[12px] tw-bg-[#232323] tw-text-center tw-leading-[39px] tw-text-[14px] tw-text-[#000] tw-mb-3">Claim</button>
                <button className="tw-block tw-w-[143px] tw-h-[39px] tw-rounded-[12px] tw-text-center tw-leading-[39px] tw-text-[14px] tw-text-[#EDEDED] " style={{background:'linear-gradient(180deg, #353535 0%, #2E2E2E 100%)'}}>Start Learning</button>
              </div>
            </div>

          </div>
        </div>
        <div className=" tw-py-[40px] tw-pl-[26px] tw-pr-[56px] tw-bg-[#101010] tw-rounded-[20px]">
          <CourseTable></CourseTable>
        </div>
      </div>
    </div>
  )
}

export default Home
