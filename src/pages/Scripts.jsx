// src/pages/Home.js
import scriptsbg from "../assets/scripts-bg.jpg";
import scriptsbgtel from "../assets/scripts-bg-tel.jpg";
import episode1 from "../assets/episode1.jpg";
import episode2 from "../assets/episode2.png";
import episode3 from "../assets/episode3.png";
import episode4 from "../assets/episode4.png";
import episode5 from "../assets/episode5.png";
import episode6 from "../assets/episode6.png";

import route from "../assets/route.png";

import dsen from "../assets/dsen.png";
import dsfr from "../assets/dsfr.png";

import './Scripts.css'
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'
import Sommaire from '../components/Summary.jsx'
import React, { useState, useEffect } from 'react';

function Scripts() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {

                    document.body.scrollTo({
              top: 0,
            })
    
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
              <div className='episode-1'></div>

  <div className="episode-section">
    <div className="title-wrapper">
              <img
          className="episode1"
          src={episode1}
          alt="Mon illustration"
        />
    </div>
    
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
                            <div className='episode-2'></div>

    </div>
  </div>

</div>

 <img
          className="route"
          src={route}
          alt="Mon illustration"
        />

<div className="scripts-content">

  <div className="episode-section">
    <div className="title-wrapper">
              <img
          className="episode1"
          src={episode2}
          alt="Mon illustration"
        />
    </div>
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
                            <div className='episode-3'></div>

    </div>
  </div>
</div>

 <img
          className="route"
          src={route}
          alt="Mon illustration"
        />
<div className="scripts-content">
  <div className="episode-section">
    <div className="title-wrapper">
              <img
          className="episode1"
          src={episode3}
          alt="Mon illustration"
        />
    </div>
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
                 
                                     <div className='episode-4'></div>

    </div>   
  </div>
</div>

 <img
          className="route"
          src={route}
          alt="Mon illustration"
        />

<div className="scripts-content">
  <div className="episode-section">
    <div className="title-wrapper">
              <img
          className="episode1"
          src={episode4}
          alt="Mon illustration"
        />
    </div>
        <div className="episode-body">
      <p>
The announcement of the yellow jersey’s exclusion casts a shadow over the competition   and fractures Deepblue, which chooses to continue without Ayden. But the peloton rises up in protest: in an unprecedented show of solidarity, the riders refuse to start the stage without the yellow jersey. The race authorities give in, and Ayden is reinstated but remains deeply affected  by what he experiences  as abandonment.
On the fearsome  slopes of Mont Ventoux, under a hellish  thunderstorm, the young prodigy struggles to find his rhythm, until Nora manages to neutralize  the race with a move that borders on illegality. The yellow jersey is saved, but Ayden is only a shadow of his former self.. During a rest day in Nice, the city where he spent his early childhood, Nora tries to rebuild his trust and encourages him to forgive his mother.
      </p>
      <p>
For Nora, Ayden’s exclusion throws her entire plan off course. She decides to team up with the head of Galactic, with Raphaël’s help. But Nora realizes too late that Scott's ambition surpasses her own. He wants to go as far as creating a competition that rivals the Tour de France. Nora realizes her attachment to the team, to Mathias, and to the values of the Tour. It's also by reconnecting with her sister that she becomes aware of what she is betraying. She wavers between two parts of herself, until everything shatters when Raphaël discovers her affair with Mathias.      </p>
            <p>
The former star is at the center of all contradictions, torn between pride and loyalty. Still weakened by his crash, he’s tempted by doping when his mother offers him a banned painkiller. How far is he willing to go? During a sweltering stage along the Mediterranean coast, driven  by his rage  to win, Mathias makes a brutal choice: he betrays Ayden mid-race. The yellow jersey breaks down mentally and loses his lead to Andrea. Now more isolated than ever, Mathias is sidelined by the team, and he is on the verge of breaking up with Nora.    </p>
                  <p>
                    Still reeling from Mathias’s betrayal, Ayden’s long-awaited meeting with his mother turns out to be a disillusionment. As morale hits rock bottom, a final blow crushes the team: Thibault, their friend and long-time teammate, has succumbed to his injuries.

</p>                       
    </div>   
                                         <div className='episode-5'></div>

  </div>
</div>
 <img
          className="route"
          src={route}
          alt="Mon illustration"
        />

<div className="scripts-content">
  <div className="episode-section">
    <div className="title-wrapper">
              <img
          className="episode1"
          src={episode5}
          alt="Mon illustration"
        />
    </div>
        <div className="episode-body">
      <p>
        Thibault’s death shakes the entire team and plunges Mathias into deep guilt. Overwhelmed with grief, he allows himself a rare night of release, sharing drinks with Ayden. The lifelong rivals grow closer, but alcohol blurs the lines. The evening ends in police custody, threatening their participation in the next stage. This forced proximity brings a moment of truth. Mathias comes to understand that great victories are above all, collective and finally chooses to support Ayden as team leader. Thanks to Nora’s intervention, they manage to start the stage at the last possible moment, deep in the Provençal hinterland.

      </p>
      <p>
Nora, loses control of her project, now monopolized by Scott and Raphaël, who seeks revenge for her affair with Mathias. The death of Thibault, combined with her riders’ selflessness and solidarity, hits her like a shockwave, a powerful barrier against the monster she helped create. Her feelings for Mathias are growing stronger, more complicated, and she begins to reconnect with her roots. As she recalls childhood memories of standing with her father on the roadside during the Tour de France, Nora feels a sense of purpose. She decides to stop Scott and Raphaël’s destructive scheme to protect the institution, and everything it represents.
</p>            <p>
    Ayden, for his part, is caught in the crosshairs of the media: the idol is torn down as quickly as he was built up, as violently as people once believed in his dream of victory. Back at the police station with Mathias, he finds unexpected solidarity with his old rival. He finally feels like he is part of a team.
</p>
  <p>
During a spectacular night stage through the walled city of Briançon, Ayden regains his fighting spirit, and for the first time, the two riders show real chemistry on the bike. Despite exhaustion, they pull off a bold tactical move that thwarts Andrea's plans, still in the yellow jersey. It's the beginning of the comeback!  But as the hope of victory flickers back to life, Ayden’s heart gives out, and he collapses from cardiac arrest.
</p>                       
    </div>   
                                         <div className='episode-6'></div>

  </div>
</div>



 <img
          className="route"
          src={route}
          alt="Mon illustration"
        />

<div className="scripts-content">
  <div className="episode-section">
    <div className="title-wrapper">
              <img
          className="episode1"
          src={episode6}
          alt="Mon illustration"
        />
    </div>
        <div className="episode-body">
      <p>
For the team, following Ayden's cardiac incident, there is only one option: he must withdraw. Against all odds, it’s Mathias who stands up for him. He chooses to protect Ayden’s dream, believing he can still win, even if it means bending the rules. The mission is clear for the final stages: keep Ayden’s heart rate below 200 beats per minute, at all costs.
      </p>
      <p>
Racing along Alpine ridges, Ayden finds the strength to push beyond his limits, carried by the unwavering support of his team. But it’s not enough to hold off the threat of Andrea, who reclaims the lead in the general ranking. Everything will be decided in the final  and legendary stage, at the Alpe d’Huez.
</p>            <p>
Raphaël uses Thibault’s death as a pretext to challenge the Tour’s safety standards. Cornered, Nora has no choice but to sacrifice herself to save the institution. She calls a press conference and publicly exposes the conspiracy. The fallout is immediate. She is expelled from the race and financially ruined. She can’t attend the final stage but delivers a powerful farewell speech to her riders before they set off.</p>
  <p>
From now on, Mathias devotes himself entirely to his team and to his leader, Ayden. This extraordinary Tour, his relationship with Nora, but above all Thibault’s death and the fears of his own son have changed him: he realizes he’s no longer willing to die for victory. Yet, he understands that nothing will stop Ayden, and he chooses to help him continue the race as his side, as a big brother and final shield against the danger closing in, starting with Andrea, now closer than ever to the final win.
</p>        

  <p>
During the last stage, on the dizzying descent of the Galibier, Ayden takes a violent fall, coming close to death. Ayden climbs back on his bike, long enough to give Mathias his last strength so he can go after Andrea and fight for the win. In an epic and brotherly duel on the slopes of the Alpe d’Huez, through pain and sacrifice, Mathias crosses the line as winner. He finally achieves the dream of a lifetime: winning the most difficult and iconic competition there is.
</p>               
    </div>   
  </div>
</div>

    </div>
  );
}

export default Scripts;
