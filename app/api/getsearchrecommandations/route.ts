import * as Cheerio from "cheerio";

export const POST = async (request: Request) => {
  const searchTerm = await request.json();
  const url = 'https://m.imdb.com/find/?q=' + encodeURIComponent(searchTerm.search);

  const response = await fetch(url);
  const html = await response.text();

  const $ = Cheerio.load(html);

  const nextData = $("#__NEXT_DATA__").html();

  if (!nextData) {
    return Response.json({ result: [] });
  }

  const json = JSON.parse(nextData);

  const movies = json.props?.pageProps?.titleResults?.results || [];

  const data = movies.map((movie) => ({
    title: movie.titleNameText,
    image: movie.titlePosterImageModel?.url,
    type: movie.titleTypeText,
  }));

  return Response.json({
    result: data
  });
};
