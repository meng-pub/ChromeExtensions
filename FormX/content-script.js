// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//alert('FormX: content-cript!');

window.addEventListener ("load", onLoadMain, false);

function onLoadMain (evt) {
    // DO YOUR STUFF HERE.
    mdLogin("foo", "bar");

}


function mdLogin(user, pass){
    //let userNode = document.querySelector(".inputLogin");
    let userNode = document.querySelector("#id")
    let passNode = document.querySelector("#password");
    let buttonNode = document.querySelector("#butlogin");
    userNode.value = user;
    passNode.value = pass;
    buttonNode.click();

}