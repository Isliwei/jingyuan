<template>
  <div class="Propaganda">
    <div>
      <p>宣传片</p>
    </div>
   <video controls autobuffer style="margin: auto;width: 100%; max-height: 185px;;min-height: 185px;">
     <source :src="videoUrl" type="video/mp4"> 
   </video>
  </div>
</template>

<script>
import {ajaxSpringBeanCommonFunction} from "../../assets/js/util.js"
import ip from "../../assets/js/api.js"
import { videoPlayer } from 'vue-video-player'
import video from "../../assets/js/Video.js"


export default {
  data(){
    return{
      ip:ip.ip,
      m2:"8abe997460c50c5b0160c5461a1c0000",
      playerOptions : {},
      videoUrl:"",

    }
  },
  created(){
    var menu3 = this.$parent.getMenu3(this.m2,1,1);
    if (menu3.length>0){

      this.videoUrl = this.ip+ "/"+menu3[0].videoUrl;
      if(menu3[0].mediaType == "2")
        this.videoUrl = menu3[0].videoOutUrl;

      this.playerOptions = {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "",
          src: this.ip+ "/"+menu3[0].videoUrl //url地址
        }],
        poster: "../../asstes/imgs/233.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
        timeDivider: true,
        durationDisplay: true,
        remainingTimeDisplay: false,
        fullscreenToggle: true  //全屏按钮
        }
      }
    }
    

  },
  methods:{
    
  },
}
</script>



<style scoped>
.Propaganda{
  width: 45%;
  height: 220px;
  float: left;
	box-sizing: border-box;
}
p{
  height:24px;
  font-size:18px;
  font-family:MicrosoftYaHei-Bold;
  font-weight:bold;
  color:rgba(18,18,18,1);
  line-height:24px;
  text-align: left;
  padding: 8px;
}
img{
  width: 100%;
}

</style>