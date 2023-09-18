import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap'; // Assuming you're using Bootstrap for cards
import { KTSVG } from '../../../../_metronic/helpers';

function Test() {
  const [currentTableIndex, setCurrentTableIndex] = useState(0);
  const [currentTableIndexSummary, setCurrentTableIndexSummary] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);

  
  const tablesData = [
    {
        tableId: 1,
        title: 'Question 1',
        customHeaders: ['General Question', 'My Rating'],
        customRows: [
          [
            'What strategies have you employed to enhance your performance in these areas?',
            // column 2
            <div className="rating">
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
          </div>,
          ],
        ],
      },
      
    {
      tableId: 2,
      title: 'Question 2',
      customHeaders: ['General Question', 'My Rating'],
      customRows: [['Can you share how you believe your current performance aligns with the companys objectives and KPIs?', 
    // column 2
    <div className="rating">
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
  </div>,]],
    },
    {
        tableId: 3,
        title: 'Question 3',
        customHeaders: ['General Question', 'My Rating'],
        customRows: [['how did you emplemented strategies to enhance your performance in these areas?', 
    // column 2
    <div className="rating">
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
  </div>,
  ]],
      },

      {
        tableId: 4,
        title: 'Question 4',
        customHeaders: ['General Question', 'My Rating'],
        customRows: [
          [
            'Have you implemented any tactics to boost your efficiency in [specific process or workflow]?',
            // column 2
            <div className="rating">
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
          </div>,
          ],
        ],
      },
  ];

 // Create an array to store the text values for each textarea
 const [textValues, settextValues] = useState(new Array(tablesData.length).fill(''));

  
 const handleContinueClick = () => {
   if (currentTableIndex < tablesData.length - 1) {
     setCurrentTableIndex(currentTableIndex + 1);
   } else {
     // If all tables are displayed, show the submit button
     setShowSubmit(true);
   }
 };

 const handlePreviousClick = () => {
   if (currentTableIndex > 0) {
     setCurrentTableIndex(currentTableIndex - 1);
   }
 };

 const handleTextareaChange = (event: { target: { value: any; }; }) => {
   // Update the text value for the current table's textarea
   const updatedTextValues = [...textValues];
   updatedTextValues[currentTableIndex] = event.target.value;
   settextValues(updatedTextValues);
 };

 const currentTableData = tablesData[currentTableIndex];



  // **********************************************************KPI Report and Summary 
  const tablesDataSummary = [
    {
      tableId: 1,
      title: 'Question 1',
      customHeadersSummary: ['Question', 'Employee Rating'],
      customRowsSummary: [
        [
          'What strategies have you employed to enhance your performance in these areas?',
          (
            <div className="rating">
              <div className="rating-label checked">
                <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
              </div>
              <div className="rating-label checked">
                <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
              </div>
              <div className="rating-label checked">
                <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
              </div>
              <div className="rating-label checked">
                <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
              </div>
              <div className="rating-label">
                <KTSVG path="/media/icons/duotune/general/gen029.svg" className="svg-icon svg-icon-1" />
              </div>
            </div>
          ),
        ],
        [
          'I have no Comments',
          '',
        ],
      ],
    },
  ];
  
  
  
  
  
 

 // Create an array to store the text values for each textarea
 const [textValuesSummary, settextValuesSummary] = useState(new Array(tablesDataSummary.length).fill(''));

  
 const handleContinueClickSummary = () => {
   if (currentTableIndexSummary < tablesDataSummary.length - 1) {
     setCurrentTableIndexSummary(currentTableIndexSummary + 1);
   } else {
     // If all tables are displayed, show the submit button
     setShowSubmit(true);
   }
 };

 const handlePreviousClickSummary = () => {
   if (currentTableIndexSummary > 0) {
     setCurrentTableIndexSummary(currentTableIndexSummary - 1);
   }
 };

 const handleTextareaChangeSummary = (event: { target: { value: any; }; }) => {
   // Update the text value for the current table's textarea
   const updatedTextValuesSummary = [...textValuesSummary];
   updatedTextValuesSummary[currentTableIndexSummary] = event.target.value;
   settextValuesSummary(updatedTextValuesSummary);
 };

 const currentTableDataSummary = tablesDataSummary[currentTableIndexSummary];

  return (
<>
    <ul className="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6 mb-10 d-md-flex justify-content-md-center">
    <li className="nav-item">
  <a className="nav-link active" data-bs-toggle="tab" href="#KPI_Question">
    <div className="custom-width">
      <a href="#" className="btn btn-flex btn-primary px-6">
        <span className="svg-icon svg-icon-2x">
          <i className="bi bi-question-square fs-2 px-5 svg-icon-muted text-white"></i>
        </span>
        <div className="d-flex align-items-center py-2">
          <span className="bullet bullet-vertical me-5 h-20px w-3px text-white"></span>
        </div>
        <span className="d-flex flex-column align-items-start ms-2">
          <span className="fs-5 fw-bolder">KPI Question</span>
        </span>
      </a>
    </div>
  </a>
</li>

  <li className="nav-item">
    <a
      className="nav-link"
      data-bs-toggle="tab"
      href="#KPI_Summary"
    >
           <a href="#" className="btn btn-flex btn-primary px-6">
  <span className="svg-icon svg-icon-2x"><i className="bi bi-table fs-2 px-5 svg-icon-muted text-white"></i></span>
  <li className="d-flex align-items-center py-2">
    <span className="bullet bullet-vertical me-5 h-20px w-3px text-white"></span>
  </li>
  <span className="d-flex flex-column align-items-start ms-2">
      <span className="fs-5 fw-bolder">KPI Summary</span>
  </span>
  </a>
    </a>
  </li>
</ul>




<div className="tab-content" id="myTabContent">
<div className="tab-pane fade show active" id="KPI_Question" role="tabpanel">

<div className="alert alert-dismissible bg-warning-subtle d-flex flex-column flex-sm-row mb-15">
  <span className="svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0"><i className="bi bi-exclamation-triangle-fill fs-2hx px-5 svg-icon-muted text-warning"></i></span>
  <div className="d-flex flex-column pe-0 pe-sm-10">
    <h5 className="mb-1 text-primary">General Questions Statement</h5>
    <span className='fw-bold fs-7 text-gray-600'>
        Key Performance Indicators (KPIs) serve as essential tools for achieving established targets, contributing to the growth of both the company and its employees. Ensuring honesty and ethical conduct is essential to foster a collaborative partnership that benefits both parties involved.
    </span>
    <h5 className="mb-1 text-primary mt-5">Professional Questions Statement</h5>
    <span className='fw-bold fs-7 text-gray-600'>
    The subsequent questions have been designed to accommodate to the unique requirements of each department/division. These questions facilitate effective communication and comprehension of employee expectations, supporting in the measurement of progress and recognition of challenges.
    </span>
  </div>
  <button type="button" className="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
    <span className="svg-icon svg-icon-1 svg-icon-primary"><i className="bi bi-x fs-2hx px-5 svg-icon-muted text-primary"></i></span>
  </button>
</div>
   
      {showSubmit && (
        <Card className="mt-5 mb-5" style={{background:"#f0eded"}}>
          <Card.Body>
            <p className='text-danger fw-bold'>The submission option is currently unavailable. Submissions can only be made at the end of the year, specifically in December. </p>
            <Button className="btn btn-sm" variant="danger" onClick={() => alert('The submission was done successfully')}>
              Submit
            </Button>
          </Card.Body>
        </Card>
      )}



      <Card style={{background:"#f0eded"}}>
        <Card.Header className="d-flex justify-content-center">
          {/* Add the additional div here */}
          <div className='d-flex align-items-center w-600px w-sm-600px flex-column mt-3'>
            <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
              <span className='fw-bold fs-6 text-gray-600'>Question Compleation</span>
              <span className='fw-bolder fs-6 text-primary'>{currentTableIndex + 1}/{tablesData.length}</span>
            </div>
            <div className='h-8px mx-3 w-100 bg-body-secondary mb-3'>
              <div
                className='bg-primary rounded h-8px'
                role='progressbar'
                style={{width: `${((currentTableIndex + 1) / tablesData.length) * 100}%`}}
              ></div>
            </div>
          </div>
          {/* End of additional div */}
          {/* <h1>{currentTableData.title}</h1> */}
        </Card.Header>
        <Card.Body className='mb-10 mt-5 p-20'>
          <table className="table table-rounded border border-gray-100 table-row-bordered table-row-gray-100  gy-4 gs-7 shadow" style={{background:"#f0eded"}}>
            <thead>
              <tr className="fw-bold fs-6 text-white" style={{background:"#6255a3"}}>
                {currentTableData.customHeaders.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentTableData.customRows.map((row, rowIndex) => (
                <tr className="text-primary fw-bold fs-7" key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
              {/* Add a new row here */}
              <tr>
                <td colSpan={2}>
                  <div className="mb-3">
                    <textarea
                      className="form-control fs-7"
                      style={{background:"#f2f0f0"}}
                      id={`exampleFormControlTextarea${currentTableData.tableId}`}
                      placeholder='Enter your comments....'
                      value={textValues[currentTableIndex]}
                      onChange={handleTextareaChange}
                    ></textarea>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-grid gap-2 d-md-flex justify-content-md-between mt-5">
            <Button className="btn btn-sm" variant="primary" onClick={handlePreviousClick} disabled={currentTableIndex === 0}>
              Previous
            </Button>
            <Button className="btn btn-sm" variant="primary" onClick={handleContinueClick}>
              {currentTableIndex === tablesData.length - 1 ? 'Save All' : 'Continue'}
            </Button>
          </div>
        </Card.Body>
      </Card>

 </div>
 </div>



 {/* KPI Report / Summary */}

 <div className="tab-content" id="myTabContent">
    <div className="tab-pane fade" id="KPI_Summary" role="tabpane2">
    <div className="alert alert-dismissible bg-warning-subtle d-flex flex-column flex-sm-row mb-15">
  <span className="svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0"><i className="bi bi-exclamation-triangle-fill fs-2hx px-5 svg-icon-muted text-warning"></i></span>
  <div className="d-flex flex-column pe-0 pe-sm-10">
    <h5 className="mb-1 text-primary">KPI Report</h5>
    <span className='fw-bold fs-7 text-gray-600'>
    At Tamimah, we hold high respect for individuals who display solid dedication and exceed their job responsibilities, thereby driving the company's development. For a clearer insight into KPI results, feel free to engage with your respective line manager. Exceptional performance is recognized at a rate of 75% and higher.
    </span>
  </div>
  <button type="button" className="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
    <span className="svg-icon svg-icon-1 svg-icon-primary"><i className="bi bi-x fs-2hx px-5 svg-icon-muted text-primary"></i></span>
  </button>
</div>
   
      {showSubmit && (
        <Card className="mt-5 mb-5" style={{background:"#f0eded"}}>
          <Card.Body>
            <p className='text-danger fw-bold'>The submission option is currently unavailable. Submissions can only be made at the end of the year, specifically in December. </p>
            <Button className="btn btn-sm" variant="danger" onClick={() => alert('The submission was done successfully')}>
              Submit
            </Button>
          </Card.Body>
        </Card>
      )}



<Card style={{ background: "#f0eded" }}>
  <Card.Header className="d-flex justify-content-center">
    {/* Additional div */}
    <div className='d-flex align-items-center w-600px w-sm-600px flex-column mt-3'>
      <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
        <span className='fw-bold fs-6 text-gray-600'>Question Completion</span>
        <span className='fw-bolder fs-6 text-primary'>{currentTableIndexSummary + 1}/{tablesDataSummary.length}</span>
      </div>
      <div className='h-8px mx-3 w-100 bg-body-secondary mb-3'>
        <div
          className='bg-primary rounded h-8px'
          role='progressbar'
          style={{ width: `${((currentTableIndexSummary + 1) / tablesDataSummary.length) * 100}%` }}
        ></div>
      </div>
    </div>
    {/* End of additional div */}
    {/* <h1>{currentTableDataSummary.title}</h1> */}
  </Card.Header>
  <Card.Body className='mb-10 mt-5 p-20'>
    <table className="table table-rounded border border-gray-100 table-row-bordered table-row-gray-100 gy-4 gs-7 shadow" style={{ background: "#f0eded" }}>
      <thead>
        {/* Original header row */}
        <tr className="fw-bold fs-6 text-white" style={{ background: "#6255a3" }}>
          {currentTableDataSummary?.customHeadersSummary?.map((headerSummary, indexSummary) => (
            <th key={indexSummary}>{headerSummary}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {currentTableDataSummary.customRowsSummary.map((row, rowIndex) => (
          <tr className="text-primary fw-bold fs-7" key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
      <thead>
        {/* Additional header row */}
        <tr className="fw-bold fs-6 text-white" style={{ backgroundColor: "#DF9B00", marginTop: 0 }}>
          <th colSpan={2}>Line Manager 1</th>
        </tr>
      </thead>
    </table>
    <div className="d-grid gap-2 d-md-flex justify-content-md-between mt-5">
      <Button className="btn btn-sm" variant="primary" onClick={handlePreviousClickSummary} disabled={currentTableIndexSummary === 0}>
        Previous
      </Button>
      <Button className="btn btn-sm" variant="primary" onClick={handleContinueClickSummary}>
        {currentTableIndexSummary === tablesDataSummary.length - 1 ? 'Save All' : 'Continue'}
      </Button>
    </div>
  </Card.Body>
</Card>



    </div>
 </div>

  
    </>
  );
}

export { Test }
