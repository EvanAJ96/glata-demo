import avatar1 from "./assets/头像1.png";
import avatar2 from "./assets/头像2.png";
import avatar3 from "./assets/头像3.png";
import avatar4 from "./assets/头像4.png";
import avatar5 from "./assets/头像5.png";
import avatar6 from "./assets/头像6.png";
import avatar7 from "./assets/头像7.png";
import avatar8 from "./assets/头像8.png";
import avatar9 from "./assets/头像9.png";
import avatar10 from "./assets/头像10.png";
import avatar11 from "./assets/头像11.png";
import avatar12 from "./assets/头像12.png";
import avatar13 from "./assets/头像13.png";
import avatar14 from "./assets/头像14.png";
import avatar15 from "./assets/头像15.png";
import avatar16 from "./assets/头像16.png";
import avatar17 from "./assets/头像17.png";
import avatar18 from "./assets/头像18.png";
import avatar19 from "./assets/头像19.png";
import avatar20 from "./assets/头像20.png";
import avatar21 from "./assets/头像21.png";
import avatar22 from "./assets/头像22.png";
import avatar23 from "./assets/头像23.png";
import avatar24 from "./assets/头像24.png";
import avatar25 from "./assets/头像25.png";
import avatar26 from "./assets/头像26.png";
import avatar27 from "./assets/头像27.png";

export const SVC = [
  { id:1, name:"Eric", av:"E", time:"15:32", tags:["个人设备申请x1","设备报修x1"], tickets:[
    { id:"APL20260225000298", status:"处理中", sBg:"rgba(22,93,255,.12)", sClr:"#1033a3", title:"【个人设备申请】1080P 显示器", sub:"确认领用地点", time:"15:32", src:"ITAM系统", asset:"IT1962244", timer:true },
    { id:"IT1962244-REP",     status:"待接单", sBg:"rgba(255,125,0,.12)", sClr:"#a8510a", title:'【设备报修】IT1962244-苹果 MacBook Air 13" M4 MAC笔记本 10+10核/16G/512G/...', sub:"占位信息占位信息", time:"15:32", src:"ITAM系统", asset:"", timer:false },
  ]},
  { id:2, name:"Lisa", av:"L", time:"15:32", tags:["设备退还x1","配件退还x1"], tickets:[
    { id:"TK20240501001", status:"待接单", sBg:"rgba(255,125,0,.12)", sClr:"#a8510a", title:"【设备退还】IT1883921-联想 ThinkPad T14 笔记本电脑",   sub:"待核对设备外观及序列号", time:"15:32", src:"ITAM系统", asset:"IT1883921", timer:false },
    { id:"TK20240501002", status:"处理中", sBg:"rgba(22,93,255,.12)",  sClr:"#1033a3", title:"【配件退还】罗技 MX Master 3 无线鼠标",               sub:"确认归还配件完整性",     time:"15:01", src:"ITAM系统", asset:"",          timer:true  },
  ]},
  { id:3, name:"冯云",   av:"冯", time:"15:32", tags:["配件退还x1"], tickets:[
    { id:"TK20240501003", status:"待接单", sBg:"rgba(255,125,0,.12)", sClr:"#a8510a", title:"【配件退还】绿联 Type-C 十合一扩展坞", sub:"离职人员资产交接流程", time:"14:45", src:"ITAM系统", asset:"", timer:false },
  ]},
  { id:4, name:"周俊",   av:"周", time:"15:32", tags:["暂无待办工单"], tickets:[] },
  { id:5, name:"钱若霖", av:"钱", time:"15:32", tags:["设备退库x1"], tickets:[
    { id:"TK20240501004", status:"处理中", sBg:"rgba(22,93,255,.12)", sClr:"#1033a3", title:"【设备退库】IT1772099-戴尔 U2723QE 27寸 4K显示器", sub:"资产库管扫码入库中",   time:"11:20", src:"ITAM系统", asset:"IT1772099", timer:true  },
  ]},
  { id:6, name:"周琎",   av:"周", time:"15:32", tags:["设备报修x1"], tickets:[
    { id:"TK20240501005", status:"待接单", sBg:"rgba(255,125,0,.12)", sClr:"#a8510a", title:"【设备报修】IT1920012-苹果 Mac mini M2 8核/16G/512G", sub:"用户反馈频繁重启，系统报错", time:"09:15", src:"ITAM系统", asset:"IT1920012", timer:false },
  ]},
  { id:7, name:"李琳颖", av:"李", time:"15:32", tags:["Service Requestx1"], tickets:[
    { id:"TK20240501006", status:"处理中", sBg:"rgba(22,93,255,.12)", sClr:"#1033a3", title:"【Service Request】申请 Figma 企业版编辑权限", sub:"等待成本中心负责人审批", time:"昨天 16:30", src:"ServiceDesk", asset:"", timer:true },
  ]},
];

export const TOPIC = [
  { id:1, name:"卢桂周", av:"卢", time:"15:32", sub:"盈都网络今天特别不好，打开个飞书文档 10s..." },
  { id:2, name:"孙明明", av:"孙", time:"15:32", sub:"2楼的 Wi-Fi 连接不上了" },
];

export const EMAIL = [
  { id:1, name:"张云云", av:"张", time:"15:30", sub:"需要开通工区所在楼宇审批权限" },
  { id:2, name:"曹楠", av:"曹", time:"14:45", sub:"工区调整服务台权限变更" },
];

