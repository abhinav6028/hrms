/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTIcon} from '../../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'
import React, {useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {IProfileDetails, profileDetailsInitValues as initialValues} from '../../../../../modules/accounts/components/settings/SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import { IconButton } from '@mui/material'

const Step1: FC = () => {
  const [data, setData] = useState<IProfileDetails>(initialValues)
    const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
      const updatedData = Object.assign(data, fieldsToUpdate)
      setData(updatedData)

    
    }
  
    const [loading, setLoading] = useState(false)
    const formik = useFormik<IProfileDetails>({
      initialValues,
      validationSchema: Step1,
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

  //Form input values 
  const [firstName, setFirstName] = useState('Saji'); // Initial value
  const [lastName, setLastName] = useState('Babu'); // Initial value
  const [gender, setGender] = useState('Male'); // Initial value
  const [Nationality, setNationality] = useState('India'); // Initial value
  const [MaritalStatus, setMaritalStatus] = useState('Single'); // Initial value
  const [IDNumbers, setIDNumbers] = useState('13163083'); // Initial value
  const [PassportNumber, setPassportNumber] = useState('13163083'); // Initial value
  const [WorkExperience, setWorkExperience] = useState('10'); // Initial value
  const [IndiaPhoneNumber, setIndiaPhoneNumber] = useState('0091987463'); // Initial value

 

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

     // Handle changes to the nationality select
     const handleMaritalStatusChange = (event: { target: { value: React.SetStateAction<string> } }) => {
      setMaritalStatus(event.target.value);
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
    const handleWorkExperienceChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setWorkExperience(event.target.value);
    };

    // Handle changes to the last name input
    const handleIndiaPhoneNumberChange = (event: { target: { value: React.SetStateAction<string> } }) => {
      setIndiaPhoneNumber(event.target.value);
      };


 // Date Values

        // Initialize the state for the date input
        const [dateValue, setDateValue] = useState('2024-08-19');
      
        // Function to handle changes in the date input
        const handleDateChange = (event: { target: { value: React.SetStateAction<string> } }) => {
          // Update the state with the new date value
          setDateValue(event.target.value);
        };

  return (
    <div className='w-100'>
      
      <div className='pb-10 pb-lg-15'>
        <h4 className='fw-bolder text-danger'>Employee Personal Information</h4>
      </div>

      {/* image */}
            <div className='row mb-5'>
              <div className='col-lg-40'>
                <span>
                <div
                  className='image-input image-input-outline col-lg-2'
                  data-kt-image-input='true'
                  style={{backgroundImage: `url(${toAbsoluteUrl('/media/avatars/blank.png')})`}}
                >
                  <div
                    className='image-input-wrapper w-90px h-90px'
                    style={{backgroundImage: `url(${toAbsoluteUrl(data.avatar)})`}}
                  ></div>
                <label className="text-danger fw-bold fs-8" htmlFor="photo">Update photo!</label>
                <input 
                  type="file"
                  id="photo" 
                  name="photo"
                  accept="image/*"
                  style={{display: "none"}}
                  />
                   </div>
                </span>
              </div>
            </div>
            
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
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Gender</label>
              <div className='col-lg-3 fv-row'>
              <select
                className="form-select form-select-solid border fs-7 bg-body-secondary"
                aria-label="Select example"
                value={gender}
                onChange={handleGenderChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Marital Status</label>
              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid border fs-7 bg-body-secondary" aria-label="Select example"
              value={MaritalStatus}
              onChange={handleMaritalStatusChange}>
              <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
                </select>
              </div>
              <label className='col-lg-1'></label>

              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>ID/RC Number</label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={IDNumbers}
                      onChange={handleIDNumbersChange}
                    />
              </div>
            </div>

            <div className='row mb-1'>
             <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Passport Number</label>

              <div className='col-lg-3 fv-row'>
                <input
                      type='number'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 fs-7 bg-body-secondary'
                      placeholder=''
                      value={PassportNumber}
                      onChange={handlePassportNumberChange}
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Work Experience (Years) </label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={WorkExperience}
                      onChange={handleWorkExperienceChange}
                    />
              </div>

            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Passport Exp Date</label>

              <div className='col-lg-3 fv-row'>
              <input
                type='date'
                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 fs-7 bg-body-secondary'
                placeholder=''
                value={dateValue} // Bind the value to the state
                onChange={handleDateChange} // Handle changes in the input
              />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>ID/RC Exp Date</label>
              <div className='col-lg-3 fv-row'>
              <input
              type='date'
              className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 fs-7 bg-body-secondary'
              placeholder=''
              value={dateValue} // Bind the value to the state
              onChange={handleDateChange} // Handle changes in the input
              />
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Date Of Birth</label>

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
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>India Phone no.</label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={IndiaPhoneNumber}
                      onChange={handleIndiaPhoneNumberChange}
                    />
              </div>
            </div>

            <div className='row mb-1'>
            <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Contact Number</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={IndiaPhoneNumber}
                      onChange={handleIndiaPhoneNumberChange}
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Emergency Number</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                      value={IndiaPhoneNumber}
                      onChange={handleIndiaPhoneNumberChange}
                    />
              </div>
            </div>

            


        </div>
  )
}

export {Step1}







function setExpDate(this: HTMLElement, ev: MouseEvent) {
  throw new Error('Function not implemented.')
}

