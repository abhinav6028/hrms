import { FC, useState, useEffect, useMemo, useRef} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {PageTitle} from '../../../../_metronic/layout/core'
import { TextField ,Autocomplete } from '@mui/material'
import { addDays } from 'date-fns'
import {
  CardsWidget21, StatisticsWidget5,
} from '../../../../_metronic/partials/widgets'

import Calendar from '../../../components/Calendar/MonthView'

import Data from './data/data.json'

const data: LeaveDetails[] = Data

export type EmployeeLeaveDetails = {
    date: Date
    type: string
}

export type LeaveDetails = {
    name: string
    startDate: string
    endDate: string
    type: string
}

type Days = {
    Sick: number
    Marriage: number
    Maternity: number
    Annual: number
    Compassionate: number
    Unpaid: number
    Hajj: number
    Others: number
}


const LeaveTrackerPage: FC = () => {
    const presentYear = new Date().getFullYear()
    const [year,setYear] = useState<number>(presentYear);
    const [employeeLeaveDetails,setEmployeeLeaveDetails] = useState<EmployeeLeaveDetails[]>([])
    const [type,setType] = useState<string>("All")
    const col1 = useRef<HTMLDivElement>(null)
    const col2 = useRef<HTMLDivElement>(null)
    const col3 = useRef<HTMLDivElement>(null)
    const col4 = useRef<HTMLDivElement>(null)
    const [noTickets,setNoTIckets] = useState<number>(0)
    const [ticketAmt,setAmt] = useState<number>(0)

    const [days, setdays] = useState<Days>({
        Sick: 0,
        Marriage: 0,
        Maternity: 0,
        Annual: 0,
        Compassionate: 0,
        Unpaid: 0,
        Hajj: 0,
        Others: 0
    })

    const yearOptions = useMemo(() => {
        return ['2020','2021', '2022','2023','2024','2025']
    },[]);

    const months = [0,1,2,3,4,5,6,7,8,9,10,11]

    useEffect(()=>{
        const listofLeaveDetails: EmployeeLeaveDetails[] = [];
        let noOfDays: Days = {
                Sick: 0,
                Marriage: 0,
                Maternity: 0,
                Annual: 0,
                Compassionate: 0,
                Unpaid: 0,
                Hajj: 0,
                Others: 0
            }
        for(let item of data){
            if(item.name==='employee1'){
                const startDate = new Date(item.startDate)
                const endDate = new Date(item.endDate)
                let date = startDate
            if(startDate.getFullYear()===year || endDate.getFullYear()===year){
                    while(date<endDate){
                        if(date.getFullYear()===year){
                            const ld = {date: date, type: item.type}
                            listofLeaveDetails.push(ld)
                            noOfDays[item.type as keyof Days] = noOfDays[item.type as keyof Days] + 1
                        }
                        date = addDays(date,1)
                    }
                }
            }
        }
        setdays(noOfDays)
        setEmployeeLeaveDetails(listofLeaveDetails)
    },[year])

    useEffect(()=> {
        const handleClickOutside = (event: MouseEvent) => {
            console.log("click recorded")
            console.log(col1.current)
            console.log(col2.current)
            console.log(col3.current)
            console.log(col4.current)
            if (col1.current && !col1.current.contains(event.target as Node) &&
                col2.current && !col2.current.contains(event.target as Node) &&
                col3.current && !col3.current.contains(event.target as Node) &&
                col4.current && !col4.current.contains(event.target as Node)
            ) {
              setType("All")
            }
          }
          document.addEventListener("click", handleClickOutside);
          return () => {
            document.removeEventListener("click", handleClickOutside);
          }
    },[])
    
    return(
        <> 
            <div className='row g-5 g-xl-8 mb-md-5 mb-xl-5'>
                <div className='col-md-10 col-xl-5 me-13'>
                    <div className='card h-md-auto mb-8'>
                        <div className='card-header'>
                            <h1 className='p-3 mt-5 text-primary'><i className="bi bi-person-fill fs-2hx me-3 svg-icon-muted text-primary"></i> Saji Babu</h1>
                        </div>
                        <div className='card-body'>
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
                        <div className='mt-6'>
                        <span className="badge badge-primary fs-7 p-5 mb-5"><i className="bi bi-airplane-fill fs-2 svg-icon-muted text-white me-5"></i>Tickets Compensated: 1</span>
                        <span className="badge badge-primary fs-7 p-5"><i className="bi bi-cash-coin fs-2 svg-icon-muted text-white me-5"></i> Amount Compensation: 150 OMR</span>
                        </div>

                        </div>
                    </div>
                </div>
                
                <div className='col-md-6 col-xl-2 mb-md-5' ref={col1}>
                    <CardsWidget21
                        className='h-md-30 w-md-30 mb-5'
                        color='#34a8cb'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Sick Leave'
                        description={days.Sick.toString()}
                        onClick={() => setType("Sick")}
                    />
                    <CardsWidget21
                        className='h-md-30 mb-5'
                        color='#6255a3'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Marriage Leave'
                        description={days.Marriage.toString()}
                        onClick={() => setType("Marriage")}
                    />
                    <CardsWidget21
                        className='h-md-30 mb-5'
                        color='#143983'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Maternity Leave'
                        description={days.Maternity.toString()}
                        onClick={() => setType("Maternity")}
                    />
                </div>
               
                <div className='col-md-6 col-xl-2 mb-md-5' ref={col3}>
                <CardsWidget21
                        className='h-md-30 mb-5'
                        color='#6255a3'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Annual Leave'
                        description={days.Annual.toString()}
                        onClick={() => setType("Annual")}
                    />
                    <CardsWidget21
                        className='h-sm-30 mb-5'
                        color='#143983'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Emergency Leave'
                        description={days.Compassionate.toString()}
                        onClick={() => setType("Compassionate")}
                    />
                    <CardsWidget21
                        className='h-md-30 mb-5'
                        color='#34a8cb'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Unpaid Leave'
                        description={days.Unpaid.toString()}
                        onClick={() => setType("Unpaid")}
                    />
                </div>
                <div className='col-md-6 col-xl-2 mb-md-5' ref={col4}>
                    <CardsWidget21
                        className='h-md-30 mb-5'
                        color='#143983'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Hajj Leave'
                        description={days.Hajj.toString()}
                        onClick={() => setType("Hajj")}
                    />
                    <CardsWidget21
                        className='h-md-30 mb-5'
                        color='#34a8cb'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Paternity Leave'
                        description={days.Hajj.toString()}
                        onClick={() => setType("Hajj")}
                    />
                    <CardsWidget21
                        className='h-md-30 mb-5'
                        color='#6255a3'
                        img={toAbsoluteUrl('/media/patterns/vector-1.png')}
                        title='Additional Leave'
                        description={days.Others.toString()}
                        onClick={() => setType("Others")}
                    />
                </div>
            </div>
            <div className='card'>
                <div className='row g-5 g-xl-8 mx-5 mx-xl-10'>
                     {
                     months.map((value) => {
                     return (
                         <div className='col-md-6 col-xl-4' >
                             <Calendar
                                 className='m-3'
                                    year={year>2000 && year<<2100 ?year :presentYear}
                                    month={value}
                                    type = {type}
                                    employeeLeaveDetails = {employeeLeaveDetails}
                                                // minDetail='month'
                                                // prevLabel={null}
                                                // prev2Label={null}
                                                // nextLabel={null}
                                                // next2Label={null}
                                                // showNeighboringMonth={false}
                                                // activeStartDate={new Date(year,value,1)}
                                    />
                            </div>
                        )
                     })}
                </div>
            </div>
        </>
    );
}

const EmployeeLeaveTracker: FC = () => {
  const intl = useIntl()
  return (
    <>
        {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle> */}
        <LeaveTrackerPage />
    </>
  )
}
                  
export {EmployeeLeaveTracker}