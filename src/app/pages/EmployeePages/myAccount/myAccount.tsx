import {FC} from 'react'

import React, {useState} from 'react'
import {KTIcon, KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {IProfileDetails, profileDetailsInitValues as initialValues} from '../../../modules/accounts/components/settings/SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import { Box, IconButton } from '@mui/material'
import { Archive, Delete, Edit, DocumentScanner } from '@mui/icons-material';

import {Link, useLocation} from 'react-router-dom'
import {Dropdown1} from '../../../../_metronic/partials'

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


      // Initialize the state for the textarea value
      const [jobDescription, setjobDescription] = useState('Address employee concerns, Forecast workforce needs and grievances and Foster a positive work environment, Develop and implement performance appraisal systems, Administer employee benefits and compensation., Ensure adherence to labor laws and regulations and Develop succession plans for key roles. Align HR initiatives with business goals.');

      // Create a function to handle changes in the textarea
      const handlejobDescriptionChange = (event: { target: { value: any; }; }) => {
        setjobDescription(event.target.value);
      };


      const [firstName, setFirstName] = useState('Arjun'); // Initial value
      const [lastName, setLastName] = useState('Babu'); // Initial value
      const [gender, setGender] = useState('Male'); // Initial value
      const [Nationality, setNationality] = useState('India'); // Initial value
      const [IDNumbers, setIDNumbers] = useState('13163083'); // Initial value
      const [PassportNumber, setPassportNumber] = useState('13163083'); // Initial value
      const [Relationship, setRelationship] = useState('Child'); // Initial value
      const [VisaType, setVisaType] = useState('TM'); // Initial value
      const [HealthInsurance, setHealthInsurance] = useState('873776333'); // Initial value
    
     
    
      // Handle changes to the first name input
      const handleFirstNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setFirstName(event.target.value);
      };
    
      // Handle changes to the last name input
      const handleLastNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setLastName(event.target.value);
      };
    
      // Handle changes to the gender select
      const handleGenderChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setGender(event.target.value);
      };
    
       // Handle changes to the nationality select
       const handleNationalityChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setNationality(event.target.value);
      };
    
        // Handle changes to the last name input
        const handleIDNumbersChange = (event: { target: { value: React.SetStateAction<string> } }) => {
          setIDNumbers(event.target.value);
        };
        
         // Handle changes to the last name input
         const handlePassportNumberChange = (event: { target: { value: React.SetStateAction<string> } }) => {
          setPassportNumber(event.target.value);
        };
    
         // Handle changes to the last name input
         const handleRelationshipChange = (event: { target: { value: React.SetStateAction<string> } }) => {
          setRelationship(event.target.value);
        };
    
         // Handle changes to the last name input
         const handleVisaTypeChange = (event: { target: { value: React.SetStateAction<string> } }) => {
          setVisaType(event.target.value);
        };
    
         // Handle changes to the last name input
         const handleHealthInsuranceChange = (event: { target: { value: React.SetStateAction<string> } }) => {
          setHealthInsurance(event.target.value);
        };
    
    
    
    
     // Date Values
    
            // Initialize the state for the date input
            const [dateValue, setDateValue] = useState('2024-08-19');
          
            // Function to handle changes in the date input
            const handleDateChange = (event: { target: { value: React.SetStateAction<string> } }) => {
              // Update the state with the new date value
              setDateValue(event.target.value);
            };


    return ( <>

<h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */}  My Details / Job Description / Family Members Details</h5>


<div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-150px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='Metornic' />
              <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a href='#' className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'>
                  Saji Babu
                  </a>
                  <a href='#'>
                    <KTIcon iconName='verify' className='fs-1 text-primary' />
                  </a>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                    Software Developer
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    <KTIcon iconName='geolocation' className='fs-4 me-1' />
                    TM
                  </a>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary mb-2'
                  >
                    <KTIcon iconName='sms' className='fs-4 me-1' />
                    Saji@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex overflow-auto h-55px'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item mb-5'>

                  <a className="nav-link active" data-bs-toggle="tab" href="#Personal_info" >
                  <span className="d-flex flex-column align-items-start ms-2 mb-2">
                      <span className="fs-5 fw-bolder text-hover-primary">Personal Details</span>
                  </span>
                  </a>

            </li>
            <li className='nav-item mb-5'>
                <a className="nav-link" data-bs-toggle="tab" href="#Corporate_info" >
                  <span className="d-flex flex-column align-items-start ms-2 mb-2">
                      <span className="fs-5 fw-bolder text-hover-primary">
                      Corporate Details
                      </span>
                  </span>
                </a>
            </li>
            <li className='nav-item mb-5'>
              <a className="nav-link" data-bs-toggle="tab" href="#JobDescription" >
                  <span className="d-flex flex-column align-items-start ms-2 mb-2">
                      <span className="fs-5 fw-bolder text-hover-primary">Job Description & Company Benefits</span>
                  </span>
              </a>
            </li>
            <li className='nav-item mb-5'>
              <a className="nav-link" data-bs-toggle="tab" href="#Family_Members" >
                  <span className="d-flex flex-column align-items-start ms-2 mb-2">
                      <span className="fs-5 fw-bolder text-hover-primary">Family Members Details</span>
                  </span>
              </a>
            </li>
            <li className='nav-item mb-5'>
              <a className="nav-link" data-bs-toggle="tab" href="#courses" >
                  <span className="d-flex flex-column align-items-start ms-2 mb-2">
                      <span className="fs-5 fw-bolder text-hover-primary">Courses</span>
                  </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

