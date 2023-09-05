import {FC} from 'react'
import {PageTitle} from '../../../../_metronic/layout/core'
import BankGuaranteeTable from '../../../components/BankGuaranteeTable/BankGuaranteeTable'


const RenewalStatusPage: FC = () => (
    <>
        <div className='row g-5 g-xl-10'>
            <BankGuaranteeTable/>
        </div>
    </>
)


const BankGuarantee: FC = () => {
    return (
      <>
        <PageTitle breadcrumbs={[]}>Bank Guarantees</PageTitle>
        <RenewalStatusPage/>
      </>
    )
  }
                    
export {BankGuarantee}