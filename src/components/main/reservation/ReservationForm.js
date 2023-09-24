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
    const [date, setDate] = useState("")
    const [timeStatus, setTimeStatus] = useState(false);
    const [time, setTime] = useState("");
    const [guest, setGuests] = useState("1");
    const [occasion, setOccasion] = useState(occasions[0]);
    const [submitRes, setSubmitRes] = useState(0);

    const handleDateChange = (e) => {
        // check if the date is really changed.
        // if (e.target.value === date) return;
        setDate(e.target.value);
        // clear the time input value and disable it.
        console.log("date change.")
        setTimeStatus(false);
        // fetch data.
        props.dispatch({type:"fetch", date: e.target.value});
    };
    const handleTimeChange = (e) => setTime(e.target.value);
    const handleGuestChange = (e) => setGuests(e.target.value);
    const handleOccasionChange = (e) => setOccasion(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        submit({date: date, time: time, guest: guest, occasion: occasion});
    }

    console.log(date, time, guest, occasion, new Date());

    // mock submit
    const submit = (data) => {
        submitAPI(data)
            .then((response) => setSubmitRes(1))
            .catch((e) => setSubmitRes(2));
    }

    // set error information depends on status of API>
    const setErrInfoOfTime = () => {
        if (props.availableTimes.status === "unavailable") {
            return "The date is unavailable, Please pick another day.";
        }
        return "Please pick a date to see available time.";
    }

    // set time input to true when date is available
    useEffect(() => {
        if (props.availableTimes.status === "available" && props.availableTimes.date === date) {
            console.log("effect: set time status to true");
            setTimeStatus(true);
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                        <label className="block font-karla text-lg antialiased drop-shadow-xl font-bold text-pjgreen mb-2" htmlFor="res-date">Choose date</label><br/>
                        <input className="font-karla text-lg bg-pjgray text-pjblack shadow border rounded px-3 ml-2 w-full text-center p-1.5 focus:outline-none focus:shadow-outline" type="date" id="res-date" value={date} onChange={handleDateChange} />
                    </div>
                    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                        <label className="block font-karla text-lg antialiased drop-shadow-xl font-bold text-pjgreen mb-2" htmlFor="res-time">Choose time</label><br/>
                        <select className={"font-karla text-lg bg-pjgray text-pjblack shadow border rounded px-3 ml-2 w-full text-center p-2.5 focus:outline-none focus:shadow-outline"} id="res-time" disabled={!timeStatus} value={time} onChange={handleTimeChange} >
                            {props.availableTimes.status === "available" && <FormOption lst={props.availableTimes.lst}/>}
                        </select>
                        {props.availableTimes.status !== "available" && <ErrorInfo info={setErrInfoOfTime()}/>}
                    </div>
                    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                        <label className="block font-karla text-lg antialiased drop-shadow-xl font-bold text-pjgreen mb-2" htmlFor="guests" value={guest} onChange={handleGuestChange}>Number of guests</label><br/>
                        <input className="font-karla text-lg bg-pjgray text-pjblack shadow border rounded px-3 ml-2 w-full text-center p-1.5 focus:outline-none focus:shadow-outline" type="number" placeholder="1" min="1" max="10" id="guests" value={guest} onChange={handleGuestChange}/>
                    </div>
                    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                        <label className="block font-karla text-lg antialiased drop-shadow-xl font-bold text-pjgreen mb-2 focus:outline-none focus:shadow-outline" htmlFor="occasion" >Occasion</label><br/>
                        <select className="font-karla text-lg bg-pjgray text-pjblack shadow border rounded px-3 ml-2 w-full text-center p-2.5 focus:outline-none focus:shadow-outline" id="occasion" value={occasion} onChange={handleOccasionChange} >
                            <FormOption lst={occasions}/>
                        </select>
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
                <input className="bg-pjorange text-pjgray font-karla text-lg w-2/3 py-2 px-4 rounded-lg shadow-lg hover:outline-none hover:shadow-outline hover:bg-pjyellow hover:text-pjgreen" type="submit" value="Make Your reservation" />
            </fieldset>
        </form>
    )
}



