import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

type YoutubeTitle = {
	title: string;
};

export default function LatestVideo() {
	const { data, error } = useSWR<YoutubeTitle>("/api/youtube", fetcher);

	if (error) return <div>{error.toString()}</div>;
	if (!data) return <div>Loading...</div>;
	const title = data.title;
	return <div>{title}</div>;
}
