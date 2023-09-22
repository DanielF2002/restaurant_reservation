import ReservationFeedBack from "./ReservationFeedback";

const occasions = ["Party", "Birthday", "Engagement", "Anniversary"];

export default function ReservationForm() {
    return (
        <section>
            <form>
                <div>
                    <div>
                        <label for="numbers">Party Size:</label><br/>
                        <input id="numbers" name="numbers" type="range" min="1" max="8" value="4" />
                    </div>
                    <div>
                        <label for="date">Date and time:</label><br/>
                        <input id="date" name="date" type="date" value={"2021-01-01"}/>
                        <input id="time" name="time" type="time" value={"19:00"}/>
                    </div>
                    <div>
                        <label for="occasion">Choose an occasion:</label><br/>
                        <select id="occasion" name="occasion" value={occasions[0]}>
                            {occasions.map((occasion) => <option value={occasion.toLowerCase()}>{occasion}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <label for="firstname">First name:</label><br/>
                        <input id="firstname" name="firstname" type="text" value="" />
                    </div>
                    <div>
                        <label for="lastname">Last name:</label><br/>
                        <input id="lastname" name="lastname" type="text" value="" />
                    </div>
                    <div>
                        <label for="email">Email:</label><br/>
                        <input id="email" name="email" type="email" value="" />
                    </div>
                </div>
                <button id="submit" name="submit" type="sumbit">Submit</button>
            </form>
            <ReservationFeedBack />
            <img src="image/restaurantchefB.jpg" alt="picture of restaurant chef"/>
        </section>
    )
}