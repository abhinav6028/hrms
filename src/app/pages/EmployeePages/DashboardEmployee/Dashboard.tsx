import {FC} from 'react'
import {checkIsActive, KTIcon, KTSVG, WithChildren} from '../../../../_metronic/helpers'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {PageTitle} from '../../../../_metronic/layout/core'
import {
  CardsWidget7,
  CardsWidget21,
  CardsWidget20,
  ListsWidget26,
  EngageWidget10,
  MixedWidget16,
} from '../../../../_metronic/partials/widgets'

import { Box, IconButton } from '@mui/material';
import { Archive, Delete, Edit, DocumentScanner } from '@mui/icons-material';

import {
  TablesWidget1,
  TablesWidget2,
  TablesWidget3,
  TablesWidget4,
  TablesWidget5,
  TablesWidget6,
  TablesWidget7,
  TablesWidget8,
  TablesWidget9,
  TablesWidget10,
  TablesWidget11,
  TablesWidget12,
  TablesWidget13,

} from '../../../../_metronic/partials/widgets'

const Dashboard :FC = () =>{
   

    return <>

    
<div className='row g-5 g-xl-10 d-flex align-items-stretch'>
      {/* begin::Col */} 
      <div className='col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-md-4 text-white'>
      <a className="text-white" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"> 
        <CardsWidget21
          className='h-md-30 mb-1 mb-xl-1 p-6 h-100'
          color='#6255a3'
          img={toAbsoluteUrl('/media/patterns/vector-1.png')}
          title='View All The Latest Announcements'
          description='Announcements'
          url='#'
        />
        </a>
      </div>

            {/* begin::Col */}
    <div className='col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-md-4 text-white'>
      <a className="text-white" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
        <CardsWidget21
          className='h-md-30 mb-1 mb-xl-1 p-6 h-100'
          color='#143983'
          img={toAbsoluteUrl('/media/patterns/vector-1.png')}
          title='View All Your Expired Documents'
          description='Expiring Documents'
          url='#'
        />
        </a>
      </div>
      
            {/* begin::Col */}
    <div className='col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-md-4 text-white'>
      <a className="text-white" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">
        <CardsWidget21
          className='h-md-30 mb-1 mb-xl-1 p-6 h-100' 
          color='#34a8cb'
          img={toAbsoluteUrl('/media/patterns/vector-1.png')}
          title='View All Your Leaves Status'
          description='Leave Status'
          url='#'
        />
        </a>
      </div>
  </div>


 
<div className="collapse pb-5" id="collapseExample">
 <div className="card borcard-borderedder  bg-primary-subtle">
  <div className="card-header ribbon ribbon-top ribbon-vertical">
    <div className="ribbon-label" style={{background: "#143983"}}>
      <i className="bi bi-megaphone-fill fs-1 text-white"></i>
    </div>
    <div className="card-title">
    <div className="card-toolbar pb-2">
          <ul className="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bold">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_7"
              >
                7/11/2023
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#kt_tab_pane_8"
              >
                 7/1/2023
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#kt_tab_pane_9"
              >
                 5/21/2023
              </a>
            </li>
          </ul>
        </div>
    </div>
  </div>
  <div className="card-body text-primary fw-bold">
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="kt_tab_pane_7"
            role="tabpanel"
          >
           Tamimah is an entrepreneurial company established in 1984 with its main subsidiaries, 
           Tamimah Consultancy Group, a pioneer in economics & financial consultancy in the Sultanate 
           of Oman and Tamimah Telecom & Computer Technology, a technology management company and specializing 
           in the core technologies of Mobile, Internet and Telecommunications.
          </div>
          <div
            className="tab-pane fade"
            id="kt_tab_pane_8"
            role="tabpanel"
          >
             Tamimah has the privilege of being the first Omani Company to provide IVR & SMS based Solutions in Oman. 
             Our burgeoning technology that is Information Technology is fueling IT needs of Oman by spreading the wings of technology.
          </div>
          <div
            className="tab-pane fade"
            id="kt_tab_pane_9"
            role="tabpanel"
          >
           Tamimah’s Software solution is now getting spread across the middle-east having it’s already presence in UAE and Qatar.
          </div>
        </div>
      </div> 
  </div>
</div>




    








<div className="collapse" id="collapseExample2">
  <div className="card card-body mb-2 text-dark bg-primary-subtle">
  <h6 className="card-title text-primary pt-5 px-5 fs-2"> </h6>       
     
<div className="card-body">
  <div className="tab-content" id="myTabContent">
    {/* begin::Row */}
       <div className='row g-2 g-xl-4 justify-content-md-center'>
      {/* begin::Col */}
      <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#6_months_EX_table" role="button" aria-expanded="false" aria-controls="6_months_EX_table">
      <MixedWidget16
          className='h-md-20 mb-5 mb-xl-10'
          chartProgressColor='#143983'
          chartTrackColor='#BFCAE2'
          chartHeight='250px'
          chartTitle='6-4 Months'
          chartCompleted='11'
          // chartTotal='7'
        />
      </a>
      {/* end::Col */}
      {/* begin::Col */}
      <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#3_months_EX_table" role="button" aria-expanded="false" aria-controls="3_months_EX_table">
        <MixedWidget16
          className='h-md-60 mb-5 mb-xl-10'
          chartProgressColor='#34a8cb'
          chartTrackColor='#C0DFE9'
          chartHeight='250px'
          chartTitle='3-2 Months'
          chartCompleted='10'
          // chartTotal='40'
        />
      </a>
      {/* end::Col */}
      {/* begin::Col */}
      <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#1_months_EX_table" role="button" aria-expanded="false" aria-controls="1_months_EX_table">
        <MixedWidget16
          className='h-md-60 mb-5 mb-xl-10'
          chartProgressColor='#6255a3'
          chartTrackColor='#D1CCEC'
          chartHeight='250px'
          chartTitle='1 Month'
          chartCompleted='6'
          // chartTotal='13'
        />
      </a>
      <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#0_months_EX_table" role="button" aria-expanded="false" aria-controls="0_months_EX_table">
        <MixedWidget16
          className='h-md-60 mb-5 mb-xl-10'
          chartProgressColor='#FF1931'
          chartTrackColor='#FEA2A2'
          chartHeight='250px'
          chartTitle='Alrady Expired'
          chartCompleted='2'
          // chartTotal='13'
        />
      </a>
  <br></br>
      
      
{/* documents expired in 6 months table */}
<div className="collapse" id="6_months_EX_table">   
  <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300  gy-5 gs-7 bg-white shadow">
    <thead>
        <tr className="fw-bold fs-5 border-bottom border-gray-200 bg-primary text-white">
            <th><i className="bi bi-person-fill fs-3 me-2 svg-icon-muted text-white"></i>Name</th>
            <th><i className="bi bi-file-earmark-fill fs-3 me-2 svg-icon-muted text-white"></i>Document Name</th>
            <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Expiration Date</th>
            <th><i className="bi bi-hourglass-top fs-3 me-2 svg-icon-muted text-white"></i>Expiration Status</th>
            <th style={{width:"15px"}}>View</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td className="text-primary fw-bold">Ali</td>
            <td className="text-primary fw-bold">Visa</td>
            <td className="text-primary fw-bold"><span className="badge badge-primary p-2">4/1/2023</span></td>
            <td className="text-primary fw-bold"><span className="badge badge-light-info p-2">Due in 101 Days</span></td>
            <td>
              <Box sx={{ justifyContent: 'center' }}>     
                        <IconButton
                            onClick={() => {   
                            }}
                        >
                           <DocumentScanner className='text-primary'/>
                        </IconButton> 
              </Box>
          </td>
        </tr>
        <tr>
        <td className="text-primary fw-bold">Sara</td>
            <td className="text-primary fw-bold">Passport</td>
            <td className="text-primary fw-bold"><span className="badge badge-primary p-2">4/2/2023</span></td>
            <td className="text-primary fw-bold"><span className="badge badge-light-info p-2">Due in 221 Days</span></td>
            <td className="">
              <Box sx={{ justifyContent: 'center' }}>
                        <IconButton
                            onClick={() => {
                                
                            }}
                        >
                           <DocumentScanner className='text-primary'/>
                        </IconButton> 
              </Box>
          </td>
        </tr>
    </tbody>
  </table>
</div>


{/* documents expired in 3 months table */}
<div className="collapse" id="3_months_EX_table">   
  <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300  gy-5 gs-7 bg-white shadow">
    <thead>
        <tr className="fw-bold fs-5 border-bottom border-gray-200 bg-primary text-white">
            <th><i className="bi bi-person-fill fs-3 me-2 svg-icon-muted text-white"></i>Name</th>
            <th><i className="bi bi-file-earmark-fill fs-3 me-2 svg-icon-muted text-white"></i>Document Name</th>
            <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Expiration Date</th>
            <th><i className="bi bi-hourglass-top fs-3 me-2 svg-icon-muted text-white"></i>Expiration Status</th>
            <th style={{width:"15px"}}>View</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td className="text-primary fw-bold">Ali</td>
            <td className="text-primary fw-bold">Visa</td>
            <td className="text-primary fw-bold"><span className="badge badge-primary p-2">4/1/2023</span></td>
            <td className="text-primary fw-bold"><span className="badge badge-light-info p-2">Due in 61 Days</span></td>
            <td>
              <Box sx={{ justifyContent: 'center' }}>     
                        <IconButton
                            onClick={() => {   
                            }}
                        >
                           <DocumentScanner className='text-primary'/>
                        </IconButton> 
              </Box>
          </td>
        </tr>
        <tr>
        <td className="text-primary fw-bold">Sara</td>
            <td className="text-primary fw-bold">Passport</td>
            <td className="text-primary fw-bold"><span className="badge badge-primary p-2">4/2/2023</span></td>
            <td className="text-primary fw-bold"><span className="badge badge-light-info p-2">Due in 61 Days</span></td>
            <td className="">
              <Box sx={{ justifyContent: 'center' }}>
                        <IconButton
                            onClick={() => {
                                
                            }}
                        >
                           <DocumentScanner className='text-primary'/>
                        </IconButton> 
              </Box>
          </td>
        </tr>
    </tbody>
  </table>
</div>


{/* documents expired in 1 month table */}
<div className="collapse" id="1_months_EX_table">   
  <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300  gy-5 gs-7 bg-white shadow">
    <thead>
        <tr className="fw-bold fs-5 border-bottom border-gray-200 bg-primary text-white">
            <th><i className="bi bi-person-fill fs-3 me-2 svg-icon-muted text-white"></i>Name</th>
            <th><i className="bi bi-file-earmark-fill fs-3 me-2 svg-icon-muted text-white"></i>Document Name</th>
            <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Expiration Date</th>
            <th><i className="bi bi-hourglass-top fs-3 me-2 svg-icon-muted text-white"></i>Expiration Status</th>
            <th style={{width:"15px"}}>View</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td className="text-primary fw-bold">Ali</td>
            <td className="text-primary fw-bold">Visa</td>
            <td className="text-primary fw-bold"><span className="badge badge-primary p-2">10/1/2023</span></td>
            <td className="text-primary fw-bold"><span className="badge badge-light-info p-2">Due in 30 Days</span></td>
            <td>
              <Box sx={{ justifyContent: 'center' }}>     
                        <IconButton
                            onClick={() => {   
                            }}
                        >
                           <DocumentScanner className='text-primary'/>
                        </IconButton> 
              </Box>
          </td>
        </tr>
        <tr>
        <td className="text-primary fw-bold">Sara</td>
            <td className="text-primary fw-bold">Passport</td>
            <td className="text-primary fw-bold"><span className="badge badge-primary p-2">10/6/2023</span></td>
            <td className="text-primary fw-bold"><span className="badge badge-light-info p-2">Due in 31 Days</span></td>
            <td className="">
              <Box sx={{ justifyContent: 'center' }}>
                        <IconButton
                            onClick={() => {
                                
                            }}
                        >
                           <DocumentScanner className='text-primary'/>
                        </IconButton> 
              </Box>
          </td>
        </tr>
    </tbody>
  </table>
</div>
    
{/* documents already have expired  */}

<div className="collapse" id="0_months_EX_table">   
  <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300  gy-5 gs-7 bg-white shadow">
    <thead>
        <tr className="fw-bold fs-5 border-bottom border-gray-200 bg-danger text-white">
            <th><i className="bi bi-person-fill fs-3 me-2 svg-icon-muted text-white"></i>Name</th>
            <th><i className="bi bi-file-earmark-fill fs-3 me-2 svg-icon-muted text-white"></i>Document Name</th>
            <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Expiration Date</th>
            <th><i className="bi bi-hourglass-top fs-3 me-2 svg-icon-muted text-white"></i>Expiration Status</th>
            <th style={{width:"15px"}}>View</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td className="text-danger fw-bold">Ali</td>
            <td className="text-danger fw-bold">Visa</td>
            <td className="fw-bold"><span className="badge badge-danger p-2">1/1/2023</span></td>
            <td className="fw-bold"><span className="badge badge-light-danger p-2">Due in 0 Days</span></td>
            <td>
              <Box sx={{ justifyContent: 'center' }}>     
                        <IconButton
                            onClick={() => {   
                            }}
                        >
                           <DocumentScanner className='text-danger'/>
                        </IconButton> 
              </Box>
          </td>
        </tr>
        <tr>
        <td className="text-danger fw-bold">Sara</td>
            <td className="text-danger fw-bold">Passport</td>
            <td className=" fw-bold"><span className="badge badge-danger p-2">2/2/2023</span></td>
            <td className="fw-bold"><span className="badge badge-light-danger p-2">Due in 0 Days</span></td>
            <td className="">
              <Box sx={{ justifyContent: 'center' }}>
                        <IconButton
                            onClick={() => {
                                
                            }}
                        >
                           <DocumentScanner className='text-danger'/>
                        </IconButton> 
              </Box>
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
        

    




{/*     leave status     */}

<div className="collapse" id="collapseExample3">
  <div className="card card-body mb-2 bg-primary-subtle">
      <div className="card-body">
        <div className="tab-content" id="myTabContent">
          <div id="carouselExampleControlsNoTouching" className=" carousel carousel-dark slide " data-bs-touch="false">
          <div className="carousel-inner pt-5 ">
            <div className="carousel-item active bg-transparent">
              <br></br>
              {/* begin::Row */}
              <div className='row g-2 g-xl-4 justify-content-md-center'>
              {/* begin::Col */}
              <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
              <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#Sick_Leave_Dates_Table" role="button" aria-expanded="false" aria-controls="Sick_Leave_Dates_Table">
                <MixedWidget16
                  className='h-md-20 mb-5 mb-xl-10'
                  chartProgressColor='#143983'
                  chartTrackColor='#BFCAE2'
                  chartHeight='250px'
                  chartTitle='Sick Leave'
                  chartCompleted='3'
                  chartTotal='7'
                /> 
                </a>
              </div>
              {/* end::Col */}
              {/* begin::Col */}
              <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-2'>
              <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#Maternity_Leave_Dates_Table" role="button" aria-expanded="false" aria-controls="Maternity_Leave_Dates_Table">
                <MixedWidget16
                  className='h-md-60 mb-5 mb-xl-10'
                  chartProgressColor='#34a8cb'
                  chartTrackColor='#C0DFE9'
                  chartHeight='250px'
                  chartTitle='Maternity Leave'
                  chartCompleted='10'
                  chartTotal='40'
                />
                </a>
              </div>
              {/* end::Col */}
              {/* begin::Col */}
              <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-2'>
              <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#Paternity_Leave_Dates_Table" role="button" aria-expanded="false" aria-controls="Paternity_Leave_Dates_Table">
                <MixedWidget16
                  className='h-md-60 mb-5 mb-xl-10'
                  chartProgressColor='#6255a3'
                  chartTrackColor='#D1CCEC'
                  chartHeight='250px'
                  chartTitle='Paternity Leave'
                  chartCompleted='10'
                  chartTotal='13'
                />
                </a>
              </div>
              {/* end::Col */}
            </div>
            </div>
            <div className="carousel-item">
                {/* begin::Row */}
                <div className='row g-2 g-xl-4 justify-content-md-center'>
            
              {/* begin::Col */}
              <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-2'>
              <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#Emergency_Leave_Dates_Table" role="button" aria-expanded="false" aria-controls="Emergency_Leave_Dates_Table">
                <MixedWidget16
                  className='h-md-60 mb-5 mb-xl-10'
                  chartProgressColor='#B24C37'
                  chartTrackColor='#ECA191'
                  chartHeight='250px'
                  chartTitle='Emergency Leave'
                  chartCompleted='36'
                  chartTotal='50'
                />
                </a>
              </div>
              {/* end::Col */}
              {/* begin::Col */}
              <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-2'>
              <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#Hajj_Leave_Dates_Table" role="button" aria-expanded="false" aria-controls="Hajj_Leave_Dates_Table">
                <MixedWidget16
                  className='h-md-60 mb-5 mb-xl-10'
                  chartProgressColor='#ED62E2'
                  chartTrackColor='#FFA7F8'
                  chartHeight='250px'
                  chartTitle='Hajj Leave'
                  chartCompleted='9'
                  chartTotal='13'
                />
                </a>
              </div>
              {/* end::Col */}

              {/* begin::Col */}
              <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-2'>
              <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#Marriage_Leave_Dates_Table" role="button" aria-expanded="false" aria-controls="Marriage_Leave_Dates_Table">
                <MixedWidget16
                  className='h-md-60 mb-5 mb-xl-10'
                  chartProgressColor='#355e3b'
                  chartTrackColor='#addfad'
                  chartHeight='250px'
                  chartTitle='Marriage Leave'
                  chartCompleted='16'
                  chartTotal='30'
                />
                </a>
              </div>
              {/* end::Col */}
            </div>
            </div>
            <div className="carousel-item">
              {/* begin::Row */}
              <div className='row g-2 g-xl-4 justify-content-md-center'>
              {/* begin::Col */}
              <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-2'>
              <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#Annual_Leave_Dates_Table" role="button" aria-expanded="false" aria-controls="Annual_Leave_Dates_Table">
                <MixedWidget16
                  className='h-md-20 mb-5 mb-xl-10'
                  chartProgressColor='#FFC300'
                  chartTrackColor='#FFDF75'
                  chartHeight='250px'
                  chartTitle='Annual Leave'
                  chartCompleted='6'
                  chartTotal='7'
                />
                </a>
              </div>
              {/* end::Col */}
            
              {/* begin::Col */}
              <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-2'>
              <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#Unpaid_Leave_Dates_Table" role="button" aria-expanded="false" aria-controls="Unpaid_Leave_Dates_Table">
                <MixedWidget16
                  className='h-md-60 mb-5 mb-xl-10'
                  chartProgressColor='#5A7FFF'
                  chartTrackColor='#B7C7FF'
                  chartHeight='250px'
                  chartTitle='Unpaid Leave'
                  chartCompleted='2'
                  chartTotal='5'
                />
                </a>
              </div>
              {/* end::Col */}

              {/* begin::Col */}
              <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-2'>
              <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#Additional_Leave_Dates_Table" role="button" aria-expanded="false" aria-controls="Additional_Leave_Dates_Table">
                <MixedWidget16
                  className='h-md-60 mb-5 mb-xl-10'
                  chartProgressColor='#FC3C85'
                  chartTrackColor='#FFC0D8'
                  chartHeight='250px'
                  chartTitle='Additional Leave'
                  chartCompleted='16'
                  chartTotal='25'
                />
                </a>
              </div>
              {/* end::Col */}
            </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <div className='card p-3'>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </div>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <div className='card p-3'>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </div>
          </button>
        </div>
        </div>

        {/* Sick_Leave_Dates_Table */}
        <div className="d-md-flex justify-content-md-center" >  
          <div className="collapse w-50" id="Sick_Leave_Dates_Table">   
            <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300 bg-white gy-5 gs-7 shadow">
            <thead>
              <tr className="fw-bold fs-5 bg-primary rounded text-white">
              <th><i className="bi bi-collection fs-3 me-2 svg-icon-muted text-white"></i>Leave Type</th>   
              <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Leave Dates</th>       
              </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="text-primary fw-bold" > Sick Leave</td>
                      <td className="text-primary fw-bold" > <span className="badge badge-primary p-2">7/22/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Sick Leave</td>
                      <td className="text-primary fw-bold" > <span className="badge badge-primary p-2">6/6/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Sick Leave</td>
                      <td className="text-primary fw-bold" ><span className="badge badge-primary p-2"> 6/5/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Sick Leave</td>
                      <td className="text-primary fw-bold" ><span className="badge badge-primary p-2"> 6/5/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Sick Leave</td>
                      <td className="text-primary fw-bold" ><span className="badge badge-primary p-2"> 6/5/2023</span></td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Maternity_Leave_Dates_Table */}
        <div className="d-md-flex justify-content-md-center" >  
          <div className="collapse w-50" id="Maternity_Leave_Dates_Table">   
            <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300 gy-5 gs-7 bg-white shadow">
            <thead>
              <tr className="fw-bold fs-5 border-bottom border-gray-200 bg-primary text-white">
              <th><i className="bi bi-collection fs-3 me-2 svg-icon-muted text-white"></i>Leave Type</th>   
              <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Leave Dates</th>       
              </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="text-primary fw-bold" > Maternity Leave</td>
                      <td className="text-primary fw-bold" > <span className="badge badge-primary p-2">7/22/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Maternity Leave</td>
                      <td className="text-primary fw-bold" > <span className="badge badge-primary p-2">6/6/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Maternity Leave</td>
                      <td className="text-primary fw-bold" ><span className="badge badge-primary p-2"> 6/5/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Maternity Leave</td>
                      <td className="text-primary fw-bold" ><span className="badge badge-primary p-2"> 6/5/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Maternity Leave</td>
                      <td className="text-primary fw-bold" ><span className="badge badge-primary p-2"> 6/5/2023</span></td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Paternity_Leave_Dates_Table */}
        <div className="d-md-flex justify-content-md-center" >  
          <div className="collapse w-50" id="Paternity_Leave_Dates_Table">   
            <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300 gy-5 gs-7 bg-white shadow">
            <thead>
              <tr className="fw-bold fs-5 border-bottom border-gray-200 bg-primary text-white">
              <th><i className="bi bi-collection fs-3 me-2 svg-icon-muted text-white"></i>Leave Type</th>   
              <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Leave Dates</th>       
              </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="text-primary fw-bold" > Paternity Leave</td>
                      <td className="text-primary fw-bold" > <span className="badge badge-primary p-2">7/22/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Paternity Leave</td>
                      <td className="text-primary fw-bold" > <span className="badge badge-primary p-2">6/6/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Paternity Leave</td>
                      <td className="text-primary fw-bold" ><span className="badge badge-primary p-2"> 6/5/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Paternity Leave</td>
                      <td className="text-primary fw-bold" ><span className="badge badge-primary p-2"> 6/5/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Paternity Leave</td>
                      <td className="text-primary fw-bold" ><span className="badge badge-primary p-2"> 6/5/2023</span></td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Emergency_Leave_Dates_Table */}
        <div className="d-md-flex justify-content-md-center" >  
          <div className="collapse w-50" id="Emergency_Leave_Dates_Table">   
            <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300 gy-5 gs-7 bg-white shadow">
            <thead>
              <tr className="fw-bold fs-5 border-bottom border-gray-200 bg-primary text-white">
              <th><i className="bi bi-collection fs-3 me-2 svg-icon-muted text-white"></i>Leave Type</th>   
              <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Leave Dates</th>       
              </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className="text-primary fw-bold" > Emergency Leave</td>
                      <td className="text-primary fw-bold" > <span className="badge badge-primary p-2">7/22/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Emergency Leave</td>
                      <td className="text-primary fw-bold" > <span className="badge badge-primary p-2">6/6/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Emergency Leave</td>
                      <td className="text-primary fw-bold" ><span className="badge badge-primary p-2"> 6/5/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Emergency Leave</td>
                      <td className="text-primary fw-bold" ><span className="badge badge-primary p-2"> 6/5/2023</span></td>
                  </tr>
                  <tr>
                      <td className="text-primary fw-bold" > Emergency Leave</td>
                      <td className="text-primary fw-bold" ><span className="badge badge-primary p-2"> 6/5/2023</span></td>
                  </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div> 
  </div>
</div>

      

   

    
 </>
;
    
   
} 

export {Dashboard}