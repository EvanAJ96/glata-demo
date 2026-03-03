import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// 导入头像图片
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

// 导入新图标
import iconAdminOutlined from "./assets/icon_admin_outlined.svg";
import iconBuildingFilled from "./assets/icon_building_filled.svg";
import iconMemberAddOutlined from "./assets/icon_member-add_outlined.svg";
import iconAddSheetOutlined from "./assets/icon_add-sheet_outlined.svg";
import iconCopyOutlined from "./assets/icon_copy_outlined.svg";
import iconExpandOutlined from "./assets/icon_expand_outlined.svg";
import iconGroupOutlined from "./assets/icon_group_outlined.svg";
import iconLinkOutlined from "./assets/icon_link_outlined.svg";
import imageCommonEmpty from "./assets/image_common_empty.svg";
import serviceTicketIcon from "./assets/服务工单.svg";
import assetReturnIcon from "./assets/资产退库.svg";
import assetRepairIcon from "./assets/资产维修.svg";
import newTicketIcon from "./assets/新建工单.svg";
import createTicketImage from "./assets/创建工单.png";
import endIcon from "./assets/结束.svg";

const G = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; }
    button { appearance:none; background:transparent; border:0; outline:none; cursor:pointer; padding:0; font-family:inherit; }
    input  { appearance:none; background:transparent; border:0; outline:none; font-family:inherit; }
    :root {
      --f-m12-fam:"PingFang SC",Helvetica,sans-serif; --f-m12-sz:12px; --f-m12-fw:500; --f-m12-lh:20px;
      --f-m14-fam:"PingFang SC",Helvetica,sans-serif; --f-m14-sz:14px; --f-m14-fw:500; --f-m14-lh:22px;
      --f-m16-fam:"PingFang SC",Helvetica,sans-serif; --f-m16-sz:16px; --f-m16-fw:500; --f-m16-lh:24px;
      --f-r12-fam:"PingFang SC",Helvetica,sans-serif; --f-r12-sz:12px; --f-r12-fw:400; --f-r12-lh:20px;
      --f-r14-fam:"PingFang SC",Helvetica,sans-serif; --f-r14-sz:14px; --f-r14-fw:400; --f-r14-lh:22px;
      --f-en12-fam:"SF Pro",Helvetica,sans-serif;     --f-en12-sz:12px; --f-en12-fw:400; --f-en12-lh:20px;

      --gb1:rgba(232,242,255,1); --gb6:rgba(41,98,255,1); --gb7:rgba(25,74,208,1);
      --gg1:rgba(247,248,250,1); --gg2:rgba(242,243,245,1); --gg3:rgba(229,230,235,1);
      --gg4:rgba(201,205,212,1); --gg5:rgba(169,174,184,1); --gg6:rgba(134,144,156,1);
      --gg8:rgba(78,89,105,1);   --gg10:rgba(29,33,41,1);  --gbg:rgba(255,255,255,1);

      --bg1:var(--gbg);   --bd2:var(--gg3);  --bd3:var(--gg4);
      --f1:var(--gg1);    --f2:var(--gg2);   --f4:var(--gg4);
      --t1:var(--gg10);   --t2:var(--gg8);   --t3:var(--gg6);  --t4:var(--gg5);
      --lk6:var(--gb6);   --lk7:var(--gb7);  --pr1:var(--gb1); --pr6:var(--gb6);
    }
    .m12{font-family:var(--f-m12-fam);font-size:var(--f-m12-sz);font-weight:var(--f-m12-fw);line-height:var(--f-m12-lh)}
    .m14{font-family:var(--f-m14-fam);font-size:var(--f-m14-sz);font-weight:var(--f-m14-fw);line-height:var(--f-m14-lh)}
    .m16{font-family:var(--f-m16-fam);font-size:var(--f-m16-sz);font-weight:var(--f-m16-fw);line-height:var(--f-m16-lh)}
    .r12{font-family:var(--f-r12-fam);font-size:var(--f-r12-sz);font-weight:var(--f-r12-fw);line-height:var(--f-r12-lh)}
    .r14{font-family:var(--f-r14-fam);font-size:var(--f-r14-sz);font-weight:var(--f-r14-fw);line-height:var(--f-r14-lh)}
    .en12{font-family:var(--f-en12-fam);font-size:var(--f-en12-sz);font-weight:var(--f-en12-fw);line-height:var(--f-en12-lh)}
    .ct1{color:var(--t1)}.ct2{color:var(--t2)}.ct3{color:var(--t3)}.ct4{color:var(--t4)}
    .clk6{color:var(--lk6)}.clk7{color:var(--lk7)}
    ::-webkit-scrollbar{width:4px;height:4px}
    ::-webkit-scrollbar-track{background:transparent}
    ::-webkit-scrollbar-thumb{background:var(--f4);border-radius:2px}
  `}</style>
);

// ── Data ────────────────────────────────────────────────────────────────────────
const SVC = [
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

const TOPIC = [
  { id:1, name:"卢桂周", av:"卢", time:"15:32", sub:"盈都网络今天特别不好，打开个飞书文档 10s..." },
  { id:2, name:"孙明明", av:"孙", time:"15:32", sub:"2楼的 Wi-Fi 连接不上了" },
];

// 邮箱数据
const EMAIL = [
  { id:1, name:"张云云", av:"张", time:"15:30", sub:"需要开通工区所在楼宇审批权限" },
  { id:2, name:"曹楠", av:"曹", time:"14:45", sub:"工区调整服务台权限变更" },
];

// 混合数据源
const mixedSessionList = [
  // 服务台数据
  ...SVC.map((user, index) => ({
    ...user,
    time: index === 0 ? "15:32" : index === 1 ? "15:25" : index === 2 ? "15:18" : index === 3 ? "15:10" : index === 4 ? "14:55" : index === 5 ? "14:40" : "14:25",
    channel: 'servicedesk'
  })),
  // 话题群数据
  ...TOPIC.map((topic, index) => ({
    ...topic,
    time: index === 0 ? "15:05" : "14:50",
    channel: 'topic',
    tickets: [{
      id: `IT-${217858912 + index}`,
      status: "处理中",
      sBg: "rgba(22,93,255,.12)",
      sClr: "#1033a3",
      title: topic.sub === "盈都网络今天特别不好，打开个飞书文档 10s..." ? "盈都网络今天特别不好，打开个飞书文档十几秒了还在加载" : topic.sub,
      sub: "来自话题群",
      time: index === 0 ? "15:05" : "14:50",
      src: "话题群",
      asset: "",
      timer: true,
      handler: "张小明"
    }]
  })),
  // 邮箱数据
  ...EMAIL.map((email, index) => ({
    ...email,
    time: index === 0 ? "15:30" : "14:45",
    channel: 'email',
    tickets: [{
      id: `IT-${217858914 + index}`,
      status: "处理中",
      sBg: "rgba(22,93,255,.12)",
      sClr: "#1033a3",
      title: email.sub,
      sub: "来自邮件",
      time: index === 0 ? "15:30" : "14:45",
      src: "邮件",
      asset: "",
      timer: false,
      handler: "李华"
    }]
  }))
];

// 导入的头像数组
const importedAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12, avatar13, avatar14, avatar15, avatar16, avatar17, avatar18, avatar19, avatar20, avatar21, avatar22, avatar23, avatar24, avatar25, avatar26, avatar27];

// 用户名称到索引的映射
const userIndexMap = new Map();
let userCounter = 0;

// 获取用户头像
const getUserAvatar = (name) => {
  // 为每个用户分配一个唯一的索引
  if (!userIndexMap.has(name)) {
    userIndexMap.set(name, userCounter++);
  }
  
  const index = userIndexMap.get(name);
  
  // 前7个用户使用导入的图片
  if (index < importedAvatars.length) {
    return importedAvatars[index];
  }
  
  // 超过7个的用户使用UI Avatars API
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
};

const AV_PAL = {
  郑:{bg:"#bae0ff",fg:"#0958d9"},冯:{bg:"#d9f7be",fg:"#389e0d"},周:{bg:"#fff7e6",fg:"#d46b08"},
  钱:{bg:"#ffd6e7",fg:"#c41d7f"},李:{bg:"#f9f0ff",fg:"#531dab"},卢:{bg:"#e6f4ff",fg:"#0958d9"},
  张:{bg:"#fff2e8",fg:"#d4380d"},A:{bg:"#ffd666",fg:"#874d00"},
};
const avc = c => AV_PAL[c] ?? {bg:"#f0f0f0",fg:"#595959"};

// ── Icons ──────────────────────────────────────────────────────────────────────
export const IconAddSheetOutlined = ({className=""}) => (
  <img src={iconAddSheetOutlined} alt="add sheet icon" style={{ width: 16, height: 16 }} className={className} />
);

export const IconBuildingFilled = ({className=""}) => (
  <img src={iconBuildingFilled} alt="building icon" style={{ width: 16, height: 16 }} className={className} />
);

const IExpand = () => (
  <img src={iconExpandOutlined} alt="expand icon" style={{ width: 14, height: 14 }} />
);
const ICopy = () => (
  <img src={iconCopyOutlined} alt="copy icon" style={{ width: 14, height: 14 }} />
);
const IAdmin = () => (
  <img src={iconAdminOutlined} alt="admin icon" style={{ width: 16, height: 16 }} />
);
const ISearch = () => (
  <img src={iconMemberAddOutlined} alt="member add icon" style={{ width: 14, height: 14 }} />
);
const IDown = ({s="var(--t3)"}) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 5l4 4 4-4" stroke={s} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IAdd = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 2.5v9M2.5 7h9" stroke="var(--t3)" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const ITime = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="5.5" stroke="var(--t3)" strokeWidth="1.1"/>
    <path d="M7 4.2v2.9l2 1.2" stroke="var(--t3)" strokeWidth="1.1" strokeLinecap="round"/>
  </svg>
);
const IWinNew = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 10.5L10 2.5M7 2h3.5v3.5" stroke="var(--t3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IAssign = () => (
  <img src={iconGroupOutlined} alt="assign icon" style={{ width: 16, height: 16 }} />
);
const IChat = () => (
  <img src={iconLinkOutlined} alt="chat icon" style={{ width: 16, height: 16 }} />
);
const INotice = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2.5 9.5V5.5a4.5 4.5 0 019 0v4l1 1H1.5l1-1z" stroke="var(--t2)" strokeWidth="1.1" strokeLinejoin="round"/>
    <path d="M5 11.5a2 2 0 004 0" stroke="var(--t2)" strokeWidth="1.1" strokeLinecap="round"/>
  </svg>
);
const ISend = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1.5 12.5L12.5 7 1.5 1.5v4l7.5 1.5-7.5 1.5v4z" fill="white"/>
  </svg>
);
const ILogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="var(--pr1)"/>
    <path d="M7 16C7 11.03 11.03 7 16 7" stroke="var(--lk6)" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M7 16C7 20.97 11.03 25 16 25" stroke="var(--lk6)" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M16 7C20.97 7 25 11.03 25 16" stroke="#36CFC9" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M16 25C20.97 25 25 20.97 25 16" stroke="var(--lk6)" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="2.5 3"/>
    <circle cx="11" cy="21" r="3" fill="var(--lk6)"/>
    <circle cx="21" cy="11" r="3" fill="#36CFC9"/>
  </svg>
);

// ── Atoms ──────────────────────────────────────────────────────────────────────
const Av = ({c, name, sz=32}) => {
  const avatar = getUserAvatar(name);
  if (avatar) {
    return (
      <div style={{width:sz,height:sz,borderRadius:"50%",overflow:"hidden",flexShrink:0,transition:"all 0.1s ease-out",transformOrigin:"top left"}}>
        <img 
          src={avatar} 
          alt={name} 
          style={{width:"100%",height:"100%",objectFit:"cover"}}
        />
      </div>
    );
  }
  return (
    <div style={{width:sz,height:sz,borderRadius:"50%",background:avc(c).bg,color:avc(c).fg,
      display:"flex",alignItems:"center",justifyContent:"center",
      fontSize:sz*.375,fontWeight:500,flexShrink:0,userSelect:"none",
      fontFamily:"var(--f-m12-fam)",transition:"all 0.1s ease-out",transformOrigin:"top left"}}>
      {c}
    </div>
  );
};
const VD = () => <div style={{width:1,height:12,background:"var(--f4)",flexShrink:0}}/>;
const Badge = ({label, bg, clr}) => (
  <span className="m12" style={{display:"inline-flex",alignItems:"center",
    padding:"0 4px",borderRadius:4,background:bg,color:clr,lineHeight:"20px",
    width: label === "处理中" || label === "待接单" ? "44px" : "auto",
    justifyContent: label === "处理中" || label === "待接单" ? "center" : "flex-start"
  }}>
    {label}
  </span>
);

// ── WorkspaceContent ───────────────────────────────────────────────────────────
const WorkspaceContent = ({ currentRole }) => {
  const [tab,setTab]     = useState("all");
  const [selUser,setSU]  = useState(null);
  const [selTk,setSTk]   = useState(null);
  // 新增记忆状态，用于存储每个 tab 的历史选中记录
  const [tabMemory, setTabMemory] = useState({});
  // 新增创建工单相关状态 - UserRow中的按钮
  const [showAddMenuUserRow, setShowAddMenuUserRow] = useState(false);
  const addButtonRefUserRow = useRef(null);
  const menuRefUserRow = useRef(null);

  // 新增创建工单相关状态 - TaskDetailAndCopilotSection中的按钮
  const [showAddMenuTaskDetail, setShowAddMenuTaskDetail] = useState(false);
  const addButtonRefTaskDetail = useRef(null);
  const menuRefTaskDetail = useRef(null);

  // 全局创建工单弹窗状态
  const [showCreateTicketModal, setShowCreateTicketModal] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const imageRefModal = useRef(null);
  
  // 为Tab 2创建专属的mock数据
  const oncallData = [
    // 值班号会话
    {
      id: 1,
      name: "赵吾光",
      av: "赵",
      channel: "oncall",
      tag: "GOCC",
      latestMessage: "2楼的Wi-Fi连接不上了，需要紧急处理",
      time: "14:30",
      tickets: [
        {
          id: "IT-921501851",
          title: "Wi-Fi连接问题",
          status: "待处理",
          sBg: "rgba(255,125,0,.12)",
          sClr: "#a8510a",
          sub: "2楼会议室",
          time: "14:30"
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
      time: "13:45",
      tickets: [
        {
          id: "IT-921501852",
          title: "服务器宕机",
          status: "处理中",
          sBg: "rgba(22,93,255,.12)",
          sClr: "#1033a3",
          sub: "机房A区",
          time: "13:45"
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
      time: "12:20",
      tickets: [
        {
          id: "IT-921501853",
          title: "财务系统故障",
          status: "已解决",
          sBg: "rgba(0,194,146,.12)",
          sClr: "#007d58",
          sub: "财务部门",
          time: "12:20"
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
      time: "11:15",
      tickets: [
        {
          id: "IT-921501854",
          title: "入职流程更新",
          status: "待处理",
          sBg: "rgba(255,125,0,.12)",
          sClr: "#a8510a",
          sub: "人力资源部",
          time: "11:15"
        }
      ]
    },
    {
      id: 5,
      name: "王小红",
      av: "王",
      channel: "oncall",
      tag: "GOCC",
      latestMessage: "客户反馈产品功能问题",
      time: "10:30",
      tickets: [
        {
          id: "IT-921501855",
          title: "客户功能反馈",
          status: "处理中",
          sBg: "rgba(22,93,255,.12)",
          sClr: "#1033a3",
          sub: "业务发展部",
          time: "10:30"
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
      time: "09:45",
      tickets: [
        {
          id: "IT-921501856",
          title: "空调温度调节",
          status: "已解决",
          sBg: "rgba(0,194,146,.12)",
          sClr: "#007d58",
          sub: "运维部",
          time: "09:45"
        }
      ]
    }
  ];

  // 处理点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      // 处理UserRow中的按钮
      if (showAddMenuUserRow && addButtonRefUserRow.current && !addButtonRefUserRow.current.contains(event.target) && menuRefUserRow.current && !menuRefUserRow.current.contains(event.target)) {
        setShowAddMenuUserRow(false);
      }

      // 处理TaskDetailAndCopilotSection中的按钮
      if (showAddMenuTaskDetail && addButtonRefTaskDetail.current && !addButtonRefTaskDetail.current.contains(event.target) && menuRefTaskDetail.current && !menuRefTaskDetail.current.contains(event.target)) {
        setShowAddMenuTaskDetail(false);
      }

      // 处理全局创建工单弹窗
      if (showCreateTicketModal) {
        // 点击图片右上角80x80px区域关闭图片
        if (imageRefModal.current) {
          const rect = imageRefModal.current.getBoundingClientRect();
          const right = rect.right;
          const top = rect.top;
          if (event.clientX >= right - 80 && event.clientX <= right && event.clientY >= top && event.clientY <= top + 80) {
            setIsVisibleModal(false);
            setTimeout(() => {
              setShowCreateTicketModal(false);
            }, 200);
          }
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAddMenuUserRow, showAddMenuTaskDetail, showCreateTicketModal]);

  // 处理全局创建工单弹窗的过渡效果
  useEffect(() => {
    if (showCreateTicketModal) {
      setIsVisibleModal(true);
    }
  }, [showCreateTicketModal]);

  // 处理用户选择
  const handleSelectUser = (user) => {
    setSU(user);
  };

  // 处理工单选择
  const handleSelectTicket = (ticket, channel) => {
    setSTk(ticket);
  };

  // 处理标签页切换
  const changeTab = (activeTab, memoryData) => {
    setTab(activeTab);
    // 对于非全部标签页，恢复记忆的选中状态
    if (activeTab !== 'all' && memoryData) {
      if (memoryData.userId) {
        // 恢复用户选中状态
        const userToSelect = userData.find(u => u.id === memoryData.userId);
        if (userToSelect) {
          setSU(userToSelect);
        }
      }
      if (memoryData.ticketId) {
        // 恢复工单选中状态
        // 这里需要根据channel找到对应的工单
        setSTk({ id: memoryData.ticketId });
      }
    } else {
      // 对于全部标签页或无记忆数据，清空选中状态
      setSU(null);
      setSTk(null);
    }
  };

  // 处理创建工单按钮点击
  const handleCreateTicket = () => {
    setShowAddMenuUserRow(true);
  };

  return (
    <>
      <UserTaskListSection
        activeTab={tab} onTabChange={changeTab}
        selUser={selUser} onSelUser={handleSelectUser}
        selTk={selTk} onSelTk={handleSelectTicket}
        tabMemory={tabMemory} setTabMemory={setTabMemory}
        showAddMenu={showAddMenuUserRow}
        setShowAddMenu={setShowAddMenuUserRow}
        setShowCreateTicketModal={setShowCreateTicketModal}
        addButtonRef={addButtonRefUserRow}
        menuRef={menuRefUserRow}
        role={currentRole}
        oncallData={oncallData}
      />
      <TaskDetailAndCopilotSection 
        ticket={selTk}
        showAddMenu={showAddMenuTaskDetail}
        setShowAddMenu={setShowAddMenuTaskDetail}
        setShowCreateTicketModal={setShowCreateTicketModal}
        addButtonRef={addButtonRefTaskDetail}
        menuRef={menuRefTaskDetail}
        role={currentRole}
        selUser={selUser}
        oncallData={oncallData}
      />
      {/* 全局创建工单弹窗 */}
      {showCreateTicketModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1001, opacity: isVisibleModal ? 1 : 0, transition: 'opacity 0.2s ease-in-out' }}>
          {/* 黑色遮罩 */}
          <div className="create-ticket-overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', transition: 'opacity 0.2s ease-in-out' }} />
          {/* 图片 */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: isVisibleModal ? 'translate(-50%, -50%)' : 'translate(-50%, -50%) scale(0.9)', zIndex: 1002, opacity: isVisibleModal ? 1 : 0, transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-out' }}>
            <img 
              ref={imageRefModal}
              src={createTicketImage} 
              alt="创建工单" 
              style={{ width: 600, objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </>
  );
};

// ── LeftSidebar ────────────────────────────────────────────────────────────────
const LeftSidebar = ({ onPageChange, activeNavTab, onNavTabChange }) => {
  return (
    <aside style={{width:72,flexShrink:0,display:"flex",flexDirection:"column",
      alignItems:"center",justifyContent:"space-between",
      background:"var(--bg1)",borderRight:"1px solid var(--bd2)"}}>
      <header style={{display:"flex",flexDirection:"column",alignItems:"center",
        gap:16,padding:"16px 8px 8px",width:"100%",
        boxShadow:"0 0 8px rgba(0,0,0,.08)"}}>
        <div style={{width:32,height:32}}><ILogo/></div>
        <nav style={{display:"flex",flexDirection:"column",alignItems:"center",gap:12}}>
          <div style={{width:32,height:32,borderRadius:"50%",background:"var(--pr1)",
            display:"flex",alignItems:"center",justifyContent:"center"}}>
            <span className="m12 clk7" style={{fontSize:13}}>我</span>
          </div>
          <button aria-label="Add new sheet"
            style={{width:32,height:32,borderRadius:8,display:"flex",
              alignItems:"center",justifyContent:"center",
              background:"linear-gradient(0deg,rgba(41,98,255,1),rgba(41,98,255,1))"}}>
            <IconAddSheetOutlined/>
          </button>
        </nav>
      </header>
      <nav style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,
        padding:"16px 4px 8px",flex:1,width:"100%"}}>
        <button 
          style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,
            paddingTop:10,paddingBottom:8,width:"100%",borderRadius:8,
            background:activeNavTab === 'tab1' ? "rgba(25,74,208,.08)" : "transparent",
            transition:"background-color 0.2s"}}
          onClick={() => {
            onNavTabChange('tab1');
            onPageChange('dashboard');
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: 16, height: 16, color: activeNavTab === 'tab1' ? "#194AD0" : "#626770"}}>
            <path d="M6.33325 14.6665C6.70144 14.6665 6.99992 14.368 6.99992 13.9999V11.3332C6.99992 10.965 7.2984 10.6665 7.66658 10.6665H8.33325C8.70144 10.6665 8.99992 10.965 8.99992 11.3332V13.9999C8.99992 14.368 9.29839 14.6665 9.66658 14.6665H13.3333C14.0696 14.6665 14.6666 14.0696 14.6666 13.3332V6.6665C14.6666 6.26146 14.4825 5.87838 14.1662 5.62535L8.83284 1.6662C8.34589 1.27663 7.65395 1.27663 7.16699 1.6662L1.83366 5.62535C1.51737 5.87838 1.33325 6.26146 1.33325 6.6665V13.3332C1.33325 14.0696 1.93021 14.6665 2.66659 14.6665H6.33325Z" fill="currentColor"/>
          </svg>
          <span className="m12" style={{textAlign:"center",color: activeNavTab === 'tab1' ? "#194AD0" : "#626770", fontWeight: activeNavTab === 'tab1' ? "500" : "400"}}>工作台</span>
        </button>
        <button 
          style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            gap:4,
            paddingTop:10,
            paddingBottom:8,
            width:"100%",
            borderRadius:8,
            background:activeNavTab === 'tab2' ? "rgba(25,74,208,.08)" : "transparent",
            transition:"background-color 0.2s"
          }}
          onMouseEnter={(e) => {
            if (activeNavTab !== 'tab2') {
              e.target.style.backgroundColor = "#F2F3F5";
            }
          }}
          onMouseLeave={(e) => {
            if (activeNavTab !== 'tab2') {
              e.target.style.backgroundColor = "transparent";
            }
          }}
          onClick={() => {
            onNavTabChange('tab2');
            onPageChange('dashboard');
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: 16, height: 16, color: activeNavTab === 'tab2' ? "#194AD0" : "#626770"}}>
            <path d="M6.33325 14.6665C6.70144 14.6665 6.99992 14.368 6.99992 13.9999V11.3332C6.99992 10.965 7.2984 10.6665 7.66658 10.6665H8.33325C8.70144 10.6665 8.99992 10.965 8.99992 11.3332V13.9999C8.99992 14.368 9.29839 14.6665 9.66658 14.6665H13.3333C14.0696 14.6665 14.6666 14.0696 14.6666 13.3332V6.6665C14.6666 6.26146 14.4825 5.87838 14.1662 5.62535L8.83284 1.6662C8.34589 1.27663 7.65395 1.27663 7.16699 1.6662L1.83366 5.62535C1.51737 5.87838 1.33325 6.26146 1.33325 6.6665V13.3332C1.33325 14.0696 1.93021 14.6665 2.66659 14.6665H6.33325Z" fill="currentColor"/>
          </svg>
          <span className="m12" style={{textAlign:"center",color: activeNavTab === 'tab2' ? "#194AD0" : "#626770", fontWeight: activeNavTab === 'tab2' ? "500" : "400"}}>工作台</span>
        </button>
      </nav>
    </aside>
  );
};

// ── UserTaskListSection ────────────────────────────────────────────────────────
export const UserTaskListSection = ({activeTab,onTabChange,selUser,onSelUser,selTk,onSelTk,tabMemory,setTabMemory, showAddMenu, setShowAddMenu, setShowCreateTicketModal, addButtonRef, menuRef, role, oncallData}) => {
  // 根据role设置不同的标签选项
  const tabs = role === 'tab2' ? 
    [{k:"all",l:"全部"},{k:"oncall",l:"值班号"},{k:"topic",l:"话题群"},{k:"mail",l:"邮件"}]
    : [{k:"all",l:"全部"},{k:"service",l:"服务台"},{k:"topic",l:"话题群"},{k:"mail",l:"邮件"}];
  
  // 为每个用户维护独立的展开状态
  const [expandedUsers, setExpandedUsers] = useState({});

  const toggleUser = (userId) => {
    setExpandedUsers(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  // 根据 activeTab 和 role 过滤数据
  const filteredData = role === 'tab2' ? 
    // Tab 2的数据：值班号使用oncallData，话题群和邮件使用mixedSessionList中的对应数据
    [
      // 值班号数据
      ...oncallData.filter(item => {
        if (activeTab === 'all' || activeTab === 'oncall') return item.channel === 'oncall';
        return false;
      }),
      // 话题群数据
      ...mixedSessionList.filter(item => {
        if (activeTab === 'all' || activeTab === 'topic') return item.channel === 'topic';
        return false;
      }),
      // 邮件数据
      ...mixedSessionList.filter(item => {
        if (activeTab === 'all' || activeTab === 'mail') return item.channel === 'email';
        return false;
      })
    ].sort((a, b) => {
      // 首先按类型排序：值班号 > 话题群 > 邮件
      const typePriority = {
        'oncall': 3,
        'topic': 2,
        'email': 1
      };
      
      // 类型优先级比较
      if (typePriority[a.channel] !== typePriority[b.channel]) {
        return typePriority[b.channel] - typePriority[a.channel];
      }
      
      // 类型相同则按时间排序
      const timeToMinutes = (timeStr) => {
        if (!timeStr) return 0;
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + minutes;
      };
      return timeToMinutes(b.time) - timeToMinutes(a.time);
    }) :
    // Tab 1的数据
    mixedSessionList.filter(item => {
      if (activeTab === 'all') return true;
      if (activeTab === 'service') return item.channel === 'servicedesk';
      if (activeTab === 'topic') return item.channel === 'topic';
      if (activeTab === 'mail') return item.channel === 'email';
      return true;
    }).sort((a, b) => {
      // 将时间字符串转换为分钟数进行比较
      const timeToMinutes = (timeStr) => {
        if (!timeStr) return 0;
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + minutes;
      };
      return timeToMinutes(b.time) - timeToMinutes(a.time);
    });

  return (
    <aside style={{width:300,flexShrink:0,display:"flex",flexDirection:"column",
      borderRight:"1px solid var(--bd2)"}}>
      <header style={{display:"flex",flexDirection:"column",gap:8,padding:"16px 16px",width:"100%",height:56}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <h1 className="m16 ct1" style={{margin:0}}>我的工作台</h1>
          <button style={{padding:4}} aria-label="管理"><IAdmin/></button>
        </div>
      </header>

      <div style={{padding:"0 16px"}}>
        {/* 只在tab1显示搜索框 */}
        {role !== 'tab2' && (
          <div style={{display:"flex",alignItems:"center",gap:4,height:32,padding:"5px 12px",
            borderRadius:6,background:"var(--bg1)",border:"1px solid var(--bd2)"}}>
            <ISearch/>
            <input type="search" placeholder="输入用户信息、资产编码、领取码"
              className="r14 ct4" style={{flex:1, minWidth: 0, paddingLeft: 0, paddingRight: 0}}/>
          </div>
        )}
        
        <div style={{display:"flex",alignItems:"center",gap:6,padding: role === 'tab2' ? "0 0 12px 0" : "12px 0",overflowX:"auto"}}>
          {tabs.map(tab => (
            <button
              key={tab.k}
              onClick={() => {
                // 映射 tabKey 到 channel
                const channelMap = role === 'tab2' ? {
                  'oncall': 'oncall',
                  'topic': 'topic',
                  'mail': 'email'
                } : {
                  'service': 'servicedesk',
                  'topic': 'topic',
                  'mail': 'email'
                };
                const channel = channelMap[tab.k];
                // 对于全部 tab，使用 tabKey 作为记忆键
                const memoryKey = tab.k === 'all' ? 'all' : channel;
                onTabChange(tab.k, memoryKey ? tabMemory[memoryKey] || null : null);
              }}
              style={{
                padding:"6px 12px",
                borderRadius:"9999px",
                fontSize:"14px",
                fontWeight:activeTab === tab.k ? "500" : "400",
                transition:"background-color 0.2s, color 0.2s, font-weight 0.2s",
                whiteSpace:"nowrap",
                backgroundColor:activeTab === tab.k ? "#e8f2ff" : "#f2f3f5",
                color:activeTab === tab.k ? "#2962ff" : "#4e5969",
                cursor:"pointer"
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.k) {
                  e.target.style.backgroundColor = "#e5e6eb";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.k) {
                  e.target.style.backgroundColor = "#f2f3f5";
                }
              }}
            >
              {tab.l}
            </button>
          ))}
        </div>
      </div>

      <section className="auto-hide-scroll" style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:4,marginLeft:4,marginRight:4,marginBottom:0,paddingBottom:24,maxHeight:"calc(100vh - 100px)"}}>
        {filteredData.map(item => {
          if (role === 'tab2' && item.channel === 'oncall') {
            // Tab2的值班号数据，使用特殊的渲染逻辑
            return (
              <div key={`${item.channel}-${item.id}`}>
                <div 
                  className={`rounded-[8px] transition-colors cursor-pointer ${selTk?.id === item.tickets?.[0]?.id ? 'bg-[#F1F6FF]' : 'bg-transparent hover:bg-[#F7F8FA]'}`}
                  style={{padding:'6px 12px'}}
                  onClick={()=>onSelTk(selTk?.id === item.tickets?.[0]?.id ? null : item.tickets?.[0], item.channel)}
                >
                  <div style={{display:"flex",alignItems:"center",gap:12,width:"100%"}}>
                    <Av c={item.av} name={item.name} sz={36}/>
                    <div style={{display:"flex",flexDirection:"column",gap:2,flex:1,minWidth:0}}>
                      <div style={{display:"flex",alignItems:"center",gap:4}}>
                        <span className="m14 ct1" style={{fontWeight:400}}>{item.name}</span>
                        {/* 强制展示Tag */}
                        <span style={{
                          display: "flex",
                          height: 18,
                          padding: "0 4px",
                          alignItems: "center",
                          gap: 4,
                          borderRadius: 4,
                          border: "0.5px solid var(--color-border-3, #C9CDD4)",
                          color: "var(--color-text-2, #4E5969)",
                          fontFamily: "PingFang SC",
                          fontSize: 12,
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "normal"
                        }}>
                          {item.tag}
                        </span>
                      </div>
                      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        <span className="r12 ct3" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
                          {item.latestMessage}
                        </span>
                        <span className="r12 ct4" style={{flexShrink:0}}>{item.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else if (item.channel === 'servicedesk') {
            // 服务台数据，使用 UserRow 组件
            return (
              <div key={`${item.channel}-${item.id}`}>
                <UserRow user={item}
                  isExp={expandedUsers[item.id]}
                  selTk={selTk}
                  onToggle={()=>toggleUser(item.id)}
                  onSelTk={onSelTk}
                  showAddMenu={showAddMenu}
                  setShowAddMenu={setShowAddMenu}
                  setShowCreateTicketModal={setShowCreateTicketModal}
                  addButtonRef={addButtonRef}
                  menuRef={menuRef}/>
              </div>
            );
          } else {
            // 话题群或邮箱数据，使用 SessionRow 组件
            return (
              <div key={`${item.channel}-${item.id}`}>
                <SessionRow item={item} selTk={selTk} onSelTk={onSelTk} activeTab={activeTab}/>
              </div>
            );
          }
        })}
      </section>
    </aside>
  );
};

const SessionRow = ({item,selTk,onSelTk,activeTab}) => {
  const isSelected = selTk?.id === item.tickets?.[0]?.id;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`rounded-[8px] transition-colors cursor-pointer ${isSelected ? 'bg-[#F1F6FF]' : 'bg-transparent hover:bg-[#F7F8FA]'}`}
      style={{padding:'6px 12px'}}
      onClick={()=>onSelTk(isSelected?null:item.tickets?.[0], item.channel)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{display:"flex",alignItems:"center",gap:12,width:"100%"}}>
        <Av c={item.av} name={item.name} sz={36}/>
        <div style={{display:"flex",flexDirection:"column",gap:2,flex:1,minWidth:0}}>
          <div style={{display:"flex",alignItems:"center",gap:8,justifyContent:"space-between"}}>
            <div style={{display:"flex",alignItems:"center",gap:4}}>
              <span className="m14 ct1" style={{fontWeight:400}}>{item.name}</span>
              {(item.channel === 'topic' || item.channel === 'email') && activeTab !== 'topic' && activeTab !== 'mail' && (
                <span style={{
                  display: "flex",
                  height: 18,
                  padding: "0 4px",
                  alignItems: "center",
                  gap: 4,
                  borderRadius: 4,
                  border: "0.5px solid var(--color-border-3, #C9CDD4)",
                  color: "var(--color-text-2, #4E5969)",
                  fontFamily: "PingFang SC",
                  fontSize: 12,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal"
                }}>
                  {item.channel === 'topic' ? '话题群' : '邮件'}
                </span>
              )}
            </div>
            {isHovered ? (
              <div style={{flexShrink:0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img 
                  src={endIcon} 
                  alt="结束" 
                  style={{ width: 16, height: 16, transition: 'filter 0.2s' }}
                  onMouseEnter={(e) => {
                    e.target.style.filter = 'invert(46%) sepia(81%) saturate(1718%) hue-rotate(94deg) brightness(99%) contrast(97%)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.filter = 'none';
                  }}
                />
              </div>
            ) : (
              <span className="r12 ct4">{item.time}</span>
            )}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:4,minWidth:0}}>
            <span className="r12 ct4" style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",color:"rgb(134, 144, 156)"}}>
              {item.sub || item.lastMessage}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserRow = ({user,isExp,selTk,onToggle,onSelTk, showAddMenu, setShowAddMenu, setShowCreateTicketModal, addButtonRef, menuRef}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // 增加「名下是否有选中工单」的判断
  const hasSelectedTicket = user.tickets?.some(t => t.id === selTk?.id) || selTk?.id === `user-${user.id}`;

  // 移除UserRow中的useEffect，因为现在状态管理在Screen组件中
  // 处理过渡效果由Screen组件的useEffect处理
  return (
    <div 
      className={`rounded-[8px] transition-colors cursor-pointer ${ 
        isExp 
          ? 'bg-[#F7F8FA]' 
          : hasSelectedTicket 
            ? 'bg-[#F1F6FF]' 
            : 'bg-transparent hover:bg-[#F7F8FA]' 
      }`}
      style={{padding: isExp ? '4px' : '6px 12px'}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
        <button 
          onClick={() => {
            // 检查用户名下待办工单数量
            const ticketCount = user.tickets?.length || 0;
            if (ticketCount === 0) {
              // 当待办工单数量为0时，直接设置选中状态，不展开
              onSelTk({ id: `user-${user.id}`, title: user.name, status: "无待办", sBg: "rgba(22,93,255,.12)", sClr: "#1033a3", src: "服务台", noTickets: true }, user.channel);
            } else {
              // 当待办工单数量大于0时，保持原交互
              onToggle();
            }
          }}
          style={{display:"flex",alignItems:"center",
            gap:12,padding: isExp ? "4px 4px 8px" : 0,width:"100%",background:"transparent",border:"none",cursor:"pointer"}}>
          <Av c={user.av} name={user.name} sz={isExp?24:36}/>
          {isExp ? (
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flex:1,minWidth:0}}>
              <span className="m14 ct1" style={{fontWeight:400}}>{user.name}</span>
              <span style={{padding:4,transform:"rotate(180deg)",display:"flex",flexShrink:0}}><IDown/></span>
            </div>
          ) : (
            <div style={{display:"flex",flexDirection:"column",flex:1,minWidth:0, gap:0}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <span className="m14 ct1" style={{fontWeight:400}}>{user.name}</span>
                {isHovered ? (
                  <div style={{flexShrink:0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img 
                      src={endIcon} 
                      alt="结束" 
                      style={{ width: 16, height: 16, transition: 'filter 0.2s' }}
                      onMouseEnter={(e) => {
                        e.target.style.filter = 'invert(46%) sepia(81%) saturate(1718%) hue-rotate(94deg) brightness(99%) contrast(97%)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.filter = 'none';
                      }}
                    />
                  </div>
                ) : (
                  <span className="r12 ct4" style={{flexShrink:0}}>{user.time}</span>
                )}
              </div>
              <div style={{display:"flex",alignItems:"center"}}>
                <span className="r12 ct3" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
                  {user.tickets?.length || 0} 张待办工单
                </span>
              </div>
            </div>
          )}
        </button>

        <AnimatePresence>
          {isExp&&(
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "power2.out" }}
              style={{ overflow: "hidden", transformOrigin: "top" }}
            >
              <div style={{display:"flex",flexDirection:"column",gap:4,width:"100%",padding:0}}>
                {user.tickets?.map(tk=>(
                  <TkCard key={tk.id} tk={tk}
                    isActive={selTk?.id===tk.id}
                    channel={user.channel}
                    onClick={(ticket, channel)=>onSelTk(selTk?.id===ticket.id?null:ticket, channel)}/>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {isExp&&(
          <div style={{position:"relative",width:"100%",marginTop:4}}>
            <button 
              ref={addButtonRef}
              aria-label="添加" 
              style={{display:"flex",alignItems:"center",
                justifyContent:"center",height:32,width:"100%",borderRadius:8,
                background:"transparent",border:"1px dashed #E5E6EB",
                transition:"border-color 0.2s",
                cursor:"pointer"}}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#2962FF";
                const img = e.target.querySelector('img');
                if (img) {
                  img.style.filter = "invert(45%) sepia(90%) saturate(500%) hue-rotate(200deg) brightness(90%) contrast(100%)";
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "#E5E6EB";
                const img = e.target.querySelector('img');
                if (img) {
                  img.style.filter = "invert(60%) sepia(0%) saturate(10%) hue-rotate(180deg) brightness(90%) contrast(90%)";
                }
              }}
              onClick={() => setShowAddMenu(!showAddMenu)}
            >
              <img src={newTicketIcon} alt="新建工单" style={{ width: 14, height: 14, filter: "invert(60%) sepia(0%) saturate(10%) hue-rotate(180deg) brightness(90%) contrast(90%)" }} />
            </button>
            {showAddMenu && (
              <div 
                ref={menuRef}
                style={{
                position:"absolute",
                top:"100%",
                left:0,
                right:0,
                marginTop:4,
                backgroundColor:"#FFFFFF",
                borderRadius:8,
                boxShadow:"0 2px 10px rgba(0,0,0,0.1)",
                padding:4,
                zIndex:1000
              }}>
                <button 
                  style={{
                    display:"flex",
                    alignItems:"center",
                    width:"100%",
                    textAlign:"left",
                    padding:"8px 12px",
                    borderRadius:6,
                    background:"transparent",
                    border:"none",
                    cursor:"pointer",
                    transition:"background-color 0.2s"
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#F2F3F5"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                  onClick={() => {
                    // 处理服务工单选项点击
                    setShowAddMenu(false);
                    setShowCreateTicketModal(true);
                  }}
                >
                  <img src={serviceTicketIcon} alt="服务工单" style={{ width: 16, height: 16, marginRight: 8, filter: "invert(15%) sepia(0%) saturate(10%) hue-rotate(340deg) brightness(90%) contrast(90%)" }} />
                  服务工单
                </button>
                <button 
                  style={{
                    display:"flex",
                    alignItems:"center",
                    width:"100%",
                    textAlign:"left",
                    padding:"8px 12px",
                    borderRadius:6,
                    background:"transparent",
                    border:"none",
                    cursor:"pointer",
                    transition:"background-color 0.2s",
                    marginTop:4
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#F2F3F5"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                  onClick={() => {
                    // 处理资产退库工单选项点击
                    setShowAddMenu(false);
                    setShowCreateTicketModal(true);
                  }}
                >
                  <img src={assetReturnIcon} alt="资产退库" style={{ width: 16, height: 16, marginRight: 8, filter: "invert(15%) sepia(0%) saturate(10%) hue-rotate(340deg) brightness(90%) contrast(90%)" }} />
                  资产退库工单
                </button>
                <button 
                  style={{
                    display:"flex",
                    alignItems:"center",
                    width:"100%",
                    textAlign:"left",
                    padding:"8px 12px",
                    borderRadius:6,
                    background:"transparent",
                    border:"none",
                    cursor:"pointer",
                    transition:"background-color 0.2s",
                    marginTop:4
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#F2F3F5"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                  onClick={() => {
                    // 处理资产维修工单选项点击
                    setShowAddMenu(false);
                    setShowCreateTicketModal(true);
                  }}
                >
                  <img src={assetRepairIcon} alt="资产维修" style={{ width: 16, height: 16, marginRight: 8, filter: "invert(15%) sepia(0%) saturate(10%) hue-rotate(340deg) brightness(90%) contrast(90%)" }} />
                  资产维修工单
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const TkCard = ({tk,isActive,onClick,channel}) => (
  <article onClick={()=>onClick(tk, channel)}
    className={`hover:bg-[#F7F8FA] transition-colors duration-200`}
    style={{display:"flex",flexDirection:"column",gap:8,padding:12,
      cursor:"pointer",background:"var(--bg1)",
      borderRadius:8,
      borderWidth:1,
      borderStyle:"solid",
      borderColor:isActive?"#2962FF":"transparent",
      transition:"border-color .15s,background-color .2s",
      WebkitTransition:"border-color .15s,background-color .2s",
      msTransition:"border-color .15s,background-color .2s"}}
    onMouseEnter={(e) => {
      if (!isActive) {
        e.target.style.borderColor = "#2962FF";
      }
    }}
    onMouseLeave={(e) => {
      if (!isActive) {
        e.target.style.borderColor = "transparent";
      }
    }}>
    <Badge label={tk.status} bg={tk.sBg} clr={tk.sClr}/>
    <h3 className="m14 ct1" style={{margin:0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis'}}>{tk.title}</h3>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
      <div style={{display:"inline-flex",alignItems:"center",gap:4}}>
        {tk.timer ? <ITime/> : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="var(--t3)" strokeWidth="1.1"/>
            <path d="M7 4.2v2.9l2 1.2" stroke="var(--t3)" strokeWidth="1.1" strokeLinecap="round"/>
          </svg>
        )}
        <span className="r12 ct2">{tk.sub}</span>
      </div>
      <time className="r12 ct3" style={{flexShrink:0,marginLeft:8}}>{tk.time}</time>
    </div>
  </article>
);

const TopicRow = ({user,isSel,onClick}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display:"flex",
        alignItems:"center",
        gap:12,
        padding:"8px 12px",
        width:"100%",
        borderRadius:8,
        background: isSel || isHovered ? "#F7F8FA" : "transparent",
        transition:"background-color 0.2s",
        cursor:"pointer"
      }}>
    <Av c={user.av} name={user.name} sz={36}/>
    <div style={{flex:1,display:"flex",flexDirection:"column",gap:2,minWidth:0,textAlign:"left"}}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <span className="r14 ct1">{user.name}</span>
        <time className="r12 ct3">{user.time}</time>
      </div>
      <span className="r12 ct3" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{user.sub}</span>
    </div>
    </button>
  );
};

