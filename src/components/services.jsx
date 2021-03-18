import MediaCard from './Card'
import Sdata from './Service-img'
export const Services = () => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
          Welcome to DN Event Management  
          </p>
        </div>
        <div className='row'>
          {Sdata
            ? Sdata.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4 px-3'>
                  {/* <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div> */}
                  {console.log(d)}
                  <MediaCard {...d}/>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
