export const tripInfo = {
  title: "重庆 × 成都｜7日旅行攻略",
  dateRange: "2026.08.03 — 08.10",
  arrival: "2026 年 8 月 3 日 19:00 抵达重庆江北机场",
  hotelBase: "重庆观音桥附近",
  coverImage: "assets/images/cover/chongqing-cover.jpg",
  imageSource: { file: "assets/images/cover/chongqing-cover.jpg", target: "chongqing-cover.jpg", status: "已接入", sourcePage: "https://commons.wikimedia.org/wiki/File:Raffles_City_Chongqing_2019-2.jpg", note: "Wikimedia Commons 重庆城市实景图已保存到本地资源目录。" }
};

export const weatherNotes = [
  { city: "重庆", title: "高温与暴雨并存", note: "8 月体感闷热，午后可能有阵雨；备轻薄雨具、透气鞋与防晒。" },
  { city: "重庆", title: "山城步行留余量", note: "坡道、台阶多；午间尽量安排室内或休息，夜景放在傍晚后。" },
  { city: "成都", title: "湿热但节奏可放慢", note: "防晒与雨具都带上；户外景点优先排在上午。" },
  { city: "成都", title: "周边行程看当天情况", note: "都江堰、青城山出发前留意降雨和返程交通。" }
];

export const hotelHub = {
  name: "重庆观音桥",
  note: "重庆段以观音桥附近为住宿中心，优先减少折返。",
  destinations: [
    { name: "解放碑", time: "约 15 分钟", method: "打车参考" },
    { name: "洪崖洞", time: "约 25 分钟", method: "打车参考" },
    { name: "磁器口", time: "约 40 分钟", method: "地铁参考" },
    { name: "重庆北站", time: "约 20 分钟", method: "打车参考" }
  ]
};

export const travelTips = [
  { city: "重庆", items: ["8 月炎热，午间少走坡路，把山城步行安排在傍晚。", "洪崖洞人流量大，优先傍晚到附近，再进入观景区域。", "不跟随路边拉客，交通与餐饮以正规平台和现场信息为准。"] },
  { city: "成都", items: ["熊猫基地建议尽早出发，避免高温和人流。", "春熙路、太古里适合步行串联，不必反复打车。", "都江堰与青城山二选一，给返程和天气留出弹性。"] }
];

export const memoryPhotos = [
  { image: "assets/images/photo-placeholder-1.svg", imageSource: { status: "占位", note: "旅行结束后替换为自有照片。" }, date: "08.03", location: "重庆 · 洪崖洞", note: "第一张旅行照片，留给夜色和我们。" },
  { image: "assets/images/photo-placeholder-2.svg", imageSource: { status: "占位", note: "旅行结束后替换为自有照片。" }, date: "08.06", location: "成都 · 街头", note: "走得很慢，所以记得很清楚。" },
  { image: "assets/images/photo-placeholder-3.svg", imageSource: { status: "占位", note: "旅行结束后替换为自有照片。" }, date: "08.09", location: "都江堰 · 山水间", note: "把最后一页，写成下一次出发。" }
];
