import React, {useState} from 'react'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {IProfileDetails, profileDetailsInitValues as initialValues} from '../../../modules/accounts/components/settings/SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'


const Requestleave = Yup.object().shape({
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


const Requestleaves: React.FC = () => {
  const [data, setData] = useState<IProfileDetails>(initialValues)
  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: Requestleave,
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

  const [showInitialText, setShowInitialText] = useState(true);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const toggleContent = () => {
    setShowInitialText(false);
    setShowAdditionalInfo(true);
  };



  return ( <>



            <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                <img src="madayn.png" className="rounded me-2" alt="..." width="30px" height="30px"/>
                <strong className="me-auto">Masar Web-based System</strong>
                <small>1 mins ago</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                Your Industrial Activity license have been renewed, it will be expired one year from today.
                </div>
            </div>
            </div>



 <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content" style={{background:"#dfd9fc"}}>
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
</div>




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
          <h3 className='fw-bolder m-0 text-white'>Request Leave Form</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9 text-primary'>
            

          


           
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required text-primary'><i className="bi bi-telephone-fill text-primary me-3 fs-3"></i>Contact During Leave</span>
              </label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-13 fv-row'>
                    <input
                      type='number'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 bg-body-secondary border border-primary'
                      placeholder='000 000 000'
                      //{...formik.getFieldProps('fName')}
                    />
                    {formik.touched.fName && formik.errors.fName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.fName}</div>
                      </div>
                    )}
                  </div>
                  
              
                </div>
              </div>
            </div>

            
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required text-primary'> <i className="bi bi-calendar-check text-primary me-3 fs-2"></i> Date    (From - To) </span>
              </label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-6 fv-row'>
                    <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 bg-body-secondary border border-primary'
                      placeholder=''
                      //{...formik.getFieldProps('fName')}
                    />
                    {formik.touched.fName && formik.errors.fName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.fName}</div>
                      </div>
                    )}
                  </div>
                  
                  <div className='col-lg-6 fv-row'>
                    <input
                      type='date'
                      className='form-control form-control-lg form-control-solid bg-body-secondary border border-primary'
                      placeholder=''
                     // {...formik.getFieldProps('lName')}
                    />
                    {formik.touched.lName && formik.errors.lName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.lName}</div>
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
                      //{...formik.getFieldProps('fName')}
                    />
                    {formik.touched.fName && formik.errors.fName && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.fName}</div>
                      </div>
                    )}
                    </div>
                  </div>
                </div>
              </div>



              <div className='row mb-6'>
              <label className='col-lg-8 col-form-label fw-bold fs-6'>
                <span className='required text-primary'> <i className="bi bi bi-text-left text-primary me-3 fs-2 "></i>Other/ Additional information / Specify if airline ticket is required. </span>
               
              </label>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-18 fv-row-9'>
                  <label className="form-label"></label>
                  
                  <textarea className="form-control border border-primary"></textarea>
                    </div>
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
                      <button className="btn text-primary btn-active-light-warning btn-sm fw-bold fs-6" onClick={toggleContent}>
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
  )
  
  
}

export {Requestleave}
export {Requestleaves}
