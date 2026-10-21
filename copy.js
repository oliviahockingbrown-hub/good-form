/* GOOD FORM WEBSITE COPY
   HOW TO EDIT: change only the words between the backtick marks ` `.
   Do not delete the backticks, the commas, or the names on the left.
   Do not use a backtick inside your words. Apostrophes and quote marks are fine.
   Save the file and refresh the page to see the change. */

const COPY = {

  byline: `A proposal for MAGIC AI by Liv. This is my own page and not an official MAGIC page.`,

  hero_eyebrow: `Working prototype`,
  hero_title: `Spot good work every day. Celebrate it every week. Connect it to results every month.`,
  hero_lead: `Anyone can spot anyone for something specific they did and what it made possible. AI checks the spot is specific and tags it to a value. It never writes the praise. Everything on this page is a real result from the n8n build I made for this task.`,

  /* The five rhythm buttons: [button label, one-line reason] */
  rhythm_hint: `Tap a rhythm to see why it is there.`,
  rhythm: [
    [`Any day: a spot`, `Any day. A spot takes about 30 seconds in Slack or WhatsApp, so recognition happens when the work does, not at the end of the quarter.`],
    [`Weekly: the Rep Count`, `Weekly. The Rep Count gathers the week's spots into one card, so wins get celebrated together and not buried in a channel.`],
    [`Monday: Varun's Monday Two`, `Monday. Two spots Varun can act on, in five minutes, so he stays close to the team without having to manage anything.`],
    [`Quarterly: Your Progress Report`, `Quarterly. Each person gets all the spots they received, grouped by value, with no totals and no rankings.`],
    [`Yearly: The Good Form Book`, `Yearly. The Good Form Book keeps every spot as a record of the year.`]
  ],

  read_title: `How To Read This`,
  read_sub: `Pick how much time you have. Each path stands on its own.`,
  read: [
    [`2 minutes`, `See it work`, `Tap the examples in Spot Check and watch what Form Check does.`, `#spotcheck`, `Start here`],
    [`10 minutes`, `See why you can trust it`, `Add the Proof Sheet and the sections on what happens after a spot, then read what I am not claiming.`, `#proof`, `Go to the evidence`],
    [`30 minutes`, `Check my working`, `Add the proposal and the workings pack with every assumption, source, prompt and test.`, `#how`, `How it is built`]
  ],

  spot_title: `Spot Check`,
  spot_sub: `These are real results, recorded on 21 October 2026 from my build (prompt v2, Claude Haiku 5.5). Pick an example to see what Form Check said. The team is fictional.`,
  share_label: `Share my name with the recipient`,
  share_on: `Name shown on the spot. Untick it to see what the recipient sees instead. The Founder's Associate can always see the real giver, so anything inappropriate can be dealt with.`,
  share_off: `The recipient will see this as from A teammate. The Founder's Associate can still see the real giver, for moderation only.`,

  after_title: `What Happens After A Spot`,
  after_sub: `A saved spot does two things. It goes into the weekly Rep Count, and it feeds a simple coverage check so nobody goes unseen.`,
  rep_label: `The weekly Rep Count`,
  rep_text: `A card in the style of the mirror's post-workout summary. Each person appears once, with no counts next to names. The praise is always the giver's exact words, and a spot sent anonymously stays anonymous. This one was drafted by my Rep Count workflow from the fictional test spots.`,
  cov_label: `The coverage check: who has been seen?`,
  cov_text: `It counts how many people have been named in a spot in the last 14 days, split by team and by Office and Remote. The point is that recognition should reach everyone and not just the loudest or the closest to the founder. No AI is used, on purpose. It is counting, and counting should not make things up.`,
  cov_who: `Who sees what: the Founder's Associate sees the counts. Managers only learn when no spots have arrived for someone on their team, and they never see what any spot says.`,

  monday_title: `Varun's Monday Two`,
  monday_sub: `Five minutes a week. Two real spots, and one small thing he does about them. This is the one place the CEO's attention goes, so it has to be easy.`,
  monday_pick_title: `How the two are chosen`,
  monday_pick: [
    `The pool is last week's public spots that scored 2 out of 2 on specificity. Private spots are never used.`,
    `Anyone who was a Monday Two in the last four weeks is left out, so it does not go to the same people.`,
    `One should be about the month's Focus Value. One should be behind the scenes (Ground Crew or Hard Rep) or from a different team or a remote colleague.`,
    `The Founder's Associate reads both before they go to Varun and checks nothing is awkward. The rules shortlist and a person decides.`
  ],
  monday_do_title: `What Varun does with them`,
  monday_do: [
    `Read both. Pick the one he can say something real about.`,
    `Reply to it the same day, in his own words, naming the specific thing they did. One or two lines in the thread, or a two minute chat, whichever feels natural to him.`,
    `Keep it about the work. No reward, no comparing, and nothing that sounds like a performance review.`,
    `Optional: say it out loud at the Monday catch-up so the rest of the team hears it.`
  ],
  monday_delivery: `Delivered where he already is. The scenario in the brief started on WhatsApp, so the Monday Two can arrive as a WhatsApp message.`,

  rituals_title: `Plugs Into What MAGIC Already Does`,
  rituals_sub: `Good Form is not a new thing to remember. It hooks into rituals the team already has. These come from MAGIC's own job ad, and the details marked as assumptions need checking on day one.`,
  rituals: [
    [`Lunch Club`, `The weekly Rep Count lands on the morning of Lunch Club, so wins get talked about over lunch. Assumption: I do not know which day Lunch Club is, so the day is flexible.`],
    [`Quarterly off-sites`, `Everyone gets their Progress Report before the off-site, and the day opens with ten minutes of the quarter's best spots read out. It makes the off-site a celebration of real work.`],
    [`Company away days and milestones`, `Team PBs mark the big moments, for example the Series B and the US launch, and credit everyone who made them possible, not just the names people already know.`],
    [`Weekly celebratory moments`, `The job ad asks for weekly celebratory moments. The Rep Count is that moment every week, and it already has the content in it.`],
    [`New joiners`, `Every new joiner gets a spot from their buddy in their first fortnight, so their first experience of the company is being noticed.`],
    [`Run Club, team socials and the coffee machine`, `Spots happen in person too. Something said at the coffee machine or on a run takes 30 seconds to type, and the Rep Count makes sure it gets repeated.`],
    [`PUNCH`, `PUNCH is not public, so the demo uses the five behaviours from the job ad. When the real values are loaded, every spot after that is tagged against them.`]
  ],

  wa_title: `Slack Or WhatsApp`,
  wa_sub: `Same spot, same rules, same Form Check, different door. Plenty of the team will live in WhatsApp, and it is where Varun's own brief to me started. The demo build uses Twilio's WhatsApp sandbox.`,
  wa_status: `Status: I tested this from my own phone through Twilio's WhatsApp sandbox. My message arrived, was checked by Form Check and was saved. The replies in this chat are what my workflow generated. Twilio's free trial would not deliver the reply text back to my phone, so a live two-way demo needs a paid WhatsApp Business setup.`,
  wa_notes: [
    `To spot someone, send: spot Olu: what they did and what it made possible.`,
    `To send one anonymously, send: spot anon Olu: ...`,
    `Same checks as Slack. Vague spots get one friendly question, and flagged spots go to a person.`,
    `In production this would run on a WhatsApp Business account. Assumption: Meta approval and per-message costs need to be checked before launch.`
  ],

  proof_title: `Proof Sheet`,
  proof_sub: `I wrote the answer key for 30 test spots before any AI saw them, then measured Form Check against my own judgement. Then I ran 50 more spots I had never tuned on, once.`,
  proof_foot: `**Value scores on the unseen spots cover the 36 spots that carry a value (14 of 36 exact, 20 of 36 within the top two). I keyed those values by hand after the run, without seeing the AI's answers. Route and flag expectations for the 50 still come from test labels. *Acceptable counts "ask the giver to confirm the value" as fine when I expected a straight save, because the spot still gets saved. I added this measure after seeing the exact numbers.`,
  changed_title: `What changed between v1 and v2`,
  changed: [
    `v1 sent hard reps and quiet behind-the-scenes spots back for a follow-up. Now a lesson learned, or what the work made possible, counts as an effect.`,
    `One sarcastic spot slipped through because it was wrapped in thanks. Sarcasm is now flagged even then.`,
    `Values overlap, so the model also gives a runner-up value.`
  ],
  notclaim_title: `What I am not claiming`,
  notclaim: [
    `The AI agrees with me on the exact value 11 to 39% of the time (44 to 56% within its top two). In 9 of its 19 misses on the unseen spots it chose Strong analytical judgement, so it leans that way when a spot mentions numbers. So it suggests a value and asks the giver to confirm. In my prototype the question is asked in Slack, but the reply that confirms it is not built yet.`,
    `I tuned v2 on the same 30 spots, so those scores are flattered. The 50 unseen spots are the fair test, and their expected answers come from test labels, not a hand key.`,
    `The name-swap check came out at flags 30 of 30, route 28 of 30, value 22 of 30. It is a small sample with no control run, so a sanity check and not a bias audit.`
  ],

  how_title: `How It Is Built`,
  guard_title: `Guardrails`,
  guard: [
    `AI never writes, rewrites or improves praise. It asks the giver one question, in a trainer's voice.`,
    `Only spots people deliberately submit. No scraping of chats.`,
    `Below 0.7 confidence the AI asks the giver to confirm the tag (the prototype asks, the confirm step is not built yet). Rude, sarcastic or ranking language goes to a person.`,
    `Anonymous is an option. Named is the default, and the Founder's Associate can see the real giver for moderation only.`,
    `No cash, prizes, points or leaderboards. Recognition data never becomes performance data.`
  ],
  how_note: `All data here is fictional test data I generated. My assumptions, sources and prompts are in the proposal and the workings pack.`,

  footer: `Prototype for evaluation. Built by Liv for the MAGIC AI Founder's Associate task, October 2026. Not an official MAGIC page and it does not use MAGIC's logo.`
};
