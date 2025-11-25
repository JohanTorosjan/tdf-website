// src/pages/Home.js
import scriptsbg from "../assets/scripts-bg.jpg";
import scriptsbgtel from "../assets/scripts-bg-tel.jpg";
import episode1 from "../assets/episode1.jpg";
import episode2 from "../assets/episode2.png";
import episode3 from "../assets/episode3.png";

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

<div className="scripts-content">
  <div className="episode-section">
    {/* <div className="episode-header"> */}
              <img
          className="episode1"
          src={episode2}
          alt="Mon illustration"
        />
    {/* </div> */}
        <div className="episode-body">
      <p>
After months of training, the Tour de France finally begins. Deepblue, still a fragile unit, has one clear target: to get Mathias into the top ten by the end of the first week. Erik is relying on the flat stages to build momentum, before the brutal climbs begin. You can’t win the Tour in the first week, but you can certainly lose it.
      </p>
      <p>
The riders are driven by wild ambition, prepared to push their bodies and sacrifice everything in pursuit of glory. None of them realizes that, paradoxically, success would also spell the end of the team as they know it. Thanks to Raphaël, Nora is on the verge of closing a high-stakes deal with a Korean investor. If Deepblue finishes in the top five, the team will be bought out, only to be dismantled and reassembled as the first fully Asian team in the World Tour.
      </p>
            <p>
Nora enters the Tour like a gambler, strategic, cold-blooded, ready to manipulate the team’s internal dynamics if that’s what it takes to win. But out on the ground, reality hits. She finds herself in a high-stakes arena, swept up by the scale of the spectacle, the relentless media circus, and the brutal intensity of the peloton. Above all, she has to manage egos and personalities, especially Ayden’s.      </p>
                  <p>
The former delivery rider is a loose cannon. He refuses to play for the team and won’t fall in line to support Mathias. Impulsive and unpredictable, he makes a critical error: in trying to lead out William in a sprint, he causes him to crash. Deepblue is now down to seven riders, missing a crucial rider. Worse still, William’s job was to shield Mathias from Andrea, once his teammate, now his fiercest rival. Andrea knows Mathias’s weaknesses better than anyone, and the entire Galactic squad is working to exploit them to make him crash. 
      </p>
                        <p>
In this tense context, William’s fall is a wake-up call for Ayden. For the first time, he understands the cost of his actions, and the need to fall into line. A form of balance starts to emerge. As a unit, Deepblue launches into the time trial like a band of warriors. But just as he’s leading, Mathias is overwhelmed by flashbacks of his crash with Thibault on this same course and he breaks. Faced with the urgency of the situation, Nora makes a radical and unexpected  call: she orders Ayden to abandon Mathias to take  the lead. Against all expectations, he wins the stage and claims the yellow jersey! But instead of uniting the team, the victory deepens the fracture. While the team starts to dream bigger, Mathias sees this success as a betrayal and is determined to regain his rightful place.			      </p>
                              <p>
Nora, on the other hand, sees her ambitions soar. Exhilarated by the scale of the competition, she glimpses the colossal financial gains that the Tour de France would represent by monetizing it. She decides to risk it all and tears up the deal with the Koreans. It is then that she discovers that Ayden has a heart condition. A potentially fatal disorder, threatening to bring down everything she has gambled on. 
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


<div className="scripts-content">
  <div className="episode-section">
    {/* <div className="episode-header"> */}
              <img
          className="episode1"
          src={episode3}
          alt="Mon illustration"
        />
    {/* </div> */}
        <div className="episode-body">
      <p>
In an electric atmosphere, Ayden’s conquest of the yellow jersey sparks huge hopes within Deepblue. But the revelation of his heart condition forces Nora to make a tough decision: she takes the risk of letting him race and keeping his illness a secret. Thrust into the spotlight, Ayden becomes intoxicated with his success. The exposure awakens ghosts from his past and unsettles him. A woman claiming to be his mother tries to get in touch.
      </p>
      <p>
Out on the road, the pressure intensifies. Ayden must now prove himself in the mountains, facing the world’s top climbers. He becomes the man to beat, including for Mathias who refuses to settle into the role of a mere teammate. Nora takes advantage of the situation to pursue her own goals by backing her yellow jersey, deepening the rift between her and Mathias. But criticism is mounting and a scandal erupts. Accused of having used a false license the previous year, Ayden is threatened to be excluded from the competition.
      </p>
            <p>
Nora finds herself cornered, with her plans to monetize the Tour hanging by a thread. She refuses to yield, not even when Scott, the billionaire owner of Galactic, offers to buy Ayden from her. In the midst of the turmoil, Nora is caught off guard by a visit from her sister, who turns up unannounced on the Tour. A presence that rekindles a past she would rather keep at bay. Off balance, Nora realizes her relationship with Raphaël has now become intertwined with business interests, while her unresolved bond with Mathias continues to disturb her more and more. Pulled between romantic tension and professional pressure, their relationship sparks fly.
  </p>
                  <p>
Meanwhile, Mathias sees his world falling apart. Consumed by bitterness, he blames Nora for what he sees as a betrayal, and provokes Ayden with growing aggression, both off the road and within the peloton. Andrea seizes on this internal rivalry to close the gap with Deepblue. Determined to take back his place, Mathias throws caution aside during a stage through the Banyuls vineyards, until he’s hit by a car in a spectacular crash. But despite the violence of the impact, he gets back on his feet, proving to everyone he hasn’t surrendered yet.      </p>
                        <p>
On the mythical slopes of the Tourmalet, the pressure reaches its peak: Ayden becomes everyone’s target, Mathias and Andrea included. As Andrea looks set to claim the stage, Ayden crosses the line first. Everyone now believes in his chances of winning the Tour. The episode ends with Nora and Mathias finally giving in to their desire. At that very moment, the news breaks, relentless: Ayden is excluded from the competition.  </p>
                 
    </div>   
  </div>
</div>

    </div>
  );
}

export default Scripts;
