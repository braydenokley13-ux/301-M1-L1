/**
 * BOW Sports Capital - Game Logic
 * Interactive sports team management game teaching economic decision-making
 *
 * DYNAMIC SCENARIO SYSTEM:
 * After each choice, the next scenario is selected based on the player's
 * choice type (accelerate/smooth/rebuild). This means if you traded LeBron,
 * the next scenario won't assume he's still on the team.
 */

class SportsCapitalGame {
    constructor() {
        // Game state
        this.currentTeamIndex = 0;
        this.currentScenarioLevel = 0; // 0=opening, 1=level2, 2=level3
        this.totalScore = 0;
        this.maxPossibleScore = 0;
        this.answers = [];
        this.gameStarted = false;
        this.gameComplete = false;

        // Track the last choice type per team for dynamic branching
        this.lastChoiceType = null;

        // DOM elements (will be cached on init)
        this.elements = {};

        // Bind methods
        this.init = this.init.bind(this);
        this.startGame = this.startGame.bind(this);
        this.loadTeam = this.loadTeam.bind(this);
        this.loadScenario = this.loadScenario.bind(this);
        this.selectChoice = this.selectChoice.bind(this);
        this.nextScenario = this.nextScenario.bind(this);
        this.showResults = this.showResults.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    /**
     * Initialize the game
     */
    init() {
        this.cacheElements();
        this.bindEvents();
        this.showScreen('welcome');
        console.log('BOW Sports Capital Game initialized');
    }

    /**
     * Cache DOM elements for performance
     */
    cacheElements() {
        this.elements = {
            // Screens
            welcomeScreen: document.getElementById('welcome-screen'),
            gameScreen: document.getElementById('game-screen'),
            resultsScreen: document.getElementById('results-screen'),
            feedbackScreen: document.getElementById('feedback-screen'),

            // Welcome screen
            startButton: document.getElementById('start-game'),

            // Game screen - Team info
            teamLogo: document.getElementById('team-logo'),
            teamName: document.getElementById('team-name'),
            teamLeague: document.getElementById('team-league'),
            teamSituation: document.getElementById('team-situation'),
            salaryCapDisplay: document.getElementById('salary-cap-display'),

            // Game screen - Progress
            progressBar: document.getElementById('progress-bar'),
            progressText: document.getElementById('progress-text'),
            currentScoreDisplay: document.getElementById('current-score'),

            // Game screen - Scenario
            scenarioTitle: document.getElementById('scenario-title'),
            scenarioContext: document.getElementById('scenario-context'),
            choicesContainer: document.getElementById('choices-container'),

            // Feedback screen
            feedbackTitle: document.getElementById('feedback-title'),
            feedbackType: document.getElementById('feedback-type'),
            feedbackConsequence: document.getElementById('feedback-consequence'),
            feedbackExplanation: document.getElementById('feedback-explanation'),
            feedbackScore: document.getElementById('feedback-score'),
            nextButton: document.getElementById('next-scenario'),

            // Results screen
            finalScore: document.getElementById('final-score'),
            scorePercentage: document.getElementById('score-percentage'),
            efficiencyRating: document.getElementById('efficiency-rating'),
            claimCodeSection: document.getElementById('claim-code-section'),
            claimCode: document.getElementById('claim-code'),
            answersBreakdown: document.getElementById('answers-breakdown'),
            playAgainButton: document.getElementById('play-again'),
            frameworkSummary: document.getElementById('framework-summary')
        };
    }

    /**
     * Bind event listeners
     */
    bindEvents() {
        this.elements.startButton?.addEventListener('click', this.startGame);
        this.elements.nextButton?.addEventListener('click', this.nextScenario);
        this.elements.playAgainButton?.addEventListener('click', this.resetGame);
    }

    /**
     * Show a specific screen, hide others
     */
    showScreen(screenName) {
        const screens = ['welcome', 'game', 'results', 'feedback'];
        screens.forEach(name => {
            const screen = this.elements[`${name}Screen`];
            if (screen) {
                screen.classList.toggle('active', name === screenName);
                screen.classList.toggle('hidden', name !== screenName);
            }
        });
    }

    /**
     * Start the game
     */
    startGame() {
        this.gameStarted = true;
        this.currentTeamIndex = 0;
        this.currentScenarioLevel = 0;
        this.totalScore = 0;
        this.maxPossibleScore = 0;
        this.answers = [];
        this.lastChoiceType = null;

        this.showScreen('game');
        this.loadTeam();
    }

    /**
     * Load current team data and display
     */
    loadTeam() {
        const teamId = TEAM_ORDER[this.currentTeamIndex];
        const team = TEAMS_DATA[teamId];

        if (!team) {
            console.error('Team not found:', teamId);
            return;
        }

        // Reset scenario level and last choice for new team
        this.currentScenarioLevel = 0;
        this.lastChoiceType = null;

        // Apply team theme
        this.applyTeamTheme(team);

        // Update team info display
        this.elements.teamLogo.textContent = team.logo;
        this.elements.teamName.textContent = team.name;
        this.elements.teamLeague.textContent = team.league;
        this.elements.teamSituation.textContent = team.teamSituation;

        // Display salary cap info
        this.updateSalaryCapDisplay(team);

        // Load first scenario for this team
        this.loadScenario();
    }

    /**
     * Apply team color theme
     */
    applyTeamTheme(team) {
        const root = document.documentElement;
        root.style.setProperty('--team-primary', team.colors.primary);
        root.style.setProperty('--team-secondary', team.colors.secondary);
        root.style.setProperty('--team-accent', team.colors.accent);

        // Update body class for team-specific styling
        document.body.className = `team-${team.id}`;
    }

    /**
     * Update salary cap display based on team/league
     */
    updateSalaryCapDisplay(team) {
        let capInfo = '';
        if (team.league === 'NBA') {
            capInfo = `Salary Cap: $${this.formatMoney(team.salaryCap)} | Luxury Tax: $${this.formatMoney(team.luxuryTax)} | Payroll: $${this.formatMoney(team.currentPayroll)}`;
        } else if (team.league === 'MLB') {
            capInfo = `Luxury Tax Threshold: $${this.formatMoney(team.luxuryTax)} | Current Payroll: $${this.formatMoney(team.currentPayroll)}`;
        } else if (team.league === 'NFL') {
            capInfo = `Salary Cap: $${this.formatMoney(team.salaryCap)} | Payroll: $${this.formatMoney(team.currentPayroll)} | Cap Space: $${this.formatMoney(team.capSpace)}`;
        }
        this.elements.salaryCapDisplay.textContent = capInfo;
    }

    /**
     * Format money for display
     */
    formatMoney(amount) {
        if (amount >= 1000000) {
            return (amount / 1000000).toFixed(1) + 'M';
        }
        return amount.toLocaleString();
    }

    /**
     * Get the current scenario based on level and previous choice
     * This is the core of the dynamic branching system
     */
    getCurrentScenario() {
        const teamId = TEAM_ORDER[this.currentTeamIndex];
        const team = TEAMS_DATA[teamId];

        if (this.currentScenarioLevel === 0) {
            // Opening scenario - same for everyone
            return team.scenarios.opening;
        } else if (this.currentScenarioLevel === 1) {
            // Level 2 - based on choice type from opening scenario
            return team.scenarios.level2[this.lastChoiceType];
        } else if (this.currentScenarioLevel === 2) {
            // Level 3 - based on choice type from level 2 scenario
            return team.scenarios.level3[this.lastChoiceType];
        }

        return null;
    }

    /**
     * Load current scenario using dynamic branching
     */
    loadScenario() {
        const scenario = this.getCurrentScenario();

        if (!scenario) {
            // No more scenarios for this team, move to next team
            this.currentTeamIndex++;
            if (this.currentTeamIndex >= TEAM_ORDER.length) {
                this.showResults();
                return;
            }
            this.loadTeam();
            return;
        }

        // Update progress
        this.updateProgress();

        // Display scenario
        this.elements.scenarioTitle.textContent = scenario.title;
        this.elements.scenarioContext.textContent = scenario.context;

        // Clear and populate choices
        this.elements.choicesContainer.innerHTML = '';
        scenario.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.dataset.choiceId = choice.id;
            button.dataset.index = index;

            const letterSpan = document.createElement('span');
            letterSpan.className = 'choice-letter';
            letterSpan.textContent = String.fromCharCode(65 + index); // A, B, C

            const textSpan = document.createElement('span');
            textSpan.className = 'choice-text';
            textSpan.textContent = choice.text;

            button.appendChild(letterSpan);
            button.appendChild(textSpan);
            button.addEventListener('click', () => this.selectChoice(choice, scenario));

            this.elements.choicesContainer.appendChild(button);
        });

