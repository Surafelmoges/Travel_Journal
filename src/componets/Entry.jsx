export function Entry (props) {
    return (
        <>
         <div className="entry_journal">
            <div className="box">
                <img 
                src={props.img}
                alt="Mount Fuji"
                className="entry-image"
                 />
                  <img 
                  src={props.marker}
                   className="marker"
                  alt="Location" 
              />
            <div className="entry-content">
                <div className="lo">
                    <p className="country">{props.country}</p>
                   <a href={props.mapLink}
                      className="map-link">
                    <p className="map-link-text">{props.mapLinkText}</p>
                </a>
                </div>
                <h1 className="tt">{props.title}</h1>
                <div className="para">
                    <p className="date-text">{props.date}</p>
                   <p className="detail">{props.detail}</p>

                </div>
                
            </div>
            </div>
            
            
        </div>
        </>
       
    )
}