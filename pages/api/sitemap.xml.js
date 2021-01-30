export default function (req, res) {
    res.setHeader("Content-Type", "text/xml");
    res.send(`
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://guilhermeweb.dev/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
        </url>
    </urlset>
    `)
}