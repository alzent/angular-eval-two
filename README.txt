Fehlende Module nachinstallieren
---
npm install


Starten:
---
ng serve
... und im Browser aubrufen



In diesem Eval-Projekt geht es um 
-----
* two-way-databinding
* event-processing
* Referenz / Zugriff auf View-Bausteine



app.component.html
----
* hier ist eine Input-Box eingebunden. 
* wird ein "input"-Event ausgelöst, so wird es an an AppComponent.textInputEventProcessing() weiter gegeben

app.components.ts
----
* Die Events kommen hier in AppComponent.textInputEventProcessing() an und werden entsprechend verarbeitet






