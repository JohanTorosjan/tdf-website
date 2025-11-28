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
import synopsis from '../assets/synopsis.png'
import characters from '../assets/characters.png'
import Moodboard from '../components/Moodboard.jsx';
import char1 from '../assets/char1.png'
import char2 from '../assets/char2.png'
import { useLocation } from 'react-router-dom';

function Series() {
      useEffect(() => {
                document.body.scrollTo({
          top: 0,
        });})

          const location = useLocation();


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



  useEffect(() => {
    // Vérifie s'il y a un hash dans l'URL
    if (location.hash) {
      console.log(location.hash)
const selector = location.hash.replace('#', '.');
    const element = document.querySelector(selector);
      console.log(element)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


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
        { className: 'synopsis-summary', titre: 'Synopsis' },
        { className: 'theme-summary', titre: 'seriesTheme' },
        { className: 'arena-summary', titre: 'arena' },
        { className: 'character-summary', titre: 'Characters' },

        ]}size={'four'} />
      )}



      {isMobile && (
        <div className='Summary-mobile'>
                                  <Sommaire items={[
        { className: 'synopsis-summary', titre: 'Synopsis' },
        { className: 'theme-summary', titre: 'seriesTheme' },


        ]}size={'two'} />
                                <Sommaire items={[
        { className: 'arena-summary', titre: 'arena' },
        { className: 'character-summary', titre: 'Characters' },
        ]}size={'two'} />
          </div>

      )}


