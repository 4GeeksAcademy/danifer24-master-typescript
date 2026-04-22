function extend(obj1: any, obj2: any): unknown[] {
  // your code here
    for(let key in obj2){
      if(!obj1[key]){
        obj1[key] = obj2[key];
      };
    }
    return obj1;
}

export {};
