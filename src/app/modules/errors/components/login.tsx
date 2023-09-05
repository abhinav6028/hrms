import {FC} from 'react'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'

const Login: FC = () => {
  return (
    <>
     
      <div className="form-group fv-plugins-icon-container mb-10 text-start">
        <label className='text-primary fw-bold fs-6 mb-3'><i className="bi bi-person-fill fs-2 svg-icon-muted text-primary me-3"></i> Username <span className="text-danger">*</span></label>
            <input className="form-control form-control-solid h-auto py-4 px-4 rounded-lg border-1" type="text" name="username" autoComplete="off" placeholder="Enter Your Username"/>
        
        <div className="fv-plugins-message-container">     
        </div>
      </div>

      <div className="form-group fv-plugins-icon-container mb-5 text-start">
        <label className='text-primary fw-bold fs-6 text-start mb-3'><i className="bi bi-lock-fill fs-2 svg-icon-muted text-primary me-3"></i> Password <span className="text-danger">*</span></label>
            <input className="form-control form-control-solid h-auto py-4 px-4 rounded-lg border-1" type="password" name="password" autoComplete="off" placeholder="Enter Your Password"/>
        <div className="fv-plugins-message-container">     
        </div>
      </div>





     
      <div className='mb-0 text-start'>
        <Link to='/EmployeePages/Dashboard' className='btn btn-sm btn-primary'>
          Login
        </Link>
      </div>
      {/* end::Link */}
    </>
  )
}

export {Login}


