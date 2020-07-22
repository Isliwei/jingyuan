import Vue from "vue";
import Router from "vue-router";
import Index from "@/views/index/Index";
import GroupIntroduction from "@/views/Groupintroduction/index";
import PartyBuildingWorld from "@/views/PartyBuildingWorld/index";
import NewsCenter from "@/views/NewsCenter/index";
import EnteredCompany from "@/views/EnteredCompany/index";
import InvestmentServiceHall from "@/views/InvestmentServiceHall/index";
import content2 from "@/components/publicCop/content2";
import Map from "@/components/publicCop/map";
// 二级页
import movingpage from "@/components/partyBodyCop/partypage/movingpage";
// 刷新页
import F5 from "@/F5";

Vue.use(Router);
export default new Router({
  mode: "hash",
  // mode : 'history',
  base: "/resources/dist/",
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/f5",
      name: "F5",
      component: F5
    },
    {
      path: "/8abe94755f281266015f283bd72e0000",
      name: "GroupIntroduction",
      component: GroupIntroduction
    },
    {
      path: "/gIT",
      name: "GroupIntroductionNews",
      component: GroupIntroduction
    },
    {
      path: "/8abe94755f281266015f283c72a30001",
      name: "PartyBuildingWorld",
      component: PartyBuildingWorld
    },
    {
      path: "/PartyBuildingWorld/movingpage",
      name: "movingpage",
      component: movingpage
    },
    {
      path: "/8abe94755f281266015f283cc9910002",
      name: "NewsCenter",
      component: NewsCenter
    },
    {
      path: "/news",
      name: "News",
      component: NewsCenter
    },
    {
      path: "/8abe94755f7ad21b015f7ada53ed0001",
      name: "EnteredCompany",
      component: EnteredCompany
    },
    {
      path: "/8abe94755ffc68f4015ffc74d3de0003",
      name: "InvestmentServiceHall",
      component: InvestmentServiceHall
    },
    {
      path: "/pBW",
      // name: 'PartyBuildingWorld',
      component: PartyBuildingWorld
    },
    {
      path: "/content2",
      name: "content2",
      component: content2
    },
    {
      path: "/Map",
      name: "Map",
      component: Map
    }
  ]
});
