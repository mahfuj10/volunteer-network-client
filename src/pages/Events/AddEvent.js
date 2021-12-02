import React, { useState } from 'react';
import UseAuth from '../../Firebase/UseAuth';
import './Event.css';
import 'rsuite/styles/index.less'

const AddEvent = () => {

    const addEvent = {
        height: "70px",
        display: "grid",
        alignItems: "center",
        backgroundColor: "#ffffff",
        width: "100vw",
        paddingLeft: "150px"
    }

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState(null);
    const { user } = UseAuth();

    console.log(image);



    // https://whispering-anchorage-92161.herokuapp.com/service

    const handaleSetEvent = () => {

        const event = { name: title, date: date, description: desc }
        event.file = image;


        const formData = new FormData();
        formData.append('title', title);
        formData.append('date', date);
        formData.append('image', image);
        formData.append('description', desc);
        formData.append('email', user?.email);
        formData.append('color', '#FFBD3E');

        if (!image) {
            return;
        }
        fetch('https://whispering-anchorage-92161.herokuapp.com/service', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    console.log(' added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    return (

        <section className="event-section">

            <aside style={addEvent}>
                <h4 >Add Event</h4>
            </aside>

            <div className='d-flex shadow-sm addevent-box justify-content-center gap-5'>

                <article>
                    <h6>Event Title</h6>
                    <input onChange={e => setTitle(e.target.value)} id="titleInput" type="text" /><br /><br />
                    <h6>Description</h6>
                    <textarea onChange={e => setDesc(e.target.value)} id="descInput" cols="45" rows="4"></textarea>
                </article>

                <article>

                    <h6>Event Date</h6>

                    <input onChange={e => setDate(e.target.value)} type="date" name="" /><br /><br />

                    <h6>Banner</h6>
                    <input type="file" onChange={e => setImage(e.target.files[0])} className="imageInput form-control mb-2" id="customFile" />

                    <input type="submit" className="btn-primary mt-4" onClick={handaleSetEvent} />


                </article>
            </div>

        </section>
    );
};

export default AddEvent;