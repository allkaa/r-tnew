/* // +build ignore */

package main

//#include <stdio.h>
//#include <stdlib.h>
//int strlenM(char *strIn)
//{
//	int i;
//	i = 0;
//	do {
//		if (strIn[i] == '\0') break;
//		i = i + 1;
//	} while (strIn[i] != '\0');
//	return i;
//}
//char *doDecrypt(char *strVar, int blnOdd)
//{
//	static char strRetDoDecrypt[9]; /* must be static for successful return */
//	int i, intLen, intError;
//	int intArr[8]; /* 0,...,7 indexes */
//	int intArrDecr[8]; /* 0,...,7 indexes */
//	int intTemp[8]; /* 0,...,7 indexes */
//	int intOdd[8][2]; /* 0,...,7  and 0,1 indexes */
//	int intEven[8][2]; /* 0,...,7 and 0,1 indexes */
//	int intMatrix[8][2]; /* 0,...,7 and 0,1 indexes */
//	for (i = 0; i < 9; i = i + 1) strRetDoDecrypt[i] = '\0';
//	intLen = strlenM(strVar); /* count of chars in strVar[], last '\0' NOT included */
//	if ((intLen == 0) || (intLen < 6) || (intLen > 8)) {
//		strRetDoDecrypt[0] = '\0'; /* empty string */
//		return strRetDoDecrypt;
//	}
//	for (i = 0; i < 8; i = i + 1) intArr[i] = 0;
//	intError = 0; /* 0 is False, 1(non zero) is True */
//	for (i = 0; i < intLen; i = i + 1) {
//		intArr[i] = strVar[i] - '0';
//		if (intArr[i] > 9) {
//			intError = 1;
//			break;
//		}
//	}
//	if (intError) {
//		strRetDoDecrypt[0] = '\0'; /* empty string */
//		return strRetDoDecrypt;
//	}
//	for (i = 0; i < 8; i = i + 1) intArrDecr[i] = 0;
//	for (i = 0; i < 8; i = i + 1) intTemp[i] = 0;
//	if (intLen == 6) {
//		intOdd[0][0] = 5; intOdd[0][1] = 4;
//		intOdd[1][0] = 2; intOdd[1][1] = 0;
//		intOdd[2][0] = 4; intOdd[2][1] = 3;
//		intOdd[3][0] = 6; intOdd[3][1] = 2;
//		intOdd[4][0] = 8; intOdd[4][1] = 5;
//		intOdd[5][0] = 1; intOdd[5][1] = 1;
//		intEven[0][0] = 8; intEven[0][1] = 5;
//		intEven[1][0] = 1; intEven[1][1] = 4;
//		intEven[2][0] = 5; intEven[2][1] = 0;
//		intEven[3][0] = 2; intEven[3][1] = 1;
//		intEven[4][0] = 9; intEven[4][1] = 3;
//		intEven[5][0] = 6; intEven[5][1] = 2;
//	}
//	else if (intLen == 7) {
//		intOdd[0][0] = 5; intOdd[0][1] = 5;
//		intOdd[1][0] = 2; intOdd[1][1] = 0;
//		intOdd[2][0] = 4; intOdd[2][1] = 3;
//		intOdd[3][0] = 6; intOdd[3][1] = 2;
//		intOdd[4][0] = 8; intOdd[4][1] = 6;
//		intOdd[5][0] = 1; intOdd[5][1] = 1;
//		intOdd[6][0] = 9; intOdd[6][1] = 4;
//		intEven[0][0] = 8; intEven[0][1] = 5;
//		intEven[1][0] = 1; intEven[1][1] = 6;
//		intEven[2][0] = 5; intEven[2][1] = 0;
//		intEven[3][0] = 2; intEven[3][1] = 4;
//		intEven[4][0] = 9; intEven[4][1] = 3;
//		intEven[5][0] = 6; intEven[5][1] = 1;
//		intEven[6][0] = 4; intEven[6][1] = 2;
//	}
//	else {
//		intOdd[0][0] = 5; intOdd[0][1] = 6;
//		intOdd[1][0] = 2; intOdd[1][1] = 0;
//		intOdd[2][0] = 4; intOdd[2][1] = 3;
//		intOdd[3][0] = 6; intOdd[3][1] = 2;
//		intOdd[4][0] = 8; intOdd[4][1] = 7;
//		intOdd[5][0] = 1; intOdd[5][1] = 1;
//		intOdd[6][0] = 9; intOdd[6][1] = 4;
//		intOdd[7][0] = 3; intOdd[7][1] = 5;
//		intEven[0][0] = 8; intEven[0][1] = 5;
//		intEven[1][0] = 1; intEven[1][1] = 6;
//		intEven[2][0] = 5; intEven[2][1] = 0;
//		intEven[3][0] = 2; intEven[3][1] = 4;
//		intEven[4][0] = 9; intEven[4][1] = 3;
//		intEven[5][0] = 6; intEven[5][1] = 7;
//		intEven[6][0] = 4; intEven[6][1] = 2;
//		intEven[7][0] = 7; intEven[7][1] = 1;
//	}
//
//	if (blnOdd) for (i = 0; i < 8; i = i + 1) {
//		intMatrix[i][0] = intOdd[i][0];
//		intMatrix[i][1] = intOdd[i][1];
//	}
//	else for (i = 0; i < 8; i = i + 1) {
//		intMatrix[i][0] = intEven[i][0];
//		intMatrix[i][1] = intEven[i][1];
//	}
//	for (i = 0; i < intLen; i = i + 1) {
//		intTemp[i] = intArr[i] - intMatrix[i][0];
//		if (intTemp[i] < 0)
//			intTemp[i] = intTemp[i] + 10;
//		intArrDecr[intMatrix[i][1]] = intTemp[i];
//	}
//	for (i = 0; i < intLen; i = i + 1) {
//		strRetDoDecrypt[i] = intArrDecr[i] + '0';
//	}
//	strRetDoDecrypt[i] = '\0';
//	return strRetDoDecrypt;
//}
import "C"
import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"
	"strings"
	"time"
	"unsafe"
)

