import { NextApiRequest } from "next";
import { NextApiResponse } from "next";

const youtubeApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const key = process.env.YOUTUBE_API_KEY;

	const response = await fetch(
		`https://youtube.googleapis.com/youtube/v3/playlistItems?part=id%2C%20snippet&playlistId=PLAhqsX2BLLRnoBbTkW1C1i4C03jYN9FJU&key=${key}`
	);

	const json = await response.json();
	// const latestVideoTitle = json.items[0].snippet.title;
	const jsonSnippet = json.items[0].snippet;
	return res.status(200).json({
		title: jsonSnippet.title,
		thumbnail: jsonSnippet.thumbnails.maxres.url,
		url: `https://www.youtube.com/watch?v=${jsonSnippet.resourceId.videoId}`,
	});
};

export default youtubeApi;
