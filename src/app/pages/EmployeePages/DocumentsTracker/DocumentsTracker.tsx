import {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import RenewalStatusTable from '../../../components/EmployeeDocumentRenewalTable/DocumentRenewalTable'
import { ListsWidget12 } from '../../../../_metronic/partials/widgets/lists/ListWidget12'

type renewalDetails = {
  name: string
  date: string
  completed: boolean
}

const data1 = [
  {name: "Passport", date:"10/10/2023", completed:false},
  {name: "Visa", date:"10/10/2023", completed:false},
  {name: "License", date:"7/10/2023", completed:false},
  {name: "Mulkiya", date:"10/10/2023", completed:false}
]

const data2 = [
  {name: "Passport", date:"10/10/2023", completed:false},
  {name: "Visa", date:"10/10/2023", completed:false},
  {name: "License", date:"8/10/2023", completed:false},
  {name: "Mulkiya", date:"10/10/2023", completed:false}
]

const data3 = [
  {name: "Passport", date:"10/10/2023", completed:false},
  {name: "Visa", date:"10/10/2023", completed:false},
 
]


const RenewalStatusPage: FC = () => {
    
    return(
      <>
  
      <h5 className="text-black-50 mb-10"><i className="bi bi-caret-right-fill fs-2 me-2 svg-icon-muted text-black-50"></i>  {/* icon  */} My Documents / Family Members Documents</h5>

          <div className='row g-5 g-xl-10 mb-md-4 mb-xl-10 d-flex flex-wrap align-content-stretch'>
            <div className="col-md-12 col-l-6 col-xl-4">
              <ListsWidget12 className='h-100' name='Saji Babu' details={data1}/>
            </div>
            <div className="col-md-12 col-l-6 col-xl-4">
              <ListsWidget12 className='h-100' name='Mera' details={data2}/>
            </div>
            <div className="col-md-12 col-l-6 col-xl-4">
              <ListsWidget12 className='h-100' name='Arya' details={data3}/>
            </div>
          </div>
          {/* <div className='row g-5 g-xl-10'>
              <RenewalStatusTable/>
          </div> */}
      </>
    )
}


const DocumentsTracker: FC = () => {
    return (
      <>
        {/* <PageTitle breadcrumbs={[]}>Employee Document Renewal Notifications</PageTitle> */}
        <RenewalStatusPage/>
      </>
    )
  }
                    
export {DocumentsTracker}