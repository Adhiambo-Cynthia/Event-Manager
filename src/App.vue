<template>
  <div id="app">
    <navbar />
    <Notificationcont />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Lobster&family=Lobster+Two:wght@700&family=Marcellus+SC&display=swap');
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
#app {
  box-sizing: border-box;
  width: 80%;
  padding: 0 20px 20px;
  margin: auto;
  align-content: center;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
a {
  color: white;
  font-weight: bolder;
  margin-right: 10px;
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-decoration: none;
  background-color:rgb(61, 0, 0); 
  padding: 3px;
  border-radius: 4px;

}
a:hover{
  opacity: 0.7;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  
  align-items: center;
}
h1 {
  font-family: 'Fredericka the Great', cursive;
  font-size: 50px;
  font-weight: 700;
}
h2 {
  font-family: 'Marcellus SC', serif;
  font-size: 38px;
  font-weight: 700;
}
h3 {
  font-size: 28px;
  font-weight: 700;
}
h4 {
  font-size: 21px;
  font-weight: 700;
}
h5 {
  font-size: 16px;
  font-weight: 700;
}
h6 {
  font-size: 15px;
  font-weight: 700;
}
b,
strong {
  font-weight: bolder;
}
small {
  font-size: 80%;
}
.eyebrow {
  font-size: 20px;
  
}
.errorMessage{
  color: rgb(202, 17, 17);
}
.-text-primary {
  color: #39b982;
}
.-text-base {
  color: #000; 
}
.-text-error {
  color: tomato;
}
.-text-success {
  color: blue;
}
.-text-gray {
  color: rgba(0, 0, 0, 0.5);
}
.-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
.badge {
  display: inline-flex;
  height: 26px;
  width: 40px;
  padding: 0 7px;
  margin: 0 5px;
  background: transparent;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
  line-height: 26px;
  text-align: center;
}
.badge.-fill-gradient {
  background: linear-gradient(to right, #77034a, #380101);
  color: #fff;
}

label,
input,
optgroup,
select,
textarea {
  display: inline-flex;
  font-family: 'Open sans', sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  
}

input {
  overflow: visible;
}

select {
  text-transform: none;
}
/* button,
[type='button'],
[type='reset'],
[type='submit'] {
   
} */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 2px solid #39b982;
}
label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}
input,
textarea {
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
}
textarea {
  width: 100%;
  overflow: auto;
  font-size: 20px;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
[type="text"],
[type="number"],
[type="search"],
[type="password"] {
  height: 52px;
  width: 100%;
  padding: 0 10px;
  font-size: 20px;
}
[type="text"]:focus,
[type="number"]:focus,
[type="search"]:focus,
[type="password"]:focus {
  border-color: #39b982;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
[hidden] {
  display: none;
}
select {
  width: 100%;
  height: 52px;
  padding: 0 24px 0 10px;
  vertical-align: middle;
  background: #fff
    url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  background-size: 8px 10px;
  border: solid 1px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
select:focus {
  border-color: #39b982;
  outline: 0;
}
select:focus::ms-value {
  color: #000;
  background: rgb(145, 142, 142);
}
select::ms-expand {
  opacity: 0;
}
</style>
<script>
import navbar from "@/components/nav.vue";
import Notificationcont from '@/components/Notificationcont.vue';

export default {
  components: {
    navbar,
    Notificationcont
  }
}
</script>
