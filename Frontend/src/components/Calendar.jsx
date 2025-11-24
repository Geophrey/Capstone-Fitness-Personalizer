export default function Calendar() {
    return (
        <div className="calendar">
            <section className="header">
                <div>
                    <button>{"<"}</button>
                    <span className="year">2025</span>
                    <button>{">"}</button>
                </div>

                <div>
                    <button>{"<"}</button>
                    <span className="month">december</span>
                    <button>{">"}</button>
                </div>
            </section>

            <section className="body">
                <table>
                    <tr className="daysOfTheWeek">
                        <th className="day" id="sunday">Sunday</th>
                        <th className="day" id="monday">Monday</th>
                        <th className="day" id="tuesday">Tueday</th>
                        <th className="day" id="wednesday">Wedday</th>
                        <th className="day" id="thursday">Thuday</th>
                        <th className="day" id="friday">Friday</th>
                        <th className="day" id="saturday">Satday</th>
                    </tr>
                    <tr className="week1">
                        <td className="week1Day" id="sunday">Sun</td>
                        <td className="week1Day" id="monday">Mon</td>
                        <td className="week1Day" id="tuesday">Tue</td>
                        <td className="week1Day" id="wednesday">Wed</td>
                        <td className="week1Day" id="thursday">Thur</td>
                        <td className="week1Day" id="friday">Fri</td>
                        <td className="week1Day" id="saturday">Sat</td>
                    </tr>
                    <tr className="week2">
                        <td className="week2Day" id="sunday">Sun</td>
                        <td className="week2Day" id="monday">Mon</td>
                        <td className="week2Day" id="tuesday">Tue</td>
                        <td className="week2Day" id="wednesday">Wed</td>
                        <td className="week2Day" id="thursday">Thur</td>
                        <td className="week2Day" id="friday">Fri</td>
                        <td className="week2Day" id="saturday">Sat</td>
                    </tr>
                    <tr className="week3">
                        <td className="week3Day" id="sunday">Sun</td>
                        <td className="week3Day" id="monday">Mon</td>
                        <td className="week3Day" id="tuesday">Tue</td>
                        <td className="week3Day" id="wednesday">Wed</td>
                        <td className="week3Day" id="thursday">Thur</td>
                        <td className="week3Day" id="friday">Fri</td>
                        <td className="week3Day" id="saturday">Sat</td>
                    </tr>
                    <tr className="week4">
                        <td className="week4Day" id="sunday">Sun</td>
                        <td className="week4Day" id="monday">Mon</td>
                        <td className="week4Day" id="tuesday">Tue</td>
                        <td className="week4Day" id="wednesday">Wed</td>
                        <td className="week4Day" id="thursday">Thur</td>
                        <td className="week4Day" id="friday">Fri</td>
                        <td className="week4Day" id="saturday">Sat</td>
                    </tr>
                    <tr className="week5">
                        <td className="week5Day" id="sunday">Sun</td>
                        <td className="week5Day" id="monday">Mon</td>
                        <td className="week5Day" id="tuesday">Tue</td>
                        <td className="week5Day" id="wednesday">Wed</td>
                        <td className="week5Day" id="thursday">Thur</td>
                        <td className="week5Day" id="friday">Fri</td>
                        <td className="week5Day" id="saturday">Sat</td>
                    </tr>
                </table>
            </section>
        </div>
    );
}
