const axios = require('axios');

module.exports.config = {
    name: "ai",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Jayy",
    description: "Gpt architecture",
    usePrefix: false,
    commandCategory: "GPT4",
    cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
    try {
        const { messageID, messageReply } = event;
        let prompt = args.join(' ');

        if (messageReply) {
            const repliedMessage = messageReply.body;
            prompt = `${repliedMessage} ${prompt}`;
        }

        if (!prompt) {
            return api.sendMessage('𝖸𝖤𝖲?, 𝖨𝖬 𝖠𝖫𝖨𝖵𝖤 𝖪𝖨𝖭𝖣𝖫𝖸 𝖯𝖱𝖮𝖵𝖨𝖣𝖤 𝖸𝖮𝖴𝖱 𝖰𝖴𝖤𝖲𝖳𝖨𝖮𝖭(⁠≧⁠▽⁠≦⁠)', event.threadID, messageID);
        }
        api.sendMessage('🕙| Jay Bot is typing Please wait...', event.threadID);

        // Delay
        await new Promise(resolve => setTimeout(resolve, 2000)); // Adjust the delay time as needed

        const gpt4_api = `https://gpt4withcustommodel.onrender.com/gpt?query=${encodeURIComponent(prompt)}&model=gpt-3.5-turbo-16k-0613`;

        const response = await axios.get(gpt4_api);

        if (response.data && response.data.response) {
            const generatedText = response.data.response;

            // Ai Answer Here
            api.sendMessage(`➪𝖠𝖨 𝖠𝖲𝖲𝖨𝖲𝖳𝖠𝖭𝖳 𝖠𝖭𝖲𝖶𝖤𝖱𝖤𝖣✅\n━━━━━━━━━━━━━━━━\n🌟𝖠𝖭𝖲𝖶𝖤𝖱𝖤𝖣:➪${generatedText}\n━━━━━━━━━━━━━━━━`, event.threadID, messageID);\n BOT CREATOR : www.facebook.com/61552691907450
        } else {
            console.error('API response did not contain expected data:', response.data);
            api.sendMessage(`❌ An error occurred while generating the text response. Please try again later. Response data: ${JSON.stringify(response.data)}`, event.threadID, messageID);
        }
    } catch (error) {
        console.error('Error:', error);
        api.sendMessage(`❌ An error occurred while generating the text response. Please try again later. Error details: ${error.message}`, event.threadID, event.messageID);
    }
};
