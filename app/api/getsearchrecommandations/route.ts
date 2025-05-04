import * as Cheerio from "cheerio";

export const POST = async (request: Request) => {
  const searchTerm = await request.json();
  const url = 'https://m.imdb.com/find/?q=' + encodeURIComponent(searchTerm.search);
  const site = await Cheerio.fromURL(url)

  const data = JSON.parse(site("#__NEXT_DATA__").html()!).props.pageProps.titleResults.results.map((movie) => ({
    id:movie.id,
    title: movie.titleNameText,
    image: movie.titlePosterImageModel?.url,
  }));

  return Response.json({
    result: data
  });
};
