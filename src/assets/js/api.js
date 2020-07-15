//数据接口的ip和端口
let dev = process.env.NODE_ENV
let ip = ''
if (dev === 'development') { //开发环境
  ip = 'http://10.62.27.161:8080';
} else { //正式环境
  ip = 'http://10.62.27.161:8080';
}

// const zymllist = ip+'/hg6000/dsjjm/zymllist.do';
// const wsqk = ip+'/hg6000/dsjjm/wssj.do';
// const fdcqk1 = ip+'/hg6000/dsjjm/fdcqkZ.do';
// const fdcqk2 = ip+'/hg6000/dsjjm/fdcqkB.do?sbno=2018-09&xzqhbm=420000&xzqhjb=2';
// const sq = ip+'/hg6000/dsjjm/hbssq.do'

//一定要注册才可以使用
export default {
  ip
}