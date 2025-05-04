import * as cheerio from 'cheerio';


export const POST = async()=>{
    const site = await cheerio.fromURL('https://m.imdb.com/chart/top/');
    const data = JSON.parse(site("#__NEXT_DATA__").html()!).props.pageProps.pageData.chartTitles.edges.map((movie)=>{
        return {
            id:movie.node.id,
            title:movie.node.titleText.text,
            image:movie.node.primaryImage.url,
            releaseYear:movie.node.releaseYear.year,
            ratings:movie.node.ratingsSummary.aggregateRating,
            genre:movie.node.titleGenres.genres.map((val)=>val.genre.text),
            plot:movie.node.plot.plotText.plainText

        }
    })
    return Response.json({
        status:"Success",
        result: data
}
    )}
