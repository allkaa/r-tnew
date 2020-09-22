// myInfoRef2.current.textContent = '';
//ref={myInfoRef2}

//tot = 15 * drawnum * sysnum * cmbnum * stake;
let cmbnum;
let system_flag = false;
let cs, system, as, c1, c2, c3, c4, c5, c6;
function Duplicate(strCmb, count) {
  let blnDuplicate = false;
  let k, j;
  for (k=0; k<count; k++) {
    for (j=0; j<count; j++) {
      if (j !== k) {
        if (strCmb[j] === strCmb[k]) {
          blnDuplicate = true;
          //alert('Ошибка! Дублирование номера в xxx комбинации');
          break;
        }
      }
    }
    if (blnDuplicate) break;
  }
  return blnDuplicate;
}

function CalcSumSL(event) {
  let strCmb;
  let blnDuplicate = false;
  cmbnum = 0;
  if (system_flag) {
    strCmb = cs;
    let sys = Number(system);
    if (strCmb.indexOf('00') === -1) {
      blnDuplicate = Duplicate(strCmb, sys);
      if (! blnDuplicate) {
        cmbnum = 1;
      }
    }
  } // end of if (system_flag) {
  else {
    for (let i = 1; i < 7; i++) {
      if (i === 1) {
        strCmb = c1;
        if (strCmb.indexOf('00') === -1) {
          blnDuplicate = Duplicate(strCmb, 6);
          if (! blnDuplicate) {
            cmbnum = cmbnum + 1;
          }
          else {
            //alert('Ошибка! Дублирование номера в первой комбинации');
            break;
          }
        }
      }
      else if (i === 2) {
        strCmb = c2;
        if (strCmb.indexOf('00') === -1) {
          blnDuplicate = Duplicate(strCmb, 6);
          if (! blnDuplicate) {
            cmbnum = cmbnum + 1;
          }
          else {
            //alert('Ошибка! Дублирование номера во второй комбинации');
            break;
          }
        }
      }
      else if (i === 3) {
        strCmb = c3;
        //console.log(strCmb);
        if (strCmb.indexOf('00') === -1) {
          blnDuplicate = Duplicate(strCmb, 6);
          if (! blnDuplicate) {
            cmbnum = cmbnum + 1;
          }
          else {
            //alert('Ошибка! Дублирование номера в третьей комбинации');
            break;
          }
        }
      }
      else if (i === 4) {
        strCmb = c4;
        //console.log(strCmb);
        if (strCmb.indexOf('00') === -1) {
          blnDuplicate = Duplicate(strCmb, 6);
          if (! blnDuplicate) {
            cmbnum = cmbnum + 1;
          }
          else {
            //alert('Ошибка! Дублирование номера в четвертой комбинации');
            break;
          }
        }
      }
      else if (i === 5) {
        strCmb = c5;
        //console.log(strCmb);
        if (strCmb.indexOf('00') === -1) {
          blnDuplicate = Duplicate(strCmb, 6);
          if (! blnDuplicate) {
            cmbnum = cmbnum + 1;
          }
          else {
            //alert('Ошибка! Дублирование номера в пятой комбинации');
            break;
          }
        }
      }
      else if (i === 6) {
        strCmb = c6;
        //console.log(strCmb);
        if (strCmb.indexOf('00') === -1) {
          blnDuplicate = Duplicate(strCmb, 6);
          if (! blnDuplicate) {
            cmbnum = cmbnum + 1;
          }
          else {
            //alert('Ошибка! Дублирование номера в шестой комбинации');
            break;
          }
        }
      }
    } //end of (let i = 1; i < 7; i++).
  } // end of NOT if (system_flag) {
} // end of function handleSubmitPayTTT(event)
