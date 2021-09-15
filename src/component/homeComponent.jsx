import React from 'react';
import STAFFS from './staffs';
import './clock.js';

function Home(props){
    return(
        <div className="container  " >
            <div className="row ">
                <div className="col-md-5 text-center mt-3">
                    <img src="./asset/images/chu-nhan.jpg" class="img-fluid  rounded-circle"
                        width="1000" height="500"></img>

                </div>


                <div className="col-md-7 mt-5 ">
                    <h2>
                        <b>
                            Không biết đã bao nhiêu lần con người buông tay từ bỏ
                            khi mà chỉ một chút nỗ lực,
                            một chút kiên trì nữa thôi là anh ta sẽ đạt được thành công.
                        </b>
                    </h2>
                    <h4><i>-Elbert Hubbard-</i></h4>

                </div>
            </div>
            <div class="clock-container bg-dark">
                <div class="clock-col">
                    <p class="clock-day clock-timer">
                    </p>
                    <p class="clock-label">
                        day
                    </p>
                </div>
                <div class="clock-col">
                    <p class="clock-hours clock-timer">
                    </p>
                    <p class="clock-label">
                        Hours
                    </p>
                </div>
                <div class="clock-col">
                    <p class="clock-minutes clock-timer">
                    </p>
                    <p class="clock-label">
                        Minutes
                    </p>
                </div>
                <div class="clock-col">
                    <p class="clock-seconds clock-timer">
                    </p>
                    <p class="clock-label">
                        Seconds
                    </p>
                </div>
            </div>
        </div>

    )
        
    
}
export default Home;