{/* 
        <div className='separator-div'>

    <img
          className="separator-item"
          src={separator}
          alt="loading"
        />  

        </div> */}
        <section className="series-section synopsis">
                  <div className='synopsis-summary'></div>

                      <div className='series-section-title'>
    <img
          className="imgthemes"
          src={synopsis}
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
          <div className="synopsis-text">
            <p>
              <strong>DEEPBLUE</strong>, the once-legendary French cycling team, is shattered after a spectacular crash during a stage of the Tour de France. <strong>Nora</strong>, a ruthless and opportunistic businesswoman, seizes the opportunity to buy the team for next to nothing, with the goal of restructuring it and turning a profit. A complete outsider to the cycling world, she makes bold and radical decisions that upend the team's balance and challenge the methods of its long-standing sports director. She manages to convince Mathias, the aging star rider, to stay with Deepblue. But that choice comes at a cost: Caterina, his mother and manager, breaks away and follows Andrea, Mathias's most loyal teammate, who now becomes his fiercest rival as the new leader of a powerful competing team.
            </p>
            <p>
              <strong>Nora</strong> must now rebuild a team around <strong>Mathias</strong>, scouting for riders who are hungry, reckless and cheap. Outsiders with nothing to lose, fueled by an untamable will to win. That's how she discovers Ayden, a raw cycling prodigy working as a Deliveroo courier. His raw power and wild flair seal the deal.
            </p>
            <p>
              As Nora experiences the sheer magnitude and public fervor of the Tour de France, she begins to grasp just how massive and lucrative this free-to-watch event could be. Together with her partner Raphaël, she hatches a plan to monetize this traveling spectacle. But the lines between business and emotion quickly blur, especially as her relationship with Mathias, charged with admiration and power dynamics, turns increasingly passionate and complex. Caught in a love triangle that threatens to implode everything she's built, Nora finds herself torn. But through her growing bond with Mathias and the team, she's exposed to a world where sacrifice, pain (both physical and emotional), brotherhood and collective strength outweigh profit. The roaring crowds, a budding romance, and Ayden's meteoric rise under her wing force her to confront her contradictions. In trying to exploit the Tour, she might just destroy what makes it sacred. Once cynical and disconnected from the values of sport, Nora learns to reconnect with her working-class roots and embrace her own vulnerability, ultimately risking everything to save the Tour by blowing the whistle on her own plan.
            </p>
            <p>
              <strong>Mathias</strong>, the team's longtime superstar, is haunted by the crash he caused the previous season, one that landed his teammate Thibault in critical condition. The accident didn't just injure Mathias physically; it fractured the team and pushed him away from his loved ones, including his own son, now terrified to watch him race. Mathias embarks on this new season torn between guilt, a burning obsession to win, and a creeping fear of being overtaken by the next generation. He refuses to accept that his career might be over, and he's not ready to share the spotlight. But with Ayden's arrival, championed by Nora, he has no choice. The young prodigy soon surpasses him, seizing the yellow jersey. Through an extraordinary Tour de France, Mathias will finally discover the true meaning of being part of a team and what really matters. Only then will he be able to pass the torch.
            </p>
            <p>
              <strong>Ayden</strong>, a rebellious, solitary orphan, is Nora's wild-card recruit, an unlikely contender for the Tour. A Deliveroo courier with magnetic and insolent energy, he masks his lack of grounding and deep fear of abandonment with a fierce, almost self-destructive drive to win. Convinced he can only rely on himself, he joins Deepblue as a rogue element, challenging Mathias and captivating France with his explosive performances. But over time, Ayden realizes that victory isn't just about individual strength. Embraced by the team, he lets go of his lone-wolf mentality and finally finds the family he never had.
            </p>
          </div>
        <div className='theme-summary'></div>
        </section>
                            {/* <div className='roues-div'>

    <img
          className="roues-item"
          src={roues}
          alt="loading"
        />  

        </div> */}
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
            <div className='centered'>
            <span className="highlight-block">
              These two champions will clash all season long in a gripping and relentless battle for leadership. Their rivalry echoes the great sports duels (Ronaldo/Messi, Nadal/Federer, Lauda/Hunt) <span className="highlight"><strong>with one key difference: they're on the same team.</strong></span>
            </span>
            </div>

            <p>
              That's the tragic paradox of professional cycling: while the work is collective, only one can claim glory on the Champs-Élysées. After a chaotic season of preparation, seen through Nora's fresh outsider lens, the team pulls off a surprise victory in the very first week of the Tour. Against all odds, Ayden dethrones Mathias and seizes the yellow jersey, becoming the center of a media frenzy.
            </p>
                          <p className="emphasis">
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
              This is an immersive dive into the heart of a team, following its journey from rebuilding to triumph, told through powerful themes: rivalry, of course, as the foundation of any competition, but also the collision of two starkly different paths. Mathias, the golden boy who never quite lived up to expectations, now wrestling with the twilight of his career; and Ayden, a magnetic daredevil and orphan, who brings an unprecedented surge of hope to a nation.
            </p>
            <p>
              Drama and intimacy strike: the forbidden love story between Mathias and Nora, Ayden's painful past resurfacing, Nora's fractured family, and the lingering trauma of Thibault's accident that haunts them all, a constant reminder of how deadly this sport can be.
            </p>
                        <div className='centered'>
            <span className="highlight-block">
              LE TOUR DE FRANCE remains, above all, a resolutely sports-driven and action-packed series.
            </span>
            </div>

            <p>
              Each race pushes the story forward, with narrative and sporting stakes constantly feeding into one another. Team spirit, humanity, and the values of sport shine through a young, scrappy collective. Erik, the long-standing sporting director and a charismatic, seasoned authority figure, both mentors and challenges Nora in a generational clash over leadership and methods. The audience is invited behind the scenes of this massive, free, traveling spectacle, from the team cars in the heat of the race to the buses during strategy briefings and post-stage debriefs, and even to the massage tables where riders recover. We delve into the riders' most intimate moments of doubt, uncover the secrets of their earpiece exchanges that can turn a stage upside down. Because to survive the 3,000 kilometers of this race, mental strength matters just as much as physical endurance.
            </p>
                                    <div className='centered'>
            <span className="highlight-block">
              The show explores the power of the collective without shying away from the quiet deals, the big plays, the betrayals, and the raw humanity behind the rider once the helmet, glasses, and jersey come off.
            </span>
            </div>
            <p className="emphasis">
            </p>
            <p>
              Ultimately, the story is about cohesion and reconciliation. Rivals forced to unite. Generations clashing and finding common ground. And deeply personal reckonings with one's past, one's roots, and one's wounds. Nora, Mathias, and Ayden each learn to rise above their pride, grudges, and fears, to reclaim the meaning of their own story.
            </p>
          </div>
          <div className='arena-summary'></div>
        </section>

                            {/* <div className='roues-div'>

    <img
          className="roues-item"
          src={roues}
          alt="loading"
        />  

        </div> */}

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


                          <div className='centered'>
            <span className="highlight-block">
              This series is both an international arena and a love letter to France and its people.
            </span>
            </div>
            <p>
              No landscape is left out, from the Normandy beaches facing Mont-Saint-Michel to the punishing Alpine climbs, the cobbled streets of Roubaix and the historic heart of Avignon, all the way to the gentle beauty of the Côte d'Azur. The characters move through breathtaking settings that serve as the vast stage for a grand spectacle. Far from being mere scenic backdrops, these places actively drive the drama, especially for Ayden, the orphan bounced from foster homes to group care, now riding back through the roads of his past. A child from everywhere and son of nowhere, Ayden will end up being embraced by France, and even by the world.
            </p>


                          <div className='centered'>
            <span className="highlight-block">
              Six episodes of 52 minutes each, propelled at full speed with no room to catch your breath or ease the cramps!
            </span>
            </div>
          </div>
                            <div className='character-summary'></div>

        </section>
        <section className="series-section arena">
            <div className='series-section-title'>
    <img
          className="imgthemes"
          src={characters}
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
        <div className="characters-section-content">

       
          <div className="characters-content">
            <div className="characters-img">
             <img
                className="creators-img"
                src={char1}
                alt="loading"
              />  
            </div>

            <div className="characters-text">
              <div className="characters-name">
            Nora              

            </div>
            <p>
