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
                    <span className="month">December</span>
                    <button>{">"}</button>
                </div>
            </section>

            <section className="body">
                <table>
                    <tr className="daysOfTheWeek">
                        <th className="day" id="sunday">Sunday</th>
                        <th className="day" id="monday">Monday</th>
                        <th className="day" id="tuesday">Tuesday</th>
                        <th className="day" id="wednesday">Wednesday</th>
                        <th className="day" id="thursday">Thursday</th>
                        <th className="day" id="friday">Friday</th>
                        <th className="day" id="saturday">Saturday</th>
                    </tr>
                    <tr className="week1">
                        <td className="week1Day" id="sunday"><button>30</button></td>
                        <td className="week1Day" id="monday"><button>1</button></td>
                        <td className="week1Day" id="tuesday"><button>2</button></td>
                        <td className="week1Day" id="wednesday"><button>3</button></td>
                        <td className="week1Day" id="thursday"><button>4</button></td>
                        <td className="week1Day" id="friday"><button>5</button></td>
                        <td className="week1Day" id="saturday"><button>6</button></td>
                    </tr>
                    <tr className="week2">
                        <td className="week2Day" id="sunday"><button>7</button></td>
                        <td className="week2Day" id="monday"><button>8</button></td>
                        <td className="week2Day" id="tuesday"><button>9</button></td>
                        <td className="week2Day" id="wednesday"><button>10</button></td>
                        <td className="week2Day" id="thursday"><button>11</button></td>
                        <td className="week2Day" id="friday"><button>12</button></td>
                        <td className="week2Day" id="saturday"><button>13</button></td>
                    </tr>
                    <tr className="week3">
                        <td className="week3Day" id="sunday"><button>14</button></td>
                        <td className="week3Day" id="monday"><button>15</button></td>
                        <td className="week3Day" id="tuesday"><button>16</button></td>
                        <td className="week3Day" id="wednesday"><button>17</button></td>
                        <td className="week3Day" id="thursday"><button>18</button></td>
                        <td className="week3Day" id="friday"><button>19</button></td>
                        <td className="week3Day" id="saturday"><button>20</button></td>
                    </tr>
                    <tr className="week4">
                        <td className="week4Day" id="sunday"><button>21</button></td>
                        <td className="week4Day" id="monday"><button>22</button></td>
                        <td className="week4Day" id="tuesday"><button>23</button></td>
                        <td className="week4Day" id="wednesday"><button>24</button></td>
                        <td className="week4Day" id="thursday"><button>25</button></td>
                        <td className="week4Day" id="friday"><button>26</button></td>
                        <td className="week4Day" id="saturday"><button>27</button></td>
                    </tr>
                    <tr className="week5">
                        <td className="week5Day" id="sunday"><button>28</button></td>
                        <td className="week5Day" id="monday"><button>29</button></td>
                        <td className="week5Day" id="tuesday"><button>30</button></td>
                        <td className="week5Day" id="wednesday"><button>31</button></td>
                        <td className="week5Day" id="thursday"><button>1</button></td>
                        <td className="week5Day" id="friday"><button>2</button></td>
                        <td className="week5Day" id="saturday"><button>3</button></td>
                    </tr>
                </table>
            </section>
        </div>
    );
}
