/* GOOD FORM WEBSITE COPY
   HOW TO EDIT: change only the words between the backtick marks ` `.
   Do not delete the backticks, the commas, the square brackets or the names on the left.
   Do not use a backtick inside your words. Apostrophes and quote marks are fine.
   Save the file and refresh the page to see the change.
   Status labels: use Built or Designed. Built means it runs in the prototype. Designed means it is planned but not built yet. */

const COPY = {

  byline: `A prototype for MAGIC AI. This is not an official MAGIC page.`,

  hero_eyebrow: `Working prototype`,
  hero_title: `Spot good work every day. Celebrate it every week. Connect it to results every month.`,
  hero_lead: `Anyone on the team can spot a colleague for something specific they did and what it helped make possible. AI checks the spot is specific and tags it to a company value. It never writes the praise! Everything on this page is a real output from the build made for this task, run on fictional test data.`,

  /* The five rhythm steps: [short label, title, description, status] */
  rhythm_title: `The Rhythm`,
  rhythm: [
    [`Any day`, `A spot`, `Anyone can spot a colleague in about 30 seconds, in Slack or WhatsApp, so recognition happens when the work does and not at the end of the quarter! Every Thursday, anyone who has not yet spotted anyone that week gets a friendly automatic reminder.`, `Built`],
    [`Weekly`, `The Rep Count`, `A weekly card of highlights, chosen automatically by simple fairness rules, with every pick logged. Every spot also goes straight to the person it is about, who is asked privately whether they would like it kept between us or shared with the team, so the card celebrates a selection and nobody depends on it to be seen. Every Monday morning the whole team is also notified in Slack of that week's Focus Value! The Founder's Associate (assumption) needs about 30 minutes a week for all of this in month one, then 20 to 25.`, `Built`],
    [`Monday`, `Varun's Monday Two`, `Two spots a week reach the CEO, so he can respond to specific work in about five minutes! He gets a Thursday reminder if he has not replied yet, and a monthly report of who he has acknowledged and who is still waiting.`, `Built`],
    [`Quarterly`, `Your Progress Report`, `Every quarter, each person securely and privately receives every spot they were given, grouped by value, with no totals and no rankings!`, `Built`],
    [`Yearly`, `The Good Form Book`, `One company Book, with a copy for everyone. It has one page per person, and every page holds the same number of spots, so everyone is represented equally. Four spots per person (assumption), one from each quarter. They are chosen automatically from the spots that person received and said yes to sharing, with ties broken at random. A recipient can opt a spot out. A check at month 10 finds anyone with fewer than four, and the team has two months to spot them, truthfully. Copies are handed out at the company anniversary!`, `Designed`]
  ],

  routes_title: `Choose Your Route`,
  routes: [
    [`2 minutes`, `Try it`, `Pick an example and watch what Form Check says!`, `spot`, `Open Spot Check`],
    [`10 minutes`, `Trust it`, `See the results, what changed along the way and what is not claimed!`, `proof`, `Open the Proof Sheet`],
    [`30 minutes`, `Check it`, `See how it is built and tested. The Workings Pack that came with this page holds every assumption, source, prompt and test.`, `build`, `Open How It Is Built`]
  ],

  /* ---------- Spot tab ---------- */
  spot_title: `Spot Check`,
  spot_sub: `These are real results, recorded on 21 October 2026 from the build (prompt v2, Claude Haiku 5.5). Pick an example to see what Form Check says. The team is fictional.`,
  share_label: `Share my name with the recipient`,
  share_on: `Name shown on the spot. Untick it to see what the recipient sees instead. The Founder's Associate (assumption) can always see the real giver, so they can deal with anything inappropriate straight away.`,
  share_off: `The recipient will see this as from A teammate. The Founder's Associate (assumption) can still see the real giver, for moderation only.`,

  wa_title: `Slack Or WhatsApp`,
  wa_sub: `Same spot, same rules, same Form Check, different door! A lot of the team will live in WhatsApp, and it is where this whole challenge began, with a message from the CEO on a Sunday evening.`,
  wa_status: `Status: tested end to end on a real phone through Twilio's WhatsApp sandbox. The message arrived, was checked by Form Check and was saved. The replies shown here are what the workflow generated. Twilio's free trial cannot deliver replies back, so a live two-way setup needs a paid WhatsApp Business account.`,
  wa_notes: [
    `To spot someone, send: spot Olu: what they did and what it made possible.`,
    `To send one anonymously, send: spot anon Olu: ...`,
    `Same checks as Slack. Vague spots get one friendly question and flagged spots go to the Founder's Associate.`
  ],
  wa_live_title: `What going live on WhatsApp Business would involve`,
  wa_live: [
    [`Setup`, `A business phone number that is not already on WhatsApp, a verified Meta Business account, a display name, and message templates for anything the system sends first. One provider's guide says most businesses are verified within about 14 days when their documents match the legal record. Allow two weeks and start in week 1. Slack covers the gap.`],
    [`Cost`, `Meta charges per delivered message (since 1 July 2025), at rates that vary by country and message type, published in a rate card in GBP. Meta's page lists no platform fee for its own Cloud API, and each business number gets 1,000 free service messages a month. Good Form's replies to spots are service messages, and the Monday Two is one template message a week, so about 52 a year. Even at an assumed 10 pence each that is about 5 pounds a year. The real rate needs reading from Meta's rate card.`],
    [`Effort`, `About a day of work to connect the existing workflows to the Cloud API once the account is approved, plus an owner for the account. Assumption, not yet tested.`]
  ],

  /* ---------- The Week tab ---------- */
  week_title: `What Happens After A Spot`,
  week_sub: `A saved spot goes straight to its recipient. It also feeds the weekly Rep Count and a simple coverage check, so nobody goes unseen!`,

  rep_label: `The weekly Rep Count`,
  rep_text: `A card in the style of the MAGIC mirror's post-workout summary. It features a handful of spots, not every person. At 100 people that is about six to eight spots a week (assumption). The praise is always the giver's exact words, and a spot sent anonymously stays anonymous. This card was drafted by the Rep Count workflow from the fictional test spots.`,
  rep_pick_title: `How the Rep Count is chosen`,
  rep_pick: [
    [`The pool`, `Last week's saved spots that scored 2 out of 2 on specificity, were not held for review, and whose recipient has said yes to it being shared. Spots are private by default. Each recipient is asked when the spot arrives: keep this between us, or happy for it to be shared with the team? (Built and tested in Slack.)`],
    [`Fair rotation`, `Whoever has been featured least often comes first, counting every place they have appeared: the Rep Count, the Monday Two, and company milestone cards. If two people are level, whoever appeared longest ago goes first. Any remaining ties are broken at random, so nobody is favoured. Nobody appears two weeks in a row, and each spot is used only once.`],
    [`Spread`, `No more than one spot per team, a mix of Office and Remote colleagues, and at least one Ground Crew or Hard Rep spot every week.`],
    [`Focus Value`, `At least one spot shows the week's Focus Value.`],
    [`The pick is automatic`, `The workflow ranks the pool by these rules, fills the week's slots and drafts the card. No one chooses who appears, but the Founder's Associate reads every line before it posts. Every pick is logged with the rule that selected it, so anyone can audit the choice. The only AI in the card is a short intro line, drafted fresh each week. To keep it from repeating, the prompt is shown the last six intros and told to avoid them (built, and tested over two runs). The praise is always the giver's own words.`]
  ],
  rep_why: `The Rep Count is a weekly highlight, so it does not try to be equal. Equal is exact in the Good Form Book instead, where every person gets one page with the same number of spots. Meanwhile every spot is delivered privately to the person it is about, and the Progress Report collects them each quarter. At about seven features a week, a team of 100 would feature each person roughly three to four times a year (assumption).`,

  values_title: `How each value is built in`,
  values_sub: `Good Form runs on the five behaviours in the Founder's Associate job posting. Replacing the five rows in the Values Table swaps in the real values, and everything follows the new names. The AI only suggests the value tag: it matched the giver's own tag exactly 39% of the time and within the top two 56% of the time, so a count by value is a guide and never a score.`,
  values_map: [["High agency", "Sees a problem, forms a view and moves it forward without waiting for perfect instructions.", "Spots about someone who acted first are tagged to this value. It takes its turn as the weekly Focus Value, and Form Check asks what changed because of the action.", "Share of saved spots tagged to it, in the Day-30 report"], ["Exceptional operator", "Brings structure to ambiguity, manages many threads and finishes what they start.", "Spots about work others never see, such as a process rebuilt or a loose end closed, are often tagged to this value. The Ground Crew lens on the How-To-Spot card is written for this.", "Share of saved spots tagged to it, in the Day-30 report"], ["Strong analytical judgement", "Is comfortable with metrics, financial logic and trade-offs, and makes calls with evidence.", "Spots that name a decision made with data are tagged to this value. The Proof Sheet holds Good Form to the same standard by marking every number measured, simulated or assumption.", "Share of saved spots tagged to it, in the Day-30 report"], ["Customer instinct", "Cares what customers actually experience and turns qualitative feedback into action.", "A Team PB can link a customer result, such as a record review score, back to the spots behind that result. It also takes its turn as the Focus Value.", "Share of saved spots tagged to it, in the Day-30 report"], ["Low ego, high standards", "Happily does the unglamorous detail while thinking at company level.", "Private by default means quiet work is recognised without being put on show. The quarterly off-site Ground Crew Round recognises work done for another team.", "Share of saved spots tagged to it, in the Day-30 report"]],
  focus_label: `The Focus Value of the week`,
  focus_text: `Every Monday morning an automatic message goes to the whole team: this week's Focus Value, what it looks like in practice, and one real spot that shows the value in action. The five values rotate, so each one gets a week in turn, and the Rep Count closes with a strip showing what that value drew. No AI is needed, only a schedule. The message also ends with a link: know about a company win? Tell us here. One rule sits on top of the rotation: if one value has drawn under 15 percent of the saved spots in the last 28 days (and there are at least 10 spots to judge by), it gets the spotlight that week, and the message says why. If the CEO names a value for the week, the Founder's Associate pins it through a short web form (a dropdown, plus a No pin choice to clear it) and it wins over everything else. The 15 percent and 10 spot thresholds are assumptions.`,
  focus_status: `Built`,

  cov_label: `The coverage check: who has been seen?`,
  cov_text: `It counts how many people have been named in a spot in the last 14 days, split by team and by Office and Remote. The goal is for recognition to reach everyone, not only the loudest or the people closest to the founder. It also checks that at least 30% of saved spots over the last 28 days cross a team line (assumption). If that falls below the floor, the Thursday nudge asks people to look beyond their own team, so recognition does not stay inside the same small groups!`,
  cov_ai: `AI is not used here, by design. Coverage has to be exact and easy to audit, and a count is something plain code does perfectly. Leaving AI out also means nobody has to wonder whether a model has misjudged who has been seen.`,
  nudge_title: `The manager nudge`,
  nudge_text: `When no spots have arrived for someone in 14 days, their manager gets a private message. The purpose is simple: nobody gets left out! The manager sees only who has not been spotted and never what any spot says, and the person is never told a nudge was sent.`,
  nudge_steps_title: `What the manager does next`,
  nudge_steps: [
    [`Day 15`, `The nudge arrives. The manager thinks about what that person did lately and who relied on them. They spot the person themselves or ask a colleague who worked with them. A spot has to be true, so nobody is asked to invent one.`],
    [`Day 22`, `If nothing has arrived, a reminder comes with a prompt for work that is easy to miss: who depends on this person's unseen work?`],
    [`Day 29`, `The Founder's Associate (assumption) has a short conversation with the manager, not the person. Is something getting in the way of recognition reaching them, such as being new, remote or working behind the scenes? The counts go into the monthly review.`]
  ],
  nudge_status: `Nudge text Built, sending Designed`,

  /* ---------- Monday Two tab ---------- */
  monday_title: `Varun's Monday Two`,
  monday_sub: `Five minutes a week! Two real spots, and a quick way to celebrate the people behind them. We suggest two a week, but this number can scale as headcount grows (assumption). A CEO's attention carries real weight with a team, so it is spent on specific work and not on admin.`,
  monday_pick_title: `How the two are chosen`,
  monday_pick: [
    `The pool is last week's saved spots that scored 2 out of 2 on specificity, were not sent anonymously, and whose recipient has said yes to being featured. Spots are private by default, so nothing is featured until the recipient agrees. The pool starts smaller, which is why the launch email explains the question and the Thursday reminder encourages answers. Anonymous spots are never used, so nobody can be traced.`,
    `Anyone who was a Monday Two in the last four weeks is left out, and so are two people from the same team in the same week.`,
    `One spot shows the week's Focus Value. The other is Ground Crew or Hard Rep work, or comes from a different team or a remote colleague.`,
    `The rest is ranked with the same fairness order as the Rep Count (people not yet featured first, ties broken at random) and the top two that fit every rule are chosen automatically. No person picks them.`,
    `The message goes out automatically on Monday. Every pick is logged with the rule that chose it, so anyone can check it was fair.`
  ],
  monday_do_title: `What Varun does with them`,
  monday_do: [
    `Read both and pick the one he feels closest to.`,
    `Reply to that person the same day, in his own words, naming the specific action and its effect. One or two lines in the thread, or a two minute chat.`,
    `Keep it about the work. No rewards, no comparing, nothing that sounds like a performance review.`,
    `Optional: say it out loud at the Monday catch-up so the rest of the team hears the praise.`,
    `If he has not replied by Thursday, an automatic private reminder nudges him, once.`,
    `Each month he gets a short report: who he has acknowledged, and who has not been featured or acknowledged yet (built, tested on fictional data).`
  ],
  delivery_title: `How the Monday Two reaches him`,
  delivery_sub: `Three options. All of them are built on the same scheduled workflow, so the choice is only about where the message lands.`,
  delivery: [
    [`Slack message from Good Form`, `Recommended to start`, `A scheduled workflow sends the two spots as a private Slack message at 8:30 every Monday. Automatic, no extra cost, and ready in week 1.`],
    [`WhatsApp`, `If he prefers it`, `The same message through the WhatsApp Business Platform. It needs the setup described under Slack Or WhatsApp, so allow up to two weeks for approval (assumption). One template message a week is about 52 a year, a few pounds at most.`],
    [`Email`, `Fallback`, `Works anywhere with no approvals, and is the easiest message to miss on a busy Monday.`]
  ],
  delivery_note: `Suggested path: start on Slack in week 1, apply for WhatsApp at the same time, and move across once it is approved if he prefers WhatsApp. He replies straight to the person, and a reply button on the message logs each reply. That log matters: Good Form takes it into account when choosing the next Monday Two, so the same people are not acknowledged over and over and nobody is missed. The Founder's Associate (assumption) can see whether each Monday Two got a reply.`,
  monday_status: `Built`,

  /* ---------- Fits In tab ---------- */
  rituals_title: `Plugs Into What MAGIC Already Does`,
  rituals_sub: `Good Form is not a new thing to remember! It hooks into the rituals the team already has in place. Details marked as assumptions need checking on day one.`,
  rituals_adds: [
    [`Every week`, `The whole team`, `The Rep Count lands that week, so lunch has real wins worth talking about!`, `lunch`],
    [`Every quarter`, `The whole company, in the room`, `Progress Reports go out the week before, then a Ground Crew Round opens the day!`, `huddle`],
    [`Every quarter`, `The whole company, in the room`, `A live page on the big screen shows which value is quiet, and a milestone is shown as a chain of the spots behind the win!`, `huddle`],
    [`As they happen`, `Whoever the news is about`, `Claude identifies which spots helped contribute to the milestone and code-pastes in their exact words!`, `cheer`],
    [`Days 1 to 14`, `The new joiner and their buddy`, `A day-10 reminder asks the buddy to spot something from the first fortnight!`, `highfive`],
    [`Any time`, `Anyone with a phone`, `Spot it in 30 seconds. The Rep Count repeats it to the whole team!`, `social`]
  ],
  rituals: [
    [`Lunch Club`, `Weekly`, `Weekly, informal, and small. Nothing about Lunch Club changes. The Rep Count simply lands that week, so people sit down with real, specific wins to talk about, and recognition spreads by word of mouth!`, `Designed`],
    [`Quarterly off-sites`, `Quarterly`, `Quarterly, whole company and in the room, so it does a different job from Lunch Club. Everyone gets their Progress Report the week before. The off-site then opens with a Ground Crew Round: one spot per team, each about work done by someone from another team, chosen from the quarter's Ground Crew and Hard Rep spots that crossed team lines. The Founder's Associate (assumption) asks each recipient beforehand. And the giver, if they want to, reads their spot aloud. Lunch Club is a weekly chat about this week's wins. The off-site is a quarterly moment, face to face, for recognising work that crossed teams.`, `Designed`],
    [`Light the Quiet Value and The Chain`, `Quarterly`, `Two low-effort digital ideas for the part of the off-site that only works with everyone in the room. Light the Quiet Value: a live page on the big screen shows the five values as lights. Every spot given in the room adds a dot to its value, with no names, so the room sees which value is dim, and spends five minutes giving spots for that value. The Chain: when a company milestone is entered, Team PB identifies the spots that contributed to this milestone. A web page then shows them as a chain, colour-coded by value, in the giver's exact words, with only permitted spots. Both run on data Good Form already holds and need no preparation on the day.`, `Proposed`],
    [`Company milestones`, `As they happen`, `When a milestone lands, such as a launch, a funding round, or a customer review score, anyone on the team can flag it, any time, through a short web form: what happened, when, one optional line of evidence such as a five-star review pasted in as text, and an optional name. Every Friday at 10:00 the Founder's Associate (assumption) gets a nudge with a button to the same form, and the Monday Focus Value message ends with a link to it too, so nobody depends on one person noticing. Nothing is scraped. Good Form then reads the public, specific spots from the weeks before and asks Claude which of them helped lead to the milestone. Claude only picks which spots belong. Code pastes in their exact words, so nothing is rewritten. The card puts the milestone at the top and the chain of spots underneath, crediting the work nobody saw. A spot already shown in a Rep Count is not reposted. Whoever it is about is credited by name with a one-line reference instead. The Founder's Associate reads the card before it goes out.`, `Built, needs real milestone data to test`],
    [`New joiners`, `First fortnight`, `Assumption: every new joiner has a buddy. If not, their manager names one. On day 10 Good Form reminds the buddy to spot the new joiner for something from their first fortnight, so their first experience of the company is being noticed! If there is still no spot by day 14, the coverage nudge goes to their manager.`, `Designed`],
    [`Run Club, socials and the coffee machine`, `In person`, `Spots happen away from screens too. Something said at the coffee machine or on a run takes 30 seconds to type, from a phone, in Slack or WhatsApp, in a sentence or two. No form and no login. The moment passes but the spot does not, and the Rep Count makes sure it gets repeated to the whole team!`, `Designed`]
  ],

  /* ---------- Proof tab ---------- */
  proof_title: `Proof Sheet`,
  proof_sub: `The answer key for 30 test spots was written before any AI saw them, then Form Check was measured against that judgement. Then 50 further spots, never used to tune the prompt, were run once.`,
  stats: [
    [`0`, `unsafe saves across every run. No vague, injected or inappropriate spot was ever saved.`],
    [`96%`, `acceptable routing on the held-out 50 (48 of 50).`],
    [`100%`, `safety flags right in the final prompt (30 of 30 keyed, 50 of 50 held-out).`],
    [`$0.0003`, `to check one spot on the small model, at Anthropic's list price on 21 Oct 2026.`]
  ],
  proof_foot: `**Value scores on the held-out set cover the 36 spots that carry a value (14 of 36 exact, 20 of 36 within the top two). The values were hand-keyed after the run, without seeing the AI's answers. Route and flag expectations for the held-out 50 come from test labels written before the run. *Acceptable counts "ask the giver to confirm the value" as fine when a straight save was expected, because the spot is still saved. This measure was added after seeing the exact numbers.`,
  changed_title: `What changed between v1 and v2`,
  changed: [
    `v1 sent hard reps and quiet behind-the-scenes spots back for a follow-up. Now a lesson learned, or what the work made possible, counts as an effect.`,
    `Sarcasm is now flagged, even when it is wrapped in thanks.`,
    `Values overlap, so the model also gives a runner-up value.`,
    `Ranking and comparison language is now held for the Founder's Associate. A red team run found it was only being sent back for a follow-up question.`
  ],
  notclaim_title: `What is not claimed`,
  notclaim: [
    `The AI picks the same value as the hand key only 11 to 39% of the time (44 to 56% within its top two). In 9 of its 19 misses on the held-out spots it chose "Strong analytical judgement", so it leans that way when a spot mentions numbers. This is why it only suggests a value and the giver makes the final choice.`,
    `Prompt v2 was tuned on the same 30 keyed spots, so those scores are flattered. The held-out 50 is the fair test.`,
    `A name-swap check with a control run changed the value tag on 9 of 30 spots when names were swapped, against 0 of 30 when the same text was run twice. Safety flags never moved. The changes went in no consistent direction, but value tagging is name-sensitive, which is why the giver confirms the value. It is a small sample, so a signal and not a verdict.`,
    `All data is fictional.`
  ],

  /* ---------- Build tab ---------- */
  how_title: `How It Is Built`,
  guard_title: `Guardrails`,
  guard: [
    `AI never writes, rewrites or improves praise. It asks the giver one question, in a trainer's voice.`,
    `Only spots people deliberately submit. No scraping of chats.`,
    `Private by default. A spot is only featured in the Rep Count, the Monday Two, the Good Form Book or Team PB once the person it is about says yes. Until then it stays private to them and still appears in their quarterly Progress Report.`,
    `Below 0.7 confidence the AI asks the giver to confirm the value with one tap. Rude, sarcastic or ranking language goes to the Founder's Associate (assumption) to read first.`,
    `Anonymous is an option and named is the default. The Founder's Associate (assumption) can see the real giver, for moderation only.`,
    `No cash, prizes, points or leaderboards. Recognition data never becomes performance data.`,
    `The five company values used to tag spots live in one settings table. If MAGIC's values change, someone edits those five rows and nothing else in the build changes.`
  ],
  test_title: `Kept honest: regular testing and breaking`,
  test_sub: `Somebody must keep trying to break a recognition system that checks itself, or it cannot be trusted. Pass marks are assumptions to adjust.`,
  test: [
    [`After any change`, `The 30 keyed spots and the red team set are rerun. If anything gets worse, the change is rolled back.`],
    [`Every week`, `The Founder's Associate (assumption) reads every held spot and a sample of ten saved ones. Target: zero unsafe saves. If a held spot is inappropriate, they raise it with the CEO and agree the next step together. The person it was about is not told.`],
    [`Every month`, `A red team run of 16 fixed spots plus new nasty ones from real near-misses.`],
    [`Every quarter`, `A name-swap bias check with a control run, and a fresh sample of values scored by the Founder's Associate (assumption).`],
    [`When the model changes`, `Models get replaced over time. Nothing changes on the day a new one arrives. First the same 30 keyed spots and the red team set are run on it, which takes under an hour (assumption) and costs a few cents. If it does worse on any safety check, Good Form stays on the current model. If it is at least as good, the switch happens on a quiet day, and the old model stays available to switch back to until the first weekly check has passed.`]
  ],
  redteam_title: `The first red team run`,
  redteam_text: `Sixteen awkward spots: spam, a joke, a backhanded compliment, an appearance comment, injection in French, a request to print the system prompt, and text built to break the output. Fifteen behaved as expected. One gap was found (ranking people was not held for the Founder's Associate) and fixed.`,
  status_title: `Built or designed?`,
  status_sub: `Built means it runs in the prototype. Designed means it is planned and not built yet.`,
  status: [
    [`Spot in Slack, named or anonymous`, `Built`, `Tested live, with buttons for sharing the name and confirming the value`],
    [`Spot in WhatsApp`, `Built`, `Inbound tested from a real phone. Replies need a paid account`],
    [`Form Check`, `Built`, `Specificity, value, type, safety flags`],
    [`Rep Count draft`, `Built`, `AI writes the intro only. The praise is pasted in by code`],
    [`Varied Rep Count intro`, `Built`, `Drafted fresh each week. The prompt is shown the last six intros and told to avoid them. Tested over two runs`],
    [`Rep Count selection rules`, `Built`, `Fair rotation and spread, tested over four simulated weeks with zero rule breaks`],
    [`Coverage check`, `Built`, `Plain counting, no AI`],
    [`Cross-team check`, `Built`, `Tested with invented spots below the 30% floor. The Thursday wording switched to ask for cross-team spots`],
    [`Manager nudge`, `Built`, `Text built. Sending and the follow-up steps are designed`],
    [`Thursday reminder to people who have not spotted yet`, `Built`, `Tested live in Slack, with a button that shows how to spot`],
    [`Monday Two message`, `Built`, `Sent to a test user in Slack, with a reply button that logs the reply`],
    [`Monthly report to Varun`, `Built`, `Who he acknowledged and who has not been featured. Dry run on fictional data`],
    [`Focus Value message every Monday`, `Built`, `Sent to a test user in Slack, with one real shared spot. Private spots are never quoted`],
    [`Question to each recipient: private or shared with the team?`, `Built`, `Sent to a test user in Slack when a spot is saved. Both buttons tested. No answer means private`],
    [`Thursday reminder to Varun if he has not replied`, `Built`, `Sent to a test user in Slack, only when no reply is logged that week`],
    [`Quiet value rule for the Monday Focus Value`, `Built`, `Tested on invented spots: it picks the quietest value, says why, and falls back to rotation when there are too few spots`],
    [`Pin form for the Focus Value, and the Quietest Value line in the monthly report`, `Built`, `Tested on 23 October: a pinned value was used, No pin went back to the automatic rule, and the report printed the line`],
    [`Progress Report, Day-30 report, Team PB`, `Built`, `Run on fictional data. Team PB needs milestone data to test`],
    [`The Good Form Book`, `Designed`, `One company Book, printed once a year`]
  ],
  how_note: `All data here is fictional test data. The assumptions, sources, prompts and tests behind this page are in the accompanying Workings Pack. The Founder's Associate runs Good Form in this plan. That is an assumption, and it depends on the CEO's approval.`,

  footer: `Prototype for evaluation. Built by Liv with Claude for the MAGIC AI Founder's Associate task, October 2026. Not an official MAGIC page and it does not use MAGIC's logo. Photos are free-licence stock from Pexels and Unsplash contributors.`
};
