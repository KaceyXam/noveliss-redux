import { NextApiRequest } from "next";
import { NextApiResponse } from "next";

const podcastApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const key = process.env.YOUTUBE_API_KEY;

	const response = await fetch(
		`https://youtube.googleapis.com/youtube/v3/playlistItems?part=id%2C%20snippet&maxResults=50&pageToken=EAAaBlBUOkNHUQ&playlistId=PLAhqsX2BLLRmZ5CqsezyZmlxlSE_yB1Jr&key=${key}`
	);

	const json = await response.json();

	const jsonSnippet = json.items[json.items.length - 1].snippet;
	return res.status(200).json({
		title: jsonSnippet.title,
		thumbnail: jsonSnippet.thumbnails.maxres.url,
		url: `https://www.youtube.com/watch?v=${jsonSnippet.resourceId.videoId}`,
	});
};

export default podcastApi;
