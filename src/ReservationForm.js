import ReservationFeedBack from "./ReservationFeedback";

const occasions = ["Party", "Birthday", "Engagement", "Anniversary"];


// TODO slide bar color, visible toggle
export default function ReservationForm() {
    return (
        <section className="mx-3 lg:mx-10">
            <section className="my-auto lg:flex lg:justify-between">
                <form className="mt-3 w-full lg:w-1/2 lg:mx-20 lg:mt-10" action="/reservation" method="post">
                    <div>
                        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                            <label class="block font-karla text-lg text-pjgreen mb-2" htmlFor="numbers">Party Size:</label><br/>
                            <input class="font-karla text-lg text-pjblack" id="numbers" name="numbers" type="range" min="1" max="8" value="4" />
                        </div>
                        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                            <label class="block font-karla text-lg text-pjgreen mb-2" htmlFor="numbers" for="date">Date and time:</label><br/>
                            <input class="font-karla text-lg text-pjblack" id="date" name="date" type="date" value={"2021-01-01"}/>
                            <input class="font-karla text-lg text-pjblack" id="time" name="time" type="time" value={"19:00"}/>
                        </div>
                        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                            <label class="block font-karla text-lg text-pjgreen mb-2" htmlFor="occasion">Choose an occasion:</label><br/>
                            <select class="font-karla text-lg text-pjblack bg-pjgrayborder border-pjgreen rounded-lg block w-full p-2.5" id="occasion" name="occasion" value={occasions[0]}>
                                {occasions.map((occasion) => <option value={occasion.toLowerCase()}>{occasion}</option>)}
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                            <label class="block font-karla text-lg text-pjgreen mb-2" htmlFor="firstname">First name:</label><br/>
                            <input class="font-karla text-lg shadow appearance-none border rounded w-full py-2 px-3 text-pjblack leading-tight focus:outline-none focus:shadow-outline" id="firstname" name="firstname" type="text" value="" />
                        </div>
                        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                            <label class="block font-karla text-lg text-pjgreen mb-2" htmlFor="lastname">Last name:</label><br/>
                            <input class="font-karla text-lg shadow appearance-none border rounded w-full py-2 px-3 text-pjblack leading-tight focus:outline-none focus:shadow-outline" id="lastname" name="lastname" type="text" value="" />
                        </div>
                        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left">
                            <label class="block font-karla text-lg text-pjgreen mb-2" htmlFor="email">Email:</label><br/>
                            <input class="font-karla text-lg shadow appearance-none border rounded w-full py-2 px-3 text-pjblack leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" value="" />
                        </div>
                    </div>
                    <button class="bg-pjgreen text-pjyellow font-karla text-lg mt-5 w-2/3 py-2 px-4 rounded hover:outline-none hover:shadow-outline hover:bg-pjyellow hover:text-pjgreen" id="submit" name="submit" type="sumbit">Submit</button>
                    <ReservationFeedBack />
                </form>
                <section className="invisible lg:visible lg:w-1/2 lg:flex lg:justify-center lg:items-center">
                    <section className="lg:w-80">
                        <img class="max-w-full h-auto rounded-xl" src="image/restauranfood.jpg" alt="picture of restaurant food"/>
                    </section>
                </section>
            </section>
        </section>
    )
}
