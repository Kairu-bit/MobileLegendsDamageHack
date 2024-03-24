import fs from "fs";
import { exec, execSync } from "child_process";
import { promisify } from "util";
import dns from "dns";
const utilExec = promisify(exec);
const yellow = "\u001b[1;33m";
const green = "\u001b[1;32m";
const red = "\u001b[1;31m";
const white = "\u001b[1;37m";
const blue = "\u001b[1;34m";
const underline = "\u001b[4m";
const reset = "\u001b[0m";
const info = `${blue}[+]${white} `;
const error = `${red}[×]${white} `;
const ask = `${yellow}[?]${white} `;
const NodeModules = `/data/data/com.termux/files/home/node_modules/`;
const UnityZip = `./.UnityFiles.zip`;
const Cache = `/data/data/com.termux/files/home/.cache/`;
const UnityFiles = ["7d804b32207537ee42a1932fad85e8cbc023d250897fb6b4c27e2da330e9eacb. Unity", "2d979f4f6d5c24d5ed63582337e1460e3ce4f2af20020d393161f7c9718f8b52.unity3d", "0f9d7afe39b6eb60f10b1d024a894c48538d68d21470a8ddfb950590029d0925.Unity", "90330d74fe95c04e44a76914dd0afea1492c915f883f481e302c30b25d6602af.Unity"];
const RequiredDependencies = ["inquirer", "figlet", "ora", "crypto", "adm-zip"];
const Storage = `/storage/emulated/0/`;
let MLDHSTAT = `ENABLE DAMAGE HACK`;
const author = `
${yellow}╔════════════════════════════════════════════╗
${yellow}║${blue}Author :${green} @Kairu Dev, @Jerrymie${yellow}              ║
${yellow}║${blue}Facebook :${green} @Kyle Tilano, @Dela Cruz Jerrymie${yellow}║
${yellow}║${blue}Telegram :${green} @KairuDev                        ${yellow}║
${yellow}╚════════════════════════════════════════════╝`;
let Logs;
let LogsParsed;
try{
  Logs = fs.readFileSync(".logs.json", { encoding: "utf8" });
}
catch($){
  console.log(error + `${yellow + underline}logs.json${reset + white} NOT FOUND`);
  process.exit();
}
try{
  LogsParsed = JSON.parse(Logs);
}
catch($){
  console.log(error + $);
  console.log(info + `DO NOT MODIFY ${yellow + underline}logs.json${reset + white} IF YOU DON'T WANT ANY PROBLEMS`);
  process.exit();
}
if (!fs.existsSync(UnityZip)){
  console.log(info + `${yellow + underline}UnityFiles.zip${reset + white} Not Found`);
  process.exit();
}
const MLData = `/sdcard/Android2/data/com.mobile.legends/`;
const MLDocuments = `/sdcard/Android2/data/com.mobile.legends/files/dragon2017/assets/Document/android/`;
const UnityShaderCache = `/sdcard/Android2/data/com.mobile.legends/cache/UnityShaderCache/`;
function checkStoragePermission(){
  try {
    fs.readdirSync(Storage);
  } catch ($) {
    console.log(`${error} ${$}
${info}Run ${yellow + underline}'termux-setup-storage'
${reset + info}Proceed by typing ${yellow + underline}'y' (for yes)${reset + white} and then press Enter 
${info}You will be prompted to grant storage permissions. Press ${yellow + underline}'Allow'${reset}`);
    process.exit();
  }
}
String.prototype.toTitle = function(){
  const titled = this.slice(0, 1).toUpperCase();
  return titled + this.slice(1, undefined);
}
checkStoragePermission();
setInterval(async function() {
  try{
    await dns.promises.lookup("www.google.com");
  }
  catch($){
    ExecClear();
    console.log(error + `No Internet Connection`);
    process.exit();
  }
}, 1000);
function ExecClear(){
  execSync("clear", { stdio: "inherit" });
}
if (!fs.existsSync(MLData)){
  console.log(error + 'Mobile Legends Data Not Found');
  process.exit();
}
if (!fs.existsSync(MLDocuments)){
  console.log(error + 'Mobile Legends Documents Not Found');
  process.exit();
}
async function InstallDependenciesAndPackages(requiredDependencies){
  if (!fs.existsSync(NodeModules)) {
    await utilExec(`mkdir -p ${NodeModules}`);
  }
  for (const requiredDependency of requiredDependencies) {
    const dependencyPath = `${NodeModules}${requiredDependency}`;
    if (!fs.existsSync(dependencyPath)) {
      console.log(`${info}Installing ${yellow}${underline}${requiredDependency.toTitle()}${reset}${white} Dependency`);
      try {
        execSync(`npm i --save ${requiredDependency}`, { stdio: "inherit" });
        console.log(`${info}${yellow}${underline}${requiredDependency.toTitle()}${reset}${white} Installed Successfully`);
      }
      catch ($) {
        console.log(info + "Failed to install Dependencies");
        console.log(error + `${$}`);
        process.exit();
      }
    }
  }
  console.log(info + `All Required Dependency & Packages Installed Successfully`)
}
await InstallDependenciesAndPackages(RequiredDependencies);

