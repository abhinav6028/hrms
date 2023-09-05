import {FC} from 'react'
import { Box, IconButton } from '@mui/material';
import { Archive, Delete, Edit } from '@mui/icons-material';
import { KTSVG } from '../../../../_metronic/helpers';


const KPIQuestions :FC = () =>{
    return <>
    

      

  
<h1 className="pb-10 text-primary"><i className="bi bi-file-earmark-plus-fill fs-2hx px-1 svg-icon-muted text-primary"></i>  Save / Add Question</h1>



<table className="table table-rounded border border-gray-100 table-row-bordered table-row-gray-100  gy-5 gs-7 shadow" style={{background:"#e8e6e6"}}>
<thead>
    <tr className="fw-bold fs-5 border-bottom border-gray-200 text-white bg-primary">

        <th style={{width: "240px"}}><i className="bi bi-question-square-fill fs-2x px-5 svg-icon-muted text-white"></i>Question Type </th>
        <th colSpan={2}><i className="bi bi-check-square-fill fs-2x px-5 svg-icon-muted text-white"></i>Divition Type </th>
        <th><i className="bi bi-card-text fs-2x px-5 svg-icon-muted text-white"></i>Question Content</th>
       
        
    </tr>
</thead>
<tbody>
    <tr>
        <td className="text-primary fw-bold">
        
            <select className="form-select text-white fs-7 bg-primary fw-bold" aria-label="Default select example">
            <option className="fw-bold p-10" value="General Question" selected>General Question</option>
            <option className="fw-bold p-10" value="Professional Question">Professional Question</option>
            </select>
        
        </td>

        <td className="text-primary fw-bold">


            {/* **Admin** */}
            <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Admin" id="Admin" />
                <label className="form-check-label text-primary" htmlFor="Admin">
                Admin
                </label>
            </div>

             {/* **Finance** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Finance" id="Finance" />
                <label className="form-check-label text-primary" htmlFor="Finance">
                Finance
                </label>
            </div>

            
             {/* **Accounts** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Accounts" id="Accounts" />
                <label className="form-check-label text-primary" htmlFor="Accounts">
                Accounts
                </label>
            </div>

            
             {/* **HR** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="HR" id="HR" />
                <label className="form-check-label text-primary" htmlFor="HR">
                HR
                </label>
            </div>

            
             {/* **Mass support** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Mass support" id="Mass support" />
                <label className="form-check-label text-primary" htmlFor="Mass support">
                Mass support
                </label>
            </div>


            
             {/* **Public relation Officer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Public relation Officer" id="Public relation Officer" />
                <label className="form-check-label text-primary" htmlFor="Public relation Officer">
                Public relation Officer
                </label>
            </div>

            
             {/* **Software Engineer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Software Engineer" id="Software Engineer" />
                <label className="form-check-label text-primary" htmlFor="Software Engineer">
                Software Engineer
                </label>
            </div>

            
             {/* **Project Management** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Project Management" id="Project Management" />
                <label className="form-check-label text-primary" htmlFor="Project Management">
                Project Management
                </label>
            </div>

            </td>

            <td className="text-primary fw-bold">
             {/* **Support Engineer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Support Engineer" id="Support Engineer" />
                <label className="form-check-label text-primary" htmlFor="Support Engineer">
                Support Engineer
                </label>
            </div>

            
             {/* **Software Developer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Software Developer" id="Software Developer" />
                <label className="form-check-label text-primary" htmlFor="Software Developer">
                Software Developer
                </label>
            </div>


             {/* **Programmer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Programmer" id="Programmer" />
                <label className="form-check-label text-primary" htmlFor="Programmer">
                Programmer
                </label>
            </div>

            
             {/* **Data Entry** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Data Entry" id="Data Entry" />
                <label className="form-check-label text-primary" htmlFor="Data Entry">
                Data Entry
                </label>
            </div>

            
             {/* **Digital Marketing** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Digital Marketing" id="Digital Marketing" />
                <label className="form-check-label text-primary" htmlFor="Digital Marketing">
                Digital Marketing
                </label>
            </div>

            
             {/* **Sales** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Sales" id="Sales" />
                <label className="form-check-label text-primary" htmlFor="Sales">
                Sales
                </label>
            </div>

            
             {/* **Graphic Designer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Graphic Designer" id="Graphic Designer" />
                <label className="form-check-label text-primary" htmlFor="Graphic Designer">
                Graphic Designer
                </label>
            </div>
                
        </td>

        <td className="text-primary fw-bold">
        
        <div className="mb-3 w-100">
        <textarea className="form-control" id="exampleFormControlTextarea1" style={{height: "180px"}}></textarea>
        </div>

        </td>


    </tr>
    
</tbody>


</table>



<div className="d-grid gap-2 d-md-flex justify-content-md-end pb-20" >
    <button className="btn btn-sm bg-primary text-white" type="button"><i className="bi bi-check-circle-fill fs-2 svg-icon-muted text-white me-3"></i>Save</button>
</div>
 


{/* All Questions Details **************************************************************************************************************************************************
********************************************************************************************************************************************************************************/}
  
<h1 className="pb-10 text-primary"><i className="bi bi-file-earmark-bar-graph-fill fs-2hx px-1 svg-icon-muted text-primary"></i>  All Question Details</h1>


<div className="d-grid gap-2 d-md-flex justify-content-md-end" >
    <button className="btn btn-sm bg-primary text-white" type="button"><i className="bi bi-check-circle-fill fs-2 svg-icon-muted text-white me-3"></i>Save</button>
</div>

<table className="table table-rounded border border-gray-100 table-row-bordered table-row-gray-100  gy-5 gs-7 shadow" style={{background:"#e8e6e6"}}>
<thead>

    <tr className="fw-bold fs-5 border-bottom border-gray-200 text-white bg-primary">


        <th style={{width: "20px"}}> no. </th>

        <th colSpan={3}>
        
            <select className="form-select text-white fs-7 bg-primary fw-bold" aria-label="Default select example"  style={{width: "200px"}}>
            <option className="fw-bold" value="General Question" style={{padding: "200px", height: "200px"}}>General Question</option>
            <option className="fw-bold" value="Professional Question" style={{padding: "200px", height: "200px"}}>Professional Question</option>
            </select>
      
        </th>
        <th></th>
       
       
        
    </tr>
</thead>
<tbody>

    <tr>
        <td className="text-primary fw-bold" colSpan={1} >1</td>
        <td className="text-primary fw-bold" colSpan={3} > Can you share how you believe your current performance aligns with the company's objectives and KPIs? </td>
        <td>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end"> 
        <div className="btn btn-icon btn-sm btn-light-primary ms-2 bg-white" data-bs-toggle="modal" data-bs-target="#kt_modal_2">
          <KTSVG
            path="/media/icons/duotune/art/art005.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>

        <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close">
          <KTSVG
            path="/media/icons/duotune/general/gen027.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>
        </div>
        </td>
    </tr>

    <tr>
        <td className="text-primary fw-bold" colSpan={1} >2</td>
        <td className="text-primary fw-bold" colSpan={3} > Can you share how you believe your current performance aligns with the company's objectives and KPIs? </td>
        <td>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end"> 
        <div className="btn btn-icon btn-sm btn-light-primary ms-2 bg-white" data-bs-toggle="modal" data-bs-target="#kt_modal_2">
          <KTSVG
            path="/media/icons/duotune/art/art005.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>

        <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close">
          <KTSVG
            path="/media/icons/duotune/general/gen027.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>
        </div>
        </td>
    </tr>


    <tr>
        <td className="text-primary fw-bold" colSpan={1} >3</td>
        <td className="text-primary fw-bold" colSpan={3} > Can you share how you believe your current performance aligns with the company's objectives and KPIs? </td>
        <td>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end"> 
        <div className="btn btn-icon btn-sm btn-light-primary ms-2 bg-white" data-bs-toggle="modal" data-bs-target="#kt_modal_2">
          <KTSVG
            path="/media/icons/duotune/art/art005.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>

        <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close">
          <KTSVG
            path="/media/icons/duotune/general/gen027.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>
        </div>
        </td>
    </tr>
    <tr>
        <td className="text-primary fw-bold" colSpan={1} >4</td>
        <td className="text-primary fw-bold" colSpan={3} > Can you share how you believe your current performance aligns with the company's objectives and KPIs? </td>
        <td>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end"> 
        <div className="btn btn-icon btn-sm btn-light-primary ms-2 bg-white" data-bs-toggle="modal" data-bs-target="#kt_modal_2">
          <KTSVG
            path="/media/icons/duotune/art/art005.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>

        <div className="btn btn-icon btn-sm btn-light-primary btn-active-light-danger ms-2 bg-white" data-bs-dismiss="modal" aria-label="Close">
          <KTSVG
            path="/media/icons/duotune/general/gen027.svg"
            className="svg-icon svg-icon-2x"
          />
        </div>
        </div>

        </td>
    </tr>


    
  </tbody>
</table>




<div className="modal fade" tabIndex={-1} id="kt_modal_2">
  <div className="modal-dialog modal-fullscreen">
    <div className="modal-content shadow-none">
      <div className="modal-header bg-primary">
        
        <h1 className="modal-title pb-10 text-white pt-5 ms-2"><i className="bi bi-file-earmark-bar-graph-fill fs-2hx px-1 svg-icon-muted text-white"></i>  Edit / View Question Details</h1>
        <div
          className="btn btn-icon btn-sm btn-light-primary btn-active-light-danger ms-2 bg-white"
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




<table className="table table-rounded border border-gray-100 table-row-bordered table-row-gray-100  gy-5 gs-7 shadow" style={{background:"#e8e6e6"}}>


<thead>

    <tr className="fw-bold fs-5 border-bottom border-gray-200 text-white bg-primary">

        <th style={{width: "200px"}}><i className="bi bi-question-square-fill fs-2x px-5 svg-icon-muted text-white"></i>Question Type </th>
        <th colSpan={2}><i className="bi bi-check-square-fill fs-2x px-5 svg-icon-muted text-white"></i>Divition Type </th>
        <th><i className="bi bi-card-text fs-2x px-5 svg-icon-muted text-white"></i>Question Content</th>
    
       
        
    </tr>
</thead>

<tbody>

    <tr>
        <td className="text-primary fw-bold">
        
             <p className='border border-primary rounded-3 text-white bg-primary p-3 fs-7'>
             Professional Question
             </p>
        </td>

        <td className="text-primary fw-bold">


            {/* **Admin** */}
            <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Admin" id="Admin" />
                <label className="form-check-label text-primary" htmlFor="Admin">
                Admin
                </label>
            </div>

             {/* **Finance** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Finance" id="Finance" checked />
                <label className="form-check-label text-primary" htmlFor="Finance">
                Finance
                </label>
            </div>

            
             {/* **Accounts** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Accounts" id="Accounts" checked/>
                <label className="form-check-label text-primary" htmlFor="Accounts">
                Accounts
                </label>
            </div>

            
             {/* **HR** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="HR" id="HR" checked/>
                <label className="form-check-label text-primary" htmlFor="HR">
                HR
                </label>
            </div>

            
             {/* **Mass support** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Mass support" id="Mass support" />
                <label className="form-check-label text-primary" htmlFor="Mass support">
                Mass support
                </label>
            </div>


            
             {/* **Public relation Officer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Public relation Officer" id="Public relation Officer" />
                <label className="form-check-label text-primary" htmlFor="Public relation Officer">
                Public relation Officer
                </label>
            </div>

            
             {/* **Software Engineer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Software Engineer" id="Software Engineer" />
                <label className="form-check-label text-primary" htmlFor="Software Engineer">
                Software Engineer
                </label>
            </div>

            
             {/* **Project Management** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Project Management" id="Project Management" />
                <label className="form-check-label text-primary" htmlFor="Project Management">
                Project Management
                </label>
            </div>

            </td>

            <td className="text-primary fw-bold">
             {/* **Support Engineer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Support Engineer" id="Support Engineer" checked/>
                <label className="form-check-label text-primary" htmlFor="Support Engineer">
                Support Engineer
                </label>
            </div>

            
             {/* **Software Developer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Software Developer" id="Software Developer" />
                <label className="form-check-label text-primary" htmlFor="Software Developer">
                Software Developer
                </label>
            </div>


             {/* **Programmer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Programmer" id="Programmer" />
                <label className="form-check-label text-primary" htmlFor="Programmer">
                Programmer
                </label>
            </div>

            
             {/* **Data Entry** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Data Entry" id="Data Entry" />
                <label className="form-check-label text-primary" htmlFor="Data Entry">
                Data Entry
                </label>
            </div>

            
             {/* **Digital Marketing** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Digital Marketing" id="Digital Marketing" />
                <label className="form-check-label text-primary" htmlFor="Digital Marketing">
                Digital Marketing
                </label>
            </div>

            
             {/* **Sales** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Sales" id="Sales" checked/>
                <label className="form-check-label text-primary" htmlFor="Sales">
                Sales
                </label>
            </div>

            
             {/* **Graphic Designer** */}
             <div className="form-check mb-2">
             <input className="form-check-input border border-primary" type="checkbox" value="Graphic Designer" id="Graphic Designer" />
                <label className="form-check-label text-primary" htmlFor="Graphic Designer">
                Graphic Designer
                </label>
            </div>
                
        </td>

        <td className="text-primary fw-bold">
        
        <div className="mb-3 w-100">
        <textarea className="form-control" id="exampleFormControlTextarea1" style={{height: "180px"}}> 
        Can you share how you believe your current performance aligns with the company's objectives and KPIs? 
        </textarea>
        </div>

        </td>

        

    </tr>
    
</tbody>


</table>
       






      </div>
      <div className="modal-footer">
        {/* <button
          type="button"
          className="btn btn-outline-primary text-primary fw-bold"
          data-bs-dismiss="modal"
        >
          Close
        </button> */}
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>




    </>

}
export {KPIQuestions}