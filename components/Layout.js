import Head from 'next/head';

const Layout = ({ title, keyword, description, children }) => {
    return(
        <div>
            <Head>
                <title>{ title }</title>
                <meta name="description" content={ description } />
                <meta name="keyword" content={ keyword } /> 
            </Head>
            { children }
        </div>        
    )
}

Layout.defaultProps = {
    title: "random coding notes",
    description: "A place where people take and share their notes with ease",
    keyword: "learning, notes, sharing"
}

export default Layout;