import React from 'react'
import'./education.css'
import {MdSchool} from 'react-icons/md'
import {FaCertificate} from 'react-icons/fa'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Education = () => {
  return (
  <>
  <div className='container education'>
    <h2 className='col-12 mt-3 text-center '>Education Details</h2>
    <hr/>
  
  <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Computer Science</h3>
    <h4 className="vertical-timeline-element-subtitle">UNESWA, Kwaluseni</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2022 - 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
    icon={<FaCertificate/>}
  >
    <h3 className="vertical-timeline-element-title">Introduction to Cybersecurity</h3>
    <h4 className="vertical-timeline-element-subtitle">CISCO, Online</h4>
  </VerticalTimelineElement>
  </VerticalTimeline>
  </div>
  </>
  )
}

export default Education