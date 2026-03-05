import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mixedSessionList, oncallData, AV_PAL } from "../mockData";

// 导入头像图片
import avatar1 from "../assets/头像1.png";
import avatar2 from "../assets/头像2.png";
import avatar3 from "../assets/头像3.png";
import avatar4 from "../assets/头像4.png";
import avatar5 from "../assets/头像5.png";
import avatar6 from "../assets/头像6.png";
import avatar7 from "../assets/头像7.png";
import avatar8 from "../assets/头像8.png";
import avatar9 from "../assets/头像9.png";
import avatar10 from "../assets/头像10.png";
import avatar11 from "../assets/头像11.png";
import avatar12 from "../assets/头像12.png";
import avatar13 from "../assets/头像13.png";
import avatar14 from "../assets/头像14.png";
import avatar15 from "../assets/头像15.png";
import avatar16 from "../assets/头像16.png";
import avatar17 from "../assets/头像17.png";
import avatar18 from "../assets/头像18.png";
import avatar19 from "../assets/头像19.png";
import avatar20 from "../assets/头像20.png";
import avatar21 from "../assets/头像21.png";
import avatar22 from "../assets/头像22.png";
import avatar23 from "../assets/头像23.png";
import avatar24 from "../assets/头像24.png";
import avatar25 from "../assets/头像25.png";
import avatar26 from "../assets/头像26.png";
import avatar27 from "../assets/头像27.png";

import iconAdminOutlined from "../assets/icon_admin_outlined.svg";
import iconMemberAddOutlined from "../assets/icon_member-add_outlined.svg";
import serviceTicketIcon from "../assets/服务工单.svg";
import assetReturnIcon from "../assets/资产退库.svg";
import newTicketIcon from "../assets/新建工单.svg";
import endIcon from "../assets/结束.svg";
import pinIcon from "../assets/置顶.svg";
import linkedGroupImg from "../assets/关联群聊.png";

const importedAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12, avatar13, avatar14, avatar15, avatar16, avatar17, avatar18, avatar19, avatar20, avatar21, avatar22, avatar23, avatar24, avatar25, avatar26, avatar27];

const userIndexMap = new Map();
let userCounter = 0;

const getUserAvatar = (name) => {
  if (!userIndexMap.has(name)) {
    userIndexMap.set(name, userCounter++);
  }
  
  const index = userIndexMap.get(name);
  
  if (index < importedAvatars.length) {
    return importedAvatars[index];
  }
  
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
};

const avc = c => AV_PAL[c] ?? {bg:"#f0f0f0",fg:"#595959"};

