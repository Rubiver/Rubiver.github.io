const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        createProxyMiddleware("/api", {
            target: "https://rubiver.github.io",
            changeOrigin: true,
        }),
    );
    app.use(
        createProxyMiddleware("/users", {
            target: "https://rubiver.github.io",
            changeOrigin: true,
        }),
    );
    app.use(
        createProxyMiddleware("/setboard", {
            target: "https://rubiver.github.io",
            changeOrigin: true,
        }),
    );
    app.use(
        createProxyMiddleware("/setitem", {
            target: "https://rubiver.github.io",
            changeOrigin: true,
        }),
    );
    app.use(
        createProxyMiddleware("/delete", {
            target: "https://rubiver.github.io",
            changeOrigin: true,
        }),
    );
    app.use(
        createProxyMiddleware("/cart", {
            target: "https://rubiver.github.io",
            changeOrigin: true,
        }),
    );
    app.use(
        createProxyMiddleware("/wishlist", {
            target: "https://rubiver.github.io",
            changeOrigin: true,
        }),
    );
};
