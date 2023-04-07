
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

export class GptCaller {
  openai = null;

  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_SECRET_KEY
    });
    const openai = new OpenAIApi(configuration);
    this.openai = openai;
  }


  async askChatGPT(requestText) {
    const completion = await this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: `create me mock 6 data, only with the code, without any other text, as json, for this schema: ${requestText}}`,
      max_tokens: 2048
    });
    return completion.data.choices[0].text;
  }
}
