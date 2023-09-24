import FeedBack from "./Feedback";

/**
 * Options of the selector.
 */
const occasions = ["Party", "Birthday", "Engagement", "Anniversary"];


/**
 * The component is the main form.
 */
export default function ReservationForm() {

    const handleSubmit = (e) => alert("submitted");
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                <label className="block font-karla text-lg antialiased drop-shadow-xl font-bold text-pjgreen mb-2" htmlFor="numbers">Party Size:</label><br/>
                <input className=" font-karla text-lg border rounded w-full accent-pjorange focus:accent-pjorange" id="numbers" name="numbers" type="range" min="1" max="8" value="4" />
            </div>
            <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                <label className="block font-karla text-lg antialiased drop-shadow-xl font-bold text-pjgreen mb-2" htmlFor="date">Date and time:</label><br/>
                <div className="flex justify-between">
                    <input className="font-karla text-lg bg-pjgray text-pjblack shadow border rounded px-3 mr-2 w-1/2 text-center focus:outline-none focus:shadow-outline" id="date" name="date" type="date" value={"2021-01-01"} />
                    <input className="font-karla text-lg bg-pjgray text-pjblack shadow border rounded px-3 ml-2 w-1/2 text-center focus:outline-none focus:shadow-outline" id="time" name="time" type="time" value={"19:00"}/>
                </div>
            </div>
            <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                <label className="block font-karla text-lg antialiased drop-shadow-xl font-bold text-pjgreen mb-2 focus:outline-none focus:shadow-outline" htmlFor="occasion">Choose an occasion:</label><br/>
                <select className="font-karla text-lg text-pjblack bg-pjgray border-black rounded-lg block w-full p-2.5" id="occasion" name="occasion" value={occasions[0]}>
                    {occasions.map((occasion) => <option key={occasion.toLowerCase()} value={occasion.toLowerCase()}>{occasion}</option>)}
                </select>
            </div>
        </div>
        <div>
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
        <FeedBack visible={0}/>
        <button className="bg-pjorange text-pjgray font-karla text-lg w-2/3 py-2 px-4 rounded-lg shadow-lg hover:outline-none hover:shadow-outline hover:bg-pjyellow hover:text-pjgreen" id="submit" name="submit" type="sumbit">Submit</button>
        </form>
    )
}



