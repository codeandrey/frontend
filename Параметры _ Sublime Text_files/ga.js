<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> <html><head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <title>ПОМИЛКА: Запитаний URL не може бути отриманий.</title> <style type="text/css"><!--   /*
 Stylesheet for Squid Error pages
 Adapted from design by Free CSS Templates
 http://www.freecsstemplates.org
 Released for free under a Creative Commons Attribution 2.5 License
*/

/* Page basics */
* {
	font-family: verdana, sans-serif;
}

html body {
	margin: 0;
	padding: 0;
	background: #efefef;
	font-size: 12px;
	color: #1e1e1e;
}

/* Page displayed title area */
#titles {
	margin-left: 15px;
	padding: 10px;
	padding-left: 100px;
	background: url('http://www.squid-cache.org/Artwork/SN.png') no-repeat left;
}

/* initial title */
#titles h1 {
	color: #000000;
}
#titles h2 {
	color: #000000;
}

/* special event: FTP success page titles */
#titles ftpsuccess {
	background-color:#00ff00;
	width:100%;
}

/* Page displayed body content area */
#content {
	padding: 10px;
	background: #ffffff;
}

/* General text */
p {
}

/* error brief description */
#error p {
}

/* some data which may have caused the problem */
#data {
}

/* the error message received from the system or other software */
#sysmsg {
}

pre {
    font-family:sans-serif;
}

/* special event: FTP / Gopher directory listing */
#dirmsg {
    font-family: courier;
    color: black;
    font-size: 10pt;
}
#dirlisting {
    margin-left: 2%;
    margin-right: 2%;
}
#dirlisting tr.entry td.icon,td.filename,td.size,td.date {
    border-bottom: groove;
}
#dirlisting td.size {
    width: 50px;
    text-align: right;
    padding-right: 5px;
}

/* horizontal lines */
hr {
	margin: 0;
}

/* page displayed footer area */
#footer {
	font-size: 9px;
	padding-left: 10px;
}
  body :lang(fa) { direction: rtl; font-size: 100%; font-family: Tahoma, Roya, sans-serif; float: right; } :lang(he) { direction: rtl; }  --></style> </head><body id=ERR_DNS_FAIL> <div id="titles"> <h1>ERROR</h1> <h2>The requested URL could not be retrieved</h2> </div> <hr>  <div id="content"> <p>При отриманні URL: <a href="http://admin.foo.bar.de/cgi-bin/blocked.cgi?">http://admin.foo.bar.de/cgi-bin/blocked.cgi?</a> виникла помилка.</p>  <blockquote id="error"> <p><b>Неможливо визначити IP адресу вузла: <q>admin.foo.bar.de</q></b></p> </blockquote>  <p>DNS сервер повідомляє:</p> <blockquote id="data"> <pre>Name Error: The domain name does not exist.</pre> </blockquote>  <p>Це означає, що кеш не зміг перетворити ім'я вузла в URL. Перевірте правильність написання адреси.</p>  <p>Адміністратор даного кешу <a href="mailto:webmaster?subject=CacheErrorInfo%20-%20ERR_DNS_FAIL&amp;body=CacheHost%3A%20localhost%0D%0AErrPage%3A%20ERR_DNS_FAIL%0D%0AErr%3A%20%5Bnone%5D%0D%0ADNS%20ErrMsg%3A%20Name%20Error%3A%20The%20domain%20name%20does%20not%20exist.%0D%0ATimeStamp%3A%20Tue,%2005%20Jul%202016%2009%3A54%3A34%20GMT%0D%0A%0D%0AClientIP%3A%2010.6.211.50%0D%0AServerIP%3A%20admin.foo.bar.de%0D%0A%0D%0AHTTP%20Request%3A%0D%0AGET%20%2Fcgi-bin%2Fblocked.cgi%3Fclientaddr%3D10.6.211.50%26clientname%3D%26clientuser%3D%26clientgroup%3Ddefault%26targetgroup%3Dtracker%26url%3Dhttp%3A%2F%2Fwww.google-analytics.com%2Fga.js%20HTTP%2F1.1%0AHost%3A%20www.google-analytics.com%0D%0AProxy-Connection%3A%20keep-alive%0D%0AUser-Agent%3A%20Mozilla%2F5.0%20(Windows%20NT%206.1)%20AppleWebKit%2F537.36%20(KHTML,%20like%20Gecko)%20Chrome%2F51.0.2704.103%20Safari%2F537.36%0D%0AAccept%3A%20*%2F*%0D%0AReferer%3A%20http%3A%2F%2Fwww.sublimetext.ru%2Fdocumentation%2Fpreferences%2Flist%0D%0AAccept-Encoding%3A%20gzip,%20deflate,%20sdch%0D%0AAccept-Language%3A%20ru-RU,ru%3Bq%3D0.8,en-US%3Bq%3D0.6,en%3Bq%3D0.4%0D%0A%0D%0A%0D%0A">webmaster</a>.</p> <br> </div>  <hr> <div id="footer"> <p>Згенеровано Tue, 05 Jul 2016 09:54:34 GMT на localhost (squid/3.1.20)</p> <!-- ERR_DNS_FAIL --> </div> </body></html> 