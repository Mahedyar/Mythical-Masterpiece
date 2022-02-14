import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>

                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />

                </Head>
                {/*<script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>*/}
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument