/**
 * BOW Sports Capital - Real Team Game Plan
 * Team Data and Scenarios for 9th-10th Grade Economics Education
 *
 * Framework: Accelerate / Smooth / Rebuild
 * - ACCELERATE: Go all-in now, compress your competitive window, pay premium
 * - SMOOTH: Maintain flexibility, balanced approach, keep options open
 * - REBUILD: Sell high, reset timeline, invest in future assets
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
        logo: "🏀", // Emoji placeholder - can be replaced with SVG
        salaryCap: 140588000,
        luxuryTax: 170814000,
        currentPayroll: 175000000,
        keyPlayers: ["LeBron James (39)", "Anthony Davis (31)", "Austin Reaves (26)"],
        teamSituation: "Championship contender with aging superstar LeBron James. Window closing but still elite.",
        scenarios: [
            {
                id: "lakers-1",
                title: "The LeBron Decision",
                context: "LeBron James just turned 39 but is still playing at an All-Star level. He's in the final year of his contract worth $47M. He wants a 2-year max extension ($104M total). Your young core (Reaves, Hachimura) is developing nicely.",
                image: "lebron",
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
            {
                id: "lakers-2",
                title: "Trade Deadline Dilemma",
                context: "It's February. The Lakers are 5th in the West (34-25). You can trade two future 1st round picks for a star point guard who would make you title favorites. But those picks could be lottery picks if LeBron retires soon.",
                image: "trade",
                choices: [
                    {
                        id: "a",
                        text: "Make the trade - go all-in for a championship NOW",
                        type: "accelerate",
                        score: 4,
                        consequence: "Bold move! You're betting everything on this window. If you win a title, it's worth it. If not, you've mortgaged the future."
                    },
                    {
                        id: "b",
                        text: "Trade ONE pick but keep the other for flexibility",
                        type: "smooth",
                        score: 5,
                        consequence: "Excellent balance! You improve the team while keeping some future assets. You're competitive now AND later."
                    },
                    {
                        id: "c",
                        text: "Keep both picks - the future is more important",
                        type: "rebuild",
                        score: 2,
                        consequence: "You're wasting LeBron's final years! When you have a top-10 player, you should maximize that window rather than hoarding picks."
                    }
                ],
                explanation: "When you have a championship-caliber core, the SMOOTH approach of partial investment makes sense. You don't mortgage everything, but you also don't waste your window. Draft picks have uncertain value; a chance at a title is tangible."
            },
            {
                id: "lakers-3",
                title: "Luxury Tax Crisis",
                context: "You're $35M over the luxury tax line. Ownership says cut $15M or face consequences. You could waive veteran role players, trade AD for picks, or convince ownership to pay the tax for one more title run.",
                image: "money",
                choices: [
                    {
                        id: "a",
                        text: "Convince ownership to pay the tax - championships matter more",
                        type: "accelerate",
                        score: 3,
                        consequence: "Ownership agrees reluctantly. You keep the roster intact but tension is high. One bad playoff exit and major changes are coming."
                    },
                    {
                        id: "b",
                        text: "Trim $15M by trading overpaid role players for cheaper alternatives",
                        type: "smooth",
                        score: 5,
                        consequence: "Smart roster management! You stay competitive while respecting financial constraints. This sustainable approach keeps you in contention for years."
                    },
                    {
                        id: "c",
                        text: "Trade Anthony Davis for young players and picks - full rebuild",
                        type: "rebuild",
                        score: 1,
                        consequence: "Disaster! AD is still a top-15 player at 31. Trading him now gets you 60 cents on the dollar. You'd be rebuilding with less value than if you waited."
                    }
                ],
                explanation: "Financial discipline + competitive roster = SMOOTH wins. In real business (and sports), sustainable spending beats boom-bust cycles. You can compete AND be financially responsible."
            }
        ]
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
        logo: "⚾",
        salaryCap: null, // MLB has no hard cap, but luxury tax threshold
        luxuryTax: 237000000,
        currentPayroll: 205000000,
        keyPlayers: ["Rafael Devers (27)", "Triston Casas (24)", "Jarren Duran (27)"],
        teamSituation: "Young core emerging, aging pitching staff, $32M under luxury tax threshold with room to spend.",
        scenarios: [
            {
                id: "redsox-1",
                title: "The Ace Pitcher Decision",
                context: "Your ace pitcher (35 years old) is hitting free agency. He's been dominant but pitchers decline fast after 35. He wants 4 years/$140M. Your farm system has two top pitching prospects who could be ready in 2 years.",
                image: "pitcher",
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
            {
                id: "redsox-2",
                title: "International Signing Bonus",
                context: "A 16-year-old Dominican shortstop is the #1 international prospect. He's projected to be a superstar in 5-6 years. Signing bonus: $5.2M (your entire international budget). You could also spread that money across 10 solid prospects.",
                image: "international",
                choices: [
                    {
                        id: "a",
                        text: "Go all-in on the superstar prospect ($5.2M on one player)",
                        type: "accelerate",
                        score: 3,
                        consequence: "High risk, high reward. If he pans out, you have a franchise cornerstone. But international prospects are volatile - many don't make it."
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
                        text: "Skip the expensive prospect, sign 10 cheaper players",
                        type: "rebuild",
                        score: 3,
                        consequence: "Playing the numbers game. You might find a diamond in the rough, but you definitely miss on the potential superstar."
                    }
                ],
                explanation: "SMOOTH wins through diversification. In investing (and prospect development), spreading risk while maintaining upside exposure is optimal. You don't put all eggs in one basket, but you don't ignore high-potential opportunities either."
            },
            {
                id: "redsox-3",
                title: "Sell or Buy at the Deadline",
                context: "It's July 31st. You're 52-52, exactly .500. Wild card is 4 games away. You could buy (add a rental bat for a prospect) or sell (trade your veteran closer for prospects). Or stand pat.",
                image: "deadline",
                choices: [
                    {
                        id: "a",
                        text: "BUY - Trade a top prospect for a rental bat and chase the wild card",
                        type: "accelerate",
                        score: 2,
                        consequence: "You're trading years of prospect value for 2 months of a player who might leave. The math rarely works for bubble teams."
                    },
                    {
                        id: "b",
                        text: "STAND PAT - Keep the team together and see how August goes",
                        type: "smooth",
                        score: 4,
                        consequence: "Reasonable! You don't overpay as a buyer or give up on the season. You can reassess in August with more data."
                    },
                    {
                        id: "c",
                        text: "SELL - Trade the veteran closer for prospects and focus on next year",
                        type: "rebuild",
                        score: 5,
                        consequence: "Smart! A .500 team rarely wins the World Series. Getting value for a 33-year-old closer before he declines is savvy asset management."
                    }
                ],
                explanation: "Sometimes REBUILD is the right call. At .500, your championship odds are under 2%. Trading an aging asset for future value is rational capital allocation. Don't let emotion ('but we could make the playoffs!') override math."
            }
        ]
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
        logo: "🏈",
        salaryCap: 255400000,
        currentPayroll: 248000000,
        capSpace: 7400000,
        keyPlayers: ["Patrick Mahomes (28)", "Travis Kelce (34)", "Chris Jones (30)"],
        teamSituation: "Dynasty mode with back-to-back Super Bowls. Mahomes is in his prime. Kelce is aging but elite.",
        scenarios: [
            {
                id: "chiefs-1",
                title: "The Kelce Contract",
                context: "Travis Kelce (34) wants a 3-year/$60M extension. He's the best TE ever but tight ends decline fast after 34. You have a promising young TE on a rookie deal. Kelce and Mahomes have historic chemistry.",
                image: "kelce",
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
            {
                id: "chiefs-2",
                title: "Draft Capital vs. Win Now",
                context: "A Pro Bowl wide receiver is available via trade. Cost: Your 1st round pick this year AND next year. Your current WR corps is good but not elite. Mahomes is 28 with 8-10 prime years left.",
                image: "draft",
                choices: [
                    {
                        id: "a",
                        text: "Make the trade - give Mahomes elite weapons NOW",
                        type: "accelerate",
                        score: 4,
                        consequence: "You're going all-in! With Mahomes, the Super Bowl window is wide open. Two late 1st-rounders for a proven star can be worth it."
                    },
                    {
                        id: "b",
                        text: "Offer ONE 1st rounder and try to negotiate down",
                        type: "smooth",
                        score: 5,
                        consequence: "Smart negotiation! You might still get the deal done while preserving some draft capital. Never pay asking price without negotiating."
                    },
                    {
                        id: "c",
                        text: "Keep the picks and develop receivers through the draft",
                        type: "rebuild",
                        score: 2,
                        consequence: "Draft picks are lottery tickets. With Mahomes in his prime, trading picks for proven talent makes more sense than hoping rookies develop."
                    }
                ],
                explanation: "When you have a generational QB, the SMOOTH-to-ACCELERATE spectrum makes sense. You should be acquiring talent, but negotiate to avoid overpaying. Draft picks are worth less when you're picking late every year anyway."
            },
            {
                id: "chiefs-3",
                title: "Salary Cap Crunch",
                context: "You're $15M over the projected cap. Options: Cut a good veteran LB (saves $12M), restructure Mahomes' deal (converts salary to bonus, pushes cap hit to future), or trade Chris Jones and his $28M cap hit.",
                image: "cap",
                choices: [
                    {
                        id: "a",
                        text: "Restructure Mahomes - push the cap hit into future years",
                        type: "accelerate",
                        score: 3,
                        consequence: "This works short-term but creates 'cap hell' later. You're borrowing from the future. Eventually the bill comes due."
                    },
                    {
                        id: "b",
                        text: "Cut the veteran LB and sign a cheaper replacement",
                        type: "smooth",
                        score: 5,
                        consequence: "Tough but smart. You maintain a balanced cap structure while staying competitive. LBs are easier to replace than elite pass rushers."
                    },
                    {
                        id: "c",
                        text: "Trade Chris Jones - get younger and save $28M",
                        type: "rebuild",
                        score: 1,
                        consequence: "Terrible timing! Jones is a dominant defender in his prime. Trading him saves money but makes your defense significantly worse during your championship window."
                    }
                ],
                explanation: "SMOOTH cap management wins long-term. Restructures feel painless but create future problems. Making tough roster decisions (cutting good-not-great players) maintains financial health while preserving your core."
            }
        ]
    }
};

// Team order for the game (players must complete all 3)
const TEAM_ORDER = ["lakers", "redsox", "chiefs"];

// Scoring thresholds
const SCORING = {
    maxPointsPerQuestion: 5,
    totalQuestions: 9,
    maxPossibleScore: 45,
    unlockThreshold: 33, // ~73% efficiency (was 11 out of 15 in original)
    claimCode: "BOWCAPITAL2024",
    xpReward: 200
};

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
    module.exports = { TEAMS_DATA, TEAM_ORDER, SCORING, FRAMEWORK_SUMMARY };
}
