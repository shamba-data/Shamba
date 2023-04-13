import { type NextApiRequest, type NextApiResponse } from "next";
import convert from "xml-js";

type TransactionResponse = {
    Result: string;
    ResultExplanation: string;
    TransactionToken: string;
    TransactionRef: string;
    CustomerName: string;
    CustomerCredit: string;
    TransactionApproval: string;
    TransactionCurrency: string;
    TransactionAmount: string;
    FraudAlert: string;
    FraudExplnation: string;
    TransactionNetAmount: string;
    TransactionSettlementDate: string;
    TransactionRollingReserveAmount: string;
    TransactionRollingReserveDate: string;
    CustomerPhone: string;
    CustomerCountry: string;
    CustomerAddress: string;
    CustomerCity: string;
    CustomerZip: string;
    MobilePaymentRequest: string;
    AccRef: string;

}

const response = {
    _declaration: { _attributes: { version: '1.0', encoding: 'utf-8' } },
    API3G: {
        Response: "OK"
    }
}

export default function postRequest(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {

        const xmlResponse = convert.xml2js(req.body, { compact: true, alwaysChildren: true });
        const data: TransactionResponse = {
            Result: xmlResponse["API3G"]["Result"]["_text"],
            ResultExplanation: xmlResponse["API3G"]["ResultExplanation"]["_text"],
            TransactionToken: xmlResponse["API3G"]["TransactionToken"]["_text"],
            TransactionRef: xmlResponse["API3G"]["TransactionRef"]["_text"],
            CustomerName: xmlResponse["API3G"]["CustomerName"]["_text"],
            CustomerCredit: xmlResponse["API3G"]["CustomerCredit"]["_text"],
            TransactionApproval: xmlResponse["API3G"]["TransactionApproval"]["_text"],
            TransactionCurrency: xmlResponse["API3G"]["TransactionCurrency"]["_text"],
            TransactionAmount: xmlResponse["API3G"]["TransactionAmount"]["_text"],
            FraudAlert: xmlResponse["API3G"]["FraudAlert"]["_text"],
            FraudExplnation: xmlResponse["API3G"]["FraudExplnation"]["_text"],
            TransactionNetAmount: xmlResponse["API3G"]["TransactionNetAmount"]["_text"],
            TransactionSettlementDate: xmlResponse["API3G"]["TransactionSettlementDate"]["_text"],
            TransactionRollingReserveAmount: xmlResponse["API3G"]["TransactionRollingReserveAmount"]["_text"],
            TransactionRollingReserveDate: xmlResponse["API3G"]["TransactionRollingReserveDate"]["_text"],
            CustomerPhone: xmlResponse["API3G"]["CustomerPhone"]["_text"],
            CustomerCountry: xmlResponse["API3G"]["CustomerCountry"]["_text"],
            CustomerAddress: xmlResponse["API3G"]["CustomerAddress"]["_text"],
            CustomerCity: xmlResponse["API3G"]["CustomerCity"]["_text"],
            CustomerZip: xmlResponse["API3G"]["CustomerZip"]["_text"],
            MobilePaymentRequest: xmlResponse["API3G"]["MobilePaymentRequest"]["_text"],
            AccRef: xmlResponse["API3G"]["AccRef"]["_text"],
        }
        console.log(data);


        //sending the response to dpo
        const xml = convert.js2xml(response, { compact: true, ignoreComment: true, spaces: 4 });
        // returning an xml response
        res.setHeader('Content-Type', 'text/xml');
        res.write(xml);
        res.status(200).end();


    }
}