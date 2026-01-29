/**
 * BOW Sports Capital - Real Team Game Plan
 * Team Data and Dynamic Branching Scenarios for 9th-10th Grade Economics Education
 *
 * Framework: Accelerate / Smooth / Rebuild
 * - ACCELERATE: Go all-in now, compress your competitive window, pay premium
 * - SMOOTH: Maintain flexibility, balanced approach, keep options open
 * - REBUILD: Sell high, reset timeline, invest in future assets
 *
 * DYNAMIC SCENARIO SYSTEM:
 * Each team has an opening scenario. Based on your choice type (accelerate/smooth/rebuild),
 * the next scenario dynamically adapts to reflect your previous decision.
 * This creates 27 unique paths across the game (3 choices x 3 choices x 3 teams).
 */

const TEAMS_DATA = {
    // =========================================
    // NBA - Los Angeles Lakers
    // =========================================
    lakers: {
        id: "lakers",
        name: "Los Angeles Lakers",
        league: "NBA",
        city: "Los Angeles",
        abbreviation: "LAL",
        colors: {
            primary: "#552583",
            secondary: "#FDB927",
            accent: "#000000"
        },
        logo: "\u{1F3C0}",
        salaryCap: 140588000,
        luxuryTax: 170814000,
        currentPayroll: 175000000,
        keyPlayers: ["LeBron James (39)", "Anthony Davis (31)", "Austin Reaves (26)"],
        teamSituation: "Championship contender with aging superstar LeBron James. Window closing but still elite.",
        scenarios: {
            opening: {
                id: "lakers-1",
                title: "The LeBron Decision",
                context: "LeBron James just turned 39 but is still playing at an All-Star level. He's in the final year of his contract worth $47M. He wants a 2-year max extension ($104M total). Your young core (Reaves, Hachimura) is developing nicely.",
                choices: [
                    {
                        id: "a",
                        text: "Give LeBron the full 2-year max extension ($104M)",
                        type: "accelerate",
                        score: 4,
                        payrollChange: 5000000,
                        consequence: "You're locked into the LeBron era at $52M/year. Lakers finish the season 48-34 as a 6-seed. First round playoff exit after LeBron struggles in Game 7. The luxury tax bill is mounting."
                    },
                    {
                        id: "b",
                        text: "Offer a 1-year deal with a player option for year 2",
                        type: "smooth",
                        score: 5,
                        payrollChange: 0,
                        consequence: "Smart! You keep LeBron at $50M with flexibility. Lakers finish 51-31 as a 5-seed. Second round playoff appearance. You can reassess after this season based on his performance."
                    },
                    {
                        id: "c",
                        text: "Let him walk and fast-track the rebuild around young players",
                        type: "rebuild",
                        score: 3,
                        payrollChange: -47000000,
                        consequence: "Bold move! Lakers struggle to 35-47, miss the playoffs. But you freed up $47M in cap space and your young core gets valuable minutes. Ticket sales drop 18% as fans lose interest."
                    }
                ],
                explanation: "The SMOOTH approach wins here. LeBron is still elite but father time is undefeated. A flexible contract lets you stay competitive while keeping options open. This is classic 'optionality preservation' - a key concept in capital management."
            },
            level2: {
                accelerate: {
                    id: "lakers-2a",
                    title: "The All-In Trade",
                    context: "You've locked LeBron into a 2-year max deal. Now it's the trade deadline and you're 5th in the West (30-22). A star point guard is available, but the price is TWO future 1st round picks. With LeBron's contract eating $52M/year, those future picks could be very valuable if he declines.",
                    choices: [
                        {
                            id: "a",
                            text: "Trade both picks - you've already committed to LeBron, go all the way",
                            type: "accelerate",
                            score: 5,
                            payrollChange: 18000000,
                            consequence: "You're fully committed! The Big 3 clicks immediately. Lakers finish 52-30 as a 3-seed, advance to the Western Conference Finals before losing in 6 games. But zero draft capital remains."
                        },
                        {
                            id: "b",
                            text: "Trade ONE pick and try to add a solid starter instead of a star",
                            type: "smooth",
                            score: 4,
                            payrollChange: 8000000,
                            consequence: "Smart middle ground! The solid starter helps. Lakers finish 50-32 as a 5-seed. Second round exit in 7 games. You kept one future pick as insurance for the post-LeBron era."
                        },
                        {
                            id: "c",
                            text: "Hold the picks - you're already spending big on LeBron, protect the future",
                            type: "rebuild",
                            score: 2,
                            payrollChange: 0,
                            consequence: "Too conservative! Lakers limp to a 48-34 record as a 7-seed. First round exit again. You committed max money to LeBron but won't give him help. Half-measure wastes the investment."
                        }
                    ],
                    explanation: "When you've already committed resources to a star (LeBron's max deal), you need to support that investment! The ACCELERATE approach actually wins here - you're in championship-or-bust mode with an aging LeBron, so going all-in makes sense."
                },
                smooth: {
                    id: "lakers-2b",
                    title: "Trade Deadline Opportunity",
                    context: "LeBron is on a flexible 1-year deal and the Lakers are 5th in the West (34-25). A veteran point guard is available for one future 1st round pick. LeBron's been great this year, averaging 26-8-7. Do you upgrade now or wait?",
                    choices: [
                        {
                            id: "a",
                            text: "Make the trade - LeBron is playing well, upgrade for a playoff push",
                            type: "accelerate",
                            score: 5,
                            payrollChange: 12000000,
                            consequence: "Perfect timing! The veteran PG meshes well with LeBron. Lakers finish 53-29 as a 4-seed. Western Conference Finals appearance (lose in 6). LeBron commits to returning next year."
                        },
                        {
                            id: "b",
                            text: "Trade ONE pick but target a role player instead - save value",
                            type: "smooth",
                            score: 4,
                            payrollChange: 5000000,
                            consequence: "Solid move! The role player helps but isn't a game-changer. Lakers finish 51-31 as a 5-seed. Second round exit in 7 games. You preserved flexibility for the offseason."
                        },
                        {
                            id: "c",
                            text: "Stand pat - see how the team performs in the playoffs as-is",
                            type: "rebuild",
                            score: 2,
                            payrollChange: 0,
                            consequence: "Too passive! Lakers finish 50-32 as a 6-seed. First round exit in 6 games. LeBron openly questions your commitment to winning. You missed the window."
                        }
                    ],
                    explanation: "With a flexible LeBron deal and strong performance, the ACCELERATE move wins! When a star is playing great and you have cap flexibility, strike while the iron is hot. Timing matters in championship windows."
                },
                rebuild: {
                    id: "lakers-2c",
                    title: "The Rebuild Blueprint",
                    context: "LeBron is gone. You freed up $47M in cap space and have a young core of Reaves and Hachimura. Anthony Davis (31) is still on the roster at $55M/year. He wants to know: are you competing or rebuilding? Other teams are offering packages for AD.",
                    choices: [
                        {
                            id: "a",
                            text: "Sign two mid-tier free agents and try to compete around AD immediately",
                            type: "accelerate",
                            score: 2,
                            payrollChange: 40000000,
                            consequence: "Confused strategy! Lakers finish 42-40, barely miss playoffs as a 9-seed. The mid-tier signings don't mesh. AD is frustrated. You're spending big but going nowhere."
                        },
                        {
                            id: "b",
                            text: "Keep AD but be patient - add young complementary pieces through the draft and affordable free agents",
                            type: "smooth",
                            score: 5,
                            payrollChange: 15000000,
                            consequence: "Patient approach! Lakers finish 38-44, miss playoffs but young core develops. Draft lottery pick (7th overall). AD buys in for the long-term vision. Foundation building."
                        },
                        {
                            id: "c",
                            text: "Trade AD for a package of young players and draft picks - full teardown",
                            type: "rebuild",
                            score: 4,
                            payrollChange: -35000000,
                            consequence: "Full commitment! Lakers finish 28-54, secure a top-5 lottery pick. You land 3 future first-rounders and 2 young starters in the AD trade. Complete rebuild underway."
                        }
                    ],
                    explanation: "After letting LeBron go, the SMOOTH approach wins! Keeping AD while building patiently gives you a top-15 player as an anchor without rushing into bad contracts. Half-measures (spending on mid-tier FAs) waste both time and money."
                }
            },
            level3: {
                accelerate: {
                    id: "lakers-3a",
                    title: "Championship or Bust",
                    context: "Your aggressive moves paid off! Lakers are 55-27, locked into the 3-seed heading into the playoffs. You're $45M over the luxury tax. The roster is championship-caliber but expensive. This is your window - what's your playoff strategy?",
                    choices: [
                        {
                            id: "a",
                            text: "Go for it all - convince ownership to pay luxury tax AND add a buyout player for the playoff run",
                            type: "accelerate",
                            score: 5,
                            payrollChange: 3000000,
                            consequence: "All-in! The buyout addition provides key depth. Lakers WIN THE NBA CHAMPIONSHIP! LeBron gets ring #5. The tax bill is $78M but ownership celebrates. You built a champion!"
                        },
                        {
                            id: "b",
                            text: "Run with current roster - you're already over the tax, no need to add more",
                            type: "smooth",
                            score: 4,
                            payrollChange: 0,
                            consequence: "Solid but cautious. Lakers reach the NBA Finals but lose in 6 games. Depth issues in Games 5-6 prove costly. Still, Finals appearance validates the all-in approach."
                        },
                        {
                            id: "c",
                            text: "Cut salary by trading a role player - reduce the tax bill for ownership",
                            type: "rebuild",
                            score: 1,
                            payrollChange: -8000000,
                            consequence: "Terrible timing! Lakers lose in the Conference Finals. The traded role player was needed. Ownership is furious - you spent all year going all-in then got cold feet at the finish line."
                        }
                    ],
                    explanation: "When you're championship-caliber and already over the tax, ACCELERATE wins! Don't stop short of the goal. The marginal cost of a buyout player is tiny compared to the value of a championship. Finish what you started!"
                },
                smooth: {
                    id: "lakers-3b",
                    title: "Sustained Success Decision",
                    context: "Your balanced approach paid off! Lakers finished 54-28 and advanced to the Conference Finals. Now it's the offseason. LeBron (40) wants to run it back. A quality free agent wing is available for 3yr/$60M (puts you $15M over tax). Or trade a piece for youth.",
                    choices: [
                        {
                            id: "a",
                            text: "Sign the free agent wing and go over the tax - capitalize on the Conference Finals run",
                            type: "accelerate",
                            score: 5,
                            payrollChange: 20000000,
                            consequence: "Perfect escalation! The wing addition completes the roster. Next season: Lakers go 56-26, reach the NBA Finals (lose in 7). Close, but the foundation is strong for another run."
                        },
                        {
                            id: "b",
                            text: "Trade the rotation piece for a younger player on a cheaper deal - stay flexible",
                            type: "smooth",
                            score: 4,
                            payrollChange: -4000000,
                            consequence: "Sustainable approach! The young player develops nicely. Lakers go 52-30, second round exit. But you're positioned to compete for 3-4 more years without cap issues."
                        },
                        {
                            id: "c",
                            text: "Trade the rotation piece and bank the savings - prepare for next year's free agency class",
                            type: "rebuild",
                            score: 2,
                            payrollChange: -12000000,
                            consequence: "Too cautious! You just reached the Conference Finals and now you're cutting salary? Lakers go 48-34, first round exit. LeBron is frustrated. Window closes."
                        }
                    ],
                    explanation: "After a Conference Finals run, ACCELERATE wins! You've built a contender through smart decisions - now is the time to strike. Waiting for 'next year' often means the window closes. Capital management is about knowing when to deploy capital, not just preserve it."
                },
                rebuild: {
                    id: "lakers-3c",
                    title: "Year 2: Building the Core",
                    context: "Rebuild Year 2. You have THREE 1st round picks (top-5, #12, #18). Your Year 1 lottery pick showed promise (15ppg rookie). You have $55M in cap space. Do you draft all 3, trade up for a star prospect, or accelerate with free agents?",
                    choices: [
                        {
                            id: "a",
                            text: "Package all three picks to trade UP for the #1 overall pick (generational prospect)",
                            type: "accelerate",
                            score: 3,
                            payrollChange: 12000000,
                            consequence: "High risk! The #1 pick is talented but raw. Lakers go 32-50 in Year 2. You put all eggs in one basket. If he becomes a superstar, genius move. If he busts, rebuild failed."
                        },
                        {
                            id: "b",
                            text: "Keep all three picks and draft best available - build a young core",
                            type: "smooth",
                            score: 5,
                            payrollChange: 18000000,
                            consequence: "Portfolio approach! Lakers draft 3 solid prospects. Team goes 34-48 in Year 2 but the young core (4 lottery picks in 2 years) is promising. Multiple paths to finding a star."
                        },
                        {
                            id: "c",
                            text: "Trade two picks for established young players (22-24 years old) and draft with top pick",
                            type: "rebuild",
                            score: 4,
                            payrollChange: 25000000,
                            consequence: "Smart acceleration! You get proven NBA talent plus keep the top pick. Lakers go 38-44 in Year 2. Rebuild timeline shortened by 1-2 years. Playoffs within reach next year."
                        }
                    ],
                    explanation: "In a rebuild with cap space and draft capital, SMOOTH portfolio building wins! Multiple lottery picks maximize your chances of landing a star. But trading for proven young talent (REBUILD choice) is also smart - it de-risks the draft uncertainty."
                }
            }
        }
    },

    // =========================================
    // MLB - Boston Red Sox
    // =========================================
    redsox: {
        id: "redsox",
        name: "Boston Red Sox",
        league: "MLB",
        city: "Boston",
        abbreviation: "BOS",
        colors: {
            primary: "#BD3039",
            secondary: "#0C2340",
            accent: "#FFFFFF"
        },
        logo: "\u{26BE}",
        salaryCap: null,
        luxuryTax: 237000000,
        currentPayroll: 205000000,
        keyPlayers: ["Rafael Devers (27)", "Triston Casas (24)", "Jarren Duran (27)"],
        teamSituation: "Young core emerging, aging pitching staff, $32M under luxury tax threshold with room to spend.",
        scenarios: {
            opening: {
                id: "redsox-1",
                title: "The Ace Pitcher Decision",
                context: "Your ace pitcher (35 years old) is hitting free agency. He's been dominant (2.89 ERA, 11 K/9) but pitchers decline fast after 35. He wants 4 years/$140M. Your farm system has two top pitching prospects who could be ready in 2 years.",
                choices: [
                    {
                        id: "a",
                        text: "Sign him to the full 4-year/$140M deal",
                        type: "accelerate",
                        score: 3,
                        payrollChange: 35000000,
                        consequence: "High commitment! Year 1: He goes 16-7, 3.12 ERA, Red Sox finish 91-71. Year 2: 14-9, 3.45 ERA, still solid. But you're locked in for years 3-4 when decline hits and prospects are stuck waiting."
                    },
                    {
                        id: "b",
                        text: "Offer 2 years/$80M with opt-outs - higher AAV, shorter term",
                        type: "smooth",
                        score: 5,
                        payrollChange: 40000000,
                        consequence: "Perfect structure! Red Sox go 89-73 with the ace. You get his best years at higher AAV, he's happy with the money, and you have flexibility when prospects are MLB-ready in 2 years."
                    },
                    {
                        id: "c",
                        text: "Let him walk and promote the prospects immediately",
                        type: "rebuild",
                        score: 2,
                        payrollChange: -5000000,
                        consequence: "Too aggressive! Prospects struggle (combined 6.10 ERA). Red Sox finish 78-84, miss playoffs. Fanbase is furious. Meanwhile your ace signs with the Yankees and dominates."
                    }
                ],
                explanation: "The SMOOTH approach (shorter term, higher annual value) is the modern way to sign aging stars. You pay for peak performance and maintain roster flexibility. This is like a 'lease vs buy' decision in business."
            },
            level2: {
                accelerate: {
                    id: "redsox-2a",
                    title: "Payroll Pressure",
                    context: "With your ace locked into a 4-year/$140M deal (payroll now $240M), your young star Rafael Devers (27) wants a massive 10-year/$300M extension. If you sign both, you'll be $55M over the luxury tax. Devers could leave as a free agent next year.",
                    choices: [
                        {
                            id: "a",
                            text: "Sign Devers to the full 10-year/$300M - lock in the franchise player at any cost",
                            type: "accelerate",
                            score: 5,
                            payrollChange: 30000000,
                            consequence: "All-in commitment! Red Sox finish 94-68, win AL East. ALCS appearance (lose in 5). $55M over luxury tax but you have ace + franchise bat. Ownership commits to the winning window."
                        },
                        {
                            id: "b",
                            text: "Sign Devers to 7 years/$220M - still a huge commitment but more manageable",
                            type: "smooth",
                            score: 4,
                            payrollChange: 22000000,
                            consequence: "Smart structure! Red Sox go 91-71, Wild Card playoff team. You keep Devers through prime years, saved $80M on back-end. Flexibility to fill other holes."
                        },
                        {
                            id: "c",
                            text: "Don't extend Devers yet - revisit at the deadline and potentially trade him if things go south",
                            type: "rebuild",
                            score: 1,
                            payrollChange: 0,
                            consequence: "Disaster! Devers is insulted, plays distracted. Red Sox go 82-80, miss playoffs. He leaves in free agency for nothing. You're stuck with expensive ace and no franchise bat."
                        }
                    ],
                    explanation: "When you've already committed to an expensive ace, you need to support that with a franchise bat! The ACCELERATE approach wins here - Devers at 27 is worth locking up, even if it means going over the luxury tax. Half-measures lead to expensive mediocrity."
                },
                smooth: {
                    id: "redsox-2b",
                    title: "The Prospect Dilemma",
                    context: "Your ace is signed to a smart 2-year deal (payroll at $245M). Your top pitching prospect is dominating AAA (1.90 ERA, 12 K/9). A rival offers a proven All-Star outfielder (.295, 28 HR) for your prospect. Red Sox are 52-38 at the deadline.",
                    choices: [
                        {
                            id: "a",
                            text: "Trade the prospect for the proven All-Star outfielder - win now with known talent",
                            type: "accelerate",
                            score: 4,
                            payrollChange: 18000000,
                            consequence: "Win-now move! The All-Star outfielder delivers (.302, 12 HR in half season). Red Sox finish 92-70, Wild Card round win, ALDS loss. But you traded a potential future ace."
                        },
                        {
                            id: "b",
                            text: "Call up the prospect with an innings limit - let him contribute while protecting his arm",
                            type: "smooth",
                            score: 5,
                            payrollChange: 1000000,
                            consequence: "Brilliant! Prospect goes 6-2, 2.87 ERA in 90 innings (protected arm). Red Sox finish 90-72, make playoffs. You kept the asset AND got production. Future ace secured."
                        },
                        {
                            id: "c",
                            text: "Keep the prospect in AAA for the full season - no rush, let him develop fully",
                            type: "rebuild",
                            score: 2,
                            payrollChange: 0,
                            consequence: "Too conservative! Red Sox finish 86-76, miss Wild Card by 2 games. The kid had nothing left to prove in AAA. You missed the playoffs being overly cautious."
                        }
                    ],
                    explanation: "SMOOTH prospect management (innings limit call-up) gives you the best of both worlds. In business, this is like a 'soft launch' - testing your product in the market with controlled risk rather than going all-in or holding back entirely."
                },
                rebuild: {
                    id: "redsox-2c",
                    title: "Fire Sale or Patience?",
                    context: "Without your ace, the Red Sox are struggling at 30-42 at the deadline. Your veteran closer (33, 1.95 ERA, 18 saves) and outfielder (32, .290 BA, 15 HR) have trade value. Rivals offer top prospects. Sell or hold?",
                    choices: [
                        {
                            id: "a",
                            text: "Hold everyone - the team could still rally and make the wild card",
                            type: "accelerate",
                            score: 1,
                            payrollChange: 0,
                            consequence: "Wishful thinking! Red Sox finish 68-94, dead last. Playoff odds were 2%. Closer leaves in free agency (no comp pick). Outfielder's value drops. Total asset waste."
                        },
                        {
                            id: "b",
                            text: "Trade the closer (who has 1 year left) but keep the outfielder (who has 3 years left)",
                            type: "smooth",
                            score: 5,
                            payrollChange: -8000000,
                            consequence: "Smart timing! You get 2 prospects for the closer (peak value as rental). Red Sox finish 72-90. Outfielder provides veteran presence for young players. You can trade him later or build around him."
                        },
                        {
                            id: "c",
                            text: "Trade both veterans for the maximum prospect haul - full teardown",
                            type: "rebuild",
                            score: 4,
                            payrollChange: -22000000,
                            consequence: "Full commitment! You land 5 prospects (2 top-100). Red Sox finish 66-96 but the rebuild is accelerated by 1-2 years. You sold high on aging assets."
                        }
                    ],
                    explanation: "SMOOTH selling (trading the right assets at the right time) maximizes value. The closer's value is highest NOW because he's a rental. The outfielder's value holds longer. In finance, this is timing your exits - you don't liquidate your entire portfolio at once."
                }
            },
            level3: {
                accelerate: {
                    id: "redsox-3a",
                    title: "Trade Deadline All-In",
                    context: "It's late July and your aggressive spending has the Red Sox at 58-44, in the thick of the AL East race. A dominant reliever is available via trade, but the cost is your #2 pitching prospect. You've already spent big this year. Adding this reliever could be the missing piece for October.",
                    choices: [
                        {
                            id: "a",
                            text: "Make the trade - you've invested too much to stop now, close the deal",
                            type: "accelerate",
                            score: 3,
                            consequence: "You're all-in. If you win the World Series, every move was worth it. If you lose in the first round, you've burned through assets and prospects for nothing."
                        },
                        {
                            id: "b",
                            text: "Trade a lesser prospect instead - offer more players but keep the top guy",
                            type: "smooth",
                            score: 5,
                            consequence: "Creative problem-solving! You still get the reliever but protect your premium prospect. Negotiating alternative packages is a hallmark of elite GMs."
                        },
                        {
                            id: "c",
                            text: "Pass on the trade - your bullpen is good enough, save the prospect",
                            type: "rebuild",
                            score: 3,
                            consequence: "Disciplined, but risky. If your bullpen collapses in October, you'll wonder 'what if?' Sometimes the cost of NOT acting is higher than acting."
                        }
                    ],
                    explanation: "Even when accelerating, SMOOTH deal-making matters. You don't have to accept the first asking price. Finding creative trade packages protects your future while still improving the present. Negotiation skills are a GM's most valuable tool."
                },
                smooth: {
                    id: "redsox-3b",
                    title: "International Signing Strategy",
                    context: "Your balanced approach has paid off - the farm system is stacked and the MLB team is competitive. Now it's the international signing period. A 16-year-old Dominican shortstop is the #1 prospect globally. Signing bonus: $5.2M (your entire international budget). You could also spread that money across 8 solid prospects.",
                    choices: [
                        {
                            id: "a",
                            text: "Go all-in on the superstar prospect ($5.2M on one player)",
                            type: "accelerate",
                            score: 3,
                            consequence: "High risk, high reward. If he pans out, you have a franchise cornerstone for a decade. But international prospects are volatile - many never reach the majors."
                        },
                        {
                            id: "b",
                            text: "Split the budget: $2.5M on the star, $2.7M spread across 5 others",
                            type: "smooth",
                            score: 5,
                            consequence: "Diversification! You still have a shot at the star while hedging your bets. This is portfolio theory applied to baseball."
                        },
                        {
                            id: "c",
                            text: "Skip the expensive prospect, sign 8 cheaper players across positions",
                            type: "rebuild",
                            score: 3,
                            consequence: "Playing the numbers game. Volume can work, but you definitely miss on the potential generational talent. In a stacked farm system, adding another star prospect could be transformative."
                        }
                    ],
                    explanation: "SMOOTH wins through diversification. In investing (and prospect development), spreading risk while maintaining upside exposure is optimal. You don't put all eggs in one basket, but you don't ignore high-potential opportunities either."
                },
                rebuild: {
                    id: "redsox-3c",
                    title: "Sell at the Deadline",
                    context: "Your rebuild is fully underway. You're 38-62 with a young roster plus some veteran \"rental\" players other teams want. Your star reliever, a solid starting pitcher, and an outfielder having a career year are all generating trade interest. Contenders are desperate for help.",
                    choices: [
                        {
                            id: "a",
                            text: "Only trade the reliever - keep the pitcher and outfielder to build around",
                            type: "accelerate",
                            score: 2,
                            consequence: "You're half-selling. The outfielder is having an unsustainable career year - his value will never be higher. You're likely keeping a player whose trade value will only decrease."
                        },
                        {
                            id: "b",
                            text: "Trade the reliever and pitcher, but keep the career-year outfielder to evaluate long-term",
                            type: "smooth",
                            score: 4,
                            consequence: "You sell the pitching (which is always in demand) and keep a potential building block. The risk is that the outfielder's career year is a fluke, but at least you're gathering data."
                        },
                        {
                            id: "c",
                            text: "Sell all three for a massive prospect haul - maximize the rebuild capital",
                            type: "rebuild",
                            score: 5,
                            consequence: "Maximum return! You capitalize on peak trade value for all three players. The prospect haul accelerates your rebuild timeline significantly. Bold but logical."
                        }
                    ],
                    explanation: "When you're fully committed to a rebuild, REBUILD (selling everything) can be the right call. The outfielder's career year makes his value artificially high - smart GMs sell high. In finance, this is 'selling into strength' rather than holding and hoping."
                }
            }
        }
    },

    // =========================================
    // NFL - Kansas City Chiefs
    // =========================================
    chiefs: {
        id: "chiefs",
        name: "Kansas City Chiefs",
        league: "NFL",
        city: "Kansas City",
        abbreviation: "KC",
        colors: {
            primary: "#E31837",
            secondary: "#FFB81C",
            accent: "#000000"
        },
        logo: "\u{1F3C8}",
        salaryCap: 255400000,
        currentPayroll: 248000000,
        capSpace: 7400000,
        keyPlayers: ["Patrick Mahomes (28)", "Travis Kelce (34)", "Chris Jones (30)"],
        teamSituation: "Dynasty mode with back-to-back Super Bowls. Mahomes is in his prime. Kelce is aging but elite.",
        scenarios: {
            opening: {
                id: "chiefs-1",
                title: "The Kelce Contract",
                context: "Travis Kelce (34) wants a 3-year/$60M extension. He's coming off 93 catches, 984 yards, 5 TDs - still elite. But tight ends decline fast after 34. You have a promising young TE on a rookie deal. Kelce-Mahomes chemistry is legendary.",
                choices: [
                    {
                        id: "a",
                        text: "Give Kelce the full 3-year/$60M extension",
                        type: "accelerate",
                        score: 4,
                        payrollChange: 20000000,
                        consequence: "Dynasty commitment! Year 1: Kelce has 89-956-6, Chiefs go 13-4, reach AFC Championship. The chemistry with Mahomes continues. Risk: you're locked in if he declines in years 2-3."
                    },
                    {
                        id: "b",
                        text: "Offer 2 years/$45M with incentives - higher per year, shorter commitment",
                        type: "smooth",
                        score: 5,
                        payrollChange: 22500000,
                        consequence: "Perfect structure! Kelce accepts. Chiefs go 14-3, win Super Bowl! You get his best years at higher AAV ($22.5M/yr), and you're not locked into year 3 if decline happens."
                    },
                    {
                        id: "c",
                        text: "Let him test free agency and develop the young TE",
                        type: "rebuild",
                        score: 1,
                        payrollChange: -3000000,
                        consequence: "Huge mistake! Young TE isn't ready. Chiefs go 10-7, first round playoff exit. Mahomes publicly questions the move. Kelce signs with Buffalo and torches KC twice."
                    }
                ],
                explanation: "SMOOTH wins with aging stars. Pay top dollar for peak years but avoid long-term commitments to 35+ players. The 'shorter term, higher AAV' structure is becoming the NFL standard for veterans."
            },
            level2: {
                accelerate: {
                    id: "chiefs-2a",
                    title: "Draft Capital vs. Win Now",
                    context: "With Kelce locked in for 3 years at $20M/year (cap space down to $1.2M), a Pro Bowl WR is available via trade. Cost: 1st round picks in 2025 AND 2026. The WR ($16M/year) would create cap issues but complete your super-offense.",
                    choices: [
                        {
                            id: "a",
                            text: "Make the trade - Kelce is locked in, complete the super-offense",
                            type: "accelerate",
                            score: 4,
                            payrollChange: 16000000,
                            consequence: "All-in! Chiefs go 13-4 with elite offense, reach Super Bowl (lose in OT). But cap is maxed and zero draft capital remains. One injury or bad contract and the dynasty crumbles."
                        },
                        {
                            id: "b",
                            text: "Offer ONE 1st rounder and negotiate - don't overpay when your cap is already tight",
                            type: "smooth",
                            score: 5,
                            payrollChange: 0,
                            consequence: "Smart negotiation! Trade falls through but you keep picks. You draft a WR in round 1 on rookie deal. Chiefs go 12-5, Conference Championship game. Sustainable cap management."
                        },
                        {
                            id: "c",
                            text: "Keep both picks - you need affordable rookie talent to fill roster gaps around your expensive stars",
                            type: "rebuild",
                            score: 3,
                            payrollChange: 3000000,
                            consequence: "Conservative! Chiefs go 11-6, Wild Card round exit. The rookie picks help depth but take time to develop. With Mahomes in prime, waiting may cost championship windows."
                        }
                    ],
                    explanation: "When your cap is stretched, SMOOTH negotiation wins! You can't mortgage the future when you're already cap-strapped. The best move is often the trade you DON'T make - draft picks on rookie deals become critical for cap-constrained contenders."
                },
                smooth: {
                    id: "chiefs-2b",
                    title: "The Defensive Upgrade",
                    context: "With Kelce on a smart 2-year deal, you have moderate cap flexibility. A top-10 cornerback just hit free agency and would transform your defense. He wants 4 years/$72M. Signing him would use most of your remaining cap space, but your defense was the weak link last season.",
                    choices: [
                        {
                            id: "a",
                            text: "Sign the CB to the full deal - defense wins championships",
                            type: "accelerate",
                            score: 4,
                            consequence: "A strong defensive investment while Mahomes carries the offense. With Kelce on a smart deal, you can afford this. Your window just got wider."
                        },
                        {
                            id: "b",
                            text: "Offer a 2-year deal with an option - get him cheaper or walk away",
                            type: "smooth",
                            score: 5,
                            consequence: "Excellent! You apply the same smart contract structure you used with Kelce. Shorter commitments preserve future flexibility. If the CB declines, you're not stuck."
                        },
                        {
                            id: "c",
                            text: "Pass and draft a CB in the 1st round - save the cap space for future needs",
                            type: "rebuild",
                            score: 3,
                            consequence: "Rookies take time to develop in the NFL secondary. With Mahomes in his prime, waiting for a rookie to mature might waste precious championship years."
                        }
                    ],
                    explanation: "SMOOTH contract strategies apply to ALL positions, not just aging stars. The 'shorter term, higher AAV' approach that worked for Kelce also works for free agent acquisitions. Consistency in your financial philosophy builds long-term success."
                },
                rebuild: {
                    id: "chiefs-2c",
                    title: "The Youth Movement",
                    context: "Kelce is gone, and Mahomes is frustrated. Your young TE is now the starter but he's raw. You have $20M in cap space from Kelce's departure. Other teams see the Chiefs as vulnerable and are calling about trades. Mahomes wants you to use that cap space to add weapons.",
                    choices: [
                        {
                            id: "a",
                            text: "Sign a veteran WR and TE in free agency - give Mahomes weapons immediately",
                            type: "accelerate",
                            score: 4,
                            consequence: "Smart use of the cap space! Mahomes makes everyone better, and proven weapons get immediate production. You've replaced Kelce's production (if not his magic) quickly."
                        },
                        {
                            id: "b",
                            text: "Sign ONE reliable veteran target and invest the rest in the offensive line to protect Mahomes",
                            type: "smooth",
                            score: 5,
                            consequence: "Brilliant! A healthy Mahomes behind a great O-line is more valuable than surrounding him with mid-tier skill players. You address the biggest need while thinking holistically."
                        },
                        {
                            id: "c",
                            text: "Bank the cap space for next year's loaded free agency class - trust the young TE to develop",
                            type: "rebuild",
                            score: 1,
                            consequence: "You just let Kelce walk AND you won't spend his cap savings? Mahomes is 28 and in his prime - every year you waste is a year of generational talent gone. This is criminal mismanagement."
                        }
                    ],
                    explanation: "Even if you chose REBUILD by letting Kelce go, you must recognize when to shift strategies. With Mahomes in his prime, hoarding cap space is wasteful. SMOOTH re-investment (O-line + one weapon) addresses needs while keeping flexibility."
                }
            },
            level3: {
                accelerate: {
                    id: "chiefs-3a",
                    title: "Salary Cap Crisis",
                    context: "Your aggressive moves have created a $22M cap deficit for next season. You must cut somewhere. Options: restructure Mahomes' deal (converts salary to bonus, pushes cap hit to future years), cut your starting middle linebacker (saves $14M, but he's a leader), or trade Chris Jones and his $28M cap hit to a team with space.",
                    choices: [
                        {
                            id: "a",
                            text: "Restructure Mahomes - push the cap hit into future years",
                            type: "accelerate",
                            score: 3,
                            consequence: "This works now but creates 'cap hell' later. Every restructure adds dead money to future years. You're borrowing from 2026, 2027, 2028... eventually the bill comes due."
                        },
                        {
                            id: "b",
                            text: "Cut the veteran LB and sign a cheaper replacement - painful but sustainable",
                            type: "smooth",
                            score: 5,
                            consequence: "Tough but smart. You maintain a balanced cap structure while staying competitive. Linebackers are easier to replace than elite pass rushers or quarterbacks."
                        },
                        {
                            id: "c",
                            text: "Trade Chris Jones - get younger and save $28M in cap space",
                            type: "rebuild",
                            score: 1,
                            consequence: "Jones is a dominant defender in his prime at 30. Trading him saves money but guts your defense during your championship window. This is panic selling."
                        }
                    ],
                    explanation: "SMOOTH cap management wins long-term. Restructures feel painless but create future problems (like credit card debt). Making tough roster decisions - cutting good-not-great players - maintains financial health while preserving your elite core."
                },
                smooth: {
                    id: "chiefs-3b",
                    title: "The Mahomes Extension Planning",
                    context: "Mahomes' mega-deal has a cap hit increasing to $52M next year. Your balanced roster management has kept you competitive, but you need to plan ahead. You could restructure now (pushing costs to later), let a few role players walk in free agency to create space, or proactively trade a mid-level starter for draft picks to free up cap.",
                    choices: [
                        {
                            id: "a",
                            text: "Restructure Mahomes to create immediate cap room - keep the roster intact",
                            type: "accelerate",
                            score: 3,
                            consequence: "Short-term fix, long-term problem. You keep everyone but push a wave of dead money into future years. This is the NFL equivalent of credit card debt."
                        },
                        {
                            id: "b",
                            text: "Let 2-3 role players walk and replace them with draft picks and minimum-salary vets",
                            type: "smooth",
                            score: 5,
                            consequence: "Sustainable excellence! You accept that roster turnover is natural in a cap sport. Finding value in the draft and free agent bargains is how dynasties are maintained."
                        },
                        {
                            id: "c",
                            text: "Proactively trade a mid-level starter now while his value is high",
                            type: "rebuild",
                            score: 4,
                            consequence: "Proactive asset management! Selling before you're forced to sell gets you better value. You turn a cap problem into draft capital. Smart forward thinking."
                        }
                    ],
                    explanation: "Dynasty maintenance requires SMOOTH cap management. The Chiefs' real-life success comes from constantly churning the bottom of the roster while keeping the elite core. Let role players walk, find cheap replacements, repeat. It's not glamorous, but it works."
                },
                rebuild: {
                    id: "chiefs-3c",
                    title: "Draft Night Strategy",
                    context: "Your rebuild moves have netted you extra draft picks - you now have two 1st rounders and three 2nd rounders. Mahomes is still elite, so you're not truly rebuilding, but you need young, cheap talent to fill the roster around his massive contract. The draft is deep at wide receiver and defensive line.",
                    choices: [
                        {
                            id: "a",
                            text: "Package picks to trade for a proven star WR - Mahomes needs a #1 target NOW",
                            type: "accelerate",
                            score: 3,
                            consequence: "You just accumulated picks through trades... and now you're trading them away? A proven WR helps immediately, but you're back to having no draft capital. Make up your mind on a strategy!"
                        },
                        {
                            id: "b",
                            text: "Draft a WR in the 1st round and best defensive player available with the other picks",
                            type: "smooth",
                            score: 5,
                            consequence: "Perfect! You address the biggest need (weapons for Mahomes) while building depth across the roster. Multiple picks mean multiple chances to find starters on cheap rookie deals."
                        },
                        {
                            id: "c",
                            text: "Trade DOWN from both 1st rounders for more 2nd and 3rd rounders - maximize the number of picks",
                            type: "rebuild",
                            score: 3,
                            consequence: "More picks isn't always better. With Mahomes in his prime, you need impact starters NOW, not more developmental projects. Trading down works for true rebuilds, not for teams with elite QBs."
                        }
                    ],
                    explanation: "With a generational QB, SMOOTH drafting is optimal. Use premium picks on premium positions (WR, pass rush) and fill depth with later picks. Volume drafting makes sense for rebuilding teams, but the Chiefs need immediate contributors alongside Mahomes."
                }
            }
        }
    }
};

