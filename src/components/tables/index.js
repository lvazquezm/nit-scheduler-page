import React from 'react';
import { BiSave } from "react-icons/bi";
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import Swal from 'sweetalert2';
import "./tables.css";

function InfoTables(props) {
  const apiTracker = 'https://xi1b69os7k.execute-api.us-east-1.amazonaws.com/items';

  const callAPI = async (API, payload) => {
    try {
      const res = await axios.put(`${API}`,payload);
      if (res.status === 200) {
        Swal.fire('Your record was successfully added', '', 'success');
        console.log("Success!");
      }
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "An error has occured",
        text: `${e.response ? e.response.data.msj : ""}`,
        confirmButtonText: "Aceptar"
      });
    }
  };

  const insertIntoTracker = async (API, item) => {
    console.log(item);
    let payload = {
      trackId: item.suggestedShadow + item.jobId + "Shadow",
      name: item.suggestedShadow,
      alias: item.suggestedShadow,
      reqId: item.jobId,
      date: item.date,
      time: item.availabilityStart,
      eventType: item.type,
      shadowType: "Shadow",
      hireLink: item.hireLink,
      directManager: item.directManager,
      mainInterviewer: item.interviewerLogin,
      shadowStatus: "Pending",
      rc: item.recruiterLogin,
      attendance: "No",
      reqLink: "https://hire.amazon.com/"
    }
    Swal.fire({
      title: "Are you sure you want to add this record to NIT Tracker?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
      icon: 'warning'
    }).then((result) => {
      if (result.isConfirmed) {
        callAPI(API, payload);
      } else {
        Swal.fire(' Cancelled', '', 'error');
      }
    });
  };

  const rowsWithActions = props.info.rows.map((item, index) => {
    return {
      ...item,
      index: index + 1,
      actions: (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div className="uil-trash-alt" style={{ cursor: "pointer" }}>
            <BiSave color='blue' onClick={() => insertIntoTracker(apiTracker, item)} />
          </div>
        </div>
      )
    };
  });

  const rowsWithoutActions = props.info.rows.map((item, index) => {
    return {
      ...item
    };
  });

  const data = {
    columns: props.type === 1
      ? [
          ...props.info.columns,
          {
            label: 'Save to Tracker',
            field: 'actions',
            sort: 'disabled',
            width: 100
          }
        ]
      : [...props.info.columns],
    rows: props.type === 1 ? rowsWithActions : rowsWithoutActions
  };
 
  return (
    <div className='container'>
      <MDBDataTable
        bordered
        responsive
        hover
        striped
        data={data}
      />
    </div>
  );
}

export default InfoTables;
