const characterList = [
    {
		name: "Dr. 'Rusty' Venture",
		sortId: "venture_fam",
		contId: "dr_venture_cont",
		imageId: "dr_venture_img",
		images: ["images/dr_venture.jpg", "images/dr_venture_2.jpg"],
		imageIndex: 0,
		altText: ["Dr. Rusty Venture, scared and lactating.", 
				  "Dr. Rusty Venture in the Ambassador."],
		subset: "Venture Family",
		spoiler: false,
		bioRevealed: false,
		description: "Dr. Thaddeus S. Venture, formerly known as Rusty Venture and later as TS, most often known as Dr. Venture or simply Doc, is the son of the late, great Dr. Jonas Venture Senior, a world-renowned super scientist and adventurer. As a child, Doc was perhaps the most famous and admired boy-advanturer of all time. As an adult, he is most known as a petty, obnoxious, pill-popping failure of a super scientist and father. His childhood moniker, 'Rusty Venture,' eventually becomes the name of a series of lurid sex acts, much to his dismay."
	},
	{
		name: "Hank Venture",
		sortId: "venture_fam",
		contId: "hank_cont",
		imageID: "hank_img",
		images: ["images/hank.jpg", "images/hank_2.jpg", "images/hank_3.jpg"],
		imageIndex: 0,
		altText: ["Hank Venture in his kerchief and the ol' high and tight.", 
				  "Hank Venture in Brock's jacket with the shaggy hair.", 
				  "Hank Venture with his New York Justin Bieber look."],
		subset: "Venture Family",
		spoiler: false,
		bioRevealed: false,
		description: "Henry Allen Venture, or Hank as he prefers to be called, is the oldest of the Venture twins, as well as the more rebellious of the two. He, like his father before him, hates the jet-setting and dangerous life of a de facto boy adventurer, and often expresses this frustration via sass mouth typically directed at Dr. Venture. He idolizes his bodyguard, Brock, and takes every chance he can get to hang around with and attempt to impress him. Hank is also the more girl-crazy of the Venture boys, developing a crush for the compound's Mail Delivery Woman at an early age."
	},
	{
		name: "Dean Venture",
		sortId: "venture_fam",
		contId: "dean_cont",
		imageId: "dean_img",
		images: ["images/dean.jpg", "images/dean_2.jpg", "images/dean_3.jpg"],
		imageIndex: 0,
		altText: ["Dean Venture in his sweater vest.",
				  "Dean Venture with his little mustache.",
				  "Dean Venture in his moody goth phase."],
		subset: "Venture Family",
		spoiler: false,
		bioRevealed: false,
		description: "Dean Venture, the slightly younger Venture boy, is the far more sensitive, polite, and academically inclined of the two. Dean has a long-term crush on Triana, the daughter of his necromancer neighbor, Dr. Orpheus; he pines after her for years and his intense love for her even allows the magic of Dr. Orpheus to rescue the Venture family a time or two. Dr. Venture often tries to pigeonhole Dean into following in his footsteps and entering the super science game. He goes along begrudgingly, either not wanting to disappoint his father or being too much of a candy-ass to rebel like his brother Hank."
	},
	{
		name: "Brock Samson",
		contId: "brock_cont",
		sortId: "osi_agents",
		imageId: "brock_img",
		images: ["images/brock.jpg", "images/brock_2.jpg", "images/brock_3.jpg", "images/brock_4.jpg"],
		imageIndex: 0,
		altText: ["Brock Samson in his trademark black polo.",
				  "Chubby, unafiliated Brock.",
				  "S.P.H.I.N.X. Brock.",
				  "O.S.I. Brock, once again."],
		subset: "OSI Agents",
		spoiler: false,
		bioRevealed: false,
		description: "Brock Sampson is perhaps the most mythic character in the Venture Bros. universe. Brock joined the army after being thrown out of college and eventually made it into the Office of Secret Intellignce, or OSI. There he eventually earned notoriety and even celebrity status in the organization for his strength, brutality, combat expertise, and incredible effectiveness at his job as a government spy. As the bodyguard to the Venture family, Brock kills any and every threat to the family that comes along (except of course Guild-sanctioned arches, though only for bureaucratic reasons). Brock is the epitome of Robert Plant-esque hypermasculinity and raw sexual energy."
	},
	{
		name: "Henchman 21",
		contId: "h21_cont",
		sortId: "monarch_crew",
		imageId: "h21_img",
		images: ["images/h21.jpg", "images/h21_2.jpg"],
		imageIndex: 0,
		altText: ["Henchman 21 with the light saber from \"Tag Sale, You're It!\"",
				  "Beefy Henchman 21, known as Two-Ton 21 by his fellow henchmen."],
		subset: "Monarch Crew",
		spoiler: false,
		bioRevealed: false,
		description: "Henchman 21, or more often known simply as 21, is one half of the villainous Monarch's most reliable henching duo, somehow. He was kidnapped by the Monarch's henchmen team when he was 13 years old and has been henching for the Monarch ever since. Both he and his best friend, Henchman 24, are both unabashed nerds. They often engage in heated debates over pop culture trivia and fan speculation, such as whether or not the Smurfs are mammals. He is often the butt of light-hearted jokes by 24 about his weight."
	},
	{
		name: "Henchman 24",
		contId: "h24_cont",
		sortId: "monarch_crew",
		imageId: "h24_img",
		images: ["images/h24.jpg", "images/h24_2.jpg"],
		imageIndex: 0,
		altText: ["Henchman 24, likely seen sassing Henchman 21.",
				  "Henchman 24's skull."],
		subset: "Monarch Crew",
		spoiler: true,
		spoilerRevealed: false,
		spoilerText: "Deceased",
		bioRevealed: false,
		description: "Henchman 24, or just 24, is the other half of the Monarch's most reliable henching duo. He is just as nerdy as 21, and just as quick to do all he can to avoid the drudgery and danger involved in being a henchman. He, like 21, is not a particularly skilled or intelligent henchman, but more uses his extensive knowledge of superhero cliches to avoid death. In the words of 21 he looks like, 'Seinfeld with a unibrow,' and sounds like 'Ray Romano' according to the Monarch. At one point his primary mode of transportation, aside from the Monarch's giant flying cacoon, is a crappy Nissan Stanza he borrowed from his dad."
	},
	{
		name: "Dermott Fictel",
		contId: "dermott_cont",
		sortId: "friends",
		imageId: "dermott_img",
		images: ["images/dermott.jpg"],
		imageIndex: 0,
		altText: ["Dermott Fictel, surly as ever."],
		subset: "'Friends'",
		spoiler: true,
		spoilerRevealed: false,
		spoilerText: "Dr. Venture's Illegitimate Son",
		bioRevealed: false,
		description: "Dermott meets the Venture clan during the Rusy Venture Day Camp for Boy Adventurers. He makes a quick enemy out of Brock after he mocks the martial arts expo Brock puts on for the kids. He then befriends Hank and later harasses Triana Orpheus, earning him an ensuing surprise ass kicking at the hands of Dean, much to the enjoyment of Brock. Dermott can frequently be heard saying vulgar things and boasting about his alleged record of combat prowess and manliness. He eventually forms the band Shallow Gravy with Hank and H.E.L.P.eR."
	},
	{
		name: "David Bowie (The Sovereign)",
		contId: "sovereign",
		sortId: "guild_members",
		imageId: "sovereign_img",
		images: ["images/the_sovereign.jpg", "images/the_sovereign_2.jpg"],
		imageIndex: 0,
		altText: ["The Sovereign David Bowie in the Grand Canyon.", "The Sovereign shape-shifted into a dead bald eagle."],
		subset: "Guild Members",
		spoiler: true,
		spoilerRevealed: false,
		spoilerText: "Not Really Bowie & Possibly Deceased",
		bioRevealed: false,
		description: "David Bowie is first mentioned in Season 1 as the original owner of Roy Brisby's long-time companda, Ling Ling. He then makes his first appearance in the two-part Season 2 finale as The Sovereign, the highest ranking member of the Guild of Calamitous Intent; he gives Dr. Girlfriend away at her wedding to the Monarch. The Sovereign is a powerful shapeshifter, and can take the form of anything from a pack of cigarettes to a bald eagle to 'Two-Ton' 21. He survives the Battle of Cremation Creek despite being betrayed by Phantom Limb and Iggy Pop."
	}
]

const characterApp = new Vue({
    el: '#characters',

    data: {
		characters: characterList,
		sortSubset: '',
		sortTagClicked: false,
		isPhaseLinkClicked: false,
	},
	
	methods: {
		filterCharacters: function() {
			this.sortSubset = event.target.textContent;
			this.sortTagClicked = true;
			if (document.getElementsByClassName('char_sort_clicked').length > 0) {
				document.getElementsByClassName('char_sort_clicked')[0].classList.remove('char_sort_clicked');
			}
			event.target.classList.add('char_sort_clicked');
		},
		increaseImageIndex: function(character) {
			if (this.isPhaseLinkClicked === false) {
				let phaseConfirm = confirm("WARNING: Increasing character phases could lead to spoilers. Continue?");
				if (phaseConfirm == true)  {
					this.isPhaseLinkClicked = true;
					character.imageIndex ++;
				}
			} else {
				if (character.images[character.imageIndex + 1]) {
					character.imageIndex ++;
				} 
			}
		},
		decreaseImageIndex: function(character) {
			if (character.images[character.imageIndex - 1]) {
				character.imageIndex --;
			} 
		},
	},

});

