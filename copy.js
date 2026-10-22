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
  hero_lead: `Anyone on the team can spot a colleague for something specific they did and what it helped make possible. AI checks the spot is specific and tags it to a company value. It never writes the praise. Everything on this page is a real output from the build made for this task, run on fictional test data.`,

  /* The five rhythm steps: [short label, title, description, status] */
  rhythm_title: `The Rhythm`,
  rhythm: [
    [`Any day`, `A spot`, `Anyone can spot a colleague in about 30 seconds, in Slack or WhatsApp, so recognition happens when the work does and not at the end of the quarter.`, `Built`],
    [`Weekly`, `The Rep Count`, `A weekly card of highlights, chosen automatically by simple fairness rules, with every pick logged. Every spot also goes straight to the person it is about, so the card celebrates a selection and nobody depends on it to be seen.`, `Built`],
    [`Monday`, `Varun's Monday Two`, `Two spots a week reach the CEO, so he can respond to specific work in about five minutes. The whole team also gets the week's Focus Value.`, `Designed`],
    [`Quarterly`, `Your Progress Report`, `Each person securely and privately receives every spot they were given, grouped by value, with no totals and no rankings.`, `Built`],
    [`Yearly`, `The Good Form Book`, `One company Book, with a copy for everyone. It has one page per person, and every page holds the same number of spots, two (assumption), so everyone is represented equally. The two are chosen automatically from the spots that person received, from different parts of the year where possible, with ties broken at random. A recipient can opt a spot out. A check at month 10 finds anyone with fewer than two, and the team has two months to spot them, truthfully. Copies are handed out at the company anniversary.`, `Designed`]
  ],

  routes_title: `Choose Your Route`,
  routes: [
    [`2 minutes`, `Try it`, `Pick an example and watch what Form Check says.`, `spot`, `Open Spot Check`],
    [`10 minutes`, `Trust it`, `See the results, what changed along the way and what is not claimed.`, `proof`, `Open the Proof Sheet`],
    [`30 minutes`, `Check it`, `See how it is built and tested. The Workings Pack that came with this page holds every assumption, source, prompt and test.`, `build`, `Open How It Is Built`]
  ],

  /* ---------- Spot tab ---------- */
  spot_title: `Spot Check`,
  spot_sub: `These are real results, recorded on 21 October 2026 from the build (prompt v2, Claude Haiku 5.5). Pick an example to see what Form Check says. The team is fictional.`,
  share_label: `Share my name with the recipient`,
  share_on: `Name shown on the spot. Untick it to see what the recipient sees instead. The Founder's Associate can always see the real giver, so anything inappropriate can be dealt with.`,
  share_off: `The recipient will see this as from A teammate. The Founder's Associate can still see the real giver, for moderation only.`,

  wa_title: `Slack Or WhatsApp`,
  wa_sub: `Same spot, same rules, same Form Check, different door. A lot of the team will live in WhatsApp, and it is where this whole challenge began, with a message from the CEO on a Sunday evening.`,
  wa_status: `Status: tested end to end on a real phone through Twilio's WhatsApp sandbox. The message arrived, was checked by Form Check and was saved. The replies shown here are what the workflow generated. Twilio's free trial cannot deliver replies back, so a live two-way setup needs a paid WhatsApp Business account.`,
  wa_notes: [
    `To spot someone, send: spot Olu: what they did and what it made possible.`,
    `To send one anonymously, send: spot anon Olu: ...`,
    `Same checks as Slack. Vague spots get one friendly question and flagged spots go to a person.`
  ],
  wa_live_title: `What going live on WhatsApp Business would involve`,
  wa_live: [
    [`Setup`, `A business phone number that is not already on WhatsApp, a verified Meta Business account, a display name, and message templates for anything the system sends first. One provider's guide says most businesses are verified within about 14 days when their documents match the legal record. Allow two weeks and start in week 1. Slack covers the gap.`],
    [`Cost`, `Meta charges per delivered message (since 1 July 2025), at rates that vary by country and message type, published in a rate card in GBP. Meta's page lists no platform fee for its own Cloud API, and each business number gets 1,000 free service messages a month. Good Form's replies to spots are service messages, and the Monday Two is one template message a week, so about 52 a year. Even at an assumed 10 pence each that is about 5 pounds a year. The real rate needs reading from Meta's rate card.`],
    [`Effort`, `About a day of work to connect the existing workflows to the Cloud API once the account is approved, plus a person to own the account. Assumption, not yet tested.`]
  ],

  /* ---------- The Week tab ---------- */
  week_title: `What Happens After A Spot`,
  week_sub: `A saved spot goes straight to the person it is about. It also feeds the weekly Rep Count and a simple coverage check, so nobody goes unseen.`,

  rep_label: `The weekly Rep Count`,
  rep_text: `A card in the style of the mirror's post-workout summary. It features a handful of spots, not every person. At 100 people that is about six to eight spots a week (assumption). The praise is always the giver's exact words, and a spot sent anonymously stays anonymous. This card was drafted by the Rep Count workflow from the fictional test spots.`,
  rep_pick_title: `How the Rep Count is chosen`,
  rep_pick: [
    [`The pool`, `Last week's saved spots that scored 2 out of 2 on specificity, were not held for review, and whose recipient has not opted out.`],
    [`Fair rotation`, `People featured least often come first, across every stage. Then whoever was featured longest ago. Ties are broken at random so nobody is favoured. Nobody is picked twice in a row, and each spot is used once.`],
    [`Spread`, `No more than one spot per team, a mix of Office and Remote colleagues, and at least one Ground Crew or Hard Rep spot every week.`],
    [`Focus Value`, `At least one spot shows the week's Focus Value.`],
    [`The pick is automatic`, `The workflow ranks the pool by these rules, fills the week's slots and drafts the card. No person chooses who appears, but a person reads every line before it posts. Every pick is logged with the rule that selected it, so anyone can audit it. The only AI in the card is a short intro line. The praise is always the giver's own words.`]
  ],
  rep_why: `The Rep Count is a weekly highlight, so it does not try to be equal. Equal is exact in the Good Form Book instead, where every person gets one page with the same number of spots. Meanwhile every spot is delivered privately to the person it is about, and the Progress Report collects them each quarter. At about seven features a week, a team of 100 would feature each person roughly three to four times a year (assumption).`,

  focus_label: `The Focus Value of the week`,
  focus_text: `Every Monday morning an automatic message goes to the whole team: this week's Focus Value, what it looks like in practice, and one real spot that shows it. The five values rotate, so each one gets a week in turn, and the Rep Count closes with a strip showing what that value drew. No AI is needed, only a schedule.`,
  focus_status: `Designed`,

  cov_label: `The coverage check: who has been seen?`,
  cov_text: `It counts how many people have been named in a spot in the last 14 days, split by team and by Office and Remote. The goal is for recognition to reach everyone, not only the loudest or the people closest to the founder.`,
  cov_ai: `AI is not used here, by design. Coverage has to be exact and easy to audit, and a count is something plain code does perfectly. Leaving AI out also means nobody has to wonder whether a model has misjudged who has been seen.`,
  nudge_title: `The manager nudge`,
  nudge_text: `When no spots have arrived for someone in 14 days, their manager gets a private message. The purpose is simple: nobody gets left out. The manager sees only who has not been spotted and never what any spot says, and the person is never told a nudge was sent.`,
  nudge_steps_title: `What the manager does next`,
  nudge_steps: [
    [`Day 15`, `The nudge arrives. The manager thinks about what that person did lately and who relied on them. They spot the person themselves or ask a colleague who worked with them. A spot has to be true, so nobody is asked to invent one.`],
    [`Day 22`, `If nothing has arrived, a reminder comes with a prompt for work that is easy to miss: who is relying on this person without ever seeing it?`],
    [`Day 29`, `The Founder's Associate has a short conversation with the manager, not the person. Is something getting in the way of recognition reaching them, such as being new, remote or working behind the scenes? The counts go into the monthly review.`]
  ],
  nudge_status: `Nudge text Built, sending Designed`,

  /* ---------- Monday Two tab ---------- */
  monday_title: `Varun's Monday Two`,
  monday_sub: `Five minutes a week. Two real spots, and one small thing to do about them. A CEO's attention carries real weight with a team, so it is spent on specific work and not on admin.`,
  monday_pick_title: `How the two are chosen`,
  monday_pick: [
    `The pool is last week's saved spots that scored 2 out of 2 on specificity, were not sent anonymously, and whose recipient has not opted out of being featured. Anonymous spots are never used, so nobody can be traced.`,
    `Anyone who was a Monday Two in the last four weeks is left out, and so are two people from the same team in the same week.`,
    `One spot shows the week's Focus Value. The other is Ground Crew or Hard Rep work, or comes from a different team or a remote colleague.`,
    `The rest is ranked with the same fairness order as the Rep Count (people not yet featured first, ties broken at random) and the top two that fit every rule are chosen automatically. No person picks them.`,
    `The message goes out automatically on Monday. Every pick is logged with the rule that chose it, so anyone can check it was fair.`
  ],
  monday_do_title: `What Varun does with them`,
  monday_do: [
    `Read both and pick the one he has a connection to or can relate to.`,
    `Reply to that person the same day, in his own words, naming the specific thing they did. One or two lines in the thread, or a two minute chat.`,
    `Keep it about the work. No rewards, no comparing, nothing that sounds like a performance review.`,
    `Optional: say it out loud at the Monday catch-up so the rest of the team hears it.`
  ],
  delivery_title: `How the Monday Two reaches him`,
  delivery_sub: `Three options. All of them are built on the same scheduled workflow, so the choice is only about where the message lands.`,
  delivery: [
    [`Slack message from Good Form`, `Recommended to start`, `A scheduled workflow sends the two spots as a private Slack message at 8:30 every Monday. Automatic, no extra cost, and ready in week 1.`],
    [`WhatsApp`, `If he prefers it`, `The same message through the WhatsApp Business Platform. It needs the setup described under Slack Or WhatsApp, so allow up to two weeks for approval (assumption). One template message a week is about 52 a year, a few pounds at most.`],
    [`Email`, `Fallback`, `Works anywhere with no approvals, and is the easiest message to miss on a busy Monday.`]
  ],
  delivery_note: `Suggested path: start on Slack in week 1, apply for WhatsApp at the same time, and move across once it is approved if he prefers it. He replies straight to the person, so there is nothing for him to log. The Founder's Associate can see whether each Monday Two got a reply.`,
  monday_status: `Designed`,

  /* ---------- Fits In tab ---------- */
  rituals_title: `Plugs Into What MAGIC Already Does`,
  rituals_sub: `Good Form is not a new thing to remember. It hooks into rituals the team already has. Details marked as assumptions need checking on day one.`,
  rituals: [
    [`Lunch Club`, `Weekly`, `Lunch Club carries on exactly as it is. The weekly Rep Count simply gives people real wins to talk about when they sit down together.`, `Designed`],
    [`Quarterly off-sites`, `Quarterly`, `This is different from the weekly card because it is live and it crosses teams. Everyone gets their Progress Report the week before. The off-site then opens with a Ground Crew Round: one spot per team, each about work done by someone from another team, chosen from the quarter's Ground Crew and Hard Rep spots that crossed team lines. The Founder's Associate asks each recipient beforehand, and the giver reads their own spot aloud if they want to.`, `Designed`],
    [`Company milestones`, `As they happen`, `When a milestone lands, such as a launch, a funding round or a customer review score, the Team PB step matches the spots from the weeks before it and builds a card. The milestone sits at the top and the chain of spots behind it sits underneath, in people's own words, crediting the work nobody saw. A person can paste in customer evidence, such as a five-star review, and it is matched to the spots that came before it.`, `Built, needs milestone data to test`],
    [`New joiners`, `First fortnight`, `Assumption: every new joiner has a buddy. If not, their manager names one. On day 10 Good Form reminds the buddy to spot the new joiner for something from their first fortnight, so their first experience of the company is being noticed. If there is still no spot by day 14, the coverage nudge goes to their manager.`, `Designed`],
    [`Run Club, socials and the coffee machine`, `In person`, `Spots happen away from screens too. Something said at the coffee machine or on a run takes 30 seconds to type, and the Rep Count makes sure it gets repeated.`, `Designed`]
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
    `Ranking and comparison language is now held for a person. A red team run found it was only being sent back for a follow-up.`
  ],
  notclaim_title: `What is not claimed`,
  notclaim: [
    `The AI picks the same value as the hand key only 11 to 39% of the time (44 to 56% within its top two). In 9 of its 19 misses on the held-out spots it chose Strong analytical judgement, so it leans that way when a spot mentions numbers. This is why it only suggests a value and the giver confirms it.`,
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
    `Below 0.7 confidence the AI asks the giver to confirm the value with one tap. Rude, sarcastic or ranking language goes to a person.`,
    `Anonymous is an option and named is the default. The Founder's Associate can see the real giver, for moderation only.`,
    `No cash, prizes, points or leaderboards. Recognition data never becomes performance data.`,
    `The company values sit in one settings table, so changing them means editing five rows.`
  ],
  test_title: `Kept honest: regular testing and breaking`,
  test_sub: `A recognition system that checks itself is only trustworthy if somebody keeps trying to break it. Pass marks are assumptions to adjust.`,
  test: [
    [`After any change`, `The 30 keyed spots and the red team set are rerun. If anything gets worse, the change is rolled back.`],
    [`Every week`, `The Founder's Associate reads every held spot and a sample of ten saved ones. Target: zero unsafe saves.`],
    [`Every month`, `A red team run of 16 fixed spots plus new nasty ones from real near-misses.`],
    [`Every quarter`, `A name-swap bias check with a control run, and a fresh sample of values scored by a person.`],
    [`When the model changes`, `Everything above is rerun before switching. If it is not as good, stay on the old model.`]
  ],
  redteam_title: `The first red team run`,
  redteam_text: `Sixteen awkward spots: spam, a joke, a backhanded compliment, an appearance comment, injection in French, a request to print the system prompt, and text built to break the output. Fifteen behaved as expected. One gap was found (ranking people was not held for a person) and fixed.`,
  status_title: `Built or designed?`,
  status_sub: `Built means it runs in the prototype. Designed means it is planned and not built yet.`,
  status: [
    [`Spot in Slack, named or anonymous`, `Built`, `Tested live, with buttons for sharing the name and confirming the value`],
    [`Spot in WhatsApp`, `Built`, `Inbound tested from a real phone. Replies need a paid account`],
    [`Form Check`, `Built`, `Specificity, value, type, safety flags`],
    [`Rep Count draft`, `Built`, `AI writes the intro only. The praise is pasted in by code`],
    [`Rep Count selection rules`, `Designed`, `Automatic fair rotation and spread, described above`],
    [`Coverage check`, `Built`, `Plain counting, no AI`],
    [`Manager nudge`, `Built`, `Text built. Sending and the follow-up steps are designed`],
    [`Monday Two and Focus Value message`, `Designed`, `A scheduled workflow`],
    [`Progress Report, Day-30 report, Team PB`, `Built`, `Run on fictional data. Team PB needs milestone data to test`],
    [`The Good Form Book`, `Designed`, `One company Book, printed once a year`]
  ],
  how_note: `All data here is fictional test data. The assumptions, sources, prompts and tests behind this page are in the Workings Pack that came with it.`,

  footer: `Prototype for evaluation. Built by Liv with Claude for the MAGIC AI Founder's Associate task, October 2026. Not an official MAGIC page and it does not use MAGIC's logo. Photos are free-licence stock from Pexels and Unsplash contributors.`
};
