export const baseUrl = (() => {
    if (process.env.NODE_ENV === "development") {
        return "http://localhost:3000";
    } else {
        return "https://trash-can-frontend-zhqzb2nbkq-an.a.run.app";
    }
})();
