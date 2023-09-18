import {FC, useMemo, useState} from 'react'
import { Box, IconButton } from '@mui/material';
import { Archive, Delete, Edit } from '@mui/icons-material';
import { KTSVG } from '../../../../_metronic/helpers';
import { TextField ,Autocomplete } from '@mui/material'



const EmployeeKPI :FC = () =>{
  const presentYear = new Date().getFullYear()
  const [year,setYear] = useState<number>(presentYear);

  const yearOptions = useMemo(() => {
    return ['2020','2021', '2022','2023','2024','2025']
  },[]);

    return <>

 <div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
                <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
                  <span className='fw-bold fs-6 text-gray-400'>Profile Compleation</span>
                  <span className='fw-bolder fs-6'>5/10</span>
                </div>
                <div className='h-5px mx-3 w-100 bg-body-secondary mb-3'>
                  <div
                    className='bg-primary rounded h-5px'
                    role='progressbar'
                    style={{width: '50%'}}
                  ></div>
                </div>
              </div>


<ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6">
  <li className="nav-item">
    <a
      className="nav-link active"
      data-bs-toggle="tab"
      href="#kt_tab_pane_4"
    >

     <a href="#" className="btn btn-flex btn-primary px-6">
  <span className="svg-icon svg-icon-2x"><i className="bi bi-question-square fs-2x px-5 svg-icon-muted text-white"></i></span>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-vertical me-5 h-50px w-3px text-white"></span>
  </li>
  <span className="d-flex flex-column align-items-start ms-2">
      <span className="fs-3 fw-bolder">KPI Question</span>
      <span className="fs-7"></span>
      <span className="badge badge-circle badge-danger">4</span>
  </span>
  </a>


    </a>
  </li>
  <li className="nav-item">
    <a
      className="nav-link"
      data-bs-toggle="tab"
      href="#kt_tab_pane_5"
    >
           <a href="#" className="btn btn-flex btn-primary px-6">
  <span className="svg-icon svg-icon-2x"><i className="bi bi-table fs-2x px-5 svg-icon-muted text-white"></i></span>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-vertical me-5 h-50px w-3px text-white"></span>
  </li>
  <span className="d-flex flex-column align-items-start ms-2">
      <span className="fs-3 fw-bolder">KPI Summary</span>
      <span className="fs-7"></span>
      <span className="badge badge-circle badge-danger">12</span>
  </span>
  </a>
    </a>
  </li>
</ul>

<div className="tab-content" id="myTabContent">
  <div
    className="tab-pane fade show active"
    id="kt_tab_pane_4"
    role="tabpanel"
  >
   


   <div className="alert alert-dismissible bg-warning-subtle d-flex flex-column flex-sm-row p-7 mb-15">
  <span className="svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0"><i className="bi bi-exclamation-triangle-fill fs-2hx px-5 svg-icon-muted text-warning"></i></span>
  <div className="d-flex flex-column text-primary pe-0 pe-sm-10">
    <h5 className="mb-1 text-primary">General questions Statement / Professional questions Statement</h5>
    <span>
    
    <br></br>
        <b>General questions Statement: </b> Key Performance Indicators (KPIs) serve as essential tools for achieving established targets, contributing to the growth of both the company and its employees. Ensuring honesty and ethical conduct is essential to foster a collaborative partnership that benefits both parties involved.
        <br></br>
        <b>Professional questions Statement:</b> The subsequent questions have been designed to accommodate to the unique requirements of each department/division. These questions facilitate effective communication and comprehension of employee expectations, supporting in the measurement of progress and recognition of challenges.
   

    
</span>
  </div>

  <button type="button" className="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
    <span className="svg-icon svg-icon-1 svg-icon-primary"><i className="bi bi-x fs-2hx px-5 svg-icon-muted text-black"></i></span>
  </button>
</div>


  
{/* General Question ***********************************************************************/}
  

    <table className="table table-rounded border border-gray-100 table-row-bordered table-row-gray-100  gy-5 gs-7 shadow" style={{background:"#e8e6e6"}}>
    <thead>
        <tr className="fw-bold fs-5 border-bottom border-gray-200 text-white" style={{background:"#2f574b"}}>

            <th><i className="bi bi-question-square-fill fs-2x px-5 svg-icon-muted text-white"></i>General Question </th>
            <th><i className="bi bi-star-fill fs-2x px-5 svg-icon-muted text-white"></i>My Rating</th>
            <th><i className="bi bi-card-text fs-2x px-5 svg-icon-muted text-white"></i>Comments</th>
           
            
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-primary fw-bold">Question 1</td>
            <td className="text-primary fw-bold">
            <div className="rating">
  <label
    className="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_input_0"
  >
    Reset
  </label>
  <input
    className="rating-input"
    name="rating"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_input_0"
  />
  <label className="rating-label" htmlFor="kt_rating_input_1">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="1"
    type="radio"
    id="kt_rating_input_1"
  />

  <label className="rating-label" htmlFor="kt_rating_input_2">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="2"
    type="radio"
    id="kt_rating_input_2"
  />

  <label className="rating-label" htmlFor="kt_rating_input_3">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="3"
    type="radio"
    id="kt_rating_input_3"
  />

  <label className="rating-label" htmlFor="kt_rating_input_4">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="4"
    type="radio"
    id="kt_rating_input_4"
  />

  <label className="rating-label" htmlFor="kt_rating_input_5">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="5"
    type="radio"
    id="kt_rating_input_5"
  />
</div>
  
</td>
            <td>


            <div className="mb-3 w-100">
            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
            </div>


           

            </td>
        </tr>
        <tr>
            <td className="text-primary fw-bold">Question 2</td>
            <td className="text-primary fw-bold">


            <div className="rating">
  <label
    className="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_input_0"
  >
    Reset
  </label>
  <input
    className="rating-input"
    name="rating"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_input_0"
  />
  <label className="rating-label" htmlFor="kt_rating_input_1">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="1"
    type="radio"
    id="kt_rating_input_1"
  />

  <label className="rating-label" htmlFor="kt_rating_input_2">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="2"
    type="radio"
    id="kt_rating_input_2"
  />

  <label className="rating-label" htmlFor="kt_rating_input_3">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="3"
    type="radio"
    id="kt_rating_input_3"
  />

  <label className="rating-label" htmlFor="kt_rating_input_4">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="4"
    type="radio"
    id="kt_rating_input_4"
  />

  <label className="rating-label" htmlFor="kt_rating_input_5">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="5"
    type="radio"
    id="kt_rating_input_5"
  />
</div>
            </td>

            <td>


            <div className="mb-3 w-100">
            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
            </div>


            </td> 
        </tr>
        
    </tbody>

{/* Professional Question ***********************************************************************/}
  


    <thead>
        <tr className="fw-bold fs-5 border-bottom border-gray-200 text-white" style={{background:"#2f574b"}}>
            <th><i className="bi bi-question-square-fill fs-2x px-5 svg-icon-muted text-white"></i>Professional Question</th>
            <th><i className="bi bi-star-fill fs-2x px-5 svg-icon-muted text-white"></i>My Rating</th>
            <th><i className="bi bi-card-text fs-2x px-5 svg-icon-muted text-white"></i>Comments</th>
           
            
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-primary fw-bold ">Question 1</td>
            <td className="text-primary fw-bold ">
            <div className="rating">
  <label
    className="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_input_0"
  >
    Reset
  </label>
  <input
    className="rating-input"
    name="rating"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_input_0"
  />
  <label className="rating-label" htmlFor="kt_rating_input_1">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="1"
    type="radio"
    id="kt_rating_input_1"
  />

  <label className="rating-label" htmlFor="kt_rating_input_2">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="2"
    type="radio"
    id="kt_rating_input_2"
  />

  <label className="rating-label" htmlFor="kt_rating_input_3">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="3"
    type="radio"
    id="kt_rating_input_3"
  />

  <label className="rating-label" htmlFor="kt_rating_input_4">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="4"
    type="radio"
    id="kt_rating_input_4"
  />

  <label className="rating-label" htmlFor="kt_rating_input_5">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="5"
    type="radio"
    id="kt_rating_input_5"
  />
</div>
  
</td>
            <td>


            <div className="mb-3 w-100">
            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
            </div>


           

            </td>
        </tr>
        <tr>
            <td className="text-primary fw-bold">Question 2</td>
            <td className="text-primary fw-bold">


            <div className="rating">
  <label
    className="btn btn-light fw-bolder btn-sm rating-label me-3"
    htmlFor="kt_rating_input_0"
  >
    Reset
  </label>
  <input
    className="rating-input"
    name="rating"
    value="0"
    checked={true}
    onChange={() => {}}
    type="radio"
    id="kt_rating_input_0"
  />
  <label className="rating-label" htmlFor="kt_rating_input_1">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="1"
    type="radio"
    id="kt_rating_input_1"
  />

  <label className="rating-label" htmlFor="kt_rating_input_2">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="2"
    type="radio"
    id="kt_rating_input_2"
  />

  <label className="rating-label" htmlFor="kt_rating_input_3">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="3"
    type="radio"
    id="kt_rating_input_3"
  />

  <label className="rating-label" htmlFor="kt_rating_input_4">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="4"
    type="radio"
    id="kt_rating_input_4"
  />

  <label className="rating-label" htmlFor="kt_rating_input_5">
    <KTSVG
      path="/media/icons/duotune/general/gen029.svg"
      className="svg-icon svg-icon-1"
    />
  </label>
  <input
    className="rating-input"
    name="rating"
    value="5"
    type="radio"
    id="kt_rating_input_5"
  />
</div>
            </td>

            <td>


            <div className="mb-3 w-100">
            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
            </div>


            </td>
            
        </tr>

        <tr>
          <td colSpan={3}>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button className="btn btn-sm" type="button" style={{background:"#255725" , color:"#fff"}}><i className="bi bi-file-earmark-arrow-up fs-1hx px-3 svg-icon-muted text-white"></i>Upload Excel </button>
       
          </div>
          </td>
        </tr>

    </tbody>


  </table>


  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <p className='text-danger'> currently the submit button is not available until it is enabled by the management </p>
  </div>
  <div className="d-grid gap-2 d-md-flex justify-content-md-end pb-20">
        <button className="btn btn-sm" type="button" style={{background:"#2f574b" , color:"#fff"}}><i className="bi bi-pencil-square fs-1hx px-3 svg-icon-muted text-white"></i>Edit</button>
        <button className="btn btn-sm" type="button" style={{background:"#2f574b" , color:"#fff"}}><i className="bi bi-box-arrow-down fs-1hx px-3 svg-icon-muted text-white"></i>Save</button>
        <button className="btn btn-sm" type="button" disabled style={{background:"#DF9B00" , color:"#fff"}}><i className="bi bi-send-fill fs-1hx px-3 svg-icon-muted text-white"></i>Submit</button>
       
  </div>
     
     
</div>







  
  <div className="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
   
  {/* KPI Employee Report Table ******************************************************************************************************************************************************/}

<div className="alert alert-dismissible bg-warning-subtle d-flex flex-column flex-sm-row p-7 mb-15">
  <span className="svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0"><i className="bi bi-exclamation-triangle-fill fs-2hx px-5 svg-icon-muted text-warning"></i></span>
  <div className="d-flex flex-column text-primary pe-0 pe-sm-10">
    <h5 className="mb-1 text-primary">KPI Report </h5>
    <span>
      At Tamimah, we hold high respect for individuals who display solid dedication and exceed their job responsibilities, thereby driving the company's development. For a clearer insight into KPI results, feel free to engage with your respective line manager. Exceptional performance is recognized at a rate of 75% and higher.
  </span>
  </div>

  <button type="button" className="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
    <span className="svg-icon svg-icon-1 svg-icon-primary"><i className="bi bi-x fs-2hx px-5 svg-icon-muted text-black"></i></span>
  </button>
</div>








<div className='row g-5 g-xl-8 mb-md-5 mb-xl-10'>
                <div className='col-md-12 col-xl-4'>
                    <div className='card h-md-100 mb-8'>
                        <div className='card-body'>
                        <h3 className='mb-5'>Enter the  year </h3>
                        <Autocomplete
                            disablePortal
                            fullWidth
                            id='yearField'
                            color="primary"
                            options={yearOptions}
                            onInputChange={(event, value) => {
                                setYear(parseInt(value ?? presentYear.toString()))
                            }}
                            onChange={(event,value) => {
                                setYear(parseInt(value ?? presentYear.toString()))
                            }}
                            classes={{
                                input: 'text-primary'
                            }}
                            renderInput={(params) => 
                                <TextField
                                {...params}
                                required
                                focused
                                label="Year"
                                />
                            }
                        />
                        </div>
                    </div>
                </div>
            </div>

            
<div className="d-grid gap-2 d-md-flex justify-content-md-end pb-2">
        <button className="btn btn-sm" type="button" style={{background:"#2f574b" , color:"#fff"}}><i className="bi bi-file-pdf-fill fs-2x svg-icon-muted text-white"></i>Print</button>
    </div>




<div className="p-5" style={{ overflowX: 'auto'}}>



<table className="table custom-table table-rounded border-3 border-gray-100 table table-bordered gy-5 gs-7 shadow" style={{background:"#e8e6e6" , width: "2400px"}}>
    <thead>
        <tr className="fw-bold fs-6 border-bottom border-gray-200 text-white bg-primary">
            <th className="KPIyear" colSpan={3} style={{background:"#2f574b"}}><span className='badge badge-light-success fs-6 fw-bold'> 2023 </span></th>
           
            <th colSpan={2} style={{background:"#DF9B00", color: "#2f574b"}}>Line Manager <i className="bi bi-1-square fs-2x px-2 svg-icon-muted" style={{color: "#2f574b"}}></i></th>
            <th colSpan={2} style={{background:"#DF9B00", color: "#2f574b"}}>Line Manager <i className="bi bi-2-square fs-2x px-2 svg-icon-muted" style={{color: "#2f574b"}}></i> </th>
            
        </tr>
        <tr className="fw-bold fs-6 border-bottom border-gray-200 text-white" style={{background:"#2f574b"}}>
            
            <th><i className="bi bi-question-square-fill fs-2x px-5 svg-icon-muted text-white"></i>Question</th>
            <th>My Rating</th>
            <th> Comments / Suggestions</th>
            <th> Rating </th>
            <th > Comments / Suggestions </th>
            <th> Rating </th>
            <th >Comments / Suggestions </th> 
           
        </tr>
        
    </thead>
    <tbody>
        <tr>
            <td className=" fw-bold" style={{width:"500px", color: "#2f574b"}} >What strategies have you employed to enhance your performance in these areas?</td>
            <td className="fw-bold">
            <div className="rating">
            <div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
  </div>
  
</td>
            <td  className="fw-bold" style={{width:"500px", color: "#2f574b"}}>


           I have no Comments


            </td>

            <td>

            <div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
            </td>

<td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>
Consistently exceeding expectations and delivering exceptional results, your performance sets an inspiring standard for excellence. 

</td>
            


            <td>
            <div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
            </td>


            <td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>
            Consistently exceeding expectations and delivering exceptional results, your performance sets an inspiring standard for excellence.
            </td>
        </tr>






        <tr>
            <td className=" fw-bold" style={{width:"500px", color: "#2f574b"}}>Can you share how you believe your current performance aligns with the company's objectives and KPIs?</td>
            <td className="text-primary fw-bold">
            <div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
            </td>

            <td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>


           I have no Comments


            </td>


{/* here */}
            <td>
           
  <div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>


            </td>

            <td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>


            has consistently demonstrated an exceptional commitment to achieving their key performance indicators. Their dedication to quality work, 
            proactive problem-solving, and effective collaboration has significantly contributed to our team's overall success. 


            </td>

<td>
<div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
</td>

<td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>
proactive approach to professional growth, along with their consistent achievements, exemplify their dedication to 
both personal development and the betterment of our organization.


</td>
            
        </tr>

        <tr className='text-success fw-bold gy-3'>
        <td colSpan={3}></td>
        <td colSpan={2}><span className='badge badge-light-success fs-6 fw-bold'>100%</span></td>
        <td colSpan={2}><span className='badge badge-light-success fs-6 fw-bold'>100%</span></td>
        
        </tr>


        

      <tr className='text-success fw-bold gy-1' style={{background:"#DF9B00"}}>
      <td colSpan={7}></td>
      </tr>


      <tr>
            <td className=" fw-bold" style={{width:"500px", color: "#2f574b"}} >What strategies have you employed to enhance your performance in these areas?</td>
            <td className="fw-bold">
            <div className="rating">
            <div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
  </div>
  
</td>
            <td  className="fw-bold" style={{width:"500px", color: "#2f574b"}}>


           I have no Comments


            </td>

            <td>

            <div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
            </td>

<td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>
Consistently exceeding expectations and delivering exceptional results, your performance sets an inspiring standard for excellence. 

</td>
            


            <td>
            <div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
            </td>


            <td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>
            Consistently exceeding expectations and delivering exceptional results, your performance sets an inspiring standard for excellence.
            </td>
        </tr>






        <tr>
            <td className=" fw-bold" style={{width:"500px", color: "#2f574b"}}>Can you share how you believe your current performance aligns with the company's objectives and KPIs?</td>
            <td className="text-primary fw-bold">
            <div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
            </td>

            <td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>


           I have no Comments


            </td>


{/* here */}
            <td>
           
  <div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>


            </td>

            <td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>


            has consistently demonstrated an exceptional commitment to achieving their key performance indicators. Their dedication to quality work, 
            proactive problem-solving, and effective collaboration has significantly contributed to our team's overall success. 


            </td>

<td>
<div className="rating">
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
    <div className="rating-label checked">
      <KTSVG
        path="/media/icons/duotune/general/gen029.svg"
        className="svg-icon svg-icon-1"
      />
    </div>
  </div>
</td>

<td className="fw-bold" style={{width:"500px", color: "#2f574b"}}>
proactive approach to professional growth, along with their consistent achievements, exemplify their dedication to 
both personal development and the betterment of our organization.


</td>
            
        </tr>

        <tr className='text-success fw-bold gy-3'>
        <td colSpan={3}></td>
        <td colSpan={2}><span className='badge badge-light-success fs-6 fw-bold'>100%</span></td>
        <td colSpan={2}><span className='badge badge-light-success fs-6 fw-bold'>100%</span></td>
        
        </tr>


    </tbody>

  </table>

</div>




  </div>
  
</div>












    </>
} 

export {EmployeeKPI}