const pageNameIni = string("index.html") // string("index.html") or string("indexForm.html")
const dir = string("./build")

// project WinTicsCheckNoSslTEST new at 'http://10.8.194.3:9994/'
const urlval = "http://10.8.194.3:9994/"
const reqStringVal = urlval + "?agent=58&type=2&command=checkval&ticket_number=" // + search;
const urlpay = "http://10.8.194.3:38000/"                                        // project PayTest ver. 4.0 NoSsl.
var txnid int = 10000000

func handlerReq(w http.ResponseWriter, r *http.Request) {
	//dir := "./build"
	//fmt.Fprintf(w, "The URL.Path[1:] is %s", r.URL.Path[1:])
	// initial r.Method: "GET" r.URL.Path e.g. "/" or "/script.js" or "/external-link-52.png" or "/favicon.ico" r.RequestURI e.g. "/" or "/?first=1&second=2
	// after form method="get" r.Method: "GET" r.URL.Path e.g. /formAKpay" r.RequestURI e.g. "/formAKpay?game=KN&n1=2&n2=1&q=15"
	// after form method="post" r.Method: "POST" r.URL.Path "/formAKpay" r.RequestURI "/formAKpay" r.Body []uint8 with e.g. (length: 20, cap: 512)
	fmt.Println("r.Mehtod:", r.Method, "r.URL.Path:", r.URL.Path, "r.RequsetURI:", r.RequestURI)
	var filename string = ""
	// Processing GET or PUT method.
	if r.Method == "GET" {
		// initial r.Method: "GET" r.URL.Path e.g. "/" or "/script.js" or "/external-link-52.png" or "/favicon.ico" r.RequestURI e.g. "/" or "/?first=1&second=2
		// after form method="get" r.Method: "GET" r.URL.Path e.g. /formAKpay" r.RequestURI e.g. "/formAKpay?game=KN&n1=2&n2=1&q=15"
		if r.URL.Path == "/" { // if r.URL.Path is "/" then default initial page wll be used and r.RequestURI info will be ignored.
			filename = dir + "/" + pageNameIni
			filecontent, err := ioutil.ReadFile(filename)
			if err == nil {
				w.Header().Set("Content-Type", "text/html")
				fmt.Fprintf(w, "%s", filecontent)
			} else {
				fmt.Fprintf(w, "File not found %s", filename)
			}
		} else {
			if r.URL.Path == r.RequestURI { // files refered from initial page.
				filename = dir + r.URL.Path
				//ttt := r.URL.Path[1:] // get "" or "script.js" or "external-link-52.png" or "favicon.ico"
				//fmt.Println(ttt)
				filecontent, err := ioutil.ReadFile(filename)
				if err == nil {
					if strings.LastIndex(filename, ".svg") != -1 {
						// w.Header().Set("Content-Type", "text/plain; charset=utf-8") // normal header
						w.Header().Set("Content-Type", "image/svg+xml")
					} else if strings.LastIndex(filename, ".css") != -1 {
						w.Header().Set("Content-Type", "text/css")
					} else if strings.LastIndex(filename, ".js") != -1 {
						w.Header().Set("Content-Type", "application/javascript")
					} else if strings.LastIndex(filename, ".json") != -1 {
						w.Header().Set("Content-Type", "application/json")
					} else if strings.LastIndex(filename, ".map") != -1 {
						w.Header().Set("Content-Type", "application/map")
					} else if strings.LastIndex(filename, ".ico") != -1 {
						w.Header().Set("Content-Type", "image/bmp")
					} else if strings.LastIndex(filename, ".png") != -1 {
						w.Header().Set("Content-Type", "image/png")
					} else if strings.LastIndex(filename, ".jpg") != -1 || strings.LastIndex(filename, ".jpeg") != -1 {
						w.Header().Set("Content-Type", "image/jpeg")
					} else if strings.LastIndex(filename, ".html") != -1 {
						w.Header().Set("Content-Type", "text/html")
					} else {
						w.Header().Set("Content-Type", "application/octet-stream")
					}
					fmt.Fprintf(w, "%s", filecontent)
				} else {
					fmt.Fprintf(w, "File not found %s", filename)
				}
			} else { // r.URL.Path != r.RequestURI
				// form method="get" r.Method: "GET" r.URL.Path e.g. /formAKpay" r.RequestURI e.g. "/formAKpay?game=KN&n1=2&n2=1&q=15"
				//fmt.Fprintf(w, "Form called %s", r.RequestURI)
				fmt.Printf("Form called %s\n", r.RequestURI)
				/*
					t1 := "0123456789"
					t2 := strings.Index(t1, "5")
					t3 := strings.Index(t1, "8")
					t4 := t1[t2 : t3] // get substring starting from "5" up to not include "8"
					fmt.Println(t1, t2, t3, t4) // 0123456789 5 8 567
				*/
				var strSearch string = ""
				var strTicnum string = ""
				var strPage string = ""
				var pos1 int = -1
				if strings.Index(r.RequestURI, "/formAKchk?") != -1 {
					//r.RequestURI e.g. "/formAKchk?q=123-12345678-1234567"
					pos1 = strings.Index(r.RequestURI, "/formAKchk?q=")
					strTicnum = r.RequestURI[pos1+13:]
					//fmt.Fprintf(w, "Form formAKchk called with ticket number %s", strTicnum)
					strPage = checkValTicket(strTicnum)
					w.Header().Set("Content-Type", "text/html")
					fmt.Fprintf(w, "%s", strPage)
				} else if strings.Index(r.RequestURI, "/formAKpay?") != -1 {
					pos1 = strings.Index(r.RequestURI, "/formAKpay?q=")
					strSearch = r.RequestURI[pos1+13:] // e.g. "6_1_1_a_04_05_09_12_34_51"
					//fmt.Fprintf(w, "Form formAKpay called with params %s", strSearch)
					strPage = buyTicket(strSearch)
					w.Header().Set("Content-Type", "text/html")
					fmt.Fprintf(w, "%s", strPage)
				} else if strings.Index(r.RequestURI, "/formAKresults?") != -1 {
					pos1 = strings.Index(r.RequestURI, "/formAKresults?q=")
					strSearch = r.RequestURI[pos1+17:]
					fmt.Fprintf(w, "Form formAKresults called with params %s", strSearch)
					//strPage = getResults(game, drawnum)
					//w.Header().Set("Content-Type", "text/html")
					//fmt.Fprintf(w, "%s", strPage)
				} else {
					fmt.Fprintf(w, "NB!!! Unknown form called with URI: %s", r.RequestURI)
				}
			}
		} // End of r.URL.Path != "/" processing
		// End of processing GET method.
		// Processing POST method.
	} else if r.Method == "POST" {
		// after form method="post" r.Method: "POST" r.URL.Path "/formAKpay" r.RequestURI "/formAKpay" r.Body []uint8 with e.g. (length: 20, cap: 512)
		defer r.Body.Close()
		body, err := ioutil.ReadAll(r.Body) // body will be []uint8 with e.g. (length: 20, cap: 512) err will be <nil>
		// e.g. [103 97 109 101 61 75 78 38 110 49 61 49 38 110 50 61 50 38 113 61] <nil>
		fmt.Println(body, err)
		strBody := string(body) // e.g. "game=KN&n1=1&n2=2&q=" or e.g. "game=SL&n1=&n2=2&q=qwerty"
		fmt.Println(strBody)
		fmt.Fprintf(w, "Unimplemeted POST method")
	} else {
		fmt.Fprintf(w, "Unimplemeted method: %s", r.Method)
	}
	// End of processing POST method.
}

