import React from 'react';
import {Link } from 'react-router-dom';
import Distant_Healing_1 from './Distant_Healing_1.png';
import Distant_Healing_2 from './Distant_Healing_2.png';
import Distant_Healing_3 from './Distant_Healing_3.png';
import Distant_Healing_4 from './Distant_Healing_4.png';
import Distant_Healing_5 from './Distant_Healing_5.png';

const Instructions = () => {
return (
<div className="Instructions container">
    <div className="flow-text">
        <h1>DISTANT HEALING INSTRUCTIONS</h1>
        <ul>
           
            <img src ={Distant_Healing_1} className="instructionsIcon" alt="Distant Healing Instructions"></img>
            <li>Visualize divine light and love entering you and filling you. Bring this energy down from your head into your heart.
                Believe this energy is within yourself and then you can radiate it outward.
            </li>
          
            <img src ={Distant_Healing_2} className="instructionsIcon" alt="Distant Healing Instructions"></img>
            <li>Visualize the diversion you want to heal. Feel the divine light and love moving outward from you to that
                person. Do this from a state of mind of total relaxation and acceptance with no doubt of the
                effectiveness. Simply allowing the divine to do it's work.
            </li>
            
            <img src ={Distant_Healing_3} className="instructionsIcon" alt="Distant Healing Instructions"></img>
            <li>Visualize your loved one receiving love and light, filling every cell in their bodies. Visualize the
                energy bringing health, happiness, vitality and joy instantly and abundantly.
            </li>
            <img src ={Distant_Healing_4} className="instructionsIcon" alt="Distant Healing Instructions"></img>
            <li>Hold the visualizations for a brief period. Take a break to help you focus intently, avoid being
                distracted and to help you avoid diluting your intention with unwanted feelings or thoughts.
            </li>
            <img src ={Distant_Healing_5} className="instructionsIcon" alt="Distant Healing Instructions"></img>
            <li>Now that you've practiced and are familiar with how to heal from a distance. Choose a person from the Healing Circle to heal!</li>
            <p></p>
    <Link className="btn waves-effect waves-light" to="/" >Healing Circle</Link>
        </ul>
    </div>
    
    
    <p></p>
    <p></p>
</div>
);
};

export default Instructions;