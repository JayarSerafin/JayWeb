module.exports = {
    description: "Show Commands and the descriptions",
    role: "user",
    credits: "Jay",
    cooldown: 16,		
    execute(api, event, args, commands) {
        let helpMessage = '💐\n';
        helpMessage += '💮═══════════════💮\n';
        commands.forEach((command, name) => {
            helpMessage += `𝙽𝚊𝚖𝚎: ${name}\n`;
            helpMessage += `𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗: ${command.description}\n`;
            helpMessage += `𝚁𝚘𝚕𝚎: ${command.role}\n`;
            helpMessage += `Credits: ${command.credits}\n`;
        helpMessage += '💮═══════════════💮\n';
        });
        helpMessage += '💬https://facebook.com/jayqrt0';
        api.sendMessage(helpMessage, event.threadID);
    }
};
