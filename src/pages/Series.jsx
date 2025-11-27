// src/pages/Series.js
import React, { useState, useEffect } from 'react';
import seriesbg from "../assets/series-bg.jpg";
import './Series.css';
import Sommaire from '../components/Summary.jsx'
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'
import themes from "../assets/themes.png";
import arena from "../assets/arena.png";
import separator from "../assets/separator.png";
import moodboardtitle from "../assets/moodboard.png";
import roues from '../assets/3roues.png'
import line from "../assets/line.png";

import Moodboard from '../components/Moodboard.jsx';
function Series() {
      useEffect(() => {
                document.body.scrollTo({
          top: 0,
        });})

        

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





  return (
    
    <div className="series-container">
<ScrollToTopButton/>

      <div className="series-title">
        <h1>The series</h1>
      </div>
      
      <div className="series-hero" style={{ backgroundImage: `url(${seriesbg})` }}>
      </div>
      
      <div className="series-content">
      {!isMobile && (
                        <Sommaire items={[
        { className: 'theme-summary', titre: 'seriesTheme' },
        { className: 'arena-summary', titre: 'arena' },
        { className: 'moodboard-summary', titre: 'Moodboard' },
        { className: 'moodboard-summary', titre: 'Characters' },

        ]}size={'four'} />
      )}



      {isMobile && (
        <div className='Summary-mobile'>
                                  <Sommaire items={[
        { className: 'theme-summary', titre: 'seriesTheme' },
        { className: 'arena-summary', titre: 'arena' },


        ]}size={'two'} />
                                <Sommaire items={[
        { className: 'moodboard-summary', titre: 'Moodboard' },
        { className: 'moodboard-summary', titre: 'Characters' },
        ]}size={'two'} />
          </div>

      )}



        <div className='separator-div'>

    <img
          className="separator-item"
          src={separator}
          alt="loading"
        />  

        </div>
        <section className="series-section synopsis">
          <div className="synopsis-text">
            <p>
              <strong>DEEPBLUE</strong>, the once-legendary French cycling team, is shattered after a spectacular crash during a stage of the Tour de France. <strong>NORA</strong>, a ruthless and opportunistic businesswoman, seizes the opportunity to buy the team for next to nothing, with the goal of restructuring it and turning a profit. A complete outsider to the cycling world, she makes bold and radical decisions that upend the team's balance and challenge the methods of its long-standing sports director. She manages to convince Matteo, the aging star rider, to stay with Deepblue. But that choice comes at a cost: Caterina, his mother and manager, breaks away and follows Andres, Matteo's most loyal teammate, who now becomes his fiercest rival as the new leader of a powerful competing team.
            </p>
            <p>
              <strong>Nora</strong> must now rebuild a team around <strong>Matteo</strong>, scouting for riders who are hungry, reckless and cheap. Outsiders with nothing to lose, fueled by an untamable will to win. That's how she discovers Ayden, a raw cycling prodigy working as a Deliveroo courier. His raw power and wild flair seal the deal.
            </p>
            <p>
              As Nora experiences the sheer magnitude and public fervor of the Tour de France, she begins to grasp just how massive and lucrative this free-to-watch event could be. Together with her partner Raphaël, she hatches a plan to monetize this traveling spectacle. But the lines between business and emotion quickly blur, especially as her relationship with Matteo, charged with admiration and power dynamics, turns increasingly passionate and complex. Caught in a love triangle that threatens to implode everything she's built, Nora finds herself torn. But through her growing bond with Matteo and the team, she's exposed to a world where sacrifice, pain (both physical and emotional), brotherhood and collective strength outweigh profit. The roaring crowds, a budding romance, and Ayden's meteoric rise under her wing force her to confront her contradictions. In trying to exploit the Tour, she might just destroy what makes it sacred. Once cynical and disconnected from the values of sport, Nora learns to reconnect with her working-class roots and embrace her own vulnerability, ultimately risking everything to save the Tour by blowing the whistle on her own plan.
            </p>
            <p>
              <strong>Matteo</strong>, the team's longtime superstar, is haunted by the crash he caused the previous season, one that landed his teammate Thibault in critical condition. The accident didn't just injure Matteo physically; it fractured the team and pushed him away from his loved ones, including his own son, now terrified to watch him race. Matteo embarks on this new season torn between guilt, a burning obsession to win, and a creeping fear of being overtaken by the next generation. He refuses to accept that his career might be over, and he's not ready to share the spotlight. But with Ayden's arrival, championed by Nora, he has no choice. The young prodigy soon surpasses him, seizing the yellow jersey. Through an extraordinary Tour de France, Matteo will finally discover the true meaning of being part of a team and what really matters. Only then will he be able to pass the torch.
            </p>
            <p>
              <strong>Ayden</strong>, a rebellious, solitary orphan, is Nora's wild-card recruit, an unlikely contender for the Tour. A Deliveroo courier with magnetic and insolent energy, he masks his lack of grounding and deep fear of abandonment with a fierce, almost self-destructive drive to win. Convinced he can only rely on himself, he joins Deepblue as a rogue element, challenging Matteo and captivating France with his explosive performances. But over time, Ayden realizes that victory isn't just about individual strength. Embraced by the team, he lets go of his lone-wolf mentality and finally finds the family he never had.
            </p>
          </div>
        <div className='theme-summary'></div>
        </section>
                            <div className='roues-div'>

    <img
          className="roues-item"
          src={roues}
          alt="loading"
        />  

        </div>
        <section className="series-section themes">
            <div className='series-section-title'>
    <img
          className="imgthemes"
          src={themes}
          alt="loading"
        />  
            </div>
                                        <div className='line-div'>

    <img
          className="separator-item"
          src={line}
          alt="loading"
        />  

        </div>
          <div className="themes-content">
            <p className="highlight-block">
              These two champions will clash all season long in a gripping and relentless battle for leadership. Their rivalry echoes the great sports duels (Ronaldo/Messi, Nadal/Federer, Lauda/Hunt) <span className="highlight"><strong>with one key difference: they're on the same team.</strong></span>
            </p>
            <p>
              That's the tragic paradox of professional cycling: while the work is collective, only one can claim glory on the Champs-Élysées. After a chaotic season of preparation, seen through Nora's fresh outsider lens, the team pulls off a surprise victory in the very first week of the Tour. Against all odds, Ayden dethrones Matteo and seizes the yellow jersey, becoming the center of a media frenzy.
            </p>
            <p>
              Could a Frenchman finally win the Tour de France for the first time since 1985?
            </p>
            <p>
              The country dares to dream and "Aydenmania" sweeps across France and beyond. Everyone is captivated by this underdog with an unorthodox past. The series chronicles the epic journey of a team rebuilt in haste, rallying unwanted riders willing to risk it all to prove they belong.
            </p>
            <p>
              <span className="highlight">We'll follow these outcasts as they storm the Tour</span>, winning stages, defending the yellow jersey like starving wolves, dazzling with breakout moves, but also doubting themselves, losing faith, using trickery, standing up to rivals, stumbling, and pushing through the grueling chaos of internal and external battles. Until a final stage where only reconciliation can pave the way to victory.
            </p>
            <p>
              Three perspectives. Three journeys. Who have no business being here, yet who will come together, for better or worse, and leave their mark on the most grueling competition in the history of sports: the third most-watched sporting event in the world after the FIFA World Cup and the Olympics, held every year!
            </p>
            <p>
              This is an immersive dive into the heart of a team, following its journey from rebuilding to triumph, told through powerful themes: rivalry, of course, as the foundation of any competition, but also the collision of two starkly different paths. Matteo, the golden boy who never quite lived up to expectations, now wrestling with the twilight of his career; and Ayden, a magnetic daredevil and orphan, who brings an unprecedented surge of hope to a nation.
            </p>
            <p>
              Drama and intimacy strike: the forbidden love story between Matteo and Nora, Ayden's painful past resurfacing, Nora's fractured family, and the lingering trauma of Thibault's accident that haunts them all, a constant reminder of how deadly this sport can be.
            </p>
            <p className="highlight-block">
              LE TOUR DE FRANCE remains, above all, a resolutely sports-driven and action-packed series.
            </p>
            <p>
              Each race pushes the story forward, with narrative and sporting stakes constantly feeding into one another. Team spirit, humanity, and the values of sport shine through a young, scrappy collective. Erik, the long-standing sporting director and a charismatic, seasoned authority figure, both mentors and challenges Nora in a generational clash over leadership and methods. The audience is invited behind the scenes of this massive, free, traveling spectacle, from the team cars in the heat of the race to the buses during strategy briefings and post-stage debriefs, and even to the massage tables where riders recover. We delve into the riders' most intimate moments of doubt, uncover the secrets of their earpiece exchanges that can turn a stage upside down. Because to survive the 3,000 kilometers of this race, mental strength matters just as much as physical endurance.
            </p>
            <p className="emphasis">
              The show explores the power of the collective without shying away from the quiet deals, the big plays, the betrayals, and the raw humanity behind the rider once the helmet, glasses, and jersey come off.
            </p>
            <p>
              Ultimately, the story is about cohesion and reconciliation. Rivals forced to unite. Generations clashing and finding common ground. And deeply personal reckonings with one's past, one's roots, and one's wounds. Nora, Matteo, and Ayden each learn to rise above their pride, grudges, and fears, to reclaim the meaning of their own story.
            </p>
          </div>
          <div className='arena-summary'></div>
        </section>

                            <div className='roues-div'>

    <img
          className="roues-item"
          src={roues}
          alt="loading"
        />  

        </div>

        <section className="series-section arena">
            <div className='series-section-title'>
    <img
          className="imgthemes"
          src={arena}
          alt="loading"
        />  

            </div>
                            <div className='line-div'>

    <img
          className="separator-item"
          src={line}
          alt="loading"
        />  

        </div>
             <div className="arena-content">
            <p className="highlight-block">
              This series is both an international arena and a love letter to France and its people.
            </p>
            <p>
              No landscape is left out, from the Normandy beaches facing Mont-Saint-Michel to the punishing Alpine climbs, the cobbled streets of Roubaix and the historic heart of Avignon, all the way to the gentle beauty of the Côte d'Azur. The characters move through breathtaking settings that serve as the vast stage for a grand spectacle. Far from being mere scenic backdrops, these places actively drive the drama, especially for Ayden, the orphan bounced from foster homes to group care, now riding back through the roads of his past. A child from everywhere and son of nowhere, Ayden will end up being embraced by France, and even by the world.
            </p>
            <p className="highlight-block final">
              Six episodes of 52 minutes each, propelled at full speed with no room to catch your breath or ease the cramps!
            </p>
          </div>
                            <div className='moodboard-summary'></div>

        </section>

                            <div className='roues-div'>

    <img
          className="roues-item"
          src={roues}
          alt="loading"
        />  

        </div>
<section className="series-section arena">
            <div className='series-section-title'>
    <img
          className="imgthemes"
          src={moodboardtitle}
          alt="loading"
        />  

            </div>
                            <div className='line-div'>

    <img
          className="separator-item"
          src={line}
          alt="loading"
        />  

        </div>
             <div className="arena-content">

          </div>
        </section>

        
      </div>
      
                                <Moodboard/>
                                                            <div className='roues-div'>

    <img
          className="roues-item"
          src={roues}
          alt="loading"
        />  

        </div>

    </div>
  );
}

export default Series;
