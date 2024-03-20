import { MixedWidget16 } from '../../../../_metronic/partials/widgets'
import { Box, IconButton } from '@mui/material';
import { DocumentScanner } from '@mui/icons-material';


export function EXPdocuments() {
    return (
        <div className='accordion-item bg-transparent'>
            <div
                id='collapseExample2'
                className='accordion-collapse collapse'
                aria-labelledby='kt_accordion_header_2'
                data-bs-parent='#kt_accordion'
            >
                <div className="card card-body mb-2 text-dark bg-primary-subtle">

                    <div className="card-body">
                        <div className="tab-content" id="myTabContent">
                            <div className='row g-2 g-xl-4 justify-content-md-center'>
                                <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#6_months_EX_table" role="button" aria-expanded="false" aria-controls="6_months_EX_table" data-bs-target="#6_months_EX_table">
                                    <MixedWidget16
                                        className='h-md-20'
                                        chartProgressColor='#143983'
                                        chartTrackColor='#BFCAE2'
                                        chartHeight='250px'
                                        chartTitle='6-4 Months'
                                        chartCompleted='11'
                                    // chartTotal='7'
                                    />
                                </a>
                                <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#6_months_EX_table" role="button" aria-expanded="false" aria-controls="3_months_EX_table" data-bs-target="#3_months_EX_table">
                                    <MixedWidget16
                                        className='h-md-60'
                                        chartProgressColor='#34a8cb'
                                        chartTrackColor='#C0DFE9'
                                        chartHeight='250px'
                                        chartTitle='3-2 Months'
                                        chartCompleted='10'
                                    // chartTotal='40'
                                    />
                                </a>
                                <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#6_months_EX_table" role="button" aria-expanded="false" aria-controls="1_months_EX_table" data-bs-target="#1_months_EX_table">
                                    <MixedWidget16
                                        className='h-md-60'
                                        chartProgressColor='#6255a3'
                                        chartTrackColor='#D1CCEC'
                                        chartHeight='250px'
                                        chartTitle='1 Month'
                                        chartCompleted='6'
                                    // chartTotal='13'
                                    />
                                </a>
                                <a className="col-md-3 col-lg-3 col-xl-3 col-xxl-3" data-bs-toggle="collapse" href="#0_months_EX_table" role="button" aria-expanded="false" aria-controls="6_months_EX_table" data-bs-target="#0_months_EX_table">
                                    <MixedWidget16
                                        className='h-md-60'
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

                                <div className='accordion accordion-borderless' id='kt_accordion2'>
                                    {/* Accordion Item 1 */}
                                    <div className='accordion-item bg-transparent'>
                                        <div id='6_months_EX_table' className='accordion-collapse collapse' aria-labelledby='kt_accordion2_header_1' data-bs-parent='#kt_accordion2'>

                                            <p className="text-black-50 mb-5 mt-2 fw-bold"><i className="bi bi-dot fs-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Documents That Will Expire Within 6 - 4 Months</p>

                                            <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300 gy-5 gs-7 bg-white shadow">
                                                <thead>
                                                    <tr className="fw-bold fs-5 border-bottom border-gray-200 bg-primary text-white">
                                                        <th><i className="bi bi-person-fill fs-3 me-2 svg-icon-muted text-white"></i>Name</th>
                                                        <th><i className="bi bi-file-earmark-fill fs-3 me-2 svg-icon-muted text-white"></i>Document Name</th>
                                                        <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Expiration Date</th>
                                                        <th><i className="bi bi-hourglass-top fs-3 me-2 svg-icon-muted text-white"></i>Expiration Status</th>
                                                        <th style={{ width: "15px" }}>View</th>
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
                                                                    <DocumentScanner className='text-primary' />
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
                                                                    <DocumentScanner className='text-primary' />
                                                                </IconButton>
                                                            </Box>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* documents expired in 3 months table */}
                                    <div className='accordion-item bg-transparent'>
                                        <div id='3_months_EX_table' className='accordion-collapse collapse' aria-labelledby='kt_accordion2_header_1' data-bs-parent='#kt_accordion2'>
                                            <p className="text-black-50 mb-5  mt-2 fw-bold"><i className="bi bi-dot fs-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Documents That Will Expire Within 3 - 2 Months</p>

                                            <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300  gy-5 gs-7 bg-white shadow">
                                                <thead>
                                                    <tr className="fw-bold fs-5 border-bottom border-gray-200 bg-primary text-white">
                                                        <th><i className="bi bi-person-fill fs-3 me-2 svg-icon-muted text-white"></i>Name</th>
                                                        <th><i className="bi bi-file-earmark-fill fs-3 me-2 svg-icon-muted text-white"></i>Document Name</th>
                                                        <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Expiration Date</th>
                                                        <th><i className="bi bi-hourglass-top fs-3 me-2 svg-icon-muted text-white"></i>Expiration Status</th>
                                                        <th style={{ width: "15px" }}>View</th>
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
                                                                    <DocumentScanner className='text-primary' />
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
                                                                    <DocumentScanner className='text-primary' />
                                                                </IconButton>
                                                            </Box>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>


                                    {/* documents expired in 1 month table */}
                                    <div className='accordion-item bg-transparent'>
                                        <div id='1_months_EX_table' className='accordion-collapse collapse' aria-labelledby='kt_accordion2_header_1' data-bs-parent='#kt_accordion2'>
                                            <p className="text-black-50 mb-5 mt-2 fw-bold"><i className="bi bi-dot fs-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Documents That Will Expire Within 1 Month</p>

                                            <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300  gy-5 gs-7 bg-white shadow">
                                                <thead>
                                                    <tr className="fw-bold fs-5 border-bottom border-gray-200 bg-primary text-white">
                                                        <th><i className="bi bi-person-fill fs-3 me-2 svg-icon-muted text-white"></i>Name</th>
                                                        <th><i className="bi bi-file-earmark-fill fs-3 me-2 svg-icon-muted text-white"></i>Document Name</th>
                                                        <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Expiration Date</th>
                                                        <th><i className="bi bi-hourglass-top fs-3 me-2 svg-icon-muted text-white"></i>Expiration Status</th>
                                                        <th style={{ width: "15px" }}>View</th>
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
                                                                    <DocumentScanner className='text-primary' />
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
                                                                    <DocumentScanner className='text-primary' />
                                                                </IconButton>
                                                            </Box>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* documents already have expired  */}

                                    <div className='accordion-item bg-transparent'>
                                        <div id='0_months_EX_table' className='accordion-collapse collapse' aria-labelledby='kt_accordion2_header_1' data-bs-parent='#kt_accordion2'>
                                            <p className="text-black-50 mb-5 mt-2 fw-bold"><i className="bi bi-dot fs-2 svg-icon-muted text-black-50"></i>  {/* icon  */} Documents That Have Already Expired</p>

                                            <table className="table table-rounded border border-gray-300 table-row-bordered table-row-gray-300  gy-5 gs-7 bg-white shadow">
                                                <thead>
                                                    <tr className="fw-bold fs-5 border-bottom border-gray-200 bg-danger text-white">
                                                        <th><i className="bi bi-person-fill fs-3 me-2 svg-icon-muted text-white"></i>Name</th>
                                                        <th><i className="bi bi-file-earmark-fill fs-3 me-2 svg-icon-muted text-white"></i>Document Name</th>
                                                        <th><i className="bi bi-calendar2-day-fill fs-3 me-2 svg-icon-muted text-white"></i>Expiration Date</th>
                                                        <th><i className="bi bi-hourglass-top fs-3 me-2 svg-icon-muted text-white"></i>Expiration Status</th>
                                                        <th style={{ width: "15px" }}>View</th>
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
                                                                    <DocumentScanner className='text-danger' />
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
                                                                    <DocumentScanner className='text-danger' />
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
                </div>
            </div>

        </div>
    );
}
