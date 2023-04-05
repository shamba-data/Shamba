import { router, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import z from "zod";
import axios from "axios";
import convert from 'xml-js';

async function getToken() {
    let data = `
                            <?xml version="1.0" encoding="utf-8"?>
                <API3G>
                <CompanyToken>0B6758B3-BB98-438A-A666-7BF2F9CA6B31</CompanyToken>
                <Request>createToken</Request>
                <Transaction>
                <PaymentAmount>80.00</PaymentAmount >
                <PaymentCurrency>ZMW</PaymentCurrency>
                <DefaultPayment>MO</DefaultPayment>
                <DefaultPaymentCountry>zambia</DefaultPaymentCountry>
                <RedirectURL>http://www.shamba-data.com/zambia/success</RedirectURL>
                <BackURL>http://www.shamba-data.com/zambia/</BackURL>
                <CompanyRefUnique>0</CompanyRefUnique>
                <PTL>5</PTL>
                </Transaction>
                <Services>
                <Service>
                    <ServiceType>57819</ServiceType>
                    <ServiceDescription>Subscription Services</ServiceDescription>
                    <ServiceDate>2023/04/4 19:00</ServiceDate>
                </Service>

                <Service>
                    <ServiceType>71973</ServiceType>
                    <ServiceDescription>Monthly Subscription</ServiceDescription>
                    <ServiceDate>2023/04/4 19:00</ServiceDate>
                </Service>

                <Service>
                    <ServiceType>73458</ServiceType>
                    <ServiceDescription>Agriculture Data</ServiceDescription>
                    <ServiceDate>2023/04/4 19:00</ServiceDate>
                </Service>
                </Services>
                <Additional>
                <BlockPayment>BT</BlockPayment>
                <BlockPayment>PP</BlockPayment>
                </Additional>
                </API3G>
            `
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://secure.3gdirectpay.com/API/v6/',
        headers: {
            'Content-Type': 'application/xml',
            'Cookie': 'AFIDENT=0B6758B3-BB98-438A-A666-7BF2F9CA6B31',
            'Access-Control-Allow-Origin': '*',
        },
        data: data
    };

    const tokenXml = await (await axios.request(config)).data;



    return tokenXml
    // const response = await axios.request(config);
    // return response.data;

}


export const payments = router({
    getToken: publicProcedure
        .query(async ({ input, ctx }) => {
            const tokenXml = await getToken();
            //@ts-ignore
            const parsedToken = convert.xml2js(tokenXml, { compact: false, spaces: 4 });
            const token = parsedToken["API3G"];
            return token;
        })

})