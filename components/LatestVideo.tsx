import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import HomeCard from "./HomeCard";

type YoutubeInfo = {
	title: string;
	thumbnail: string;
	url: string;
};

export default function LatestVideo() {
	const { data, error } = useSWR<YoutubeInfo>(
		"/api/youtubeMusicVideo",
		fetcher
	);

	if (error) return <div>{error.toString()}</div>;
	if (!data) return <div>Loading...</div>;
	const { title, thumbnail, url } = data;
	return (
		<HomeCard imgSrc={thumbnail} imgAlt={title}>
			<h2>Latest Video</h2>
			<h3>{title}</h3>
			<a href={url} target="_blank" rel="noreferrer" className="a_button">
				Watch on Youtube
			</a>
		</HomeCard>
	);
}