const Av = ({c, name, sz=32}) => {
  const avatar = getUserAvatar(name);
  if (avatar) {
    return (
      <div style={{width:sz,height:sz,borderRadius:"50%",overflow:"hidden",flexShrink:0,transition:"all 0.1s ease-out",transformOrigin:"top left"}}>
        <img alt={name} src={avatar} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
      </div>
    );
  }
  const pal = avc(c);
  return (
    <div style={{width:sz,height:sz,borderRadius:"50%",background:pal.bg,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
      <span className="m12" style={{color:pal.fg}}>{c}</span>
    </div>
  );
};

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

const ITime = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="5.5" stroke="var(--t3)" strokeWidth="1.1"/>
    <path d="M7 4.2v2.9l2 1.2" stroke="var(--t3)" strokeWidth="1.1" strokeLinecap="round"/>
  </svg>
);

const Badge = ({label, bg, clr}) => (
  <span className="m12" style={{display:"inline-flex",alignItems:"center",
    padding:"0 4px",borderRadius:4,background:bg,color:clr,lineHeight:"20px",
    width: label === "处理中" || label === "待接单" ? "44px" : "auto",
    justifyContent: label === "处理中" || label === "待接单" ? "center" : "flex-start"
  }}>
    {label}
  </span>
);

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

const UserRow = ({user,isExp,selTk,onToggle,onSelTk, setShowCreateTicketModal}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAddMenu, setShowAddMenu] = useState(false);
  
  const hasSelectedTicket = user.tickets?.some(t => t.id === selTk?.id) || selTk?.id === `user-${user.id}`;

  return (
    <div 
      className={`rounded-[8px] transition-colors cursor-pointer ${ 
        hasSelectedTicket 
          ? 'bg-[#F1F6FF]' 
          : isExp 
            ? 'bg-[#F7F8FA]' 
            : 'bg-transparent hover:bg-[#F7F8FA]' 
      }`}
      style={{padding: isExp ? '4px' : '6px 12px'}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
        <button 
          onClick={() => {
            const ticketCount = user.tickets?.length || 0;
            if (ticketCount === 0) {
              onSelTk({ id: `user-${user.id}`, title: user.name, status: "无待办", sBg: "rgba(22,93,255,.12)", sClr: "#1033a3", src: "服务台", noTickets: true }, user.channel);
            } else {
              onToggle();
            }
          }}
          style={{display:"flex",alignItems:"center",
            gap:12,padding: isExp ? "4px 12px 8px" : 0,width:"100%",background:"transparent",border:"none",cursor:"pointer"}}>
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
                  <div style={{flexShrink:0, display: 'flex', alignItems: 'center', gap: 12}}>
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
                    <img 
                      src={pinIcon} 
                      alt="置顶" 
                      style={{ width: 16, height: 16, transition: 'filter 0.2s' }}
                      onMouseEnter={(e) => {
                        e.target.style.filter = 'invert(30%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(80%) contrast(80%)';
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
                    setShowAddMenu(false);
                    setShowCreateTicketModal(true);
                  }}
                >
                  <img src={assetReturnIcon} alt="资产维修" style={{ width: 16, height: 16, marginRight: 8, filter: "invert(15%) sepia(0%) saturate(10%) hue-rotate(340deg) brightness(90%) contrast(90%)" }} />
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

const OncallRow = ({item, selTk, onSelTk}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', position: 'relative'}}>
      <div 
        className={`rounded-[8px] transition-colors cursor-pointer ${selTk?.id === item.tickets?.[0]?.id ? 'bg-[#F1F6FF]' : 'bg-transparent hover:bg-[#F7F8FA]'}`}
        style={{padding:'6px 12px'}}
        onClick={()=>onSelTk(selTk?.id === item.tickets?.[0]?.id ? null : item.tickets?.[0], item.channel)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{display:"flex",alignItems:"center",gap:12,width:"100%"}}>
          <Av c={item.av} name={item.name} sz={36}/>
          <div style={{display:"flex",flexDirection:"column",gap:2,flex:1,minWidth:0}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div style={{display:"flex",alignItems:"center",gap:4,flex:1,minWidth:0}}>
                <span className="m14 ct1" style={{fontWeight:400}}>{item.name}</span>
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
              {isHovered ? (
                <div style={{flexShrink:0, display: 'flex', alignItems: 'center', marginLeft: 8}}>
                  <img 
                    src={pinIcon} 
                    alt="置顶" 
                    style={{ width: 16, height: 16, transition: 'filter 0.2s' }}
                    onMouseEnter={(e) => {
                      e.target.style.filter = 'invert(30%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(80%) contrast(80%)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.filter = 'none';
                    }}
                  />
                </div>
              ) : (
                <span className="r12 ct4" style={{flexShrink:0, marginLeft: 8}}>{item.time}</span>
              )}
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
              <span className="r12 ct3" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
                {item.latestMessage}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {item.linkedGroup && (
        <div style={{marginLeft: '30px', position: 'relative'}}>
          <div style={{
            position: 'absolute',
            left: '-10px',
            top: '0px',
            width: '10px',
            height: '20px',
            borderLeft: '1.5px solid #C9CDD4',
            borderBottom: '1.5px solid #C9CDD4',
            borderRadius: '0 0 0 8px',
            fontSize: '12px',
            color: 'rgb(134, 144, 156)'
          }} />
          
          <div 
            className={`rounded-[8px] transition-colors cursor-pointer bg-transparent hover:bg-[#F7F8FA]`}
            style={{padding:'6px 12px', marginTop: '4px', marginBottom: '0px'}}
          >
            <div style={{display:"flex",alignItems:"center",gap:12,width:"100%"}}>
              <div style={{width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={linkedGroupImg} alt="关联群聊" style={{width: 36, height: 36}} />
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:2,flex:1,minWidth:0}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <div style={{display:"flex",alignItems:"center",gap:4,flex:1,minWidth:0}}>
                    <span className="m14 ct1" style={{fontWeight:400}}>{item.linkedGroup.title}</span>
                  </div>
                  <span className="r12 ct4" style={{flexShrink:0}}>{item.linkedGroup.time}</span>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                  <span className="r12 ct3" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
                    {item.linkedGroup.latestMessage}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
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
              <div style={{flexShrink:0, display: 'flex', alignItems: 'center'}}>
                <img 
                  src="/置顶.svg" 
                  alt="置顶" 
                  style={{ width: 16, height: 16, transition: 'filter 0.2s' }}
                  onMouseEnter={(e) => {
                    e.target.style.filter = 'invert(30%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(80%) contrast(80%)';
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

export const UserTaskListSection = ({activeTab,onTabChange,selUser,onSelUser,selTk,onSelTk,tabMemory,setTabMemory, setShowCreateTicketModal, role, oncallData}) => {
  const tabs = role === 'tab2' ? 
    [{k:"all",l:"全部"},{k:"oncall",l:"值班号"},{k:"topic",l:"话题群"},{k:"mail",l:"邮件"}]
    : [{k:"all",l:"全部"},{k:"service",l:"服务台"},{k:"topic",l:"话题群"},{k:"mail",l:"邮件"}];
  
  const [expandedUsers, setExpandedUsers] = useState({});

  const toggleUser = (userId) => {
    setExpandedUsers(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const filteredData = role === 'tab2' ? 
    [
      ...oncallData.filter(item => {
        if (activeTab === 'all' || activeTab === 'oncall') return item.channel === 'oncall';
        return false;
      }),
      ...mixedSessionList.filter(item => {
        if (activeTab === 'all' || activeTab === 'topic') return item.channel === 'topic';
        return false;
      }),
      ...mixedSessionList.filter(item => {
        if (activeTab === 'all' || activeTab === 'mail') return item.channel === 'email';
        return false;
      })
    ].sort((a, b) => {
      const typePriority = {
        'oncall': 3,
        'topic': 2,
        'email': 1
      };
      
      if (typePriority[a.channel] !== typePriority[b.channel]) {
        return typePriority[b.channel] - typePriority[a.channel];
      }
      
      const timeToMinutes = (timeStr) => {
        if (!timeStr) return 0;
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + minutes;
      };
      return timeToMinutes(b.time) - timeToMinutes(a.time);
    }) :
    mixedSessionList.filter(item => {
      if (activeTab === 'all') return true;
      if (activeTab === 'service') return item.channel === 'servicedesk';
      if (activeTab === 'topic') return item.channel === 'topic';
      if (activeTab === 'mail') return item.channel === 'email';
      return true;
    }).sort((a, b) => {
      const typePriority = {
        'servicedesk': 3,
        'topic': 2,
        'email': 1
      };
      
      if (typePriority[a.channel] !== typePriority[b.channel]) {
        return typePriority[b.channel] - typePriority[a.channel];
      }
      
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
          <h1 className="m16 ct1" style={{margin:0}}>{role === 'tab1' ? '我的工作台（SD）' : '我的工作台（OSC）'}</h1>
          <button style={{padding:4}} aria-label="管理"><IAdmin/></button>
        </div>
      </header>

      <div style={{padding:"0 16px"}}>
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
            return (
              <OncallRow 
                key={`${item.channel}-${item.id}`}
                item={item}
                selTk={selTk}
                onSelTk={onSelTk}
              />
            );
          } else if (item.channel === 'servicedesk') {
            return (
              <div key={`${item.channel}-${item.id}`}>
                <UserRow user={item}
                  isExp={expandedUsers[item.id]}
                  selTk={selTk}
                  onToggle={()=>toggleUser(item.id)}
                  onSelTk={onSelTk}
                  setShowCreateTicketModal={setShowCreateTicketModal}/>
              </div>
            );
          } else {
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
