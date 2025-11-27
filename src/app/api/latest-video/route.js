export async function GET() {
  const channelId = "UC6RPyQagWAcHpOM89ZHQk8g"; // Your channel ID

  try {
    const rssResponse = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
    );

    const xml = await rssResponse.text();

    // Extract <yt:videoId>...</yt:videoId>
    const match = xml.match(/<yt:videoId>(.*?)<\/yt:videoId>/);

    const videoId = match ? match[1] : null;

    return Response.json({ videoId });
  } catch (error) {
    return Response.json({ error: "Failed to fetch video" }, { status: 500 });
  }
}
