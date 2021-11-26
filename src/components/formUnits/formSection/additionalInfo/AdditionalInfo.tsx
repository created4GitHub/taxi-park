const AdditionalInfo = (cars : any) => {
    if (cars) {
      return cars.map((item: any, index: any) => {
        return (
          <div key={index} className='table_section_isActive-cars block'>
            <p>{item.id}</p>
            <p>{item.driver_id}</p>
            <p>{item.mark}</p>
            <p>{item.model}</p>
            <p>{item.number}</p>
            <p>{item.year}</p>
            <p>{item.status.title}</p>
          </div>
        )
      })
    }
  }

  export default AdditionalInfo;