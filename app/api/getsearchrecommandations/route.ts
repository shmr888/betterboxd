import * as Cheerio from "cheerio";


export const POST = async(request:Request)=>{
    const searchTerm = await request.json();
    const site = await Cheerio.fromURL({'https://m.imdb.com/find/?q='+searchTerm.search});
    const data = JSON.parse(site("#__NEXT_DATA__").html()!).props.titleResults.results.map((value)=>{
        return {
            title:value.titleNameText,
            image:value.titlePosterImageModel.url,
            type:value.titleTypeText
        }

    })
    return Response.json({
        result:data
    })
}