func buyTicket(strSearch string) string { // strSearch e.g. "6_1_1_a_04_05_09_12_34_51"
	var reqStringPay string = urlpay + strCmd(strSearch)
	txnid = txnid + 1
	fmt.Println(txnid)
	return "Form formAKpay called with params " + reqStringPay
}

func strCmd(ticreq string) string {
	// e.g. '?agent=16&type=2&command=pay&date=20201020&txn_id=' + txn_id + '&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0';
	//var strAgent string = "16"
	//var boardKeno int = 10
	//var boardSl int = 15
	//var boardMx int = 10
	//var boardTr int = 3
	// ticreq e.g. "6_1_1_a_10_19_27_34_49_50"
	var reqArr []string = strings.Split(ticreq, "_") //ticreq.split("_")
	fmt.Printf("%q\n", reqArr)
	// e.g. (10) ["6" "1" "1" "a" "10" "19" "27" "34" "49" "50"]
	//           [game, draws, stake, auto/manual, ...]
	var strSearch string = ""
	if len(reqArr) < 3 {
		return ""
	}
	//let dtVar = new Date();
	var dtVar time.Time = time.Now()
	year, month, day := dtVar.Date()
	var strYear string = strconv.Itoa(year)        // e.g. "2021"
	var strMonth string = strconv.Itoa(int(month)) // e.g. "1" or "12"
	var strDay string = strconv.Itoa(day)          // e.g. "1" or "31"
	fmt.Println(strYear, strMonth, strDay)
	if len(strMonth) == 1 {
		strMonth = "0" + strMonth
	}
	if len(strDay) == 1 {
		strMonth = "0" + strDay
	}
	fmt.Println(strYear, strMonth, strDay)
	// <==================== temp return ==========================>
	strSearch = ticreq
	return strSearch
}

