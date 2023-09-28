import { useState, useEffect } from "react";
import FeedBack from "./Feedback";
import FormOption from "./FormOption";
import ErrorInfo from "./ErrorInfo";
import { submitAPI } from "./mockApi";

/**
 * Options of the selector.
 */
const occasions = ["Birthday", "Anniversary"];

/**
 * The component is the main form.
 */
export default function ReservationForm(props) {
    /* State for input items. */
    const [date, setDate] = useState("")
    const [time, setTime] = useState("");
    const [guest, setGuests] = useState("1");
    const [occasion, setOccasion] = useState(occasions[0]);

    /* State for time and submit button, set to false to diable it. */
    const [timeStatus, setTimeStatus] = useState(false);
    const [buttonStatus, setBottonStatus] = useState(false);

    /* State for submit result. */
    const [submitRes, setSubmitRes] = useState(0);
    /* State for if the form is submitting. */
    const [isSubmitting, setisSubmitting] = useState(false)

    /* State for input onBlur. */
    const [dateTouched, setDateTouched] = useState(false);
    const [timeTouched, setTimeTouched] = useState(false);
    const [guestTouched, setGuestTouched] = useState(false);
    const [occasionTouched, setOccasionTouched] = useState(false);


    /* onChange functions. */
    const handleDateChange = (e) => {
        // check if the date is really changed.
        // if (e.target.value === date) return;
        setDate(e.target.value);
        // clear the time input value and disable it.
        setTimeStatus(false);
        // fetch data.
        props.dispatch({type:"fetch", date: e.target.value});
    };
    const handleTimeChange = (e) => setTime(e.target.value);
    const handleGuestChange = (e) => setGuests(e.target.value);
    const handleOccasionChange = (e) => setOccasion(e.target.value);

    /* onBlur call back functions. */
    const handleDateBlur = (e) => setDateTouched(true);
    const handleTimeBlur = (e) => setTimeTouched(true);
    const handleGuestBlur = (e) => setGuestTouched(true);
    const handleOccasionBlur = (e) => setOccasionTouched(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        submit({date: date, time: time, guest: guest, occasion: occasion});
    }

    /* Use mockApi to mock submit for the link of meta is down. */
    const submit = (data) => {
        setisSubmitting(true);
        submitAPI(data)
            .then((response) => {
                setSubmitRes(1);
                setisSubmitting(false);
                //clearForm();
                setLocalStorage({...data, id: response});
            })
            .catch((e) => {
                setSubmitRes(2);
                setisSubmitting(false);
            });
    }

    // Set error information to call the Error component.
    const setErrInfoOfTime = () => {
        if (props.availableTimes.status === "unavailable") {
            return "The date is unavailable, Please pick another day.";
        }
        return "Please pick a date to see available time.";
    }

    /** Save to local storage when got a success unduplicated reservation. */
    const setLocalStorage = (reservation) => {
        let reservations = JSON.parse(localStorage.getItem('reservations'));
        if (reservations.filter() > 0) new Error('Duplicated id is not allowed.');
        reservations === null ? reservations = [reservation] : reservations.push(reservation);
        localStorage.setItem("reservations", JSON.stringify(reservations));
    }

    // Set time input to true when date is available
    useEffect(() => {
        if (props.availableTimes.status === "available" && props.availableTimes.date === date) {
            setTimeStatus(true);
        }
        if (!isSubmitting && date !== "" && time !=="" && guest !== "" && occasion !== "") {
            setBottonStatus(true);
        } else {
            setBottonStatus(false);
        }
    }, [props.availableTimes.status, props.availableTimes.date, date, time, guest, occasion, isSubmitting])

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                        <label className="block font-karla text-lg antialiased drop-shadow-xl font-bold text-pjgreen mb-2" htmlFor="res-date">Choose date</label><br/>
                        <input className="font-karla text-lg bg-pjgray text-pjblack shadow border rounded px-3 ml-2 w-full text-center p-1.5 focus:outline-none focus:shadow-outline" onBlur={handleDateBlur} type="date" id="res-date" value={date} onChange={handleDateChange} />
                        {dateTouched && date === "" && <ErrorInfo info="Plese select a date"/>}
                    </div>
                    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                        <label className="block font-karla text-lg antialiased drop-shadow-xl font-bold text-pjgreen mb-2" htmlFor="res-time">Choose time</label><br/>
                        <select className={"font-karla text-lg bg-pjgray text-pjblack shadow border rounded px-3 ml-2 w-full text-center p-2.5 focus:outline-none focus:shadow-outline" } id="res-time" onBlur={handleTimeBlur} disabled={!timeStatus} value={time} onChange={handleTimeChange} >
                            {props.availableTimes.status === "available" && <FormOption lst={props.availableTimes.lst} />}
                        </select>
                        {(props.availableTimes.status !== "available" && <ErrorInfo info={setErrInfoOfTime()}/>)
                        || (timeTouched && time === "" && timeStatus === true && <ErrorInfo info="Plese select a time"/>)}
                    </div>
                    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                        <label className="block font-karla text-lg antialiased drop-shadow-xl font-bold text-pjgreen mb-2" htmlFor="guests" value={guest} onChange={handleGuestChange}>Number of guests</label><br/>
                        <input className="font-karla text-lg bg-pjgray text-pjblack shadow border rounded px-3 ml-2 w-full text-center p-1.5 focus:outline-none focus:shadow-outline" onBlur={handleGuestBlur} type="number" placeholder="1" min="1" max="10" id="guests" value={guest} onChange={handleGuestChange}/>
                        {guestTouched && guest === "" && <ErrorInfo info="Plese input the number of guests"/>}
                    </div>
                    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                        <label className="block font-karla text-lg antialiased drop-shadow-xl font-bold text-pjgreen mb-2 focus:outline-none focus:shadow-outline" htmlFor="occasion" >Occasion</label><br/>
                        <select className="font-karla text-lg bg-pjgray text-pjblack shadow border rounded px-3 ml-2 w-full text-center p-2.5 focus:outline-none focus:shadow-outline" id="occasion" onBlur={handleOccasionBlur} value={occasion} onChange={handleOccasionChange} >
                            <FormOption lst={occasions}/>
                        </select>
                        {occasionTouched && occasion === "" && <ErrorInfo info="Plese select an occasion"/>}
                    </div>
                </div>
                {/* Hide guest information inputs
                <div class="invisible h-0">
                    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                        <label className="block font-karla text-lg antialiased drop-shadow-xl font-bold text-pjgreen mb-2" htmlFor="firstname">First name:</label><br/>
                        <input className="font-karla text-lg bg-pjgray shadow border rounded w-full py-2 px-3 text-pjblack leading-tight focus:outline-none focus:shadow-outline" id="firstname" name="firstname" type="text" value="ddd" />
                    </div>
                    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                        <label className="block font-karla text-lg antialiased drop-shadow-xl font-bold text-pjgreen mb-2" htmlFor="lastname">Last name:</label><br/>
                        <input className="font-karla text-lg bg-pjgray shadow border rounded w-full py-2 px-3 text-pjblack leading-tight focus:outline-none focus:shadow-outline" id="lastname" name="lastname" type="text" value="" />
                    </div>
                    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                        <label className="block font-karla text-lg antialiased drop-shadow-xl font-bold text-pjgreen mb-2" htmlFor="email">Email:</label><br/>
                        <input className="font-karla text-lg bg-pjgray shadow border rounded w-full py-2 px-3 text-pjblack leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" value="" />
                    </div>
                </div>
                */}
                <FeedBack visible={submitRes}/>
                <input className="bg-pjorange text-pjgray font-karla text-lg w-2/3 py-2 px-4 rounded-lg shadow-lg hover:outline-none hover:shadow-outline hover:bg-pjyellow hover:text-pjgreen disabled:bg-pjgray disabled:text-white" aria-label="On Click" type="submit" value="Make Your reservation" disabled={!buttonStatus || isSubmitting} />
            </fieldset>
        </form>
    )
}



