import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MyEvent = () => {

  const [events, setEvents] = useState([]);
  const { email } = useParams();

  useEffect(() => {
    fetch(`https://whispering-anchorage-92161.herokuapp.com/admins`)
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])
  // useEffect(()=>{
  //     fetch(`http://localhost:5000/admins/${email}`)
  //       .then(res => res.json())
  //       .then(data => setEvents(data))
  // },[])



  return (

    <section>
      {
        events.map(event => <div className="card mb-3" style={{ maxWidth: "540px", padding: "13px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={event?.image} className="img-fluid rounded-start" alt="eventImage" />
            </div>
            {console.log(event.image)}
            <div className="col-md-8">
              <div className="card-body">

                <h5 className="card-title" style={{ fontSize: "24px", fontWeight: "900" }}>{event?.title}</h5>

                <h5 style={{ fontWeight: "500", marginTop: "20px" }}>{event?.date}</h5>

                <button className="btn btn-dark px-4 position-absolute" style={{ marginLeft: "40%" }}>Cancel</button>

              </div>
            </div>
          </div>
        </div>)
      }
    </section>
  );
};

export default MyEvent;