func getResults(game string, drawnum string) string {
	return ""
}

func checkValTicket(strTicnum string) string {
	var sum string = "-999" // initial as error.
	var bytRep []byte
	var err error
	//var errMsg string = "Unknown error"
	res, err := http.Get(reqStringVal + strTicnum)
	if err != nil {
		//log.Fatal(err)
		//return sum
		//errMsg = "Connection failed"
	} else {
		bytRep, err = ioutil.ReadAll(res.Body)
		res.Body.Close()
		if err != nil {
			//log.Fatal(err)
			//return sum
			//errMsg = "XML reply reading failed"
		} else {
			strXML := string(bytRep)
			fmt.Printf("%s\n", strXML)
			var pos1 int = -1
			var pos2 int = -1
			pos1 = strings.Index(strXML, "<sum>")
			pos2 = strings.Index(strXML, "</sum>")
			if (pos1 != -1) && (pos2 != -1) && (pos2 >= pos1+9) {
				sum = strXML[pos1+5 : pos2]
			}
		}
	}
	var ticinfo string = ""
	if sum == "-1.00" {
		ticinfo = "Большой выигрыш!!!."
	} else if sum == "-2.00" {
		ticinfo = "Билет уже выплачен."
	} else if sum == "-3.00" {
		ticinfo = "Билет выплачен с обменным билетом."
	} else if sum == "-4.00" {
		ticinfo = "Билет аннулирован."
	} else if sum == "0.00" {
		ticinfo = "Билет не выиграл."
	} else if sum == "-999" {
		ticinfo = "Ошибка при обработке запроса - " + err.Error()
	} else {
		ticinfo = "Ваш виграш ${sum} грн."
	}
	//fmt.Fprintf(w, "Form formAKchk called with ticket number %s reply as %s", strTicnum, ticinfo)
	var strPage string = ""
	strPage = strPage + "<!DOCTYPE html>"
	strPage = strPage + "<html lang=\"en\">"
	strPage = strPage + "<head>"
	strPage = strPage + "<meta charset=\"utf-8\" />"
	strPage = strPage + "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />"
	strPage = strPage + "<title>Ticket info</title>"
	strPage = strPage + "<style>"
	strPage = strPage + "#ticinfo {"
	//strPage = strPage + "width: 70%;"
	strPage = strPage + "margin: 3% 3% 3% 3%;"
	strPage = strPage + "background-color: #dfdbdb;"
	strPage = strPage + "border: thick solid black;"
	strPage = strPage + "outline: dashed red;"
	strPage = strPage + "}"
	strPage = strPage + "#ticback {"
	strPage = strPage + "display: block;"
	strPage = strPage + "width: 10%;"
	strPage = strPage + "margin: 3% 3% 3% 3%;"
	strPage = strPage + "padding: 1% 1% 1% 1%;"
	strPage = strPage + "color: white;"
	strPage = strPage + "background-color: blue;"
	strPage = strPage + "border: thin solid black;"
	strPage = strPage + "border-radius: 15%;"
	strPage = strPage + "text-decoration:none;"
	strPage = strPage + "}"
	strPage = strPage + "#ticket {"
	strPage = strPage + "display: block;"
	strPage = strPage + "margin: 3% 3% 3% 3%;"
	strPage = strPage + "padding: 1% 1% 1% 1%;"
	strPage = strPage + "background-color: white;"
	strPage = strPage + "border: thin solid black;"
	strPage = strPage + "}"
	//strPage = strPage + ""
	strPage = strPage + "</style>"
	strPage = strPage + "</head>"
	strPage = strPage + "<body>"
	strPage = strPage + "<div id=\"ticinfo\">"
	strPage = strPage + "<a id=\"ticback\" href=\"/\">Back</a>"
	strPage = strPage + "<p id=\"ticket\">"
	strPage = strPage + ticinfo
	strPage = strPage + "</p>"
	strPage = strPage + "</div>"
	strPage = strPage + "</body>"
	strPage = strPage + "</html>"
	//strPage = strPage + ""
	return strPage
}

