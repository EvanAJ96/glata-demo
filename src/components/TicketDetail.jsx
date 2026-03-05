import { useState, useEffect, useCallback } from "react";
import { oncallData } from "../mockData";

import iconExpandOutlined from "../assets/icon_expand_outlined.svg";
import iconCopyOutlined from "../assets/icon_copy_outlined.svg";
import iconGroupOutlined from "../assets/icon_group_outlined.svg";
import iconLinkOutlined from "../assets/icon_link_outlined.svg";
import imageCommonEmpty from "../assets/image_common_empty.svg";
import serviceTicketIcon from "../assets/服务工单.svg";
import assetReturnIcon from "../assets/资产退库.svg";
import assetRepairIcon from "../assets/资产维修.svg";
import newTicketIcon from "../assets/新建工单.svg";

import diagnosticImg from "../assets/Diagnostic.png";
import questionImg from "../assets/Question.png";
import userinfoImg from "../assets/Userinfo.png";
import siteinfoImg from "../assets/Siteinfo.png";

const IExpand = () => (
  <img src={iconExpandOutlined} alt="expand icon" style={{ width: 14, height: 14 }} />
);

const ICopy = () => (
  <img src={iconCopyOutlined} alt="copy icon" style={{ width: 14, height: 14 }} />
);

const IDown = ({s="var(--t3)"}) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 5l4 4 4-4" stroke={s} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IAssign = () => (
  <img src={iconGroupOutlined} alt="assign icon" style={{ width: 16, height: 16 }} />
);

const IChat = () => (
  <img src={iconLinkOutlined} alt="chat icon" style={{ width: 16, height: 16 }} />
);

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

