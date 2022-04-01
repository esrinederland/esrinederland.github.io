function AddAction(action, params, appname) {
    setTimeout(() => {
        //var monitorUrl = "http://localhost:7071/api/AddAction"
        var monitorUrl = "https://coolmonitoring.azurewebsites.net/api/AddAction?code=5PrXOFlD2MoKpE8nMli28zydYRHgwaFbZz3ok8TBw13SNz7qmE3dzg==&clientId=default"
        var referer = document.referrer;
        var url = window.location.href;
        if (!appname) {
            path = window.location.pathname;
            pathParts = path.split("/");
            plength = pathParts.length;
            if (plength > 1) {
                appname = pathParts[plength - 2] + "/" + pathParts[plength - 1];
                appname = appname.replace(".html", "");
            }
            if(appname.length <2)
            {
                appname = url.replace("http://", "").replace("https://", "").replace("www.", "").replace("/", "");
            }

        }
        var completeUrl = `${monitorUrl}&action=${action}&params=${params}&referer=${referer}&url=${url}&appname=${appname}`;

        fetch(completeUrl);
        //console.log(`monitoring of ${action} complete`);
    }, 0);
}

AddAction("PageLoad");