func main() {
	fmt.Println("ListenAndServe http://localhost:8080/")
	http.HandleFunc("/", handlerReq)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func decrNum(strEnc string) string {
	// Old format: decr(strEnc string, blnOdd bool) -> blnOdd is False for Even julian (0), or True for Odd julian (1).
	// strEnc e.g. "051-52749309-5226022"
	//             "01234567890123456789"
	var strDec string = ""
	var strTic string = ""
	var blnOdd bool = false
	var err error
	var intVar int = 0
	if len(strEnc) != 20 {
		return ""
	}
	if strEnc[3:4] != "-" || strEnc[12:13] != "-" {
		return ""
	}
	intVar, err = strconv.Atoi(strEnc[0:3])
	if err != nil {
		return ""
	}
	strTic = strTic + strEnc[0:3] + "-"
	if intVar%2 == 0 {
		blnOdd = false
	} else {
		blnOdd = true
	}
	intVar, err = strconv.Atoi(strEnc[4:12])
	if err != nil {
		return ""
	}
	csEnc := C.CString(strEnc[4:12])
	//intLen := C.strlenM(cs)
	//csDec := C.doDecrypt(csEnc, 0) // non needed and can not be freed later.
	if blnOdd {
		strDec = C.GoString(C.doDecrypt(csEnc, 1)) // second parameter is 1 (true) for Odd julian.
	} else {
		strDec = C.GoString(C.doDecrypt(csEnc, 0)) // second parameter is 0 (false) for Even julian.
	}
	C.free(unsafe.Pointer(csEnc))
	if strDec == "" {
		return ""
	}
	strTic = strTic + strDec + "-"
	intVar, err = strconv.Atoi(strEnc[13:])
	if err != nil {
		return ""
	}
	csEnc = C.CString(strEnc[13:])
	if blnOdd {
		strDec = C.GoString(C.doDecrypt(csEnc, 1)) // second parameter is 1 (true) for Odd julian.
	} else {
		strDec = C.GoString(C.doDecrypt(csEnc, 0)) // second parameter is 0 (false) for Even julian.
	}
	C.free(unsafe.Pointer(csEnc))
	if strDec == "" {
		return ""
	}
	strTic = strTic + strDec
	//intLen := C.strlenM(cs)
	//csDec := C.doDecrypt(csEnc, 0) // non needed and can not be freed later.
	//fmt.Println(strDec)
	//strDec = C.GoString(C.doDecrypt(csEnc, 1)) // Odd julian.
	//fmt.Println(strDec)
	//C.free(unsafe.Pointer(csEnc))
	//C.free(unsafe.Pointer(csDec)) // can not be freed later.
	return strTic
}

func decrGG(strEnc string) string {
	// strEnc e.g. "775388"
	//             "012345"
	var strDec string = ""
	//var err error
	//var intVar int = 0
	if len(strEnc) != 6 {
		return ""
	}
	intVar, err := strconv.Atoi(strEnc[0:])
	if err != nil {
		return ""
	}
	intVar = intVar + 0 // artificially use intVar for successful compilation.
	csEnc := C.CString(strEnc[0:])
	strDec = C.GoString(C.doDecrypt(csEnc, 0)) // non needed and can not be freed later.
	C.free(unsafe.Pointer(csEnc))
	if strDec == "" {
		return ""
	}
	return strDec
}

func mainTest() {
	var strEnc string
	var strDec string = ""
	// ./ unld 775388 051-52749309-5226022
	//012969 051 -02831601-0108302
	//strEnc = "52749309"
	//strDec = decr(strEnc, true) // Second parameter is False for Even julian, or True for Odd julian.
	strEnc = "775388"
	strDec = decrGG(strEnc) // Second parameter is False for Even julian, or True for Odd julian.
	fmt.Println(strDec)
	strEnc = "051-52749309-5226022"
	strDec = decrNum(strEnc) // Second parameter is False for Even julian, or True for Odd julian.
	fmt.Println(strDec)
	// ./unld 785391 132-55516848-4260932
	//015079 132 - 01079742 - 1780861
	//strEnc = "55516848"
	//strDec = decr(strEnc, false) // Second parameter is False for Even julian, or True for Odd julian.
	strEnc = "785391"
	strDec = decrGG(strEnc) // Second parameter is False for Even julian, or True for Odd julian.
	fmt.Println(strDec)
	strEnc = "132-55516848-4260932"
	strDec = decrNum(strEnc) // Second parameter is False for Even julian, or True for Odd julian.
	fmt.Println(strDec)
}
