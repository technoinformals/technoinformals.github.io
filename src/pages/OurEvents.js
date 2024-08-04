import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './OurEvents.css';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const OurEvents = () => {
  return (
    <div class = "mainbody"><br/><br/>
<VerticalTimeline animate="true" visible="false">

  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(148,5,5)', color: '#fff' }}
><h2 className="vertical-timeline-element-title" style={{ color: 'white' }}>
  Cash Royale
</h2>
  <h4 className="vertical-timeline-element-subtitle">Utsav, 2k23</h4>

  <Carousel >
                <div>
                    <img src={require('../assets/lights.jpg')} alt="GUYSSSSSSSSS, SEND PICS"/>
                    
                </div>
                <div>
                    <img src={require('../assets/lights2.jpg')}  alt="GUYSSSSSSSSS, SEND PICS"/>
                    
                </div>
                <div>
                    <img src={require('../assets/lights3.jpg')}  alt="GUYSSSSSSSSS, SEND PICS"/>
                    
                </div>
  </Carousel>
  <p className='vertical-timeline-element'>
    Awaken the tycoon within, and plunge into the world of business brilliance.<br/><i>Work In Progress.</i>
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
    iconStyle={{ background: 'rgb(148,5,5)', color: '#fff' }}
>
  <h2 className="vertical-timeline-element-title" style={{ color: 'white' }}>Sherlock</h2>
  <h4 className="vertical-timeline-element-subtitle">Utsav, 2k23</h4>
  <Carousel >
                <div>
                    <img src={require('../assets/lights3.jpg')} alt="GUYSSSSSSSSS, SEND PICS"/>
                    
                </div>
                <div>
                    <img src={require('../assets/lights5.jpg')} alt="GUYSSSSSSSSS, SEND PICS" />
                    
                </div>
                <div>
                    <img src={require('../assets/lights7.jpg')} alt="GUYSSSSSSSSS, SEND PICS" />
                    
                </div>
  </Carousel>

  <p className='vertical-timeline-element'>
    A long trek ahead, and a cryptic adventure awaits. Trust no one, not even yourself.
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
    iconStyle={{ background: 'rgb(148,5,5)', color: '#fff' }}
>
  <h2 className="vertical-timeline-element-title" style={{ color: 'white' }}>TNT</h2>
  <h4 className="vertical-timeline-element-subtitle">Orientation, 2k23</h4>

  <Carousel >
                <div>
                    <img src={require('../assets/tnt/1.png')} alt="Okay, who tf came up with the name - Time 'n Techno Pic 1"/>
                    
                </div>
                <div>
                    <img src={require('../assets/tnt/2.png')}  alt="Citadel iykyk hehe- Time 'n Techno Pic 2"/>
                    
                </div>
                <div>
                    <img src={require('../assets/tnt/3.png')} alt="Guys ykw it was actually a cool idea we just never thought it through practically and worked out the kinks. I'm sorry we were so harsh in criticizing you for it but yeah, just wanna let you know that the idea isn't fundamentally flawed.- Time 'n Techno Pic 3" />
                    
                </div>
  </Carousel>
  <p className='vertical-timeline-element'>
    Don your armor to protect and prevail, for THIS is the ultimate race against time.
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
    iconStyle={{ background: 'rgb(148,5,5)', color: '#fff' }}
>
  <h2 className="vertical-timeline-element-title" style={{ color: 'white' }}>Coke Studio</h2>
  <h4 className="vertical-timeline-element-subtitle">Kuruksastra, 2k23</h4>
  <Carousel >
                <div>
                    <img src={require('../assets/cs/1.png')} alt="FREE COKE LEZGOOOO - Coke Studio Pic 1"/>
                    
                </div>
                <div>
                    <img src={require('../assets/cs/2.png')}  alt="Naaa ready dhaan (iykyk) - Coke Studio Pic 2"/>
                    
                </div>
                <div>
                    <img src={require('../assets/cs/3.png')}  alt="I'm proud of you da bois - Coke Studio Pic 3"/>
                    
                </div>
  </Carousel>
  <p className='vertical-timeline-element'>
    [filler shiz]
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
    iconStyle={{ background: 'rgb(148,5,5)', color: '#fff' }}
>
  <h2 className="vertical-timeline-element-title" style={{ color: 'white' }}>Race For The Relics</h2>
  <h4 className="vertical-timeline-element-subtitle">Kuruksastra, 2k23</h4>
  <Carousel >
                <div>
                    <img src={require('../assets/rfr/1.png')} alt="HOLY SH- whatta crowd man - Race For The Relics Pic 1"/>
                    
                </div>
                <div>
                    <img src={require('../assets/rfr/2.png')}  alt="HOLY SH- whatta plot man - Race For The Relics Pic 2"/>
                    
                </div>
                <div>
                    <img src={require('../assets/rfr/3.png')}  alt="HOLY SH- whatta video man (tysm, i co-created it) - Race For The Relics Pic 3"/>
                    
                </div>
  </Carousel>
  <p className='vertical-timeline-element'>
    When the sound of a conch rings through the air, a quest for the lost treasure awaits. <br/>Will you be there?
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
    iconStyle={{ background: 'rgb(148,5,5)', color: '#fff' }}
>
  <h2 className="vertical-timeline-element-title" style={{ color: 'white' }}>MasterChef</h2>
  <h4 className="vertical-timeline-element-subtitle">Kuruksastra, 2k22</h4>
  <Carousel >
                <div>
                    <img src={require('../assets/mc1/1.png')} alt="Honeymoon dish team ftw - MasterChef Pic 1" />
                    
                </div>
                <div>
                    <img src={require('../assets/mc1/2.png')} alt="Honeymoon dish team ftw - MasterChef Pic 2" />
                    
                </div>
                <div>
                    <img src={require('../assets/mc1/3.png')}  alt="Honeymoon dish team ftw - MasterChef Pic 3"/>
                    
                </div>
  </Carousel>
  <p className='vertical-timeline-element'>
    The plate wants what it wants. A culinary drama with a wow factor!
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
    iconStyle={{ background: 'rgb(148,5,5)', color: '#fff' }}
>
  <h2 className="vertical-timeline-element-title" style={{ color: 'white' }}>The Forensic Deception</h2>
  <h4 className="vertical-timeline-element-subtitle">Daksh, 2k23</h4>
  <Carousel >
                <div>
                    <img src={require('../assets/tfd/1.png')} alt="The time our first bi character really got into character - The Forensic Deception Pic 1"/>
                    
                </div>
                <div>
                    <img src={require('../assets/tfd/2.png')}  alt="The time our first dictator character also really got into character - The Forensic Deception Pic 2"/>
                    
                </div>
                <div>
                    <img src={require('../assets/tfd/3.png')}  alt="The time we told our seniors we didn't have a video and whipped one up in 2 hours - The Forensic Deception Pic 3"/>
                    
                </div>
  </Carousel>
  <p className='vertical-timeline-element'>
    ...and when it all feels elementary, the crime scene tape lifts up to allow you entry.
  </p>
</VerticalTimelineElement>
<VerticalTimelineElement
    iconStyle={{ background: 'rgb(148,5,5)', color: '#fff' }}
  >
    <h2 className="vertical-timeline-element-title" style={{ color: 'white' }}>Moneyball</h2>
    <h4 className="vertical-timeline-element-subtitle">Utsav, 2k22</h4>
    <Carousel >
                <div>
                    <img src={require('../assets/mb/1.png')} alt="Hey, psa: some of you spent money you didn't have - Moneyball Pic 1"/>
                    
                </div>
                <div>
                    <img src={require('../assets/mb/2.png')}  alt="Hey, psa: some of you spent money you didn't have - Moneyball Pic 2"/>
                    
                </div>
                <div>
                    <img src={require('../assets/mb/3.png')}  alt="Hey, psa: some of you spent money you didn't have - Moneyball Pic 3"/>
                    
                </div>
  </Carousel>
    <p className='vertical-timeline-element'>
      Blaze your way into making some big bucks.
    </p>
  </VerticalTimelineElement>

<VerticalTimelineElement
    iconStyle={{ background: 'rgb(148,5,5)', color: '#fff' }}
>
  <h2 className="vertical-timeline-element-title" style={{ color: 'white' }}>The Spardha Quiz</h2>
  <h4 className="vertical-timeline-element-subtitle">Utsav, 2k22</h4>
  <Carousel >
                <div>
                    <img src={require('../assets/spardha/1.png')} alt="I was there, ofc it was cool - Spardha Quiz Pic 1"/>
                    
                </div>
                <div>
                    <img src={require('../assets/spardha/2.png')}  alt="I was there, ofc it was cool - Spardha Quiz Pic 2"/>
                    
                </div>
                <div>
                    <img src={require('../assets/spardha/3.png')}  alt="I was there, ofc it was cool - Spardha Quiz Pic 3"/>
                    
                </div>
  </Carousel>
  <p className='vertical-timeline-element'>
    From tickling intellectual instincts to knocking on brainy doors, this event did it all.
  </p>
</VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(148,5,5)', color: '#fff' }}
>
  <h2 className="vertical-timeline-element-title" style={{ color: 'white' }}>Sherlock</h2>
  <h4 className="vertical-timeline-element-subtitle">Utsav, 2k22</h4>
  <Carousel >
                <div>
                    <img src={require('../assets/sherlock1/1.png')} alt="The Umbrella Killer??? - Sherlock Pic 1"/>
                    
                </div>
                <div>
                    <img src={require('../assets/sherlock1/2.png')}  alt="The Umbrella Killer??? - Sherlock Pic 2"/>
                    
                </div>
                <div>
                    <img src={require('../assets/sherlock1/3.png')}  alt="The Umbrella Killer??? - Sherlock Pic 3"/>
                    
                </div>
  </Carousel>
  <p className='vertical-timeline-element'>
    Yellow tapes and white lines, crimson stains and white lies.
  </p>
</VerticalTimelineElement>


<VerticalTimelineElement
    iconStyle={{ background: 'rgb(148,5,5)', color: '#fff' }}
>
  <h2 className="vertical-timeline-element-title" style={{ color: 'white' }}>Carnival Games</h2>
  <h4 className="vertical-timeline-element-subtitle">Carpe Diem, 2k22</h4>
  <Carousel >
                <div>
                    <img src={require('../assets/cg/1.png')} alt="Idk man I wasn't there - Carnival Games Pic 1"/>
                    
                </div>
                <div>
                    <img src={require('../assets/cg/2.png')}  alt="Idk man I wasn't there - Carnival Games Pic 2"/>
                    
                </div>
                <div>
                    <img src={require('../assets/cg/3.png')}  alt="Idk man I wasn't there - Carnival Games Pic 3"/>
                    
                </div>
  </Carousel>
  <p className='vertical-timeline-element'>
    When challenges meet eccentricities, the moment is nothing but fun.
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
    iconStyle={{ background: 'rgb(148,5,5)', color: '#fff' }}
>
  <h2 className="vertical-timeline-element-title" style={{ color: 'white' }}>The Trident's Odyssey</h2>
  <h4 className="vertical-timeline-element-subtitle">Carpe Diem, 2k22</h4>
  <Carousel >
                <div>
                    <img src={require('../assets/tto/1.png')} alt="Flag Wars was better - The Trident's Odyssey Pic 1" />
                    
                </div>
                <div>
                    <img src={require('../assets/tto/2.png')}  alt="Flag Wars was better - The Trident's Odyssey Pic 2"/>
                    
                </div>
                <div>
                    <img src={require('../assets/tto/3.png')}  alt="Flag Wars was better - The Trident's Odyssey Pic 3"/>
                    
                </div>
  </Carousel>
  <p className='vertical-timeline-element'>
    A wrecked ship. A cryptic note. <br/>Will the allure of treasure blind your sense of measure?
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
    iconStyle={{ background: 'rgb(148,5,5)', color: '#fff' }}
>
  <h2 className="vertical-timeline-element-title" style={{ color: 'white' }}>League 21</h2>
  <h4 className="vertical-timeline-element-subtitle">Kuruksastra, 2k21</h4>
  <Carousel >
                <div>
                    <img src={require('../assets/league21/1.jpg')} alt = "Scientists are the problem, and we need the final solution iykwim - League 21 Pic 1"/>
                    
                </div>
                <div>
                    <img src={require('../assets/league21/1.jpg')}  alt = "Scientists are the problem, and we need the final solution iykwim - League 21 Pic 2"/>
                    
                </div>
                <div>
                    <img src={require('../assets/league21/1.jpg')}  alt = "Scientists are the problem, and we need the final solution iykwim - League 21 Pic 3"/>
                    
                </div>
  </Carousel>
  <p className='vertical-timeline-element'>
    If you look closely, the past whispers to you. <br/>Are you listening?
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
    iconStyle={{ background: 'rgb(148,5,5)', color: '#fff' }}
>
  <h2 className="vertical-timeline-element-title" style={{ color: 'white' }}>MasterChef</h2>
  <h4 className="vertical-timeline-element-subtitle">Kuruksastra, 2k21</h4>
  <Carousel >
                <div>
                    <img src={require('../assets/mc2/1.png')} alt="Pastor Ssempa - MasterChef Pic 1" />
                    
                </div>
                <div>
                    <img src={require('../assets/mc2/2.png')}  alt="Pastor Ssempa - MasterChef Pic 2"/>
                    
                </div>
                <div>
                    <img src={require('../assets/mc2/3.png')}  alt="Pastor Ssempa - MasterChef Pic 3"/>
                    
                </div>
  </Carousel>
  <p className='vertical-timeline-element'>
    Are you and food a matcha made in heaven?
  </p>
</VerticalTimelineElement>
                                  
<VerticalTimelineElement
    iconStyle={{ background: 'rgb(148,5,5)', color: '#fff' }}
>
  <h2 className="vertical-timeline-element-title" style={{ color: 'white' }}>The Big Tech Debate</h2>
  <h4 className="vertical-timeline-element-subtitle">Daksh, 2k21</h4>
  <Carousel >
                <div>
                    <img src={require('../assets/tbtd/1.png')} alt="Hitchslap - The Big Tech Debate Pic 1" />
                    
                </div>
                <div>
                    <img src={require('../assets/tbtd/2.png')}  alt="Hitchslap - The Big Tech Debate Pic 2"/>
                    
                </div>
                <div>
                    <img src={require('../assets/tbtd/3.png')} alt="Hitchslap - The Big Tech Debate Pic 3" />
                    
                </div>
  </Carousel>
  <p className='vertical-timeline-element'>
    From trades to pitches, to dramatic exchanges, this event had it all.
  </p>
</VerticalTimelineElement>


</VerticalTimeline>
<br/>
<br/>
</div>

  );
};

export default OurEvents;