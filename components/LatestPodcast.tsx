import useSWR from "swr";
import fetcher from "../lib/fetcher";
import HomeCard from "./HomeCard";

type YoutubeInfo = {
	title: string;
	thumbnail: string;
	url: string;
};

export default function LatestPodcast() {
	const { data, error } = useSWR<YoutubeInfo>("/api/youtubePodcast", fetcher);

	if (error) return <div>{}</div>;
	if (!data)
		return (
			<HomeCard imgSrc="/images/loading.webp" imgAlt="Loading...">
				<h2>Latest Podcast</h2>
				<h3>Loading...</h3>
				<a href="#" target="_blank" rel="noreferrer" className="a_button">
					Watch on Youtube
				</a>
			</HomeCard>
		);
	const { title, thumbnail, url } = data;
	return (
		<HomeCard imgSrc={thumbnail} imgAlt={title}>
			<h2>Latest Podcast</h2>
			<h3>{title}</h3>
			<a href={url} target="_blank" rel="noreferrer" className="a_button">
				Watch on Youtube
			</a>
		</HomeCard>
	);
}
