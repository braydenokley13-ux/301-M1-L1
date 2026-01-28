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
                        score: 3,
                        consequence: "You're locked into the LeBron era. If he declines, you're paying $52M/year for a diminishing player while over the luxury tax."
                    },
                    {
                        id: "b",
                        text: "Offer a 1-year deal with a player option for year 2",
                        type: "smooth",
                        score: 5,
                        consequence: "Smart! You keep LeBron but maintain flexibility. You can reassess after each season based on his performance."
                    },
                    {
                        id: "c",
                        text: "Let him walk and fast-track the rebuild around young players",
                        type: "rebuild",
                        score: 2,
                        consequence: "Risky! LeBron still has value, and walking away from a top-10 player rarely works. You'd lose years of potential playoff revenue."
                    }
                ],
                explanation: "The SMOOTH approach wins here. LeBron is still elite but father time is undefeated. A flexible contract lets you stay competitive while keeping options open. This is classic 'optionality preservation' - a key concept in capital management."
            },
            level2: {
                accelerate: {
                    id: "lakers-2a",
                    title: "The All-In Trade",
                    context: "You've locked LeBron into a 2-year max deal. Now it's the trade deadline and you're 5th in the West. A star point guard is available, but the price is TWO future 1st round picks. With LeBron's contract eating $52M/year, those future picks could be very valuable if he declines.",
                    choices: [
                        {
                            id: "a",
                            text: "Trade both picks - you've already committed to LeBron, go all the way",
                            type: "accelerate",
                            score: 3,
                            consequence: "You're fully committed now. LeBron + AD + a star PG is a title contender, but you have zero safety net if anything goes wrong."
                        },
                        {
                            id: "b",
                            text: "Trade ONE pick and try to add a solid starter instead of a star",
                            type: "smooth",
                            score: 5,
                            consequence: "Smart! You improve the roster without going completely all-in. You keep one future pick as insurance for the post-LeBron era."
                        },
                        {
                            id: "c",
                            text: "Hold the picks - you're already spending big on LeBron, protect the future",
                            type: "rebuild",
                            score: 3,
                            consequence: "Conservative. You've committed to LeBron at max money but won't support him with more talent. That's a half-measure that could waste the investment you already made."
                        }
                    ],
                    explanation: "When you've already committed resources to a star (LeBron's max deal), the SMOOTH approach adds support without going reckless. Think of it like investing - once you've made a big bet, you diversify the rest rather than doubling down on the same hand."
                },
                smooth: {
                    id: "lakers-2b",
                    title: "Trade Deadline Opportunity",
                    context: "LeBron is on a flexible 1-year deal and the Lakers are 5th in the West (34-25). A veteran point guard is available for one future 1st round pick. LeBron's been great this year, but you also have the option to stand pat and wait to see how the playoffs go.",
                    choices: [
                        {
                            id: "a",
                            text: "Make the trade - LeBron is playing well, upgrade for a playoff push",
                            type: "accelerate",
                            score: 4,
                            consequence: "Good timing! LeBron's having a strong season and you only gave up one pick. You maximized this window without overpaying."
                        },
                        {
                            id: "b",
                            text: "Trade ONE pick but target a role player instead - save value",
                            type: "smooth",
                            score: 5,
                            consequence: "Excellent! You improve the roster with a solid addition while keeping the bigger trade piece for later. Incremental improvements often win championships."
                        },
                        {
                            id: "c",
                            text: "Stand pat - see how the team performs in the playoffs as-is",
                            type: "rebuild",
                            score: 3,
                            consequence: "You saved assets, but you may have wasted a chance to win now. If LeBron leaves after this year, you missed your window."
                        }
                    ],
                    explanation: "With a flexible LeBron deal, you're in a great position. SMOOTH continues to work - making a measured upgrade without mortgaging the future. You've preserved optionality at every step."
                },
                rebuild: {
                    id: "lakers-2c",
                    title: "The Rebuild Blueprint",
                    context: "LeBron is gone. You freed up $47M in cap space and have a young core of Reaves and Hachimura. Anthony Davis (31) is still on the roster. He wants to know: are you competing or rebuilding? Other teams are calling about AD.",
                    choices: [
                        {
                            id: "a",
                            text: "Sign two mid-tier free agents and try to compete around AD immediately",
                            type: "accelerate",
                            score: 2,
                            consequence: "You let LeBron go to rebuild... then immediately spent the cap space to compete? This sends mixed signals and the mid-tier signings probably aren't enough to contend."
                        },
                        {
                            id: "b",
                            text: "Keep AD but be patient - add young complementary pieces through the draft and affordable free agents",
                            type: "smooth",
                            score: 4,
                            consequence: "Solid! AD is still a top-15 player. Building around him with young talent while staying financially flexible is a smart transition plan."
                        },
                        {
                            id: "c",
                            text: "Trade AD for a package of young players and draft picks - full teardown",
                            type: "rebuild",
                            score: 4,
                            consequence: "Committed! If you let LeBron walk to rebuild, trading AD for a haul of assets is the logical next step. You'll have a complete set of building blocks for the future."
                        }
                    ],
                    explanation: "After letting LeBron go, there's no single best answer. Keeping AD (SMOOTH) gives you a shortcut to competing again. Trading AD (REBUILD) fully commits to the reset. The worst option is the half-measure of spending to compete without a true superstar duo."
                }
            },
            level3: {
                accelerate: {
                    id: "lakers-3a",
                    title: "Luxury Tax Explosion",
                    context: "Your aggressive moves have the Lakers $45M over the luxury tax line. Ownership is demanding you cut at least $20M or face consequences. You have Anthony Davis on a supermax, plus all the players you traded for. The roster is talented but expensive.",
                    choices: [
                        {
                            id: "a",
                            text: "Convince ownership to pay the tax - this is a championship roster, don't break it up",
                            type: "accelerate",
                            score: 3,
                            consequence: "Ownership agrees reluctantly, but warns this is the last season of spending. If you don't win a title, massive changes are coming. High pressure."
                        },
                        {
                            id: "b",
                            text: "Trade overpaid role players for cheaper alternatives to trim $20M",
                            type: "smooth",
                            score: 5,
                            consequence: "Smart cap management! You keep your stars and trim the edges. Finding value at the margins is what separates great GMs from good ones."
                        },
                        {
                            id: "c",
                            text: "Accept that the window is closing - trade a star for young assets and relief",
                            type: "rebuild",
                            score: 2,
                            consequence: "You just went all-in and now you're selling? This whiplash approach destroys value. You traded picks FOR players, now you're trading players FOR picks at a loss."
                        }
                    ],
                    explanation: "When you've already accelerated, SMOOTH management of the details becomes critical. You can't just keep adding payroll forever. Trimming role players while keeping stars is the financial discipline that sustains winning."
                },
                smooth: {
                    id: "lakers-3b",
                    title: "Offseason Roster Tuning",
                    context: "Your balanced approach has the Lakers as a solid playoff team. You're right at the luxury tax line with a competitive roster. The offseason brings options: a quality free agent wing is available, but signing him puts you over the tax. You could also trade a rotation piece to create space for a younger, cheaper player.",
                    choices: [
                        {
                            id: "a",
                            text: "Sign the free agent wing and go over the tax - time to push for a title",
                            type: "accelerate",
                            score: 4,
                            consequence: "Good timing to escalate! Your balanced approach gave you a strong foundation. Now a targeted addition could push you over the top without mortgaging the future."
                        },
                        {
                            id: "b",
                            text: "Trade the rotation piece for a younger player on a cheaper deal - stay flexible",
                            type: "smooth",
                            score: 5,
                            consequence: "Masterful! You keep the cap clean while getting younger. This sustainable approach means you can compete for years, not just one season."
                        },
                        {
                            id: "c",
                            text: "Trade the rotation piece and bank the savings - prepare for next year's free agency class",
                            type: "rebuild",
                            score: 3,
                            consequence: "Saving for the future isn't bad, but you have a competitive team NOW. Sometimes being too patient means missing your window entirely."
                        }
                    ],
                    explanation: "SMOOTH continues to be the optimal strategy for a well-managed team. You can make targeted upgrades without disrupting your foundation. In business, this is 'continuous improvement' vs. 'radical restructuring.'"
                },
                rebuild: {
                    id: "lakers-3c",
                    title: "Draft Night Decisions",
                    context: "Your rebuild has given the Lakers three 1st round picks in this year's draft, including a top-5 selection. You also have cap space to sign free agents. The draft has a clear #1 prospect (generational big man) and strong talent throughout the lottery.",
                    choices: [
                        {
                            id: "a",
                            text: "Package picks to trade UP for the #1 overall pick - get the franchise player",
                            type: "accelerate",
                            score: 3,
                            consequence: "Bold! Trading multiple picks for one player is risky. If the #1 pick busts, you've lost your entire rebuild haul. But franchise players change everything."
                        },
                        {
                            id: "b",
                            text: "Keep all three picks and draft the best available players at each spot",
                            type: "smooth",
                            score: 5,
                            consequence: "Three lottery picks gives you three chances at a star. Diversifying your bets is statistically the smartest approach - one of these players is likely to become an All-Star."
                        },
                        {
                            id: "c",
                            text: "Trade TWO picks for established young players and draft with the top pick",
                            type: "rebuild",
                            score: 4,
                            consequence: "Converting draft uncertainty into known talent speeds up the timeline. You keep the best pick and get proven players. Smart risk management."
                        }
                    ],
                    explanation: "In a rebuild, SMOOTH diversification wins. Multiple high picks create multiple paths to success. In investing, this is portfolio theory - don't put all your capital into one stock, even if it looks like a sure thing."
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
                context: "Your ace pitcher (35 years old) is hitting free agency. He's been dominant but pitchers decline fast after 35. He wants 4 years/$140M. Your farm system has two top pitching prospects who could be ready in 2 years.",
                choices: [
                    {
                        id: "a",
                        text: "Sign him to the full 4-year/$140M deal",
                        type: "accelerate",
                        score: 2,
                        consequence: "Years 1-2 are great, but by years 3-4 you're paying $35M for a declining 38-year-old while your prospects are stuck in the minors."
                    },
                    {
                        id: "b",
                        text: "Offer 2 years/$80M with opt-outs - higher AAV, shorter term",
                        type: "smooth",
                        score: 5,
                        consequence: "Perfect! You get his best years, he gets paid well, and you have flexibility when prospects are ready. Win-win negotiation."
                    },
                    {
                        id: "c",
                        text: "Let him walk and promote the prospects immediately",
                        type: "rebuild",
                        score: 2,
                        consequence: "Too aggressive! Prospects often need more development time. You'd be throwing them into the fire while a competitor signs your ace."
                    }
                ],
                explanation: "The SMOOTH approach (shorter term, higher annual value) is the modern way to sign aging stars. You pay for peak performance and maintain roster flexibility. This is like a 'lease vs buy' decision in business."
            },
            level2: {
                accelerate: {
                    id: "redsox-2a",
                    title: "Payroll Pressure",
                    context: "With your ace locked into a 4-year/$140M deal, your payroll is climbing fast. Now your young star Rafael Devers (27) wants a massive 10-year/$300M extension. If you sign both, you'll blow past the luxury tax threshold. Devers is your franchise cornerstone and could leave as a free agent next year.",
                    choices: [
                        {
                            id: "a",
                            text: "Sign Devers to the full 10-year/$300M - lock in the franchise player at any cost",
                            type: "accelerate",
                            score: 3,
                            consequence: "You now have $440M committed to two players over the next 4 years. Payroll flexibility is gone, but you have an ace and a franchise hitter. You're betting on winning big right now."
                        },
                        {
                            id: "b",
                            text: "Sign Devers to 7 years/$220M - still a huge commitment but more manageable",
                            type: "smooth",
                            score: 5,
                            consequence: "Great negotiation! You keep Devers through his prime years without the risky back-end years. The money saved gives you flexibility to fill other roster holes."
                        },
                        {
                            id: "c",
                            text: "Don't extend Devers yet - revisit at the deadline and potentially trade him if things go south",
                            type: "rebuild",
                            score: 2,
                            consequence: "Dangerous! You're risking losing your 27-year-old franchise player for nothing. With the ace deal already eating payroll, losing Devers too would leave you with an expensive, mediocre team."
                        }
                    ],
                    explanation: "With a big pitching contract already on the books, SMOOTH contract management for your position players is crucial. You secure Devers but at a manageable structure. Over-committing to too many long-term deals creates 'payroll gridlock' - a common sports management trap."
                },
                smooth: {
                    id: "redsox-2b",
                    title: "The Prospect Dilemma",
                    context: "Your ace is signed to a smart 2-year deal, and your top pitching prospect is absolutely dominating in AAA - 1.90 ERA, 12 K/9. He could contribute NOW, but rushing him risks injury and stunts development. Meanwhile, a rival is offering a proven All-Star outfielder for your prospect in a trade.",
                    choices: [
                        {
                            id: "a",
                            text: "Trade the prospect for the proven All-Star outfielder - win now with known talent",
                            type: "accelerate",
                            score: 3,
                            consequence: "You get an immediate impact player, but you've traded a potential future ace for a few years of an outfielder. If the prospect becomes elite, this trade haunts you for a decade."
                        },
                        {
                            id: "b",
                            text: "Call up the prospect with an innings limit - let him contribute while protecting his arm",
                            type: "smooth",
                            score: 5,
                            consequence: "Brilliant management! An innings limit protects the prospect's long-term health while giving you a preview of your future rotation. You keep the asset AND get production."
                        },
                        {
                            id: "c",
                            text: "Keep the prospect in AAA for the full season - no rush, let him develop fully",
                            type: "rebuild",
                            score: 3,
                            consequence: "Patient, but maybe too patient. The kid is dominating AAA and has nothing left to prove there. Extra time in the minors doesn't always help development."
                        }
                    ],
                    explanation: "SMOOTH prospect management (innings limit call-up) gives you the best of both worlds. In business, this is like a 'soft launch' - testing your product in the market with controlled risk rather than going all-in or holding back entirely."
                },
                rebuild: {
                    id: "redsox-2c",
                    title: "Fire Sale or Patience?",
                    context: "Without your ace, the Red Sox are struggling at 30-42. Your veteran closer (33, dominant numbers) and starting outfielder (32, hitting .290) both have significant trade value. Rival contenders are calling with offers of young prospects. Do you sell now or ride out the season?",
                    choices: [
                        {
                            id: "a",
                            text: "Hold everyone - the team could still rally and make the wild card",
                            type: "accelerate",
                            score: 1,
                            consequence: "At 30-42, your playoff odds are under 3%. You're holding depreciating assets while their trade value is at its peak. Hope isn't a strategy."
                        },
                        {
                            id: "b",
                            text: "Trade the closer (who has 1 year left) but keep the outfielder (who has 3 years left)",
                            type: "smooth",
                            score: 5,
                            consequence: "Smart asset management! The closer's value peaks now (contenders need relievers). The outfielder's longer contract means you can trade him later if needed, or build around him."
                        },
                        {
                            id: "c",
                            text: "Trade both veterans for the maximum prospect haul - full teardown",
                            type: "rebuild",
                            score: 4,
                            consequence: "Aggressive but logical. You maximize the return on aging assets. The prospect haul could jumpstart your rebuild by 1-2 years."
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
                context: "Travis Kelce (34) wants a 3-year/$60M extension. He's the best TE ever but tight ends decline fast after 34. You have a promising young TE on a rookie deal. Kelce and Mahomes have historic chemistry.",
                choices: [
                    {
                        id: "a",
                        text: "Give Kelce the full 3-year/$60M extension",
                        type: "accelerate",
                        score: 3,
                        consequence: "You keep the chemistry but might be paying $20M/year for a 36-year-old. The NFL is brutal to aging players."
                    },
                    {
                        id: "b",
                        text: "Offer 2 years/$45M with incentives - higher per year, shorter commitment",
                        type: "smooth",
                        score: 5,
                        consequence: "Perfect structure! Kelce gets paid, you get his best remaining years, and you're not locked into year 3 if he declines."
                    },
                    {
                        id: "c",
                        text: "Let him test free agency and develop the young TE",
                        type: "rebuild",
                        score: 1,
                        consequence: "Mistake! The Mahomes-Kelce connection is irreplaceable. You're in dynasty mode - this is not the time to rebuild a position."
                    }
                ],
                explanation: "SMOOTH wins with aging stars. Pay top dollar for peak years but avoid long-term commitments to 35+ players. The 'shorter term, higher AAV' structure is becoming the NFL standard for veterans."
            },
            level2: {
                accelerate: {
                    id: "chiefs-2a",
                    title: "Draft Capital vs. Win Now",
                    context: "With Kelce locked in for 3 years at $20M/year, your cap space is tight. Now a Pro Bowl wide receiver is available via trade. Cost: your 1st round pick this year AND next year. Kelce + this WR + Mahomes would be the NFL's most dangerous offense. But two 1st-round picks is a steep price when your cap is already stretched.",
                    choices: [
                        {
                            id: "a",
                            text: "Make the trade - Kelce is locked in, complete the super-offense",
                            type: "accelerate",
                            score: 3,
                            consequence: "Your offense is elite, but your cap is a ticking time bomb. No draft capital and no cap space means you can't fix any holes that emerge. One injury could unravel everything."
                        },
                        {
                            id: "b",
                            text: "Offer ONE 1st rounder and negotiate - don't overpay when your cap is already tight",
                            type: "smooth",
                            score: 5,
                            consequence: "Smart negotiation! You might still land the receiver at a discount, and if not, you saved valuable picks for a team that needs cheap rookie contracts to fill roster spots."
                        },
                        {
                            id: "c",
                            text: "Keep both picks - you need affordable rookie talent to fill roster gaps around your expensive stars",
                            type: "rebuild",
                            score: 4,
                            consequence: "Practical! With so much cap tied up in Kelce and Mahomes, you need cheap rookies to fill the rest of the roster. Draft picks are your lifeblood now."
                        }
                    ],
                    explanation: "When your cap is already stretched (from the Kelce deal), SMOOTH negotiation is critical. You can't keep trading assets when you're already cap-strapped. Sometimes the best trade is the one you don't make - or the one you negotiate down to a fair price."
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
