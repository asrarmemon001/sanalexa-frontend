import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <head dangerouslySetInnerHTML={{
                __html: `
                <title>Simulanis</title>
                <meta charset="UTF-8"/> 
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="robots" content="nofollow"/>
                <meta name="googlebot" content="noindex"/>
                <link rel="icon" href="/static/images/favicon.png" sizes="32x32" />
                <link rel="icon" href="/static/images/favicon.png" sizes="192x192" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
              
              
                <link rel="stylesheet" href="/static/css/bootstrap.css"/>
                <link rel="stylesheet" href="/static/css/style.css"/>`}} />

            <body>
                <Main />
                <NextScript />
                {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> */}
                {/*
                <script src="/static/js/owl.carousel.min.js"></script> */}
                 {/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}
                
                {/* <script src="/static/js/custom.js"></script> */}
            </body>
        </Html>
    )
}