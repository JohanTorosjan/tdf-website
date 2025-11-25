// src/pages/Home.js
import scriptsbg from "../assets/scripts-bg.jpg";
import scriptsbgtel from "../assets/scripts-bg-tel.jpg";
import episode1 from "../assets/episode1.jpg";
import dsen from "../assets/dsen.png";
import dsfr from "../assets/dsfr.png";

import './Scripts.css'
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'
import Sommaire from '../components/Summary.jsx'
import React, { useState, useEffect } from 'react';

function Scripts() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const episodes = [
    { className: 'episode-1', titre: 'EP.1' },
    { className: 'episode-2', titre: 'EP.2' },
    { className: 'episode-3', titre: 'EP.3' },
    { className: 'episode-4', titre: 'EP.4' },
    { className: 'episode-5', titre: 'EP.5' },
    { className: 'episode-6', titre: 'EP.6' },
  ];

  return (
    <div className="scripts-container">
      <ScrollToTopButton />

      <div className="scripts-title">
        <h1>Scripts</h1>
      </div>

      <div
        className="scripts-hero"
        style={{ backgroundImage: `url(${isMobile ? scriptsbgtel : scriptsbg})` }}
      />

      {/* Desktop : un seul sommaire */}
      {!isMobile && (
        <Sommaire items={episodes} />
      )}

      {/* Mobile : deux sommaires avec 3 épisodes chacun */}
      {isMobile && (
        <>
          <Sommaire items={episodes.slice(0, 3)} />
          <Sommaire items={episodes.slice(3, 6)} />
        </>
      )}

<div className="scripts-content">
  <div className="episode-section">
    {/* <div className="episode-header"> */}
              <img
          className="episode1"
          src={episode1}
          alt="Mon illustration"
        />
    {/* </div> */}
    
    <div className="episode-body">
      <p>
After a spectacular crash during the Tour de France, the French cycling team DeepBlue falls apart, leaving behind broken careers and an uncertain future. A few months later, Nora Ménia, an ambitious businesswoman known for rescuing struggling companies, buys the team despite the objections of her partner and associate, Raphaël. To her, it’s a golden opportunity.
      </p>
      <p>
Nora quickly grasps the stakes of professional cycling: a sport where the effort is collective, but the victory is personal. Her first mission is to rebuild the team and convince its long-time leader, Mathias Hoffman, to stay.
      </p>
            <p>
Mathias is torn between his loyalty to DeepBlue and an enticing offer from Galactic, a major Italian team. Managed by his mother Katrine, who encourages him to join Galactic alongside his loyal teammate and best friend Andrea, he discovers that the leadership position he was promised will ultimately go to Andrea. He therefore chooses to stay with DeepBlue, abruptly cutting ties not only with his mother, who decides to follow Andrea, but also with his former friend, who has now become the leader at Galactic and a redoubtable future rival.
      </p>
                  <p>
Nora rebuilds her roster around Mathias and sets out to recruit riders driven by a hunger for redemption. During a Rad Race, she spots Ayden Legrand, a twenty-year-old orphan - a loner, a daredevil and a true cycling prodigy. Impressed by his flair, she offers him a place on the team. Ayden, who is hiding a heart condition, is torn between seizing this once-in-a-lifetime chance at the risk of his health or undergoing surgery and temporarily giving up cycling. But Nora leaves him no choice: it’s now or never. Realizing the opportunity may never come again, he ultimately accepts.
      </p>
                        <p>
 At the season’s opening briefing, Nora announces that DeepBlue’s participation in the next Tour de France depends on winning the Paris-Roubaix race. With only four months to prepare, the mission borders on the impossible. The grueling training pushes the fragile balance of the team to its limits. Ayden, meanwhile, struggles to adapt to this relentless discipline and authority, while an ambiguous relationship, somewhere between fascination and rivalry, develops between him and Mathias.
      </p>
                              <p>
In the mud and chaos of the Paris–Roubaix cobblestones, where everything should have been set up for Mathias to win, Ayden, fueled by adrenaline and the obsession to cross the finish line first, breaks the team’s strategy and causes their defeat, destroying their chances of being invited to the Tour. A violent argument erupts between the two men, and Ayden, exhausted by the suffocating rules, decides to leave the team.
      </p>
                                    <p>
 Against all odds, Nora manages to convince the Tour’s director to give them one last chance, betting on the return of a fallen champion to guarantee a spectacle. Meanwhile, Ayden prepares to undergo surgery, but memories of the race and the intoxicating pull of the peloton catch up with him: he is ready to risk his life for one more shot at glory.
      </p>
    </div>

    <div className="episode-buttons">
      <button className="script-button">    <img
          className="ds"
          src={dsen}
          alt="loading"
        /></button>
      <button className="script-button">    <img
          className="ds"
          src={dsfr}
          alt="loading"
        /></button>
    </div>
  </div>
</div>
    </div>
  );
}

export default Scripts;