        // Add entrance animation
        this.elements.gameScreen.classList.add('scenario-enter');
        setTimeout(() => {
            this.elements.gameScreen.classList.remove('scenario-enter');
        }, 500);
    }

    /**
     * Update progress bar and text
     */
    updateProgress() {
        const totalScenarios = TEAM_ORDER.length * 3; // 3 scenarios per team
        const completedScenarios = (this.currentTeamIndex * 3) + this.currentScenarioLevel;

        const progress = (completedScenarios / totalScenarios) * 100;
        this.elements.progressBar.style.width = `${progress}%`;
        this.elements.progressText.textContent = `Decision ${completedScenarios + 1} of ${totalScenarios}`;

        // Update score display
        this.elements.currentScoreDisplay.textContent = `Score: ${this.totalScore}`;
    }

    /**
     * Handle choice selection
     */
    selectChoice(choice, scenario) {
        // Record answer
        const teamId = TEAM_ORDER[this.currentTeamIndex];
        const team = TEAMS_DATA[teamId];

        this.answers.push({
            team: team.name,
            scenario: scenario.title,
            choice: choice.text,
            type: choice.type,
            score: choice.score,
            maxScore: SCORING.maxPointsPerQuestion
        });

        this.totalScore += choice.score;
        this.maxPossibleScore += SCORING.maxPointsPerQuestion;

        // Store choice type for dynamic branching
        this.lastChoiceType = choice.type;

        // Show feedback
        this.showFeedback(choice, scenario);
    }

    /**
     * Show feedback screen after choice
     */
    showFeedback(choice, scenario) {
        // Determine feedback style based on score
        let feedbackClass = '';
        let feedbackTitle = '';

        if (choice.score === 5) {
            feedbackClass = 'excellent';
            feedbackTitle = 'Excellent Decision!';
        } else if (choice.score === 4) {
            feedbackClass = 'good';
            feedbackTitle = 'Good Choice!';
        } else if (choice.score === 3) {
            feedbackClass = 'okay';
            feedbackTitle = 'Decent Move';
        } else if (choice.score === 2) {
            feedbackClass = 'poor';
            feedbackTitle = 'Risky Decision';
        } else {
            feedbackClass = 'bad';
            feedbackTitle = 'Not Ideal';
        }

        // Update feedback display
        this.elements.feedbackScreen.className = `screen ${feedbackClass}`;
        this.elements.feedbackTitle.textContent = feedbackTitle;

        // Show choice type (Accelerate/Smooth/Rebuild)
        const typeDisplay = choice.type.charAt(0).toUpperCase() + choice.type.slice(1);
        this.elements.feedbackType.textContent = `Strategy: ${typeDisplay}`;
        this.elements.feedbackType.className = `feedback-type type-${choice.type}`;

        this.elements.feedbackConsequence.textContent = choice.consequence;
        this.elements.feedbackExplanation.textContent = scenario.explanation;
        this.elements.feedbackScore.textContent = `+${choice.score} points`;
        this.elements.feedbackScore.className = `feedback-score score-${choice.score}`;

        this.showScreen('feedback');

        // Add celebration animation for good choices
        if (choice.score >= 4) {
            this.celebrateGoodChoice();
        }
    }

    /**
     * Celebration animation for good choices
     */
    celebrateGoodChoice() {
        const celebration = document.createElement('div');
        celebration.className = 'celebration';
        celebration.innerHTML = '\u{1F389}';
        document.body.appendChild(celebration);

        setTimeout(() => {
            celebration.remove();
        }, 2000);
    }

    /**
     * Move to next scenario using dynamic branching
     */
    nextScenario() {
        this.currentScenarioLevel++;

        if (this.currentScenarioLevel >= 3) {
            // All 3 scenarios done for this team, move to next
            this.currentTeamIndex++;
            this.currentScenarioLevel = 0;
            this.lastChoiceType = null;

            if (this.currentTeamIndex >= TEAM_ORDER.length) {
                this.showResults();
                return;
            }
            this.showScreen('game');
            this.loadTeam();
        } else {
            this.showScreen('game');
            this.loadScenario();
        }
    }

    /**
     * Show final results screen
     */
    showResults() {
        this.gameComplete = true;

        const percentage = Math.round((this.totalScore / this.maxPossibleScore) * 100);

        // Update score display
        this.elements.finalScore.textContent = `${this.totalScore} / ${this.maxPossibleScore}`;
        this.elements.scorePercentage.textContent = `${percentage}%`;

        // Determine efficiency rating
        let rating = '';
        let ratingClass = '';

        if (percentage >= 90) {
            rating = 'Hall of Fame GM';
            ratingClass = 'rating-hof';
        } else if (percentage >= 80) {
            rating = 'Elite GM';
            ratingClass = 'rating-elite';
        } else if (percentage >= 70) {
            rating = 'Solid GM';
            ratingClass = 'rating-solid';
        } else if (percentage >= 60) {
            rating = 'Developing GM';
            ratingClass = 'rating-developing';
        } else {
            rating = 'Rookie GM';
            ratingClass = 'rating-rookie';
        }

        this.elements.efficiencyRating.textContent = rating;
        this.elements.efficiencyRating.className = `efficiency-rating ${ratingClass}`;

        // Check if claim code should be unlocked
        if (this.totalScore >= SCORING.unlockThreshold) {
            this.elements.claimCodeSection.classList.remove('hidden');
            // Pick a random static claim code from the pool
            const randomCode = CLAIM_CODES[Math.floor(Math.random() * CLAIM_CODES.length)];
            this.elements.claimCode.textContent = randomCode;
            this.showUnlockCelebration();
        } else {
            this.elements.claimCodeSection.classList.add('hidden');
        }

        // Build answers breakdown
        this.buildAnswersBreakdown();

        // Build framework summary
        this.buildFrameworkSummary();

        this.showScreen('results');
    }

    /**
     * Show celebration for unlocking claim code
     */
    showUnlockCelebration() {
        const container = document.createElement('div');
        container.className = 'unlock-celebration';

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.backgroundColor = ['#E31837', '#FFB81C', '#552583', '#FDB927', '#BD3039', '#0C2340'][Math.floor(Math.random() * 6)];
            container.appendChild(confetti);
        }

        document.body.appendChild(container);

        setTimeout(() => {
            container.remove();
        }, 5000);
    }

    /**
     * Build the answers breakdown section
     */
    buildAnswersBreakdown() {
        this.elements.answersBreakdown.innerHTML = '';

        this.answers.forEach((answer, index) => {
            const item = document.createElement('div');
            item.className = `breakdown-item score-${answer.score}`;

            item.innerHTML = `
                <div class="breakdown-header">
                    <span class="breakdown-number">${index + 1}</span>
                    <span class="breakdown-team">${answer.team}</span>
                    <span class="breakdown-score">${answer.score}/${answer.maxScore}</span>
                </div>
                <div class="breakdown-scenario">${answer.scenario}</div>
                <div class="breakdown-choice">${answer.choice}</div>
                <div class="breakdown-type type-${answer.type}">${answer.type.toUpperCase()}</div>
            `;

            this.elements.answersBreakdown.appendChild(item);
        });
    }

    /**
     * Build the framework summary section
     */
    buildFrameworkSummary() {
        this.elements.frameworkSummary.innerHTML = '';

        // Count strategy usage
        const strategyCounts = { accelerate: 0, smooth: 0, rebuild: 0 };
        this.answers.forEach(answer => {
            strategyCounts[answer.type]++;
        });

        // Build summary for each strategy
        Object.keys(FRAMEWORK_SUMMARY).forEach(key => {
            const framework = FRAMEWORK_SUMMARY[key];
            const count = strategyCounts[key];

            const card = document.createElement('div');
            card.className = `framework-card type-${key}`;

            card.innerHTML = `
                <h4>${framework.name}</h4>
                <p class="framework-description">${framework.description}</p>
                <p class="framework-when"><strong>When to use:</strong> ${framework.when}</p>
                <p class="framework-risk"><strong>Risk:</strong> ${framework.risk}</p>
                <p class="framework-count">You chose this ${count} time${count !== 1 ? 's' : ''}</p>
            `;

            this.elements.frameworkSummary.appendChild(card);
        });
    }

    /**
     * Reset game to start over
     */
    resetGame() {
        this.currentTeamIndex = 0;
        this.currentScenarioLevel = 0;
        this.totalScore = 0;
        this.maxPossibleScore = 0;
        this.answers = [];
        this.gameStarted = false;
        this.gameComplete = false;
        this.lastChoiceType = null;

        // Reset theme
        document.body.className = '';
        document.documentElement.style.setProperty('--team-primary', '#1a1a2e');
        document.documentElement.style.setProperty('--team-secondary', '#16213e');
        document.documentElement.style.setProperty('--team-accent', '#e94560');

        this.showScreen('welcome');
    }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.game = new SportsCapitalGame();
    window.game.init();
});
