import React from 'react';
import PropTypes from 'prop-types';

const CircleProgress = ({ percent, strokeWidth, trailColor, strokeColor,text,process,count,innerIsBlack }) => {
  const radius = 67;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  const bg = innerIsBlack?'#000':'#fff';
  const textColor = innerIsBlack?' rgba(237, 237, 237, 1)':'#000';
  return (
   <div className="">
     <div className="tw-telative tw-w-[135px] tw-h-[135px] tw-flex tw-justify-center tw-items-center">
      <svg className="tw-absolute tw-rotate-[240deg]" width={radius * 2} height={radius * 2}>
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke={trailColor}
          strokeWidth={strokeWidth}
          style={{ strokeDasharray: circumference, strokeDashoffset: 0 }}
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      <div className="tw-w-[123px] tw-h-[123px] tw-py-[32px]  tw-gap-[11px] tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-rounded-full tw-text-[14px]" style={{background:bg,border:'0.5px solid rgba(92, 92, 92, 1)'}} >
        <p className="tw-text-[#030303] tw-text-[14px] tw-text-center tw-leading-[110%]" style={{color:textColor}}> {text}</p>
        <p className="tw-text-[12px]" style={{color:textColor}}>{process}</p>
      </div>
    </div>
    <div className="tw-mt-5 tw-flex tw-items-center tw-justify-center tw-gap-[5px] tw-leading-5">
        <img src="../imgs/sphere.png" />
        <span className="tw-text-[#EDEDED] tw-text-[14px]">{count}</span>
    </div>
   </div>
  );
};

CircleProgress.propTypes = {
  percent: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number,
  trailColor: PropTypes.string,
  strokeColor: PropTypes.string,
  text:PropTypes.string,
  process:PropTypes.string,
  count:PropTypes.number,
  innerIsBlack:PropTypes.boolean

};

CircleProgress.defaultProps = {
  strokeWidth: 2,
  trailColor: 'rgba(92, 92, 92, 1)',
  strokeColor: '#ffffff',
  innerIsBlack:false,
};

export default CircleProgress;
