let browser = "Brave";//add Firefox or safari here and then see the result

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed");

}