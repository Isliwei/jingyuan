<template>
  <div class="page-bar">
    <ul v-if="this.all >= 1">
      <li v-if="cur > 1">
        <a
          @click="
            cur--;
            pageClick(cur);
          "
          >&lt;</a
        >
      </li>
      <li v-if="cur == 1"><a class="banclick">&lt;</a></li>
      <li
        v-for="index in indexs"
        :key="index.id"
        :class="{ active: cur == index }"
      >
        <a @click="btnClick(index)">{{ index }}</a>
      </li>
      <li v-if="cur != all">
        <a
          @click="
            cur++;
            pageClick(cur);
          "
          >&gt;</a
        >
      </li>
      <li v-if="cur == all"><a class="banclick">&gt;</a></li>
      <li>
        <a
          >共<i>{{ all }}</i
          >页</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      err: 5,
      all: this.$parent.$parent.totalPages, //总页数
      cur: 1 //当前页码
    };
  },
  created() {
    //alert(this.cur);
    //alert(this.all);
  },
  watch: {
    //获取前后值
    cur: function(oldValue, newValue) {
      console.log(arguments);
    }
  },
  methods: {
    btnClick: function(data) {
      //页码点击事件
      if (data != this.cur) {
        this.cur = data;
        this.pageClick(this.cur);
      }
    },

    pageClick: function(cur) {
      //alert(this.cur);

      this.$parent.$parent.getMenu3(this.$route.query.m2, cur, 2);
      this.$parent.menu3 = this.$parent.$parent.menu3;

      //alert(this.$parent.menu3.length);
      //this.$parent.isrefresh = false;
      //this.$parent.isrefresh = true;
      //alert(this.$parent.$parent.menu3.length);
    }
  },

  computed: {
    indexs: function() {
      var left = 1;
      var right = this.all;
      var ar = [];
      //						if (this.all >= 5) {                                      //控制显示的个数
      //							if (this.cur > 3 && this.cur < this.all - 2) {
      //								left = this.cur - 2
      //								right = this.cur + 2
      //							} else {
      //								if (this.cur <= 3) {
      //									left = 1
      //									right = 5
      //								} else {
      //									right = this.all
      //									left = this.all - 4
      //								}
      //							}
      //						}
      if (this.all >= 5) {
        //控制显示的个数
        if (this.cur > 2 && this.cur < this.all - 1) {
          left = this.cur - 1;
          right = this.cur + 1;
        } else {
          if (this.cur <= 3) {
            left = 1;
            right = 5;
          } else {
            right = this.all;
            left = this.all - 4;
          }
        }
      }
      while (left <= right) {
        //添加页
        ar.push(left);
        left++;
      }
      return ar;
    }
  }
};
</script>

<style scoped>
.page-bar {
  width: 40%;
  position: relative;
  top: 30px;
  margin: auto;
}
body {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
ul,
li {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
.page-bar li:first-child > a {
  margin-left: 0px;
}
.page-bar a {
  border: 1px solid rgb(210, 210, 210);
  text-decoration: none;
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: black;
  cursor: pointer;
  margin: 5px;
}
.page-bar a:hover {
  background-color: red;
  color: #fafafa;
}
.page-bar a.banclick {
  cursor: not-allowed;
}
.page-bar .active a {
  color: #fafafa;
  cursor: default;
  background-color: red;
  border-color: red;
}
.page-bar i {
  font-style: normal;
  color: black;
  margin: 0px 4px;
}
</style>
