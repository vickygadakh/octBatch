to install latest version of angular  : nom i -g @angular/cli
to install angular cli versionwise : npm i -g @angular/cli16
to check install or not : ng v

create project : ng new projectName

failure: delete node_modules folder and regenerate it by:npm i or npm install
or if node module not present in structure create new project again

to run project always open terminal on project folder : ng serve/ ng s /ng serve
--open / ng s -o

to resolve powershell unuthorised issue : set-executionpolicy -Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

after taking pull my branch if u want to run my code >> npm i then ng s -o

copmo: ng g c home

CURD : CREATE update read delet
create : post -
API call : import HttpClinentModule into module.ts
create service : import httpclint class into the service inject its dependancy into 
constructor .
create a common function to make API call, return response to the componanat

from componant: call that api call function into a componant with argument 
subscribe the response given by the server.