{/* Personal information  */}
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="Personal_info" role="tabpanel">
        <div className='card d-flex flex-row-fluid flex-center rounded'>
         <div className='card-body py-10 w-100 w-xl-1000px'>
         
           <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>First Name</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> Saji </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Last Name</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> Babu </p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Nationality</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> India </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Gender</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> Male </p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Material Status</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> Married </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>ID/RC Number</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 134262782 </p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Passport Number</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 9820923 </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Years of Experience </label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 20 </p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Passport Exp Date</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 3/12/2023 </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>ID/RC Exp Date</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 3/12/2024 </p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Date Of Birth</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 3/12/1989 </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>India Phone no.</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 0998222 </p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Contact Number +968</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 97877729 </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Emergency Number</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'>923833322 </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    


    {/* Corporate Details */}

    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade" id="Corporate_info" role="tabpanel">
      <div className='card d-flex flex-row-fluid flex-center rounded'>
         <div className='card-body py-10 w-100 w-xl-1000px'>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Employee ID</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 023</p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Date Of joining</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 5/30/2011</p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Workplace</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> TM </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Car Insurance Policy no.</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 9829892822 </p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Visa Type</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> TM </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Access Door Number</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 1234 </p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Visa Exp date</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 9/14/2023 </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Visa Number</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 123487436 </p>
              </div>
            </div>
            
            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Department</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> IT </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Internal Job Title </label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> IT manager </p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>MP Job Title / number </label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> IT/8866 </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>MP Joining Date</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 1/9/2012 </p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Total Salary</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 800 </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Basic Salary</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 1000 </p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Position</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> Manager </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Health Insurance Policy no.</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 123487436 </p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Email ID</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> Saji@gmail.com </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Division</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'>Support Engineer</p>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Contract (From)</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 3/12/2023 </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>(To)</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 3/12/2024 </p>
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'>Employee Work Status</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> Active </p>
              </div>
              <label className='col-lg-3'></label>
              <label className='col-lg-2 col-form-label fw-bold fs-7 text-black-50'> ID access door card no.</label>
              <div className='col-lg-2 fv-row'>
                <p className='form-control form-control-lg form-control-solid text-primary bg-body-secondary fs-7'> 13456282 </p>
              </div>
            </div>

         </div>
        </div>
      </div>
    </div>



    {/* Job Description */}

    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade" id="JobDescription" role="tabpanel">
      <div className='card d-flex flex-row-fluid flex-center rounded'>
         <div className='card-body py-10 w-100 w-xl-1000px'>
         <div className='w-100'>
      


      <div className='fv-row mb-10'>
      <label className='form-label text-primary fw-bold'><i className="bi bi-person-lines-fill fs-3 svg-icon-muted text-primary me-3"></i>Job Description / Employee Responsibilities</label>
      
        <textarea
          name='businessDescription'
          className='form-control form-control-lg form-control-solid bg-body-secondary fs-7'
          rows={4}
          value={jobDescription}
          onChange={handlejobDescriptionChange}
        />
      </div>




      <div className="d-md-flex justify-content-md-center" > 
       <table className="table table-striped table-hover table-rounded border border-gray-300 table-row-bordered table-row-gray-300 gs-7 shadow">
        <thead>
          <tr className="fw-bold fs-6 text-gray-800 border-bottom border-gray-200" style={{backgroundColor: '#143983'}}>
              <th style={{ color: 'white'}}><i className="bi bi-ui-checks-grid fs-3 me-3 svg-icon-muted text-white"></i>Benefit Name</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td className='text-primary fw-bold'>
                <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input border border-primary'
                      name='communication[]'
                      type='checkbox'
                      checked
                    />
                    <span className='fw-bold ps-2 fs-8'>Medical</span>
                  </label>
                </td>
            </tr>
            <tr>
                <td className='text-primary fw-bold'>
                <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input border border-primary'
                      name='communication[]'
                      type='checkbox'
                      checked
                    />
                    <span className='fw-bold ps-2 fs-8'>Fuel Allowance</span>
                  </label>
                </td>
            </tr>
            <tr>
                <td className='text-primary fw-bold'>
                <label className='form-check form-check-inline form-check-solid me-5'>
                    <input
                      className='form-check-input border border-primary'
                      name='communication[]'
                      type='checkbox'
                      checked
                    />
                    <span className='fw-bold ps-2 fs-8'>Car</span>
                  </label>
                </td>
            </tr>
        </tbody>
     </table>
     </div>
    </div>
   </div>
  </div>
 </div>
</div>




    {/* Family Members information*/}

    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade" id="Family_Members" role="tabpanel">
      <div className='card d-flex flex-row-fluid flex-center rounded'>
         <div className='card-body py-10 w-100 w-xl-1000px'>
         <div className='w-100'>


  

