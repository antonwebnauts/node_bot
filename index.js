const express = require('express');
const app = express();
const {Api,  TelegramClient } = require( "telegram");
const { StringSession } = require( "telegram/sessions");
const input = require( "input");


app.get('/login', async (req, res) => {
    const apiId = 1;
    const apiHash = "";
    const stringSession = new StringSession("");
    console.log("Loading interactive example...");
    const client = new TelegramClient(stringSession, apiId, apiHash, {
        connectionRetries: 5,
    });
    await client.start({
        phoneNumber: async () => await input.text("Please enter your number: "),
        password: async () => await input.text("Please enter your password: "),
        phoneCode: async () =>
            await input.text("Please enter the code you received: "),
        onError: (err) => console.log(err),
    });
    console.log("You should now be connected.");
    console.log(client.session.save()); // Save this string to avoid logging in again
    await client.sendMessage("me", { message: "Hello!" });
})

app.get('/call', async (req, res) => {
    const apiId = 1;
    const apiHash = "";
    const session = new StringSession(""); // You should put your string session here
    const client = new TelegramClient(session, apiId, apiHash, {});
    await client.connect(); // This assumes you have already authenticated with .start()

    const result = await client.invoke(
        new Api.messages.GetMessageReactionsList({
            peer: -1001603234133,
            id: 209,
            limit: 10
        })
    );
    res.send({message: result});
})

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});