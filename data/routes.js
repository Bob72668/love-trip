const dayPlanRecords = [
  {
    day: "Day 1", date: "08.03", city: "重庆", theme: "抵达山城", focus: "19:00 抵达后，先把行李与体力安顿好", priority: "必去", arrivalTime: "19:00", departureTime: "20:30", estimatedDuration: "约 2 小时", walkingDistance: "约 0.5–1 公里", familyTips: "抵达日晚不安排景点；带老人或孩子时优先打车到酒店，晚餐选步行可达的店。",
    stops: ["重庆江北机场", "观音桥", "酒店入住", "附近晚餐"],
    schedule: [{ label: "19:00", text: "抵达江北机场，前往观音桥附近入住。" }, { label: "20:30", text: "在观音桥附近简单晚餐；首晚不赶景点。" }],
    transit: { metro: "机场与酒店段优先按当天行李和到达时间选择", taxi: "晚间抵达、携带行李时更省心" },
    tip: "抵达日晚，不把解放碑和洪崖洞列为硬性任务；可在 Day 2 或 Day 3 调整补上。"
  },
  {
    day: "Day 2", date: "08.04", city: "重庆", theme: "城市地标", focus: "步行串联解放碑、十八梯与洪崖洞", priority: "必去", arrivalTime: "10:00", departureTime: "21:30", estimatedDuration: "约 10–11 小时", walkingDistance: "约 5–6 公里", familyTips: "十八梯台阶多，午后安排室内休息；洪崖洞夜景后优先打车回酒店。",
    stops: ["观音桥", "解放碑", "八一路好吃街", "十八梯", "洪崖洞"],
    schedule: [{ label: "10:00", text: "从观音桥出发，到解放碑周边慢慢逛。" }, { label: "12:00", text: "八一路好吃街解决午餐，小吃少量多样。" }, { label: "14:00", text: "步行前往十八梯，安排老街与休息时间。" }, { label: "18:30", text: "在洪崖洞附近吃晚餐，19:30 后看亮灯夜景。" }],
    transit: { metro: "约 35 分钟，适合白天不赶时间", taxi: "约 20 分钟，晚间更方便" },
    tip: "洪崖洞下午人多且灯未亮，优先把到访时间放在傍晚。"
  },
  {
    day: "Day 3", date: "08.05", city: "重庆", theme: "重庆夜景", focus: "江景、索道与城市全景", priority: "必去", arrivalTime: "14:30", departureTime: "21:30", estimatedDuration: "约 7 小时", walkingDistance: "约 2–3 公里", familyTips: "索道排队时间不可控，老人和孩子不必强求；保留南山夜景作为主要目标。",
    stops: ["观音桥", "长江索道", "龙门浩老街", "南山一棵树"],
    schedule: [{ label: "14:30", text: "避开正午，从观音桥前往长江索道周边。" }, { label: "16:00", text: "乘索道或改为江边散步，按现场排队情况决定。" }, { label: "17:30", text: "在龙门浩老街休息、用餐。" }, { label: "19:30", text: "前往南山一棵树，等待天色转暗看全景。" }],
    transit: { metro: "适合白天分段移动", taxi: "晚上上南山更节省时间" },
    tip: "长江索道排队可能较长，时间紧时不强求；夜景优先保证南山。"
  },
  {
    day: "Day 4", date: "08.06", city: "重庆 → 成都", theme: "换城的一天", focus: "高铁、入住与低强度适应", priority: "必去", arrivalTime: "上午", departureTime: "晚上", estimatedDuration: "半天交通 + 半天休整", walkingDistance: "约 1–2 公里", familyTips: "高铁日减少换乘；行李多时直接打车到车站，成都入住后不再安排远距离景点。",
    stops: ["观音桥", "重庆北站", "成都东站", "成都入住"],
    schedule: [{ label: "上午", text: "退房前整理行李，至少预留充足时间到重庆北站。" }, { label: "中午", text: "乘高铁前往成都，车次以实际购票信息为准。" }, { label: "下午", text: "成都东站到酒店办理入住，周边轻松吃饭。" }, { label: "晚上", text: "不安排远距离景点，为后续成都行程留体力。" }],
    transit: { metro: "车站接驳按酒店位置选择", taxi: "带行李、多人同行更方便" },
    tip: "高铁当天只安排入住和附近晚餐，避免把换城日变成赶路日。"
  },
  {
    day: "Day 5", date: "08.07", city: "成都", theme: "成都经典路线", focus: "商业街区与慢生活", priority: "必去", arrivalTime: "10:00", departureTime: "20:00", estimatedDuration: "约 8–9 小时", walkingDistance: "约 3–4 公里", familyTips: "春熙路和太古里可分段逛，午后在人民公园坐下喝茶，避免连续步行。",
    stops: ["春熙路", "太古里", "IFS 熊猫", "人民公园"],
    schedule: [{ label: "10:00", text: "从春熙路开始，步行串联 IFS 熊猫与太古里。" }, { label: "12:30", text: "在太古里附近安排午餐，避开排队高峰。" }, { label: "15:00", text: "前往人民公园，找一处茶馆慢下来。" }, { label: "18:30", text: "回到市中心吃川菜或串串。" }],
    transit: { metro: "春熙路到人民公园适合地铁或短程打车", taxi: "下雨或多人时更舒适" },
    tip: "春熙路与太古里步行即可串联，避免短距离反复叫车。"
  },
  {
    day: "Day 6", date: "08.08", city: "成都", theme: "熊猫与文化", focus: "早出发、午后文化路线", priority: "必去", arrivalTime: "07:00", departureTime: "19:30", estimatedDuration: "约 10–11 小时", walkingDistance: "约 4–5 公里", familyTips: "熊猫基地按体力选择步行或观光车；午后回市区休息后，再安排武侯祠与锦里。",
    stops: ["熊猫基地", "武侯祠", "锦里"],
    schedule: [{ label: "07:00", text: "尽早出发去熊猫基地，优先看活跃时段。" }, { label: "11:30", text: "返回市区午餐并休息，避开高温。" }, { label: "15:00", text: "前往武侯祠，之后步行到锦里。" }, { label: "18:30", text: "在锦里附近用晚餐，早点返回休息。" }],
    transit: { metro: "熊猫基地与市区间预留较多时间", taxi: "早出发和多人同行时更直接" },
    tip: "熊猫基地不要睡到自然醒；上午优先安排，文化景点放下午。"
  },
  {
    day: "Day 7", date: "08.09—08.10", city: "成都周边", theme: "山水二选一", focus: "都江堰或青城山，按天气与返程时间决定", priority: "备选", arrivalTime: "08:00", departureTime: "下午", estimatedDuration: "半天至一天", walkingDistance: "约 3–6 公里", familyTips: "都江堰与青城山只选一个；下雨、闷热或家人疲劳时直接改为市区轻松行程。",
    stops: ["成都", "都江堰 / 青城山", "返程准备"],
    schedule: [{ label: "08:00", text: "天气稳定、想看工程与古城选都江堰。" }, { label: "08:00", text: "更想轻徒步、气温合适则选青城山。" }, { label: "下午", text: "控制返程时间，留出收拾行李和次日安排。" }],
    transit: { metro: "按实际酒店和当日班次规划", taxi: "不建议长距离临时打车前往周边" },
    tip: "两地不建议同一天都去；下雨或体力不足时直接改为市区慢游。"
  }
];

