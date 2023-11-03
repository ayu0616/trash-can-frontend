export const BACKEND_URL = (() => {
    if (process.env.NODE_ENV === "development") {
        return "http://localhost:3001";
    } else {
        return "https://trash-can-backend-zhqzb2nbkq-an.a.run.app/";
    }
})();