export const TaskDetailAndCopilotSection = ({ticket, showAddMenu, setShowAddMenu, setShowCreateTicketModal, addButtonRef, menuRef, role, selUser, oncallData}) => {
  const [copilotWidth, setCopilotWidth] = useState(480);
  const [isDragging, setIsDragging] = useState(false);
  const minWidth = 480;
  const [activeCopilotTab, setActiveCopilotTab] = useState('诊断');
  const [activeRightTab, setActiveRightTab] = useState('诊断');

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    
    const container = document.querySelector('.task-detail-copilot-container');
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    const newCopilotWidth = containerRect.width - (e.clientX - containerRect.left);
    
    if (newCopilotWidth >= minWidth && (containerRect.width - newCopilotWidth) >= minWidth) {
      setCopilotWidth(newCopilotWidth);
    }
  }, [isDragging, setCopilotWidth]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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

  const getUserData = () => {
    if (role === 'tab2' && ticket.id.startsWith('IT-')) {
      return oncallData.find(user => 
        user.tickets.some(t => t.id === ticket.id)
      );
    }
    return selUser;
  };
  
  const userData = getUserData();

  const getHandler = () => {
    if (ticket.handler) return ticket.handler;
    if (role === 'tab2' && ticket.id.startsWith('IT-')) {
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
    <div style={{flex:1,width:0,display:"flex",flexDirection:"column",background:"var(--bg1)"}}>
      <header style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",
        padding:"12px 16px",flexShrink:0,borderBottom:"1px solid var(--bd2)",height:76}}>
        <div style={{display:"flex",flexDirection:"column",gap:6,minWidth:0,flex:1,marginRight:16}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:12}}>
            <h1 className="m16 ct1" style={{margin:0}}>
              {ticket.title}
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
              工单来源：{ticket.src === "话题群" || ticket.src === "邮件" ? ticket.src : (role === 'tab2' && ticket.id.startsWith('IT-') ? 'Lark 值班号' : ticket.src)}
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

      {role === 'tab1' && ticket?.src !== "话题群" && ticket?.src !== "邮件" ? (
        <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            padding: "0 16px 0 16px",
            borderBottom: "1px solid var(--bd2)",
            height: 48
          }}>
            {[
              {k: '诊断', icon: 'diagnosis'},
              {k: '问答', icon: 'qa'},
              {k: '用户信息', icon: 'userInfo', tag: '近期有差评'},
              {k: '职场信息', icon: 'workplace'}
            ].map(tab => (
              <button
                key={tab.k}
                onClick={() => setActiveCopilotTab(tab.k)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "12px 0",
                  fontSize: 14,
                  fontWeight: activeCopilotTab === tab.k ? 500 : 400,
                  color: activeCopilotTab === tab.k ? "#2962FF" : "#4E5969",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  borderBottom: activeCopilotTab === tab.k ? "2px solid #2962FF" : "2px solid transparent",
                  transition: "all 0.2s",
                  height: 48
                }}
              >
                {tab.icon === 'diagnosis' && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.80013 1.46584C2.06375 1.46584 1.4668 2.0628 1.4668 2.79918V5.79918C1.4668 6.53555 2.06375 7.13251 2.80013 7.13251H5.80013C6.53651 7.13251 7.13346 6.53555 7.13346 5.79918V2.79918C7.13346 2.0628 6.53651 1.46584 5.80013 1.46584H2.80013ZM2.80013 2.79918H5.80013V5.79918H2.80013V2.79918ZM2.80013 8.86688C2.06375 8.86688 1.4668 9.46384 1.4668 10.2002V13.2002C1.4668 13.9366 2.06375 14.5336 2.80013 14.5336H5.80013C6.53651 14.5336 7.13346 13.9366 7.13346 13.2002V10.2002C7.13346 9.46384 6.53651 8.86688 5.80013 8.86688H2.80013ZM2.80013 10.2002H5.80013V13.2002H2.80013V10.2002ZM10.1999 8.86688C9.46349 8.86688 8.86654 9.46384 8.86654 10.2002V13.2007C8.86654 13.9371 9.46349 14.5341 10.1999 14.5341H13.2004C13.9368 14.5341 14.5337 13.9371 14.5337 13.2007V10.2002C14.5337 9.46384 13.9368 8.86688 13.2004 8.86688H10.1999ZM10.1999 10.2002H13.2004V13.2007H10.1999V10.2002Z" fill="currentColor"/>
                    <path d="M12.2401 1.39923C12.0431 0.866921 11.2902 0.866922 11.0932 1.39923L10.5532 2.85865C10.4913 3.026 10.3593 3.15795 10.192 3.21988L8.73257 3.75991C8.20025 3.95689 8.20026 4.70978 8.73257 4.90675L10.192 5.44679C10.3593 5.50871 10.4913 5.64066 10.5532 5.80802L11.0932 7.26743C11.2902 7.79974 12.0431 7.79974 12.2401 7.26743L12.7801 5.80802C12.842 5.64066 12.974 5.50871 13.1414 5.44679L14.6008 4.90675C15.1331 4.70978 15.1331 3.95688 14.6008 3.75991L13.1414 3.21988C12.974 3.15795 12.842 3.026 12.7801 2.85865L12.2401 1.39923Z" fill="currentColor"/>
                  </svg>
                )}
                {tab.icon === 'qa' && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.78353 1.48311C4.06474 1.48316 1.0498 4.49804 1.0498 8.21684C1.04985 9.82274 1.61289 11.2981 2.55111 12.4551L1.74642 13.2911C1.14723 13.9131 1.58846 14.9498 2.45215 14.9499H7.78353C11.5022 14.9498 14.5165 11.9355 14.5166 8.21684C14.5166 7.32423 14.3411 6.47294 14.0257 5.6934C14.0093 5.70773 13.993 5.72225 13.9769 5.73702C13.732 5.96192 13.5338 6.23307 13.3936 6.53455C13.2533 6.8362 13.1734 7.1631 13.1592 7.49548C13.1548 7.59748 13.1584 7.69946 13.1663 7.80082H13.165C13.1755 7.93818 13.1833 8.07679 13.1833 8.21684C13.1832 11.1991 10.7658 13.6165 7.78353 13.6166H3.28418L3.94043 12.9356C4.19106 12.6753 4.18875 12.2627 3.93522 12.0052C2.97478 11.0298 2.38319 9.69306 2.38314 8.21684C2.38314 5.23442 4.80112 2.81649 7.78353 2.81645C7.9357 2.81645 8.08636 2.82428 8.23535 2.83663C8.52883 2.82336 8.81823 2.7598 9.09017 2.64718C9.39733 2.51992 9.67665 2.3334 9.91178 2.09835C9.97734 2.03279 10.0382 1.96276 10.096 1.89067C9.37492 1.62695 8.59597 1.48314 7.78353 1.48311Z" fill="currentColor"/>
                    <path d="M12.2835 1.05017C12.3572 1.05017 12.4164 1.1101 12.4202 1.18363C12.4874 2.47652 13.5238 3.51301 14.8167 3.58012C14.8903 3.58393 14.9502 3.6432 14.9502 3.71684C14.9502 3.79048 14.8903 3.84974 14.8167 3.85356C13.5238 3.92066 12.4874 4.95715 12.4202 6.25004C12.4164 6.32358 12.3572 6.3835 12.2835 6.3835C12.2099 6.3835 12.1506 6.32358 12.1468 6.25004C12.0797 4.95715 11.0432 3.92066 9.75033 3.85356C9.67679 3.84974 9.61686 3.79048 9.61686 3.71684C9.61686 3.6432 9.67679 3.58393 9.75033 3.58012C11.0432 3.51301 12.0797 2.47652 12.1468 1.18363C12.1506 1.1101 12.2099 1.05017 12.2835 1.05017Z" fill="currentColor"/>
                  </svg>
                )}
                {tab.icon === 'userInfo' && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33341 4.66671C3.33341 6.50771 4.82675 8.00004 6.66675 8.00004C8.50675 8.00004 10.0001 6.50771 10.0001 4.66671C10.0001 2.82571 8.50675 1.33337 6.66675 1.33337C4.82675 1.33337 3.33341 2.82571 3.33341 4.66671ZM8.66675 4.66671C8.66675 5.77092 7.77078 6.66671 6.66675 6.66671C5.56272 6.66671 4.66675 5.77092 4.66675 4.66671C4.66675 3.56249 5.56272 2.66671 6.66675 2.66671C7.77078 2.66671 8.66675 3.56249 8.66675 4.66671Z" fill="currentColor"/>
                    <path d="M4.66675 8.66671C2.45675 8.66671 0.666748 10.4577 0.666748 12.6667V13.6667C0.666748 14.4 1.26675 15 2.00008 15H11.3334C12.0667 15 12.6667 14.4 12.6667 13.6667V12.6667C12.6667 10.4577 10.8767 8.66671 8.66675 8.66671H4.66675ZM8.66675 10C10.14 10 11.3334 11.1937 11.3334 12.6667V13.6924H2.00008V12.6667C2.00008 11.1937 3.19352 10 4.66675 10H8.66675Z" fill="currentColor"/>
                    <path d="M11.3334 6.66671C11.3334 6.29852 11.6319 6.00004 12.0001 6.00004H14.6667C15.0349 6.00004 15.3334 6.29852 15.3334 6.66671C15.3334 7.0349 15.0349 7.33337 14.6667 7.33337H12.0001C11.6319 7.33337 11.3334 7.0349 11.3334 6.66671Z" fill="currentColor"/>
                    <path d="M13.3334 9.33337C13.3334 8.96518 13.6319 8.66671 14.0001 8.66671H14.6667C15.0349 8.66671 15.3334 8.96518 15.3334 9.33337C15.3334 9.70156 15.0349 10 14.6667 10H14.0001C13.6319 10 13.3334 9.70156 13.3334 9.33337Z" fill="currentColor"/>
                  </svg>
                )}
                {tab.icon === 'workplace' && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.66667 4.99996C4.66667 4.81586 4.81591 4.66663 5 4.66663H5.66667C5.85076 4.66663 6 4.81586 6 4.99996V5.66663C6 5.85072 5.85076 5.99996 5.66667 5.99996H5C4.81591 5.99996 4.66667 5.85072 4.66667 5.66663V4.99996Z" fill="currentColor"/>
                    <path d="M7.66667 4.66663C7.48257 4.66663 7.33333 4.81586 7.33333 4.99996V5.66663C7.33333 5.85072 7.48257 5.99996 7.66667 5.99996H8.33333C8.51743 5.99996 8.66667 5.85072 8.66667 5.66663V4.99996C8.66667 4.81586 8.51743 4.66663 8.33333 4.66663H7.66667Z" fill="currentColor"/>
                    <path d="M4.66667 7.66663C4.66667 7.48253 4.81591 7.33329 5 7.33329H5.66667C5.85076 7.33329 6 7.48253 6 7.66663V8.33329C6 8.51739 5.85076 8.66663 5.66667 8.66663H5C4.81591 8.66663 4.66667 8.51739 4.66667 8.33329V7.66663Z" fill="currentColor"/>
                    <path d="M7.66667 7.33329C7.48257 7.33329 7.33333 7.48253 7.33333 7.66663V8.33329C7.33333 8.51739 7.48257 8.66663 7.66667 8.66663H8.33333C8.51743 8.66663 8.66667 8.51739 8.66667 8.33329V7.66663C8.66667 7.48253 8.51743 7.33329 8.33333 7.33329H7.66667Z" fill="currentColor"/>
                    <path d="M3.33333 15.3333C2.59695 15.3333 2 14.7363 2 14V1.99996C2 1.26358 2.59695 0.666626 3.33333 0.666626H10C10.7364 0.666626 11.3333 1.26358 11.3333 1.99996V3.33329H12.6667C13.403 3.33329 14 3.93025 14 4.66663V14C14 14.7363 13.403 15.3333 12.6667 15.3333H3.33333ZM10 1.99996H3.33333L3.33333 14H5.33333V12C5.33333 11.6318 5.63181 11.3333 6 11.3333H7.33333C7.70152 11.3333 8 11.6318 8 12V14H10V1.99996ZM11.3333 14H12.6667V4.66663H11.3333V14Z" fill="currentColor"/>
                  </svg>
                )}
                <span>{tab.k}</span>
                {tab.tag && (
                  <span style={{
                    display: "flex",
                    padding: "0 4px",
                    alignItems: "center",
                    gap: 4,
                    borderRadius: 4,
                    background: "var(--color-arco-red-1, #FFECE8)",
                    color: "var(--color-arco-red-7, #CB272D)",
                    fontFamily: '"PingFang SC"',
                    fontSize: 12,
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "20px"
                  }}>
                    {tab.tag}
                  </span>
                )}
              </button>
            ))}
          </div>
          
          <div style={{flex:1,overflowY:"auto",padding:"0 24px"}}>
            {activeCopilotTab === '诊断' ? (
              <div style={{display: "flex", justifyContent: "center"}}>
                <img 
                  src={diagnosticImg} 
                  alt="诊断占位" 
                  style={{width: 800, margin: "24px auto"}}
                />
              </div>
            ) : activeCopilotTab === '问答' ? (
              <div style={{display: "flex", justifyContent: "center"}}>
                <img 
                  src={questionImg} 
                  alt="问答占位" 
                  style={{width: 800, margin: "24px auto"}}
                />
              </div>
            ) : activeCopilotTab === '用户信息' ? (
              <div style={{display: "flex", justifyContent: "center"}}>
                <img 
                  src={userinfoImg} 
                  alt="用户信息占位" 
                  style={{width: 800, margin: "24px auto"}}
                />
              </div>
            ) : activeCopilotTab === '职场信息' ? (
              <div style={{display: "flex", justifyContent: "center"}}>
                <img 
                  src={siteinfoImg} 
                  alt="职场信息占位" 
                  style={{width: 800, margin: "24px auto"}}
                />
              </div>
            ) : (
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                color: "#86909C",
                fontSize: 14
              }}>
                暂无内容
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="task-detail-copilot-container" style={{flex:1,display:"flex",overflow:"hidden"}}>
          <div style={{flex:1,minWidth:minWidth,display:"flex",flexDirection:"column",overflow:"hidden"}}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: "0 24px 0 24px",
              minHeight: 48
            }}></div>
            <div style={{flex:1,overflowY:"auto",padding:"24px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              <h2 className="m14 ct1" style={{margin:"0 0 16px", textAlign:"center", fontWeight: 400}}>
                {ticket?.src === "话题群" ? "群聊详情" : 
                 ticket?.src === "邮件" ? "邮件详情" : 
                 role === 'tab2' && ticket.id.startsWith('IT-') ? "会话详情" : "工单详情"}
              </h2>
            </div>
          </div>
          <div 
            style={{
              width: 10,
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
          <div style={{width:copilotWidth,minWidth:minWidth,display:"flex",flexDirection:"column",overflow:"hidden"}}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: "0 20px 0 20px",
              borderBottom: "1px solid var(--bd2)",
              height: 48
            }}>
              {[
                {k: '诊断', icon: 'diagnosis'},
                {k: '问答', icon: 'qa'},
                {k: '用户信息', icon: 'userInfo', tag: '近期有差评'},
                {k: '职场信息', icon: 'workplace'}
              ].map(tab => (
                <button
                  key={tab.k}
                  onClick={() => setActiveRightTab(tab.k)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "12px 0",
                    fontSize: 14,
                    fontWeight: activeRightTab === tab.k ? 500 : 400,
                    color: activeRightTab === tab.k ? "#2962FF" : "#4E5969",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    borderBottom: activeRightTab === tab.k ? "2px solid #2962FF" : "2px solid transparent",
                    transition: "all 0.2s",
                    height: 48
                  }}
                >
                  {tab.icon === 'diagnosis' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.80013 1.46584C2.06375 1.46584 1.4668 2.0628 1.4668 2.79918V5.79918C1.4668 6.53555 2.06375 7.13251 2.80013 7.13251H5.80013C6.53651 7.13251 7.13346 6.53555 7.13346 5.79918V2.79918C7.13346 2.0628 6.53651 1.46584 5.80013 1.46584H2.80013ZM2.80013 2.79918H5.80013V5.79918H2.80013V2.79918ZM2.80013 8.86688C2.06375 8.86688 1.4668 9.46384 1.4668 10.2002V13.2002C1.4668 13.9366 2.06375 14.5336 2.80013 14.5336H5.80013C6.53651 14.5336 7.13346 13.9366 7.13346 13.2002V10.2002C7.13346 9.46384 6.53651 8.86688 5.80013 8.86688H2.80013ZM2.80013 10.2002H5.80013V13.2002H2.80013V10.2002ZM10.1999 8.86688C9.46349 8.86688 8.86654 9.46384 8.86654 10.2002V13.2007C8.86654 13.9371 9.46349 14.5341 10.1999 14.5341H13.2004C13.9368 14.5341 14.5337 13.9371 14.5337 13.2007V10.2002C14.5337 9.46384 13.9368 8.86688 13.2004 8.86688H10.1999ZM10.1999 10.2002H13.2004V13.2007H10.1999V10.2002Z" fill="currentColor"/>
                      <path d="M12.2401 1.39923C12.0431 0.866921 11.2902 0.866922 11.0932 1.39923L10.5532 2.85865C10.4913 3.026 10.3593 3.15795 10.192 3.21988L8.73257 3.75991C8.20025 3.95689 8.20026 4.70978 8.73257 4.90675L10.192 5.44679C10.3593 5.50871 10.4913 5.64066 10.5532 5.80802L11.0932 7.26743C11.2902 7.79974 12.0431 7.79974 12.2401 7.26743L12.7801 5.80802C12.842 5.64066 12.974 5.50871 13.1414 5.44679L14.6008 4.90675C15.1331 4.70978 15.1331 3.95688 14.6008 3.75991L13.1414 3.21988C12.974 3.15795 12.842 3.026 12.7801 2.85865L12.2401 1.39923Z" fill="currentColor"/>
                    </svg>
                  )}
                  {tab.icon === 'qa' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.78353 1.48311C4.06474 1.48316 1.0498 4.49804 1.0498 8.21684C1.04985 9.82274 1.61289 11.2981 2.55111 12.4551L1.74642 13.2911C1.14723 13.9131 1.58846 14.9498 2.45215 14.9499H7.78353C11.5022 14.9498 14.5165 11.9355 14.5166 8.21684C14.5166 7.32423 14.3411 6.47294 14.0257 5.6934C14.0093 5.70773 13.993 5.72225 13.9769 5.73702C13.732 5.96192 13.5338 6.23307 13.3936 6.53455C13.2533 6.8362 13.1734 7.1631 13.1592 7.49548C13.1548 7.59748 13.1584 7.69946 13.1663 7.80082H13.165C13.1755 7.93818 13.1833 8.07679 13.1833 8.21684C13.1832 11.1991 10.7658 13.6165 7.78353 13.6166H3.28418L3.94043 12.9356C4.19106 12.6753 4.18875 12.2627 3.93522 12.0052C2.97478 11.0298 2.38319 9.69306 2.38314 8.21684C2.38314 5.23442 4.80112 2.81649 7.78353 2.81645C7.9357 2.81645 8.08636 2.82428 8.23535 2.83663C8.52883 2.82336 8.81823 2.7598 9.09017 2.64718C9.39733 2.51992 9.67665 2.3334 9.91178 2.09835C9.97734 2.03279 10.0382 1.96276 10.096 1.89067C9.37492 1.62695 8.59597 1.48314 7.78353 1.48311Z" fill="currentColor"/>
                      <path d="M12.2835 1.05017C12.3572 1.05017 12.4164 1.1101 12.4202 1.18363C12.4874 2.47652 13.5238 3.51301 14.8167 3.58012C14.8903 3.58393 14.9502 3.6432 14.9502 3.71684C14.9502 3.79048 14.8903 3.84974 14.8167 3.85356C13.5238 3.92066 12.4874 4.95715 12.4202 6.25004C12.4164 6.32358 12.3572 6.3835 12.2835 6.3835C12.2099 6.3835 12.1506 6.32358 12.1468 6.25004C12.0797 4.95715 11.0432 3.92066 9.75033 3.85356C9.67679 3.84974 9.61686 3.79048 9.61686 3.71684C9.61686 3.6432 9.67679 3.58393 9.75033 3.58012C11.0432 3.51301 12.0797 2.47652 12.1468 1.18363C12.1506 1.1101 12.2099 1.05017 12.2835 1.05017Z" fill="currentColor"/>
                    </svg>
                  )}
                  {tab.icon === 'userInfo' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33341 4.66671C3.33341 6.50771 4.82675 8.00004 6.66675 8.00004C8.50675 8.00004 10.0001 6.50771 10.0001 4.66671C10.0001 2.82571 8.50675 1.33337 6.66675 1.33337C4.82675 1.33337 3.33341 2.82571 3.33341 4.66671ZM8.66675 4.66671C8.66675 5.77092 7.77078 6.66671 6.66675 6.66671C5.56272 6.66671 4.66675 5.77092 4.66675 4.66671C4.66675 3.56249 5.56272 2.66671 6.66675 2.66671C7.77078 2.66671 8.66675 3.56249 8.66675 4.66671Z" fill="currentColor"/>
                      <path d="M4.66675 8.66671C2.45675 8.66671 0.666748 10.4577 0.666748 12.6667V13.6667C0.666748 14.4 1.26675 15 2.00008 15H11.3334C12.0667 15 12.6667 14.4 12.6667 13.6667V12.6667C12.6667 10.4577 10.8767 8.66671 8.66675 8.66671H4.66675ZM8.66675 10C10.14 10 11.3334 11.1937 11.3334 12.6667V13.6924H2.00008V12.6667C2.00008 11.1937 3.19352 10 4.66675 10H8.66675Z" fill="currentColor"/>
                      <path d="M11.3334 6.66671C11.3334 6.29852 11.6319 6.00004 12.0001 6.00004H14.6667C15.0349 6.00004 15.3334 6.29852 15.3334 6.66671C15.3334 7.0349 15.0349 7.33337 14.6667 7.33337H12.0001C11.6319 7.33337 11.3334 7.0349 11.3334 6.66671Z" fill="currentColor"/>
                      <path d="M13.3334 9.33337C13.3334 8.96518 13.6319 8.66671 14.0001 8.66671H14.6667C15.0349 8.66671 15.3334 8.96518 15.3334 9.33337C15.3334 9.70156 15.0349 10 14.6667 10H14.0001C13.6319 10 13.3334 9.70156 13.3334 9.33337Z" fill="currentColor"/>
                    </svg>
                  )}
                  {tab.icon === 'workplace' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.66667 4.99996C4.66667 4.81586 4.81591 4.66663 5 4.66663H5.66667C5.85076 4.66663 6 4.81586 6 4.99996V5.66663C6 5.85072 5.85076 5.99996 5.66667 5.99996H5C4.81591 5.99996 4.66667 5.85072 4.66667 5.66663V4.99996Z" fill="currentColor"/>
                      <path d="M7.66667 4.66663C7.48257 4.66663 7.33333 4.81586 7.33333 4.99996V5.66663C7.33333 5.85072 7.48257 5.99996 7.66667 5.99996H8.33333C8.51743 5.99996 8.66667 5.85072 8.66667 5.66663V4.99996C8.66667 4.81586 8.51743 4.66663 8.33333 4.66663H7.66667Z" fill="currentColor"/>
                      <path d="M4.66667 7.66663C4.66667 7.48253 4.81591 7.33329 5 7.33329H5.66667C5.85076 7.33329 6 7.48253 6 7.66663V8.33329C6 8.51739 5.85076 8.66663 5.66667 8.66663H5C4.81591 8.66663 4.66667 8.51739 4.66667 8.33329V7.66663Z" fill="currentColor"/>
                      <path d="M7.66667 7.33329C7.48257 7.33329 7.33333 7.48253 7.33333 7.66663V8.33329C7.33333 8.51739 7.48257 8.66663 7.66667 8.66663H8.33333C8.51743 8.66663 8.66667 8.51739 8.66667 8.33329V7.66663C8.66667 7.48253 8.51743 7.33329 8.33333 7.33329H7.66667Z" fill="currentColor"/>
                      <path d="M3.33333 15.3333C2.59695 15.3333 2 14.7363 2 14V1.99996C2 1.26358 2.59695 0.666626 3.33333 0.666626H10C10.7364 0.666626 11.3333 1.26358 11.3333 1.99996V3.33329H12.6667C13.403 3.33329 14 3.93025 14 4.66663V14C14 14.7363 13.403 15.3333 12.6667 15.3333H3.33333ZM10 1.99996H3.33333L3.33333 14H5.33333V12C5.33333 11.6318 5.63181 11.3333 6 11.3333H7.33333C7.70152 11.3333 8 11.6318 8 12V14H10V1.99996ZM11.3333 14H12.6667V4.66663H11.3333V14Z" fill="currentColor"/>
                    </svg>
                  )}
                  <span>{tab.k}</span>
                  {tab.tag && (
                    <span style={{
                      display: "flex",
                      padding: "0 4px",
                      alignItems: "center",
                      gap: 4,
                      borderRadius: 4,
                      background: "var(--color-arco-red-1, #FFECE8)",
                      color: "var(--color-arco-red-7, #CB272D)",
                      fontFamily: '"PingFang SC"',
                      fontSize: 12,
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "20px"
                    }}>
                      {tab.tag}
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div style={{flex:1,overflowY:"auto",padding:"24px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              <h2 className="m14 ct1" style={{margin:"0 0 16px", textAlign:"center", fontWeight: 400}}>Copilot信息</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
