export const BACKEND_URL = (() => {
    if (process.env.NODE_ENV === "development") {
        return "http://127.0.0.1:3001";
    } else {
        return "https://trash-can-backend-zhqzb2nbkq-an.a.run.app/";
    }
})();
