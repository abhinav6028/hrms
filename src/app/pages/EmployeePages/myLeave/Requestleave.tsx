import React, { useState } from 'react';
import { toAbsoluteUrl } from '../../../../_metronic/helpers';
import { IProfileDetails, profileDetailsInitValues as initialValues } from '../../../modules/accounts/components/settings/SettingsModel';
import { Formik, useFormik } from 'formik';
import Calendar from "./Calendar";



const validate = (values: { contactDuringLeave: any }) => {
  const errors: { contactDuringLeave?: string } = {};

  if (!values.contactDuringLeave) {
    errors.contactDuringLeave = 'Required Field, Please enter your contact number during leave.';

  } else if (!/^\d+$/.test(values.contactDuringLeave)) {
    errors.contactDuringLeave = 'Only numbers are allowed.';

  } else if (values.contactDuringLeave.length > 13) {
    errors.contactDuringLeave = 'Must be 13 characters or less';
  }

  return errors;
};



const Requestleaves = () => {
  // Terms and conditions variables
  const [showInitialText, setShowInitialText] = useState(true);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const toggleContent = () => {
    setShowInitialText(false);
    setShowAdditionalInfo(true);
  };

  // Formik configurations
  const formik = useFormik({
    initialValues: {
      contactDuringLeave: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // date configration
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleDateChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    if (fromDate === '') {
      setFromDate(value);
    } else if (toDate === '') {
      setToDate(value);
    } else {
      setFromDate(value);
      setToDate('');
    }
  };


  return (
    <>
              

      {/* 
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content" style={{ background: "#dfd9fc" }}>
          <div className="modal-header">
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center">
                <img src={toAbsoluteUrl('/media/logos/T-colour.png')} className="rounded me-2" alt="..." width="30px" height="30px" />
                <h1 className="modal-title fs-5 text-body-secondary fw-bold mx-2" id="staticBackdropLabel">Tamimah Telecom</h1>
              </div>
              <small className="text-black-50 mx-2">1 minute ago</small>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-black-50 fw-bold">
            Your leave request has been submitted successfully. Please wait for the approval from the management. Thank you.
          </div>
        </div>
      </div>
    </div> */}




      <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Employee Request New Leave </h5>
      <div className="container-fluid mt-5">
        <div className="d-flex justify-content-center">
          <div className='card mb-5 mb-xl-10 w-75'>
            <div
              className='card-header border-0 cursor-pointer bg-primary'
              role='button'
              data-bs-toggle='collapse'
              data-bs-target='#kt_account_profile_details'
              aria-expanded='true'
              aria-controls='kt_account_profile_details'

            >
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0 text-white'>Request Leave</h3>
              </div>
            </div>
            <div id='kt_account_profile_details' className='collapse show'>
              <form onSubmit={formik.handleSubmit} className='form'>
                <div className='card-body border-top p-9 text-primary'>
                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='required text-primary'>
                        <i className="bi bi-telephone-fill text-primary me-3 fs-3"></i>Contact During Leave
                      </span>
                    </label>
                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-13 fv-row'>
                          <input
                            id='ContactDuringLeave'
                            name='contactDuringLeave'
                            type='text'
                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 bg-body-secondary border border-primary'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.contactDuringLeave}
                          />
                          {formik.touched.contactDuringLeave && formik.errors.contactDuringLeave && (
                            <div className="text-danger fw-bold fs-8">{formik.errors.contactDuringLeave}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 
    <div className='row mb-6'>
      <label className='col-lg-4 col-form-label fw-bold fs-6'>
        <span className='required text-primary'>
          <i className="bi bi-calendar-check text-primary me-3 fs-2"></i> Date (From - To)
        </span>
      </label>
      <div className='col-lg-8'>
        <div className='row'>
          <div className='col-lg-12 fv-row'>
          <div className="container mt-3">
            <Calendar />
          </div>
          </div>
        </div>
      </div>
    </div> */}
                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='required text-primary'>
                        <i className="bi bi-calendar-check text-primary me-3 fs-2"></i> Date (From - To)
                      </span>
                    </label>
                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-12 fv-row'>
                          <input
                            type='date'
                            value={fromDate}
                            onChange={handleDateChange}
                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 bg-body-secondary border border-primary'
                            placeholder=''
                          />
                          {/* Display the selected date range */}
                          {fromDate && toDate && (
                            <div className='col-lg-12 mt-3'>
                              <p>
                                Selected Date Range: {fromDate} - {toDate}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='required text-primary'> <i className="bi bi-collection text-primary me-3 fs-2"></i> Select Leave Type</span>
                    </label>
                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-13 fv-row'>
                          <select className="form-select form-select-solid bg-body-secondary border border-primary" aria-label="Select example">
                            <option value="Annual Leave">Annual Leave</option>
                            <option value="Sick Leave">Sick Leave</option>
                            <option value="Maternity Leave">Maternity Leave</option>
                            <option value="Compassionate Leave">Emergency Leave</option>
                            <option value="Hajj Leave">Hajj Leave</option>
                            <option value="Marriage Leave">Marriage Leave</option>
                            <option value="Paternity Leave">Paternity Leave</option>
                            <option value="Paternity Leave">unpaid Leave</option>
                            <option value="Other">Other / Additional Leave</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='text-primary'> <i className="bi bi-file-earmark-check-fill  text-primary me-3 fs-2"></i> Upload Document </span>
                    </label>
                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-13 fv-row'>
                          <input
                            type='file'
                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 bg-body-secondary border border-primary'
                            placeholder=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='text-primary'><i className="bi bi bi-text-left text-primary me-3 fs-2 "></i>Other / Specify if airline ticket is required. </span>
                    </label>
                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-13 fv-row'>
                          <textarea className="form-control bg-body-secondary border border-primary"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid mt-5">
                    <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                      <div className="d-flex flex-stack flex-grow-1">
                        <div className="fw-bold">
                          <div className="fs-7 text-gray-600">
                            {showInitialText && (
                              <>
                                <div className='me-50'>
                                  {showInitialText && (
                                    <>
                                      <button className="btn text-primary btn-active-light-primary btn-sm fw-bold fs-6" onClick={toggleContent}>
                                        <i className="bi-shield-fill-exclamation fs-1 text-primary me-4">
                                          <span className="path1"></span>
                                          <span className="path2"></span>
                                        </i>
                                        View Terms & Conditions
                                      </button>
                                    </>
                                  )}
                                </div>
                              </>
                            )}
                            {showAdditionalInfo && (
                              <>
                                <i className="bi-shield-fill-exclamation fs-1 text-primary">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                <div className="d-flex flex-column me-10" id="additional-info">
                                  <li className="d-flex align-items-center py-2">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span>The first and last weekends of the leave period are not counted as part of the 30-day calculation. If your leave coincides with a public holiday, it will be calculated as part of your annual leave.
                                  </li>
                                  <li className="d-flex align-items-center py-2">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span>I have submitted task, client details and responsibilities to the person in charge of my work during my leave.
                                  </li>
                                  <li className="d-flex align-items-center py-2">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span>I have communicated my requested leave to my line manager and completed the necessary task handover.
                                  </li>
                                  <li className="d-flex align-items-center py-2">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span>For emergencies, sickness, and compassionate leave, I have up to 5 working days to submit the leave request after the leave has been taken.
                                  </li>
                                  <li className="d-flex align-items-center py-2">
                                    <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span> Leaves such as emergencies, sickness, and compassionate leave must be submitted at least 5 days after the leave has been taken. Failure to submit leave requests within this timeframe will result in the leave being calculated as an absence and deducted from my annual leave entitlement. Your leave approval will only be notified after submitting the handover.
                                  </li>
                                </div>
                                <div className='col-lg-9 fv-row'>
                                  <span>
                                    <div className='d-flex align-items-center mt-3'>
                                      <label className='form-check form-check-inline form-check-solid'>
                                        <input
                                          className='form-check-input border border-primary-subtle'
                                          name='communication[]'
                                          id="flexCheckDefault"
                                          type='checkbox'
                                        />
                                        <span className='fw-bold ps-2 fs-6 required text-primary'>I have read and accepted all the terms & conditions.
                                        </span>
                                      </label>
                                    </div>
                                  </span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-footer d-flex py-6 px-9 justify-content-end'>
                  <div className=''>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );


};

export default Requestleaves;