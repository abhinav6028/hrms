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

  return (
    <div className='w-100'>
      
      <div className='pb-10 pb-lg-15'>
        <h4 className='fw-bolder text-danger'>Set Employee Personal Details</h4>

        <div className='text-gray-400 fw-bold fs-7'>
          You need to enter all the employee personal information.
          {/* <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a> */}
          
        </div>
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
                <label className="text-danger fw-bold fs-8" htmlFor="photo">Select photo!</label>
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
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Last Name</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='text'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
            </div>


            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Nationality</label>
              <div className='col-lg-3 fv-row'>
              <select className='form-select form-select-solid border fs-7 bg-body-secondary'>
                  <option value=''>Select a Country...</option>
                  <option value='AF'>Afghanistan</option>
                  <option value='AX'>Aland Islands</option>
                  <option value='AL'>Albania</option>
                  <option value='DZ'>Algeria</option>
                  <option value='AS'>American Samoa</option>
                  <option value='AD'>Andorra</option>
                  <option value='AO'>Angola</option>
                  <option value='AI'>Anguilla</option>
                  <option value='AQ'>Antarctica</option>
                  <option value='AG'>Antigua and Barbuda</option>
                  <option value='AR'>Argentina</option>
                  <option value='AM'>Armenia</option>
                  <option value='AW'>Aruba</option>
                  <option value='AU'>Australia</option>
                  <option value='AT'>Austria</option>
                  <option value='AZ'>Azerbaijan</option>
                  <option value='BS'>Bahamas</option>
                  <option value='BH'>Bahrain</option>
                  <option value='BD'>Bangladesh</option>
                  <option value='BB'>Barbados</option>
                  <option value='BY'>Belarus</option>
                  <option value='BE'>Belgium</option>
                  <option value='BZ'>Belize</option>
                  <option value='BJ'>Benin</option>
                  <option value='BM'>Bermuda</option>
                  <option value='BT'>Bhutan</option>
                  <option value='BO'>Bolivia, Plurinational State of</option>
                  <option value='BQ'>Bonaire, Sint Eustatius and Saba</option>
                  <option value='BA'>Bosnia and Herzegovina</option>
                  <option value='BW'>Botswana</option>
                  <option value='BV'>Bouvet Island</option>
                  <option value='BR'>Brazil</option>
                  <option value='IO'>British Indian Ocean Territory</option>
                  <option value='BN'>Brunei Darussalam</option>
                  <option value='BG'>Bulgaria</option>
                  <option value='BF'>Burkina Faso</option>
                  <option value='BI'>Burundi</option>
                  <option value='KH'>Cambodia</option>
                  <option value='CM'>Cameroon</option>
                  <option value='CA'>Canada</option>
                  <option value='CV'>Cape Verde</option>
                  <option value='KY'>Cayman Islands</option>
                  <option value='CF'>Central African Republic</option>
                  <option value='TD'>Chad</option>
                  <option value='CL'>Chile</option>
                  <option value='CN'>China</option>
                  <option value='CX'>Christmas Island</option>
                  <option value='CC'>Cocos (Keeling) Islands</option>
                  <option value='CO'>Colombia</option>
                  <option value='KM'>Comoros</option>
                  <option value='CG'>Congo</option>
                  <option value='CD'>Congo, the Democratic Republic of the</option>
                  <option value='CK'>Cook Islands</option>
                  <option value='CR'>Costa Rica</option>
                  <option value='CI'>Côte d'Ivoire</option>
                  <option value='HR'>Croatia</option>
                  <option value='CU'>Cuba</option>
                  <option value='CW'>Curaçao</option>
                  <option value='CY'>Cyprus</option>
                  <option value='CZ'>Czech Republic</option>
                  <option value='DK'>Denmark</option>
                  <option value='DJ'>Djibouti</option>
                  <option value='DM'>Dominica</option>
                  <option value='DO'>Dominican Republic</option>
                  <option value='EC'>Ecuador</option>
                  <option value='EG'>Egypt</option>
                  <option value='SV'>El Salvador</option>
                  <option value='GQ'>Equatorial Guinea</option>
                  <option value='ER'>Eritrea</option>
                  <option value='EE'>Estonia</option>
                  <option value='ET'>Ethiopia</option>
                  <option value='FK'>Falkland Islands (Malvinas)</option>
                  <option value='FO'>Faroe Islands</option>
                  <option value='FJ'>Fiji</option>
                  <option value='FI'>Finland</option>
                  <option value='FR'>France</option>
                  <option value='GF'>French Guiana</option>
                  <option value='PF'>French Polynesia</option>
                  <option value='TF'>French Southern Territories</option>
                  <option value='GA'>Gabon</option>
                  <option value='GM'>Gambia</option>
                  <option value='GE'>Georgia</option>
                  <option value='DE'>Germany</option>
                  <option value='GH'>Ghana</option>
                  <option value='GI'>Gibraltar</option>
                  <option value='GR'>Greece</option>
                  <option value='GL'>Greenland</option>
                  <option value='GD'>Grenada</option>
                  <option value='GP'>Guadeloupe</option>
                  <option value='GU'>Guam</option>
                  <option value='GT'>Guatemala</option>
                  <option value='GG'>Guernsey</option>
                  <option value='GN'>Guinea</option>
                  <option value='GW'>Guinea-Bissau</option>
                  <option value='GY'>Guyana</option>
                  <option value='HT'>Haiti</option>
                  <option value='HM'>Heard Island and McDonald Islands</option>
                  <option value='VA'>Holy See (Vatican City State)</option>
                  <option value='HN'>Honduras</option>
                  <option value='HK'>Hong Kong</option>
                  <option value='HU'>Hungary</option>
                  <option value='IS'>Iceland</option>
                  <option value='IN'>India</option>
                  <option value='ID'>Indonesia</option>
                  <option value='IR'>Iran, Islamic Republic of</option>
                  <option value='IQ'>Iraq</option>
                  <option value='IE'>Ireland</option>
                  <option value='IM'>Isle of Man</option>
                  <option value='IL'>Israel</option>
                  <option value='IT'>Italy</option>
                  <option value='JM'>Jamaica</option>
                  <option value='JP'>Japan</option>
                  <option value='JE'>Jersey</option>
                  <option value='JO'>Jordan</option>
                  <option value='KZ'>Kazakhstan</option>
                  <option value='KE'>Kenya</option>
                  <option value='KI'>Kiribati</option>
                  <option value='KP'>Korea, Democratic People's Republic of</option>
                  <option value='KW'>Kuwait</option>
                  <option value='KG'>Kyrgyzstan</option>
                  <option value='LA'>Lao People's Democratic Republic</option>
                  <option value='LV'>Latvia</option>
                  <option value='LB'>Lebanon</option>
                  <option value='LS'>Lesotho</option>
                  <option value='LR'>Liberia</option>
                  <option value='LY'>Libya</option>
                  <option value='LI'>Liechtenstein</option>
                  <option value='LT'>Lithuania</option>
                  <option value='LU'>Luxembourg</option>
                  <option value='MO'>Macao</option>
                  <option value='MK'>Macedonia, the former Yugoslav Republic of</option>
                  <option value='MG'>Madagascar</option>
                  <option value='MW'>Malawi</option>
                  <option value='MY'>Malaysia</option>
                  <option value='MV'>Maldives</option>
                  <option value='ML'>Mali</option>
                  <option value='MT'>Malta</option>
                  <option value='MH'>Marshall Islands</option>
                  <option value='MQ'>Martinique</option>
                  <option value='MR'>Mauritania</option>
                  <option value='MU'>Mauritius</option>
                  <option value='YT'>Mayotte</option>
                  <option value='MX'>Mexico</option>
                  <option value='FM'>Micronesia, Federated States of</option>
                  <option value='MD'>Moldova, Republic of</option>
                  <option value='MC'>Monaco</option>
                  <option value='MN'>Mongolia</option>
                  <option value='ME'>Montenegro</option>
                  <option value='MS'>Montserrat</option>
                  <option value='MA'>Morocco</option>
                  <option value='MZ'>Mozambique</option>
                  <option value='MM'>Myanmar</option>
                  <option value='NA'>Namibia</option>
                  <option value='NR'>Nauru</option>
                  <option value='NP'>Nepal</option>
                  <option value='NL'>Netherlands</option>
                  <option value='NC'>New Caledonia</option>
                  <option value='NZ'>New Zealand</option>
                  <option value='NI'>Nicaragua</option>
                  <option value='NE'>Niger</option>
                  <option value='NG'>Nigeria</option>
                  <option value='NU'>Niue</option>
                  <option value='NF'>Norfolk Island</option>
                  <option value='MP'>Northern Mariana Islands</option>
                  <option value='NO'>Norway</option>
                  <option value='OM'>Oman</option>
                  <option value='PK'>Pakistan</option>
                  <option value='PW'>Palau</option>
                  <option value='PS'>Palestinian Territory, Occupied</option>
                  <option value='PA'>Panama</option>
                  <option value='PG'>Papua New Guinea</option>
                  <option value='PY'>Paraguay</option>
                  <option value='PE'>Peru</option>
                  <option value='PH'>Philippines</option>
                  <option value='PN'>Pitcairn</option>
                  <option value='PL'>Poland</option>
                  <option value='PT'>Portugal</option>
                  <option value='PR'>Puerto Rico</option>
                  <option value='QA'>Qatar</option>
                  <option value='RE'>Réunion</option>
                  <option value='RO'>Romania</option>
                  <option value='RU'>Russian Federation</option>
                  <option value='RW'>Rwanda</option>
                  <option value='BL'>Saint Barthélemy</option>
                  <option value='SH'>Saint Helena, Ascension and Tristan da Cunha</option>
                  <option value='KN'>Saint Kitts and Nevis</option>
                  <option value='LC'>Saint Lucia</option>
                  <option value='MF'>Saint Martin (French part)</option>
                  <option value='PM'>Saint Pierre and Miquelon</option>
                  <option value='VC'>Saint Vincent and the Grenadines</option>
                  <option value='WS'>Samoa</option>
                  <option value='SM'>San Marino</option>
                  <option value='ST'>Sao Tome and Principe</option>
                  <option value='SA'>Saudi Arabia</option>
                  <option value='SN'>Senegal</option>
                  <option value='RS'>Serbia</option>
                  <option value='SC'>Seychelles</option>
                  <option value='SL'>Sierra Leone</option>
                  <option value='SG'>Singapore</option>
                  <option value='SX'>Sint Maarten (Dutch part)</option>
                  <option value='SK'>Slovakia</option>
                  <option value='SI'>Slovenia</option>
                  <option value='SB'>Solomon Islands</option>
                  <option value='SO'>Somalia</option>
                  <option value='ZA'>South Africa</option>
                  <option value='GS'>South Georgia and the South Sandwich Islands</option>
                  <option value='KR'>South Korea</option>
                  <option value='SS'>South Sudan</option>
                  <option value='ES'>Spain</option>
                  <option value='LK'>Sri Lanka</option>
                  <option value='SD'>Sudan</option>
                  <option value='SR'>Suriname</option>
                  <option value='SJ'>Svalbard and Jan Mayen</option>
                  <option value='SZ'>Swaziland</option>
                  <option value='SE'>Sweden</option>
                  <option value='CH'>Switzerland</option>
                  <option value='SY'>Syrian Arab Republic</option>
                  <option value='TW'>Taiwan, Province of China</option>
                  <option value='TJ'>Tajikistan</option>
                  <option value='TZ'>Tanzania, United Republic of</option>
                  <option value='TH'>Thailand</option>
                  <option value='TL'>Timor-Leste</option>
                  <option value='TG'>Togo</option>
                  <option value='TK'>Tokelau</option>
                  <option value='TO'>Tonga</option>
                  <option value='TT'>Trinidad and Tobago</option>
                  <option value='TN'>Tunisia</option>
                  <option value='TR'>Turkey</option>
                  <option value='TM'>Turkmenistan</option>
                  <option value='TC'>Turks and Caicos Islands</option>
                  <option value='TV'>Tuvalu</option>
                  <option value='UG'>Uganda</option>
                  <option value='UA'>Ukraine</option>
                  <option value='AE'>United Arab Emirates</option>
                  <option value='GB'>United Kingdom</option>
                  <option value='US'>United States</option>
                  <option value='UY'>Uruguay</option>
                  <option value='UZ'>Uzbekistan</option>
                  <option value='VU'>Vanuatu</option>
                  <option value='VE'>Venezuela, Bolivarian Republic of</option>
                  <option value='VN'>Vietnam</option>
                  <option value='VI'>Virgin Islands</option>
                  <option value='WF'>Wallis and Futuna</option>
                  <option value='EH'>Western Sahara</option>
                  <option value='YE'>Yemen</option>
                  <option value='ZM'>Zambia</option>
                  <option value='ZW'>Zimbabwe</option>
                </select>
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Gender</label>
              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid border fs-7 bg-body-secondary" aria-label="Select example">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Marital Status</label>
              <div className='col-lg-3 fv-row'>
              <select className="form-select form-select-solid border fs-7 bg-body-secondary" aria-label="Select example">
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
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Current Work Exp (Years) </label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>

            </div>

            <div className='row mb-1'>
              <label className='col-lg-2 col-form-label fw-bold fs-8 text-light-emphasis'>Pasport Exp Date</label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>

              <label className='col-lg-1'></label>

              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>ID/RC Exp Date</label>

              <div className='col-lg-3 fv-row'>
                <input
                      type='date'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0 fs-7 bg-body-secondary'
                      placeholder=''
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
                    />
              </div>

              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>India Phone no.</label>

              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
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
                    />
              </div>
              <label className='col-lg-1'></label>
              <label className='col-lg-3 col-form-label fw-bold fs-8 text-light-emphasis'>Emergency Number</label>
              <div className='col-lg-3 fv-row'>
              <input
                      type='number'
                      className='form-control form-control-lg form-control-solid fs-7 bg-body-secondary'
                      placeholder=''
                    />
              </div>
            </div>

            


        </div>
  )
}

export {Step1}
