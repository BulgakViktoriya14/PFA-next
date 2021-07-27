import Head from 'next/head'

function HeadMain() {
    return(
        <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
            <meta name='description' content='Description' />
            <title>Personal finance accounting</title>
            <link rel='manifest' href='/manifest.json' />
            <link rel="apple-touch-icon" href="/icon-small.png" />
            <link rel="apple-touch-icon" href="/icon-big.png" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="theme-color" content="#536878" />
        </Head>
    )
}
export default HeadMain;