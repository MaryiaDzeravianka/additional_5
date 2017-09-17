module.exports = function check(str, bracketsConfig) {
  let st = []; // массив открытых скобок

  for (let i = 0; i < str.length; i++) {
    let simbol = str[i];
    let index;
    for (let j = 0; j < bracketsConfig.length; j++) {
      let a = bracketsConfig[j][0];
      let b = bracketsConfig[j][1];
      if (simbol == b) {
        if (st.length || a == b) {
          if (st[st.length - 1] == a) {
            let pop = st.pop();
            break;
          }
        } else {
          return false;
        }
      }
      if (simbol == a) {
        st.push(simbol);
        break;
      }
    }
  }
  if (!st.length) {
    return true;
  }
  return false;
}