const dayPlanDetails = {
  "Day 1": { walkingLevel: "低", mealSuggestion: "观音桥酒店步行范围内安排晚餐，优先选择可点不辣、上菜快的店。" },
  "Day 2": { walkingLevel: "中等偏高", mealSuggestion: "中午在八一路少量多样；18:30 在洪崖洞附近用正餐，夜景后不再赶店。" },
  "Day 3": { walkingLevel: "中等", mealSuggestion: "龙门浩老街安排休息和晚餐；上南山前补足水和小食。" },
  "Day 4": { walkingLevel: "低", mealSuggestion: "重庆北站前简单早餐；成都入住后只安排酒店附近晚餐。" },
  "Day 5": { walkingLevel: "低", mealSuggestion: "太古里附近午餐；人民公园喝茶休息后，再安排川菜或串串晚餐。" },
  "Day 6": { walkingLevel: "中等", mealSuggestion: "熊猫基地后回市区午餐并午休；锦里附近以小吃加一顿正餐为宜。" },
  "Day 7": { walkingLevel: "中等", mealSuggestion: "周边行程自带补水和简餐；返程前在古城或酒店附近提早用餐。" }
};

export const dayPlans = dayPlanRecords.map((plan) => ({ ...plan, ...dayPlanDetails[plan.day] }));

export const transportComparisons = [
  { from: "观音桥", to: "洪崖洞", distance: "约 9 公里", metro: "约 35 分钟", taxi: "约 20 分钟 / 约 25 元", advice: "晚上优先打车；节省体力，也更方便衔接夜景。" },
  { from: "观音桥", to: "解放碑", distance: "约 7 公里", metro: "约 30 分钟", taxi: "约 15 分钟", advice: "白天可乘地铁，晚高峰或多人同行可改打车。" },
  { from: "观音桥", to: "重庆北站", distance: "约 11 公里", metro: "约 35 分钟", taxi: "约 20 分钟", advice: "带行李的高铁日优先打车，并为堵车预留时间。" },
  { from: "成都酒店区", to: "熊猫基地", distance: "以住处为准", metro: "约 50–70 分钟", taxi: "约 35–50 分钟", advice: "早上出发优先选时间更可控的方式，避免错过熊猫活跃时段。" }
];