export const mixedSessionList = [
  ...SVC.map((user, index) => ({
    ...user,
    time: index === 0 ? "16:00" : index === 1 ? "15:55" : index === 2 ? "15:50" : index === 3 ? "15:45" : index === 4 ? "15:40" : index === 5 ? "15:35" : "15:30",
    channel: 'servicedesk'
  })),
  ...TOPIC.map((topic, index) => ({
    ...topic,
    time: index === 0 ? "15:25" : "15:20",
    channel: 'topic',
    tickets: [{
      id: `IT-${217858912 + index}`,
      status: "处理中",
      sBg: "rgba(22,93,255,.12)",
      sClr: "#1033a3",
      title: topic.sub === "盈都网络今天特别不好，打开个飞书文档 10s..." ? "盈都网络今天特别不好，打开个飞书文档十几秒了还在加载" : topic.sub,
      sub: "来自话题群",
      time: index === 0 ? "15:25" : "15:20",
      src: "话题群",
      asset: "",
      timer: true,
      handler: "张小明"
    }]
  })),
  ...EMAIL.map((email, index) => ({
    ...email,
    time: index === 0 ? "15:15" : "15:10",
    channel: 'email',
    tickets: [{
      id: `IT-${217858914 + index}`,
      status: "处理中",
      sBg: "rgba(22,93,255,.12)",
      sClr: "#1033a3",
      title: email.sub,
      sub: "来自邮件",
      time: index === 0 ? "15:15" : "15:10",
      src: "邮件",
      asset: "",
      timer: false,
      handler: "李华"
    }]
  }))
];

export const importedAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12, avatar13, avatar14, avatar15, avatar16, avatar17, avatar18, avatar19, avatar20, avatar21, avatar22, avatar23, avatar24, avatar25, avatar26, avatar27];

export const oncallData = [
  {
    id: 1,
    name: "赵吾光",
    av: "赵",
    channel: "oncall",
    tag: "GOCC",
    latestMessage: "请问如何清洁设备？",
    time: "16:00",
    tickets: [
      {
        id: "IT-921501851",
        title: "盈都网络今天特别不好，打开个飞书文档十几秒了还在加载",
        status: "待处理",
        sBg: "rgba(255,125,0,.12)",
        sClr: "#a8510a",
        sub: "行政部门",
        time: "16:00"
      }
    ]
  },
  {
    id: 5,
    name: "孙明",
    av: "孙",
    channel: "oncall",
    tag: "GOCC",
    latestMessage: "我已经清理设备内存了，还是无法使用",
    time: "15:55",
    linkedGroup: {
      title: "关联群聊",
      latestMessage: "艾健：听说你的网络很卡顿？",
      time: "15:55"
    },
    tickets: [
      {
        id: "IT-921501855",
        title: "设备内存清理",
        status: "处理中",
        sBg: "rgba(22,93,255,.12)",
        sClr: "#1033a3",
        sub: "技术支持部",
        time: "15:55"
      }
    ]
  },
  {
    id: 2,
    name: "钱若霖",
    av: "钱",
    channel: "oncall",
    tag: "IT",
    latestMessage: "服务器宕机，需要紧急重启",
    time: "15:50",
    tickets: [
      {
        id: "IT-921501852",
        title: "2楼的 Wi-Fi 连接不上了",
        status: "处理中",
        sBg: "rgba(22,93,255,.12)",
        sClr: "#1033a3",
        sub: "机房A区",
        time: "15:50"
      }
    ]
  },
  {
    id: 3,
    name: "孙一明",
    av: "孙",
    channel: "oncall",
    tag: "IT",
    latestMessage: "财务系统无法登录",
    time: "15:45",
    tickets: [
      {
        id: "IT-921501853",
        title: "需要开通工区所在楼宇审批权限",
        status: "已解决",
        sBg: "rgba(0,194,146,.12)",
        sClr: "#007d58",
        sub: "财务部门",
        time: "15:45"
      }
    ]
  },
  {
    id: 4,
    name: "李明华",
    av: "李",
    channel: "oncall",
    tag: "IT",
    latestMessage: "新员工入职流程需要更新",
    time: "15:40",
    tickets: [
      {
        id: "IT-921501854",
        title: "工区调整服务台权限变更",
        status: "待处理",
        sBg: "rgba(255,125,0,.12)",
        sClr: "#a8510a",
        sub: "人力资源部",
        time: "15:40"
      }
    ]
  },
  {
    id: 6,
    name: "周大福",
    av: "周",
    channel: "oncall",
    tag: "IT",
    latestMessage: "办公室空调温度调节问题",
    time: "15:35",
    tickets: [
      {
        id: "IT-921501856",
        title: "空调温度调节",
        status: "已解决",
        sBg: "rgba(0,194,146,.12)",
        sClr: "#007d58",
        sub: "运维部",
        time: "15:35"
      }
    ]
  }
];

export const AV_PAL = {
  郑:{bg:"#bae0ff",fg:"#0958d9"},冯:{bg:"#d9f7be",fg:"#389e0d"},周:{bg:"#fff7e6",fg:"#d46b08"},
  钱:{bg:"#ffd6e7",fg:"#c41d7f"},李:{bg:"#f9f0ff",fg:"#531dab"},卢:{bg:"#e6f4ff",fg:"#0958d9"},
  张:{bg:"#fff2e8",fg:"#d4380d"},A:{bg:"#ffd666",fg:"#874d00"},
};
