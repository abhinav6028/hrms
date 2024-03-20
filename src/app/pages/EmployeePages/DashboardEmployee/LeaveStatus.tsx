import React, { useState } from 'react';
import { MixedWidget16 } from '../../../../_metronic/partials/widgets';

export function LeaveStatus() { 
    const [sickLeaveData, setSickLeaveData] = useState([
        { leaveType: 'Sick Leave', firstDay: '7/22/2023', returnDate: '8/22/2023' },
        { leaveType: 'Sick Leave', firstDay: '6/6/2023', returnDate: '8/22/2023' },
        { leaveType: 'Sick Leave', firstDay: '6/5/2023', returnDate: '8/22/2023' },
        { leaveType: 'Sick Leave', firstDay: '6/5/2023', returnDate: '8/22/2023' },
        { leaveType: 'Sick Leave', firstDay: '6/5/2023', returnDate: '8/22/2023' },
      ]);
      const [MaternityLeaveData, setMaternityLeaveData] = useState([
        { leaveType: 'Maternity Leave', firstDay: '7/22/2023', returnDate: '8/22/2023' },
        { leaveType: 'Maternity Leave', firstDay: '6/6/2023', returnDate: '8/22/2023' },
        { leaveType: 'Maternity Leave', firstDay: '6/5/2023', returnDate: '8/22/2023' },
        { leaveType: 'Maternity Leave', firstDay: '6/5/2023', returnDate: '8/22/2023' },
        { leaveType: 'Maternity Leave', firstDay: '6/5/2023', returnDate: '8/22/2023' },
      ]);

    return(
        <div className='accordion-item bg-transparent pb-2'>
        <div
          id='collapseExample3'
          className='accordion-collapse collapse'
          aria-labelledby='kt_accordion_header_3'
          data-bs-parent='#kt_accordion'
        >
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
                        <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
                          <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#Maternity_Leave_Dates_Table" role="button" aria-expanded="false" aria-controls="Maternity_Leave_Dates_Table">
                            <MixedWidget16
                              className='h-md-20 mb-5 mb-xl-10'
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
                        <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
                          <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#Paternity_Leave_Dates_Table" role="button" aria-expanded="false" aria-controls="Paternity_Leave_Dates_Table">
                            <MixedWidget16
                              className='h-md-20 mb-5 mb-xl-10'
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
                        <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
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
                        <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
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
                        <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
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
                        <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
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
                        <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
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
                        <div className='col-md-3 col-lg-3 col-xl-3 col-xxl-3'>
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

           
              <div className="d-md-flex justify-content-md-center">
                <div className="collapse w-50" id="Sick_Leave_Dates_Table">
                  <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300 bg-white gy-5 gs-7 shadow">
                    <thead>
                      <tr className="fw-bold fs-5 bg-primary rounded text-white">
                        <th><i className="bi bi-collection fs-3 me-2 svg-icon-muted text-white"></i>Leave Type</th>
                        <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>First day of Leave:</th>
                        <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Return to work date:</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sickLeaveData.map((item, index) => (
                        <tr key={index}>
                          <td className="text-primary fw-bold">{item.leaveType}</td>
                          <td className="text-primary fw-bold"><span className="badge badge-primary p-2">{item.firstDay}</span></td>
                          <td className="text-primary fw-bold"><span className="badge badge-light-primary p-2">{item.returnDate}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="d-md-flex justify-content-md-center">
                <div className="collapse w-50" id="Maternity_Leave_Dates_Table">
                  <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300 bg-white gy-5 gs-7 shadow">
                    <thead>
                      <tr className="fw-bold fs-5 bg-primary rounded text-white">
                        <th><i className="bi bi-collection fs-3 me-2 svg-icon-muted text-white"></i>Leave Type</th>
                        <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>First day of Leave:</th>
                        <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Return to work date:</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MaternityLeaveData.map((item, index) => (
                        <tr key={index}>
                          <td className="text-primary fw-bold">{item.leaveType}</td>
                          <td className="text-primary fw-bold"><span className="badge badge-primary p-2">{item.firstDay}</span></td>
                          <td className="text-primary fw-bold"><span className="badge badge-light-primary p-2">{item.returnDate}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

 
            </div>
          </div>
        </div>
      </div>
    );
  } 