Nora, thirty-five, is a social climber who left her working-class background behind to make it in the world of business. Haunted by a childhood she’s ashamed of a strict, domineering father and a mother who devoted herself to the family until illness took her, Nora built herself into a strong, independent, audacious woman. Determined to carve out a place in a male-dominated, upper-class world, she buys struggling companies, turns them around, and sells them for profit.
</p>
 <br/>
             <p>
This same opportunistic mindset is what leads her to take over the DeepBlue team: to her, the Tour de France is a wildly popular machine to exploit, a well of massive financial potential. Cynical and calculating, she initially sees the riders as nothing more than banknotes on bikes.</p>
 <br/>
             <p>
But over the course of the season, Nora changes. Her connection with Mathias, a mix of tension, desire, and admiration, unsettles her and slowly distances her from Raphaël, the bourgeois ideal she believed she wanted. As she witnesses the riders’ selflessness, Ayden’s fragility, and the tragedy that strikes the team with Thibault’s death, she discovers a different dimension of the sport: sacrifice, solidarity, commitment.
</p> <br/>
             <p>
As her love triangle with Mathias intensifies, Nora is forced to confront her deepest contradictions. Her arc becomes one of reversal, from antagonist to unlikely hero,  a woman who gives up power and profit to save the team and protect the true spirit of the Tour. 
</p><br/>
<p> 
Through cycling and through this new family she never expected, Nora learns to reclaim her origins. In the end, she accepts her heritage and reconciles with the father she had spent her whole life trying to escape.
</p> 
            </div>

          </div>
  <div className="characters-content">

            <div className="characters-text">
              <div className="characters-name">
            Mathias              

            </div>
            <p>
Mathias, in his late thirties, tall and wiry, is the long-standing leader of the team. A true star, he has accumulated prestigious victories throughout his career, yet still clings to the dream of winning the Tour de France. As the season begins, he is recovering from a serious crash during the previous Tour. Beyond the physical injury, he is haunted by guilt, he caused the fall that left his teammate Thibault in critical condition.</p> 
<br/>
             <p>
Consumed by ambition and terrified of becoming irrelevant as younger riders rise, Mathias doesn’t hesitate to abandon his most loyal teammate, Andrea, as well as his own mother, who also serves as their manager in order to secure his position as Deepblue’s leader. But despite his sacrifices and iron will, Ayden’s arrival in the team shakes the foundations of his leadership.
</p> <br/>
             <p>
Mathias’s journey is one of slow acceptance: understanding that dominance won’t guarantee his place anymore, and that he must learn to reinvent himself in a secondary role. His rivalry with Andrea exposes his fear of being pushed aside, and his relationship with Ayden begins with bitterness and resentment. Eventually, he reconciles with the idea of stepping back for the good of the team.
</p> <br/>
             <p>
Yet Mathias’s struggle isn’t only athletic, it’s deeply personal. He has sacrificed everything for cycling, to the point that his son Marcel no longer speaks to him, traumatized by the constant fear of losing his father to the sport. His relationship with Nora, passionate, forbidden, charged with desire and frustration, forces him to confront his own weaknesses.
</p><br/>
<p> 
Mathias is a man searching for resilience, compelled to redefine his identity not through the victories he claims, but through what he can pass on, both on the bike and in his life.
</p> 
            </div>
            <div className="characters-img">
             <img
                className="creators-img"
                src={char2}
                alt="loading"
              />  
            </div>







          </div>
          
 <div className="characters-section-content">

       
          <div className="characters-content">
            <div className="characters-img">
             <img
                className="creators-img"
                src={char1}
                alt="loading"
              />  
            </div>

            <div className="characters-text">
              <div className="characters-name">
            Ayden             

            </div>
            <p>
Ayden, in his twenties, is a charismatic young rider, tattooed, cocky, reckless, a pure racing animal who approaches the sport with provocation and nonchalance. A product of the foster system, scarred by a troubled childhood, Ayden hides a deep fear of abandonment behind his refusal of rules and hierarchy. A daredevil who cheats death, he’s driven by a visceral urge to win, to feel something, to push himself to the extreme, even if it means putting his life on the line, despite a heart condition.
</p>
 <br/>
             <p>
