import React, { useState } from 'react';
import './classSchedule.css';




const ClassSchedule = () => {
    // Define state variables to manage the currently selected class and topic
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');

    // Function to handle button click and update selected class and topic
    const handleButtonClick = (classNumber, topic) => {
        setSelectedClass(`Class ${classNumber}`);
        setSelectedTopic(topic);
    };

    


    return (
        <>
          <div >
            
            <div className="main">
            <h1 id='classHeader'>Class Schedule</h1>
           

           <div className="row-container" style={{fontSize:"22px"}}>
               <div className="class-content">
                   <div className="class-head d-flex px-3" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                       <h3 className="classhead m-0 text-white">Join the class on time!</h3>
                       <div><button className="join-btn" fdprocessedid="z0xq8" style={{ width: 'max-content' }}>Join Class</button></div>
                   </div>

                   <div className="wrapper">
                       <div className="session-container">
                           <div className="session-area"><span style={{ fontSize: 24, fontWeight: 500 }}>FullStack Development Course</span><br />Classes on Weekdays - 7:00 PM : 10:00 PM
                               <hr />
                               <div className="preread-head">Contents:</div>
                               <div className="ml-3"><span className="preread" style={{ whiteSpace: 'pre-wrap' }}>
                                   {/* Display the selected class and topic */}
                                   <div>
                                       {selectedClass && (
                                           <div>
                                               <h4> {selectedClass}</h4>
                                               <p>Topic: {selectedTopic}</p>
                                           </div>
                                       )}
                                   </div></span></div>
                               <div className="preread-head mt-3">Pre-read:</div>
                               <br />
                               <div className="ml-3"><span className="preread" style={{ whiteSpace: 'pre-wrap' }}>No preread
                                   available</span></div>
                           </div>
                       </div>
                   </div>

               </div>
               <div className="sideContainer">

                   <div className="roadmap-container justify-self-center">
                       <div className="roadmap-area">
                           <div className="progress-head">
                               <h3 className="progress-header d-flex justify-content-center">Sessions Roadmap</h3>
                           </div>
                           <div>
                               <div className="sessionsContainer">
                                   {/* Example buttons with class numbers and topics */}
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(1, 'Introduction to React')}>1</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(2, 'Data types')}>2</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(3, 'Hoisting & scope')}>3</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(4, 'types of function')}>4</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(5, 'var vs let vs const-block scoping')}>5</button>
                                       <div className="step_path_bottom" style={{ pointerEvents: 'none' }} />
                                   </div>

                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(10, 'No contents available')}>10</button>
                                       <div className="step_path_bottom" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(9, 'No contents available')}>9</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(8, 'No contents available')}>8</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(7, 'No contents available')}>7</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(6, 'No contents available')}>6</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(11, 'No contents available')}>11</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(12, 'No contents available')}>12</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(13, 'No contents available')}>13</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(14, 'No contents available')}>14</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(15, 'No contents available')}>15</button>
                                       <div className="step_path_bottom" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(20, 'No contents available')}>20</button>
                                       <div className="step_path_bottom" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(19, 'No contents available')}>19</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(18, 'No contents available')}>18</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(17, 'No contents available')}>17</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(16, 'No contents available')}>16</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(21, 'No contents available')}>21</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(22, 'No contents available')}>22</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(23, 'No contents available')}>23</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(24, 'No contents available')}>24</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(25, 'No contents available')}>25</button>
                                       <div className="step_path_bottom" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(30, 'No contents available')}>30</button>
                                       <div className="step_path_bottom" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(29, 'No contents available')}>29</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(28, 'No contents available')}>28</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(27, 'No contents available')}>27</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(26, 'No contents available')}>26</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(31, 'No contents available')}>31</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(32, 'No contents available')}>32</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(33, 'No contents available')}>33</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(34, 'No contents available')}>34</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(35, 'No contents available')}>35</button>
                                       <div className="step_path_bottom" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(40, 'No contents available')}>40</button>
                                       <div className="step_path_bottom" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(39, 'No contents available')}>39</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(38, 'No contents available')}>38</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(37, 'No contents available')}>37</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(36, 'No contents available')}>36</button>
                                       <div className="step_path_left" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(41, 'No contents available')}>41</button>
                                       <div className="step_path_right" style={{ pointerEvents: 'none' }} />
                                   </div>
                                   <div className="roadmap_icon_container RICompleted">
                                       <button onClick={() => handleButtonClick(42, 'No contents available')}>42</button>
                                   </div>
                               </div>


                           </div>
                       </div>
                   </div>
               </div>




           </div>
       




            </div>
          </div>
        </>
    );
};

export default ClassSchedule;
