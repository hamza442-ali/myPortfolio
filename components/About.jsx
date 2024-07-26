'use client'


import { useState } from 'react';
import Image from 'next/image';

export const About = () => {
  const [activeTab, setActiveTab] = useState('Skills');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="about-section flex flex-row">
      <div className="about-col-1">
        <Image
          src="/assets/images/about.svg"
          width={1000}
          height={1000}
          className="rounded-xl"
          alt="About Image"
        />
      </div>
      <div className="about-col-2">
        <h1 className="about-title text-project-blue text-4xl font-semibold">About Me</h1>
        <div className="about-tab flex space-x-16 mt-5">
          <p
            className={`tab-link ${activeTab === 'Skills' ? 'active' : ''}`}
            onClick={() => handleTabClick('Skills')}
          >
            Skills
          </p>
          <p
            className={`tab-link ${activeTab === 'Experience' ? 'active' : ''}`}
            onClick={() => handleTabClick('Experience')}
          >
            Experience
          </p>
          <p
            className={`tab-link ${activeTab === 'Education' ? 'active' : ''}`}
            onClick={() => handleTabClick('Education')}
          >
            Education
          </p>
        </div>

        <div className="tab-content mt-5">
          {activeTab === 'Skills' && (
            <div>
              <h2 className="tab-content-title">Technical Skills</h2>
              <ul className="skills-list">
                <li>ReactJs, NextJs, TypeScript</li>
                <li>Node, Express</li>
                <li>MySQL, MongoDB</li>
                <li>Java, OOP</li>
                <li>DevOps, MLOps</li>
                <li>Jenkins, Apache Airflow</li>
                <li>Docker, DockerHub</li>
                
              </ul>
            </div>
          )}
          {activeTab === 'Experience' && (
            <div>
              <h2 className="tab-content-title">Work History</h2>
              <p>
                <strong>TeraBit IT | 2023 (4 months) (Internship)</strong><br />
                Role: Full Stack Developer
              </p>
              <p className='mt-5'>
                <strong >ZyncDev | 2023–Present (1 Year)</strong><br />
                Role: Full Stack Developer
              </p>
              <p className='mt-2'>
                As a Full Stack Developer (project-based) at ZyncDev, I am responsible <br/> for designing and implementing both frontend and backend solutions.<br/>  My work involves developing user-friendly interfaces,  ensuring <br/>  seamless integration, and managing overall system functionality.
              </p>
            </div>
          )}
          {activeTab === 'Education' && (
            <div>
              <h2 className="tab-content-title">Education</h2>
              <p>
                <strong>Bachelor of Science in Software Engineering</strong><br />
                FAST–National University of Computer and Emerging Sciences <br/> Islamabad, Pakistan<br />
                2020-2024
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
