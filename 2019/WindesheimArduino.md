# Windesheim Arduino Informatieportaal

Welkom op de pagina met daarin informatie over hoe je de arduino data in een dashboard kan laten zien.

## Input
De url waarnaar de data gepost moet worden (de featureservice):
https://services.arcgis.com/emS4w7iyWEQiulAb/arcgis/rest/services/windesheim_sensornetwerk/FeatureServer/0/addFeatures

Daar moet je 2 parameters heen sturen met daarin de data:

1. features:<br>
Hierin zit de data van je sensor, dit is in principe een record in JSON formaat.
```JSON
[{
    "attributes": {
    "sensorid": "<<naam van je sensor>>",
    "temp": 99,
    "h": 99,
    "pm2": 99,    
    "description": "<<evt omschrijving>>"
},
    "geometry": {
        "x": <<longitude>> ,
        "y": <<latitude>>
    }
}]
```
2. f<br>
Dit specificeert het output formaat:
vul hier ```"json"``` in .

Als je data goed onvangen is krijg je het volgende terug:
```JSON
{
  "addResults": [
   {
    "objectId": 617,
    "success": true
   }
]}
```
Of een foutmelding (ook in een json structuur).

## Output
Als je data goed ontvangen is kan je deze ook uiteraard terug zien op de kaart.<br>
Voor alleen de kaart:<br>
https://www.arcgis.com/home/webmap/viewer.html?webmap=19fadb4cea8d44d8895037511aad5e88

Voor de kaart in een volledig dashboard:<br>
https://www.arcgis.com/apps/opsdashboard/index.html#/317aa836867647bea636bbe8e96f55af

## Zelf aan de slag
Zelf een dashboard maken of spelen met andere opties van arcgis? 
<br>Maak zelf een account aan op: https://developers.arcgis.com


## Http(s)
Mocht je problemen krijgen met de https url kan je ook een post doen naar deze URL via http:<br>
http://devteam.esri.nl/portal/sharing/servers/87201f7115594d76bbb68053ca60327d/rest/services/Windesheim_TBL_Sensornetwerk_Proxy/FeatureServer/0
