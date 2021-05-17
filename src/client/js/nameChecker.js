function checkForName(str) {
    console.log("::: Running checkForName :::", str);
    const r = new RegExp(/^(http|https):\/\/[^ "]+$/);
    if (r.test(str)) {
        return true;
        console.log("ran fuction and passed")
     }
     else {
        return false;
        console.log("ran fuction and failed")
  }
}

export { checkForName }
