/**
 * @author xukai
 * 公共js方法
 * */

function ajaxSpringBeanCommonFunction(burl, params) {
	//params.XX必须与Spring Mvc controller中的参数名称一致    
	//否则在controller中使用@RequestParam绑定 

	var obj = null;

	$.ajax({
		async: false,//同步
		type: "POST",
		url: burl,//注意路径 
		data: params,
		dataType: "json",
		beforeSend: function (a) {
			//$("#loading").show();
		},
		success: function (data) {
			obj = data;
			//$("#loading").hide();
		}
	});
	return obj;
}
//js获取项目根路径，如： http://localhost:8083/uimcardprj  
function getCurWwwPath() {
	//获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp  
	var curWwwPath = window.document.location.href;
	//获取主机地址之后的目录，如： uimcardprj/share/meun.jsp  
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	//获取主机地址，如： http://localhost:8083  
	var localhostPaht = curWwwPath.substring(0, pos);
	//获取带"/"的项目名，如：/uimcardprj  
	var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
	return (localhostPaht);
}
/**校验手机号
 * */
function isPoneAvailable(pone) {
	var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if (!myreg.test(pone)) {
		return false;
	} else {
		return true;
	}
}
/**统一社会信用代码校验
 * */
function CheckSocialCreditCode(Code) {
	var patrn = /^[0-9A-Z]+$/;
	//18位校验及大写校验  
	if ((Code.length != 18) || (patrn.test(Code) == false)) {
		console.info("不是有效的统一社会信用编码！");
		return false;
	}
	else {
		var Ancode;//统一社会信用代码的每一个值  
		var Ancodevalue;//统一社会信用代码每一个值的权重   
		var total = 0;
		var weightedfactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];//加权因子   
		var str = '0123456789ABCDEFGHJKLMNPQRTUWXY';
		//不用I、O、S、V、Z   
		for (var i = 0; i < Code.length - 1; i++) {
			Ancode = Code.substring(i, i + 1);
			Ancodevalue = str.indexOf(Ancode);
			total = total + Ancodevalue * weightedfactors[i];
			//权重与加权因子相乘之和   
		}
		var logiccheckcode = 31 - total % 31;
		if (logiccheckcode == 31) {
			logiccheckcode = 0;
		}
		var Str = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y";
		var Array_Str = Str.split(',');
		logiccheckcode = Array_Str[logiccheckcode];


		var checkcode = Code.substring(17, 18);
		if (logiccheckcode != checkcode) {
			console.info("不是有效的统一社会信用编码！");
			return false;
		} else {
			console.info("yes");
		}
		return true;
	}
}
/**校验联系电话*/
function checkTel(tel) {
	var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
	var isMob = /^((\+?86)|(\+86))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
	if (isMob.test(tel) || isPhone.test(tel)) {
		return true;
	} else {
		return false;
	}
}
export {
	ajaxSpringBeanCommonFunction
}