// Team order for the game (players must complete all 3)
const TEAM_ORDER = ["lakers", "redsox", "chiefs"];

// Scoring thresholds
const SCORING = {
    maxPointsPerQuestion: 5,
    totalQuestions: 9,
    maxPossibleScore: 45,
    unlockThreshold: 33, // ~73% efficiency
    xpReward: 200
};

// Pool of static claim codes - one is randomly selected when unlocked
const CLAIM_CODES = [
    "BOWGM2024",
    "SPORTSCAP301",
    "GMLEGEND24",
    "BOWELITE301",
    "CAPITALPRO24",
    "DYNASTYGM301",
    "BOWCHAMP2024",
    "SMARTGM301",
    "BOWCAPITAL24",
    "GMMASTER301"
];

// Educational content for end screen
const FRAMEWORK_SUMMARY = {
    accelerate: {
        name: "ACCELERATE",
        description: "Go all-in on your current window. Pay premiums, trade future assets, maximize NOW.",
        when: "When you have a generational talent in their prime or a clear championship window.",
        risk: "If it doesn't work, you've mortgaged the future with nothing to show for it."
    },
    smooth: {
        name: "SMOOTH",
        description: "Maintain flexibility. Make balanced investments. Keep options open.",
        when: "Most of the time! Sustainable success beats boom-bust cycles.",
        risk: "You might miss a championship window by being too cautious."
    },
    rebuild: {
        name: "REBUILD",
        description: "Sell high on aging assets. Reset the timeline. Invest in future value.",
        when: "When your core is aging, your window is closed, or you're getting premium value for declining assets.",
        risk: "Rebuilds can take years and fan patience runs out fast."
    }
};

// Export for use in game.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TEAMS_DATA, TEAM_ORDER, SCORING, CLAIM_CODES, FRAMEWORK_SUMMARY };
}
