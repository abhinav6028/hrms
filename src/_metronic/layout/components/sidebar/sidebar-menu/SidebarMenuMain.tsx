/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTIcon} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import { Link } from 'react-router-dom'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      {/* <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem to='/builder' icon='switch' title='Layout Builder' fontIcon='bi-layers' />
      <SidebarMenuItem to='/testPage' icon='switch' title='My Page' fontIcon='bi-layers' /> */}
      

      <SidebarMenuItem to='/error/login' iconpath='/media/icons/duotune/general/gen008.svg' title='Login Page' />

    

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section  text-uppercase fs-8 ls-1 text-white'>Employee Pages</span>
        </div>
        </div>
       

      
        <SidebarMenuItem to='/EmployeePages/Dashboard' iconpath='/media/icons/duotune/general/gen008.svg' title='Dashboard' fontIcon='bi-layers' />
        <SidebarMenuItemWithSub
        to='/EmployeePages/myLeave/Dashboard'
        title='My Leave'
        iconpath='/media/icons/duotune/general/gen005.svg'
        fontIcon='bi-person'
      >
         <SidebarMenuItem to='/EmployeePages/myLeave/Requestleave' iconpath='/media/icons/duotune/files/fil005.svg' title='Request Leave' fontIcon='bi-layers' />
         <SidebarMenuItem to='/EmployeePages/myLeave/leaveTracker'  iconpath='/media/icons/duotune/files/fil011.svg' title='Leave Tracker' fontIcon='bi-layers' />
        <SidebarMenuItem to='/EmployeePages/myLeave/leavePolicy'  iconpath="/media/icons/duotune/files/fil008.svg" title='Leave Policy' fontIcon='bi-layers' />

        </SidebarMenuItemWithSub>
      


        <SidebarMenuItem to='/EmployeePages/DocumentsTracker'  iconpath='/media/icons/duotune/communication/com005.svg' title='Documents Tracker' fontIcon='bi-layers' />
        <SidebarMenuItem to='/EmployeePages/MyAccount'  icon='user' title='My Details' fontIcon='bi-layers' />
        <SidebarMenuItem to='/EmployeePages/Folder'  iconpath='/media/icons/duotune/files/fil012.svg' title='My Folder' fontIcon='bi-layers' />
        <SidebarMenuItem to='/EmployeePages/OverallPolicies'  iconpath='/media/icons/duotune/general/gen051.svg' title='Company Documents' fontIcon='bi-layers' />
        <SidebarMenuItem to='/EmployeePages/KPI/EmployeeKPI'  icon='ranking' title='My KPI' fontIcon='bi-layers' />
        


        
       
     
        <div className='menu-item'>
        <div className='menu-content pt-8'>
          <span className='menu-section text-uppercase fs-8 ls-1 text-white'>Employer Pages</span>
        </div>
      </div>

      <SidebarMenuItem
        to='/employer/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />


      <SidebarMenuItemWithSub
          to=''
          title='Leave Tracker'
          iconpath='/media/icons/duotune/files/fil011.svg'
          fontIcon='bi-app-indicator'
      >
      
        <SidebarMenuItem
          to='employer/leave/notification'
          iconpath='/media/icons/duotune/communication/com002.svg'
          title='Leave Requests'
          fontIcon='bi-app-indicator'
          /> 

