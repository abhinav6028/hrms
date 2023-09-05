import {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import ProductsServicesTable from '../../../components/ProductsServicesTable/ProductsServicesTable'


const RenewalStatusPage: FC = () => (
    <>
        <div className='row g-5 g-xl-10'>
            <ProductsServicesTable/>
        </div>
    </>
)


const ProductsServices: FC = () => {
    return (
      <>
        <PageTitle breadcrumbs={[]}>Company Documents Renewal</PageTitle>
        <RenewalStatusPage/>
      </>
    )
  }
                    
export {ProductsServices}