var sendFlag = false;
var wait = 0;

function time() {
	if (wait == 0) {
		sendFlag = false;
		$("#sendMsg").removeClass("fgrey");
		$("#sendMsg").addClass("fred");
		$("#sendMsg").html("获取验证码");
	} else {
		sendFlag = true;
		$("#sendMsg").removeClass("fred");
		$("#sendMsg").addClass("fgrey");
		$("#sendMsg").html(wait + "秒后重新发送");
		wait--;
		setTimeout(function() {
			time()
		}, 1000)
	}
}