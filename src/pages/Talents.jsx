// src/pages/Home.js
import talentsbg from "../assets/talents.jpg";
import './Talents.css'
import React, { useState, useEffect } from 'react';
import Sommaire from '../components/Summary.jsx'
import creators from '../assets/creators.png'
import producers from '../assets/producers.jpg'
import theprod from '../assets/theprod.png'
import pascal from '../assets/pascal.jpg'
import judith from '../assets/judith.jpg'

import credits from '../assets/credits.png'

import writers from '../assets/writers.png'

import fed from "../assets/fedN.png";
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'
import line from "../assets/line.png";
import louis from '../assets/Louis.webp'
import alexandre from '../assets/Alexandre.png'
import gregory from '../assets/Gregory.jpeg'

import director from '../assets/director.png'

function Talents() {
              useEffect(() => {
                        document.body.scrollTo({
                  top: 0,
                });})
  return (
    <div className="talents-container">
            <ScrollToTopButton />

      <div className="talents-title">
        <h1>Talents</h1>
      </div>
      
      <div className="talents-hero" style={{ backgroundImage: `url(${talentsbg})` }}>
      </div>
      
      <div className="talents-content">
                                <Sommaire items={[
        { className: 'theme-summary', titre: 'Creators' },
        { className: 'arena-summary', titre: 'Producers' },
        { className: 'moodboard-summary', titre: 'Credits' },
        ]} />


        <section className="talents-section creators">
                    <div className='talents-section-title'>
          <img
                className="imgthemes"
                src={creators}
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
        <div className="director-section-content">

          <div className="director-title">
             <img
                className="director-title-img"
                src={director}
                alt="loading"
              />  
          </div>

          <div className="director-content">
            <div className="director-img">
             <img
                className="creators-img"
                src={louis}
                alt="loading"
              />  
            </div>

            <div className="director-text">
              <div className="director-name">
                Louis Leterrier
              </div>
            <p>
Louis Leterrier is a French director and producer. He began his career working on French and American productions before gaining recognition with <strong> The Transporter,  Danny the Dog </strong>,  and <strong> Transporter 2 </strong>.
</p>
 <br/>
<p> 
  He then established himself in Hollywood with major successes such as <strong>The Incredible Hulk, Clash of the Titans, and Now You See Me, </strong> becoming <strong>over his career the French filmmaker with the highest global box-office revenue.  </strong>In 2023, he joined <strong>the Fast & Furious franchise with Fast X  </strong>and is directing the sequel.
  </p>
 <br/>
  <p>
An <strong>Emmy Award winner for The Dark Crystal : Age of Resistance </strong>, Louis Leterrier also continues his work in television, returning as showrunner for the new season of <strong>Lupin </strong>.

  </p>

   <br/>
  <p>
In parallel, he develops and produces new projects within his studio <strong> Carrousel</strong>, including the science-fiction film <strong>11817</strong> for Netflix.

  </p>
   <br/>
  <p>
A leading figure in international action cinema, he is recognized for his sense of spectacle, narrative efficiency, and ability to manage large-scale productions.
  </p>
            </div>

          </div>

        </div>




      <div className='line-div'>

        </div>
        <div className="director-section-content">

          <div className="director-title">
             <img
                className="director-title-img"
                src={writers}
                alt="loading"
              />  
          </div>

          <div className="director-content">
  

            <div className="director-text">
              <div className="director-name">
              Alexandre Delaporte
              </div>
            <p>
Alexandre Delaporte is a screenwriter. After working in a bookstore, where he cultivated his passion for fiction and character-driven storytelling, he studied filmmaking at ESRA.</p>
 <br/>
<p> 
 After graduating, he directed several short films and worked in production and post-production, notably at EuropaCorp.  </p>
 <br/>
  <p>
He later turned to television writing. His encounter with Louis Farge, with whom he now collaborates regularly, led him to fully embrace collaborative writing and explore a wide range of genres, from dark comedy to crime drama, science-fiction, thrillers, and eventually sports drama with the Tour de France series, created and co-written with Grégory Nicolas.
  </p>

   <br/>
  <p>
 Fraternal conflict, redemption, and class struggle are recurring themes throughout his work.
  </p>

            </div>
          <div className="director-img">
             <img
                className="creators-img"
                src={alexandre}
                alt="loading"
              />  
            </div>
          </div>

        </div>




      <div className='line-div'>

        </div>
        <div className="director-section-content">


          <div className="director-content">
            <div className="director-img">
             <img
                className="creators-img"
                src={gregory}
                alt="loading"
              />  
            </div>

            <div className="director-text">
              <div className="director-name">
              Gregory Nicolas
              </div>
            <p>
Grégory Nicolas is a novelist and a screenwriter. His novels: Mathilde est revenue (Mathilde is back), Les fils du pêcheur (The Fisherman’s Sons), Mes sœurs, n’aimez pas les marins (My sisters, don’t fall for sailors) capture vibrant humanity, strong storytelling, humor, and an eye for life’s small details.
</p>
 <br/>
<p> 
His latest novel, Mes sœurs, n’aimez pas les marins, received the Henri Queffélec Prize and the Seal the World Award for Best Maritime Book. His work Équipiers (Teammates), a literary immersion into professional cycling, was honored with the Antoine-Blondin Prize and the Louis-Nucéra Prize. <br/>
</p>
<br/>
  <p>
A passionate cyclist since childhood and the descendant of a family of racers, he has built profound bonds within the professional peloton, granting him rare access to its inner workings.
  </p>

   <br/>
  <p>
This sensitive perspective on groups, hierarchies, and personal vulnerabilities feeds directly into his screenwriting. He is the co-creator, alongside Alexandre Delaporte, of the series Tour de France.
  </p>

            </div>

          </div>

        </div>






        </section>




        <section className="talents-section creators">
                    <div className='talents-section-title'>
          <img
                className="imgthemes"
                src={producers}
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
        <div className="director-section-content">


          <div className="director-content">
            <div className="fed-div-img">
             <img
                className="fed-img"
                src={fed}
                alt="loading"
              />  
            </div>

            <div className="director-text">
            <p>
Run by founder Pascal Breton and co-led by Lionel Uzan and Marco Chimenz, Federation Studios heralds a new breed of independent European studios, focusing on the creation, production, financing and distribution of high-quality original productions for the global marketplace. Federation Studios works with the best worldwide talents and partners on the scene today to create a strong distribution portfolio as well as an array of premium international productions. 
</p>
 <br/>
<p> 
Active in the drama, kids & family, documentary and cinema space, Federation Studios today federates 35 production companies located in Paris, Los Angeles, Rome, Madrid, London, Berlin, Cologne and Tel-Aviv. 
  </p>
 <br/>
  <p>
Federation International, the strong distribution arm of the company has been building up a rich lineup, mixing in-house and third-party premium content. Its portfolio includes major award-winning and international successes such as The Bureau, In Treatment, Around the World in 80 Days, Find me in Paris, Bardot, Sherlock & Daughter, I, Jack Wright, Mediterranean, and Simon Super Rabbit.

  </p>

            </div>

          </div>

        </div>



        <div className="director-section-content">

          <div className="director-title">
             <img
                className="director-title-img"
                src={theprod}
                alt="loading"
              />  
          </div>

          <div className="director-content">
            <div className="director-img">
             <img
                className="creators-img"
                src={pascal}
                alt="loading"
              />  
            </div>

            <div className="director-text">
              <div className="director-name">
              Pascal Breton
              </div>
            <p>
Pascal Breton is President of Federation Studios, the top independent production and distribution company he founded in 2013. Among the group's top titles are The Bureau, In Treatment, Baby, Hostages, Marseille, Bad Banks, Deadly Tropics, Undercover, Around the World in 80 Days, Les Bleus 2018, Find me in Paris, to name a few. 
</p>
 <br/>
<p> 
Prior to creating Federation Studios, Pascal Breton directed one of the largest and most successful French production companies, Marathon, which he co-founded in 1990 and directed for 18 years. Under his direction, Marathon grew exponentially, becoming one of the major player in the international audio-visual landscape. The group was then sold to De Agostini and merged with Zodiak, Magnolia and RDF to form Zodiak Media (now Banijay). 
  </p>
 <br/>
  <p>
Breton  appeared in Variety’s list of the 500 Most Influential Personalities of the Audiovisual World. 
  </p>
            </div>

          </div>

        </div>



        <div className="director-section-content">

       
          <div className="director-content">
            <div className="director-img">
             <img
                className="creators-img"
                src={judith}
                alt="loading"
              />  
            </div>

            <div className="director-text">
              <div className="director-name">
                Judith Rochelois 
              </div>
            <p>
Producer Judith Rochelois joined Federation Studios in 2017. She has overseen all aspects of creative development and production for some of the group’s huge successes, including Around the World in 80 Days for The European Alliance (France Télévisions, ZDF, RAI), and Masterpiece PBS, as well as Toledano & Nakache's acclaimed series In Treatment for Arte. </p>
 <br/>
<p> 
She has also worked on Canal+ premium war series Les Sentinelles. Alongside Pascal Breton, she produced the award-winning and Netflix Top 10 series Bardot for France Télévisions and Mediaset, later released on Netflix.   </p>
 
            </div>

          </div>

        </div>






  <div className="director-section-content">

          <div className="director-title">
             <img
                className="director-title-img"
                src={credits}
                alt="loading"
              />  
          </div>
        <div className="credits">
          <div className="credits-col">
            <p>Format: 6 X 52’</p>
            <p>Created by Alexandre Delaporte and <br/> Gregory Nicolas</p>
            <p>Based on an original idea by<br/> Louis Leterrier</p>
            <p>Directed by Louis Leterrier</p>
            <p>Written by Alexandre Delaporte and<br/> Gregory Nicolas</p>
          </div>

          <div className="credits-col">
            <p>Cast coming soon</p>
            <p>Produced by Federation<br/> Studio France<br/> (Pascal Breton and Judith Rochelois)</p>
            <p>Original broadcaster: FTV</p>
            <p>International sales: <br/>Federation International</p>
          </div>
        </div>
        
        </div>







        </section>




        </div>
    </div>

  );
}

export default Talents;
