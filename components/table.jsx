import { useState } from "react"

const CourseTable = ()=>{
  const [chooseId,setId] = useState(0);
  const types = [{
    key:0,
    name:'</ Course Completion >',
  },
  {
    key:1,
    name:'Copy Quest Winning Streak'
  },
  {
    key:2,
    name:'Track Completion'
  }
];
  const tableData = [
        {
          id:1,
          class:0,
          name:'Complete 3 Syntax',
          difficulty:25,
          process:'1/3',
          width:'92px',
          isChoose:false,
      },
      {
        id:2,
        class:1,
        name:'Complete 6 Syntax',
        difficulty:50,
        process:'1/6',
        width:'136.5px',
        isChoose:false,
      },
      {
        id:3,
        class:0,
        name:'Complete 10 Syntax',
        difficulty:120,
        process:'1/10',
        width:'27.5px',
        isChoose:false,
      },
      {
        id:4,
        class:1,
        name:'Quest Winning Streak 1',
        difficulty:25,
        process:'1/3',
        width:'92px',
        isChoose:false,
      }
  ];
  const changeType = (key)=>{
    setId(key)
  }
  return (
    <>
    <div className="tw-flex">
            <div className=" tw-w-1/2 tw-text-[#EDEDED]  tw-text-[16px] tw-font-bold tw-font-book-bold" style={{fontFamily:'book-bold'}}>Milestones</div>
            <ul className="tw-w-1/2 tw-flex tw-flex-nowrap tw-justify-between tw-border-b tw-border-[#282828]" style={{fontFamily:'book-thin'}}>
              {
                types.map(item=>{
                  return (
                    <li className={` tw-cursor-pointer tw-text-[14px] tw-pb-[10px] ${item.key==chooseId?'tw-border-b-4 tw-text-[#EDEDED] tw-font-bold ':'tw-text-[#B2B2B2]'}`} 
                    key={item.name}
                    onClick={()=>{changeType(item.key)}}
                    
                    >{item.name}</li>
                  )
                })
              }
            </ul>
          </div>
    <ul className="tw-mt-8">
        {
          tableData.map((item,index)=>{
            return (<li className='tw-w-[1000px] tw-h-[53px] tw-rounded-[16px] tw-bg-[#232323] tw-flex tw-flex-nowrap tw-items-center tw-mb-3' key={item.id} >
              <div className='tw-w-[162px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="162" height="53" viewBox="0 0 162 53" fill="none">
                  <path d="M0 20C0 8.95431 8.9543 0 20 0H161.5L147.255 53H20C8.95431 53 0 44.0457 0 33V20Z" fill="#292929"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M117.891 0C116.921 20.0334 109.508 38.3759 97.6798 53H20C8.95431 53 0 44.0457 0 33V20C0 8.95431 8.9543 0 20 0H117.891Z" fill="#232323"/>
                </svg>
              </div>
              <div className="tw-w-full tw-flex tw-justify-between tw-flex-nowrap tw-items-center">
                <div className='tw-text-[14px] tw-w-[150px] tw-text-[#fff] tw-ml-[17.5px] tw-mr-[68px]' style={{fontFamily:'book-thin'}} >
                    {item.name}
                </div>
                <div className=' tw-flex tw-flex-nowrap tw-justify-center tw-items-center tw-gap-1'>
                  <img src='../imgs/sphere.png' />
                  <span className="tw-text-[#EDEDED] tw-text-[14px]" style={{fontFamily:'book-bold'}}> {item.difficulty}</span>
                </div>
                <div className=' tw-flex tw-flex-nowrap tw-justify-center tw-items-center tw-gap-3 tw-ml-[50px] tw-mr-[50px]'>
                  <div className='outer tw-w-[275px] tw-h-3 tw-bg-[#505050] tw-rounded-full'>
                    {
                      
                    <div className='inner tw-h-3 tw-bg-[#F2F2F2] tw-rounded-full tw-w-[185px]' style={{ width:item.width}}></div>
                    }
                  </div>
                  <span className='tw-text-[14px] tw-text-[#fff]' style={{fontFamily:'book-thin'}}>{item.process}</span>
                </div>
                <div className="tw-h-10 tw-mr-[6px] tw-w-[133px] ">
                  {
                    chooseId==item.class ? 
                    <button className=" tw-h-10 tw-px-[22px] tw-py-3 tw-rounded-[12px] tw-bg-[#fff] tw-text-[14px]  tw-text-[#030303]" style={{fontFamily:'book-thin'}}>Claim</button>:<button className=" tw-h-10 tw-px-[22px] tw-py-3 tw-rounded-[12px] tw-bg-[#fff] tw-text-[14px]  tw-text-[#EDEDED]" style={{fontFamily:'book-thin',background:'linear-gradient(180deg, #353535 0%, #2E2E2E 100%)'}}>Start Learning</button>
                  }
                  
                </div>
              </div>
          </li>)
          })
        }
          
          </ul>
    </>
  )
}
export default CourseTable