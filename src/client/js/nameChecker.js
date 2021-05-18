function checkForName(str) {
    console.log("::: Running checkForName :::", str);
    const r = new RegExp(/^(http|https):\/\/[^ "]+$/);
    if (r.test(str)) {
      console.log("ran fuction and passed")
      return true;
     }
     else {
       console.log("ran fuction and failed")
       return false;
  }
}

export { checkForName }