// ── TaskDetailAndCopilotSection ────────────────────────────────────────────────
export const TaskDetailAndCopilotSection = ({ticket, showAddMenu, setShowAddMenu, setShowCreateTicketModal, addButtonRef, menuRef, role, selUser, oncallData}) => {
  const [copilotWidth, setCopilotWidth] = useState(480);
  const [isDragging, setIsDragging] = useState(false);
  const minWidth = 480;

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    // 获取包含工单详情和Copilot的容器元素
    const container = document.querySelector('.task-detail-copilot-container');
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    const newCopilotWidth = containerRect.width - (e.clientX - containerRect.left);
    
    if (newCopilotWidth >= minWidth && (containerRect.width - newCopilotWidth) >= minWidth) {
      setCopilotWidth(newCopilotWidth);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 添加全局鼠标事件监听
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  if(!ticket) return (
    <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16}}>
      <img src={imageCommonEmpty} alt="empty state" style={{ width: 88, height: 88, opacity: 1 }} />
      <p className="r14 ct3" style={{margin: 0}}>暂未选择工单</p>
    </div>
  );

  // 处理无待办工单的情况
  if(ticket.noTickets) return (
    <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16}}>
      <img src={imageCommonEmpty} alt="empty state" style={{ width: 88, height: 88, opacity: 1 }} />
      <p className="r14 ct3" style={{margin: 0}}>该用户暂无待办工单</p>
      <div style={{position: "relative"}}>
        <button 
          ref={addButtonRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 32,
            padding: "0 12px",
            borderRadius: 4,
            background: "#2962FF",
            border: "none",
            transition: "background-color 0.2s",
            cursor: "pointer",
            gap: 8
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#4F84FF";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#2962FF";
          }}
          onClick={() => setShowAddMenu(!showAddMenu)}
        >
          <img src={newTicketIcon} alt="新建工单" style={{ width: 14, height: 14, filter: "invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(200%) contrast(100%)" }} />
          <span className="r14" style={{ color: "#FFFFFF" }}>创建工单</span>
        </button>
        {showAddMenu && (
          <div 
            ref={menuRef}
            style={{
            position:"absolute",
            top:"100%",
            left:0,
            width:160,
            marginTop:4,
            backgroundColor:"#FFFFFF",
            borderRadius:8,
            boxShadow:"0 2px 10px rgba(0,0,0,0.1)",
            padding:4,
            zIndex:1000
          }}>
            <button 
              style={{
                display:"flex",
                alignItems:"center",
                width:"100%",
                textAlign:"left",
                padding:"8px 12px",
                borderRadius:6,
                background:"transparent",
                border:"none",
                cursor:"pointer",
                transition:"background-color 0.2s"
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#F2F3F5"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
              onClick={() => {
                    // 处理服务工单选项点击
                    setShowAddMenu(false);
                    setShowCreateTicketModal(true);
                  }}
            >
              <img src={serviceTicketIcon} alt="服务工单" style={{ width: 16, height: 16, marginRight: 8, filter: "invert(15%) sepia(0%) saturate(10%) hue-rotate(340deg) brightness(90%) contrast(90%)" }} />
              服务工单
            </button>
            <button 
              style={{
                display:"flex",
                alignItems:"center",
                width:"100%",
                textAlign:"left",
                padding:"8px 12px",
                borderRadius:6,
                background:"transparent",
                border:"none",
                cursor:"pointer",
                transition:"background-color 0.2s",
                marginTop:4
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#F2F3F5"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
              onClick={() => {
                    // 处理资产退库工单选项点击
                    setShowAddMenu(false);
                    setShowCreateTicketModal(true);
                  }}
            >
              <img src={assetReturnIcon} alt="资产退库工单" style={{ width: 16, height: 16, marginRight: 8, filter: "invert(15%) sepia(0%) saturate(10%) hue-rotate(340deg) brightness(90%) contrast(90%)" }} />
              资产退库工单
            </button>
            <button 
              style={{
                display:"flex",
                alignItems:"center",
                width:"100%",
                textAlign:"left",
                padding:"8px 12px",
                borderRadius:6,
                background:"transparent",
                border:"none",
                cursor:"pointer",
                transition:"background-color 0.2s",
                marginTop:4
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#F2F3F5"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
              onClick={() => {
                    // 处理资产维修工单选项点击
                    setShowAddMenu(false);
                    setShowCreateTicketModal(true);
                  }}
            >
              <img src={assetRepairIcon} alt="资产维修工单" style={{ width: 16, height: 16, marginRight: 8, filter: "invert(15%) sepia(0%) saturate(10%) hue-rotate(340deg) brightness(90%) contrast(90%)" }} />
              资产维修工单
            </button>
          </div>
        )}
      </div>
    </div>
  );

  // 查找对应的用户数据，用于显示标签
  const getUserData = () => {
    if (role === 'tab2' && ticket.id.startsWith('IT-')) {
      // 从oncallData中查找对应的用户数据
      // 这里我们通过匹配tickets中的id来找到对应的用户
      return oncallData.find(user => 
        user.tickets.some(t => t.id === ticket.id)
      );
    }
    return selUser;
  };
  
  const userData = getUserData();

  // 为值班号工单添加默认经办人信息
  const getHandler = () => {
    if (ticket.handler) return ticket.handler;
    if (role === 'tab2' && ticket.id.startsWith('IT-')) {
      // 为值班号工单添加默认经办人
      const handlerMap = {
        'IT-921501851': 'Ally',
        'IT-921501852': 'Bob',
        'IT-921501853': 'Charlie',
        'IT-921501854': 'David',
        'IT-921501855': 'Eve',
        'IT-921501856': 'Frank'
      };
      return handlerMap[ticket.id] || 'System';
    }
    return '';
  };
  
  const handler = getHandler();

  return (
    <div style={{flex:1,width:0,height:900,display:"flex",flexDirection:"column",background:"var(--bg1)"}}>
      {/* Header */}
      <header style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",
        padding:"12px 16px",flexShrink:0,borderBottom:"1px solid var(--bd2)",height:76}}>
        <div style={{display:"flex",flexDirection:"column",gap:6,minWidth:0,flex:1,marginRight:16}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:12}}>
            <h1 className="m16 ct1" style={{margin:0}}>
              {role === 'tab2' && ticket.id.startsWith('IT-') ? 
                `From ${userData?.tag} Oncall：${userData?.name}` : 
                ticket.title
              }
            </h1>
            <Badge label={ticket.status} bg={ticket.sBg} clr={ticket.sClr}/>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8}}>
              <span className="r14 clk6">{ticket.id}</span>
              <button aria-label="展开"><IExpand/></button>
              <button aria-label="复制" onClick={()=>navigator.clipboard?.writeText(ticket.id)}><ICopy/></button>
            </div>
            {ticket.asset&&<><VD/><span className="r14 ct2">资产编码：{ticket.asset}</span></>}
            {(ticket.handler || handler)&&<><VD/><span className="r14 ct2">经办人：{ticket.handler || handler}</span></>}
            <VD/>
            <span className="r14 ct2">
              工单来源：{role === 'tab2' && ticket.id.startsWith('IT-') ? 'Lark 值班号' : ticket.src}
            </span>
          </div>
        </div>
        <div style={{display:"inline-flex",gap:8,alignItems:"center",flexShrink:0}}>
          <button style={{display:"inline-flex",alignItems:"center",gap:6,height:32,padding:"0 12px",
            borderRadius:6,border:"1px solid var(--bd2)",background:"var(--bg1)"}}>
            <span className="r14 ct1">工作流操作</span>
            <IDown s="var(--t1)"/>
          </button>
          <div style={{display:"inline-flex",alignItems:"center",height:32,
            border:"1px solid var(--bd2)",borderRadius:6,overflow:"hidden",background:"var(--bg1)"}}>
            <button style={{width:34,display:"flex",alignItems:"center",justifyContent:"center",
              borderRight:"1px solid var(--bd2)",height:"100%",padding:"0 9px"}} aria-label="分配">
              <IAssign/>
            </button>
            <button style={{width:32,display:"flex",alignItems:"center",justifyContent:"center",
              height:"100%",padding:"0 9px"}} aria-label="聊天">
              <IChat/>
            </button>
          </div>
        </div>
      </header>

      {/* 工单详情和Copilot并排显示 */}
      <div className="task-detail-copilot-container" style={{flex:1,display:"flex",overflow:"hidden"}}>
        {/* 工单详情 */}
        <div style={{flex:1,minWidth:minWidth,padding:24,overflowY:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <h2 className="m14 ct1" style={{margin:"0 0 16px", textAlign:"center"}}>
            {role === 'tab2' && ticket.id.startsWith('IT-') ? "会话详情" : 
             ticket?.src === "话题群" ? "群聊详情" : 
             ticket?.src === "邮件" ? "邮件详情" : "工单详情"}
          </h2>
        </div>
        {/* 分割线 */}
        <div 
          style={{
            width: 10, // 增大热区宽度
            backgroundColor: "transparent",
            cursor: "col-resize",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          onMouseDown={handleMouseDown}
        >
          <div 
            style={{
              width: isDragging ? 2 : 1,
              height: "100%",
              backgroundColor: isDragging ? "#2962FF" : "var(--bd2)",
              transition: "width 0.1s, background-color 0.1s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#2962FF";
              e.currentTarget.style.width = "2px";
            }}
            onMouseLeave={(e) => {
              if (!isDragging) {
                e.currentTarget.style.backgroundColor = "var(--bd2)";
                e.currentTarget.style.width = "1px";
              }
            }}
          />
        </div>
        {/* Copilot */}
        <div style={{width:copilotWidth,minWidth:minWidth,padding:24,overflowY:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <h2 className="m14 ct1" style={{margin:"0 0 16px", textAlign:"center"}}>Copilot</h2>
        </div>
      </div>
    </div>
  );
};

// ── Topic Chat ─────────────────────────────────────────────────────────────────
const TopicChat = ({user}) => {
  if(!user) return (
    <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}}>
      <p className="r14 ct3">请选择一个话题群工单</p>
    </div>
  );

  // 根据用户ID返回不同的聊天内容
  const renderChatContent = () => {
    switch(user.id) {
      case 1: // 卢桂周
        return (
          <>
            <header style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",
              padding:"12px 16px",flexShrink:0,borderBottom:"1px solid var(--bd2)",height:76}}>
              <div style={{flex:1,minWidth:0,marginRight:16}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
                  <h1 className="m16 ct1" style={{margin:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                    盈都网络今天特别不好，打开个飞书文档 10s以上，而且中间时不时显示网络中断
                  </h1>
                  <Badge label="处理中" bg="rgba(22,93,255,.12)" clr="#1033a3"/>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <span className="r14 clk6" style={{cursor:"pointer"}}>IT-929851291</span>
                  <VD/>
                  <span className="r14 ct2">经办人：</span>
                  <Av c="A" name="Ally" sz={16}/>
                  <span className="r14 ct2">Ally</span>
                  <VD/>
                  <span className="r14 ct2">工单来源：话题群</span>
                </div>
              </div>
              <button style={{display:"inline-flex",alignItems:"center",gap:6,flexShrink:0,
                height:32,padding:"0 12px",borderRadius:6,
                border:"1px solid var(--bd2)",background:"var(--bg1)"}}>
                <span className="r14 ct1">工作流操作</span>
                <IDown s="var(--t1)"/>
              </button>
            </header>

            <div style={{flex:1,display:"flex",overflow:"hidden"}}>
              <div style={{flex:1,display:"flex",flexDirection:"column",borderRight:"1px solid var(--bd2)"}}>
                <div style={{flex:1,overflowY:"auto",padding:16,scrollbarWidth:"none",msOverflowStyle:"none"}}>
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  {/* Origin card */}
                  <div style={{background:"var(--bg1)",border:"1px solid var(--bd2)",
                    borderRadius:10,padding:"12px 16px",marginBottom:16}}>
                    <p className="m14 ct1" style={{margin:"0 0 4px"}}>
                      盈都网络今天特别不好，打开个飞书文档 10s以...
                    </p>
                    <span className="r12 clk6" style={{cursor:"pointer"}}>来自 盈都D座生活群3（3F）</span>
                  </div>

                  <ChatMsg name="卢桂周" av="卢" time="2025年12月18日 15:49"
                    msg="盈都网络今天特别不好，打开个飞书文档 10s以上，而且中间时不时显示网络中断" />



                  {/* Bot */}
                  <div style={{display:"flex",gap:10,marginBottom:16}}>
                    <div style={{width:32,height:32,borderRadius:"50%",background:"#ff7a00",
                      display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <span style={{fontSize:9,color:"#fff",fontWeight:700,fontFamily:"var(--f-m12-fam)"}}>IT</span>
                    </div>
                    <div style={{flex:1}}>
                      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                        <span className="m14 ct1">IT Service</span>
                        <span className="r12" style={{padding:"1px 6px",borderRadius:8,
                          background:"var(--f2)",color:"var(--t3)"}}>机器人</span>
                        <time className="r12 ct3">2025年12月18日 15:51</time>
                      </div>
                      <div style={{background:"var(--f1)",border:"1px solid var(--bd2)",
                        borderRadius:8,padding:"12px 16px"}}>
                        <p className="r14 ct1" style={{margin:"0 0 8px",lineHeight:1.7}}>
                          根据您的描述，您所在的盈都大厦网络状况不佳，导致飞书文档加载缓慢并出现网络中断问题。以下是可能的解决方案：
                        </p>
                        <p className="m14 ct1" style={{margin:"0 0 6px"}}>### 一、检查网络连接</p>
                        <ol className="r14 ct1" style={{paddingLeft:18,margin:"0 0 8px",lineHeight:1.7}}>
                          <li style={{marginBottom:8}}>
                            <strong>确认网络连接状态：</strong>
                            <ul style={{paddingLeft:16,marginTop:4}}>
                              <li>确保您的设备已连接到公司网络 <span className="clk6">Inspire Creativity</span>。</li>
                              <li>如果您已开启 <span className="clk6">飞连 VPN</span>，尝试关闭 VPN 后观察网络情况是否有所改善<span className="clk6">[2]</span>。</li>
                            </ul>
                          </li>
                          <li>
                            <strong>测速与反馈：</strong>
                            <ul style={{paddingLeft:16,marginTop:4}}>
                              <li style={{marginBottom:4}}>如果您发现同区域的同事也遇到类似的网络问题，可能是工区网络存在问题。</li>
                              <li>您可以访问 <span className="clk6">NetCare</span> 网址进行网络测速，并将测速结果发送至 <span className="clk6">人工客服</span> 协助查看工区网络情况<span className="clk6">[2]</span>。</li>
                            </ul>
                          </li>
                        </ol>
                        <p className="r14 ct3" style={{margin:0}}>---</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Input bar */}
                <div style={{borderTop:"1px solid var(--bd2)",padding:"8px 16px",
                  display:"flex",alignItems:"center",gap:10,flexShrink:0,position:"sticky",bottom:0,background:"var(--bg1)"}}>
                  <div style={{flex:1,height:36,borderRadius:18,border:"1px solid var(--bd2)",
                    background:"var(--f1)",display:"flex",alignItems:"center",padding:"0 16px",
                    boxShadow:"0 1px 2px rgba(0,0,0,0.05)"}}>
                    <span className="r14 ct4">沟通时请保持"公开可接受"</span>
                  </div>
                  <div style={{display:"flex",gap:12,alignItems:"center"}}>
                    {["Aa","☺","@","✂","⊕","⛶"].map((ic,i)=>(
                      <button key={i} style={{fontSize:14,color:"var(--t3)",display:"flex",alignItems:"center"}}>{ic}</button>
                    ))}
                  </div>
                  <button style={{width:36,height:36,borderRadius:"50%",background:"var(--pr6)",
                    display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 1px 3px rgba(41,98,255,0.3)"}}>
                    <ISend/>
                  </button>
                </div>
              </div>
              <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <h2 className="m14 ct1" style={{margin:"0 0 16px", textAlign:"center"}}>Copilot</h2>
              </div>
            </div>
          </>
        );
      case 2: // 钱若霖
        return (
          <>
            <header style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",
              padding:"12px 16px",flexShrink:0,borderBottom:"1px solid var(--bd2)",height:76}}>
              <div style={{flex:1,minWidth:0,marginRight:16}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
                  <h1 className="m16 ct1" style={{margin:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                    2楼的 Wi-Fi 连接不上了
                  </h1>
                  <Badge label="待处理" bg="rgba(255,125,0,.12)" clr="#a8510a"/>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <span className="r14 clk6" style={{cursor:"pointer"}}>IT-929851302</span>
                  <VD/>
                  <span className="r14 ct2">经办人：</span>
                  <Av c="B" name="Bob" sz={16}/>
                  <span className="r14 ct2">Bob</span>
                  <VD/>
                  <span className="r14 ct2">工单来源：话题群</span>
                </div>
              </div>
              <button style={{display:"inline-flex",alignItems:"center",gap:6,flexShrink:0,
                height:32,padding:"0 12px",borderRadius:6,
                border:"1px solid var(--bd2)",background:"var(--bg1)"}}>
                <span className="r14 ct1">工作流操作</span>
                <IDown s="var(--t1)"/>
              </button>
            </header>

            <div style={{flex:1,display:"flex",overflow:"hidden"}}>
              <div style={{flex:1,display:"flex",flexDirection:"column",borderRight:"1px solid var(--bd2)"}}>
                <div style={{flex:1,overflowY:"auto",padding:16,scrollbarWidth:"none",msOverflowStyle:"none"}}>
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  {/* Origin card */}
                  <div style={{background:"var(--bg1)",border:"1px solid var(--bd2)",
                    borderRadius:10,padding:"12px 16px",marginBottom:16}}>
                    <p className="m14 ct1" style={{margin:"0 0 4px"}}>
                      2楼的 Wi-Fi 连接不上了
                    </p>
                    <span className="r12 clk6" style={{cursor:"pointer"}}>来自 盈都B座生活群1（2F）</span>
                  </div>

                  <ChatMsg name="钱若霖" av="钱" time="2025年12月18日 16:20"
                    msg="2楼的 Wi-Fi 连接不上了，我的笔记本电脑和手机都连不上，显示无法获取IP地址"/>

                  <ChatMsg name="王小明" av="王" time="2025年12月18日 16:22"
                    msg="我也一样，刚才还好好的，突然就断了"/>

                  <ChatMsg name="李小红" av="李" time="2025年12月18日 16:23"
                    msg="我在2楼会议室，也是一样的问题，WiFi信号满格但就是连不上"/>

                  {/* Bot */}
                  <div style={{display:"flex",gap:10,marginBottom:16}}>
                    <div style={{width:32,height:32,borderRadius:"50%",background:"#ff7a00",
                      display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <span style={{fontSize:9,color:"#fff",fontWeight:700,fontFamily:"var(--f-m12-fam)"}}>IT</span>
                    </div>
                    <div style={{flex:1}}>
                      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                        <span className="m14 ct1">IT Service</span>
                        <span className="r12" style={{padding:"1px 6px",borderRadius:8,
                          background:"var(--f2)",color:"var(--t3)"}}>机器人</span>
                        <time className="r12 ct3">2025年12月18日 16:25</time>
                      </div>
                      <div style={{background:"var(--f1)",border:"1px solid var(--bd2)",
                        borderRadius:8,padding:"12px 16px"}}>
                        <p className="r14 ct1" style={{margin:"0 0 8px",lineHeight:1.7}}>
                          收到您的反馈，2楼WiFi连接问题已收到。技术团队正在排查中，预计15分钟内修复。
                        </p>
                        <p className="r14 ct1" style={{margin:"0 0 8px",lineHeight:1.7}}>
                          临时解决方案：
                        </p>
                        <ul className="r14 ct1" style={{paddingLeft:16,margin:"0 0 8px",lineHeight:1.7}}>
                          <li>尝试重启设备的WiFi开关</li>
                          <li>如果有有线网络，可以先使用有线连接</li>
                          <li>稍后再尝试连接WiFi</li>
                        </ul>
                        <p className="r14 ct3" style={{margin:0}}>---</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Input bar */}
                <div style={{borderTop:"1px solid var(--bd2)",padding:"8px 16px",
                  display:"flex",alignItems:"center",gap:10,flexShrink:0,position:"sticky",bottom:0,background:"var(--bg1)"}}>
                  <div style={{flex:1,height:36,borderRadius:18,border:"1px solid var(--bd2)",
                    background:"var(--f1)",display:"flex",alignItems:"center",padding:"0 16px",
                    boxShadow:"0 1px 2px rgba(0,0,0,0.05)"}}>
                    <span className="r14 ct4">沟通时请保持"公开可接受"</span>
                  </div>
                  <div style={{display:"flex",gap:12,alignItems:"center"}}>
                    {["Aa","☺","@","✂","⊕","⛶"].map((ic,i)=>(
                      <button key={i} style={{fontSize:14,color:"var(--t3)",display:"flex",alignItems:"center"}}>{ic}</button>
                    ))}
                  </div>
                  <button style={{width:36,height:36,borderRadius:"50%",background:"var(--pr6)",
                    display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 1px 3px rgba(41,98,255,0.3)"}}>
                    <ISend/>
                  </button>
                </div>
              </div>
              <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <h2 className="m14 ct1" style={{margin:"0 0 16px", textAlign:"center"}}>Copilot</h2>
              </div>
            </div>
          </>
        );
      default:
        return (
          <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <p className="r14 ct3">暂无会话详情</p>
          </div>
        );
    }
  };

  return (
    <div style={{flex:1,width:0,display:"flex",flexDirection:"column"}}>
      {renderChatContent()}
    </div>
  );
};

const ChatMsg = ({name,av,time,msg,reactions,sm}) => (
  <div style={{display:"flex",gap:10,marginBottom:sm?6:14}}>
    <Av c={av} name={name} sz={sm?24:32}/>
    <div style={{flex:1}}>
      <div style={{display:"flex",alignItems:"baseline",gap:8,marginBottom:3}}>
        <span className={sm?"r12 ct1":"m14 ct1"}>{name}</span>
        <time className="r12 ct3">{time}</time>
      </div>
      <div className={sm?"r12 ct1":"r14 ct1"} style={{lineHeight:1.6}}>{msg}</div>
      {reactions&&(
        <div style={{marginTop:6,display:"flex",gap:6}}>
          {reactions.map((r,i)=>(
            <span key={i} className="r12" style={{padding:"2px 8px",
              background:"#fff7e6",border:"1px solid #ffe7ba",
              borderRadius:10,color:"#d46b08",cursor:"pointer"}}>
              {r.e} {r.l}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

// ── Screen ─────────────────────────────────────────────────────────────────────
export const Screen = () => {
  // 页面状态管理
  const [currentPage, setCurrentPage] = useState('dashboard'); // dashboard 或 newPage
  // 导航状态管理
  const [activeNavTab, setActiveNavTab] = useState('tab1'); // tab1 或 tab2

  // 处理页面切换
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  // 处理导航标签切换
  const handleNavTabChange = (tab) => {
    setActiveNavTab(tab);
  };

  return (
    <>
      <G/>
      <div style={{
        background:"var(--bg1)",
        width:"100%",minWidth:1440,minHeight:"100vh",
        display:"flex",
        fontFamily:"var(--f-r14-fam)",
        fontSize:"var(--f-r14-sz)",
        overflow:"hidden",
        position:"fixed",
        top:0,
        left:0,
        right:0,
        bottom:0,
      }}>
        <LeftSidebar onPageChange={handlePageChange} activeNavTab={activeNavTab} onNavTabChange={handleNavTabChange}/>
        {currentPage === 'dashboard' ? (
          <>
            {/* Tab 1 的视图 */}
            <div style={{ display: activeNavTab === 'tab1' ? 'contents' : 'none' }}>
              <WorkspaceContent currentRole="tab1" />
            </div>
            {/* Tab 2 的视图 */}
            <div style={{ display: activeNavTab === 'tab2' ? 'contents' : 'none' }}>
              <WorkspaceContent currentRole="tab2" />
            </div>
          </>
        ) : (
          // 新页面框架，保留页面结构但不显示用户卡片
          <div style={{flex:1,display:"flex",flexDirection:"column"}}>
            <header style={{padding:"16px 16px",borderBottom:"1px solid var(--bd2)"}}>
              <h1 className="m16 ct1" style={{margin:0}}>新页面</h1>
            </header>
            <main style={{flex:1,display:"flex",padding:24,alignItems:"center",justifyContent:"center"}}>
              <p className="r14 ct3" style={{margin:0}}>页面框架已创建，暂无内容</p>
            </main>
          </div>
        )}
      </div>
    </>
  );
};

export default Screen;