His journey is that of a brilliant individual forced to confront the reality of the collective. A cycling prodigy convinced he doesn’t need anyone, he starts the season as a loose cannon, only to crash headfirst into the discipline and demands of elite competition. As Ayden discovers the glare of the spotlight and the complexities of living within a team, the sudden reappearance of his biological mother shakes his world and threatens his fragile balance.
</p> <br/>
             <p>
Yet, he eventually finds in Deepblue a structure that allows him to rebuild himself. Nora becomes a protective figure for him, almost maternal, though manipulative, someone who sees beyond his arrogant façade. With Mathias, he oscillates between open rivalry and quiet respect, locked in a generational power struggle.
</p> <br/>
             <p>
Ayden’s arc is as tragic as it is poetic: at first convinced he has nothing to lose and willing to flirt with death for the thrill, he gradually realizes the value of what he’s found — a place to belong, and a new family he never expected to have.
</p>
            </div>

          </div>
  <div className="characters-content">

            <div className="characters-text">
              <div className="characters-name">
            Erik              

            </div>
            <p>
Erik is one of Deepblue’s defining figures, an old-school sports characters who has shaped the team for decades. Imposing, gruff, and straight to the point, he embodies a traditional vision of cycling: one where hard work, discipline, and strategy trump everything else.
</p>
<br/>
             <p>
His way of seeing the Tour quickly clashes with Nora’s modern, unconventional, and often unpredictable methods, creating a genuine showdown between the old school and the new. He’s tough on everyone, but that’s precisely why the riders respect him so deeply.
</p>
            </div>
            <div className="characters-img">
             <img
                className="creators-img"
                src={char2}
                alt="loading"
              />  
            </div>
           </div>
          </div>
           <div className="characters-section-content">

       
          <div className="characters-content">
            <div className="characters-img">
             <img
                className="creators-img"
                src={char1}
                alt="loading"
              />  
            </div>

            <div className="characters-text">
              <div className="characters-name">
            Jenna             

            </div>
            <p>
Jenna, in her twenties/thirties, is the team’s true Swiss army knife. She’s the driver of the bus that follows the riders throughout the Tour, making sure they have everything they need on a daily basis. As the wife of Thibault, Mathias’s former teammate who was gravely injured during the previous Tour, she embodies both the memory and the beating heart of the team.
</p>
 <br/>
             <p>
She has always lived in the world of cycling and knows it inside out. With her blunt honesty and no-nonsense attitude, Jenna is above all a compassionate listener and a steady shoulder the team can lean on when things get tough. Her kindness and deep empathy, combined with her unwavering passion for the sport, make her a precious, luminous presence, someone who helps keep the team spirit alive.
</p> 
            </div>

          </div>
  <div className="characters-content">

            <div className="characters-text">
              <div className="characters-name">
            Raphaël              

            </div>
            <p>
Raphaël, thirty-five, Nora’s partner, is the perfect embodiment of the bourgeois entrepreneur. With his luxury watches and his apartment overlooking the Sacré-Cœur, he represents everything Nora thinks she wants. Deeply in love, he supports her professional ambitions and encourages her to make her cycling venture profitable, eventually getting involved himself.
</p>
<br/>
             <p>
But when he discovers Nora’s affair with Mathias, Raphaël unravels, consumed by jealousy. He fast-tracks negotiation deals and closes a trap around Nora, pushing her out. His trajectory becomes that of a man whose wounded ego fuels a desire for revenge, ultimately turning him into one of the story’s central antagonists.
</p> <br/>

            </div>
            <div className="characters-img">
             <img
                className="creators-img"
                src={char2}
                alt="loading"
              />  
            </div>







          </div>
            <div className="characters-content">
            <div className="characters-img">
             <img
                className="creators-img"
                src={char2}
                alt="loading"
              />  
            </div>

            <div className="characters-text">
              <div className="characters-name">
            Andrea              

            </div>
            <p>
Andrea is one of the most promising riders of his generation. A former key member of Deepblue, he was also Mathias’s best friend and most loyal teammate.Everything changes when Galactic offers him the chance to become their new leader, a golden opportunity he accepts, triggering a brutal rupture with Mathias, who sees it as a deep personal betrayal.
</p>
<br/>
             <p>
Now managed by Katrine, Mathias’s mother, Andrea becomes a formidable rival on the road. But more than his new status as team leader, it’s his intimate knowledge of Mathias’s weaknesses and of the internal tensions shaking Deepblue that makes him truly dangerous. He knows exactly where to strike to destabilize them, and give himself every advantage he needs to try to win the Tour.
</p> <br/>

            </div>







          </div>
          </div>
        </div>

        </section>









      </div>

    </div>
  );
}

export default Series;