{/* first family member information */}
<p className="fw-bold mb-5 mt-5"><span className="badge badge-primary fs-9"><i className="bi bi-person text-white fs-5 me-3"></i>Arjun</span></p>


          <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>First Name</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={firstName}
                      onChange={handleFirstNameChange}
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Last Name</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={lastName}
                      onChange={handleLastNameChange}
                    />
              </div>
            </div>

            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Date of Birth</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={dateValue} // Bind the value to the state
                      onChange={handleDateChange} // Handle changes in the input
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Visa Type</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={VisaType}
                      onChange={handleVisaTypeChange}
                    />
              </div>

            </div>

            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Passport Number</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={PassportNumber}
                      onChange={handlePassportNumberChange}
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Passport expiry date</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={dateValue} // Bind the value to the state
                      onChange={handleDateChange} // Handle changes in the input
                    />
              </div>
            </div>


            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Gender</label>
              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid border fs-7 bg-body-secondary" aria-label="Select example"
              value={gender}
              onChange={handleGenderChange}
              >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              </select>
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Relationship</label>
              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid border fs-7 bg-body-secondary" aria-label="Select example"
              value={Relationship}
              onChange={handleRelationshipChange}
              >
              <option value="Mother">Mother</option>
              <option value="Father">Father</option>
              <option value="Sibling">Sibling</option>
              <option value="Spouse">Spouse</option>
              <option value="Child">Child</option>
              </select>
              </div>
            </div>



            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>ID/RC Number</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={IDNumbers}
                      onChange={handleIDNumbersChange}
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>RC/Visa expiry date</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={dateValue} // Bind the value to the state
                      onChange={handleDateChange} // Handle changes in the input
                    />
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Nationality</label>
              <div className='col-lg-3 fv-row'>
              <select className='form-select form-select-solid border fs-7 bg-body-secondary'
              value={Nationality}
              onChange={handleNationalityChange}
              >
                 <option value='Afghanistan'>Afghanistan</option>
                <option value='Aland Islands'>Aland Islands</option>
                <option value='Albania'>Albania</option>
                <option value='Algeria'>Algeria</option>
                <option value='American Samoa'>American Samoa</option>
                <option value='Andorra'>Andorra</option>
                <option value='Angola'>Angola</option>
                <option value='Anguilla'>Anguilla</option>
                <option value='Antarctica'>Antarctica</option>
                <option value='Antigua and Barbuda'>Antigua and Barbuda</option>
                <option value='Argentina'>Argentina</option>
                <option value='Armenia'>Armenia</option>
                <option value='Aruba'>Aruba</option>
                <option value='Australia'>Australia</option>
                <option value='Austria'>Austria</option>
                <option value='Azerbaijan'>Azerbaijan</option>
                <option value='Bahamas'>Bahamas</option>
                <option value='Bahrain'>Bahrain</option>
                <option value='Bangladesh'>Bangladesh</option>
                <option value='Barbados'>Barbados</option>
                <option value='Belarus'>Belarus</option>
                <option value='Belgium'>Belgium</option>
                <option value='Belize'>Belize</option>
                <option value='Benin'>Benin</option>
                <option value='Bermuda'>Bermuda</option>
                <option value='Bhutan'>Bhutan</option>
                <option value='Bolivia, Plurinational State of'>Bolivia, Plurinational State of</option>
                <option value='Bonaire, Sint Eustatius and Saba'>Bonaire, Sint Eustatius and Saba</option>
                <option value='Bosnia and Herzegovina'>Bosnia and Herzegovina</option>
                <option value='Botswana'>Botswana</option>
                <option value='Bouvet Island'>Bouvet Island</option>
                <option value='Brazil'>Brazil</option>
                <option value='British Indian Ocean Territory'>British Indian Ocean Territory</option>
                <option value='Brunei Darussalam'>Brunei Darussalam</option>
                <option value='Bulgaria'>Bulgaria</option>
                <option value='Burkina Faso'>Burkina Faso</option>
                <option value='Burundi'>Burundi</option>
                <option value='Cambodia'>Cambodia</option>
                <option value='Cameroon'>Cameroon</option>
                <option value='Canada'>Canada</option>
                <option value='Cape Verde'>Cape Verde</option>
                <option value='Cayman Islands'>Cayman Islands</option>
                <option value='Central African Republic'>Central African Republic</option>
                <option value='Chad'>Chad</option>
                <option value='Chile'>Chile</option>
                <option value='China'>China</option>
                <option value='Christmas Island'>Christmas Island</option>
                <option value='Cocos (Keeling) Islands'>Cocos (Keeling) Islands</option>
                <option value='Colombia'>Colombia</option>
                <option value='Comoros'>Comoros</option>
                <option value='Congo'>Congo</option>
                <option value='Congo, the Democratic Republic of the'>Congo, the Democratic Republic of the</option>
                <option value='Cook Islands'>Cook Islands</option>
                <option value='Costa Rica'>Costa Rica</option>
                <option value='Croatia'>Croatia</option>
                <option value='Cuba'>Cuba</option>
                <option value='Curaçao'>Curaçao</option>
                <option value='Cyprus'>Cyprus</option>
                <option value='Czech Republic'>Czech Republic</option>
                <option value='Denmark'>Denmark</option>
                <option value='Djibouti'>Djibouti</option>
                <option value='Dominica'>Dominica</option>
                <option value='Dominican Republic'>Dominican Republic</option>
                <option value='Ecuador'>Ecuador</option>
                <option value='Egypt'>Egypt</option>
                <option value='El Salvador'>El Salvador</option>
                <option value='Equatorial Guinea'>Equatorial Guinea</option>
                <option value='Eritrea'>Eritrea</option>
                <option value='Estonia'>Estonia</option>
                <option value='Ethiopia'>Ethiopia</option>
                <option value='Falkland Islands (Malvinas)'>Falkland Islands (Malvinas)</option>
                <option value='Faroe Islands'>Faroe Islands</option>
                <option value='Fiji'>Fiji</option>
                <option value='Finland'>Finland</option>
                <option value='France'>France</option>
                <option value='French Guiana'>French Guiana</option>
                <option value='French Polynesia'>French Polynesia</option>
                <option value='French Southern Territories'>French Southern Territories</option>
                <option value='Gabon'>Gabon</option>
                <option value='Gambia'>Gambia</option>
                <option value='Georgia'>Georgia</option>
                <option value='Germany'>Germany</option>
                <option value='Ghana'>Ghana</option>
                <option value='Gibraltar'>Gibraltar</option>
                <option value='Greece'>Greece</option>
                <option value='Greenland'>Greenland</option>
                <option value='Grenada'>Grenada</option>
                <option value='Guadeloupe'>Guadeloupe</option>
                <option value='Guam'>Guam</option>
                <option value='Guatemala'>Guatemala</option>
                <option value='Guernsey'>Guernsey</option>
                <option value='Guinea'>Guinea</option>
                <option value='Guinea-Bissau'>Guinea-Bissau</option>
                <option value='Guyana'>Guyana</option>
                <option value='Haiti'>Haiti</option>
                <option value='Heard Island and McDonald Islands'>Heard Island and McDonald Islands</option>
                <option value='Holy See (Vatican City State)'>Holy See (Vatican City State)</option>
                <option value='Honduras'>Honduras</option>
                <option value='Hong Kong'>Hong Kong</option>
                <option value='Hungary'>Hungary</option>
                <option value='Iceland'>Iceland</option>
                <option value='India'>India</option>
                <option value='Indonesia'>Indonesia</option>
                <option value='Iran, Islamic Republic of'>Iran, Islamic Republic of</option>
                <option value='Iraq'>Iraq</option>
                <option value='Ireland'>Ireland</option>
                <option value='Isle of Man'>Isle of Man</option>
                <option value='Israel'>Israel</option>
                <option value='Italy'>Italy</option>
                <option value='Jamaica'>Jamaica</option>
                <option value='Japan'>Japan</option>
                <option value='Jersey'>Jersey</option>
                <option value='Jordan'>Jordan</option>
                <option value='Kazakhstan'>Kazakhstan</option>
                <option value='Kenya'>Kenya</option>
                <option value='Kiribati'>Kiribati</option>
                <option value='Korea'>Korea</option>
                <option value='Kuwait'>Kuwait</option>
                <option value='Kyrgyzstan'>Kyrgyzstan</option>
                <option value='Lao People'>Lao People's Democratic Republic</option>
                <option value='Latvia'>Latvia</option>
                <option value='Lebanon'>Lebanon</option>
                <option value='Lesotho'>Lesotho</option>
                <option value='Liberia'>Liberia</option>
                <option value='Libya'>Libya</option>
                <option value='Liechtenstein'>Liechtenstein</option>
                  `<option value='Lithuania'>Lithuania</option>
                  <option value='Luxembourg'>Luxembourg</option>
                  <option value='Macao'>Macao</option>
                  <option value='Macedonia, the former Yugoslav Republic of'>Macedonia, the former Yugoslav Republic of</option>
                  <option value='Madagascar'>Madagascar</option>
                  <option value='Malawi'>Malawi</option>
                  <option value='Malaysia'>Malaysia</option>
                  <option value='Maldives'>Maldives</option>
                  <option value='Mali'>Mali</option>
                  <option value='Malta'>Malta</option>
                  <option value='Marshall Islands'>Marshall Islands</option>
                  <option value='Martinique'>Martinique</option>
                  <option value='Mauritania'>Mauritania</option>
                  <option value='Mauritius'>Mauritius</option>
                  <option value='Mayotte'>Mayotte</option>
                  <option value='Mexico'>Mexico</option>
                  <option value='Micronesia, Federated States of'>Micronesia, Federated States of</option>
                  <option value='Moldova, Republic of'>Moldova, Republic of</option>
                  <option value='Monaco'>Monaco</option>
                  <option value='Mongolia'>Mongolia</option>
                  <option value='Montenegro'>Montenegro</option>
                  <option value='Montserrat'>Montserrat</option>
                  <option value='Morocco'>Morocco</option>
                  <option value='Mozambique'>Mozambique</option>
                  <option value='Myanmar'>Myanmar</option>
                  <option value='Namibia'>Namibia</option>
                  <option value='Nauru'>Nauru</option>
                  <option value='Nepal'>Nepal</option>
                  <option value='Netherlands'>Netherlands</option>
                  <option value='New Caledonia'>New Caledonia</option>
                  <option value='New Zealand'>New Zealand</option>
                  <option value='Nicaragua'>Nicaragua</option>
                  <option value='Niger'>Niger</option>
                  <option value='Nigeria'>Nigeria</option>
                  <option value='Niue'>Niue</option>
                  <option value='Norfolk Island'>Norfolk Island</option>
                  <option value='Northern Mariana Islands'>Northern Mariana Islands</option>
                  <option value='Norway'>Norway</option>
                  <option value='Oman'>Oman</option>
                  <option value='Pakistan'>Pakistan</option>
                  <option value='Palau'>Palau</option>
                  <option value='Palestinian Territory, Occupied'>Palestinian Territory, Occupied</option>
                  <option value='Panama'>Panama</option>
                  <option value='Papua New Guinea'>Papua New Guinea</option>
                  <option value='Paraguay'>Paraguay</option>
                  <option value='Peru'>Peru</option>
                  <option value='Philippines'>Philippines</option>
                  <option value='Pitcairn'>Pitcairn</option>
                  <option value='Poland'>Poland</option>
                  <option value='Portugal'>Portugal</option>
                  <option value='Puerto Rico'>Puerto Rico</option>
                  <option value='Qatar'>Qatar</option>
                  <option value='Réunion'>Réunion</option>
                  <option value='Romania'>Romania</option>
                  <option value='Russian Federation'>Russian Federation</option>
                  <option value='Rwanda'>Rwanda</option>
                  <option value='Saint Barthélemy'>Saint Barthélemy</option>
                  <option value='Saint Helena, Ascension and Tristan da Cunha'>Saint Helena, Ascension and Tristan da Cunha</option>
                  <option value='Saint Kitts and Nevis'>Saint Kitts and Nevis</option>
                  <option value='Saint Lucia'>Saint Lucia</option>
                  <option value='Saint Martin (French part)'>Saint Martin (French part)</option>
                  <option value='Saint Pierre and Miquelon'>Saint Pierre and Miquelon</option>
                  <option value='Saint Vincent and the Grenadines'>Saint Vincent and the Grenadines</option>
                  <option value='Samoa'>Samoa</option>
                  <option value='San Marino'>San Marino</option>
                  <option value='Sao Tome and Principe'>Sao Tome and Principe</option>
                  <option value='Saudi Arabia'>Saudi Arabia</option>
                  <option value='Senegal'>Senegal</option>
                  <option value='Serbia'>Serbia</option>
                  <option value='Seychelles'>Seychelles</option>
                  <option value='Sierra Leone'>Sierra Leone</option>
                  <option value='Singapore'>Singapore</option>
                  <option value='Sint Maarten (Dutch part)'>Sint Maarten (Dutch part)</option>
                  <option value='Slovakia'>Slovakia</option>
                  <option value='Slovenia'>Slovenia</option>
                  <option value='Solomon Islands'>Solomon Islands</option>
                  <option value='Somalia'>Somalia</option>
                  <option value='South Africa'>South Africa</option>
                  <option value='South Georgia and the South Sandwich Islands'>South Georgia and the South Sandwich Islands</option>
                  <option value='South Korea'>South Korea</option>
                  <option value='South Sudan'>South Sudan</option>
                  <option value='Spain'>Spain</option>
                  <option value='Sri Lanka'>Sri Lanka</option>
                  <option value='Sudan'>Sudan</option>
                  <option value='Suriname'>Suriname</option>
                  <option value='Svalbard and Jan Mayen'>Svalbard and Jan Mayen</option>
                  <option value='Swaziland'>Swaziland</option>
                  <option value='Sweden'>Sweden</option>
                  <option value='Switzerland'>Switzerland</option>
                  <option value='Syrian Arab Republic'>Syrian Arab Republic</option>
                  <option value='Taiwan, Province of China'>Taiwan, Province of China</option>
                  <option value='Tajikistan'>Tajikistan</option>
                  <option value='Tanzania, United Republic of'>Tanzania, United Republic of</option>
                  <option value='Thailand'>Thailand</option>
                  <option value='Timor-Leste'>Timor-Leste</option>
                  <option value='Togo'>Togo</option>
                  <option value='Tokelau'>Tokelau</option>
                  <option value='Tonga'>Tonga</option>
                  <option value='Trinidad and Tobago'>Trinidad and Tobago</option>
                  <option value='Tunisia'>Tunisia</option>
                  <option value='Turkey'>Turkey</option>
                  <option value='Turkmenistan'>Turkmenistan</option>
                  <option value='Turks and Caicos Islands'>Turks and Caicos Islands</option>
                  <option value='Tuvalu'>Tuvalu</option>
                  <option value='Uganda'>Uganda</option>
                  <option value='Ukraine'>Ukraine</option>
                  <option value='United Arab Emirates'>United Arab Emirates</option>
                  <option value='United Kingdom'>United Kingdom</option>
                  <option value='United States'>United States</option>
                  <option value='Uruguay'>Uruguay</option>
                  <option value='Uzbekistan'>Uzbekistan</option>
                  <option value='Vanuatu'>Vanuatu</option>
                  <option value='Venezuela, Bolivarian Republic of'>Venezuela, Bolivarian Republic of</option>
                  <option value='Vietnam'>Vietnam</option>
                  <option value='Virgin Islands'>Virgin Islands</option>
                  <option value='Wallis and Futuna'>Wallis and Futuna</option>
                  <option value='Western Sahara'>Western Sahara</option>
                  <option value='Yemen'>Yemen</option>
                  <option value='Zambia'>Zambia</option>
                  <option value='Zimbabwe'>Zimbabwe</option>
                </select>
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Health Insurance Policy no.</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={HealthInsurance}
                      onChange={handleHealthInsuranceChange}
                    />
              </div>
            </div>

      



      
<p className="fw-bold mb-5 mt-5"><span className="badge badge-primary fs-9"><i className="bi bi-person text-white fs-5 me-3"></i> Arjun</span></p>


<div className='row mb-1'>
      <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>First Name</label>
        <div className='col-lg-3 fv-row'>
        <input
                type='text'
                className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                placeholder=''
                value={firstName}
                onChange={handleFirstNameChange}
              />
        </div>

        <label className='col-lg-1'></label>

        <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Last Name</label>
        <div className='col-lg-3 fv-row'>
        <input
                type='text'
                className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                placeholder=''
                value={lastName}
                onChange={handleLastNameChange}
              />
        </div>

      </div>

      <div className='row mb-1'>
      <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Date of Birth</label>
        <div className='col-lg-3 fv-row'>
        <input
                type='date'
                className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                placeholder=''
                value={dateValue} // Bind the value to the state
                onChange={handleDateChange} // Handle changes in the input
              />
        </div>

        <label className='col-lg-1'></label>

        <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Visa Type</label>
        <div className='col-lg-3 fv-row'>
        <input
                type='text'
                className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                placeholder=''
                value={VisaType}
                onChange={handleVisaTypeChange}
              />
        </div>

      </div>

      <div className='row mb-1'>
      <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Passport Number</label>
        <div className='col-lg-3 fv-row'>
        <input
                type='number'
                className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                placeholder=''
                value={PassportNumber}
                onChange={handlePassportNumberChange}
              />
        </div>
        <label className='col-lg-1'></label>
        <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Passport expiry date</label>
        <div className='col-lg-3 fv-row'>
        <input
                type='date'
                className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                placeholder=''
                value={dateValue} // Bind the value to the state
                onChange={handleDateChange} // Handle changes in the input
              />
        </div>
      </div>


      <div className='row mb-1'>
      <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Gender</label>
        <div className='col-lg-3 fv-row'>
        <select className="form-select form-select-solid border fs-7 bg-body-secondary" aria-label="Select example"
        value={gender}
        onChange={handleGenderChange}
        >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        </select>
        </div>

        <label className='col-lg-1'></label>

        <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Relationship</label>
        <div className='col-lg-3 fv-row'>
        <select className="form-select form-select-solid border fs-7 bg-body-secondary" aria-label="Select example"
        value={Relationship}
        onChange={handleRelationshipChange}
        >
        <option value="Mother">Mother</option>
        <option value="Father">Father</option>
        <option value="Sibling">Sibling</option>
        <option value="Spouse">Spouse</option>
        <option value="Child">Child</option>
        </select>
        </div>
      </div>



      <div className='row mb-1'>
      <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>ID/RC Number</label>
        <div className='col-lg-3 fv-row'>
        <input
                type='number'
                className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                placeholder=''
                value={IDNumbers}
                onChange={handleIDNumbersChange}
              />
        </div>
        <label className='col-lg-1'></label>
        <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>RC/Visa expiry date</label>
        <div className='col-lg-3 fv-row'>
        <input
                type='date'
                className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                placeholder=''
                value={dateValue} // Bind the value to the state
                onChange={handleDateChange} // Handle changes in the input
              />
        </div>
      </div>


      <div className='row mb-1'>
        <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Nationality</label>
        <div className='col-lg-3 fv-row'>
        <select className='form-select form-select-solid border fs-7 bg-body-secondary'
              value={Nationality}
              onChange={handleNationalityChange}
              >
                 <option value='Afghanistan'>Afghanistan</option>
                <option value='Aland Islands'>Aland Islands</option>
                <option value='Albania'>Albania</option>
                <option value='Algeria'>Algeria</option>
                <option value='American Samoa'>American Samoa</option>
                <option value='Andorra'>Andorra</option>
                <option value='Angola'>Angola</option>
                <option value='Anguilla'>Anguilla</option>
                <option value='Antarctica'>Antarctica</option>
                <option value='Antigua and Barbuda'>Antigua and Barbuda</option>
                <option value='Argentina'>Argentina</option>
                <option value='Armenia'>Armenia</option>
                <option value='Aruba'>Aruba</option>
                <option value='Australia'>Australia</option>
                <option value='Austria'>Austria</option>
                <option value='Azerbaijan'>Azerbaijan</option>
                <option value='Bahamas'>Bahamas</option>
                <option value='Bahrain'>Bahrain</option>
                <option value='Bangladesh'>Bangladesh</option>
                <option value='Barbados'>Barbados</option>
                <option value='Belarus'>Belarus</option>
                <option value='Belgium'>Belgium</option>
                <option value='Belize'>Belize</option>
                <option value='Benin'>Benin</option>
                <option value='Bermuda'>Bermuda</option>
                <option value='Bhutan'>Bhutan</option>
                <option value='Bolivia, Plurinational State of'>Bolivia, Plurinational State of</option>
                <option value='Bonaire, Sint Eustatius and Saba'>Bonaire, Sint Eustatius and Saba</option>
                <option value='Bosnia and Herzegovina'>Bosnia and Herzegovina</option>
                <option value='Botswana'>Botswana</option>
                <option value='Bouvet Island'>Bouvet Island</option>
                <option value='Brazil'>Brazil</option>
                <option value='British Indian Ocean Territory'>British Indian Ocean Territory</option>
                <option value='Brunei Darussalam'>Brunei Darussalam</option>
                <option value='Bulgaria'>Bulgaria</option>
                <option value='Burkina Faso'>Burkina Faso</option>
                <option value='Burundi'>Burundi</option>
                <option value='Cambodia'>Cambodia</option>
                <option value='Cameroon'>Cameroon</option>
                <option value='Canada'>Canada</option>
                <option value='Cape Verde'>Cape Verde</option>
                <option value='Cayman Islands'>Cayman Islands</option>
                <option value='Central African Republic'>Central African Republic</option>
                <option value='Chad'>Chad</option>
                <option value='Chile'>Chile</option>
                <option value='China'>China</option>
                <option value='Christmas Island'>Christmas Island</option>
                <option value='Cocos (Keeling) Islands'>Cocos (Keeling) Islands</option>
                <option value='Colombia'>Colombia</option>
                <option value='Comoros'>Comoros</option>
                <option value='Congo'>Congo</option>
                <option value='Congo, the Democratic Republic of the'>Congo, the Democratic Republic of the</option>
                <option value='Cook Islands'>Cook Islands</option>
                <option value='Costa Rica'>Costa Rica</option>
                <option value='Croatia'>Croatia</option>
                <option value='Cuba'>Cuba</option>
                <option value='Curaçao'>Curaçao</option>
                <option value='Cyprus'>Cyprus</option>
                <option value='Czech Republic'>Czech Republic</option>
                <option value='Denmark'>Denmark</option>
                <option value='Djibouti'>Djibouti</option>
                <option value='Dominica'>Dominica</option>
                <option value='Dominican Republic'>Dominican Republic</option>
                <option value='Ecuador'>Ecuador</option>
                <option value='Egypt'>Egypt</option>
                <option value='El Salvador'>El Salvador</option>
                <option value='Equatorial Guinea'>Equatorial Guinea</option>
                <option value='Eritrea'>Eritrea</option>
                <option value='Estonia'>Estonia</option>
                <option value='Ethiopia'>Ethiopia</option>
                <option value='Falkland Islands (Malvinas)'>Falkland Islands (Malvinas)</option>
                <option value='Faroe Islands'>Faroe Islands</option>
                <option value='Fiji'>Fiji</option>
                <option value='Finland'>Finland</option>
                <option value='France'>France</option>
                <option value='French Guiana'>French Guiana</option>
                <option value='French Polynesia'>French Polynesia</option>
                <option value='French Southern Territories'>French Southern Territories</option>
                <option value='Gabon'>Gabon</option>
                <option value='Gambia'>Gambia</option>
                <option value='Georgia'>Georgia</option>
                <option value='Germany'>Germany</option>
                <option value='Ghana'>Ghana</option>
                <option value='Gibraltar'>Gibraltar</option>
                <option value='Greece'>Greece</option>
                <option value='Greenland'>Greenland</option>
                <option value='Grenada'>Grenada</option>
                <option value='Guadeloupe'>Guadeloupe</option>
                <option value='Guam'>Guam</option>
                <option value='Guatemala'>Guatemala</option>
                <option value='Guernsey'>Guernsey</option>
                <option value='Guinea'>Guinea</option>
                <option value='Guinea-Bissau'>Guinea-Bissau</option>
                <option value='Guyana'>Guyana</option>
                <option value='Haiti'>Haiti</option>
                <option value='Heard Island and McDonald Islands'>Heard Island and McDonald Islands</option>
                <option value='Holy See (Vatican City State)'>Holy See (Vatican City State)</option>
                <option value='Honduras'>Honduras</option>
                <option value='Hong Kong'>Hong Kong</option>
                <option value='Hungary'>Hungary</option>
                <option value='Iceland'>Iceland</option>
                <option value='India'>India</option>
                <option value='Indonesia'>Indonesia</option>
                <option value='Iran, Islamic Republic of'>Iran, Islamic Republic of</option>
                <option value='Iraq'>Iraq</option>
                <option value='Ireland'>Ireland</option>
                <option value='Isle of Man'>Isle of Man</option>
                <option value='Israel'>Israel</option>
                <option value='Italy'>Italy</option>
                <option value='Jamaica'>Jamaica</option>
                <option value='Japan'>Japan</option>
                <option value='Jersey'>Jersey</option>
                <option value='Jordan'>Jordan</option>
                <option value='Kazakhstan'>Kazakhstan</option>
                <option value='Kenya'>Kenya</option>
                <option value='Kiribati'>Kiribati</option>
                <option value='Korea'>Korea</option>
                <option value='Kuwait'>Kuwait</option>
                <option value='Kyrgyzstan'>Kyrgyzstan</option>
                <option value='Lao People'>Lao People's Democratic Republic</option>
                <option value='Latvia'>Latvia</option>
                <option value='Lebanon'>Lebanon</option>
                <option value='Lesotho'>Lesotho</option>
                <option value='Liberia'>Liberia</option>
                <option value='Libya'>Libya</option>
                <option value='Liechtenstein'>Liechtenstein</option>
                  `<option value='Lithuania'>Lithuania</option>
                  <option value='Luxembourg'>Luxembourg</option>
                  <option value='Macao'>Macao</option>
                  <option value='Macedonia, the former Yugoslav Republic of'>Macedonia, the former Yugoslav Republic of</option>
                  <option value='Madagascar'>Madagascar</option>
                  <option value='Malawi'>Malawi</option>
                  <option value='Malaysia'>Malaysia</option>
                  <option value='Maldives'>Maldives</option>
                  <option value='Mali'>Mali</option>
                  <option value='Malta'>Malta</option>
                  <option value='Marshall Islands'>Marshall Islands</option>
                  <option value='Martinique'>Martinique</option>
                  <option value='Mauritania'>Mauritania</option>
                  <option value='Mauritius'>Mauritius</option>
                  <option value='Mayotte'>Mayotte</option>
                  <option value='Mexico'>Mexico</option>
                  <option value='Micronesia, Federated States of'>Micronesia, Federated States of</option>
                  <option value='Moldova, Republic of'>Moldova, Republic of</option>
                  <option value='Monaco'>Monaco</option>
                  <option value='Mongolia'>Mongolia</option>
                  <option value='Montenegro'>Montenegro</option>
                  <option value='Montserrat'>Montserrat</option>
                  <option value='Morocco'>Morocco</option>
                  <option value='Mozambique'>Mozambique</option>
                  <option value='Myanmar'>Myanmar</option>
                  <option value='Namibia'>Namibia</option>
                  <option value='Nauru'>Nauru</option>
                  <option value='Nepal'>Nepal</option>
                  <option value='Netherlands'>Netherlands</option>
                  <option value='New Caledonia'>New Caledonia</option>
                  <option value='New Zealand'>New Zealand</option>
                  <option value='Nicaragua'>Nicaragua</option>
                  <option value='Niger'>Niger</option>
                  <option value='Nigeria'>Nigeria</option>
                  <option value='Niue'>Niue</option>
                  <option value='Norfolk Island'>Norfolk Island</option>
                  <option value='Northern Mariana Islands'>Northern Mariana Islands</option>
                  <option value='Norway'>Norway</option>
                  <option value='Oman'>Oman</option>
                  <option value='Pakistan'>Pakistan</option>
                  <option value='Palau'>Palau</option>
                  <option value='Palestinian Territory, Occupied'>Palestinian Territory, Occupied</option>
                  <option value='Panama'>Panama</option>
                  <option value='Papua New Guinea'>Papua New Guinea</option>
                  <option value='Paraguay'>Paraguay</option>
                  <option value='Peru'>Peru</option>
                  <option value='Philippines'>Philippines</option>
                  <option value='Pitcairn'>Pitcairn</option>
                  <option value='Poland'>Poland</option>
                  <option value='Portugal'>Portugal</option>
                  <option value='Puerto Rico'>Puerto Rico</option>
                  <option value='Qatar'>Qatar</option>
                  <option value='Réunion'>Réunion</option>
                  <option value='Romania'>Romania</option>
                  <option value='Russian Federation'>Russian Federation</option>
                  <option value='Rwanda'>Rwanda</option>
                  <option value='Saint Barthélemy'>Saint Barthélemy</option>
                  <option value='Saint Helena, Ascension and Tristan da Cunha'>Saint Helena, Ascension and Tristan da Cunha</option>
                  <option value='Saint Kitts and Nevis'>Saint Kitts and Nevis</option>
                  <option value='Saint Lucia'>Saint Lucia</option>
                  <option value='Saint Martin (French part)'>Saint Martin (French part)</option>
                  <option value='Saint Pierre and Miquelon'>Saint Pierre and Miquelon</option>
                  <option value='Saint Vincent and the Grenadines'>Saint Vincent and the Grenadines</option>
                  <option value='Samoa'>Samoa</option>
                  <option value='San Marino'>San Marino</option>
                  <option value='Sao Tome and Principe'>Sao Tome and Principe</option>
                  <option value='Saudi Arabia'>Saudi Arabia</option>
                  <option value='Senegal'>Senegal</option>
                  <option value='Serbia'>Serbia</option>
                  <option value='Seychelles'>Seychelles</option>
                  <option value='Sierra Leone'>Sierra Leone</option>
                  <option value='Singapore'>Singapore</option>
                  <option value='Sint Maarten (Dutch part)'>Sint Maarten (Dutch part)</option>
                  <option value='Slovakia'>Slovakia</option>
                  <option value='Slovenia'>Slovenia</option>
                  <option value='Solomon Islands'>Solomon Islands</option>
                  <option value='Somalia'>Somalia</option>
                  <option value='South Africa'>South Africa</option>
                  <option value='South Georgia and the South Sandwich Islands'>South Georgia and the South Sandwich Islands</option>
                  <option value='South Korea'>South Korea</option>
                  <option value='South Sudan'>South Sudan</option>
                  <option value='Spain'>Spain</option>
                  <option value='Sri Lanka'>Sri Lanka</option>
                  <option value='Sudan'>Sudan</option>
                  <option value='Suriname'>Suriname</option>
                  <option value='Svalbard and Jan Mayen'>Svalbard and Jan Mayen</option>
                  <option value='Swaziland'>Swaziland</option>
                  <option value='Sweden'>Sweden</option>
                  <option value='Switzerland'>Switzerland</option>
                  <option value='Syrian Arab Republic'>Syrian Arab Republic</option>
                  <option value='Taiwan, Province of China'>Taiwan, Province of China</option>
                  <option value='Tajikistan'>Tajikistan</option>
                  <option value='Tanzania, United Republic of'>Tanzania, United Republic of</option>
                  <option value='Thailand'>Thailand</option>
                  <option value='Timor-Leste'>Timor-Leste</option>
                  <option value='Togo'>Togo</option>
                  <option value='Tokelau'>Tokelau</option>
                  <option value='Tonga'>Tonga</option>
                  <option value='Trinidad and Tobago'>Trinidad and Tobago</option>
                  <option value='Tunisia'>Tunisia</option>
                  <option value='Turkey'>Turkey</option>
                  <option value='Turkmenistan'>Turkmenistan</option>
                  <option value='Turks and Caicos Islands'>Turks and Caicos Islands</option>
                  <option value='Tuvalu'>Tuvalu</option>
                  <option value='Uganda'>Uganda</option>
                  <option value='Ukraine'>Ukraine</option>
                  <option value='United Arab Emirates'>United Arab Emirates</option>
                  <option value='United Kingdom'>United Kingdom</option>
                  <option value='United States'>United States</option>
                  <option value='Uruguay'>Uruguay</option>
                  <option value='Uzbekistan'>Uzbekistan</option>
                  <option value='Vanuatu'>Vanuatu</option>
                  <option value='Venezuela, Bolivarian Republic of'>Venezuela, Bolivarian Republic of</option>
                  <option value='Vietnam'>Vietnam</option>
                  <option value='Virgin Islands'>Virgin Islands</option>
                  <option value='Wallis and Futuna'>Wallis and Futuna</option>
                  <option value='Western Sahara'>Western Sahara</option>
                  <option value='Yemen'>Yemen</option>
                  <option value='Zambia'>Zambia</option>
                  <option value='Zimbabwe'>Zimbabwe</option>
                </select>
        </div>
        <label className='col-lg-1'></label>
        <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Health Insurance Policy no.</label>
        <div className='col-lg-3 fv-row'>
        <input
                type='number'
                className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                placeholder=''
                value={HealthInsurance}
                onChange={handleHealthInsuranceChange}
              />
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  {/* courses */}
<div className="tab-content mb-10" id="myTabContent">
  <div className="tab-pane fade" id="courses" role="tabpanel">

