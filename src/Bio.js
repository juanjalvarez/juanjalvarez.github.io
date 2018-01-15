import React, { Component } from 'react'

import Paragraph from './components/Paragraph'

import './Bio.css'

export default class Bios extends Component {

  render() {
    return (
      <div>
        <Paragraph title="Quick Intro">
          I’m a fast learner with a passion for software development. I’ve been programming since age 14 and amongst my achievements are winning various programming competitions, numerous internships (research & industry) and I even gave a cybersecurity presentation at an IEEE conference.
        </Paragraph>
        <Paragraph title="About Me">
          I have two dogs (Jellybean & Jaruby), my car is a black Mitsubishi Lancer and I love video games (Right now I’m crazed with PUBG, I mostly play strategy games but I have a softspot for anything survival based). My favourite color is black (I bet you didn’t see that one coming), I love Papa John’s cheese-exclusive pizza, fruit smoothies and anything and everything avocadoes. My immediate-future dream car is a Ford Mustang V6, and a little farther out I will want the Tesla Model-S equivalent of the future, not that I’m a car guy I just like things that go fast. Speaking of fast, I am a huge fan of rollercoasters, my favourite rollercoaster is the Rock ’n’ Roller Coaster, the take-off is absolutely ridiculous.
        </Paragraph>
        <Paragraph title="Early Life">
          I was born in Puerto Rico, although both of my parents are dominican. I have also lived in the Dominican Republic and in the United States (Florida). During my early life I had been constantly changing schools and countries of residence.
        </Paragraph>
        <Paragraph title="Age 14 - 16">
          <div>
            During this period of time is where my passion for programming was born. Thanks to the videogames Runescape and Minecraft I decided to learn Java with the book “Teach Yourself Java in 24 hours” by Rogers Cogen. It did not take me 24 hours.
          </div>
          <div>
            When I turned 15 I made the decision to skip the last 3 years of high school to be able to get into college at age 16. Making that decision was easy but the pressure I received because of it was difficult, although putting my career on the fast track has been one of the best decisions I’ve ever made.
          </div>
          <div>
            Since I couldn’t get into college at age 15 I had to wait a whole year until I turned 16 in order to get in, this time period is fundamental to my career because in this timeframe I started a minecraft community, and thanks to the servers I ran I learned about linux, internet infrastructure and other DevOps topics.
          </div>
        </Paragraph>
        <Paragraph title="Age 16 - 18">
          During the first 2 years of college I swiftly destroyed all computer science courses, worked on various interesting little projects and learned a lot abut life and people. My team and I participated in many programming competitions and went from last place to winning 1st place in the interuniversitary programming competition of 2016 across all categories (including ex-alumni) of all Puerto Rico, we were also invited to participate in the Caribbean regionals that took place in the Dominican Republic, twice.
        </Paragraph>
        <Paragraph title="Age 18 - Now">
          From ages 18 to the present my life has gone from 0 to 100 very quickly, both in my personal life and professionally speaking. Early 2016 I was accepted into the NSF USF REU program to do research in the summer. After the REU was over I got my first industry job at a local software company (CEGsoft), in spring I had the opportunity to present my previous research paper at an IEEE conference, and soon after I quit my job at CEGsoft to focus on college and other projects I was occupied with. In the summer of 2017 I joined CareLinx as a frontend engineer. I was very excited to work with CareLinx because I love the  idea of working for a Silicon Valley startup. It was also my first time ever being in San Fransisco let alone California, it was life-changing to be in the tech capital of the world. After hurricane Maria completely destroyed Puerto Rico, CareLinx literally saved me from the aftermath by providing me housing in San Fransisco so that I could work uninterrupted by the chaos. Sadly, I had to stop working with CareLinx soon after because college was starting again and I wouldn’t have had electricity or internet for a whole other month and a half.
        </Paragraph>
      </div>
    )
  }
}
