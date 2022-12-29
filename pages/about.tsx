import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import styles from "./About.module.scss";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Head>
				<title>Noveliss | About</title>
			</Head>
			<MainLayout>
				<main className={styles.main}>
					<p>
						Jarred Douglas aka Noveliss is a dream chaser personified. Noveliss
						grew up a bit of a closet nerd and multi-sport athlete throughout
						his youth. A big-time social introvert, Noveliss would go to school,
						get good grades, go to basketball practice and go home and watch
						Anime and wrestling.
					</p>
					<p>
						He got introduced to real rap early when he stole a tape from his
						cousin Jason. The tape he stole was Nas’ “It Was Written” and it
						changed his life.
					</p>
					<p>
						Noveliss continued to explore Hip Hop when the “Slim Shady LP” came
						out. He tried to buy the parental advisory version but the guy at
						the record store wouldn’t let him because he was too young, so
						Noveliss stole it and ran off.
					</p>
					<p>
						In high school, Noveliss really discovered his love for writing. It
						started as writing poetry, then evolved to creative writing pieces
						and from there, he began to jot down his own rhymes. At lunch,
						Noveliss would battle some of his fellow classmates.
					</p>
					<p>
						He also discovered his love for Anime, rushing home after school to
						catch Dragonball Z on Toonami. His love for anime expanded and
						became something more important in his life. He discovered Samurai
						Champloo and Cowboy Bebop and credits them for sending him down an
						anime rabbit hole.
					</p>
					<p>
						He became a high level writer and a good enough basketball player to
						lead him to further his education. College is where Nov’s life would
						get a little more complicated but his music career would take off.
					</p>
					<p>
						In college, Noveliss was a full-time student athlete and soon to be
						traveling Hip Hop artist. One night, rocking an open mic, he met 3
						other emcees whom would later form the legendary Hip Hop group Clear
						Soul Forces with him. During a studio session, they ran into Detroit
						Rap Great; Royce Da 5’9. After an all-night session of rhyming to
						impress Royce, he suggested the 4 become a group, and Clear Soul
						Forces was born.{" "}
					</p>
					<p>
						Before he knew it, Noveliss was traveling with his basketball team,
						coming home, going to class and hitting the road again with Clear
						Soul Forces all while bringing his first child into the world.
						Though his schedule was tough, Nov managed to graduate with a degree
						in Mass Communications and Professional Writing.
					</p>
					<p>
						Soon after Graduating, Clear Soul Forces would secure a deal with
						notable underground distribution label Fat Beats and hit Europe on
						multiple tours where they headlined sold out shows in the countries
						of France, Germany, Belgium, Finland, Switzerland and The United
						Kingdom.
					</p>
					<p>
						After accomplishing certain milestones with CSF, Noveliss decided he
						wanted to give fans a piece of himself that they didn’t get to hear
						in the group. He would go on to release multiple solo projects and
						become a figure in the nerdcore fandom community.
					</p>
					<p>
						Noveliss would travel to different Cons doing panels and performing,
						these rounds including performing at Detroit’s Youmacon in full on
						Naruto Sage Mode Cosplay and speaking at a panel at San Diego Comic
						Con.
					</p>
					<p>
						Noveliss’ solo adventures would lead him to a place he only dreamed
						of visiting, Japan. Noveliss traveled to Japan to rock two shows in
						Tokyo with Mega Ran during a trip that would ultimately inspire him
						to create the album that changed his life; Cerebral Apex. Noveliss
						would return home and begin writing his very own Manga that his
						debut album would be based off of.
					</p>
					<p>
						Having invested nearly eight years into his craft and career,
						Noveliss is certainly no novice. Influenced by legendary MC’s such
						as Black Thought, Eminem, MF Doom, Nas, and Redman, it’s no wonder
						the anime loving, comic book reading, martial arts and pro wrestling
						loving emcee is well equipped with rhymes.
					</p>
					<p>
						He also gives credit to anime’s such as Samurai Champloo; Naruto,
						Cowboy Bebop, Dragonball Z, Hunter x Hunter, Rurouni Kenshin, Ninja
						Scroll, Fullmetal Alchemist Brotherhood, Afro Samurai, Yu Yu Hakusho
						and even recent titles like My Hero Academia, for inspiring him and
						changing his life.
					</p>
				</main>
			</MainLayout>
		</>
	);
}