const { default : inquirer } = await import("inquirer");
const { default : ora } = await import("ora");
const { default : figlet } = await import("figlet");
const { default : crypto } = await import("crypto");
const { default : AdmZip } = await import("adm-zip");
let loading = ora({
  prefixText: info + "Authenticating",
  color: "green",
  spinner: "point",
  interval: 80
});
function createBanner(text, fonts = "4Max", color = green){
  const banner = figlet.textSync(text, fonts);
  return color + banner + reset;
}
class prompts {
  static main = {
    name: "command",
    type: "input",
    prefix: "",
    message: ask + "MLDamageHack~#",
    validate: (command) => {
      if ((command.trim() === "" || !/\d/.test(command)) || (command >= 4 || command <= 0)){
        return "\n" + error + "Invalid Option.\n" + info + "Choose an option from the menu.";
      }
      return true;
    }
  }
  static login = {
    name: "hexKey",
    type: "input",
    prefix: "",
    message: ask + "Hex Key " + yellow + "(press h to help)" + white + "~#",
    validate: async (hexKey) => {
      if (hexKey.trim() === ""){
        return error + `Invalid Hex Key`;
      }
      if (hexKey.toLowerCase() === "e" || hexKey.toLowerCase() === "exit"){
        return true;
      }
      if (hexKey.toLowerCase() === "h"){
        return `\n${green}**COMMANDS**\n${info + yellow + underline}author${reset + white} - LOGIN AS AUTHOR\n${info}${yellow + underline}b/buy${reset + white} - GET A KEY\n${info + yellow + underline}e/exit${reset + white} - EXIT`;
      }
      if (hexKey.toLowerCase() === "b" || hexKey.toLowerCase() === "buy"){
        FeedBack();
        process.exit();
      }
      if (hexKey.toLowerCase() === "author"){
        if (LogsParsed["adminKey"] === await HexSystemInfo() || LogsParsed["adminKey2"] === await HexSystemInfo()){
          return true;
        }
        else{
          return "\n" + info + `This key is currently being accessed from another device.\n${info}Want Access? Press b to buy a key`
        }
      }
      try{
        if (!LogsParsed["UsersKey"].includes(hexKey) && hexKey !== await HexSystemInfo()){
          return "\n" + info + `${yellow + underline}${hexKey + reset + white} Not Found\n${info}Want Access? Press b to buy a key`;
        }
        else if ((!LogsParsed["UsersKey"].includes(hexKey) && hexKey === await HexSystemInfo()) || LogsParsed["UsersKey"].includes(hexKey) && hexKey !== await HexSystemInfo()) {
          return "\n" + info + `${yellow + underline + hexKey}${reset + white} This key is currently being accessed from another device.\n${info}Want Access? Press b to buy a key`
        }
      }
      catch($){
        return "\n" + error + $ + "\n" + info + `DO NOT MODIFY ${yellow + underline}logs.json${reset + white} IF YOU DON'T WANT ANY PROBLEMS`;
      }
      return true;
    }
  }
  static startdmghack = {
    name: "command",
    input: "input",
    prefix: "",
    message: ask + "MLDamageHack~#",
    validate: (command) => {
      if ((command.trim() === "" || !/\d/.test(command)) || (command >= 4 || command <= 0)){
        return "\n" + error + "Invalid Option.\n" + info + "Choose an option from the menu.";
      }
      return true;
    }
  }
  static back = {
    name: "back",
    type: "input",
    prefix: "",
    message: ask + `Do you want to go back? (y/n, default: n)`,
  }
  static autoLogin = {
    name: "autoLogin",
    type: "input",
    prefix: "",
    message: ask + `Auto Login? (y/n, default: y)`,
  }
}
function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function animate(text, ms = 3){
  text = text.toString();
  for (const char of text){
    await delay(ms);
    process.stdout.write(char);
  }
  console.log();
}
async function exit(){
  await animate(info + `IF YOU ENCOUNTER ANY BUGS OR ISSUES, PLEASE FEEDBACK YOUR MESSAGE IS VALUABLE TO US :)`, 25);
  await animate(info + `THANKS FOR USING`, 25);
  process.exit();
}
function FeedBack(){
  execSync("xdg-open https://www.facebook.com/profile.php?id=100087485860234");
}
async function main(){
  ExecClear();
  const mainBanner = createBanner("mlhack");
  await animate(mainBanner);
  await animate(author);
  await animate(`
  ${green}{1}${yellow} --> ${blue}AUTHENTICATE
  ${green}{2}${yellow} --> ${blue}FEEDBACK
  ${green}{3}${yellow} --> ${blue}EXIT
`);
  let { command } = await inquirer.prompt(prompts.main);
  command = parseInt(command);
  if (command === 1){ // Auth 
    if (LogsParsed["autoLogin"]){
      ExecClear();
      console.log(info + "Auto Login Enabled");
      if (LogsParsed["UsersKey"].includes(await HexSystemInfo()) || LogsParsed["adminKey"] === await HexSystemInfo() || LogsParsed["adminKey2"] === await HexSystemInfo()){
        loading.start();
        await delay((Math.floor(Math.random() * 5)) * 5000);
        loading.stop();
        Start();
      }
      else{
        console.log(info + `Your Key Not Found\n${info}Want Access? Press b to buy a key`);
        process.exit();
      }
    }
    else{
      Auth();
    }
  }
  else if (command === 2){ // Feedback
    FeedBack();
    main();
  }
  else if (command === 3){ // Exit 
    exit();
  }
}
async function Auth(){
  ExecClear();
  const loginBanner = createBanner("login");
  await animate(loginBanner);
  await animate(author + "\n");
  const { hexKey } = await inquirer.prompt(prompts.login);
  if (hexKey.toLowerCase() === "e" || hexKey.toLowerCase() === "exit"){
    await exit();
  }
  loading.start();
  await delay((Math.floor(Math.random() * 5)) * 5000);
  loading.stop();
  if (!LogsParsed["autoLogin"]){
    const { autoLogin } = await inquirer.prompt(prompts.autoLogin);
    if (autoLogin.toLowerCase() === "n"){
      LogsParsed["autoLogin"] = false;
    }
    else{
      LogsParsed["autoLogin"] = true;
    }
  }
  Start();
}
async function HexSystemInfo(){
  try{
    const SystemIncremental = execSync("getprop ro.system.build.version.incremental");
    const SystemID = execSync("getprop ro.system.build.id");
    const IncrementalAndID = SystemIncremental.toString().trim() + SystemID.toString().trim();
    const HexKey = crypto.createHash("sha256").update(IncrementalAndID).digest("hex");
    return HexKey;
  }
  catch($){
    console.log($);
    process.exit();
  }
}
async function Start(){
  ExecClear();
  const mainBanner = createBanner("mlhack");
  await animate(mainBanner);
  await animate(author);
  if (LogsParsed["Enabled"]){
    MLDHSTAT = "DISABLE DAMAGE HACK";
  }
  else{
    MLDHSTAT = "ENABLE DAMAGE HACK";
  }
  await animate(`
  ${green}{1}${yellow} --> ${blue}${MLDHSTAT}
  ${green}{2}${yellow} --> ${blue}FEEDBACK
  ${green}{3}${yellow} --> ${blue}EXIT
`);
  let { command } = await inquirer.prompt(prompts.startdmghack);
  command = parseInt(command);
  if (command === 1){
    if (!LogsParsed["Enabled"]){
      const files  = new AdmZip(UnityZip);
      const filesEntries = files.getEntries();
      for (let i = 0; i < filesEntries.length; i++){
        if (UnityFiles.includes(filesEntries[i]["entryName"]) && filesEntries.length === 4){
          files.extractAllTo(Cache, true, true, "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918");
          try{
            execSync(`mv '${Cache.concat(filesEntries[i]["entryName"])}' ${MLDocuments}`);
          }
          catch($){
            console.log(error + `Error occured adding : ${yellow}${filesEntries[i]["entryName"].slice(undefined, -10).concat("...")}`);
            process.exit();
          }
        }
        else{
          console.log(info + `Missing some unity files :(`);
          process.exit();
        }
      }
      for (let i = 0; i < UnityFiles.length; i++){
        loading.prefixText = info + `Integrating > ${yellow + UnityFiles[i].slice(undefined, -20).concat('...')}`;
        loading.start();
        await delay((Math.floor(Math.random() * 10)) + 4000);
        loading.stop();
        console.log(info + `Integration Successful > ${yellow + UnityFiles[i].slice(undefined, -20).concat('...')}`);
      }
      loading.prefixText = info + `Deleting ${yellow + UnityShaderCache}`;
      loading.start();
      await delay((Math.floor(Math.random() * 5)) + 4000);
      loading.stop();
      LogsParsed["Enabled"] = true;
      fs.writeFileSync("./.logs.json", JSON.stringify(LogsParsed), { "encoding": "utf8" });
      await animate(info + `YOU CAN NOW OPEN YOUR MOBILE LEGENDS APP`);
      await animate(info + `DAMAGE HACK INJECTED SUCCESSFULLY`);
      const { back } = await inquirer.prompt(prompts.back);
      if (back.toLowerCase() === "y"){
        Start();
      }
      else{
        exit();
      }
    }
    else{
      for (let i = 0; i < UnityFiles.length; i++){
        loading.prefixText = info + `Deleting ${UnityFiles[i]}`;
        loading.start();
        await delay((Math.floor(Math.random() * 3)) + 400)
        execSync(`rm '${MLDocuments.concat(UnityFiles[i])}'`);
        loading.stop();
      }
      LogsParsed["Enabled"] = false;
      fs.writeFileSync("./.logs.json", JSON.stringify(LogsParsed), { "encoding": "utf8" });
      await animate(info + `YOU CAN NOW OPEN YOUR MOBILE LEGENDS APP`);
      await animate(info + `DAMAGE HACK REMOVE SUCCESSFULLY`);
      const { back } = await inquirer.prompt(prompts.back);
      if (back.toLowerCase() === "y"){
        Start();
      }
      else{
        exit();
      }
    }
  }
  else if (command === 2){ // FeedBack
    FeedBack();
    Start();
  }
  else if (command === 3){ // EXIT 
    exit();
  }
}
main();
process.on("SIGINT", () => {
  console.log(info + `Keyboard Interrupt`);
  process.exit();
})
