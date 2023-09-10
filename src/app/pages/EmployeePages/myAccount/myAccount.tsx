import {FC} from 'react'

import React, {useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {IProfileDetails, profileDetailsInitValues as initialValues} from '../../../modules/accounts/components/settings/SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import { IconButton } from '@mui/material'

const MyAccount = Yup.object().shape({
    fName: Yup.string().required('First name is required'),
    lName: Yup.string().required('Last name is required'),
    company: Yup.string().required('Company name is required'),
    contactPhone: Yup.string().required('Contact phone is required'),
    companySite: Yup.string().required('Company site is required'),
    country: Yup.string().required('Country is required'),
    language: Yup.string().required('Language is required'),
    timeZone: Yup.string().required('Time zone is required'),
    currency: Yup.string().required('Currency is required'),
  })
  
  
  const MyAccounts: React.FC = () => {
    const [data, setData] = useState<IProfileDetails>(initialValues)
    const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
      const updatedData = Object.assign(data, fieldsToUpdate)
      setData(updatedData)
    }
  
    const [loading, setLoading] = useState(false)
    const formik = useFormik<IProfileDetails>({
      initialValues,
      validationSchema: MyAccount,
      onSubmit: (values) => {
        setLoading(true)
        setTimeout(() => {
          values.communications.email = data.communications.email
          values.communications.phone = data.communications.phone
          values.allowMarketing = data.allowMarketing
          const updatedData = Object.assign(data, values)
          setData(updatedData)
          setLoading(false)
        }, 1000)
      },
    })


    return ( <>

<h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */}  My Personal Details / Job Description / Family Members Details</h5>


<div className='card mb-2 mb-xl-5'>
      <div
        className='border-0 rounded-3 cursor-pointer p-2'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#search_employee_info'
        aria-expanded='true'
        aria-controls='search_employee_info'
        style={{background: "#143983"}}
      >
         <IconButton
                className='px-2'
                onClick={() => {}}
              >
                <i className="bi bi-person-fill fs-1 px-5 svg-icon-muted text-warning"></i>  {/* icon  */}
                <div className='card-title m-0'>
                  <h6 className='fw-bolder m-0 text-white'>View My Personal Details</h6>
                </div>
        </IconButton>

    


      </div>

      <div id='search_employee_info' className='collapse'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body p-9'>




  
 


          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>First Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Saji</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Last Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Babu</p>
              </div>
            </div>

           
          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Nationality</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> India</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Gender</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Male</p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Employee ID</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 103</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>India Phone no.</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 88484884</p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Marital Status</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Married</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>ID Card Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>88484884</p>
              </div>
            </div>
            

            
            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Date Of Birth</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 30-3-1992</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Date Of joining</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 1-3-2013</p>
              </div>
            </div>



            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Access Door Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 3676</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Passport Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 88484884</p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Type</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> TM </p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Place of Work</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Tamimah Telecom </p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Pasport Exp Date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>11/12/2025</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Resident Card Exp Date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>08/07/2023</p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Exp date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 08/07/2023</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>4884</p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Department</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Business </p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Internal Job Title</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>HR Manager</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>MP JobTitle</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> HR Manager</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>MP Joining Date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 23/04/2011</p>
              </div>
            </div>




            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Total Salary</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 800 OMR</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Basic Salary</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 900 OMR</p>
              </div>
            </div>



            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Position</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>HR Manager</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Health Insurance Policy no.</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 839273</p>
              </div>
            </div>




            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Email ID</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> saji@gmail.com</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Employee Status</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Tamimah Telecom</p>
              </div>
            </div>


            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Contact number</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 99119932 </p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Emergency number</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 98881818 </p>
              </div>
            </div>



            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Contract (From)</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>09/01/2011</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>(To)</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 09/01/2029</p>
              </div>
            </div>



            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-6'>Current Work Exp (Years)</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>10</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Insurance Policy Number</label>
              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 90292</p>
              </div>
            </div>


            
            <hr className='text-muted'></hr>

                        <div className='row mb-6'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Benefits</label>

              <div className='col-lg-10 fv-row'>
                <div className='d-flex align-items-center mt-3'>
                  <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input'
                      checked
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.email}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: !data.communications?.email,
                            phone: data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Medical</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      checked
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Accommodation</span>
                  </label>

                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      checked
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Fuel Allowance</span>
                  </label>


                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      checked
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Car</span>
                  </label>


                  <label className='form-check form-check-inline form-check-solid'>
                    <input
                      className='form-check-input'
                      checked
                      name='communication[]'
                      type='checkbox'
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        })
                      }}
                    />
                    <span className='fw-bold ps-2 fs-6'>Flight Ticket</span>
                  </label>


                </div>
              </div>
            </div>       

          </div>
        </form>
      </div>
    </div>


    {/* View Employee Responsibilities */}

    
    <div
        className='border-0 rounded-3 cursor-pointer p-2 mb-2 mb-xl-5'
        role='button'
        aria-expanded='true'
        data-bs-toggle="modal" 
        data-bs-target="#employee_Responsibilities"
        style={{background: "#34a8cb"}}
      >
         <IconButton
                className='px-2'
                onClick={() => {}}
              >
               <i className="bi bi-person-lines-fill fs-1 px-5 svg-icon-muted text-warning"></i>  {/* icon  */}
                <div className='card-title m-0'>
                  <h6 className='fw-bolder m-0 text-white'>View My Job Description </h6>
                </div>
        </IconButton>
      </div>


      <div className="modal fade" tabIndex={-1} id="employee_Responsibilities">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header bg-primary-subtle">
        <h5 className="modal-title text-primary fw-bold"><i className="bi bi-person-lines-fill fs-1 svg-icon-muted text-primary me-5"></i>  Employee Responsibilities</h5>
        <div
          className="btn btn-icon btn-sm btn-active-light-primary ms-2"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <KTSVG
            path="/media/icons/duotune/arrows/arr061.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>
      </div>
      <div className="modal-body">
       <div className="d-flex flex-column">
        <li className="d-flex align-items-center">
        <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span> <p className='text-primary fw-bold mt-3'> Address employee concerns, Forecast workforce needs and grievances and Foster a positive work environment.</p>
        </li>
        <li className="d-flex align-items-center">
        <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span> <p className='text-primary fw-bold mt-3'> Develop and implement performance appraisal systems.</p>
        </li>
        <li className="d-flex align-items-center">
        <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span> <p className='text-primary fw-bold mt-3'>Administer employee benefits and compensation.</p>
        </li>
        <li className="d-flex align-items-center">
        <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span> <p className='text-primary fw-bold mt-3'>Ensure adherence to labor laws and regulations and Develop succession plans for key roles.</p>
        </li>
        <li className="d-flex align-items-center">
            <span className="bullet bullet-dot bg-primary me-5 h-6px w-6px"></span> <p className='text-primary fw-bold mt-3'>Align HR initiatives with business goals.</p>
        </li>
        </div>
      </div>
   
    </div>
  </div>
