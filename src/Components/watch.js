
import "../stylesheets/watch.css";

const Watch = ({unit}) => {
  return (
    <>
        <div id={unit} className="WatchBody">
            <div className="WatchFace">
                <div className="WatchFace_center"></div>
                <div className="WatchFace_center_hour"></div>
                <div className="WatchFace_center_minute"></div>
                <div className="WatchFace_center_second"></div>
            </div>
        </div>
   </> 
    
    
  );
}

export default Watch;