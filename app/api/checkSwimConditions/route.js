import { OpenAI } from 'openai';

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export async function GET(req, res) {
  console.log("req.nextUrl.searchParams",req.nextUrl.searchParams)

  const prompt = `given the following conditions:
    Wave Height: ${req.nextUrl.searchParams.get("waveHeight")} cm
    Wave Separation: ${req.nextUrl.searchParams.get("waveSeparation")} seconds
    Wave Direction: ${req.nextUrl.searchParams.get("waveDirection")}
    Temperature: ${req.nextUrl.searchParams.get("temprature")} °C
    is it a good day for a swim at the beach? in the answer please also include the swimming direction and if there are any things to consider?`;

  try {
    const response = await openai.chat.completions.create({
      model:"gpt-3.5-turbo-16k",
      messages: [
        {role: "system", content: "You're a can i swim app. helping sea swimmers understand if todays a good day to swim. You're frinednly and consise"},
        {role: "user", content: prompt}
      ],

    });

    const content = response.choices[0].message.content; 
    console.log("content",content);
    const goodDayBoolean = '2' // content.toLowerCase().includes('yes');

    return Response.json({ goodDayBoolean, content },{status: 200});
  } catch (error) {
    console.log('Error fetching swim summary:', error.message);
    return new Response({ error: error.message }, {status: 500});
  }}
