import React, { useState } from 'react';
import Papa from "papaparse";
import { Form, Button } from 'react-bootstrap';
import InfoTables from '../tables';
import './Content.css'

export default function Content(){

    const [matches, setMatches] = useState({
        columns: [
          {
            label: 'Suggested Shadow',
            field: 'suggestedShadow',
            sort: 'asc'
          },
          {
            label: 'Shadow Level',
            field: 'shadowLevel',
            sort: 'asc'
          },
          {
            label: 'Availability Start (GMT-06)',
            field: 'availabilityStart',
            sort: 'asc'
          },
          {
            label: 'Availability End (GMT-06)',
            field: 'availabilityEnd',
            sort: 'asc'
          },
          {
            label: 'Type',
            field: 'type',
            sort: 'asc'
          },
          {
            label: 'Work Step',
            field: 'workStep',
            sort: 'asc'
          },
          {
            label: 'Date',
            field: 'date',
            sort: 'asc'
          },
          {
            label: 'Interview Start Time (GMT-06)',
            field: 'interviewStartTime',
            sort: 'asc'
          },
          {
            label: 'Interview End Time (GMT-06)',
            field: 'interviewEndTime',
            sort: 'asc'
          },
          {
            label: 'Job ID',
            field: 'jobId',
            sort: 'asc'
          },
          {
            label: 'Job Title',
            field: 'jobTitle',
            sort: 'asc'
          },
          {
            label: 'Job Family',
            field: 'jobFamily',
            sort: 'asc'
          },
          {
            label: 'Job Level',
            field: 'jobLevel',
            sort: 'asc'
          },
          {
            label: 'Department ID',
            field: 'departmentId',
            sort: 'asc'
          },
          {
            label: 'Interviewer Login',
            field: 'interviewerLogin',
            sort: 'asc'
          },
          {
            label: 'Interviewer Name',
            field: 'interviewerName',
            sort: 'asc'
          },
          {
            label: 'Country',
            field: 'country',
            sort: 'asc'
          },
          {
            label: 'Direct Manager Login',
            field: 'directManager',
            sort: 'asc'
          },
          {
            label: 'Recruiter Login',
            field: 'recruiterLogin',
            sort: 'asc'
          },
          {
            label: 'Hire Link',
            field: 'hireLink',
            sort: 'asc'
          }
        ],
        rows: []
      });
    const [partialMatches, setPartialMatches] = useState({
        columns: [
          {
            label: 'Suggested Shadow',
            field: 'suggestedShadow',
            sort: 'asc'
          },
          {
            label: 'Shadow Level',
            field: 'shadowLevel',
            sort: 'asc'
          },
          {
            label: 'Availability Start (GMT-06)',
            field: 'availabilityStart',
            sort: 'asc'
          },
          {
            label: 'Availability End (GMT-06)',
            field: 'availabilityEnd',
            sort: 'asc'
          },
          {
            label: 'Type',
            field: 'type',
            sort: 'asc'
          },
          {
            label: 'Work Step',
            field: 'workStep',
            sort: 'asc'
          },
          {
            label: 'Date',
            field: 'date',
            sort: 'asc'
          },
          {
            label: 'Interview Start Time (GMT-06)',
            field: 'interviewStartTime',
            sort: 'asc'
          },
          {
            label: 'Interview End Time (GMT-06)',
            field: 'interviewEndTime',
            sort: 'asc'
          },
          {
            label: 'Job ID',
            field: 'jobId',
            sort: 'asc'
          },
          {
            label: 'Job Title',
            field: 'jobTitle',
            sort: 'asc'
          },
          {
            label: 'Job Family',
            field: 'jobFamily',
            sort: 'asc'
          },
          {
            label: 'Job Level',
            field: 'jobLevel',
            sort: 'asc'
          },
          {
            label: 'Department ID',
            field: 'departmentId',
            sort: 'asc'
          },
          {
            label: 'Interviewer Login',
            field: 'interviewerLogin',
            sort: 'asc'
          },
          {
            label: 'Interviewer Name',
            field: 'interviewerName',
            sort: 'asc'
          },
          {
            label: 'Country',
            field: 'country',
            sort: 'asc'
          },
          {
            label: 'Direct Manager Login',
            field: 'directManager',
            sort: 'asc'
          },
          {
            label: 'Recruiter Login',
            field: 'recruiterLogin',
            sort: 'asc'
          },
          {
            label: 'Hire Link',
            field: 'hireLink',
            sort: 'asc'
          }
        ],
        rows: []
      });
    const [potentialMatches, setPotentialMatches] = useState({
        columns: [
              {
                label: 'Suggested Shadow',
                field: 'suggestedShadow',
                sort: 'asc'
              },
              {
                label: 'Shadow Level',
                field: 'shadowLevel',
                sort: 'asc'
              },
              {
                label: 'Availability Start (GMT-06)',
                field: 'availabilityStart',
                sort: 'asc'
              },
              {
                label: 'Availability End (GMT-06)',
                field: 'availabilityEnd',
                sort: 'asc'
              },
          {
            label: 'Type',
            field: 'type',
            sort: 'asc'
          },
          {
            label: 'Work Step',
            field: 'workStep',
            sort: 'asc'
          },
          {
            label: 'Date',
            field: 'date',
            sort: 'asc'
          },
          {
            label: 'Interview Start Time (GMT-06)',
            field: 'interviewStartTime',
            sort: 'asc'
          },
          {
            label: 'Interview End Time (GMT-06)',
            field: 'interviewEndTime',
            sort: 'asc'
          },
          {
            label: 'Job ID',
            field: 'jobId',
            sort: 'asc'
          },
          {
            label: 'Job Title',
            field: 'jobTitle',
            sort: 'asc'
          },
          {
            label: 'Job Family',
            field: 'jobFamily',
            sort: 'asc'
          },
          {
            label: 'Job Level',
            field: 'jobLevel',
            sort: 'asc'
          },
          {
            label: 'Department ID',
            field: 'departmentId',
            sort: 'asc'
          },
          {
            label: 'Interviewer Login',
            field: 'interviewerLogin',
            sort: 'asc'
          },
          {
            label: 'Interviewer Name',
            field: 'interviewerName',
            sort: 'asc'
          },
          {
            label: 'Country',
            field: 'country',
            sort: 'asc'
          },
          {
            label: 'Direct Manager Login',
            field: 'directManager',
            sort: 'asc'
          },
          {
            label: 'Recruiter Login',
            field: 'recruiterLogin',
            sort: 'asc'
          },
          {
            label: 'Hire Link',
            field: 'hireLink',
            sort: 'asc'
          }
        ],
        rows: []
      });
    const [noMatches, setNoMatches] = useState({
        columns: [
          {
            label: 'Type',
            field: 'type',
            sort: 'asc'
          },
          {
            label: 'Work Step',
            field: 'workStep',
            sort: 'asc'
          },
          {
            label: 'Date',
            field: 'date',
            sort: 'asc'
          },
          {
            label: 'Interview Start Time (GMT-06)',
            field: 'interviewStartTime',
            sort: 'asc'
          },
          {
            label: 'Interview End Time (GMT-06)',
            field: 'interviewEndTime',
            sort: 'asc'
          },
          {
            label: 'Job ID',
            field: 'jobId',
            sort: 'asc'
          },
          {
            label: 'Job Title',
            field: 'jobTitle',
            sort: 'asc'
          },
          {
            label: 'Job Family',
            field: 'jobFamily',
            sort: 'asc'
          },
          {
            label: 'Job Level',
            field: 'jobLevel',
            sort: 'asc'
          },
          {
            label: 'Department ID',
            field: 'departmentId',
            sort: 'asc'
          },
          {
            label: 'Interviewer Login',
            field: 'interviewerLogin',
            sort: 'asc'
          },
          {
            label: 'Interviewer Name',
            field: 'interviewerName',
            sort: 'asc'
          },
          {
            label: 'Country',
            field: 'country',
            sort: 'asc'
          },
          {
            label: 'Direct Manager Login',
            field: 'directManager',
            sort: 'asc'
          },
          {
            label: 'Recruiter Login',
            field: 'recruiterLogin',
            sort: 'asc'
          },
          {
            label: 'Hire Link',
            field: 'hireLink',
            sort: 'asc'
          }
        ],
        rows: []
      });
    
    const handleFileChange = (event) => {
        const fileInput = event.target.files[0];
        if (fileInput) {
            Papa.parse(fileInput, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    localStorage.setItem('interviews', JSON.stringify(results.data));
                },
            });
        }
    };

    const handleClick = (e) => {
        let interviewers = JSON.parse(localStorage.getItem('interviewers'));
        let interviews = JSON.parse(localStorage.getItem('interviews'));
        
        findMatches(interviews, interviewers);
    }

    const findMatches = (interviews, interviewers) =>{

        // Arrays to store results
        let matchesAux = [];
        let partialMatchesAux = [];
        let potentialMatchesAux = [];
        let noMatchesAux = [];

        // Iterate through interviews and interviewers
        interviews.forEach(interview => {
            interviewers.forEach(interviewer => {
              const interviewStartDate = new Date(interview["Event Start Datetime (UTC)"]);
              const interviewEndDate = new Date(interview["Event Finish Datetime (UTC)"]);
              const interviewerDate = new Date(interviewer.date);
              const interviewerStartTime = new Date(interviewer.date + " " + interviewer.start);
              const interviewerEndTime = new Date(interviewer.date + " " + interviewer.end);
              
              if (
                interviewerDate.toISOString().substr(0, 10) === interviewStartDate.toISOString().substr(0, 10) &&
                interviewerStartTime >= interviewStartDate && interviewerEndTime <= interviewEndDate &&
                interviewer.level >= parseInt(interview["Req Job Level"])
              ) {
                matchesAux.push({
                  suggestedShadow: interviewer.alias,
                  shadowLevel: interviewer.level,
                  availabilityStart: interviewer.start,
                  availabilityEnd: interviewer.end,
                  type: interview["Event Type"],
                  workStep: interview["Work Step"],
                  date: interviewStartDate.toISOString().substr(0, 10),
                  interviewStartTime: interviewStartDate.toISOString().substr(11, 5),
                  interviewEndTime: interviewEndDate.toISOString().substr(11, 5),
                  jobId: interview["Job iCIMS Id"],
                  jobTitle: interview["Req Job Title"],
                  jobFamily: interview["req_job_family_name"],
                  jobLevel: interview["Req Job Level"],
                  departmentId: interview["Req Department Id"],
                  interviewerLogin: interview["interviewer_employee_login"],
                  interviewerName: interview["interviewer_employee_full_name"],
                  country: interview["req_country"],
                  recruiterLogin: interview["recruiter_employee_login"],
                  directManager: interview["hiring_manager_employee_login"],
                  hireLink: "https://hire.amazon.com/interviews/"+interview["Interview Summary Guid"]+"#/interview_event"
                });
              } else if (
                interviewerDate.toISOString().substr(0, 10) === interviewStartDate.toISOString().substr(0, 10) &&
                (
                  (interviewerStartTime >= interviewStartDate && interviewerStartTime <= interviewEndDate) ||
                  (interviewerEndTime >= interviewStartDate && interviewerEndTime <= interviewEndDate)
                ) &&
                interviewer.level >= parseInt(interview["Req Job Level"])
              ) {
                partialMatchesAux.push({
                    suggestedShadow: interviewer.alias,
                    shadowLevel: interviewer.level,
                    availabilityStart: interviewer.start,
                    availabilityEnd: interviewer.end,
                    type: interview["Event Type"],
                    workStep: interview["Work Step"],
                    date: interviewStartDate.toISOString().substr(0, 10),
                    interviewStartTime: interviewStartDate.toISOString().substr(11, 5),
                    interviewEndTime: interviewEndDate.toISOString().substr(11, 5),
                    jobId: interview["Job iCIMS Id"],
                    jobTitle: interview["Req Job Title"],
                    jobFamily: interview["req_job_family_name"],
                    jobLevel: interview["Req Job Level"],
                    departmentId: interview["Req Department Id"],
                    interviewerLogin: interview["interviewer_employee_login"],
                    interviewerName: interview["interviewer_employee_full_name"],
                    country: interview["req_country"],
                    recruiterLogin: interview["recruiter_employee_login"],
                    directManager: interview["hiring_manager_employee_login"],
                    hireLink: "https://hire.amazon.com/interviews/"+interview["Interview Summary Guid"]+"#/interview_event"
                });
              } else if (
                interviewerDate.toISOString().substr(0, 10) === interviewStartDate.toISOString().substr(0, 10) &&
                interviewer.level >= parseInt(interview["Req Job Level"])
              ) {
                potentialMatchesAux.push({
                    suggestedShadow: interviewer.alias,
                    shadowLevel: interviewer.level,
                    availabilityStart: interviewer.start,
                    availabilityEnd: interviewer.end,
                    type: interview["Event Type"],
                    workStep: interview["Work Step"],
                    date: interviewStartDate.toISOString().substr(0, 10),
                    interviewStartTime: interviewStartDate.toISOString().substr(11, 5),
                    interviewEndTime: interviewEndDate.toISOString().substr(11, 5),
                    jobId: interview["Job iCIMS Id"],
                    jobTitle: interview["Req Job Title"],
                    jobFamily: interview["req_job_family_name"],
                    jobLevel: interview["Req Job Level"],
                    departmentId: interview["Req Department Id"],
                    interviewerLogin: interview["interviewer_employee_login"],
                    interviewerName: interview["interviewer_employee_full_name"],
                    country: interview["req_country"],
                    recruiterLogin: interview["recruiter_employee_login"],
                    directManager: interview["hiring_manager_employee_login"],
                    hireLink: "https://hire.amazon.com/interviews/"+interview["Interview Summary Guid"]+"#/interview_event"
                });
              } else {
                noMatchesAux.push({
                  type: interview["Event Type"],
                  workStep: interview["Work Step"],
                  date: interviewStartDate.toISOString().substr(0, 10),
                  interviewStartTime: interviewStartDate.toISOString().substr(11, 5),
                  interviewEndTime: interviewEndDate.toISOString().substr(11, 5),
                  jobId: interview["Job iCIMS Id"],
                  jobTitle: interview["Req Job Title"],
                  jobFamily: interview["req_job_family_name"],
                  jobLevel: interview["Req Job Level"],
                  departmentId: interview["Req Department Id"],
                  interviewerLogin: interview["interviewer_employee_login"],
                  interviewerName: interview["interviewer_employee_full_name"],
                  country: interview["req_country"],
                  recruiterLogin: interview["recruiter_employee_login"],
                  directManager: interview["hiring_manager_employee_login"],
                  hireLink: "https://hire.amazon.com/interviews/"+interview["Interview Summary Guid"]+"#/interview_event"
                });
              }
            });
          });

        setMatches({
            ...matches,
            rows: matchesAux
        });
        setPotentialMatches({
            ...potentialMatches,
            rows: potentialMatchesAux
        });
        setPartialMatches({
            ...partialMatches,
            rows: partialMatchesAux
        });
        setNoMatches({
            ...noMatches,
            rows: noMatchesAux
        });
    }
    

    return(
        <div className='color-container'>          
            <div className='home-page'>
                <br></br>
                <div className='report-title'>NIT Scheduler Calendar</div>
                <div className="SecondaryDetails">
                    <div className="SharePassion">

                    </div>
                </div>
                <div><span className='report-title'>Upload the Upcoming Interviews Report</span></div>
                <Form>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control type="file" onChange={handleFileChange}/>
                    </Form.Group> 
                </Form>
                <div className="btn-matches"></div>
                <Button variant="primary" onClick={handleClick}>Find Shadow Matches</Button>
                <div id="renderList"></div>
                <div className='report-title'>Interviews with matches for Shadows</div>
                <InfoTables info={matches} type={1}></InfoTables>
                <div className='report-title'>Interviews with partial matches for Shadows</div>
                <InfoTables info={partialMatches} type={1}></InfoTables>
                <div className='report-title'>Interviews with potential matches for Shadows</div>
                {<InfoTables info={potentialMatches} type={1}></InfoTables>}
                <div className='report-title'>Interviews with no matches for Shadows found</div>
                {<InfoTables info={noMatches} type={2}></InfoTables>}
                {/* <div>
                    <h2>Shadoww Buddy Slack App</h2>
                    <a href='https://app.slack.com/client/T016M3G1GHZ/D04CCCPFV7X/app' target='_blank'>Link to Shadow Buddy</a>
                </div> */}
            </div>    
        </div>
    )
}