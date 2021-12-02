import React, { useEffect, useState } from 'react';

const MyEvent = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`https://whispering-anchorage-92161.herokuapp.com/admins`)
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [events])

  const handaleDelete = id => {
    const uri = `https://whispering-anchorage-92161.herokuapp.com/admins/${id}`;
    fetch(uri, {
      method: "DELETE"
    })
      .then()
      .then(data => {

        if (data.deleteCount > 0) {
          const remainingAdmin = events.filter(admin => admin._id !== id);
          setEvents(remainingAdmin);
        }
      })
  }


  return (

    <section className="d-flex flex-wrap container gap-3">
      {
        events.map(event => <div className="card mb-3" style={{ maxWidth: "500px", padding: "13px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={event?.image} className="img-fluid rounded-start" alt="eventImage" />
            </div>
            {console.log(event.image)}
            <div className="col-md-8">
              <div className="card-body">

                <h5 className="card-title" style={{ fontSize: "24px", fontWeight: "900" }}>{event?.title}</h5>

                <h5 style={{ fontWeight: "500", marginTop: "20px" }}>{event?.date}</h5>

                <button className="btn btn-dark px-4 position-absolute" style={{ marginLeft: "40%" }} onClick={() => handaleDelete(event._id)}>Cancel</button>

              </div>
            </div>
          </div>
        </div>)
      }
    </section>
  );
};

export default MyEvent;