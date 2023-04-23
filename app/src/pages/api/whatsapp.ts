import { type NextApiRequest, type NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        try {
            console.log("GET: Someone is pinging me");

            let mode = req.query['hub.mode'];
            let token = req.query['hub.verify_token'];
            let challenge = req.query['hub.challenge'];


            if (
                mode &&
                token &&
                mode === 'subscribe' &&
                process.env.Meta_WA_VerifyToken === token
            ) {
                return res.status(200).send(challenge);
            } else {
                return res.status(403).send('Forbidden');
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    }

    if (req.method === "POST") {
        try {
            console.log("POST: Someone is pinging me");
            const message = req.body.entry[0].changes[0].value.messages[0];
            const profileInfo = req.body.entry[0].changes[0].value.contacts[0].profile;
            console.log(message)
            console.log(profileInfo)

            return res.status(200).send('OK');
        } catch (error) {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    }
}