{/*          
              <div className='menu-item btn-active-light-primary'>
                <Link to={'/employer/leave/notification'} className='menu-link px-5'>
                  <span className='menu-text'><i className="bi bi-check-circle fs-2 px-3 svg-icon-muted"></i>Leave Requests</span>
                  <span className='menu-badge'>
                    <span className='badge badge-light-danger badge-circle fw-bolder fs-7'>3</span>
                  </span>
                </Link>
              </div>
      */}


        <SidebarMenuItem
          to='employer/leave/leaveTracker'
          iconpath='/media/icons/duotune/files/fil024.svg'
          title='Employee Tracker'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='employer/hr/policies'
          iconpath="/media/icons/duotune/files/fil008.svg"
          title='Leave Policy'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='employer/leave/leaveForms'
          iconpath="/media/icons/duotune/files/fil017.svg"
          title='Submitted Leave Forms'
          fontIcon='bi-app-indicator'
        />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
        to=''
        title='HR Management'
        iconpath='/media/icons/duotune/electronics/elc004.svg'
        fontIcon='bi-app-indicator'
      >
        <SidebarMenuItem
          to='employer/hr/employee'
          icon='people'
          title='Employee Profile'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='employer/hr/insuredStaff'
          icon='user-tick'
          title='Insured Staff'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='employer/hr/payroll'
          icon='credit-cart'
          title='Payroll'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='employer/hr/renewal'
          icon='filter-tablet'
          title='Renewal Status'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='employer/hr/folder'
          iconpath="/media/icons/duotune/files/fil012.svg"
          title='Employees Folder'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='employer/hr/addAccount'
          icon='user-edit'
          title='User Details'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='employer/hr/letters'
          icon='file-sheet'
          title='HR Letters Format'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='employer/hr/OverallPolicies'
          iconpath='/media/icons/duotune/general/gen051.svg'
          title='Company Documents'
          fontIcon='bi-app-indicator'
        />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
          to=''
          title='KPI'
          icon='ranking'
          fontIcon='bi-app-indicator'
      >

        <SidebarMenuItem to='/employer/EmployerKPI/KPIQuestions'  icon='send' title='KPI Questions' fontIcon='bi-layers' />
        <SidebarMenuItem to='/employer/EmployerKPI/ReportKPI'  icon='chart-line-star' title='KPI Report' fontIcon='bi-layers' />
        <SidebarMenuItem to='/employer/EmployerKPI/SummaryKPI'  icon='chart-line-star' title='KPI Summary' fontIcon='bi-layers' />

        </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
        to=''
        title='Car'
        icon='car'
        fontIcon='bi-app-indicator'
      >
        <SidebarMenuItem
          to='employer/car/vehicles'
          icon='car-2'
          title='Vehicles'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='employer/car/documents'
          iconpath="/media/icons/duotune/files/fil012.svg"
          title='Vehicle Documents'
          fontIcon='bi-app-indicator'
        />
      </SidebarMenuItemWithSub>



      <SidebarMenuItemWithSub
        to=''
        title='Organisation'
        icon='home'
        fontIcon='bi-app-indicator'
      >
        <SidebarMenuItem
          to='employer/organisation/documents'
          iconpath="/media/icons/duotune/files/fil019.svg"
          title='Renewal Company Documents'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='employer/organisation/companyDoc'
          iconpath="/media/icons/duotune/files/fil012.svg"
          title='TM/TD Documents'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='employer/organisation/bankGuarantee'
          icon='bank'
          title='Bank Guarantee'
          fontIcon='bi-app-indicator'
        />
        <SidebarMenuItem
          to='employer/organisation/products'
          icon='abstract-25'
          title='Products/Services'
          fontIcon='bi-app-indicator'
        />
      </SidebarMenuItemWithSub>

          

      
{/*        
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div>

      <SidebarMenuItemWithSub
        to='/crafted/pages'
        title='Pages'
        fontIcon='bi-archive'
        icon='element-plus'
      >
        <SidebarMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <SidebarMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <SidebarMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <SidebarMenuItem
            to='/crafted/pages/profile/campaigns'
            title='Campaigns'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/documents'
            title='Documents'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <SidebarMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <SidebarMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='profile-circle'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <SidebarMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub to='/error' title='Errors' fontIcon='bi-sticky' icon='cross-circle'>
        <SidebarMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <SidebarMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='element-7'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <SidebarMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='message-text-2'
      >
        <SidebarMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItem
        to='/apps/user-management/users'
        icon='abstract-28'
        title='User management'
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTIcon iconName='code' className='fs-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div> */}

<br></br><br></br><br></br><br></br><br></br>
    </>
  )
}

export {SidebarMenuMain}