</div>



    <div className='card mb-2 mb-xl-5'>
      <div
        className='border-0 rounded-3 cursor-pointer p-2'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#search_family_info'
        aria-expanded='true'
        aria-controls='search_family_info'
        style={{background: "#6255a3"}}
      >
         <IconButton
                className='px-2'
                onClick={() => {}}
              >
               <i className="bi bi-people-fill fs-1 px-5 svg-icon-muted text-warning"></i>  {/* icon  */}
                <div className='card-title m-0'>
                  <h6 className='fw-bolder m-0 text-white'>View Family Members Details</h6>
                </div>
        </IconButton>
      </div>

      <div id='search_family_info' className='collapse'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body p-9'>





      <p className="fw-bold mb-5"><span className="badge badge-primary fs-6"><i className="bi bi-person text-white fs-3 me-3"></i> Arya Babu</span></p>
          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>First Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Arya</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Last Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Babu</p>
              </div>
            </div>

           
          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Date of Birth</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 3/30/2000</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Type</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> TM </p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Passport expiry date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>9/3/2023</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Pasport Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 88484884</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Gender</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>Female</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Relationship</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>Child</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>RC Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>823682163</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>RC/Visa expiry date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>9/3/2023</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Health Insurance Policy no.</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>77262</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Nationality</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>India</p>
              </div>
            </div>

{/* person no. 2 */}
            <p className="fw-bold mb-5 mt-15"><span className="badge badge-primary fs-6"><i className="bi bi-person text-white fs-3 me-3"></i> Arjun Babu</span></p>
          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>First Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Arjun </p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Last Name</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> Babu</p>
              </div>
            </div>

           
          <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Date of Birth</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 3/30/2000</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Visa Type</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> TM </p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Passport expiry date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>9/3/2023</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Pasport Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'> 88484884</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Gender</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>Female</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Relationship</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>Child</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>RC Number</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>823682163</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>RC/Visa expiry date</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>9/3/2023</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-6'>Health Insurance Policy no.</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>77262</p>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-2 col-form-label fw-bold fs-6'>Nationality</label>

              <div className='col-lg-3 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary'>India</p>
              </div>
            </div>
            
            </div>
              </form>
        </div>
      </div>
            





    <br></br><br></br>  
    
    </>
    )
} 

export {MyAccount}
export {MyAccounts}