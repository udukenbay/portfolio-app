import React from "react";
import Navbar from "../Navbar/Navbar";
import { ResumeWrapper,
    TextBackground } from './Resume.style';
import { ResumeList } from "./cv.js";

export default function Resume() {
    const list = ResumeList;
    console.log(list);

    // const container = list.map((item) => (
    //     // console.log(value.company + ' ' + index);
    //     <div>
    //        {item.time}
    //     </div>
    // ));

    const container = list.map((item, index) => 
        {
            if(index % 2 !== 0) {
                return <div className="container left">
                            <div className="content">
                                <p>{item.time}</p>
                                <p>{item.company}</p>
                                <p>{item.position}</p>
                                <p>{item.sector}</p>
                                <p>{item.duties}</p>
                                <img src={item.logo} alt={item.company} />
                            </div>
                    </div>
            } else {
                return <div className="container right">
                            <div className="content">
                                <p>{item.time}</p>
                                <p>{item.company}</p>
                                <p>{item.position}</p>
                                <p>{item.sector}</p>
                                <p>{item.duties}</p>
                                <img src={item.logo} alt={item.company} />
                            </div>
                </div>
            }
        }
    );

    return(
        <>
            <Navbar/>
            <ResumeWrapper>
                <div className="timeline">
                    {container}
                </div>
            </ResumeWrapper>
            <TextBackground>Resume</TextBackground>
        </>
    );
}