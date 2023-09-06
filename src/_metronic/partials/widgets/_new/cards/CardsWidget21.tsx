type Props = {
    className: string
    color: string
    img: string
    title: string
    description: string
    url?: string
    onClick? : (() => void)
  }
  
  const CardsWidget21 = ({className, color, img, title, description,url, onClick}: Props) => (
    <a href={url}
      className={`card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end ${className}`}
      style={{
        overflow: 'hidden',
        backgroundColor: color,
        backgroundImage: `url('${img}')`,
        backgroundSize: 'cover',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <div className='card-header pt-5'>
        <div className='card-title d-flex flex-column'>
          <span className='fs-1 fw-bold text-white me-2 lh-1 ls-n3'>{description}</span>
  
          <span className='text-white pt-5 fw-semibold fs-8'>{title}</span>
        </div>
      </div>
    </a>
  )
  export {CardsWidget21}
  