const foodRecords = [
  { id:"hotpot", city:"重庆", category:"火锅", name:"重庆火锅", image:"assets/images/photo-placeholder-1.svg", imageSource:{ status:"待替换", note:"建议替换为实际到访餐厅或自有实拍。" }, reason:"第一晚或解放碑日安排一顿即可，避开两顿连续重辣。", nearbyArea:"观音桥、解放碑均方便", suitableDay:"Day 2 晚上", suitableRoute:"Day 2 解放碑 → 十八梯 → 洪崖洞：夜景前的晚餐" },
  { id:"noodles", city:"重庆", category:"小面", name:"重庆小面", image:"assets/images/photo-placeholder-3.svg", imageSource:{ status:"待替换", note:"建议替换为实际到访店铺照片。" }, reason:"适合早餐或轻量午餐，点单时按吃辣程度说明。", nearbyArea:"观音桥附近优先", suitableDay:"Day 3 早餐", suitableRoute:"Day 3 观音桥出发前：快速早餐" },
  { id:"jianghu", city:"重庆", category:"江湖菜", name:"江湖菜", image:"assets/images/photo-placeholder-2.svg", imageSource:{ status:"待替换", note:"建议替换为实际到访店铺照片。" }, reason:"适合多人围桌，作为山城行程后的正餐。", nearbyArea:"观音桥、南滨路附近", suitableDay:"Day 4 晚上", suitableRoute:"Day 3 南山夜景后，或高铁前一晚：多人正餐" },
  { id:"snacks", city:"重庆", category:"小吃", name:"山城小吃", image:"assets/images/photo-placeholder-3.svg", imageSource:{ status:"待替换", note:"建议替换为实际到访店铺照片。" }, reason:"八一路和老街适合少量多样，不要用小吃替代正餐。", nearbyArea:"八一路、十八梯", suitableDay:"Day 2 中午", suitableRoute:"Day 2 解放碑 → 八一路：午餐和加餐" },
  { id:"chuanchuan", city:"成都", category:"串串", name:"成都串串", image:"assets/images/photo-placeholder-1.svg", imageSource:{ status:"待替换", note:"建议替换为实际到访店铺照片。" }, reason:"适合换城后或市区慢游的晚餐，口味比火锅更便于多人选菜。", nearbyArea:"春熙路、人民公园周边", suitableDay:"Day 6 晚上", suitableRoute:"Day 5 春熙路 / 人民公园路线结束后：晚餐" },
  { id:"sichuan", city:"成都", category:"川菜", name:"川菜", image:"assets/images/photo-placeholder-2.svg", imageSource:{ status:"待替换", note:"建议替换为实际到访店铺照片。" }, reason:"作为成都经典路线的正餐，提前看排队与营业时间。", nearbyArea:"太古里、武侯祠附近", suitableDay:"Day 6 中午", suitableRoute:"Day 5 太古里附近，或 Day 6 武侯祠前后：正餐" },
  { id:"tea", city:"成都", category:"盖碗茶", name:"盖碗茶", image:"assets/images/photo-placeholder-3.svg", imageSource:{ status:"待替换", note:"建议替换为实际到访茶馆照片。" }, reason:"不需要赶景点时，在人民公园坐一会儿比多走一站更值得。", nearbyArea:"人民公园", suitableDay:"Day 6 下午", suitableRoute:"Day 5 春熙路 → 太古里 → 人民公园：午后休息" },
  { id:"sweet-noodles", city:"成都", category:"甜水面", name:"甜水面", image:"assets/images/photo-placeholder-1.svg", imageSource:{ status:"待替换", note:"建议替换为实际到访店铺照片。" }, reason:"作为小吃加餐更合适，注意口味偏甜辣。", nearbyArea:"市区小吃街", suitableDay:"Day 7 晚上", suitableRoute:"Day 6 锦里，或 Day 7 市区备选路线：小吃加餐" }
];

const foodSource = (file, target, sourcePage, note = "Wikimedia Commons 菜品实拍图已保存到本地资源目录。") => ({ file, target, sourcePage, status: "已接入", note });
const foodImages = {
  hotpot: { image: "assets/images/food/chongqing-hotpot.jpg", imageSource: foodSource("assets/images/food/chongqing-hotpot.jpg", "chongqing-hotpot.jpg", "https://commons.wikimedia.org/wiki/File:Chongqing_Hot_Pot.jpg") },
  noodles: { image: "assets/images/food/chongqing-noodles.jpg", imageSource: foodSource("assets/images/food/chongqing-noodles.jpg", "chongqing-noodles.jpg", "https://commons.wikimedia.org/wiki/File:ChongQing_Noodles,_D_Noodles,_Paris_002.jpg") },
  jianghu: { image: "assets/images/food/jianghu-cuisine.jpg", imageSource: foodSource("assets/images/food/jianghu-cuisine.jpg", "jianghu-cuisine.jpg", "https://commons.wikimedia.org/wiki/File:Chongqing-style_boiled_blood_curd_(Mao_Xuewang).jpg", "重庆江湖菜代表菜毛血旺的实拍图，已保存到本地。") },
  chuanchuan: { image: "assets/images/food/chuanchuan.jpg", imageSource: foodSource("assets/images/food/chuanchuan.jpg", "chuanchuan.jpg", "https://commons.wikimedia.org/wiki/File:%E4%B8%89%E4%BA%9A%E6%88%90%E9%83%BD%E5%8E%95%E6%89%80%E4%B8%B2%E4%B8%B2%E9%A6%99%E7%81%AB%E9%94%85.jpg") },
  sichuan: { image: "assets/images/food/sichuan-cuisine.jpg", imageSource: foodSource("assets/images/food/sichuan-cuisine.jpg", "sichuan-cuisine.jpg", "https://commons.wikimedia.org/wiki/File:Discovering_Sichuan_cuisine.jpg") },
  "sweet-noodles": { image: "assets/images/food/sweet-water-noodles.jpg", imageSource: foodSource("assets/images/food/sweet-water-noodles.jpg", "sweet-water-noodles.jpg", "https://commons.wikimedia.org/wiki/File:ChongQing_Noodles,_D_Noodles,_Paris_003.jpg", "川味面食实拍图，用作甜水面页面的代表图片；后续可替换为自有甜水面实拍。") }
};

export const foodGuides = foodRecords.map((item) => ({ ...item, ...foodImages[item.id] }));