{/* table start from here  */}
    <div className={`card ${lastName}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Recent Courses</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Over 10 Courses</span>
        </h3>

      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className="table table-hover table-striped gs-7" style={{ background: "rgba(20, 57, 131, 0.2)"}}>
            {/* begin::Table head */}
            <thead className="bg-primary">
              <tr className='fw-bold text-white'>
                <th className='w-25px'>
                <i className="bi bi-patch-check-fill fs-3 me-2 svg-icon-muted text-white"></i>
                </th>
                <th className='min-w-150px'>Courses Name</th>
                <th className='min-w-140px'>Academy Name</th>
                <th className='min-w-120px'>Start Date</th>
                <th className='min-w-120px'>End Date</th>
                <th className='min-w-120px'>Duration</th>
                <th className='min-w-120px'>Status</th>
                <th className='min-w-100px text-end'>View Certificate</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                  .NET Fundamentals
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  Oracle Academy
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  02 April 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  30 Sep 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                <td>
                  <span className='badge badge-light-info fs-7'>101 Days</span>
                </td>
                <td>
                  <span className='badge badge-success fs-7'>Passed</span>
                </td>
                <td className='text-end'>
                  <a href='https://cdn2.me-qr.com/pdf/17059642.pdf' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='document' className='fs-2x' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                  ReactJS Fundamentals
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  Oracle Academy
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  02 April 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  30 Sep 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                <td>
                  <span className='badge badge-light-info fs-7'>101 Days</span>
                </td>
                <td>
                  <span className='badge badge-success fs-7'>Passed</span>
                </td>
                <td className='text-end'>
                  <a href='https://cdn2.me-qr.com/pdf/17059642.pdf' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='document' className='fs-2x' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                  PL/SQL Fundamentals
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  Oracle Academy
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  02 April 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  30 Sep 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                <td>
                  <span className='badge badge-light-info fs-7'>221 Days</span>
                </td>
                <td>
                  <span className='badge badge-warning fs-7'>In-Process</span>
                </td>
                <td className='text-end'>
                  <a href='https://cdn2.me-qr.com/pdf/17059642.pdf' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='document' className='fs-2x' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                  Database Programming
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  Oracle Academy
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  02 April 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  30 Sep 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                <td>
                  <span className='badge badge-light-info fs-7'>101 Days</span>
                </td>
                <td>
                  <span className='badge badge-warning fs-7'>In-Process</span>
                </td>
                <td className='text-end'>
                  <a href='https://cdn2.me-qr.com/pdf/17059642.pdf' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='document' className='fs-2x' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                  UI / UX for Beginners
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  Oracle Academy
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  02 April 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  30 Sep 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                <td>
                  <span className='badge badge-light-info fs-7'>30 Days</span>
                </td>
                <td>
                  <span className='badge badge-success fs-7'>Passed</span>
                </td>
                <td className='text-end'>
                  <a href='https://cdn2.me-qr.com/pdf/17059642.pdf' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='document' className='fs-2x' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                  CSS/SCSS 
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  Oracle Academy
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  02 April 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  30 Sep 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                <td>
                  <span className='badge badge-light-info fs-7'>101 Days</span>
                </td>
                <td>
                  <span className='badge badge-danger fs-7'>Faild</span>
                </td>
                <td className='text-end'>
                  <a href='https://cdn2.me-qr.com/pdf/17059642.pdf' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='document' className='fs-2x' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                  .NET Fundamentals
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  Oracle Academy
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  02 April 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  30 Sep 2022
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                <td>
                  <span className='badge badge-light-info fs-7'>101 Days</span>
                </td>
                <td>
                  <span className='badge badge-success fs-7'>Passed</span>
                </td>
                <td className='text-end'>
                  <a href='https://cdn2.me-qr.com/pdf/17059642.pdf' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTIcon iconName='document' className='fs-2x' />
                  </a>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>

  </div>
</div>

    </>
    )
} 

export {MyAccount}
export {MyAccounts}